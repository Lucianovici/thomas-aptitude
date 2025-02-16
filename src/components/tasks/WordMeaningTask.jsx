import React from 'react';
import QuestionLayout from '../shared/QuestionLayout';
import { optionsContainer, optionButtonStyle } from '../../utils/gameUtils';

const WordMeaningTask = ({ currentQ, handleAnswer, isTransitioning, ...layoutProps }) => {
  return (
    <QuestionLayout {...layoutProps}>
      <p style={{fontSize: "20px", marginBottom: "20px"}}>
        Which word is the odd one out?
      </p>
      <div style={optionsContainer}>
        {currentQ.words.map((word) => (
          <button
            key={word}
            style={optionButtonStyle}
            onClick={() => handleAnswer(word)}
            disabled={isTransitioning}
          >
            {word}
          </button>
        ))}
      </div>
    </QuestionLayout>
  );
};

export default WordMeaningTask; 