export const generateNumberSpeedQuestions = () => {
    const questions = [];
    for (let i = 0; i < 10; i++) {
      let nums = [];
      let sorted;
      let diffHigh;
      let diffLow;
      let correctAnswer;
      
      do {
        nums = [];
        while (nums.length < 3) {
          const n = Math.floor(Math.random() * 30) + 1;
          if (!nums.includes(n)) nums.push(n);
        }
        
        sorted = [...nums].sort((a, b) => a - b);
        const [lowest, middle, highest] = sorted;
        diffHigh = highest - middle;
        diffLow = middle - lowest;
        
        if (diffHigh !== diffLow) {
          correctAnswer = diffHigh > diffLow ? highest : lowest;
        }
        
      } while (diffHigh === diffLow);
  
      questions.push({
        type: "Number Speed & Accuracy",
        numbers: nums,
        correctAnswer: correctAnswer
      });
    }
    return questions;
  };
  