import axios from 'axios'

import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_FINANCE_REQUEST,
  GET_FINANCE_SUCCESS,
  GET_FINANCE_FAILURE,
  GET_HEADLINES_REQUEST,
  GET_HEADLINES_SUCCESS,
  GET_HEADLINES_FAILURE,
} from './actionType'

const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  }
}

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  }
}

const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE,
  }
}
const getfinanceRequest = () => {
  return {
    type: GET_FINANCE_REQUEST,
  }
}

const getfinanceSuccess = (payload) => {
  return {
    type: GET_FINANCE_SUCCESS,
    payload,
  }
}

const getfinanceFailure = () => {
  return {
    type: GET_FINANCE_FAILURE,
  }
}
const getheadlinesRequest = () => {
  return {
    type: GET_HEADLINES_REQUEST,
  }
}

const getheadlinesSuccess = (payload) => {
  return {
    type: GET_HEADLINES_SUCCESS,
    payload,
  }
}

const getheadlinesFailure = () => {
  return {
    type: GET_HEADLINES_FAILURE,
  }
}

// export const business = (payload) => (dispatch) => {
//   dispatch(getDataRequest())
//   const businessApi =
//     'http://newsapi.org/v2/everything?q=business&apiKey=9491c13d03f446729c5936bce1697129'
//   const headlinesApi =
//     'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9491c13d03f446729c5936bce1697129'

//   const getbusiness = axios.get(businessApi)
//   const getheadlines = axios.get(headlinesApi)

//   axios
//     .all([getbusiness, getheadlines])
//     .then(
//       axios.spread((...allData) => {
//         const allDatabusiness = allData[0].data
//         const allDataheadlines = allData[1].data
//         // console.log(allDatabusiness, allDataheadlines)

//         dispatch(getDataSuccess(allDatabusiness.articles))
//         dispatch(getheadlinesSuccess(allDataheadlines.articles))
//       })
//     )
//     .catch((err) => {
//       dispatch(getfinanceFailure())
//       dispatch(getheadlinesFailure())
//     })
// }

export const business = (payload) => (dispatch) => {
  dispatch(getDataRequest())
  axios
    .get('https://boat-databse.herokuapp.com/business')
    .then((res) => dispatch(getDataSuccess(res.data)))
    .catch((err) => dispatch(getDataFailure()))
}

export const fetchheadlines = (payload) => (dispatch) => {
  dispatch(getheadlinesRequest())

  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9491c13d03f446729c5936bce1697129`
    )
    .then((res) => {
      dispatch(getheadlinesSuccess(res.data.articles))
    })
    .catch((err) => {
      dispatch(getheadlinesFailure())
    })
}
