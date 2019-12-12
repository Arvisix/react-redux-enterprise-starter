import { createSelector } from 'reselect';
import { ApplicationRootState } from 'modules/App/types';

const selectRoute = (state: ApplicationRootState) => state.router;

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.location);

export { makeSelectLocation };
