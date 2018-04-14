import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import Components to be rendered.
import AttendanceDetail from './components/AttendanceDetail/AttendanceDetail';
import StudentSelection from './components/StudentSelection/StudentSelection';


export default(
    <BrowserRouter>
        <Switch>
            <Route component={ StudentSelection } exact path="/" />
            <Route component={ AttendanceDetail } path="/student/:id" />
        </Switch>
    </BrowserRouter>
)