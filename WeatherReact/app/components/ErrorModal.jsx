var React = require('react');
// Needed to add ReactDOM and ReactDOMServer because jQuery and Foundatino are manipulating the DOM ( bad for React )
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'An error occurred'
    };
  },
  componentDidMount: function() {
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="button hollow" data-close="">Ok</button>
      </div>
    );

    // Create a jQuery variable of the modal but through ReactDOMServer so it can keep track
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
