import { Positions } from "../Actions/positions";

const initialstate = {
  positionData: [
    { position: "Point Guard (PG)" },
    { position: "Shooting Guard (SG)" },
    { position: "Small Forward (SF)" },
    { position: "Power Forward (PF)" },
    { position: "Center (C)" },
  ],
};

const PositionReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Positions:
      return {
        ...state,
        positionData: state.positionData,
      };
    default:
      return state;
  }
};
export default PositionReducer;
