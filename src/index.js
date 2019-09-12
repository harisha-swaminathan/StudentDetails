import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import FetchData from './components/FetchData';
import './styles/students.css'

const store = configureStore();
const jsx=(
    <Provider store={store}>
        <FetchData/>
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById('root'));


serviceWorker.unregister();
