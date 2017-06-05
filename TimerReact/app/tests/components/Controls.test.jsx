var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('../../components/Controls');


describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var el = ReactDOM.findDOMNode(controls);
      var actual = el.querySelector('.secondary').textContent;
      var expected = 'Pause';
      expect(actual).toBe(expected);
    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var el = ReactDOM.findDOMNode(controls);
      var actual = el.querySelector('.primary').textContent;
      var expected = 'Start';
      expect(actual).toBe(expected);
    });
  });
});
