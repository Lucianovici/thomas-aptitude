import React from 'react';
import { buttonStyle } from '../../utils/gameUtils';

const InstructionsPage = ({ selectedTask, onStartTask }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: "20px"
  };

  const getInstructionsText = (task) => {
    switch(task) {
      case "Reasoning":
        return "Task 1: Reasoning\n\nIn this task you will see a statement comparing two people (for example, 'Tom is heavier than Fred'). First, study the statement and click the screen. Then you will be asked a question (such as 'Who is heavier?') with two answer options. Click on the correct answer.";
      case "Perceptual Speed":
        return "Task 2: Perceptual Speed\n\nIn this task you will see 4 pairs of letters. Some pairs contain the same letter (ignoring case) and some do not. Count how many pairs match. Then, select the correct number (0-4) from the answer options.";
      case "Number Speed & Accuracy":
        return "Task 3: Number Speed & Accuracy\n\nYou will be shown 3 numbers. Identify the highest and the lowest numbers, then decide which (the highest or the lowest) is numerically further away from the remaining number. Click on the number you think is correct.";
      case "Word Meaning":
        return "Task 4: Word Meaning\n\nYou will be given 3 words. Two of the words are related and one is the odd one out. Click on the word that does not belong.";
      case "Spatial Visualisation":
        return "Task 5: Spatial Visualisation\n\nIn this task you will see 4 pairs of symbols. For each pair, the bottom symbol is either a rotated copy (matching) or a mirror–image (non–matching) of the top symbol. Count how many pairs match after rotation, and then select the correct number (0-4).";
      default:
        return "";
    }
  };

  return (
    <div style={containerStyle}>
      <pre style={{whiteSpace: "pre-wrap", fontSize: "18px"}}>
        {getInstructionsText(selectedTask)}
      </pre>
      <button style={buttonStyle} onClick={onStartTask}>Start Task</button>
    </div>
  );
};

export default InstructionsPage; 