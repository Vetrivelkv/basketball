import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    width: "650px",
    height: "450px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submitBtn: {
    borderRadius: "10px",
    float: "right",
    background: "#4F67F6",
  },
}));

export default useStyles;
