export const isValidInput = (value: string): boolean => {
  const koreanRegex = /^[가-힣]+$/;

  if (koreanRegex.test(value)) {
    return false; // 입력값이 한글이 아님
  }

  if (value.length < 2) {
    return false; // 글자 길이가 2글자 미만
  }

  return true;
};
