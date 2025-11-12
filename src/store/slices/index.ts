/**
 * redux slices
 * Author:huangshouhua
 * Date:2025-11-12
 */
import { combineReducers } from "@reduxjs/toolkit";
import resume from "./resume";
const rootReducer = combineReducers({
  resume,
});
export { rootReducer };
export default { resume };
