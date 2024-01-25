/* eslint-disable no-console */
import chalk from 'chalk';
import { DEBUG } from './consts';

let currentLevel = 0;
let slient = false;

export function setSlient(isSlient = true) {
    slient = isSlient;
}
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

function print(...args: unknown[]) {
    if (slient) {
        return;
    }
    console.log(...args);
}

export function log(...args: unknown[]) {
    print(chalk.bgGreen('  LOG  '), prefix(), ...args);
}

export function success(...args: unknown[]) {
    print(chalk.bgGreen('  LOG  '), prefix(), ...args);
}

export function warn(...args: unknown[]) {
    print(chalk.bgYellow('  WARN '), prefix(), ...args);
}

export function debug(...args: unknown[]) {
    if (!DEBUG) {
        return;
    }
    print(chalk.bgBlue(' DEBUG '), prefix(), ...args);
}

export function error(...args: unknown[]) {
    print(chalk.bgRed(' ERROR '), prefix(), ...args);
}
