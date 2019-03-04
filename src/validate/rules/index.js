import required from './required';
import format from './format';
import size from './size';
import length from './length';
import pattern from './pattern';

export default {
    required,
    format,
    min: size,
    max: size,
    minLength: length,
    maxLength: length,
    length,
    pattern,
};
