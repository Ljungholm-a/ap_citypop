import React from 'react';

import { BrowserRouter as Router , Route} from 'react-router-dom';
import start from './components/StartPage/StartPage';

const App = () => (
    <Router>
        <Route path="/" exact component={start}/>
    </Router>
);

export default App;