export const Team = "Team";

export const TeamData = (params) => async (dispatch) => {
  console.log(params);
  dispatch({
    type: Team,
    payload: params,
  });
};
