import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logologin.png";


const Copyright = () => {
	return (
 		<Typography variant="body2" color="white" align="center">
 			{"Desenvolvido "}
 			<Link color="inherit" href="https://app.ricardopena.cloud">
 			 por Ricardo Pena
 			</Link>{" "}
 			{new Date().getFullYear()}
 			{"."}
 		</Typography>
 	);
};

const useStyles = makeStyles(theme => ({
	paper: {
		display: "flex",
		padding: "55px 30px",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: "12px 12px 12px 12px",
	},
	bg: {
		width: '100vw',
		height: '100vh',
		display: "flex",
		textAlign: "center",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		background: "linear-gradient(to top, rgb(14 14 14) 0%, rgb(124 14 236) 100%)",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	copyleft: {
		textAlign: "center",
		color: "white",
	},
}));

const Login = () => {
	const classes = useStyles();

	const [user, setUser] = useState({ email: "", password: "" });

	const { handleLogin } = useContext(AuthContext);

	const handleChangeInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handlSubmit = e => {
		e.preventDefault();
		handleLogin(user);
	};

	return (
		<div className={classes.bg}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<div>
						<img style={{ margin: "0 auto", height: '100%', width: '100%',alignSelf: 'center' }} src={logo} alt="Whats" />
					</div>
					{/* <Typography component="h1" variant="h5">
						{i18n.t("login.title")}
					</Typography> */}
					<form className={classes.form} noValidate onSubmit={handlSubmit}>
						<TextField
							variant="standard"
							margin="normal"
							required
							fullWidth
							id="email"
							label={i18n.t("login.form.email")}
							name="email"
							value={user.email}
							onChange={handleChangeInput}
							autoComplete="email"
							autoFocus
						/>
						<TextField
							variant="standard"
							margin="normal"
							required
							fullWidth
							name="password"
							label={i18n.t("login.form.password")}
							type="password"
							id="password"
							value={user.password}
							onChange={handleChangeInput}
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							{i18n.t("login.buttons.submit")}
						</Button>
						<Grid container>
							<Grid item>
								<Link
									href="#"
									variant="body2"
									component={RouterLink}
									to="/signup"
								>
									{i18n.t("login.buttons.register")}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
			<Box mt={8} className={classes.copyleft}>{ <Copyright /> }</Box>
		</div>
	);
};

export default Login;
