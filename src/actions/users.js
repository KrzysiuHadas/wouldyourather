export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION_USER = 'ANSWER_QUESTION_USER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswerToQuestionToUser ({ authedUser, qid, answer}) {
    return {
        type: ANSWER_QUESTION_USER,
        authedUser,
        qid,
        answer
    }
}

export function addQuestionToUser ({ id, author }) {
    return {
        type: ADD_QUESTION_USER,
        id,
        author
    }
}