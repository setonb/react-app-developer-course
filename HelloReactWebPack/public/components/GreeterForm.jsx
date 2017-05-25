var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {}
    var message = this.refs.message.value;
    var name = this.refs.name.value;

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    this.props.onNewData(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter Name" /><br/>
        <textarea ref="message" id="" cols="20" rows="5" placeholder="Enter Message" ></textarea><br/>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;
