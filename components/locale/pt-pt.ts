import { Locale } from './types';

const locale = {
    momentLocale: 'pt',
    Timeline: {
        expand: 'Expandir',
        fold: 'Comprimir',
    },
    Balloon: {
        close: 'Fechar',
    },
    Card: {
        expand: 'Expandir',
        fold: 'Comprimir',
    },
    Calendar: {
        today: 'Hoje',
        now: 'Agora',
        ok: 'OK',
        clear: 'Limpar',
        month: 'Mês',
        year: '',
        prevYear: 'Ano Passado',
        nextYear: 'Próximo ano',
        prevMonth: 'Mês Passado',
        nextMonth: 'Próximo Mês',
        prevDecade: 'Década Passada',
        nextDecade: 'Próxima Década',
        yearSelectAriaLabel: 'Selecionar Ano',
        monthSelectAriaLabel: 'Selecionar Mês',
    },
    DatePicker: {
        placeholder: 'Selecione uma Data',
        datetimePlaceholder: 'Selecione o Dia e a Hora',
        monthPlaceholder: 'Selecione o mês',
        yearPlaceholder: 'Selecione o ano',
        weekPlaceholder: 'Selecione a semana',
        now: 'Agora',
        selectTime: 'Selecionar a Hora',
        selectDate: 'Selecionar o Dia',
        ok: 'OK',
        clear: 'Limpar',
        startPlaceholder: 'Data de início',
        endPlaceholder: 'Data do Fim',
        hour: 'H',
        minute: 'M',
        second: 'S',
        monthBeforeYear: false,
    },
    Dialog: {
        close: 'Fechar',
        ok: 'OK',
        cancel: 'Cancelar',
    },
    Drawer: {
        close: 'Fechar',
    },
    Message: {
        closeAriaLabel: 'Fechar',
    },
    Pagination: {
        prev: 'Voltar',
        next: 'Próximo',
        goTo: 'Ir para',
        page: 'Página',
        go: 'View',
        total: 'Página {current}, {total} Página(s)',
        labelPrev: 'Página Anterior, Página atual {current}',
        labelNext: 'Próximo Página, Página atual {current}',
        inputAriaLabel: 'Por favor, defina a página que que deseja pular',
        selectAriaLabel: 'Por favor, selecione quantos items você quer mostrar por página',
        pageSize: 'Items por página:',
    },
    Input: {
        clear: 'Limpar',
    },
    TextArea: {
        clear: 'Limpar',
    },
    List: {
        empty: 'Vazio',
    },
    Select: {
        selectPlaceholder: 'Por favor, escolha.',
        autoCompletePlaceholder: 'Por favor, insira',
        notFoundContent: 'Sem opções',
        maxTagPlaceholder: 'Escolher {selected}/{total} Total',
        selectAll: 'Selecionar Tudo',
    },
    TreeSelect: {
        maxTagPlaceholder: 'Escolher {selected}/{total} Total',
        shortMaxTagPlaceholder: 'Escolher {selected}',
    },
    Table: {
        empty: 'Vazio',
        ok: 'OK',
        reset: 'Resetar',
        asc: 'Ordem Crescente',
        desc: 'Ordem Descendente',
        expanded: 'Expandir',
        folded: 'Comprimir',
        filter: 'Filtrar',
        selectAll: 'Selecionar Tudo',
    },
    TimePicker: {
        placeholder: 'Selecionar Hora',
        clear: 'Limpar',
        hour: 'H',
        minute: 'M',
        second: 'S',
        ok: 'OK',
    },
    Transfer: {
        items: 'items',
        item: 'item',
        moveAll: 'Mover Tudo',
        searchPlaceholder: 'Por favor, insira',
        moveToLeft: 'Desmarcar Elementos',
        moveToRight: 'Confirmar Elementos Selecionados',
    },
    Upload: {
        card: {
            cancel: 'Cancelar',
            addPhoto: 'Adicionar Imagem',
            download: 'Download',
            delete: 'Deletar',
        },
        drag: {
            text: 'Clique ou Arraste o arquivo para para área pontilhada',
            hint: 'Arquivos suportados: docx, xls, PDF, rar, zip, PNG, JPG e outros.',
        },
        upload: {
            delete: 'Deletar',
        },
    },
    Search: {
        buttonText: 'Procurar',
    },
    Tag: {
        delete: 'Deletar',
    },
    Rating: {
        description: 'Opções de classificação',
    },
    Switch: {
        on: 'Ativo',
        off: 'Inativo',
    },
    Tab: {
        closeAriaLabel: 'Fechar',
    },
    Form: {
        Validate: {
            default: 'Erro de validação no campo %s',
            required: '%s é necessário',
            format: {
                number: '%s não é um número',
                email: '%s não é um email válido',
                url: '%s não é uma url válida',
                tel: '%s não é um número de telefone válido',
            },
            number: {
                length: '%s deve ter exatamente %s caracteres',
                min: '%s não pode ser menor que %s',
                max: '%s não pode ser maior que %s',
                minLength: '%s deve ter pelo menos %s caracteres',
                maxLength: '%s não pode ter mais do que %s caracteres',
            },
            string: {
                length: '%s deve ter exatamente %s caracteres',
                min: '%s não pode ser menor que %s',
                max: '%s não pode ser maior que %s',
                minLength: '%s deve ter pelo menos %s caracteres',
                maxLength: '%s não pode ter mais do que %s caracteres',
            },
            array: {
                length: '%s deve ter exatamente %s de comprimento',
                minLength: '%s não pode ter menos que %s de comprimento',
                maxLength: '%s não pode ser maior que %s de comprimento',
            },
            pattern: '%s valor %s não corresponde ao padrão %s',
        },
    },
};

export default locale;
