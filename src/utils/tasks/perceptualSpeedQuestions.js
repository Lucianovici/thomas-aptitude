import { randomLetter } from '../gameUtils';

export const generatePerceptualSpeedQuestions = () => {
    const questions = [];
    for (let i = 0; i < 10; i++) {
      const pairs = [];
      let count = 0;
      const usedLetters = new Set();
      
      // Randomly decide if capitals should be on top for this question
      const capitalsOnTop = Math.random() < 0.5;
      
      for (let j = 0; j < 4; j++) {
        let firstLetter;
        do {
          firstLetter = randomLetter();
        } while (usedLetters.has(firstLetter.toLowerCase()));
        
        usedLetters.add(firstLetter.toLowerCase());
        
        // Format first letter based on capitalsOnTop
        firstLetter = capitalsOnTop ? firstLetter.toUpperCase() : firstLetter.toLowerCase();
        
        if (Math.random() < 0.5) {
          // For matching pairs, second letter is the opposite case of first letter
          const secondLetter = capitalsOnTop ? firstLetter.toLowerCase() : firstLetter.toUpperCase();
          pairs.push([firstLetter, secondLetter]);
          count++;
        } else {
          let secondLetter;
          do {
            secondLetter = randomLetter();
          } while (
            secondLetter.toLowerCase() === firstLetter.toLowerCase() || 
            usedLetters.has(secondLetter.toLowerCase())
          );
          usedLetters.add(secondLetter.toLowerCase());
          
          // Format second letter based on capitalsOnTop (opposite of first letter)
          secondLetter = capitalsOnTop ? secondLetter.toLowerCase() : secondLetter.toUpperCase();
          pairs.push([firstLetter, secondLetter]);
        }
      }
      questions.push({
        type: "Perceptual Speed",
        pairs,
        correctAnswer: count
      });
    }
    return questions;
  };