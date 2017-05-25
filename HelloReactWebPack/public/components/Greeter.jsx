var React = require('react');

var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  // set default values for properties passed in
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from the component.'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function(updates) {
    // Update the 'state'
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});


module.exports = Greeter;
