import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../store/auth/auth.selectors.ts';
import { useEffect, useMemo } from 'react';
import { setJWT } from '../store/auth/auth.slice.ts';
import { useLazyProfileQuery } from '../store/users/users.api.ts';

export const useAuth = () => {
  const { jwt, user } = useSelector(selectAuth);
  const [getProfile] = useLazyProfileQuery(undefined);
  const dispatch = useDispatch();

  const isAuthorized = useMemo(() => Boolean(jwt), [jwt]);

  useEffect(() => {
    if (jwt && user) {
      return;
    }

    if (!jwt) {
      const storedJWT = localStorage.getItem('jwt');
      if (!storedJWT) {
        return;
      }

      dispatch(setJWT(storedJWT));
    }

    if (!user) {
      const getUserProfile = async () => {
        try {
          await getProfile(undefined).unwrap();
        } catch (e) {
          console.error(e);
        }
      };

      getUserProfile();
    }
  }, [dispatch, getProfile, jwt, user]);

  return { isAuthorized };
};
