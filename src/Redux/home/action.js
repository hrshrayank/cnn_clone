import axios from 'axios'
import {
  GET_HOME_FAILURE,
  GET_HOME_REQUEST,
  GET_HOME_SUCCESS,
} from './actionTypes'

export const get_home_request = () => {
  return {
    type: GET_HOME_REQUEST,
  }
}

export const get_home_success = (payload) => {
  return {
    type: GET_HOME_SUCCESS,
    payload,
  }
}

export const get_home_failure = () => {
  return {
    type: GET_HOME_FAILURE,
  }
}

export const get_home = (payload) => (dispatch) => {
  dispatch(get_home_request())
  axios
    .get('https://boat-databse.herokuapp.com/articles')
    .then((res) => dispatch(get_home_success(res.data)))
    .catch((err) => dispatch(get_home_failure()))
}
