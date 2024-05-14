import { Locale } from './types';

/* vietnamese */
const locale: Locale = {
    momentLocale: 'vi',
    Timeline: {
        expand: 'Mở rộng',
        fold: 'Thu gọn',
    },
    Balloon: {
        close: 'Đóng',
    },
    Card: {
        expand: 'Mở rộng',
        fold: 'Thu gọn',
    },
    Calendar: {
        today: 'Hôm nay',
        now: 'Bây giờ',
        ok: 'OK',
        clear: 'Xóa',
        month: 'Tháng',
        year: 'Năm',
        prevYear: 'Năm trước',
        nextYear: 'Năm tiếp theo',
        prevMonth: 'Tháng trước',
        nextMonth: 'Tháng tiếp theo',
        prevDecade: 'Thập kỷ trước',
        nextDecade: 'Thập kỷ tiếp theo',
        yearSelectAriaLabel: 'Chọn năm',
        monthSelectAriaLabel: 'Chọn tháng',
    },
    DatePicker: {
        placeholder: 'Chọn ngày',
        datetimePlaceholder: 'Chọn ngày và thời gian',
        monthPlaceholder: 'Chọn tháng',
        yearPlaceholder: 'Chọn năm',
        weekPlaceholder: 'Chọn tuần',
        now: 'Bây giờ',
        selectTime: 'Chọn thời gian',
        selectDate: 'Chọn ngày',
        ok: 'OK',
        clear: 'Xóa',
        startPlaceholder: 'Ngày bắt đầu',
        endPlaceholder: 'Ngày kết thúc',
        hour: 'Giờ',
        minute: 'Phút',
        second: 'Giây',
        monthBeforeYear: false,
    },
    Dialog: {
        close: 'Đóng',
        ok: 'OK',
        cancel: 'Hủy',
    },
    Drawer: {
        close: 'Đóng',
    },
    Message: {
        closeAriaLabel: 'Đóng',
    },
    Pagination: {
        prev: 'Trước đó',
        next: 'Tiếp theo',
        goTo: 'Truy cập',
        page: 'Trang',
        go: 'Xem',
        total: 'Trang {current}, {total} trang',
        labelPrev: 'Trước đó trang, trang hiện tại {current}',
        labelNext: 'Trang tiếp theo, trang hiện tại {current}',
        inputAriaLabel: 'Vui lòng nhập trang cần bỏ qua',
        selectAriaLabel: 'Vui lòng chọn số mục hiển thị trên mỗi trang',
        pageSize: 'Số mục trên mỗi trang:',
    },
    Input: {
        clear: 'Xóa',
    },
    TextArea: {
        clear: 'Xóa',
    },
    List: {
        empty: 'Không có dữ liệu',
    },
    Select: {
        selectPlaceholder: 'Vui lòng chọn',
        autoCompletePlaceholder: 'Vui lòng nhập',
        notFoundContent: 'Không có tùy chọn',
        maxTagPlaceholder: 'Đã chọn {selected}/{total}',
        selectAll: 'Chọn tất cả',
    },
    TreeSelect: {
        maxTagPlaceholder: 'Đã chọn {selected}/{total}',
        shortMaxTagPlaceholder: 'Đã chọn {selected}',
    },
    Table: {
        empty: 'Không có dữ liệu',
        ok: 'OK',
        reset: 'Đặt lại',
        asc: 'Thứ tự tăng dần',
        desc: 'Thứ tự giảm dần',
        expanded: 'Đã mở rộng',
        folded: 'Đã thu gọn',
        filter: 'Bộ lọc',
        selectAll: 'Chọn tất cả',
    },
    TimePicker: {
        placeholder: 'Chọn thời gian',
        clear: 'Xóa',
        hour: 'Giờ',
        minute: 'Phút',
        second: 'Giây',
        ok: 'OK',
    },
    Transfer: {
        items: 'mục',
        item: 'mục',
        moveAll: 'Di chuyển tất cả',
        searchPlaceholder: 'Vui lòng nhập',
        moveToLeft: 'Bỏ chọn các thành phần đã chọn',
        moveToRight: 'Gửi các thành phần đã chọn',
    },
    Upload: {
        card: {
            cancel: 'Hủy',
            addPhoto: 'Thêm ảnh',
            download: 'Tải xuống',
            delete: 'Xóa',
        },
        drag: {
            text: 'Nhấp chuột hoặc kéo tệp vào khu vực này để tải lên',
            hint: 'Hỗ trợ docx, xls, PDF, rar, zip, PNG, JPG và tải lên các tệp khác',
        },
        upload: {
            delete: 'Xóa',
        },
    },
    Search: {
        buttonText: 'Tìm kiếm',
    },
    Tag: {
        delete: 'Xóa',
    },
    Rating: {
        description: 'Tùy chọn xếp hạng',
    },
    Switch: {
        on: 'bật',
        off: 'tắt',
    },
    Tab: {
        closeAriaLabel: 'Đóng',
    },
    Form: {
        Validate: {
            default: 'Lỗi xác thực trên trường %s',
            required: '%s là bắt buộc',
            format: {
                number: '%s không phải là một số',
                email: '%s không phải là một email hợp lệ',
                url: '%s không phải là một URL hợp lệ',
                tel: '%s không phải là số điện thoại hợp lệ',
            },
            number: {
                length: '%s phải chính xác là các ký tự %s',
                min: '%s không thể nhỏ hơn %s',
                max: '%s không thể lớn hơn %s',
                minLength: '%s phải có ít nhất các ký tự %s',
                maxLength: '%s không thể dài hơn ký tự %s',
            },
            string: {
                length: '%s phải chính xác là các ký tự %s',
                min: '%s không thể nhỏ hơn %s',
                max: '%s không thể lớn hơn %s',
                minLength: '%s phải có ít nhất các ký tự %s',
                maxLength: '%s không thể dài hơn ký tự %s',
            },
            array: {
                length: '%s phải chính xác %s về chiều dài',
                minLength: '%s không thể nhỏ hơn %s dài',
                maxLength: '%s không thể lớn hơn %s có độ dài',
            },
            pattern: '%s GIÁ TRỊ %s không khớp với mẫu %s',
        },
    },
};

export default locale;
