import React from "react";
import "./Results.css";


const Results =  (props) => (
 
  <div className="container-fluid">
  <h1><strong>RESULTS</strong></h1>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title new-article-title results-header">Headline:{props.title} <br/> Date:{props.date}</h3>
        <button className= "btn btn-success btn-sm pull-right save-button">Save Article</button>
        <div className="clearfix"></div>
      </div>
      <div className="panel-body article-url">URL:{props.url}</div>
    </div>
  </div>
);

export default Results;