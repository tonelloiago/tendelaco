import { makeStyles } from "@material-ui/core/styles";


export default makeStyles ((theme: any) => ({
    root: {
      flexGrow: 1
    },
    grid: {
      display: "flex",
      justifyContent: "center"
    },
    paperTop: {
      width: "100%",
      height: "5rem",
      position: "relative",
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    paperLeft: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paperRight: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#f50057'
    },
    betweenItems: {
      display: "flex",
      justifyContent: "center",
    },
    banner: {
       width: "100%",
       height: "100%",
       borderRadius: "1rem"
    }
}));