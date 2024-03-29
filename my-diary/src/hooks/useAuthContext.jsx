// context를 사용하기 위한 useContext 와 우리가 생성한 AuthContext 두 가지를 import합니다
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  // 이제 context안에는 AuthContext에서 반환하는 state 값(user), dispatch 함수 두 가지가 들어있습니다.
  return context;
};
