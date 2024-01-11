import React from 'react';
// @ts-expect-error __doc
import doc from '__doc';
// @ts-expect-error __demos
import demos from '__demos';
import '__scss';
import './demo.css';

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

export default function Demo() {
    const nextLang = window.lang === 'zh' ? 'en' : 'zh';
    return (
        <div className="demo">
            <div className="demo-actions">
                <button
                    className="demo-actions-item"
                    onClick={() => {
                        fetch(`/changelang.json?lang=${nextLang}`);
                    }}
                >
                    {nextLang}
                </button>
            </div>
            <section className="demo-doc" dangerouslySetInnerHTML={{ __html: doc }}></section>
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
