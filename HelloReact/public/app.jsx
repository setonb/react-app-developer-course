var GreeterForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
    );
  }
});

var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some paragraph</p>
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
        <GreeterMessage/>
        <GreeterForm/>
      </div>
    );
  }
});

var firstName = "Seton"

ReactDOM.render(
  <Greeter name={firstName} message="This is from the element!"/>,
  document.getElementById('app')
);
