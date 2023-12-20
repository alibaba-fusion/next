/* eslint-disable no-console */
import chalk from 'chalk';
import { DEBUG } from './consts';

export function log(...args: unknown[]) {
    if (!args.length) {
        console.log();
    } else {
        console.log(chalk.bgGreen(' LOG '), ...args);
    }
}

export function warn(...args: unknown[]) {
    console.log(chalk.bgYellow(' WARN '), ...args);
}

export function debug(...args: unknown[]) {
    if (!DEBUG) {
        return;
    }
    console.log(chalk.bgBlue(' DEBUG '), ...args);
}

export function error(...args: unknown[]) {
    console.log(chalk.bgRed(' ERROR '), ...args);
}
