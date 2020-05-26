import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './Search/Search';
import Result from './Results/Result';
import ResultList from './Results/ResultList';

export default class Routes extends React.Component {
     render() {
          return (
               <Switch>
                    <Route
                         exact path= '/'
                         component={Search}
                    >
                    </Route>
                    <Route
                         exact path= '/people/?search=:searchInput'
                         component={ResultList}
                    >

                    </Route>
                    <Route
                         exact path= '/people/:id}'
                         component={Result}
                    >
                    </Route>
               </Switch>
          )
     }
}