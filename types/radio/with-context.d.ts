import type { WrappedRadio, Radio as RadioClass } from './types';
export default function withContext(Radio: typeof RadioClass): typeof WrappedRadio;
