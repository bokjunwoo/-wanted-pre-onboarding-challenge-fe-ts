import { ValidationResult } from '@/utils/sign';
import { useCallback, useState } from 'react';

export default (initialValue: string, validation: (value: string) => Promise<ValidationResult>) => {
  const [value, setValue] = useState(initialValue);

  const [result, setResult] = useState<ValidationResult>({
    message: '',
    success: false,
  });

  const onChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      const validationResult = await validation(e.target.value);
      setResult(validationResult);
    },
    [validation],
  );

  return [value, onChange, result] as const;
};
