import { IReviewInfo } from '@/pages/api/detail';

export const getExtractUrl = (homepage: string | undefined) => {
  const urlRegex = /<a href="([^"]+)"/;
  const match = homepage?.match(urlRegex);
  if (match === null || match === undefined) {
    return '';
  }
  const url = match[1];
  return url;
};

export const getAverageStar = (review: IReviewInfo[] | undefined) => {
  if (!review?.length) return '0';
  const totalStar = review.reduce((acc, cur) => acc + cur.star, 0);
  return (totalStar / review.length).toFixed(1);
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
