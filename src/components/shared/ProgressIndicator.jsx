import React from 'react';

const ProgressIndicator = ({ currentQuestionIndex, totalQuestions }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    zIndex: 1000
  }}>
    <div style={{ fontSize: '16px', color: '#666' }}>
      Question {currentQuestionIndex + 1} of {totalQuestions}
    </div>
    <div style={{
      width: '200px',
      height: '8px',
      backgroundColor: '#e9ecef',
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
        height: '100%',
        backgroundColor: '#4CAF50',
        transition: 'width 0.3s ease'
      }} />
    </div>
  </div>
);

export default ProgressIndicator; 