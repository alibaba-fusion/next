import { ContextState, OverlayCommonProps, ParsedContextConfig } from './types';
export default function getContextProps<P extends Omit<OverlayCommonProps, 'defaultPropsConfig'>>(props: P, context: ContextState, displayName?: string): ParsedContextConfig;
