import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { IntlProvider } from 'react-intl';


import './App.css';

import IntlRoute from './IntlRoute';
import Analytics from './components/Analytics/Analytics';
import ResumeScreen from './containers/ResumeScreen/ResumeScreen';


const theme = createMuiTheme({
  palette: {
    primary: blue,
    error: red,
  },
});

export default class App extends Component {
   render(){
     return (
       <IntlProvider>
         <MuiThemeProvider theme={theme}>
             <div className="App">
               <Route path="/resume.html" component={Analytics} />
               <Switch>
                 <IntlRoute
                   exact
                   path="/"
                   component={ResumeScreen}
                 />
               </Switch>
             </div>
         </MuiThemeProvider>
       </IntlProvider>
     );
   }
}
