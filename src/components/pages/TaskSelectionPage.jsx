import React from 'react';
import { buttonStyle } from '../../utils/gameUtils';

const TaskSelectionPage = ({ onSelectTask }) => {
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
      <h2>Select a Task</h2>
      <button style={buttonStyle} onClick={() => onSelectTask("Reasoning")}>
        Task 1: Reasoning
      </button>
      <button style={buttonStyle} onClick={() => onSelectTask("Perceptual Speed")}>
        Task 2: Perceptual Speed
      </button>
      <button style={buttonStyle} onClick={() => onSelectTask("Number Speed & Accuracy")}>
        Task 3: Number Speed &amp; Accuracy
      </button>
      <button style={buttonStyle} onClick={() => onSelectTask("Word Meaning")}>
        Task 4: Word Meaning
      </button>
      <button style={buttonStyle} onClick={() => onSelectTask("Spatial Visualisation")}>
        Task 5: Spatial Visualisation
      </button>
    </div>
  );
};

export default TaskSelectionPage; 