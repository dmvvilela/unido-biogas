import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import introJs from "intro.js";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
    margin: theme.spacing(6),
  },
  paperWrapper: {
    position: "absolute",
    top: "40%",
    left: "20%",
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    width: 440,
    padding: theme.spacing(2),
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(3),
  },
  marginBottom: {
    marginBottom: theme.spacing(4),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "40ch",
  },
  convert: {
    // color: "#ffffff",
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Converter = (props) => {
  const classes = useStyles();
  const [fDOpen, setFDOpen] = useState(true);
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    introJs().setOptions({
      skipLabel: "Pular",
      nextLabel: "Próximo",
      doneLabel: "Pronto",
      prevLabel: "Anterior",
    });
    // .start();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* <Box justifyContent="center" alignItems="center" flexGrow={1}> */}
      <Grid container spacing={3} style={{ width: "100%", height: "100%" }}>
        <Grid item xs={12}>
          <Typography variant="h2" color="primary" className={classes.title}>
            Conversor Biogás - UNIDO
          </Typography>
          <Typography variant="h5" color="secondary" className={classes.title}>
            Converta volume de biogás para Diesel, GLP ou kWH.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.paperWrapper}>
            <Paper className={classes.paper}>
              <div>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  data-intro="Escolha para qual unidade deseja converter o biogás."
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    Diesel
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    GLP
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    kWh
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <TextField
                label="Biogás"
                id="standard-start-adornment"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">m³</InputAdornment>
                  ),
                }}
                data-intro="Escolha o volume de biogás que deseja converter."
              />
              <div>
                <Fab
                  color="primary"
                  className={classes.fab}
                  data-intro="Clique aqui para realizar a conversão."
                >
                  <ShuffleIcon className={classes.convert} />
                </Fab>
              </div>
              <TextField
                label="Biogás"
                id="standard-start-adornment"
                className={clsx(classes.marginBottom, classes.textField)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">m³</InputAdornment>
                  ),
                }}
                disabled
                data-intro="Verifique o resultado de sua conversão na unidade escolhida."
              />
            </Paper>
          </div>
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item xs={12} md={4}>
          {/* <div className={classes.paperWrapper}> */}
          <Paper
            className={classes.paper2}
            data-intro="Aprenda curiosidades sobre cada unidade convertida."
          >
            <Typography
              variant="h5"
              color="secondary"
              className={classes.title}
            >
              Você Sabia?
            </Typography>
            <Divider />
            <Typography variant="body1" className={classes.title}>
              O consumo médio de energia de uma família no brasil é de X kwH.
            </Typography>
          </Paper>
          {/* </div> */}
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
};

export default Converter;
