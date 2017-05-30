var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'An error occurred'
    };
  },
  propTypes: {
    title: React.PropTypes.String,
    message: React.PropTypes.String
  },
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="button hollow" data-close="">Ok</button>
      </div>
    );
  }
});

module.exports = ErrorModal;
