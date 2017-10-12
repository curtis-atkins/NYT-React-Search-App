import React, { Component } from "react";
import "./Search.css";


class Search extends Component {
//setting components initial state
  state = {
    topic: "",
    startDate:"",
    endDate: ""
  };
  
  handleInputChange = event => {
    //Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    if (name === "topic") {
      value = value.substring(0,70);
    }
    else if (name === "startDate" || "endDate") {
      value = value.substring(0,8);
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
    else if (!this.state.startDate) {
      alert("You must enter a start date!")
    }
    else if (!this.state.endDate) {
      alert("You must enter an end date!")
    }
  

  this.setState({
    topic: "",
    startDate: "",
    endDate: ""
  });
};

render() {

return (
 <div className="container-fluid">
    <div>
      <form className="form">
        <input className="topic-input text-center"
          value={this.state.topic}
          name="topic"
          onChange={this.handleInputChange}
          type="text"
          placeholder="What Topic would you like to find?"
        />
        <br/>
        <input className="startDate-input text-center"
          value={this.state.startDate}
          name="startDate"
          onChange={this.handleInputChange}
          type="number"
          placeholder="Start Date: 'YYYYMMDD'"
        />
        <br/>
        <input className="endDate-input text-center"
          value={this.state.endDate}
          name="endDate"
          onChange={this.handleInputChange}
          type="number"
          placeholder= "End Date: 'YYYYMMDD'"
        />
        <br/>
        <button className="search-button text-center" onClick={this.handleFormSubmit}><strong>SEARCH</strong>
        </button>
</form>
    </div>
  </div>
)};
}


export default Search;