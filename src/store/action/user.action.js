import { userConstants } from '../../constants';
import { userService } from '../../services';

export const userActions = {
    fetchAll
};

function success(items) { return { type: userConstants.LOAD_DATA_SUCCESS, items } }
function failure(error) { return { type: userConstants.LOAD_DATA_FAILED, error } }

function fetchAll() {
    return dispatch => {
        userService.fetchAll()
                   .then( res   => dispatch( success(res.data) ),
                          error => dispatch( failure(error) )
                        )
    }
}