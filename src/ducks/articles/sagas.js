import {put, takeLatest, call} from 'redux-saga/effects';
import {GET_ARTICLES, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILED} from './types';

import articlesServices from 'api/services/articles';

export function* fnGetArticles() {
  try {
    let today = new Date().toISOString().slice(0, 10);

    const reponse = yield call(articlesServices.api.fnGetArticles, today);

    yield put({type: GET_ARTICLES_SUCCESS, payload: reponse.data.articles});
  } catch (error) {
    yield put({type: GET_ARTICLES_FAILED, payload: error});
  }
}

export default function* watcher() {
  yield takeLatest(GET_ARTICLES, fnGetArticles);
}
