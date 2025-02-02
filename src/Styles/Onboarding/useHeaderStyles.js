import { makeStyles } from '@mui/styles';

export const useHeaderStyles = makeStyles(theme => ({
    darkBlueBackground: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
            display: "flex",
            justifyContent: "space-between",
        },
    },
    logoStyle: {
        width: "100px",
        margin: theme.spacing(4),
        position: "absolute",
        top: 0,
        left: 0,
        [theme.breakpoints.down('md')]: {
            width: "70px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "35px",
        },
    },
    socialContainer: {
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
        },
    },
    socialIcons: {
        float: "right",
        padding: theme.spacing(2, 2),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2, 1),
        },
    },
    regularContainer: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(3),
        },
    },
    headingContainer: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },

    headingStyle: {
        marginBottom: theme.spacing(6),
        lineHeight: "73px",
        fontWeight: 500,
        padding: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    title: {
        fontSize: "40px",
        lineHeight: "50px",
        fontWeight: 400,
        textAlign: "center",
        marginBottom: theme.spacing(0),
        [theme.breakpoints.down('lg')]: {
            fontSize: "40px",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "30px",
        },
    },
    subheading: {
        fontSize: "60px",
        lineHeight: 1.2,
        marginBottom: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            fontSize: "50px",
            lineHeight: 1.2,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "40px",
            lineHeight: 1,
        },
    },
    infoPara: {
        marginTop: theme.spacing(3),
    },
    modHeaderContainer: {
        textAlign: "center",
        marginTop: "100px",
    },
    welcomeHeader: {
        width: "55%",
        textAlign: "center",
        fontSize: "61px",
        paddingTop: theme.spacing(8),
        margin: "auto",
    },
    welcome: {
        [theme.breakpoints.down('md')]: {
            fontSize: "60px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "40px",
        },
    },
    welcomePara: {
        fontSize: "45px",
        lineHeight: 1.5,
        marginBottom: theme.spacing(9),
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            fontSize: "25px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px",
        },
    },
    menuStyle: {
        padding: theme.spacing(3),
        // [theme.breakpoints.down("xs")]: {
        //   margin: theme.spacing(2.5),
        //   display: "flex",
        //   flexDirection: "column"
        // }
    },
    closeIcon: {
        color: "white",
    },
}));
