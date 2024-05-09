import ConfigProvider from '../config-provider';
import Calendar from './calendar';

export type {
    CalendarProps,
    CellData,
    OnPrevOrNext,
    CalendarMode,
    CalendarPanelMode,
    CustomCellRender,
} from './types';

export default ConfigProvider.config(Calendar);
