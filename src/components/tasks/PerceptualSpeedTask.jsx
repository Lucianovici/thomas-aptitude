import React from 'react';
import QuestionLayout from '../shared/QuestionLayout';
import { optionsContainer, optionButtonStyle } from '../../utils/gameUtils';

const PerceptualSpeedTask = ({ currentQ, handleAnswer, isTransitioning, ...layoutProps }) => {
  const wrapperStyle = {
    background: '#e6f3ff',
    padding: '20px',
    margin: '5px',
    borderRadius: '8px',
    flex: '0 0 auto'
  };

  const pairContainerStyle = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #333",
    backgroundColor: "white",
    padding: "20px",
    width: "80px",
    height: "160px",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const letterContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    width: "60px",
    fontSize: "24px",
    fontWeight: "bold"
  };

  const pairsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "nowrap",
    gap: "10px",
    margin: "0 auto",
    maxWidth: "fit-content"
  };

  return (
    <QuestionLayout {...layoutProps}>
      <p style={{fontSize: "20px", marginBottom: "20px"}}>
        How many pairs contain matching letters (ignoring case)?
      </p>
      <div style={pairsContainerStyle}>
        {currentQ.pairs.map((pair, idx) => (
          <div key={idx} style={wrapperStyle}>
            <div style={pairContainerStyle}>
              <div style={letterContainerStyle}>{pair[0]}</div>
              <div style={letterContainerStyle}>{pair[1]}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={optionsContainer}>
        {[0,1,2,3,4].map((num) => (
          <button
            key={num}
            style={optionButtonStyle}
            onClick={() => handleAnswer(num)}
            disabled={isTransitioning}
          >
            {num}
          </button>
        ))}
      </div>
    </QuestionLayout>
  );
};

export default PerceptualSpeedTask; 