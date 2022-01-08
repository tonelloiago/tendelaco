import { makeStyles } from "@material-ui/core";



export default makeStyles((theme) => ({
    root: {
        fontFamily: "Open Sans",
        backgroundColor: "white",
        borderRadius: "0.2rem",
        display: "flex",
        marginTop: "1rem",
        justifyContent: "space-around"        
    },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
      buyButton: {
          alignSelf: "center",
          marginBottom: "1rem"
      },

}))