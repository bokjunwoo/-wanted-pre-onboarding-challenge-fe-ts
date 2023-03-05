import { ValidationResult } from '@/utils/sign';
import { useCallback, useState } from 'react';

export default (initialValue: string, validation: (value: string) => ValidationResult) => {
  const [value, setValue] = useState(initialValue);

  const [result, setResult] = useState<ValidationResult>({
    message: '',
    success: false,
  });

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setResult(validation(e.target.value));
    },
    [validation],
  );

  return [value, onChange, result] as const;
};
