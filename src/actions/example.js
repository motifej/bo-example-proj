import { createRequestActions } from 'utils/createRequestActions';
import * as types from 'constants/example';

export const loadExampleData = () => ({
  type: types.LOAD_EXAMPLE_DATA,
});

export const exampleActions = {
  get: createRequestActions({
    request: types.EXAMPLE_DATA.GET.REQUEST,
    success: types.EXAMPLE_DATA.GET.SUCCESS,
    fail: types.EXAMPLE_DATA.GET.FAIL,
  }),
};
