import { readJSONSync } from 'fs-extra';
import { PKG_PATH } from '../utils';

export function getVersion() {
    const version = readJSONSync(PKG_PATH).version as string;
    return {
        version,
        masterTag: version,
        buildTag: `build/${version}`,
    };
}
