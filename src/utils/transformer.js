export function transformTvToMovie(tv) {
  return {
    isTv: true,
    adult: false,
    original_title: tv?.original_name,
    title: tv?.name,
    video: false,
    ...tv,
  };
}
