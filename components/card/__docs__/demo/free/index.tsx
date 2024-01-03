import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from '@alifd/next';

ReactDOM.render(
    <div>
        <Card className="free-card custom" free>
            <Card.Media image="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
            <div className="free-card-main">
                <Card.Header
                    title="Title"
                    subTitle="Sub Title"
                    extra={
                        <Button type="primary" text>
                            Link
                        </Button>
                    }
                />
                <Card.Content>
                    Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et.
                </Card.Content>
                <Card.Actions>
                    <Button type="primary" key="action1" text>
                        Action 1
                    </Button>
                    <Button type="primary" key="action2" text>
                        Action 2
                    </Button>
                </Card.Actions>
            </div>
        </Card>
        <br />
        <Card className="free-card" free>
            <Card.Media
                style={{ height: 140 }}
                image="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"
            />
            <Card.Header
                title="Title"
                subTitle="Sub Title"
                extra={
                    <Button type="primary" text>
                        Link
                    </Button>
                }
            />
            <Card.Divider />
            <Card.Content>
                Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum
                nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat
                pertinacia an, cu verterem praesent quo.
            </Card.Content>
            <Card.Actions>
                <Button type="primary" key="action1" text>
                    Action 1
                </Button>
                <Button type="primary" key="action2" text>
                    Action 2
                </Button>
            </Card.Actions>
        </Card>
    </div>,
    mountNode
);
