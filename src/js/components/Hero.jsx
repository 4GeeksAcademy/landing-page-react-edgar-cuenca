import React from "react";

const Hero = () => {
	return (
		<div className="bg-light p-5 rounded-3 mb-4 mt-4">
			<div className="container-fluid py-2">
				<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
				<p className="fs-4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Call to action!
				</button>
			</div>
		</div>
	);
};

export default Hero;