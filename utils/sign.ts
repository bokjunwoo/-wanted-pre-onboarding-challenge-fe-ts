import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/message';
import { idIsDuplicate, nickNameIsDuplicate } from '@/pages/api/sign';

export type ValidationResult = {
  message: string;
  success: boolean;
};

const emailRegex = /^[a-z0-9]{5,12}$/;
export const emailValidation = async (
  email: string,
): Promise<ValidationResult> => {
  if (!emailRegex.test(email)) {
    return { message: ERROR_MESSAGE.LOGIN_CKECK_ERROR, success: false };
  }

  const isDuplicate = await idIsDuplicate(email);
  if (isDuplicate) {
    return { message: ERROR_MESSAGE.ID_DUPLICATE, success: false };
  }
  return { message: SUCCESS_MESSAGE.LOGIN_SUCCESS, success: true };
};

const ninknameRegex = /^[가-힣a-z0-9]{2,12}$/;
export const nicknameValidation = async (
  ninkname: string,
): Promise<ValidationResult> => {
  if (!ninknameRegex.test(ninkname))
    return { message: ERROR_MESSAGE.NICKNAME_CHECK_ERROR, success: false };

  const isDuplicate = await nickNameIsDuplicate(ninkname);
  if (isDuplicate) {
    return { message: ERROR_MESSAGE.NICKNAME_DUPLICATE, success: false };
  }
  return { message: SUCCESS_MESSAGE.NICKNAME_SUCCESS, success: true };
};

const passwordRegex = /^(?=.*[a-z])(?=.*[0-9]).{8,20}$/;
export const passwordValidation = async (
  password: string,
): Promise<ValidationResult> => {
  if (!passwordRegex.test(password)) {
    return { message: ERROR_MESSAGE.PASSWORD_CHECK_ERROR, success: false };
  }

  return { message: SUCCESS_MESSAGE.PASSWORD_SUCCESS, success: true };
};

export const passwordReinspection = (
  value: string,
  reValue: string,
): ValidationResult => {
  if (value.length === 0 && reValue.length === 0)
    return { message: ERROR_MESSAGE.REPASSWORD_LEGNTH_ZERO, success: false };
  if (value !== reValue)
    return { message: ERROR_MESSAGE.REPASSWORD_CHECK_ERROR, success: false };
  return { message: SUCCESS_MESSAGE.REPASSWORD_SUCCESS, success: true };
};
