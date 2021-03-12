import React from 'react';

import { BrowserRouter as Router , Route} from 'react-router-dom';
import start from './components/StartPage/StartPage';
import search from './components/Search/Search'
import res from './components/Search/Results'

const App = () => (
    <Router>
        <Route path="/" exact component={start}/>
        <Route path = "/search" component = {search} />
        <Route path = "/result" component = {res} />
    </Router>
);

export default App;