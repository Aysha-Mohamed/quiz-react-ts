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