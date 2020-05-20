import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';
import './GuessRow.css'

const GuessRow = (props) => (
  <div className='GuessRow'>
    <div style={{color: props.currentGuess ? 'black' : 'lightgrey'}} className='Row' >
      {props.rowIdx + 1}
    </div>
	...
);
    <GuessPegs
      colors={props.colors}
      code={props.guess.code}
    />
    {
      props.currentGuess ?
        <ScoreButton /> :
        <GuessScore score={props.guess.score} />
    }
  </div>
);

export default GuessRow;
