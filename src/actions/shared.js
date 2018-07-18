import { getInitialData } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser.js'
import { showLoading, hideLoading } from 'react-redux-loading'

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
