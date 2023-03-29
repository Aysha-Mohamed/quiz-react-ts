

//the response is 
// category: "Entertainment: Video Games"
// correct_answer: "Lambda"
// difficulty: "easy"
// incorrect_answers: (3) ['Omega', 'Alpha', 'Sigma']
// question: "Which Greek letter represents the &quot;Half-Life&quot; logo?"
// type: "multiple"

//specify the type for each questions

export type Questions = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

//we are going to create another type for al questions to show in UI.

export type QuestionState = Questions & {answers: string[]};



export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number,difficulty: Difficulty ) =>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    //two fetch , because one is for fetch and the other is for converting to json.
    const data = await (await fetch(endpoint)).json();
    console.log(data);
}