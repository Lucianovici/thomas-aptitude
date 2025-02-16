import React, { useState, useEffect } from 'react';
import WelcomePage from './pages/WelcomePage';
import TaskSelectionPage from './pages/TaskSelectionPage';
import InstructionsPage from './pages/InstructionsPage';
import ReportPage from './pages/ReportPage';
import ReasoningTask from './tasks/ReasoningTask';
import PerceptualSpeedTask from './tasks/PerceptualSpeedTask';
import NumberSpeedTask from './tasks/NumberSpeedTask';
import WordMeaningTask from './tasks/WordMeaningTask';
import SpatialVisualisationTask from './tasks/SpatialVisualisationTask';
import { shuffleArray } from '../utils/gameUtils';
import { generateReasoningQuestions } from '../utils/tasks/reasoningQuestions';
import { generatePerceptualSpeedQuestions } from '../utils/tasks/perceptualSpeedQuestions';
import { generateNumberSpeedQuestions } from '../utils/tasks/numberSpeedQuestions';
import { getWordMeaningQuestions } from '../utils/tasks/wordMeaningQuestions';
import { generateSpatialVisualisationQuestions } from '../utils/tasks/spatialVisualisationQuestions';

const AptitudeTestGame = () => {
  const [page, setPage] = useState("welcome");
  const [selectedTask, setSelectedTask] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [records, setRecords] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [showStatement, setShowStatement] = useState(true);
  const [feedback, setFeedback] = useState({ 
    show: false, 
    isCorrect: false,
    explanation: '',
    waitingForConfirmation: false 
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [previousPairs, setPreviousPairs] = useState(null);

  useEffect(() => {
    if (page === "question") {
      if (selectedTask !== "Reasoning" && questionStartTime === null) {
        setQuestionStartTime(Date.now());
      }
      if (selectedTask === "Number Speed & Accuracy" && 
          questions[currentQuestionIndex]?.numbers) {
        setShuffledAnswers(shuffleArray(questions[currentQuestionIndex].numbers));
      }
    }
  }, [page, selectedTask, questionStartTime, currentQuestionIndex, questions]);

  const generateQuestionsForTask = (task) => {
    switch(task) {
      case "Reasoning":
        return generateReasoningQuestions();
      case "Perceptual Speed":
        return generatePerceptualSpeedQuestions();
      case "Number Speed & Accuracy":
        return generateNumberSpeedQuestions();
      case "Word Meaning":
        return getWordMeaningQuestions();
      case "Spatial Visualisation":
        return generateSpatialVisualisationQuestions();
      default:
        return [];
    }
  };

  const selectTask = (task) => {
    setSelectedTask(task);
    const qs = generateQuestionsForTask(task);
    setQuestions(qs);
    setCurrentQuestionIndex(0);
    setRecords([]);
    setQuestionStartTime(null);
    setShowStatement(task === "Reasoning");
    setPage("instructions");
  };

  const startTask = () => {
    setPage("question");
  };

  const handleAnswer = (answer) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const currentQ = questions[currentQuestionIndex];
    const isCorrect = (answer === currentQ.correctAnswer);
    const timeTaken = Date.now() - questionStartTime;
    setRecords([...records, { correct: isCorrect, time: timeTaken }]);

    if (selectedTask === "Spatial Visualisation") {
      setPreviousPairs(currentQ.pairs);
    }

    let explanation = '';
    if (!isCorrect) {
      switch(selectedTask) {
        case "Reasoning":
          explanation = `The correct answer is "${currentQ.correctAnswer}". ${currentQ.statement} Therefore, ${currentQ.questionText} ${currentQ.correctAnswer}.`;
          break;
        case "Perceptual Speed":
          explanation = `The correct answer is ${currentQ.correctAnswer}. Let's count the matching pairs:\n` + 
            currentQ.pairs.map((pair, idx) => 
              `Pair ${idx + 1}: "${pair[0]}" and "${pair[1]}" ${pair[0].toUpperCase() === pair[1].toUpperCase() ? 'MATCH' : 'DO NOT MATCH'}`
            ).join('\n');
          break;
        case "Number Speed & Accuracy":
          const sorted = [...currentQ.numbers].sort((a, b) => a - b);
          const [lowest, middle, highest] = sorted;
          const diffHigh = highest - middle;
          const diffLow = middle - lowest;
          explanation = `The correct answer is ${currentQ.correctAnswer}.\n` +
            `The middle number is ${middle}.\n` +
            `Distance to highest (${highest}): ${diffHigh}\n` +
            `Distance to lowest (${lowest}): ${diffLow}\n` +
            `${currentQ.correctAnswer} is further from the middle number ${middle} by ${Math.max(diffHigh, diffLow)} units.`;
          break;
        case "Word Meaning":
          explanation = currentQ.explanation || 
            `The correct answer is "${currentQ.correctAnswer}" because it does not share a common meaning or category with the other two words.`;
          break;
        case "Spatial Visualisation":
          explanation = `The correct answer is ${currentQ.correctAnswer}. Let's analyze each pair:\n` +
            currentQ.pairs.map((pair, idx) => {
              if (pair.isMatching) {
                return `Pair ${idx + 1}: MATCHES - both symbols are ${pair.topMirrored ? 'mirrored' : 'normal'} ` +
                  `and can be rotated to match exactly`;
              } else {
                return `Pair ${idx + 1}: DOES NOT MATCH - one symbol is normal and one is mirrored ` +
                  `(they are mirror images of each other)`;
              }
            }).join('\n');
          break;
      }
    }

    setFeedback({ 
      show: true, 
      isCorrect,
      explanation,
      waitingForConfirmation: !isCorrect
    });

    if (isCorrect) {
      setTimeout(() => {
        proceedToNextQuestion();
      }, 800);
    }
  };

  const proceedToNextQuestion = () => {
    setFeedback({ show: false, isCorrect: false, explanation: '', waitingForConfirmation: false });
    setQuestionStartTime(null);
    setIsTransitioning(false);
    
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      if (selectedTask === "Reasoning") {
        setShowStatement(true);
      }
    } else {
      setPage("report");
    }
  };

  const handleStatementClick = () => {
    setShowStatement(false);
    setQuestionStartTime(Date.now());
  };

  const backToTaskSelection = () => {
    setPage("taskSelection");
    setSelectedTask(null);
    setQuestions([]);
    setRecords([]);
    setQuestionStartTime(null);
  };

  // Render the appropriate page/task based on current state
  if (page === "welcome") {
    return <WelcomePage onContinue={() => setPage("taskSelection")} />;
  }

  if (page === "taskSelection") {
    return <TaskSelectionPage onSelectTask={selectTask} />;
  }

  if (page === "instructions") {
    return <InstructionsPage selectedTask={selectedTask} onStartTask={startTask} />;
  }

  if (page === "report") {
    return (
      <ReportPage 
        selectedTask={selectedTask} 
        records={records} 
        onBackToTaskSelection={backToTaskSelection} 
      />
    );
  }

  if (page === "question") {
    const layoutProps = {
      currentQuestionIndex,
      questions,
      feedback,
      proceedToNextQuestion
    };

    switch(selectedTask) {
      case "Reasoning":
        return (
          <ReasoningTask
            currentQ={questions[currentQuestionIndex]}
            showStatement={showStatement}
            handleStatementClick={handleStatementClick}
            handleAnswer={handleAnswer}
            isTransitioning={isTransitioning}
            {...layoutProps}
          />
        );
      case "Perceptual Speed":
        return (
          <PerceptualSpeedTask
            currentQ={questions[currentQuestionIndex]}
            handleAnswer={handleAnswer}
            isTransitioning={isTransitioning}
            {...layoutProps}
          />
        );
      case "Number Speed & Accuracy":
        return (
          <NumberSpeedTask
            shuffledAnswers={shuffledAnswers}
            handleAnswer={handleAnswer}
            isTransitioning={isTransitioning}
            {...layoutProps}
          />
        );
      case "Word Meaning":
        return (
          <WordMeaningTask
            currentQ={questions[currentQuestionIndex]}
            handleAnswer={handleAnswer}
            isTransitioning={isTransitioning}
            {...layoutProps}
          />
        );
      case "Spatial Visualisation":
        return (
          <SpatialVisualisationTask
            currentQ={questions[currentQuestionIndex]}
            handleAnswer={handleAnswer}
            isTransitioning={isTransitioning}
            {...layoutProps}
          />
        );
      default:
        return null;
    }
  }

  return null;
};

export default AptitudeTestGame; 