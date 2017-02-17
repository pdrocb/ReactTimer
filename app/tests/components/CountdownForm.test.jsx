var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
//Load so we can manipulate the DOM and check if things are rendering as expecting
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('Should exist', () => {
    expect(CountdownForm).toExist();
  })

  it('Should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    /*
    We need to manipulate the value in the input field, over on countdownForm we have a ref="seconds"
    */

    countdownForm.refs.seconds.value = '109'; // We set the value

    //We need to simulate the submit passing the DOM node
    // with jQuery we are pulling out the first DOM node
    TestUtils.Simulate.submit($el.find('form')[0]); // We simulate the form submit

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('Should not call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    /*
    We need to manipulate the value in the input field, over on countdownForm we have a ref="seconds"
    */

    countdownForm.refs.seconds.value = '1o9'; // We set the value

    //We need to simulate the submit passing the DOM node
    // with jQuery we are pulling out the first DOM node
    TestUtils.Simulate.submit($el.find('form')[0]); // We simulate the form submit

    expect(spy).toNotHaveBeenCalled('Function haven\'t been called');
  });
});
