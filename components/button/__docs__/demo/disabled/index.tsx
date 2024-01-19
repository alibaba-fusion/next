import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Box } from '@alifd/next';

ReactDOM.render(
    <div>
        <Box wrap direction="column" spacing={20}>
            <Box direction="row" spacing={20}>
                <Button type="primary">Primary</Button>
                <Button component="a" type="primary" disabled>
                    Primary
                </Button>
            </Box>
            <Box direction="row" spacing={20}>
                <Button type="secondary">Secondary</Button>
                <Button type="secondary" disabled>
                    Secondary
                </Button>
            </Box>
            <Box direction="row" spacing={20}>
                <Button type="normal">Normal</Button>
                <Button type="normal" disabled>
                    Normal
                </Button>
            </Box>
        </Box>
        <br />
        <div>
            <div className="ghost-light-background">
                <Button ghost="light" disabled>
                    Ghost Light
                </Button>
            </div>
            <div className="ghost-dark-background">
                <Button ghost="dark" disabled>
                    Ghost Dark
                </Button>
            </div>
        </div>
    </div>,
    mountNode
);
