import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action

            console.log("wpadłem do dobrego recudera", state[qid][answer].votes);
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        text: state[qid][answer]['text'],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                }
            }
        default:
            return state
    }
}
