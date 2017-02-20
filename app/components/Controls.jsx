var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countStatus} = this.props;
    var renderStartStopButton = () => {
      if(countStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      } else if (countStatus === 'stopped') {
        return <button className="button expanded" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    var renderClearButton = () => {
      if(countStatus !== 'stopped') {
        return <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      } else {
        return null
      }
    }

    return (
      <div className="controls">
        {renderStartStopButton()}
        {renderClearButton()}
      </div>
    );
  }
});

module.exports = Controls;
