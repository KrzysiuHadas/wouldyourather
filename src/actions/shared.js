import { getInitialData } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions, addAnswerToQuestion } from './questions'
import { setAuthedUser } from './authedUser.js'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestionAnswer } from '../utils/_DATA'


// temporary user, later choosing from home screen should work
const AUTHED_ID = 'johndoe'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        return _saveQuestionAnswer(info)
            .then(
                dispatch(addAnswerToQuestion(info))
            )
    }
}