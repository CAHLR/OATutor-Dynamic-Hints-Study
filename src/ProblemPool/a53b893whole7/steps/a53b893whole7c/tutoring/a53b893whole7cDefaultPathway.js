var hints = [{id: "a53b893whole7c-h1", type: "hint", dependencies: [], title: "Locate", text: "Locate the ten thousands place in the number", variabilization: {}}, {id: "a53b893whole7c-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["a53b893whole7c-h1"], title: "Value", text: "What is the value of the ten thousands place?", variabilization: {}}, {id: "a53b893whole7c-h3", type: "hint", dependencies: ["a53b893whole7c-h2"], title: "Next Value", text: "Check the next value to the right of the indicated ten thousands number", variabilization: {}}, {id: "a53b893whole7c-h4", type: "hint", dependencies: ["a53b893whole7c-h3"], title: "Rule", text: "If the number to the right of the ten thousands number is greater than or equal to 5 then add one to the ten thousands place number and make everything after to 0s. If it is less than 5, then leave the ten thousands place number the same and change everything after to 0s.", variabilization: {}}, ]; export {hints};