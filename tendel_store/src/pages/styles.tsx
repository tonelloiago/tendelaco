import { makeStyles } from "@material-ui/core/styles";


export default makeStyles ((theme: any) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));