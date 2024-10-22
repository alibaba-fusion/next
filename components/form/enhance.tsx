import type { ItemProps, FormRule } from './types';

type GetCfgFromPropsReturn<T> = T extends keyof ItemProps ? ItemProps[T] : undefined;
function getCfgFromProps<T extends string>(props: ItemProps, type: T): GetCfgFromPropsReturn<T> {
    if (type in props) {
        return props[type as keyof ItemProps];
    }

    return undefined as GetCfgFromPropsReturn<T>;
}

function getRule(ruleName: keyof ItemProps, props: ItemProps) {
    return {
        [ruleName]: props[ruleName],
        message: getCfgFromProps(props, `${ruleName}Message`),
        trigger: getCfgFromProps(props, `${ruleName}Trigger`),
    } as FormRule;
}

function getValueName(props: ItemProps, displayName?: string) {
    if (props.valueName) {
        return props.valueName;
    }

    if (typeof displayName === 'string') {
        // Next Components are all wrappered by configProvider
        const componentName = displayName.replace(/Config\(/g, '').replace(/\)/g, '');
        if (['Switch', 'Checkbox', 'Radio'].indexOf(componentName) !== -1) {
            return 'checked';
        }
    }

    return 'value';
}

export function getRules(props: ItemProps, labelForErrorMessage: string | null) {
    const result: FormRule[] = [];

    // required
    if (props.required) {
        result.push(getRule('required', props));
    }

    const maxLength = Number(props.maxLength);
    const minLength = Number(props.minLength);
    if (minLength || maxLength) {
        result.push({
            minLength,
            maxLength,
            // minLengthMessage maxLengthMessage had been deprecated, please use minmaxLength. TODO: removed in 2.0
            message:
                getCfgFromProps(props, 'minmaxLengthMessage') ||
                getCfgFromProps(props, 'minLengthMessage') ||
                getCfgFromProps(props, 'maxLengthMessage'),
            trigger:
                getCfgFromProps(props, 'minmaxLengthTrigger') ||
                getCfgFromProps(props, 'minLengthTrigger') ||
                getCfgFromProps(props, 'maxLengthTrigger'),
        });
    }

    // length
    if (props.length) {
        result.push(getRule('length', props));
    }

    // pattern
    if (props.pattern) {
        result.push(getRule('pattern', props));
    }

    // format
    if (['number', 'tel', 'url', 'email'].indexOf(props.format!) > -1) {
        result.push(getRule('format', props));
    }

    const max = Number(props.max);
    const min = Number(props.min);
    // max min
    if (max || min) {
        result.push({
            min,
            max,
            // minMessage maxMessage had been deprected, please use minmaxLength. TODO: removed in 2.0
            message:
                getCfgFromProps(props, 'minmaxMessage') ||
                getCfgFromProps(props, 'minMessage') ||
                getCfgFromProps(props, 'maxMessage'),
            trigger:
                getCfgFromProps(props, 'minmaxTrigger') ||
                getCfgFromProps(props, 'minTrigger') ||
                getCfgFromProps(props, 'maxTrigger'),
        });
    }

    if (props.validator && typeof props.validator === 'function') {
        result.push({
            validator: props.validator,
            trigger: getCfgFromProps(props, 'validatorTrigger'),
        });
    }

    if (labelForErrorMessage) {
        result.forEach(r => {
            r.aliasName = labelForErrorMessage;
        });
    }

    return result;
}

export function getFieldInitCfg(
    props: ItemProps,
    displayName: string,
    labelForErrorMessage: string | null
) {
    return {
        valueName: getValueName(props, displayName),
        trigger: props.trigger ? props.trigger : 'onChange',
        autoValidate: props.autoValidate,
        rules: getRules(props, labelForErrorMessage),
    };
}
