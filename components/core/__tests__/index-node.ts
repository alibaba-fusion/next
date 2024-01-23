import path from 'path';
import { runSassSpec } from '../../util/__tests__/sass-true';

runSassSpec(path.resolve(__dirname, './function-spec.scss'));
runSassSpec(path.resolve(__dirname, './mixin-spec.scss'));
