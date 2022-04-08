var hints = [{id: "a3b09a3binomseq8a-h1", type: "hint", dependencies: [], title: "Equation", text: "Use the equation C(n,r)=(n!)/(r!(n-r)!) to solve", variabilization: {}}, {id: "a3b09a3binomseq8a-h2", type: "hint", dependencies: [], title: "Plug In Values", text: "Plug in the values to the equation", variabilization: {}}, {id: "a3b09a3binomseq8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3.56E+14$$"], dependencies: [], title: "Solve For the Numerator", text: "What is 17!? (Write in the form $$1.22E+2$$ and round to the nearest hundredth)", variabilization: {}}, {id: "a3b09a3binomseq8a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["720"], dependencies: ["a3b09a3binomseq8a-h3"], title: "Solve For the Denominator: Part 1", text: "What is 6!?", variabilization: {}}, {id: "a3b09a3binomseq8a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["39916800"], dependencies: ["a3b09a3binomseq8a-h4"], title: "Solve For the Denominator: Part 2", text: "What is (17-6)!?", variabilization: {}}, {id: "a3b09a3binomseq8a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12376"], dependencies: ["a3b09a3binomseq8a-h5"], title: "Solve", text: "What is $$3.56E+\\frac{14}{720\\times39916800}$$?", variabilization: {}}, ]; export {hints};