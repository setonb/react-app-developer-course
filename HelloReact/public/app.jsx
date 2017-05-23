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
      name: this.props.name
    }
  },
  onButtonClick: function(e) {
    e.preventDefault();

    // Getting the value from the "refs" in the action
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      // Update the 'state'
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = "Seton"

ReactDOM.render(
  <Greeter name={firstName} message="This is from the element!"/>,
  document.getElementById('app')
);
