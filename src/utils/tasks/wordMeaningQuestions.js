import { shuffleArray } from '../gameUtils';

export const getWordMeaningQuestions = () => {
    const allQuestions = [
      { type: "Word Meaning", words: ["up", "down", "street"], correctAnswer: "street" },
      { type: "Word Meaning", words: ["below", "under", "letter"], correctAnswer: "letter" },
      { 
        type: "Word Meaning", 
        words: ["ephemeral", "eternal", "transient"], 
        correctAnswer: "eternal",
        explanation: "both ephemeral and transient refer to things that are temporary or short-lived"
      },
      { 
        type: "Word Meaning", 
        words: ["ubiquitous", "omnipresent", "sporadic"], 
        correctAnswer: "sporadic",
        explanation: "both ubiquitous and omnipresent mean being present everywhere"
      },
      { 
        type: "Word Meaning", 
        words: ["cacophony", "euphony", "dissonance"], 
        correctAnswer: "euphony",
        explanation: "both cacophony and dissonance refer to harsh or unpleasant sounds"
      },
      { 
        type: "Word Meaning", 
        words: ["perspicacious", "obtuse", "astute"], 
        correctAnswer: "obtuse",
        explanation: "both perspicacious and astute refer to having keen understanding or insight"
      },
      { 
        type: "Word Meaning", 
        words: ["surreptitious", "clandestine", "conspicuous"], 
        correctAnswer: "conspicuous",
        explanation: "both surreptitious and clandestine refer to things done secretly"
      },
      { 
        type: "Word Meaning", 
        words: ["phlegmatic", "stoic", "volatile"], 
        correctAnswer: "volatile",
        explanation: "both phlegmatic and stoic refer to being calm and unemotional"
      },
      { type: "Word Meaning", words: ["hot", "cold", "blue"], correctAnswer: "blue" },
      { type: "Word Meaning", words: ["quick", "fast", "book"], correctAnswer: "book" },
      { type: "Word Meaning", words: ["summer", "winter", "rain"], correctAnswer: "rain" },
      { type: "Word Meaning", words: ["laugh", "smile", "cry"], correctAnswer: "cry" },
      { type: "Word Meaning", words: ["hero", "villain", "table"], correctAnswer: "table" },
      { type: "Word Meaning", words: ["circle", "square", "banana"], correctAnswer: "banana" },
      { type: "Word Meaning", words: ["day", "night", "umbrella"], correctAnswer: "umbrella" },
      { type: "Word Meaning", words: ["empty", "void", "color"], correctAnswer: "color" },
      { 
        type: "Word Meaning", 
        words: ["mellifluous", "harmonious", "strident"], 
        correctAnswer: "strident",
        explanation: "both mellifluous and harmonious refer to pleasing, smooth-flowing sounds"
      },
      { 
        type: "Word Meaning", 
        words: ["nebulous", "ambiguous", "explicit"], 
        correctAnswer: "explicit",
        explanation: "both nebulous and ambiguous refer to unclear or vague concepts"
      },
      { 
        type: "Word Meaning", 
        words: ["fastidious", "meticulous", "careless"], 
        correctAnswer: "careless",
        explanation: "both fastidious and meticulous refer to paying careful attention to detail"
      },
      { 
        type: "Word Meaning", 
        words: ["ephemeral", "fleeting", "perpetual"], 
        correctAnswer: "perpetual",
        explanation: "both ephemeral and fleeting refer to things lasting a very short time"
      },
      { 
        type: "Word Meaning", 
        words: ["laconic", "terse", "verbose"], 
        correctAnswer: "verbose",
        explanation: "both laconic and terse refer to using few words"
      },
      { 
        type: "Word Meaning", 
        words: ["mendacious", "duplicitous", "veracious"], 
        correctAnswer: "veracious",
        explanation: "both mendacious and duplicitous refer to being untruthful"
      },
      { 
        type: "Word Meaning", 
        words: ["pellucid", "limpid", "opaque"], 
        correctAnswer: "opaque",
        explanation: "both pellucid and limpid refer to being clear and transparent"
      },
      { 
        type: "Word Meaning", 
        words: ["truculent", "belligerent", "peaceful"], 
        correctAnswer: "peaceful",
        explanation: "both truculent and belligerent refer to being aggressive or hostile"
      },
      { 
        type: "Word Meaning", 
        words: ["quotidian", "mundane", "extraordinary"], 
        correctAnswer: "extraordinary",
        explanation: "both quotidian and mundane refer to ordinary, everyday things"
      },
      { 
        type: "Word Meaning", 
        words: ["ineffable", "inexpressible", "articulate"], 
        correctAnswer: "articulate",
        explanation: "both ineffable and inexpressible refer to things too great to be expressed in words"
      },
      { 
        type: "Word Meaning", 
        words: ["perfunctory", "cursory", "thorough"], 
        correctAnswer: "thorough",
        explanation: "both perfunctory and cursory refer to actions done with minimal effort or attention"
      },
      { 
        type: "Word Meaning", 
        words: ["mercurial", "capricious", "consistent"], 
        correctAnswer: "consistent",
        explanation: "both mercurial and capricious refer to rapidly changing moods or behavior"
      },
      { 
        type: "Word Meaning", 
        words: ["taciturn", "reticent", "loquacious"], 
        correctAnswer: "loquacious",
        explanation: "both taciturn and reticent refer to being reserved in speech"
      },
      { 
        type: "Word Meaning", 
        words: ["prescient", "prophetic", "ignorant"], 
        correctAnswer: "ignorant",
        explanation: "both prescient and prophetic refer to knowing about things before they happen"
      },
      { 
        type: "Word Meaning", 
        words: ["querulous", "petulant", "agreeable"], 
        correctAnswer: "agreeable",
        explanation: "both querulous and petulant refer to being complaining or whining"
      },
      { 
        type: "Word Meaning", 
        words: ["sagacious", "sapient", "foolish"], 
        correctAnswer: "foolish",
        explanation: "both sagacious and sapient refer to having great wisdom"
      },
      { 
        type: "Word Meaning", 
        words: ["zealous", "fervent", "apathetic"], 
        correctAnswer: "apathetic",
        explanation: "both zealous and fervent refer to having intense enthusiasm"
      },
      { 
        type: "Word Meaning", 
        words: ["obstreperous", "clamorous", "quiet"], 
        correctAnswer: "quiet",
        explanation: "both obstreperous and clamorous refer to being noisy and difficult to control"
      },
      { 
        type: "Word Meaning", 
        words: ["munificent", "beneficent", "miserly"], 
        correctAnswer: "miserly",
        explanation: "both munificent and beneficent refer to being generous"
      },
      { 
        type: "Word Meaning", 
        words: ["inveterate", "habitual", "occasional"], 
        correctAnswer: "occasional",
        explanation: "both inveterate and habitual refer to long-established patterns"
      },
      { 
        type: "Word Meaning", 
        words: ["recondite", "abstruse", "obvious"], 
        correctAnswer: "obvious",
        explanation: "both recondite and abstruse refer to being difficult to understand"
      },
      { 
        type: "Word Meaning", 
        words: ["garrulous", "voluble", "reticent"], 
        correctAnswer: "reticent",
        explanation: "both garrulous and voluble refer to talking excessively"
      },
      { 
        type: "Word Meaning", 
        words: ["pellucid", "translucent", "murky"], 
        correctAnswer: "murky",
        explanation: "both pellucid and translucent refer to allowing light to pass through"
      },
      { 
        type: "Word Meaning", 
        words: ["insidious", "treacherous", "forthright"], 
        correctAnswer: "forthright",
        explanation: "both insidious and treacherous refer to being deceptively harmful"
      },
      { 
        type: "Word Meaning", 
        words: ["redolent", "aromatic", "odorless"], 
        correctAnswer: "odorless",
        explanation: "both redolent and aromatic refer to having a strong smell"
      },
      { 
        type: "Word Meaning", 
        words: ["pellucid", "perspicuous", "obscure"], 
        correctAnswer: "obscure",
        explanation: "both pellucid and perspicuous refer to being clear and easily understood"
      },
      { 
        type: "Word Meaning", 
        words: ["ineffable", "unutterable", "expressible"], 
        correctAnswer: "expressible",
        explanation: "both ineffable and unutterable refer to being too great to be expressed"
      },
      { 
        type: "Word Meaning", 
        words: ["vapid", "insipid", "engaging"], 
        correctAnswer: "engaging",
        explanation: "both vapid and insipid refer to being dull or uninteresting"
      },
      { 
        type: "Word Meaning", 
        words: ["fatuous", "inane", "sensible"], 
        correctAnswer: "sensible",
        explanation: "both fatuous and inane refer to being foolish or silly"
      },
      { 
        type: "Word Meaning", 
        words: ["mendacious", "fallacious", "truthful"], 
        correctAnswer: "truthful",
        explanation: "both mendacious and fallacious refer to being false or deceptive"
      },
      { 
        type: "Word Meaning", 
        words: ["happy", "joyful", "angry"], 
        correctAnswer: "angry",
        explanation: "both happy and joyful refer to feeling good or pleased"
      },
      { 
        type: "Word Meaning", 
        words: ["big", "large", "tiny"], 
        correctAnswer: "tiny",
        explanation: "both big and large refer to something of great size"
      },
      { 
        type: "Word Meaning", 
        words: ["quick", "fast", "slow"], 
        correctAnswer: "slow",
        explanation: "both quick and fast refer to moving or doing something rapidly"
      },
      { 
        type: "Word Meaning", 
        words: ["beautiful", "pretty", "ugly"], 
        correctAnswer: "ugly",
        explanation: "both beautiful and pretty refer to looking nice or attractive"
      },
      { 
        type: "Word Meaning", 
        words: ["smart", "clever", "stupid"], 
        correctAnswer: "stupid",
        explanation: "both smart and clever refer to being intelligent"
      },
      { 
        type: "Word Meaning", 
        words: ["loud", "noisy", "quiet"], 
        correctAnswer: "quiet",
        explanation: "both loud and noisy refer to making a lot of sound"
      },
      { 
        type: "Word Meaning", 
        words: ["old", "ancient", "new"], 
        correctAnswer: "new",
        explanation: "both old and ancient refer to something that has existed for a long time"
      },
      { 
        type: "Word Meaning", 
        words: ["wet", "damp", "dry"], 
        correctAnswer: "dry",
        explanation: "both wet and damp refer to containing water or moisture"
      },
      { 
        type: "Word Meaning", 
        words: ["rich", "wealthy", "poor"], 
        correctAnswer: "poor",
        explanation: "both rich and wealthy refer to having a lot of money"
      },
      { 
        type: "Word Meaning", 
        words: ["strong", "powerful", "weak"], 
        correctAnswer: "weak",
        explanation: "both strong and powerful refer to having great physical force"
      },
      { 
        type: "Word Meaning", 
        words: ["small", "tiny", "huge"], 
        correctAnswer: "huge",
        explanation: "both small and tiny refer to something of little size"
      },
      { 
        type: "Word Meaning", 
        words: ["brave", "courageous", "scared"], 
        correctAnswer: "scared",
        explanation: "both brave and courageous refer to showing courage"
      },
      { 
        type: "Word Meaning", 
        words: ["cold", "chilly", "hot"], 
        correctAnswer: "hot",
        explanation: "both cold and chilly refer to low temperature"
      },
      { 
        type: "Word Meaning", 
        words: ["dark", "gloomy", "bright"], 
        correctAnswer: "bright",
        explanation: "both dark and gloomy refer to having little or no light"
      },
      { 
        type: "Word Meaning", 
        words: ["easy", "simple", "difficult"], 
        correctAnswer: "difficult",
        explanation: "both easy and simple refer to something not hard to do"
      }
    ];
    
    return shuffleArray(allQuestions).slice(0, 10);
  };