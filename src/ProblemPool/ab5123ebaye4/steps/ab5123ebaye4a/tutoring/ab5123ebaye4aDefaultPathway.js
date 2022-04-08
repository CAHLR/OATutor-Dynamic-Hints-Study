var hints = [{id: "ab5123ebaye4a-h1", type: "hint", dependencies: [], title: "Bayes' Theorem", text: "The probability of event A given event B may be computed by means of the following formula: P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "ab5123ebaye4a-h2", type: "hint", dependencies: ["ab5123ebaye4a-h1"], title: "Events", text: "Let B denote the event \"email is detected as spam,\" A denote the event \"email is not spam,\" and C denote the event \"email is spam.\" by Bayes' Theorem, P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "ab5123ebaye4a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.500"], dependencies: ["ab5123ebaye4a-h2"], title: "P(A)", text: "What is the probability that a random email is not spam? Round you answer to 3 decimal places", subHints: [{id: "ab5123ebaye4a-h3-s1", type: "hint", dependencies: [], title: "P(A)", text: "It is estimated that 50% of emails are spam emails. Thus the other 50% are not spam emails. That means that the probability that a randomly selected email is not spam is 0.500", variabilization: {}}], variabilization: {}}, {id: "ab5123ebaye4a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.050"], dependencies: ["ab5123ebaye4a-h3"], title: "P(B$$\mid$$A)", text: "What is the probability that an email is detected as spam given that it is not spam? Round you answer to 3 decimal places", subHints: [{id: "ab5123ebaye4a-h4-s1", type: "hint", dependencies: [], title: "P(B$$\mid$$A)", text: "The rate for a false positive (a non-spam email detected as spam) is 5%. Thus the probability that an email is detected as spam given that it is not spam is 0.050", variabilization: {}}], variabilization: {}}, {id: "ab5123ebaye4a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.520"], dependencies: ["ab5123ebaye4a-h4"], title: "P(B)", text: "What is the probability that a random email is detected as spam? Round you answer to 3 decimal places", subHints: [{id: "ab5123ebaye4a-h5-s1", type: "hint", dependencies: [], title: "P(B)", text: "There are two cases where an email is detected as spam: the email is detected as spam and the email is spam or the email is detected as spam and the email is not spam. So, P(B)=P(B$$\mid$$A)P(A)+P(B$$\mid$$C)P(C)", variabilization: {}}, {id: "ab5123ebaye4a-h5-s2", type: "hint", dependencies: ["ab5123ebaye4a-h5-s1"], title: "P(B$$\mid$$A)P(A)", text: "P(B$$\mid$$A) and P(A) were found to be 0.050 and 0.500, so $$P(B$$\\mid$$A)P(A)=0.05\\times0.5=0.025$$", variabilization: {}}, {id: "ab5123ebaye4a-h5-s3", type: "hint", dependencies: ["ab5123ebaye4a-h5-s2"], title: "P(B$$\mid$$C)", text: "The software claims that it can detect 99% of spam emails, so the probability that an email is detected as spam given that it is spam is 0.99", variabilization: {}}, {id: "ab5123ebaye4a-h5-s4", type: "hint", dependencies: ["ab5123ebaye4a-h5-s3"], title: "P(C)", text: "It is estimated that 50% of emails are spam emails. That means that the probability that a randomly selected email is spam is 0.5", variabilization: {}}, {id: "ab5123ebaye4a-h5-s5", type: "hint", dependencies: ["ab5123ebaye4a-h5-s4"], title: "P(B$$\mid$$C)P(C)", text: "P(B$$\mid$$C) and P(C) were found to be 0.99 and 0.5, so $$P(B$$\\mid$$C)P(C)=0.99\\times0.5=0.495$$", variabilization: {}}, {id: "ab5123ebaye4a-h5-s6", type: "hint", dependencies: ["ab5123ebaye4a-h5-s5"], title: "P(B)", text: "P(B)=P(B$$\mid$$A)P(A)+P(B$$\mid$$C)P(C)=0.025+0.495=0.520", variabilization: {}}], variabilization: {}}, {id: "ab5123ebaye4a-h6", type: "hint", dependencies: ["ab5123ebaye4a-h5"], title: "P(A$$\mid$$B)", text: "Use P(A), P(B$$\mid$$A), and P(B) to solve for P(A$$\mid$$B) using Bayes' theorem", variabilization: {}}, {id: "ab5123ebaye4a-h7", type: "hint", dependencies: ["ab5123ebaye4a-h6"], title: "P(A$$\mid$$B)", text: "P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)=0.5*0.05/0.52=0.048", variabilization: {}}, ]; export {hints};