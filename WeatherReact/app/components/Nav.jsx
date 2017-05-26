var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <IndexLink to="/" activeClassName="active" activeStyle={{color:'#f00'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{color:'#f00'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{color:'#f00'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
