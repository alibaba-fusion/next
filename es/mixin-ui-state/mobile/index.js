import { MixinUiState as MeetMixinUiState } from '@alifd/meet-react';
import NextMixinUiState from '../index';

var MixinUiState = MeetMixinUiState ? MeetMixinUiState : NextMixinUiState;

export default MixinUiState;