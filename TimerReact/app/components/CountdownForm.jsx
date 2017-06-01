var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var seconds = this.refs.seconds.value;

    if (seconds.length > 0 && seconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(seconds, 10));
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onSubmit} className="countdown-form">
        <input type="number" ref="seconds" className="" placeholder="Enter time in seconds"/>
        <input type="submit" value="Start" className="button expanded"/>
      </form>
    );
  }
});

module.exports = CountdownForm;
