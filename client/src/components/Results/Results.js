import React from "react";


const Results = () =>
 
  <div className="container-fluid">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title new-article-title">Results</h3>
        <button className= "btn btn-success btn-sm pull-right save-button">Save Article</button>
        <div className="clearfix"></div>
      </div>
      <div className="panel-body article-url"></div>
    </div>
  </div>;

export default Results;