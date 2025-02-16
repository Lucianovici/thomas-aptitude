import React from 'react';
import QuestionLayout from '../shared/QuestionLayout';
import { optionsContainer, optionButtonStyle } from '../../utils/gameUtils';

const ReasoningTask = ({ 
  currentQ, 
  showStatement, 
  handleStatementClick, 
  handleAnswer, 
  isTransitioning,
  ...layoutProps 
}) => {
  const contentWrapperStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    cursor: showStatement ? "pointer" : "default"
  };

  if (showStatement) {
    return (
      <QuestionLayout {...layoutProps}>
        <div style={contentWrapperStyle} onClick={handleStatementClick}>
          <p style={{fontSize: "20px"}}>{currentQ.statement}</p>
          <p>(Click to reveal the question)</p>
        </div>
      </QuestionLayout>
    );
  }

  return (
    <QuestionLayout {...layoutProps}>
      <div style={contentWrapperStyle}>
        <p style={{fontSize: "20px"}}>{currentQ.questionText}</p>
        <div style={optionsContainer}>
          {currentQ.options.map((opt, idx) => (
            <button
              key={idx}
              style={optionButtonStyle}
              onClick={() => handleAnswer(opt)}
              disabled={isTransitioning}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </QuestionLayout>
  );
};

export default ReasoningTask; 