import { hooks } from '../../util';
import { BaseContentModel } from './baseContent';

export class CloneContentModel extends BaseContentModel {
    icon = undefined;
    content = undefined;
}
export default hooks.createModel(CloneContentModel);
