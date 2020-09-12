import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    maxWidth: 600,
    margin: 40,
    marginLeft: 0,
  },
  cta: {
    color: "#ffffff",
    fontWeight: "bold",
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      alignContent="center"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item xs={12} md={8}>
        <Typography variant="h2" color="primary" style={{ fontWeight: "bold" }}>
          Conversor Biogás - UNIDO
        </Typography>
        <div>
          <Typography variant="body1" className={classes.subtitle}>
            Conheça mais sobre esse biocombustível e entenda como ele se compara
            com outros tipos: diesel, gás liquefeito de petróleo (GLP) e kWh.
          </Typography>
        </div>
        <Button variant="contained" color="primary" size="large">
          <Typography variant="body1" className={classes.cta}>
            Começar
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
