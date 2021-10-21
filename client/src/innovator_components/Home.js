import React, { Component, UseState } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import { GlobalStyle } from "../innovator_components/globalStyles";
import Hero from "../innovator_components/Hero/index";
import Products from "../innovator_components/Products/index";

import InnovYear from "../innovator_components/InnovYear/index";
// import App from "./";
import { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
  const [innovBest, setInnovatorBest] = useState([]);
  const [featured, setFeaturedInnovs] = useState([]);

  const GetBestInnovator = () => {
    console.log("we here at get best innovators");
    Axios.get("http://localhost:3003/grrrr").then((response) => {
      console.log(response);
      setInnovatorBest(response.data);
    });
  };

  const GetFeaturedInnovs = () => {
    console.log("we here at get featured innovators");
    Axios.get("http://localhost:3003/featuredinnov").then((response) => {
      console.log(response);
      setFeaturedInnovs(response.data);
    });
  };

  // var blob = innovBest[0].innovator_picture;

  //       var reader = new FileReader();
  //   reader.readAsDataURL(blob);
  //   reader.onloadend = () => {
  //   var base64data = reader.result;
  //   console.log(base64data);
  // }

  //   function blobToBase64(blob) {
  //     return new Promise((resolve, _) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => resolve(reader.result);
  //       reader.readAsDataURL(blob);
  //     });
  //   }

  useEffect(() => {
    let ignore = false;
    if (!ignore) GetBestInnovator();
    GetFeaturedInnovs();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="App">
      <Route>
        <Hero />
        <GlobalStyle />

        {/* {innovBest.map((val, key ) => {
               return <div> {val.innovator_fname} </div>
              // return <Card
              //   title={val.innovator_fname + ' ' + val.innovator_lname}
              //   date={dateFormat(val.innovator_date, "mm/dd/yyyy")}
              //   image={val.innovator_picture}
              //   description={val.innovator_story}
              //   liked={val.innovator_like}
              //   likeCount={val.innovator_like}
              // />
             })} */}

        <InnovYear heading="THE INNOVATOR OF THE YEAR" data={innovBest} />
        <Products heading="FEATURED" heading1="INNOVATORS" data={featured} />

      </Route>
    </div>
  );
}

export default Home;
