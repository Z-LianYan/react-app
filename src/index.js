import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

//rem
import './modules/rem.js'

//引入post，get方法
import './modules/axios-util'

//引入bus
import './modules/bus.js'

//引入provider
import { Provider } from 'react-redux'
import store from './store'




ReactDOM.render(
	<Provider store = {store}>
		<Router>
			<App />
		</Router>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
