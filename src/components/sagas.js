export function* getBookmarks() {
    const currentUser = yield select(currentUserSelector());
    const page = yield select(materialDetailPageSelector());
  
    const url = `employees/${currentUser.get('id')}/bookmarks/${page.get('result')}`;
    const result = yield call(request, url, 'GET');
    const ids = result.items.map(p => p.id);
    yield put(getBookmarksSuccess(ids));
  }
  //console.log(getBookmarksSaga);
  export function* getBookmarksSaga() {
    yield takeLatest(GET_BOOKMARKS, getBookmarks);
  }