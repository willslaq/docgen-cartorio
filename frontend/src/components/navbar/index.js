import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withRouter } from 'react-router-dom';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded'; //Pessoa
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'; //Sair
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'; //Conta
import logo from '../../assets/logo/logo.png';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    titulo: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8em',
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    heading: {
        paddingLeft: 15,
        fontStyle: "bold",
    },
    controlaLogo: {
        width: 200,
        padding: 20,
    },
}))

function NavBar({ history }) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [state, setState] = React.useState({
        left: false,
    });

    const open = Boolean(anchorEl);

    const controlaMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const fechaMenu = () => {
        setAnchorEl(null);
    };

    function vaiLogin() {
        history.push('/');
    }

    function vaiHome() {
        history.push('/home');
    }

    function vaiCadastroPessoa() {
        history.push('/cadastro-pessoa');
    }

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >

            <List>
                <img
                    src={logo}
                    alt="SimpleWork"
                    className={classes.controlaLogo}
                    onClick={vaiHome}
                />
                <ListItem button key={1} onClick={vaiHome}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>

            <Divider />

            <List>


                <Typography
                    className={classes.heading}
                    variant="h5"
                    component="h5"
                    gutterBottom
                >
                    Cadastros
                </Typography>
                
                <ListItem button key={2} onClick={vaiCadastroPessoa}>
                    <ListItemIcon>
                        {/* <EmojiPeopleRoundedIcon /> */}
                        <GroupRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pessoa" />
                </ListItem>
            </List>

            <Divider />

            <List>
                <Typography
                    className={classes.heading}
                    variant="h5"
                    component="h5"
                    gutterBottom
                >
                    Conta
                </Typography>
                <ListItem button key={2} onClick={vaiLogin}>
                    <ListItemIcon><SettingsRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Minha Conta" />
                </ListItem>
                <ListItem button key={2} onClick={vaiLogin}>
                    <ListItemIcon><ExitToAppRoundedIcon /></ListItemIcon>
                    <ListItemText primary="Sair" />
                </ListItem>
            </List>

        </div >
    );


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button> */}

                    <SwipeableDrawer
                        open={state.left}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                        disableBackdropTransition={!iOS}
                        disableDiscovery={iOS}
                    >
                        {sideList('left')}
                    </SwipeableDrawer>

                    <Grid container>
                        <Grid item xs={12}>
                            <Typography 
                                align="center"    
                                variant="h6" 
                                className={classes.titulo}
                            >
                                Cartório de Registro Civil Nossa Senhora
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography align="center" variant="h6" className={classes.titulo}>
                                3622 8175
                            </Typography>
                        </Grid>

                    </Grid>

                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={controlaMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={fechaMenu}
                    >
                        <MenuItem onClick={fechaMenu}>Minha Conta</MenuItem>
                        <MenuItem onClick={vaiLogin}>Sair</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(NavBar);