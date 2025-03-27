import { createStore } from "redux";
import rootReducers from "./reducers";

const storeCart = createStore(rootReducers);

export default storeCart;