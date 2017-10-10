import React, { Component } from "react";
import "./Search.css";


class Search extends Component {
//setting components initial state
  state = {
    topic: "",
    startYear:"",
    endYear: ""
  };
  
  handleInputChange = event => {
    //Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    if (name === "topic") {
      value = value.substring(0,70);
    }
    else if (name === "startYear" || "endYear") {
      value = value.substring(0,4);
    };

    //Updating the input's state
   this.setState({
    [name]: value
   });
  };

  handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.topic){
      alert("You must enter a topic!");
    }
    else if (!this.state.startYear) {
      alert("You must enter a start year!")
    }
    else if (!this.state.endYear) {
      alert("You must enter an end year!")
    }
  

  this.setState({
    topic: "",
    startYear: "",
    endYear: ""
  });
};

render() {

return (
 <div className="container-fluid">
    <div>
      <form className="form">
        <input className="topic"
          value={this.state.topic}
          name="topic"
          onChange={this.handleInputChange}
          type="text"
          placeholder="What Topic would you like to find?"
        />
        <br/>
        <input className="startYear"
          value={this.state.startYear}
          name="startYear"
          onChange={this.handleInputChange}
          type="number"
          placeholder=" Start Year (i.e. 3005)"
        />
        <br/>
        <input className="endYear"
          value={this.state.endYear}
          name="endYear"
          onChange={this.handleInputChange}
          type="number"
          placeholder=" End Year (i.e. 5003)"
        />
        <br/>
        <button onClick={this.handleFormSubmit}>SEARCH</button>
</form>
    </div>
  </div>
)};
}


export default Search;