import ConfigProvider from '../config-provider';
import App from './view/app';
import Context from './view/context';
import VirtualTree from './view/tree';

export default ConfigProvider.config(App);

export { Context, VirtualTree };
