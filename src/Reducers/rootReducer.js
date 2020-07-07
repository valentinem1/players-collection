import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import metadataReducer from './metadataReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({ 
    players: playersReducer,
    metadata: metadataReducer,
    sidebar: sidebarReducer
});

export default rootReducer;