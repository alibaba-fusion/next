# 自定义动画指示符

- order: 3

通过`indicator`自定义动画指示符，传入动画元素。


:::lang=en-us
# Custom Animation Indicator

- order: 3

Use custom animation indicator.
:::

---


````jsx
import { Loading } from '@alifd/next';

const indicator1 = (<div className="load-container load1">
    <div className="loader">loading...</div>
</div>);
const indicator7 = (<div className="load-container load7">
    <div className="loader">loading...</div>
</div>);

ReactDOM.render(<div>
    <Loading tip="default">
        <div className="demo">test</div>
    </Loading>
    <Loading indicator={indicator1}>
        <div className="demo">test</div>
    </Loading>
    <Loading indicator={indicator7}>
        <div className="demo">test</div>
    </Loading>
</div>, mountNode);
````

````css
.demo {
    width: 200px;
    text-align: center;
    padding:50px;
}
.next-loading {
    margin-bottom: 5px;
}

/* start copy from here */


.load-container {
  margin: 0 auto;
  position: relative;
}

/* animation 1 */
.load1 .loader,
.load1 .loader:before,
.load1 .loader:after {
  background: #5584FF;
  color: #5584FF;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.load1 .loader:before,
.load1 .loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.load1 .loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load1 .loader {
  text-indent: -9999em;
  margin: 0 auto !important;
  position: relative;
  font-size: 11px;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.load1 .loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0 ;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em ;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0 ;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em ;
    height: 5em;
  }
}


/* animation 2 */
.load7 .loader:before,
.load7 .loader:after,
.load7 .loader {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
  top: -36px;
}
.load7 .loader {
  margin: 0 auto !important;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.load7 .loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load7 .loader:after {
  left: 3.5em;
}
.load7 .loader:before,
.load7 .loader:after {
  content: '';
  position: absolute;
  top: 0;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em #5584FF;
  }
  40% {
    box-shadow: 0 2.5em 0 0 #5584FF;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em #5584FF;
  }
  40% {
    box-shadow: 0 2.5em 0 0 #5584FF;
  }
}
````
