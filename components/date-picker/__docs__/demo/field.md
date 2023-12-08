# 与 Field 结合

- order: 12

与 Field 结合使用，简单示范自定义返回值

:::lang=en-us
# Field

- order: 12

Use case with Field.

:::

---

````jsx
import { DatePicker, Field, Button } from '@alifd/next';

const { RangePicker, YearPicker, MonthPicker } = DatePicker;

class App extends React.Component {

    field = new Field(this);

    printData = () => {
        this.field.validate((err, values) => {

            if (err) {
                console.error('Error: ', err);
                return;
            }

            console.log('datepicker: %s', values.date.format('YYYY-MM-DD'));
            console.log('monthpicker: %s', values.month.format('YYYY-MM'));
            console.log('yearpicker: %s', values.year.format('YYYY'));
            const range = values.range;
            console.log('rangepicker: [%s, %s]', range[0] && range[0].format('YYYY-MM-DD'), range[1] && range[1].format('YYYY-MM-DD'));
        });
    }

    printError = (name) => {
        if (this.field.getError(name)) {
            return <span className="error-msg">{this.field.getError(name).join(',')}</span>;
        }
    }

    render() {
        const init = this.field.init;

        return (
            <div>
                <DatePicker {...init('date', { rules: [{
                    required: true,
                    message: '请选择日期'
                }] })} />{this.printError('date')}<br /><br />
                <MonthPicker {...init('month', { rules: [{
                    required: true,
                    message: '请选择月份'
                }] })} />{this.printError('month')}<br /><br />
                <YearPicker {...init('year', { rules: [{
                    required: true,
                    message: '请选择年份'
                }] })} />{this.printError('year')}<br /><br />
                <RangePicker {...init('range', { rules: [{
                    required: true,
                    message: '请选择日期范围'
                }] })} />{this.printError('range')}<br /><br />
                <Button onClick={this.printData}>Print to Console</Button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````

````css
.error-msg {
    color: #E72B00;
    font-size: 12px;
    margin-left: 10px;
}
````
