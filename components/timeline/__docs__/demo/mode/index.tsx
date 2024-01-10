import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline, Select } from '@alifd/next';

const TimelineItem = Timeline.Item;

class Demo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            mode: 'alternate',
        };
    }

    onTimelineMode = (value: string) => {
        this.setState({ mode: value });
    };

    render() {
        return (
            <div>
                <div className="custom-step-option">
                    <Select
                        placeholder="please choose timeline mode"
                        onChange={this.onTimelineMode}
                        className="custom-select"
                        defaultValue="alternate"
                    >
                        {['left', 'alternate'].map((item, index) => (
                            <Select.Option value={item} key={index}>
                                {item}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <Timeline
                    mode={this.state.mode}
                    fold={[
                        { foldArea: [1, 2], foldShow: false },
                        { foldArea: [5], foldShow: false },
                    ]}
                >
                    <TimelineItem
                        title="Sign"
                        timeLeft="2020-09-09"
                        content="[Hangzhou] has received the sign, the signer is Alibaba Post Office, thank you for using STO, looking forward to serving you again"
                        time={'2016-06-10 10:30:00'}
                        state="process"
                    />
                    <TimelineItem
                        title="Delivery"
                        timeLeft="2020-09-09"
                        content="[Hangzhou] has received the sign, the signer is Alibaba Post Office, thank you for using STO, looking forward to serving you again"
                        time={'2016-06-10 09:30:00'}
                    />
                    <TimelineItem
                        title="Delivery"
                        timeLeft="2020-09-09"
                        content="[Hangzhou] Zhejiang Hangzhou Binjiang Company dispatches members for you"
                        time={'2016-06-10 09:03:00'}
                    />
                    <TimelineItem
                        title="Transport"
                        timeLeft="2020-09-09"
                        content="[Hangzhou] Zhejiang Hangzhou Transshipment Center has been issued"
                        time={'2016-06-10 06:10:00'}
                    />
                    <TimelineItem
                        title="Transport"
                        timeLeft="2020-09-09"
                        content="[Dongguan City] Guangdong Dongguan Transshipment Center has been issued"
                        time={'2016-06-09 18:00:00'}
                    />
                    <TimelineItem
                        title="Processing"
                        timeLeft="2020-09-09"
                        content="[Dongguan City] Shentong Express Guangdong Fenggang Branch of Guangdong Province"
                        time={'2016-06-09 16:12:00'}
                    />
                    <TimelineItem
                        title="Processing"
                        timeLeft="2020-09-09"
                        content="[Dongguan City] The merchant is informing the express company to insert"
                        time={'2016-06-09 14:00:00'}
                    />
                    <TimelineItem
                        title="Processing"
                        timeLeft="2020-09-09"
                        content="[Dongguan City] Your order to be picked"
                        time={'2016-06-09 10:12:19'}
                    />
                    <TimelineItem
                        title="Processing"
                        timeLeft="2020-09-09"
                        content="[Dongguan] Your order starts processing"
                        time={'2016-06-09 10:01:09'}
                    />
                </Timeline>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
