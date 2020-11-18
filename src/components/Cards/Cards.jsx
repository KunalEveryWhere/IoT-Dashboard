import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./Cards.css";

const easingFn = (t, b, c, d) => {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
};

const Cards = ({ data }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className="Card_mod">
            <CardContent>
              <div className="sup-text">Total Water</div>
              <div className="value">
                <CountUp
                  start={0}
                  end={data.total + 1}
                  duration={1.8}
                  easingFn={easingFn}
                  separator=","
                />
              </div>
              <div className="sub-text"> in Litres </div>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className="Card_mod">
            <CardContent>
              <div className="sup-text">Water in Tank</div>
              <div className="progressbar">
                <CircularProgressbar value={data.tank} text={`${data.tank}%`} />
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Cards;
// 130018530021883