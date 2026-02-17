import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

const Home = () => {
	const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.";

	return (
		<div className="min-vh-100 d-flex flex-column">
			<Navbar />
			<div className="container">
				<Hero />
				<div className="row pb-5">
					<Card title="Card Title" text={lorem} buttonLabel="Find Out More!" />
					<Card title="Card Title" text={lorem} buttonLabel="Find Out More!" />
					<Card title="Card Title" text={lorem} buttonLabel="Find Out More!" />
					<Card title="Card Title" text={lorem} buttonLabel="Find Out More!" />
				</div>
			</div>
			<footer className="bg-dark text-white text-center py-5 mt-auto">
				<div className="container">
					<p className="mb-0">Copyright © Your Website 2026</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;