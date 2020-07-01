import {combineReducers} from "redux";
import сatalog from "./catalog/catalog";
import user from "./user/user";
import NameSpaces from "./name-spaces";

console.log()
export default combineReducers({
  [NameSpaces.Catalog]: сatalog,
  [NameSpaces.User]: user,
});
