import { RECEIVE_USERS, ANSWER_QUESTION_USER } from '../actions/users'


export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users,
            }
        case ANSWER_QUESTION_USER :
            const { authedUser, qid, answer } = action

            console.log("to jest reducer USERA");
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default :
            return state
    }
}