import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Enjoyit from './components/Enjoyit/Enjoyit';
import Chat from './components/Chat/Chat';

const App = () => (
    <Router>
        <Route path="/" exact component={Enjoyit} />
        <Route path="/chat" exact component={Chat} />
    </Router>
);

export default App;