import { useReducer } from 'react';

type Action = {
  name: string;
  value: string;
};

export const useInputValues = <T extends Record<string, string>>(
  initState: T,
) => {
  const [state, dispatch] = useReducer(
    (state: T, action: Action): T => ({
      ...state,
      [action.name]: action.value,
    }),
    initState,
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      name: e.target.name, // name은 UserInfo의 keyof 타입으로 변환
      value: e.target.value,
    });
  };

  return [state, onChange] as const;
};
