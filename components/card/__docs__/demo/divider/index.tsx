import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, Box } from '@alifd/next';

const commonProps = {
    title: 'Simple Card',
    style: { width: 300 },
    subTitle: 'Sub-title',
    extra: (
        <Button text type="primary">
            Link
        </Button>
    ),
};

ReactDOM.render(
    <Box direction="row" spacing={20}>
        <Card free style={{ width: 300 }}>
            <Card.Header {...commonProps} />
            <Card.Divider />
            <Card.Content>
                Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum
                nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat
                pertinacia an, cu verterem praesent quo.
            </Card.Content>
            <Card.Divider />
            <Card.Actions>
                <Button type="primary" key="action1" text>
                    Action 1
                </Button>
                <Button type="primary" key="action2" text>
                    Action 2
                </Button>
            </Card.Actions>
        </Card>
        <Card free style={{ width: 300 }}>
            <Card.Header {...commonProps} />
            <Card.Divider inset />
            <Card.Content>
                Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum
                nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat
                pertinacia an, cu verterem praesent quo.
            </Card.Content>
            <Card.Divider inset />
            <Card.Actions>
                <Button type="primary" key="action1" text>
                    Action 1
                </Button>
                <Button type="primary" key="action2" text>
                    Action 2
                </Button>
            </Card.Actions>
        </Card>
    </Box>,
    mountNode
);
