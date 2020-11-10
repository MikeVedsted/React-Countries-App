import { all, select, takeLatest } from 'redux-saga/effects'

// import uiSagas from './ui'
// import countrySagas from './country'

function* saveState() {
  const state = yield select()
  yield localStorage.setItem('all-countries', JSON.stringify(state))
}

export default function* rootSaga() {
  yield all([takeLatest('*', saveState)])
}
