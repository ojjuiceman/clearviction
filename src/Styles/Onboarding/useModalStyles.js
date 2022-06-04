import { makeStyles } from "@material-ui/core";

export const useModalStyles = makeStyles((theme) => ({
    mainModal: {
        // maxHeight: '100vh',
        overflowY: 'auto',
        position: 'absolute',
    },
    modalContainer: {
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        backgroundColor: 'white',
        boxShadow: 24,
        padding: "75px",
        paddingLeft: "150px",
        [theme.breakpoints.down("lg")]: {
            top: "100%"
        },
        [theme.breakpoints.down("md")]: {
            paddingLeft: "75px",
            top: "110%"
        },
        [theme.breakpoints.down("sm")]: {
            top: "150%",
            padding: "25px"
        },
        [theme.breakpoints.down("xs")]: {
            top: "185%",
            padding: "15px"
        }
    },

}))