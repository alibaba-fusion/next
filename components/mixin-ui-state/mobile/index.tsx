// @ts-expect-error meet 未导出 MixinUiState
import { MixinUiState as MeetMixinUiState } from '@alifd/meet-react';
import NextMixinUiState from '../index';

const MixinUiState = MeetMixinUiState ? MeetMixinUiState : NextMixinUiState;

export default MixinUiState;
