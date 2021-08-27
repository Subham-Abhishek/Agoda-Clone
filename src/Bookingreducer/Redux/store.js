import {
    applyMiddleware,
    compose,
    createStore
} from "redux"
import {
    reducer
} from "./reducer";
import thunk from "redux-thunk"
const composeEnhancers =
    process.env.NODE_ENV === "development" ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    null || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(reducer, enhancer)