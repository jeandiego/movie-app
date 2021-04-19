import * as RootNavigation from '../routes/RootNavigation';

export function goToDetail(movie) {
  RootNavigation.navigate('Detail', { movie });
}
