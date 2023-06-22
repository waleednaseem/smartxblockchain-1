import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../../redux/actions/auth";
import authActions from "../../../redux/actions/auth";
import { setSession, getSession } from "../../../redux/services/session";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import API from "../../API/API";

const { fetchLogin } = authActions;

export default function Loginpage({ setState, toast }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Refresh, setRefresh] = useState("");

  const data = useSelector((x) => x);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      window.location.href = '/'
      // console.log(user,'<== from useEffects')
    } else {
      console.log('no user Detected')
    }
  }, [Refresh])
  const login = async (e) => {
    e.preventDefault();

    fetchLogin(
      {
        username: username,
        password: password,
      },
      "/login"
    ).then((x) => {
      console.log(x)
      setSession(x.data.token)
      setRefresh(x.data.token)
    })
      .catch(err => console.log(err))
  };

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright ©Smartx BlockChain '}

        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  // TODO remove, this demo shouldn't need to reset the theme.

  const defaultTheme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    API.fetchPost({
      username: username,
      password: password
    }, '/login')
      .then(x => {
        // x.data.message
        // x.data
        x.data?.message && (toast.success(x.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }), setSession(x.data.token),
          setRefresh(x.data.token))
        x.data && toast.error(x.data, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      })
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="images/smart (2).png" height={100} width={100} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Username"
              label="Username"
              name="Username"
              autoComplete="Username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
              <Grid item>
                <div onClick={() => setState(2)}>
                  {"Don't have an account? Sign Up"}
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 1 }} />
      </Container>
    </ThemeProvider>
  );
}

