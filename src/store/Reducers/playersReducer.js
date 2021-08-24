import { Players } from "../Actions/players";

const initialstate = {
  playersData: [],
};

const PositionReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Players: {
      return {
        ...state,
        playersData: [...state.playersData, action.payload],
      };
    }

    default:
      return state;
  }
};
export default PositionReducer;
