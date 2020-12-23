# 垂直模式

- order: 1

对于点型和圆圈型的 Step 组件而言，可以通过设置 `direction` 属性设置其展示方向为垂直。
箭头形不支持垂直模式。

:::lang=en-us

# Vertical mode

- order: 1

For type `dot` and `circle` Step components, you can set their orientation to vertical by setting the `direction` property.
While, type `arrows` do not support vertical mode.

:::

---

````jsx
import { useState, useEffect, useCallback } from 'react';
import { Button, Step, Radio } from '@alifd/next';

const Step1Content=()=>{
   const [conditions, setconditions] = useState([]);
   const createNewSelectItem = () => {
        const newType = {
            type: 'null',
            fieldName: 'null',
        };
        const newConditions = [...conditions,newType];
        setconditions(newConditions);
    };
    return(<div>
        {
            conditions && conditions.length > 0 &&
            conditions.map((item,index)=>
                <div key={`step-content-${  index}`} style={{width:'100%', maxWidth: 200, height:20, background:'#2196f3', margin:'10px 0'}}/>
            )
        }
        <Button onClick={createNewSelectItem}>add new div</Button>
    </div>);
};
const CreateDemo=()=>{
    const [conditions, setconditions] = useState([]);
    const [direction, setDirection] = useState('ver');
    const createNewSelectItem = () => {
        const newType = {
            type: 'null',
            fieldName: 'null',
        };
        const newConditions = [...conditions,newType];
        setconditions(newConditions);
    };
    console.log('direction: ', direction);
    return(
    <div>
        <Radio.Group
            style={{padding: 30}}
            shape="button"
            value={direction}
            onChange={setDirection}
          >
            <Radio value={'hoz'}>hoz</Radio>
            <Radio value={'ver'}>ver</Radio>
        </Radio.Group>
        <Step current={1} direction={direction} animation style={{ marginTop: 30 }}>
            <Step.Item title={"What would youlike to test?"} content={'test'} />
            <Step.Item title={"What would youlike to test?"} content={<Step1Content />} />
            <Step.Item title={"A bit more on the background"} content={'test'} />
        </Step>
    </div>
  );
};
ReactDOM.render(<CreateDemo/>, mountNode);
````
