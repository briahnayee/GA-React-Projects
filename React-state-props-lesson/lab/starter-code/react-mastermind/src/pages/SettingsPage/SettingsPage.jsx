import React from 'react';
import { Link } from 'react-router-dom';
import './SettingsPage.css'

const SettingsPage = (props) => {

  const selectedLevelStyle = {
    border: '2px solid #333'
  }

  function handleDifficultyChange(level) {
    props.handleDifficultyChange(level)
    props.history.push('/')
  }

console.log(props.colors)

  return (
    <div>
      <Link to='/'>HOME</Link>
      <h1>Set Difficulty Level</h1>
      <div className="oneRow">
        <button className="but">Easy</button>
        { props.colors.Easy.map((color) => (
            <div className="color" style={{ background: color }}></div>
            ))}
        <div className="color"></div>
      </div>
      <div className="oneRow">
        <button className="but">Moderate</button>
        { props.colors.Moderate.map((color) => (
            <div className="color" style={{ background: color }}></div>
            ))}
        <div className="color"></div>
      </div>
      <div className="oneRow">
        <button className="but">Difficult</button>
        { props.colors.Difficult.map((color) => (
            <div className="color" style={{ background: color }}></div>
            ))}
        <div className="color"></div>
      </div>
    </div>
  );
};

export default SettingsPage;