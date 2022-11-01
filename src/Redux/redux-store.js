import {combineReducers, createStore} from "redux";
import menuReducer from "./menuReducer";
import homeReducer from "./homeReducer";
import blogReducer from "./blogReducer";
import aboutReducer from "./aboutReducer";
import servicesReducer from "./servicesReducer";


//state как обьект, параметры состояния, редакс создаст обьект состояния как был state, у него будут свойства и методы, которые мы передадим
let reducers = combineReducers({
    aboutPage: aboutReducer,
    homePage: homeReducer,
    menuPage: menuReducer,
    blogPage: blogReducer,
    servicesPage: servicesReducer

});

let store = createStore(reducers);

export default store;