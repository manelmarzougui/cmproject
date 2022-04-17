import {
  LOAD_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
  ADD_USER,
  GET_USER_SUCCESS,
  DELETE_USER,
  UPDATE_USER,
  UPDATE_USER_FAIL,
} from '../const/userConst'
import axios from 'axios'

// get Users//
export const getusers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS })
  try {
    let result = await axios.get('/user/getusers/')
    dispatch({ type: GET_USERS_SUCCESS, payload: result.data })
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error.data })
  }
}
// export const addusers = () => async (dispatch) => {
 
//   try {
//    let result = axios.post
//   } catch (error) {
//     dispatch({ type: GET_USERS_FAIL, payload: error.data })
//   }
// }
export const registerUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USERS })
  try {
    const result = await axios.post('/user/register', user)
    //{new user,msg,token}
    // localStorage.setItem("token", result.data.token);

    dispatch({ type: REGISTER_USER, payload: result.data })
  } catch (error) {
    const { errors, msg } = errors.response.data
    if (Array.isArray(errors)) {
      errors.forEach((el) => alert(error.msg))
    }
    dispatch({ type: FAIL_USER, payload: error.response.data })
    navigate.push('/')
  }
}

export const addUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USERS })
  try {
    const result = await axios.post('/user/add', user)
    //{new user,msg,token}
    // localStorage.setItem("token", result.data.token);

    dispatch({ type: GET_USER_SUCCESS, payload: result.data })
     dispatch(getusers())
  } catch (error) {
    const { errors, msg } = errors.response.data
    if (Array.isArray(errors)) {
      errors.forEach((el) => alert(error.msg))
    }
    dispatch({ type: FAIL_USER, payload: error.response.data })
    navigate.push('/')
  }
}
export const deleteuser = (id) => async (dispatch) => {
  try {
    let result = await axios.delete(`user/${id}`)
    dispatch({ type: DELETE_USER })
  dispatch(getusers())
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error.data })
  }
}

export const updateuser =
  ({ id, modalEdit }) =>
  async (dispatch) => {
    try {
      let result = await axios.put(`user/${id}`, modalEdit)
      dispatch({ type: UPDATE_USER })
      dispatch(getusers())
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAIL })
    }
  }



export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USERS })
  try {
    const result = await axios.post('/user/login', user)
    //{new user,msg,token}
    dispatch({ type: LOGIN_USER, payload: result.data })
    navigate('/')
  } catch (error) {
    const { errors, msg } = errors.response.data
    if (Array.isArray(errors)) {
      errors.forEach((el) => alert(error.msg))
    }
    if (msg) {
      alert(msg)
    }
    dispatch({ type: FAIL_USER, payload: error.data })
    console.log(error)
  }
}

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS })
  const options = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }
  console.log(options)
  try {
    let result = await axios.get('user/current', options)

    //user
    dispatch({ type: CURRENT_USER, payload: result.data.user })
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data })
    console.log(error)
  }
}

export const logout = () => {
  return {
    type: LOGOUT_USER,
  }
}
