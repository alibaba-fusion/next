export interface ComponentLocaleObject {
    [key: string]: string | ComponentLocaleObject | undefined | boolean | string[] | number;
}

export interface LocaleConfig {
    rtl?: boolean;
    momentLocale?: string;
    dateLocale?: string;
}

export interface BaseLocale extends LocaleConfig {
    Timeline: {
        expand: string;
        fold: string;
    };
    Balloon: {
        close: string;
    };
    Card: {
        expand: string;
        fold: string;
    };
    Calendar: {
        today: string;
        now: string;
        ok: string;
        clear: string;
        month: string;
        year: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevDecade: string;
        nextDecade: string;
        yearSelectAriaLabel: string;
        monthSelectAriaLabel: string;
        monthBeforeYear?: boolean;
        format?: {
            months?: string[];
            shortMonths?: string[];
            firstDayOfWeek?: number;
            weekdays?: string[];
            shortWeekdays?: string[];
            veryShortWeekdays?: string[];
        };
    };
    DatePicker: {
        placeholder: string;
        datetimePlaceholder: string;
        monthPlaceholder: string;
        weekPlaceholder: string;
        yearPlaceholder: string;
        now: string;
        selectTime: string;
        selectDate: string;
        ok: string;
        clear: string;
        startPlaceholder: string;
        endPlaceholder: string;
        hour: string;
        minute: string;
        second: string;
        monthBeforeYear?: boolean;
    };
    Dialog: Partial<{
        close: string;
        ok: string;
        cancel: string;
    }>;
    Drawer: {
        close: string;
    };
    Message: {
        closeAriaLabel: string;
    };
    Pagination: {
        prev: string;
        next: string;
        goTo: string;
        page: string;
        go: string;
        total: string;
        labelPrev: string;
        labelNext: string;
        inputAriaLabel: string;
        selectAriaLabel: string;
        pageSize: string;
    };
    Input: {
        clear: string;
    };
    TextArea: {
        clear: string;
    };
    List: {
        empty: string;
    };
    Select: {
        selectPlaceholder: string;
        autoCompletePlaceholder: string;
        notFoundContent: string;
        maxTagPlaceholder: string;
        selectAll: string;
        /**
         * @deprecated use selectPlaceholder instead
         */
        selectPlaceHolder?: string;
        /**
         * @deprecated use autoCompletePlaceholder instead
         */
        autoCompletePlaceHolder?: string;
    };
    TreeSelect: {
        maxTagPlaceholder: string;
        shortMaxTagPlaceholder: string;
    };
    Table: {
        /**
         * 没有数据情况下 table 内的文案
         */
        empty: string;
        /**
         * 过滤器中确认按钮文案
         */
        ok: string;
        /**
         * 过滤器中重置按钮文案
         */
        reset: string;
        /**
         * 排序升序状态下的文案
         */
        asc: string;
        /**
         * 排序将序状态下的文案
         */
        desc: string;
        /**
         * 可折叠行，展开状态下的文案
         */
        expanded: string;
        /**
         * 可折叠行，折叠状态下的文案
         */
        folded: string;
        /**
         * 过滤器文案
         */
        filter: string;
        /**
         * header 里全选的按钮文案
         */
        selectAll: string;
    };
    TimePicker: {
        placeholder: string;
        clear: string;
        hour: string;
        minute: string;
        second: string;
        ok: string;
    };
    Transfer: {
        items: string;
        item: string;
        moveAll: string;
        searchPlaceholder: string;
        moveToLeft: string;
        moveToRight: string;
    };
    Upload: {
        card: {
            cancel: string;
            addPhoto: string;
            download: string;
            delete: string;
        };
        drag: {
            text: string;
            hint: string;
        };
        upload: {
            delete: string;
        };
        image: {
            cancel: string;
            addPhoto: string;
            download: string;
            delete: string;
        };
    };
    Search: {
        buttonText: string;
    };
    Tag: {
        delete: string;
    };
    Rating: {
        description: string;
    };
    Switch: {
        on: string;
        off: string;
    };
    Tab: {
        closeAriaLabel: string;
    };
    Form: {
        Validate: {
            default: string;
            required: string;
            format: {
                number: string;
                email: string;
                url: string;
                tel: string;
            };
            number: {
                length: string;
                min: string;
                max: string;
                minLength: string;
                maxLength: string;
            };
            string: {
                length: string;
                min: string;
                max: string;
                minLength: string;
                maxLength: string;
            };
            array: {
                length: string;
                minLength: string;
                maxLength: string;
            };
            pattern: string;
        };
    };
    [key: string]: ComponentLocaleObject | boolean | string | undefined;
}

export type Locale = {
    [key in keyof BaseLocale]: BaseLocale[key] extends ComponentLocaleObject
        ? Partial<BaseLocale[key]> & {
              momentLocale?: string;
          }
        : BaseLocale[key];
};

/**
 * @deprecated type locale is deprecated, use Locale instead
 */
export type locale = Locale;
