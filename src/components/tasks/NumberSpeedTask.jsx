import React from 'react';
import QuestionLayout from '../shared/QuestionLayout';
import { optionsContainer, optionButtonStyle } from '../../utils/gameUtils';

const NumberSpeedTask = ({ shuffledAnswers, handleAnswer, isTransitioning, ...layoutProps }) => {
  return (
    <QuestionLayout {...layoutProps}>
      <p style={{fontSize: "20px", marginBottom: "20px"}}>
        Which number is further away from the remaining number?
      </p>
      <div style={optionsContainer}>
        {shuffledAnswers.map((num) => (
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

export default NumberSpeedTask; 