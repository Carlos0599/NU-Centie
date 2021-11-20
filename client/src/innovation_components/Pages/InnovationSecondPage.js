import React from "react";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AppBar, Container, Toolbar, Tab } from "@material-ui/core";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    marginRL: {
      
      marginBottom: 30,
    },
    toolbar: {
      display: "flex",
      minheight: "100vh",
      flexdirection: "column",
    },
    root: {
      display: "block",
    },
    button: {
      borderRadius: 30,
    },
  };
});

var cardStyle = {
  display: "block",
  width: "auto",
  transitionDuration: "0.3s",
  height: "auto",
};

var cardHeight = {};
  

export default function InnovationSecondPage(){

  const location = useLocation()
  const innovation = location.state.innovation
  const innovator = location.state.innovator
  const classes = useStyles();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

    <div>
      <Grid
        container
        alignItems="Stretch"
        spacing={2}
        className={classes.marginRL}
      >
        <Grid item component={Card} xs={6} md={4} elevation={10}>
          <CardMedia
            style={cardStyle}
            component="img"
            height="194" 
            image={`data:image/jpeg;base64,${Buffer.from(innovation.innovation_pictures?.data).toString(
              `base64`
            )}`}
          />
        </Grid>

        
        <Grid item component={Card} xs={4} md={8} elevation={10} display='block'>
          <CardContent style={cardStyle}>
            <Typography variant="h5" color="primary">
              Innovations/
            </Typography>
            <Typography variant="h3" display="block">
              {innovation.innovation_title}
            </Typography>
            <Typography variant="h5">Innovator/s: {innovator.innovator_fname} {innovator.innovator_lname}</Typography>
            <Typography variant="subtitle">
              <strong>Status:</strong> {innovation.innovation_status}
            </Typography>
            <TabContext value={value}>
              <CardActions>
                <TabList
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: { background: "#30408d" },
                  }}
                >
                  <Tab label="Description" value="1" />
                  <Tab label="Stories" value="2" />
                </TabList>
              </CardActions>
              <TabPanel value="1">
                <Typography display="flex" style={{ height: 400 }}>
                {innovation.innovation_description}
                </Typography>
              </TabPanel>

              <TabPanel value="2">
                <Typography display="flex" style={{ height: 400 }}>
                {innovation.innovation_story}
                </Typography>
              </TabPanel>
            </TabContext>
            <div
              style={{ justifyContent: "end", display: "flex", columnGap: 20 }}
            >
              <Button variant="contained" color="default" size="large" href="/innovation">
                Back
              </Button>
              <Link
              to={{
                pathname: "/innovationInvest",
                state: {innovation : innovation,
                        innovator : innovator
                }
                }}>
              <Button variant="contained" color="primary" size="large">
                Invest
              </Button>
              </Link>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
