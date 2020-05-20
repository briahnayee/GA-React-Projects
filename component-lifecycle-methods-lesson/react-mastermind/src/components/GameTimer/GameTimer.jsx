import React, { Component } from 'react';
import styles from './GameTimer.module.css';

class GameTimer extends Component {

  componentDidMount() {
    this.timerId = setInterval(this.handleTick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  handleTick = () => {
    if (this.props.isTiming)
      this.props.handleTimerUpdate();
  }

  formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }

  render() {
    return (
      <div className={`${styles.GameTimer} flex-h`}>
        {this.formatTime(this.props.elapsedTime)}
      </div>
    );
  }
}

export default GameTimer;
