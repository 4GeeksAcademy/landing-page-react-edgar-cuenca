import React from "react";

const Card = ({ title, text, buttonLabel }) => {
	return (
		<div className="col-12 col-md-6 col-lg-4 mb-4">
			<div className="card h-100 text-center border-0 shadow-sm bg-light">
				<div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{height: "200px"}}>
					<span className="h2">500 * 325</span>
				</div>
				<div className="card-body">
					<h4 className="card-title mt-2">{title}</h4>
					<p className="card-text text-muted">{text}</p>
				</div>
				<div className="card-footer border-0 bg-transparent pb-4">
					<button className="btn btn-primary px-4">{buttonLabel}</button>
				</div>
			</div>
		</div>
	);
};

export default Card;