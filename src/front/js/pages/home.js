import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Logout from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [hasToken, setHasToken] = useState(false);

	useEffect(() => {
		const token = sessionStorage.getItem('token');
		if (!token) {
			setHasToken(false);
		} else {
			setHasToken(true);
			axios
				.get(`https://cuddly-disco-jpg4457g7x92pjq4-3001.app.github.dev/api/private`, {
					headers: { Authorization: token },
				})
				.then((response) => {
					console.log(response.data);
				})
				.catch((error) => {
					console.error('There was an error!', error);
					sessionStorage.removeItem('token');
					window.location.href = '/login';
				});
		}
	}, []);

	return (
		<div className="text-center mt-5">
			{hasToken ? (
				<>
					<>
					<h1 className="display">Congratulations!!</h1>
					<div className="alert alert-info ">
						<h2>If you are reading this text, right now, you are the proud owner of a token</h2>
					</div>

					<div>
						<p>
						To logout please press here: 
						</p>
						<Logout />
					</div>
					
					</>
				</>
			) : (
				<>
					<h1 className="display">Hello!!</h1>
					<div className="alert alert-info ">
						<h2>If you are reading this text, you dont have a Token, please Login</h2>
					</div>
					<p>
						To get an account please press here:{" "}
						<NavLink to="signUp">
							Create account
						</NavLink>
					</p>
				</>
			)}
		</div>
	);
};
