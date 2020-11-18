import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";

import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import firebase from "firebase";

import "./Home.css";

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  state = {
    data: {
      tank: 0,
      total: 0,
      points: [
        { x: 1, y: 2 },
        { x: 3, y: 5 },
        { x: 7, y: -3 },
      ],
    },
    tank: 0,
    total: 0,
  };

  // toUpdateData() {
  //   return firebase
  //     .database()
  //     .ref("data/")
  //     .once("value")
  //     .then((snapshot) => {
  //       const total = snapshot.val().total;
  //       const tank = snapshot.val().tank;
  //       console.log(tank);
  //       this.setState({ data: tank, total });
  //     });
  // }

  componentDidMount() {
    firebase
      .database()
      .ref("data/")
      .once("value")
      .then((snapshot) => {
        let dataFromDB = snapshot.val();
        let { tank, total } = dataFromDB;
        console.log("tank: " + tank + " total: " + total);
        this.setState({ tank, total });
      });
  }

  render() {
    const { isLoggingOut, logoutError } = this.props;
    let toPublishValue = {
      tank: this.state.tank,
      total: this.state.total,
    };

    return (
      <div>
        <div className="title">Dashboard</div>
        <div className="sub">This is the ESP8266 IoT Dashboard</div>
        <div className="logout-btn">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleLogout}
            disableElevation
          >
            LogOut
          </Button>
        </div>
        <Cards data={toPublishValue} />
        <Chart data={this.state.data} />
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
  };
}
export default connect(mapStateToProps)(Home);
