import React from 'react';
import QuestionLayout from '../shared/QuestionLayout';
import { optionsContainer, optionButtonStyle } from '../../utils/gameUtils';

const SpatialVisualisationTask = ({ currentQ, handleAnswer, isTransitioning, ...layoutProps }) => {
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

  const symbolContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    width: "60px",
  };

  const symbolStyle = {
    fontSize: "40px",
    margin: "5px"
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
        How many bottom symbols can be rotated to match the top symbol exactly?
        <br/>
        <span style={{fontSize: "16px", color: "#666"}}>
          (Note: Some symbols may be mirrored. A mirrored symbol must match another mirrored symbol when rotated.)
        </span>
      </p>
      <div style={pairsContainerStyle}>
        {currentQ.pairs.map((pair, idx) => (
          <div key={idx} style={wrapperStyle}>
            <div style={pairContainerStyle}>
              <div style={symbolContainerStyle}>
                <div style={{
                  ...symbolStyle,
                  transform: `rotate(${pair.topRotation}deg) ${pair.topMirrored ? 'scaleX(-1)' : ''}`
                }}>
                  R
                </div>
              </div>
              <div style={symbolContainerStyle}>
                <div style={{
                  ...symbolStyle,
                  transform: `rotate(${pair.bottomRotation}deg) ${pair.bottomMirrored ? 'scaleX(-1)' : ''}`
                }}>
                  R
                </div>
              </div>
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

export default SpatialVisualisationTask; 