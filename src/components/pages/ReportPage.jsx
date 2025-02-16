import React from 'react';
import { buttonStyle } from '../../utils/gameUtils';

const ReportPage = ({ selectedTask, records, onBackToTaskSelection }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: "20px"
  };

  const totalTime = records.reduce((total, record) => total + record.time, 0);
  const correctAnswers = records.filter(record => record.correct).length;
  
  const minutes = Math.floor(totalTime / 60000);
  const seconds = ((totalTime % 60000) / 1000).toFixed(1);
  const timeString = minutes > 0 
    ? `${minutes} min ${seconds} sec`
    : `${seconds} sec`;
  
  const averageTime = (totalTime / records.length / 1000).toFixed(1);

  return (
    <div style={containerStyle}>
      <h2>Task Report: {selectedTask}</h2>
      <div style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px",
        maxWidth: "400px"
      }}>
        <p style={{fontSize: "18px", marginBottom: "15px"}}>
          Score: {correctAnswers} correct out of {records.length} questions
        </p>
        <p style={{fontSize: "18px", marginBottom: "15px"}}>
          Total time: {timeString}
        </p>
        <p style={{fontSize: "18px", marginBottom: "15px"}}>
          Average time per question: {averageTime} seconds
        </p>
        <p style={{fontSize: "18px", color: correctAnswers === records.length ? "#4CAF50" : "#F44336"}}>
          Accuracy: {((correctAnswers / records.length) * 100).toFixed(0)}%
        </p>
      </div>
      <button style={buttonStyle} onClick={onBackToTaskSelection}>
        Back to Task Selection
      </button>
    </div>
  );
};

export default ReportPage; 