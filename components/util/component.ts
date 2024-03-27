import React from 'react';

export function assignSubComponent<
    T extends React.ComponentType,
    P extends Record<string, unknown>,
>(Component: T, SubComponents: P): T & P {
    for (const key in SubComponents) {
        if (Object.prototype.hasOwnProperty.call(SubComponents, key)) {
            ((Component as T & P)[key] as unknown) = SubComponents[key];
        }
    }
    return Component as T & P;
}
