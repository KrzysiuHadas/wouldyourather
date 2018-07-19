import { ANSWER_QUESTION } from './questions'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswerToQuestionToUser ({ authedUser, qid, answer}) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}