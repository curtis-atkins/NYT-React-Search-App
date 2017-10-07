import React from "react";


const Saved = () =>
	<div className="container-fluid">
		<div className="panel panel-default">
	    	<div className="panel-heading">
	        	<h3 className="panel-title article-title">Saved Articles</h3>
	        	<button className= "btn btn-danger pull-right">Delete Article</button>
	        	<div className="clearfix"></div>

	      	</div>
	    	<div className="panel-body article-url"></div>
	      
	    </div>
	</div>;

export default Saved;