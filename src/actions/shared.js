import { getInitialData, _saveQuestion } from '../utils/_DATA'
import { receiveUsers, addAnswerToQuestionToUser } from './users'
import { receiveQuestions, addAnswerToQuestion, addQuestion } from './questions'
import { setAuthedUser } from './authedUser.js'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestionAnswer } from '../utils/_DATA'


// temporary user, later choosing from home screen should work
const AUTHED_ID = 'sarahedo'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        return _saveQuestionAnswer(info)
            .then(() => {
                dispatch(addAnswerToQuestion(info))
                dispatch(addAnswerToQuestionToUser(info))
            })
    }
}

export function handleAddQuestion(info) {
    return (dispatch) => {
        return _saveQuestion(info)
            .then((question) => {
                dispatch(addQuestion(question))
                // TODO: add an action that adds that new question ID to the users database
            })
    }
}