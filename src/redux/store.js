import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'

import { themeReducer } from './theme/themeReducer'
import { dataReducer } from './dataReducer/dataReducer'
import { authReducer } from './authReducer/authReducer'

const rootReducer = combineReducers({ themeReducer, dataReducer, authReducer })

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export { store }