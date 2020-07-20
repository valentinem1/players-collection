import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import metadataReducer from './metadataReducer';
import sidebarReducer from './sidebarReducer';
import darkModeReducer from './darkModeReducer';

const rootReducer = combineReducers({ 
    players: playersReducer,
    metadata: metadataReducer,
    sidebar: sidebarReducer,
    darkMode: darkModeReducer
});

export default rootReducer;