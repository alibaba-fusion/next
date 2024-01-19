import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Box } from '@alifd/next';

ReactDOM.render(
    <div>
        <Box direction="row" spacing={20}>
            <Button type="normal">Normal</Button>
            <Button type="primary">primary</Button>
            <Button type="secondary">Secondary</Button>
        </Box>
        <br />
        <Box direction="row" spacing={20}>
            <Button type="normal" text>
                Normal
            </Button>
            <Button type="primary" text>
                Primary
            </Button>
            <Button type="secondary" text>
                Secondary
            </Button>
        </Box>
        <br />
        <Box direction="row" spacing={20}>
            <Button type="normal" warning>
                Normal
            </Button>
            <Button type="primary" warning>
                Primary
            </Button>
        </Box>
    </div>,
    mountNode
);
