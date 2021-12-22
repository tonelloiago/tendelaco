import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "0.1rem"
    },
    CardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    Quantity :{
        width: "4rem"
    },
    fab: {
        margin: theme.spacing.unit * 0.3,
    },

}));