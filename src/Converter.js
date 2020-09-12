import React, { useState, useEffect } from "react";
import clsx from "clsx";
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
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
    margin: theme.spacing(6),
  },
  paper: {
    width: 440,
    padding: theme.spacing(3),
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(6),
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
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Converter = () => {
  const classes = useStyles();
  const [biogas, setBiogas] = useState("");
  const [other, setOther] = useState("0");
  const [unit, setUnit] = useState("Diesel");

  const handleChangeUnit = (event, newUnit) => {
    setOther(0);
    setUnit(newUnit);
  };

  function onChangeBiogas(event) {
    const value = event.target.value;
    if (value !== "" && isNaN(parseFloat(value.replace(",", ".")))) {
      return;
    }

    setBiogas(value);
  }

  function convertUnits() {
    const bg = parseFloat(biogas.replace(",", "."));
    let other;

    if (isNaN(bg)) {
      setOther(0);
      return;
    }

    switch (unit) {
      case "Diesel":
        other = bg * 0.69;
        break;
      case "GLP":
        other = bg * 0.53;
        break;
      case "kWh":
        other = bg * 2.07;
        break;
      default:
        return;
    }

    setOther(other.toFixed(2).replace(".", ","));
  }

  useEffect(() => {
    setTimeout(() => {
      introJs()
        .setOptions({
          skipLabel: "Pular",
          nextLabel: "Próximo",
          doneLabel: "Pronto",
          prevLabel: "Anterior",
        })
        .start();
    }, 500);
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={11}>
          <Typography variant="h2" color="primary" className={classes.title}>
            Conversor Biogás - UNIDO
          </Typography>
          <Typography variant="h5" color="secondary" className={classes.title}>
            Converta volume de biogás para Diesel, GLP ou kWH.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={3}
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={1} />
          <Grid item xs={11} md={5}>
            {/* <div className={classes.paperWrapper}> */}
            <Paper className={classes.paper}>
              <div>
                <ToggleButtonGroup
                  value={unit}
                  exclusive
                  onChange={handleChangeUnit}
                  aria-label="conversion unit"
                  data-intro="Escolha para qual unidade deseja converter o biogás."
                >
                  <ToggleButton value="Diesel" aria-label="left aligned">
                    Diesel
                  </ToggleButton>
                  <ToggleButton value="GLP" aria-label="centered">
                    GLP
                  </ToggleButton>
                  <ToggleButton value="kWh" aria-label="right aligned">
                    kWh
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <TextField
                label="Biogás"
                id="biogas"
                value={biogas}
                onChange={onChangeBiogas}
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
                  onClick={convertUnits}
                  data-intro="Clique aqui para realizar a conversão."
                >
                  <ShuffleIcon className={classes.convert} />
                </Fab>
              </div>
              <TextField
                label={unit}
                id="unit"
                value={other}
                className={clsx(classes.marginBottom, classes.textField)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {unit === "Diesel" ? "L" : unit === "GLP" ? "Kg" : "kWh"}
                    </InputAdornment>
                  ),
                }}
                disabled
                data-intro="Verifique o resultado de sua conversão na unidade escolhida."
              />
            </Paper>
            {/* </div> */}
          </Grid>
          <Hidden lgUp>
            <Grid item xs={1} />
          </Hidden>
          <Grid item xs={11} md={5}>
            {/* <div className={classes.paperWrapper}> */}
            <Paper
              className={classes.paper}
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
                {unit === "Diesel"
                  ? "Pesquisa realizada pela Universidade da Califórnia mostra que os veículos movidos a Diesel são responsáveis por 80% da poluição no país."
                  : unit === "GLP"
                  ? "Por ser transportado de forma prática, hoje o GLP está em todos os municípios brasileiros. A presença de GLP nos lares é maior que água encanada e encanamento."
                  : "O consumo médio de energia nas residências brasileiras é de 157 kWh, equivalente à 76m³ de biogás."}
              </Typography>
            </Paper>
            {/* </div> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Converter;
