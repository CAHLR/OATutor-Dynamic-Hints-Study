var hints = [{id: "poly2a-h1", type: "hint", dependencies: [], title: "Combining $x^3$ Terms", text: "The first step is to simplify the $x^3$ term. However, since, $2x^3$ is the only $x^3$ term in the expression, this term stays the same."}, {id: "poly2a-h2", type: "hint", dependencies: ["poly2a-h1"], title: "Combining $$x^2$$ Terms", text: "The next step is to simplify the $x^2$ term."}, {id: "poly2a-h3", type: "hint", dependencies: ["poly2a-h2"], title: "Combining $x^2$ Terms", text: "We simplify the $x^2$ term by combining the coefficients of the values with $x^2$. The coefficients with $x^2$ are $5x^2$ and $2x^2$. By adding these values, we simplify the $x^2$ term."}, {id: "poly2a-h4", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["7x**2"], dependencies: ["poly2a-h3"], title: "Combining $x^2$ Terms", text: "What is $5x^2+2x^2$?"}, {id: "poly2a-h5", type: "hint", dependencies: ["poly2a-h4"], title: "Combining x Terms", text: "Now we need to combine the terms with x by adding -x and -3x."}, {id: "poly2a-h6", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["-4x"], dependencies: ["poly2a-h5"], title: "Combining x Terms", text: "What is $-x+-3x$?", subHints: [{id: "poly2a-h5-s1", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["-3"], dependencies: [], title: "Combining Constants", text: "Finish simplifying the expression by adding the constants. What is 1-4?"}]}, {id: "poly2a-h7", type: "hint", dependencies: ["poly2a-h6"], title: "Simplified Expression", text: "We can finally rewrite the expression as a sum of the simplified terms: $2x^3+7x^2-4x-3$."}, ]; export {hints};