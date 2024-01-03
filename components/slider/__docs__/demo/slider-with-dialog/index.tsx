import React from 'react';
import ReactDOM from 'react-dom';
import { Slider, Dialog, Button } from '@alifd/next';
import PropTypes from 'prop-types';

const slides = [
    {
        url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
        text: 'Tape Player Skin Design Competition',
    },
    {
        url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
        text: 'Mobile Phone Taobao Skin Call',
    },
    {
        url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
        text: 'Design Enabling Public Welfare',
    },
    {
        url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
        text: 'Amoy Doll Design Competition',
    },
];

const dialogStyle = {
    width: '800px',
};

class FlappySlider extends React.Component {
    static propTypes = {
        slides: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };

        this.setVisible = this.setVisible.bind(this);
    }

    setVisible() {
        this.setState(prevState => {
            return {
                visible: !prevState.visible,
            };
        });
    }

    render() {
        return (
            <div className="demo-wrapper">
                <Button type="primary" onClick={this.setVisible}>
                    Marquee Banner
                </Button>
                <Dialog
                    visible={this.state.visible}
                    title="Alibaba.com"
                    footer={false}
                    style={dialogStyle}
                    animation={false}
                    onClose={this.setVisible}
                >
                    <Slider>
                        {this.props.slides.map((item, index) => (
                            <div key={index} className="slider-img-wrapper">
                                <img key={index} src={item.url} alt={item.text} />
                            </div>
                        ))}
                    </Slider>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<FlappySlider slides={slides} />, mountNode);
