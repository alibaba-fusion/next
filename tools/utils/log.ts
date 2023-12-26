/* eslint-disable no-console */
import chalk from 'chalk';
import { DEBUG } from './consts';

let currentLevel = 0;
export function getLevel() {
    return currentLevel;
}

export function setLevel(level: number) {
    const oldLevel = currentLevel;
    currentLevel = level;
    return () => {
        currentLevel = oldLevel;
    };
}

export function levelUp() {
    setLevel(currentLevel + 1);
}
export function levelDown() {
    setLevel(currentLevel - 1);
}

function prefix() {
    return new Array(currentLevel).fill('    ').join('');
}

export function log(...args: unknown[]) {
    console.log(chalk.bgGreen('  LOG  '), prefix(), ...args);
}

export function warn(...args: unknown[]) {
    console.log(chalk.bgYellow(' WARN  '), prefix(), ...args);
}

export function debug(...args: unknown[]) {
    if (!DEBUG) {
        return;
    }
    console.log(chalk.bgBlue(' DEBUG '), prefix(), ...args);
}

export function error(...args: unknown[]) {
    console.log(chalk.bgRed(' ERROR '), prefix(), ...args);
}
