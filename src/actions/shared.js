import { getInitialData } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser.js'
import { showLoading, hideLoading } from 'react-redux-loading'

// tymczasowy user, potem ustawic usera takiego jakiego wybierzesz z login screena.
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
