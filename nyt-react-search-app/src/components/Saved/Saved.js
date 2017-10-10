import React from "react";
import "./Saved.css";


const Saved = (props) => (
	<div className="container-fluid">
		<h1><strong>SAVED ARTICLES</strong></h1>

		<div className="panel panel-default">
	    	<div className="panel-heading">
	        	<h3 className="panel-title article-title">Headline:{props.title} <br/> Date:{props.date}</h3>
	        	<button type="button" className="btn btn-primary btn-sm pull-right">Delete Article</button>
	        	<div className="clearfix"></div>

	      	</div>
	    	<div className="panel-body article-url">URL:{props.url}</div>
	      
	    </div>
	</div>
);

export default Saved;