import React from "react";


const Search = () =>
 
  <div className="container-fluid">
  	<div>
      <form>
        <div className="form-group">
          <label for="topic">Topic</label>
          <input type="topic" className="form-control form-control-lg" id="topic" aria-describedby="topic" placeholder="What Topic would you like to find?"/>
        </div>
        <div class="form-group">
          <label for="startYear">Start Year</label>
          <input type="startYear" className="form-control form-control-lg" id="startYear" placeholder="3005"/>
        </div>
        <div class="form-group">
          <label for="endYear">End Year</label>
          <input type="endYear" className="form-control form-control-lg" id="endYear" placeholder="5003"/>
        </div>

        <button type="submit" className="btn btn-primary btn-lg center-block">Search</button>
      </form>
    </div>
  </div>;

export default Search;