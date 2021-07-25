import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store'
import {BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';
import {Provider} from "react-redux";


ReactDom.render(
    < BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


reportWebVitals();
