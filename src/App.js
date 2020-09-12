import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
// import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Blob } from "react-blob";
import Wave from "react-wavify";
import Converter from "./Converter";
import LandingPage from "./LandingPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    height: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    // color: "#ffffff",
  },
  content: {
    minHeight: "80vh",
  },
  displayNoneSmDown: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const BackgroundBlob = ({ style, props, children }) => (
  <Blob
    size="100vh"
    style={{
      position: "absolute",
      maxWidth: "70vw",
      maxHeight: "70vw",
      top: "-15%",
      right: "-15%",
      zIndex: -1,
      backgroundColor: "#1c4422", //"#21D4FD",
      color: "white",
      opacity: 0.6,
      fontSize: "50vh",
      ...style,
    }}
    {...props}
  >
    {children}
  </Blob>
);

const FixedWave = () => (
  <Wave
    fill="#f79902"
    paused={false}
    options={{
      height: 20,
      amplitude: 20,
      speed: 0.15,
      points: 3,
    }}
  />
);

function App() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  return (
    <div className="app">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <img
            alt="biogas"
            src="biogas_logo_transp.png"
            style={{ height: 100 }}
          />
          {/* <Typography variant="h5" className={classes.title}>
            Conversor Biogás - UNIDO
          </Typography> */}
          <span style={{ flexGrow: 1 }} />
          <img
            alt="unido"
            src="unido_logo.png"
            className={classes.displayNoneSmDown}
          />
        </Toolbar>
      </AppBar>
      <BackgroundBlob>
        <img src="lonas.jpg" alt="lonas" />
      </BackgroundBlob>
      <div className={classes.content}>
        {index === 0 ? <LandingPage setIndex={setIndex} /> : <Converter />}
      </div>
      <FixedWave />
    </div>
  );
}

export default App;
