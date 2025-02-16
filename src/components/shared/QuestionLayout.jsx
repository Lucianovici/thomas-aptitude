import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import FeedbackOverlay from './FeedbackOverlay';

const QuestionLayout = ({ children, currentQuestionIndex, questions, feedback, proceedToNextQuestion }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: "20px",
    paddingTop: "50px"
  };

  return (
    <div style={containerStyle}>
      <ProgressIndicator 
        currentQuestionIndex={currentQuestionIndex} 
        totalQuestions={questions.length} 
      />
      <FeedbackOverlay 
        feedback={feedback} 
        proceedToNextQuestion={proceedToNextQuestion} 
      />
      {children}
    </div>
  );
};

export default QuestionLayout; 