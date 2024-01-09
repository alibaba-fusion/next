import React from 'react';
import ReactDOM from 'react-dom';
// @ts-expect-error __doc
import doc from '__doc';
// @ts-expect-error __demos
import demos from '__demos';
import './demo.css';
import '../../index.scss';

function DemoItem({ id, doc, render }: { id: string; doc: string; render(): void }) {
    React.useEffect(() => {
        render();
    }, [id, render]);
    return (
        <div className="demo-list-item">
            <div className="demo-list-item-doc" dangerouslySetInnerHTML={{ __html: doc }}></div>
            <div className="demo-list-item-demo">
                <div id={id}></div>
            </div>
        </div>
    );
}

declare global {
    interface Window {
        lang: 'zh' | 'en';
    }
}

function App() {
    const nextLang = window.lang === 'zh' ? 'en' : 'zh';
    return (
        <div className="demo">
            <button
                className="demo-lang"
                onClick={() => {
                    fetch(`/changelang?lang=${nextLang}`);
                }}
            >
                {nextLang}
            </button>
            <div className="demo-doc" dangerouslySetInnerHTML={{ __html: doc }}></div>
            <br />
            <br />
            <h1>Demos</h1>
            <section className="demo-list">
                {demos.map(item => {
                    return <DemoItem key={item.id} {...item} />;
                })}
            </section>
        </div>
    );
}

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.getElementById('root'));
