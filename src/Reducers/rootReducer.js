import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import metadataReducer from './metadataReducer';
import sidebarReducer from './sidebarReducer';
import darkModeReducer from './darkModeReducer';
import seasonsReducer from './seasonsReducer';
import playerStatsReducer from './playerStatsReducer';

const rootReducer = combineReducers({ 
    players: playersReducer,
    playerStats: playerStatsReducer,
    seasons: seasonsReducer,
    metadata: metadataReducer,
    sidebar: sidebarReducer,
    darkMode: darkModeReducer
});

export default rootReducer;