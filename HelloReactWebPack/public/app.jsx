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

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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

var firstName = "Seton"

ReactDOM.render(
  <Greeter name={firstName} message="This is from the element!"/>,
  document.getElementById('app')
);
