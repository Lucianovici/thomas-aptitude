import React from 'react';

const FeedbackOverlay = ({ feedback, proceedToNextQuestion }) => {
  if (!feedback.show) return null;

  const feedbackStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    color: feedback.isCorrect ? "#4CAF50" : "#F44336",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
    maxHeight: "40vh",
    overflow: "auto"
  };

  return (
    <div style={feedbackStyle}>
      <div style={{ 
        fontSize: "24px", 
        fontWeight: "bold",
        textAlign: "center" 
      }}>
        {feedback.isCorrect ? "Correct!" : "Incorrect"}
      </div>
      {!feedback.isCorrect && feedback.explanation && (
        <>
          <div style={{
            fontSize: "16px",
            fontWeight: "normal",
            whiteSpace: "pre-line",
            textAlign: "left",
            marginTop: "10px",
            color: "#333"
          }}>
            {feedback.explanation}
          </div>
          {feedback.waitingForConfirmation && (
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <button 
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
                onClick={proceedToNextQuestion}
              >
                Continue to Next Question
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FeedbackOverlay; 