// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");

// Helper Function
var helpers = require("./utils/helpers");

// This is the main component
var Main = React.createClass({

  
  getInitialState: function() {
    return { searchTerm: "", results: "" };
  },

  // componentDidUpdate is a lifecycle method that will get run every time the component updates it's
  // props or state
  componentDidUpdate: function(prevProps, prevState) {
    // If we have a new search term, run a new search
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

       




      helpers.runQuery(this.state.searchTerm).then(function(data) {
        console.log(data);
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
          console.log(this.state.results)
        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
    }
  },
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Article Finder!</h2>
            <p className="text-center">
              <em>Enter something you want search</em>
            </p>
          </div>

          <div className="col-md-6">

            <Form setTerm={this.setTerm} />

          </div>

          <div className="col-md-6">

            <Results results={this.state.results}/>

          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
