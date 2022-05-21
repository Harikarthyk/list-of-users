import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";

const rootReducers = combineReducers({
    users
});

export default rootReducers;