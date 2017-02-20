var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countStatus: 'stopped'
    }
  },
  handleStatusChange: function (newStatus) {
    this.setState ({countStatus: newStatus});
  },
  componentDidUpdate: function (prevProps, prevState) {
    if(this.state.countStatus !== prevState.countStatus) {
      switch (this.state.countStatus) {
        case 'started':
          console.log('Starting timer up');
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    //This method automatically gets fired by react right before the componets is remove from the DOM
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  render: function () {
    var {count, countStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countStatus={countStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
