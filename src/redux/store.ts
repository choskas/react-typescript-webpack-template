import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import commonReducer from './common.reducer';

const rootReducer = combineReducers({
    exampleStore: commonReducer
})

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
let store;
export default function generateStore(){
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch