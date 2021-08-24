export const Players = "Players";

export const playersData = (params) => async (dispatch) => {
  dispatch({
    type: Players,
    payload: params,
  });
};
