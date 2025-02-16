export const generateSpatialVisualisationQuestions = () => {
    const questions = [];
    const possibleRotations = [0, 90, 180, 270];
  
    for (let i = 0; i < 10; i++) {
      let pairs;
      let count;
      
      do {
        pairs = [];
        count = 0;
        
        for (let j = 0; j < 4; j++) {
          const willBeMatching = Math.random() < 0.5;
          const topRotation = possibleRotations[Math.floor(Math.random() * possibleRotations.length)];
          
          if (willBeMatching) {
            const bothMirrored = Math.random() < 0.5;
            
            let bottomRotation;
            do {
              bottomRotation = possibleRotations[Math.floor(Math.random() * possibleRotations.length)];
            } while (bottomRotation === topRotation);
  
            pairs.push({
              isMatching: true,
              topRotation,
              bottomRotation,
              topMirrored: bothMirrored,
              bottomMirrored: bothMirrored
            });
            count++;
          } else {
            const topMirrored = Math.random() < 0.5;
            const bottomMirrored = !topMirrored;
            const bottomRotation = possibleRotations[Math.floor(Math.random() * possibleRotations.length)];
  
            pairs.push({
              isMatching: false,
              topRotation,
              bottomRotation,
              topMirrored,
              bottomMirrored
            });
          }
        }
      } while (questions[i-1] && pairs.some((pair, idx) => 
        pair.isMatching === questions[i-1].pairs[idx].isMatching &&
        pair.topRotation === questions[i-1].pairs[idx].topRotation &&
        pair.bottomRotation === questions[i-1].pairs[idx].bottomRotation &&
        pair.topMirrored === questions[i-1].pairs[idx].topMirrored &&
        pair.bottomMirrored === questions[i-1].pairs[idx].bottomMirrored
      ));
  
      questions.push({
        type: "Spatial Visualisation",
        pairs,
        correctAnswer: count
      });
    }
    return questions;
  }; 