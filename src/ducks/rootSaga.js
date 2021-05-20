import {all} from 'redux-saga/effects';
import {saga as articlesSaga} from './articles';

export default function* rootSaga() {
  yield all([articlesSaga()]);
}
