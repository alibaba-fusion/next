/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-21 17:39:47
  description: build
------------------------------------------------------------
*/
import { registryTask } from '../utils';
import { registryTransform } from './transform';
import { registryBuildSass } from './sass';
import { registryDist } from './dist';
import { registryBuildDocs } from './docs';

export function registryBuild(file = __filename) {
    return registryTask(file, 'build', async () => {
        // build to es & lib & types
        await registryTransform(file);

        // build scss
        await registryBuildSass(file);

        // build docs
        await registryBuildDocs(file);

        // build dist
        await registryDist(file);
    });
}

registryBuild();
