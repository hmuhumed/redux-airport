import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
/** TODO: import REDUX **/
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';




/** TODO: Add REDUCERS */
const count = (state = 0 , action ) => {
    console.log('Hey Im a reducer');
    if (action.type === 'ADD') {
        return state + 1
    }

    return state;
}

const airlineCount = (state = [] , action) => {
    if (action.type === 'ADD_AIRLINE'){
        console.log(`action.payload is ${action.payload}`)
        return [... state , action.payload] 
    }
    return state;
}

// Telling redux we want to use logger


/** TODO: Create store */
const storeInstance = createStore (
    combineReducers(
        {
            count, 
            airlineCount
        }
    ),

    applyMiddleware(
        logger
    )
)


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);