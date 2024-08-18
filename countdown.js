// src/countdown.js
import cfonts from 'cfonts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRandomArt } from './ascii-art.js'; // Ensure the path is correct

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logStudyTime = (duration) => {
  const logFilePath = path.join(__dirname, 'study-log.txt');
  const logEntry = `Study session: ${duration} seconds\n`;
  fs.appendFileSync(logFilePath, logEntry, 'utf8');
  console.log('Study time logged.');
};

const getTotalStudyTime = () => {
  const logFilePath = path.join(__dirname, 'study-log.txt');
  if (!fs.existsSync(logFilePath)) return 0;

  const logData = fs.readFileSync(logFilePath, 'utf8');
  const lines = logData.trim().split('\n');
  const totalSeconds = lines.reduce((acc, line) => {
    const match = line.match(/Study session: (\d+) seconds/);
    return acc + (match ? parseInt(match[1], 10) : 0);
  }, 0);
  return totalSeconds;
};

export const startCountdown = (duration, color) => {
  let timer = {
    minutes: Math.floor(duration / 60),
    seconds: duration % 60,
  };
  let isPaused = false;
  let pauseTime = 0;
  let currentArt = getRandomArt();
  let lastArtUpdate = Date.now();

  const startingTime = new Date();
  const endTime = new Date(startingTime.getTime() + duration * 1000);

  const RemainingTime = () => {
    if (!isPaused) {
      if (timer.seconds === 0 && timer.minutes === 0) {
        clearInterval(remaining);
        clearInterval(renderClock);
        clearInterval(artInterval);
        logStudyTime(duration); // Log study time when countdown finishes
        console.clear();
        console.log('Countdown finished!');
        process.stdout.write("\u001B[?25h"); // Show cursor
        return;
      }
      timer.seconds -= 1;
      if (timer.seconds < 0) {
        timer.seconds = 59;
        timer.minutes -= 1;
      }
    }
  };

  const colorRender = () => {
    console.clear();
    cfonts.say(`  ${timer.minutes < 10 ? '0' : ''}${timer.minutes} : ${timer.seconds < 10 ? '0' : ''}${timer.seconds}`, {
      font: 'block', // Change font to a smaller size
      align: 'center',
      colors: [color, 'white'],
      background: 'transparent',
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: '80',
      gradient: false,
    });
    console.log(`\nStart Time: ${startingTime.toLocaleTimeString()}`);
    console.log(`End Time: ${endTime.toLocaleTimeString()}`);
    console.log(`\nTotal Time Studied: ${Math.floor(getTotalStudyTime() / 60)} minutes ${getTotalStudyTime() % 60} seconds`);
  };

  const renderArt = () => {
    console.log(currentArt);
  };

  const remaining = setInterval(() => {
    RemainingTime();
  }, 1000);

  const renderClock = setInterval(() => {
    colorRender();
    renderArt();
  }, 1000); // Update clock and art every second

  // Update ASCII art every 5 minutes
  const artInterval = setInterval(() => {
    const now = Date.now();
    if (now - lastArtUpdate >= 300000) { // 5 minutes in milliseconds
      currentArt = getRandomArt();
      lastArtUpdate = now;
      renderArt(); // Update art display
    }
  }, 1000); // Check every second

  console.clear();
  console.log('Instructions:');
  console.log('Press "p" to pause or resume the timer.');
  console.log('Press "Ctrl+C" to stop the countdown.');

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', (key) => {
    if (key.toString() === 'p') { // Press 'p' to pause or resume
      isPaused = !isPaused;
      if (isPaused) {
        pauseTime = timer.minutes * 60 + timer.seconds;
        console.log('Timer paused.');
      } else {
        console.log('Timer resumed.');
        timer.minutes = Math.floor(pauseTime / 60);
        timer.seconds = pauseTime % 60;
      }
    } else if (key.toString() === '\u0003') { // Ctrl+C to stop
      clearInterval(remaining);
      clearInterval(renderClock);
      clearInterval(artInterval);
      console.clear();
      console.log('Countdown stopped.');
      process.stdout.write("\u001B[?25h"); // Show cursor
      process.exit();
    }
  });
};
