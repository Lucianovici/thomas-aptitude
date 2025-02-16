import { shuffleArray } from '../gameUtils';

export const generateReasoningQuestions = () => {
    // Define question templates by difficulty
    const questionTemplates = {
      easy: [
        { pos: "heavier", neg: "lighter" },
        { pos: "stronger", neg: "weaker" },
        { pos: "brighter", neg: "duller" },
        { pos: "happier", neg: "sadder" },
        { pos: "taller", neg: "shorter" },
        { pos: "faster", neg: "slower" },
        { pos: "older", neg: "younger" },
        { pos: "louder", neg: "quieter" },
        { pos: "bigger", neg: "smaller" },
        { pos: "wider", neg: "narrower" }
      ],
      medium: [
        { 
          statement: "{name1} runs faster than {name2} but {name2} jumps higher than {name1}",
          question: "Who runs slower?",
          answer: "{name2}"
        },
        { 
          statement: "While {name1} is stronger than {name2}, {name2} has more endurance",
          question: "Who is weaker?",
          answer: "{name2}"
        },
        { 
          statement: "{name1} is taller than {name2} but not as athletic",
          question: "Who is shorter?",
          answer: "{name2}"
        },
        {
          statement: "{name1} scores higher in math than {name2}, but lower in science",
          question: "Who scores lower in math?",
          answer: "{name2}"
        },
        {
          statement: "{name1} types faster than {name2} but makes more mistakes",
          question: "Who types slower?",
          answer: "{name2}"
        },
        {
          statement: "Although {name1} lifts heavier weights, {name2} has better technique",
          question: "Who lifts lighter weights?",
          answer: "{name2}"
        },
        {
          statement: "{name1} speaks more languages than {name2}, but with less fluency",
          question: "Who speaks fewer languages?",
          answer: "{name2}"
        },
        {
          statement: "{name1} reads faster than {name2} but remembers less",
          question: "Who reads slower?",
          answer: "{name2}"
        },
        {
          statement: "While {name1} draws better than {name2}, {name2} has more creative ideas",
          question: "Who draws worse?",
          answer: "{name2}"
        },
        {
          statement: "{name1} earns more than {name2} but saves less",
          question: "Who earns less?",
          answer: "{name2}"
        }
      ],
      hard: [
        {
          statement: "If {name1} runs faster than {name2}, and {name2} runs faster than {name3}, then {name1} must run faster than {name3}",
          question: "Who runs the slowest?",
          answer: "{name3}"
        },
        {
          statement: "{name1} is taller than {name2}, who is taller than {name3}, but shorter than {name1}",
          question: "Who is the shortest?",
          answer: "{name3}"
        },
        {
          statement: "When {name1} scores higher than {name2}, {name2} always scores higher than {name3}",
          question: "Who scores the lowest?",
          answer: "{name3}"
        },
        {
          statement: "{name1} performs better than {name2} in speed, while {name2} outperforms {name3} in the same metric",
          question: "Who has the worst speed performance?",
          answer: "{name3}"
        },
        {
          statement: "In a race, {name1} finished before {name2}, who was ahead of {name3} by several seconds",
          question: "Who finished last?",
          answer: "{name3}"
        },
        {
          statement: "If {name1}'s strength exceeds {name2}'s, and {name2}'s strength surpasses {name3}'s, then logically...",
          question: "Who is the weakest?",
          answer: "{name3}"
        },
        {
          statement: "{name1} consistently outperforms {name2} in tests, while {name2} scores higher than {name3}",
          question: "Who has the lowest test scores?",
          answer: "{name3}"
        },
        {
          statement: "When ranking musical ability, {name1} ranks above {name2}, who ranks above {name3}",
          question: "Who ranks lowest in musical ability?",
          answer: "{name3}"
        },
        {
          statement: "In terms of experience, {name1} has more than {name2}, who has more than {name3}",
          question: "Who has the least experience?",
          answer: "{name3}"
        },
        {
          statement: "If {name1}'s skill level exceeds {name2}'s, and {name2}'s exceeds {name3}'s, then...",
          question: "Who has the lowest skill level?",
          answer: "{name3}"
        }
      ]
    };
  
    const names = [
      "Tom", "Fred", "John", "Pete", "Wendy", "Rachel", "Alice", "Bob", 
      "Paul", "Mark", "Sarah", "Emma", "Michael", "David", "Lisa", "Anna",
      "James", "Sophie", "Oliver", "Emily"
    ];
  
    const questions = [];
    
    // Generate 10 questions with mixed difficulty
    for (let i = 0; i < 10; i++) {
      // Randomly select difficulty with weighted distribution
      // 40% easy, 35% medium, 25% hard
      const rand = Math.random();
      const difficulty = rand < 0.4 ? 'easy' : (rand < 0.75 ? 'medium' : 'hard');
      
      if (difficulty === 'easy') {
        const attr = questionTemplates.easy[Math.floor(Math.random() * questionTemplates.easy.length)];
        const name1 = names[Math.floor(Math.random() * names.length)];
        let name2;
        do {
          name2 = names[Math.floor(Math.random() * names.length)];
        } while (name2 === name1);
  
        const isPos = Math.random() < 0.5;
        const statement = `${name1} is ${isPos ? attr.pos : attr.neg} than ${name2}.`;
        const questionText = `Who is ${isPos ? attr.pos : attr.neg}?`;
        questions.push({
          type: "Reasoning",
          difficulty: "easy",
          statement,
          questionText,
          options: shuffleArray([name1, name2]),
          correctAnswer: name1
        });
      } else {
        const template = questionTemplates[difficulty][
          Math.floor(Math.random() * questionTemplates[difficulty].length)
        ];
        
        const numNames = difficulty === 'hard' ? 3 : 2;
        const selectedNames = [];
        while (selectedNames.length < numNames) {
          const name = names[Math.floor(Math.random() * names.length)];
          if (!selectedNames.includes(name)) {
            selectedNames.push(name);
          }
        }
        
        let statement = template.statement;
        let question = template.question;
        let answer = template.answer;
        
        selectedNames.forEach((name, index) => {
          const placeholder = `{name${index + 1}}`;
          statement = statement.replace(new RegExp(placeholder, 'g'), name);
          question = question.replace(new RegExp(placeholder, 'g'), name);
          answer = answer.replace(new RegExp(placeholder, 'g'), name);
        });
                
        const options = difficulty === 'hard' ? 
          shuffleArray(selectedNames) : 
          shuffleArray(selectedNames.slice(0, 2));
        
        questions.push({
          type: "Reasoning",
          difficulty,
          statement,
          questionText: question,
          options,
          correctAnswer: answer
        });
      }
    }
    
    return questions;
  };