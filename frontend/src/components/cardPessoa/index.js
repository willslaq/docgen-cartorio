import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import avatar from '../../assets/images/avatar.png';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    controlaPaper: {
        padding: 15,
    },
}))

export default function CardPessoa() {

    const classes = useStyles();

    return (
        <Paper className={classes.controlaPaper}>
            <Container>
                <Grid container>
                    <Grid item>
                        <img alt="" src={avatar} className='bolota' />
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h4"
                            component="h4"
                            gutterBottom
                        >
                            José das Couves
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </Paper>
    );
};