import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store'
import {HashRouter} from 'react-router-dom';
import ReactDom from 'react-dom';
import {Provider} from "react-redux";


ReactDom.render(
    < HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root')
);


reportWebVitals();
