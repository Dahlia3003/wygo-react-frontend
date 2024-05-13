import backgroundImage from '../../images/login_background.png';
import { useState, useEffect } from "react";
import { TextField, Button, Typography, Link, IconButton, Snackbar, CircularProgress, Grid } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    loginContainer: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            borderRadius: theme.spacing(1),
        },
    },
}));

const Login = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('loginState') === 'ok'){
            navigate('/home');
        }
    }, []);

    const handleLogin = () => {
        setIsLoading(true);
        axios.post('https://wygo-ojzf.onrender.com/users/login', {
            username: email,
            password: password
        })
            .then(response => {

                axios.get(`https://wygo-ojzf.onrender.com/users/user/${email}`)
                    .then(response => {
                        localStorage.setItem('username', response.data.username);
                        localStorage.setItem('idUser', response.data.id);
                        localStorage.setItem('loginState', 'ok');
                        localStorage.setItem('avatar', response.data.avatar);
                        if (response.data.username === 'admin' || response.data.username === 'admin1' || response.data.username === 'admin2'){
                            localStorage.setItem('isAdmin', 'ok');
                        }
                        localStorage.setItem('name', response.data.name);
                        setIsLoading(false);
                        navigate('/home');
                    })
            })
            .catch(error => {
                console.error(error.response.data);
                setOpenSnackbar(true);
                setSnackbarMessage(error.response.data);
            });
    };

    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.loginContainer}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <form className={classes.formContainer}>
                    <Typography variant="h4" align="center" gutterBottom>Đăng Nhập</Typography>
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Mật khẩu"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Link href="/forgot-password" variant="body2">Quên mật khẩu?</Link>
                    <Button
                        variant="contained"
                        onClick={handleLogin}
                        fullWidth
                        disabled={isLoading}
                        sx={{ mt: 2 }}
                    >
                        {isLoading ? <CircularProgress size={24} /> : 'Đăng Nhập'}
                    </Button>
                    <Link href="/registration" variant="body2" sx={{ display: 'block', mt: 2 }}>Chưa có tài khoản? Đăng ký ngay</Link>
                </form>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={5000}
                    onClose={() => setOpenSnackbar(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    sx={{
                        backgroundColor: '#ff4d4f',
                        color: '#fff',
                        borderRadius: '8px',
                        width: '300px',
                        height: '50px',
                        '& .MuiSnackbarContent-action': {
                            paddingLeft: 0,
                        },
                    }}
                >
                    <Grid container alignItems="center" justifyContent="space-between" padding={2}>
                        <Typography variant="body1">{snackbarMessage}</Typography>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenSnackbar(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Snackbar>
            </Grid>
        </Grid>
    );
};

export default Login;
