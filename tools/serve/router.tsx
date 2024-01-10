import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Demo from './demo';

const Theme = React.lazy(() => import('./theme'));

function App() {
    return (
        <Router forceRefresh>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Demo</Link>
                        </li>
                        <li>
                            <Link to="/theme">Theme</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/theme">
                        <React.Suspense fallback={null}>
                            <Theme />
                        </React.Suspense>
                    </Route>
                    <Route path="/">
                        <Demo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.getElementById('root'));
