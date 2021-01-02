
export enum Difficulty 
{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuestions = 
    async function (amount : number, difficulty : Difficulty)
    {
        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        //first await the fetch, and then await until converted to JSON
        const data = await (await fetch(endpoint)).json();
        console.log(data);
    }