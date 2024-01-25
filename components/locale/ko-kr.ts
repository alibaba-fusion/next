import { Locale } from './types';

const locale: Locale = {
    momentLocale: 'ko',
    Timeline: {
        expand: '넓히다',
        fold: '멀리',
    },
    Balloon: {
        close: '종료',
    },
    Card: {
        expand: '넓히다',
        fold: '멀리',
    },
    Calendar: {
        today: '그밍',
        now: '현재',
        ok: '확정',
        clear: '삭제',
        month: '월',
        year: '년',
        prevYear: '작년',
        nextYear: '내년',
        prevMonth: '전월',
        nextMonth: '차월',
        prevDecade: '지난 10년',
        nextDecade: '앞으로 10년',
        yearSelectAriaLabel: '연간선택',
        monthSelectAriaLabel: '월 선택',
    },
    DatePicker: {
        placeholder: '일자 선택',
        datetimePlaceholder: '일자 및 시간 선택',
        monthPlaceholder: '월 선택',
        yearPlaceholder: '연간 선택',
        weekPlaceholder: '주 선택',
        now: '현재',
        selectTime: '시간 선택',
        selectDate: '일자 선택',
        ok: '확정',
        clear: '삭제',
        startPlaceholder: '시작일자',
        endPlaceholder: '종료일자',
        hour: '시',
        minute: '분',
        second: '초',
    },
    Dialog: {
        close: '종료',
        ok: '확정',
        cancel: '취소',
    },
    Drawer: {
        close: '종료',
    },
    Message: {
        closeAriaLabel: '종료',
    },
    Pagination: {
        prev: '앞 페이지',
        next: '뒷 페이지',
        goTo: '처음에는',
        page: '페이지',
        go: '확정',
        total: '{current} 페이지 , 총 {total}페이지',
        labelPrev: '앞 페이지 , {current} 페이지',
        labelNext: '뒷 페이지 , {current} 페이지',
        inputAriaLabel: '원하는 페이지 숫자 입력',
        selectAriaLabel: '페이지당 원하는 갯수 선택',
        pageSize: '페이지마다 표시:',
    },
    Input: {
        clear: '삭제',
    },
    TextArea: {
        clear: '삭제',
    },
    List: {
        empty: '노데이터',
    },
    Select: {
        selectPlaceholder: '선택',
        autoCompletePlaceholder: '기입',
        notFoundContent: '해당사항 없음',
        maxTagPlaceholder: '기 선택  {selected}/{total} 항',
        selectAll: '전부 선택',
    },
    TreeSelect: {
        maxTagPlaceholder: '기 선택  {selected}/{total} 항',
        shortMaxTagPlaceholder: '기 선택  {selected} 항',
    },
    Table: {
        empty: '데이터 없음',
        ok: '확인',
        reset: '리셋',
        asc: '오름차순',
        desc: '내림차순',
        expanded: '전개',
        folded: '접다',
        filter: '선별',
        selectAll: '전부 선택',
    },
    TimePicker: {
        placeholder: '시간 선택',
        clear: '삭제',
        hour: '시',
        minute: '분',
        second: '초',
        ok: '확정',
    },
    Transfer: {
        items: '항',
        item: '항',
        moveAll: '전부 이전',
        searchPlaceholder: '기입',
        moveToLeft: '기 선택항 철회',
        moveToRight: '선택항 제출',
    },
    Upload: {
        card: {
            cancel: '취소',
            addPhoto: '이미지 업로드',
            download: '다운로드',
            delete: '삭제',
        },
        drag: {
            text: '클릭 또는 마우스로 파일을 점선 내 이동하여 업로드',
            hint: 'docx, xls, PDF, rar, zip, PNG, JPG 등 파일 가능',
        },
        upload: {
            delete: '삭제',
        },
    },
    Search: {
        buttonText: '써치',
    },
    Tag: {
        delete: '삭제',
    },
    Rating: {
        description: '평점항목',
    },
    Switch: {
        on: '열기',
        off: '닫기',
    },
    Tab: {
        closeAriaLabel: '닫기',
    },
    Form: {
        Validate: {
            default: '%s 검증 실패',
            required: '%s 필수',
            format: {
                number: '%s  요구에 맞지 않은  데이터 입니다.',
                email: '%s 요구에 맞지 않은 email 주소 입니다.',
                url: '%s 정확하지 않은 링크입니다.',
                tel: ' %s 정확하지 않은 연락 번호 입니다.',
            },
            number: {
                length: '%s 길이는 반드시  %s',
                min: '%s 대비 %s가 커야 합니다.',
                max: '%s 대비 %s는 작아야 합니다.',
                minLength: '%s 글자수는 최소%s',
                maxLength: '%s 글자수는 최대%s',
            },
            string: {
                length: '%s 길이는 반드시  %s',
                min: '%s 대비 %s가 커야 합니다.',
                max: ' %s 대비 %s는 작아야 합니다.',
                minLength: '%s 글자수는 최소%s',
                maxLength: '%s 글자수는 최대%s',
            },
            array: {
                length: '%s 개수는 반드시 %s',
                minLength: '%s 개수는 최소%s',
                maxLength: '%s 개수는 최대 %s',
            },
            pattern: '%s 데이터 중 %s가  요구치 %s 에 적합하지 않습니다.',
        },
    },
};

export default locale;
