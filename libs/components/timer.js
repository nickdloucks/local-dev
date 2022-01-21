import React from 'react';
import PropTypes from 'prop-types';

const Timer = function ({ timeElapsed, dateStamp }) {
  /** this component behaves as a display of the current instance of a running timer.
   * it shows the current time elapsed and should update every time a second passes
   */
  // parse total seconds into a digital clock display format:
  // only parse the timer if there is a time elapsed, otherwise display all zeroes
  if (timeElapsed > 0) {
    // if there is a totalElapsed time, render it dynamically
    let totSec = timeElapsed;
    let sec = totSec % 60;
    let mins_hrs = totSec - sec; // total number of seconds that add up to complete minutes
    // total seconds with remainder (less than 60 sec) cut off
    let mins = (mins_hrs / 60) % 60; // total minutes less than an hour
    let hrs = (totSec - (totSec % 3600)) / 3600; // hours

    console.log(`totSec=${totSec}:_ hrs=${hrs}, min=${mins}, sec=${sec}`);

    return (
      <div id="timeAndStamp">
        <span id="timerString">
          {hrs.toString().padStart(2, '0')}:{mins.toString().padStart(2, '0')}:
          {sec.toString().padStart(2, '0')}
        </span>
        <br />
        <span>Date started: {dateStamp}</span>
      </div>
    );
  } else {
    // if no time has elapsed or timer is not currently active, show all zeroes
    return (
      <div id="timer">
        <span className="timer">00:00:00</span>
      </div>
    );
  }
};
Timer.defaultProps = {
  timeElapsed: 0,
  dateStamp: '',
};
Timer.propTypes = {
  timeElapsed: PropTypes.number.isRequired,
  dateStamp: PropTypes.string.isRequired,
};
export default Timer;
