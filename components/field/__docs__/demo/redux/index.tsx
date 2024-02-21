import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Field } from '@alifd/next';

import { combineReducers, createStore } from 'redux';
import { type DispatchProp, Provider, connect } from 'react-redux';

interface IState {
    email: string;
}

function formReducer(
    state: IState = { email: 'frankqian@qq.com' },
    action: { type: 'save_fields'; payload: IState }
) {
    switch (action.type) {
        case 'save_fields':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

interface DemoProps extends DispatchProp<IState> {
    email: string;
}

class Demo extends React.Component<DemoProps> {
    field = new Field(this, {
        onChange: (name, value) => {
            console.log('onChange', name, value);
            this.field.setValue('newlen', value.length);
            this.props.dispatch?.({
                type: 'save_fields',
                payload: {
                    [name]: value,
                },
            });
        },
    });

    componentDidUpdate(prevProps: Readonly<DemoProps>) {
        if (prevProps.email !== this.props.email) {
            this.field.setValues({
                email: this.props.email,
                newlen: this.props.email.length,
            });
        }
    }

    setEmail() {
        this.props.dispatch?.({
            type: 'save_fields',
            payload: {
                email: 'qq@gmail.com',
            },
        });
    }

    render() {
        const init = this.field.init;

        const newLen = init('newlen', { initValue: this.props.email.length });

        return (
            <div>
                <Input
                    {...init(
                        'email',
                        { initValue: this.props.email },
                        {
                            rules: [{ required: true, type: 'email', message: 'at least 5 chars' }],
                        }
                    )}
                />
                now length is:{newLen.value}
                <p>email: {this.props.email}</p>
                <Button onClick={this.setEmail.bind(this)}>set</Button>
            </div>
        );
    }
}

const ReduxDemo = connect<IState, unknown, unknown, { formReducer: IState }>(state => {
    return {
        email: state.formReducer.email,
    };
})(Demo);

const store = createStore(
    combineReducers({
        formReducer,
    })
);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ReduxDemo />
        </div>
    </Provider>,
    mountNode
);
