export interface locale {
    momentLocale: string;
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
    };
    Dialog: {
        close: string;
        ok: string;
        cancel: string;
    };
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
    List: {
        empty: string;
    };
    Select: {
        selectPlaceholder: string;
        autoCompletePlaceholder: string;
        notFoundContent: string;
        maxTagPlaceholder: string;
        selectAll: string;
    };
    Table: {
        empty: string;
        ok: string;
        reset: string;
        asc: string;
        desc: string;
        expanded: string;
        folded: string;
        filter: string;
        selectAll: string;
    };
    TimePicker: {
        placeholder: string;
        clear: string;
        hour: string;
        minute: string;
        second: string;
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
}

export default locale;
