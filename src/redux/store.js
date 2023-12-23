import { legacy_createStore, combineReducers,applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'

import { themeReducer } from './theme/themeReducer'

const rootReducer = combineReducers({ themeReducer })

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export { store }