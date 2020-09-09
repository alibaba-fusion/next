import { ConfigProvider as MeetConfigProvider } from '@alifd/meet-react';
import NextConfigProvider from '../index';

const ConfigProvider = MeetConfigProvider ? MeetConfigProvider : NextConfigProvider;

export default ConfigProvider;
