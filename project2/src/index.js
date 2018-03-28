import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Build M-UI theme for app
const getTheme = () => {
    return getMuiTheme(baseTheme);
  };

const Container = () => (
  <MuiThemeProvider muiTheme={getTheme()}>
    <App/>
  </MuiThemeProvider>
)

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
