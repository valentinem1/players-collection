import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import metadataReducer from './metadataReducer';

const rootReducer = combineReducers({ 
    players: playersReducer,
    metadata: metadataReducer
});

export default rootReducer;