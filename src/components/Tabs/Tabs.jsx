import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Team from "../Team/Team";
import Quarter from "../Quarter/Quarter";
import styles from "./styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = styles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <div className={classes.root}>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="BasketBall Team"
                style={{ background: "#818181" }}
                TabIndicatorProps={{ style: { background: "blue" } }}
              >
                <Tab label="Compose Team" {...a11yProps(0)} />
                <Tab label="First Quarter" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Team />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Quarter />
            </TabPanel>
          </div>
        </div>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid>
  );
}
