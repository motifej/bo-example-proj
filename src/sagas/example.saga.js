import { put, call, takeEvery } from 'redux-saga/effects';
import { LOAD_EXAMPLE_DATA } from 'constants/example';
import { loadExample } from 'api/example';
import { exampleActions } from 'actions/example';

function* loadExampleSaga() {
  yield put(exampleActions.get.request());
  try {
    const data = yield call(loadExample, 'some arguments 1', 'some arguments 2');
    yield put(exampleActions.get.success(data));
  } catch (e) {
    yield put(exampleActions.get.fail(e));
  }
}

export default function* () {
  yield* [takeEvery(LOAD_EXAMPLE_DATA, loadExampleSaga)];
}
