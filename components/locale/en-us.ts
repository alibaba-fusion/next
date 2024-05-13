import { Locale } from './types';

const locale: Locale = {
    momentLocale: 'en',
    Timeline: {
        expand: 'Expand',
        fold: 'Fold',
    },
    Balloon: {
        close: 'Close',
    },
    Card: {
        expand: 'Expand',
        fold: 'Fold',
    },
    Calendar: {
        today: 'Today',
        now: 'Now',
        ok: 'OK',
        clear: 'Clear',
        month: 'Month',
        year: 'Year',
        prevYear: 'Previous Year',
        nextYear: 'Next Year',
        prevMonth: 'Previous Month',
        nextMonth: 'Next Month',
        prevDecade: 'Previous Decade',
        nextDecade: 'Next Decade',
        yearSelectAriaLabel: 'Select Year',
        monthSelectAriaLabel: 'Select Month',
    },
    DatePicker: {
        placeholder: 'Select Date',
        datetimePlaceholder: 'Select Date And Time',
        monthPlaceholder: 'Select Month',
        yearPlaceholder: 'Select Year',
        weekPlaceholder: 'Select Week',
        now: 'Now',
        selectTime: 'Select Time',
        selectDate: 'Select Date',
        ok: 'OK',
        clear: 'Clear',
        startPlaceholder: 'Start Date',
        endPlaceholder: 'End Date',
        hour: 'H',
        minute: 'M',
        second: 'S',
        monthBeforeYear: true,
    },
    Dialog: {
        close: 'Close',
        ok: 'OK',
        cancel: 'Cancel',
    },
    Drawer: {
        close: 'Close',
    },
    Message: {
        closeAriaLabel: 'Close',
    },
    Pagination: {
        prev: 'Previous',
        next: 'Next',
        goTo: 'Go to',
        page: 'Page',
        go: 'View',
        total: 'Page {current}, {total} pages',
        labelPrev: 'Previous page, current page {current}',
        labelNext: 'Next page, current page {current}',
        inputAriaLabel: 'Please enter what page to skip to',
        selectAriaLabel: 'Please select how many items are displayed on each page',
        pageSize: 'Items per page:',
    },
    Input: {
        clear: 'Clear',
    },
    TextArea: {
        clear: 'Clear',
    },
    List: {
        empty: 'No Data',
    },
    Select: {
        selectPlaceholder: 'Please Select',
        autoCompletePlaceholder: 'Please Input',
        notFoundContent: 'No Options',
        maxTagPlaceholder: 'Selected {selected}/{total} Total',
        selectAll: 'Select All',
    },
    TreeSelect: {
        maxTagPlaceholder: 'Selected {selected}/{total} Total',
        shortMaxTagPlaceholder: 'Selected {selected}',
    },
    Table: {
        empty: 'No Data',
        ok: 'OK',
        reset: 'Reset',
        asc: 'Ascending Order',
        desc: 'Descending Order',
        expanded: 'Expanded',
        folded: 'Folded',
        filter: 'Filter',
        selectAll: 'Select All',
    },
    TimePicker: {
        placeholder: 'Select Time',
        clear: 'Clear',
        hour: 'H',
        minute: 'M',
        second: 'S',
        ok: 'OK',
    },
    Transfer: {
        items: 'items',
        item: 'item',
        moveAll: 'Move All',
        searchPlaceholder: 'Please Input',
        moveToLeft: 'Uncheck Selected Elements',
        moveToRight: 'Submit Selected Elements',
    },
    Upload: {
        card: {
            cancel: 'Cancel',
            addPhoto: 'Add Picture',
            download: 'Download',
            delete: 'Delete',
        },
        drag: {
            text: 'Click or Drag the file to this area to upload',
            hint: 'Support docx, xls, PDF, rar, zip, PNG, JPG and other files upload',
        },
        upload: {
            delete: 'Delete',
        },
    },
    Search: {
        buttonText: 'Search',
    },
    Tag: {
        delete: 'Delete',
    },
    Rating: {
        description: 'Rating Options',
    },
    Switch: {
        on: 'on',
        off: 'off',
    },
    Tab: {
        closeAriaLabel: 'close',
    },
    Form: {
        Validate: {
            default: 'Validation error on field %s',
            required: '%s is required',
            format: {
                number: '%s is not a number',
                email: '%s is not a valid email',
                url: '%s is not a valid url',
                tel: '%s is not a valid phone number',
            },
            number: {
                length: '%s must be exactly %s characters',
                min: '%s cannot be less than %s',
                max: '%s cannot be greater than %s',
                minLength: '%s must be at least %s characters',
                maxLength: '%s cannot be longer than %s characters',
            },
            string: {
                length: '%s must be exactly %s characters',
                min: '%s cannot be less than %s',
                max: '%s cannot be greater than %s',
                minLength: '%s must be at least %s characters',
                maxLength: '%s cannot be longer than %s characters',
            },
            array: {
                length: '%s must be exactly %s in length',
                minLength: '%s cannot be less than %s in length',
                maxLength: '%s cannot be greater than %s in length',
            },
            pattern: '%s value %s does not match pattern %s',
        },
    },
};

export default locale;
