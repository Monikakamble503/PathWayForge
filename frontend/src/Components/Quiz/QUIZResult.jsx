import React from 'react';

const QUIZResult = (props) => {
  return (
    <>
      <div className='show-score'>
        Your Score: {props.score}<br></br>
        Total Score: {props.totalScore}
      </div>
      <button id='restart-button' onClick={props.tryAgain}>Restart</button>
    </>
  )
}

export default QUIZResult;
