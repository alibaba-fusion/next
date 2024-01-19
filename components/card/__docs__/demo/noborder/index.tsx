import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from '@alifd/next';

const commonProps = {
    subTitle: 'SubTitle',
    extra: (
        <Button text type="primary">
            Link
        </Button>
    ),
};

ReactDOM.render(
    <div>
        <Card free hasBorder={false} style={{ width: 300 }}>
            <Card.Header title="Simple Card" {...commonProps} />
            <Card.Content>
                Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum
                nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat
                pertinacia an, cu verterem praesent quo.
            </Card.Content>
        </Card>
    </div>,
    mountNode
);
