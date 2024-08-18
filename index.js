#!/usr/bin/env node


import inquirer from 'inquirer';
import { startCountdown } from './countdown.js';
import { startStopwatch } from './stopwatch.js';

// Function to prompt user input
const promptUser = async () => {
  try {
    const choice = await inquirer.prompt({
      type: 'list',
      name: 'countdownType',
      message: 'Choose the type of countdown:',
      choices: ['Timer', 'Stopwatch'],
    });

    let duration = 0;
    if (choice.countdownType === 'Timer') {
      const timerInput = await inquirer.prompt({
        type: 'input',
        name: 'minutes',
        message: 'Enter the countdown duration in minutes:',
        default: 1,
        validate: (input) => {
          const num = parseInt(input, 10);
          return !isNaN(num) && num >= 0 ? true : 'Please enter a valid number.';
        },
      });

      duration = parseInt(timerInput.minutes, 10) * 60; // Convert minutes to seconds
    }

    const colorChoice = await inquirer.prompt({
      type: 'list',
      name: 'color',
      message: 'Choose a color for the countdown timer:',
      choices: ['cyan', 'red', 'green', 'yellow', 'blue'],
      default: 'cyan',
    });

    return { duration, color: colorChoice.color, countdownType: choice.countdownType };
  } catch (error) {
    console.error('An error occurred during prompting:', error);
    process.exit(1);
  }
};

// Function to display instructions and start the application
const startApp = async () => {
  const { duration, color, countdownType } = await promptUser();

  console.clear();
  console.log('Instructions:');
  if (countdownType === 'Timer') {
    console.log('Press "p" to pause or resume the timer.');
    console.log('Press "Ctrl+C" to stop the countdown.');
    console.log();
    setTimeout(() => startCountdown(duration, color), 2000); // Start after 2 seconds
  } else if (countdownType === 'Stopwatch') {
    console.log('Press "p" to pause or resume the stopwatch.');
    console.log('Press "Ctrl+C" to stop the stopwatch.');
    console.log();
    setTimeout(() => startStopwatch(color), 2000); // Start after 2 seconds
  }
};

// Start the application
startApp();
