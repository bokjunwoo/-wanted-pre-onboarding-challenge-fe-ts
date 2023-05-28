import { useCallback, useState } from 'react';

export default (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  return [value, onChange, setValue] as const;
};
