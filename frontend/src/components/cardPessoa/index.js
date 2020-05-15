import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import avatar from '../../assets/images/avatar.png';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ForwardIcon from '@material-ui/icons/Forward';

const useStyles = makeStyles(theme => ({
    controlaPaper: {
        padding: 2,
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    controlaNome: {
        marginTop: 35,
        fontSize: '1.4em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
            marginTop: 10,
        },
    },
    controlaInfos: {
        fontSize: '1em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8em',
        },
    },
    controlaAvatar: {
        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80,
            borderRadius: 50,
            marginTop: '50%',
        },
    },
}))

export default function CardPessoa() {

    const classes = useStyles();

    return (
        <Paper className={classes.controlaPaper}>
            <Container>
                <Grid container>
                    <Grid item xs={4}>
                        <img alt="" src={avatar} className={classes.controlaAvatar} />
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    gutterBottom
                                    className={classes.controlaNome}
                                    color="primary"
                                >
                                    José das Couves Aparecido
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    component="h6"
                                    gutterBottom
                                    className={classes.controlaInfos}
                                >
                                    100.415.749.58
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h6"
                                    gutterBottom
                                    className={classes.controlaInfos}
                                >
                                    14.393.595-7
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h6"
                                    gutterBottom
                                    className={classes.controlaInfos}
                                >
                                    Cruzeiro do Oeste
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} align="center">
                        <ForwardIcon />
                    </Grid>
                </Grid>

                <Divider />

                <Grid container>
                    <Grid item xs={4}>
                        <img alt="" src={avatar} className={classes.controlaAvatar} />
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    gutterBottom
                                    className={classes.controlaNome}
                                    color="primary"
                                >
                                    José das Couves Aparecido
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    component="h6"
                                    gutterBottom
                                    className={classes.controlaInfos}
                                >
                                    100.415.749.58
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h6"
                                    gutterBottom
                                    className={classes.controlaInfos}
                                >
                                    14.393.595-7
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h6"
                                    gutterBottom
                                    className={classes.controlaInfos}
                                >
                                    Cruzeiro do Oeste
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} align="center">
                        <ForwardIcon />
                    </Grid>
                </Grid>

            </Container>
        </Paper>
    );
};