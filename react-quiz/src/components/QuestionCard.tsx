import React from 'react';

type properties = {
    question: string;
    answers: string[];
    returnBack: any;
    userGuess: any;
    questionNumber: number;
    totalQuestions: number;

}

function createQuestion(props: properties)
{
    <div>
        <p className="number">
            Question: {props.questionNumber} / {props.totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: props.question}}/>
        <div>
            {props.answers.map(answer => (
                <div>
                    <button disabled={props.userGuess}>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </button>
                </div>
            ))}
        </div>
    </div>

}

const QuestionCard = createQuestion;

export default QuestionCard;
