# 基本

- order: 0

基本用法，打开和关闭。

:::lang=en-us
# Basic

- order: 0

First dialog
:::
---

````jsx
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog } from '@alifd/next';

function Demo() {
    const appRef = useRef(null);

    useEffect(() => {
        appRef.current.style.overflow = 'hidden';
        // Overlay.beforeOpen will be called in next moment
        // At that time the value of ContainerNode.overflow is hidden
        Dialog.show({
            popupContainer: 'app',
            content: 'Dialog Content',
            onOk() {
                appRef.current.style.overflow = '';
                // Overlay.beforeClose will be called after the assign
                // so the value is reset to 'hidden'
                setTimeout(() => {
                    console.log(appRef.current.style.overflow === 'hidden')
                })
            }
        })

    }, []);

    return <div id="app" ref={appRef} style={{ height: 1200 }}>Dialog Demo</div>;
}


ReactDOM.render(<Demo />, mountNode);
````
````css

.next-dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  padding: 40px;
  overflow: auto;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.next-dialog-container:before {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  content: "";
}

.next-dialog-container .next-dialog {
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
````
