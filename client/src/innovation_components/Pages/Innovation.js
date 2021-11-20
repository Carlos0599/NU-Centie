import React from "react";
import { Grid, makeStyles, Typography, Tab } from "@material-ui/core";
import {
  innovationSampleContent,
  innovationStatusContent,
} from "../InnovationsContentSample";
import Footer from "../../NavbarFooter/Footer";
import InnovationCard from "../InnovationCard";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Heading from "../innovation_Header/Heading";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Axios from 'axios';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginLeft: "30px",
    marginRight: "30px",
  },
  typography: {
    fontFamily: "Raleway",
    fontWeight: "bold",
  },
});


export default function Create() {

  const [innovationList, setInnovationList] = useState([]);

  useEffect(()=> {
    Axios.get('http://localhost:3003/api/innovations').then((response)=>
    {setInnovationList(response.data);
    })
  },[]);

  const classes = useStyles();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
     <Heading/>     
     <br></br>

    <div className={classes.root}>
      {/* <Typography variant="h4" color="primary" classes={classes.typography}>
        INNOVATIONS
      </Typography>
      <Typography>Showing {innovationSampleContent.key} result</Typography> */}
      {/* <div style={{ backgroundColor: "#eef0ee", height: "50px", padding: 10 }}>
        </div> */}

        <div>
          <div >
          <Grid>

            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                TabIndicatorProps={{
                  style: { background: "#30408d" },
                }}
              >
                <h3>Sort by:</h3>
                <Tab label="Recent" value="1" />
                <Tab label="Status" value="2" />
              </TabList>
              <TabPanel value="1">
                <Grid container spacing={5}>
                  {innovationList.sort((a,b) => a.innovation_id  < b.innovation_id  ? 1 : -1).map((val) => (
                    <Grid item key={val.innovation_id} xs={12} sm={6} lg={4}>
                      <InnovationCard innovation={val}/>

                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              

              <TabPanel value="2">
                <Grid container spacing={5}>
                  {innovationList.sort((a,b) => a.innovation_status < b.innovation_status ? 1 : -1).map((val) => (
                    <Grid item key={val.innovation_id} xs={12} sm={6} lg={4}>
                      <InnovationCard innovation={val} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </TabContext >
            </Grid>
          </div>
        </div>
    </div>
    </>

  );
}
