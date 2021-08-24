import React from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Snackbar } from "@material-ui/core";
import { styles } from "./styles";
import { positionsData } from "../../store/Actions/positions";
import { playersData } from "../../store/Actions/players";
import { Autocomplete } from "@material-ui/lab";
import MuiAlert from "@material-ui/lab/Alert";
import { useRef } from "react";

const Team = () => {
  const classes = styles();
  const dispatch = useDispatch();
  dispatch(positionsData());

  const positionDataArr = useSelector(
    (state) => state.PositionReducer.positionData
  );
  const playersDataArr = useSelector(
    (state) => state.PlayersReducer.playersData
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [height, setHeight] = useState("");
  const [heightError, setHeightError] = useState("");
  const [position, setPosition] = useState([]);
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const formRef = useRef();

  const selectPositon = (_, selectedOptions) => {
    setPosition(selectedOptions);
  };

  const savePlayer = (e) => {
    e.preventDefault();

    if (validated) {
      const findName = (item) =>
        item.firstName === firstName && item.lastName === lastName;

      switch (true) {
        case playersDataArr.some(findName): {
          setError("* Player Name Already Exist");
          break;
        }

        default:
          const params = {
            firstName,
            lastName,
            height,
            position,
          };
          setError("");
          setValidated(true);
          dispatch(playersData(params));
          setOpenAlert(!openAlert);
          // e.target.reset();

          setFirstName("");
          setLastName("");
          setPosition([]);
          setHeight("");
      }
    }
  };

  const closeToastMsg = () => {
    setOpenAlert(!openAlert);
  };

  return (
    <div>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={savePlayer}
        ref={formRef}
      >
        <TextField
          id="firstName"
          label="FirstName"
          name="firstName"
          value={firstName}
          style={{ width: "300px", marginBottom: "20px" }}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextField
          id="lastName"
          label="Last Name"
          name="lastName"
          value={lastName}
          style={{ width: "300px", marginBottom: "20px" }}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <TextField
          id="height"
          label="height"
          name="height"
          required
          value={height}
          error={heightError.length > 0 ? true : false}
          helperText={heightError}
          style={{ width: "300px", marginBottom: "20px" }}
          onChange={(e) => {
            var reg = /^\d+$/;

            const value = e.target.value;
            if (reg.test(value)) {
              setHeight(e.target.value);
              setValidated(true);
              setHeightError("");
            } else {
              setHeightError("Height Must be a numberic value");
              setValidated(false);
              setHeight(e.target.value);
            }
          }}
        />

        <Autocomplete
          multiple
          filterSelectedOptions
          name="position"
          value={position}
          options={positionDataArr}
          getOptionLabel={(option) => (option.position ? option.position : "")}
          onChange={selectPositon}
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              required={position.length === 0 ? true : false}
              label="Position"
              InputProps={{
                ...params.InputProps,
              }}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.submitBtn}
        >
          Save
        </Button>
        <div style={{ color: "red", marginTop: "20px" }}>{error}</div>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openAlert}
        autoHideDuration={3000}
        onClose={closeToastMsg}
      >
        <Alert onClose={closeToastMsg} severity="success">
          Player Created Successfully
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Team;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
