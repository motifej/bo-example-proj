import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/index";

const Header = () => {
	const navBarItems = [
		{
			title: "Users",
			path: "/"
		},
		{
			title: "Transactions",
			path: "/search_transactions"
		},
		{
			title: "Tokens Distribution",
			path: "/tokens_distribution"
		}
	];
	return (
		<div>
			<header className="bg-black fixed w-100 ph2 pv2 pv3-ns ph3-m ph4-l bb">
				<nav className="f6 fw1 ttu dib fl">
					{navBarItems.map((item, index) => (
						<NavLink
							to={item.path}
							hash="/"
							className="link fw1 white dib mr3 b hover-blue"
							key={index}
						>
							{item.title}
						</NavLink>
					))}
				</nav>
				<form action="/auth/logout" method="post">
					<Button
						type="LOGOUT_BUTTON"
						id="logOutButton"
						text="Logout"
					/>
				</form>
			</header>
		</div>
	);
};

export default Header;
