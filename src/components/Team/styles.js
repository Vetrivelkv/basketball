import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    display: "block",
    width: "300px",
    height: "350px",
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
    marginTop:'20px'
  },
}));

export { styles };
