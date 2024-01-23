import path from 'path';
import * as sassTrue from 'sass-true';

sassTrue.runSass({ describe, it }, path.resolve(__dirname, './function-spec.scss'));
sassTrue.runSass({ describe, it }, path.resolve(__dirname, './mixin-spec.scss'));
