import $ from 'jquery';

export const API_REQUEST_SUCCESS = 'user: updateUser';
export const API_REQUEST_ERROR = 'user: showError';

export function updateUser (newUser) {
  return{
      type: API_REQUEST_SUCCESS,
      payload: {
          user: newUser
      }
  }
}

export function showError(){
    return{
        type: API_REQUEST_ERROR,
        payload: {
            user: 'ERROR!!'
        }
    }
}

// export function onRequest(){
//     return{
//         type: API_REUQEST_REQUEST
//     }
// }

export function apiRequest(){
    return dispatch =>{
        // dispatch(requestMade());
        $.ajax({
            url: 'http://google.com',
            success(response){
                console.log('SUCCESS');
                dispatch(updateUser(response.newUser));
            },
            error(){
                console.log('ERROR');
                dispatch(showError());
            }
        })
    }
}