import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

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

class SlickGoTo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0, // The initial value here need to be set to 0 for `activeIndex`. If you want the initial as 0 , you can use the `defaultActiveIndex` property to set.
        };
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(e) {
        this.setState({
            index: parseInt(e.target.value),
        });
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            activeIndex: this.state.index,
        };
        return (
            <div>
                <div className="demo-item-title">Pull the scroll bar to switch:</div>
                <input
                    onChange={this.changeHandler}
                    defaultValue={0}
                    type="range"
                    min={0}
                    max={3}
                />
                <Slider {...settings}>
                    {slides.map((item, index) => (
                        <div key={index} className="slider-img-wrapper">
                            <img src={item.url} alt={item.text} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

ReactDOM.render(<SlickGoTo />, mountNode);
