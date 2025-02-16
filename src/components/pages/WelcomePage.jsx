import React from 'react';
import { buttonStyle } from '../../utils/gameUtils';

const WelcomePage = ({ onContinue }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: "20px"
  };

  return (
    <div style={containerStyle}>
      <h1>GIA Simulartor</h1>
      <p>
        Welcome to the General Intelligence Assessment (GIA) - Aptitude Practice Area.
        <br /><br />
        You will be guided through a series of tasks designed to test your reasoning, perceptual speed, number speed &amp; accuracy, word meaning and spatial visualisation. Use your mouse to select answers.
        <br /><br />
        Both speed and accuracy are important. When you are ready, click below.
      </p>
      <button style={buttonStyle} onClick={onContinue}>Continue</button>
    </div>
  );
};

export default WelcomePage; 