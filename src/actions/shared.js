import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser.js'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                _getQuestions()
                    .then(() => {
                        dispatch(receiveUsers(users))
                        dispatch(receiveQuestions(questions))
                        dispatch(setAuthedUser(AUTHED_ID))
                    })
            })
    }
}
