import { combineReducers } from "redux";
import PositionReducer from "./positionReducer";
import PlayersReducer from "./playersReducer";
import TeamReducer from "./teamReducer";

const rootReducer = combineReducers({
  PositionReducer,
  PlayersReducer,
  TeamReducer,
});

export default rootReducer;
