export const getExtractUrl = (homepage: string | undefined) => {
  const urlRegex = /<a href="([^"]+)"/;
  const match = homepage?.match(urlRegex);
  if (match === null || match === undefined) {
    return '';
  }
  const url = match[1];
  return url;
};

export interface IStarInfo {
  star: number;
}

export const getAverageStar = (star: IStarInfo[] | undefined) => {
  if (!star?.length) return '0';
  const totalStar = star.reduce((acc, cur) => acc + cur.star, 0);
  return (totalStar / star.length).toFixed(1);
};

export const getLikeClickUser = (
  reviewLike: string[] | undefined,
  nickName: string,
) => {
  if (!reviewLike) {
    return '🤍';
  }
  return reviewLike.includes(nickName) ? '❤️' : '🤍';
};
