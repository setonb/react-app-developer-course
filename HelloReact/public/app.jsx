var Greeter = React.createClass({
  // set default values for properties passed in
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from the component.'
    }
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}</h1>
      <p>{message}</p>
      </div>
    );
  }
});

var firstName = "Seton"

ReactDOM.render(
  <Greeter name={firstName} message="This is from the element!"/>,
  document.getElementById('app')
);
