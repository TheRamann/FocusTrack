// src/stopwatch.js
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

export const startStopwatch = (color) => {
  let elapsedSeconds = 0;
  let isPaused = false;
  let pauseTime = 0;
  let currentArt = getRandomArt();
  let lastArtUpdate = Date.now();

  const startingTime = new Date();
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes} : ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const colorRender = () => {
    console.clear();
    cfonts.say(`${formatTime(elapsedSeconds)}`, {
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
    console.log(`\nTotal Time Studied: ${Math.floor(getTotalStudyTime() / 60)} minutes ${getTotalStudyTime() % 60} seconds`);
  };

  const renderArt = () => {
    console.log(currentArt);
  };

  const stopwatchInterval = setInterval(() => {
    if (!isPaused) {
      elapsedSeconds += 1;
      colorRender();
      renderArt();
    }
  }, 1000); // Update both clock and art every second

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
  console.log('Press "p" to pause or resume the stopwatch.');
  console.log('Press "Ctrl+C" to stop the stopwatch.');

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', (key) => {
    if (key.toString() === 'p') { // Press 'p' to pause or resume
      isPaused = !isPaused;
      if (isPaused) {
        pauseTime = elapsedSeconds;
        console.log('Stopwatch paused.');
      } else {
        console.log('Stopwatch resumed.');
        elapsedSeconds = pauseTime;
      }
    } else if (key.toString() === '\u0003') { // Ctrl+C to stop
      clearInterval(stopwatchInterval);
      clearInterval(artInterval);
      logStudyTime(elapsedSeconds); // Log study time when stopwatch is stopped
      console.clear();
      console.log('Stopwatch stopped.');
      process.stdout.write("\u001B[?25h"); // Show cursor
      process.exit();
    }
  });
};
