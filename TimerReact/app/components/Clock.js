var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    return {
      totalSeconds: 0
    }
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {
    var seconds = (totalSeconds % 60 > 9) ? totalSeconds % 60 : '0' + totalSeconds % 60;
    var minutes = (Math.floor(totalSeconds / 60) > 9) ? Math.floor(totalSeconds / 60) : '0' + Math.floor(totalSeconds / 60);

    return `${minutes}:${seconds}`;
  },
  render: function() {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
