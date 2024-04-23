export const isAuthorized = () => {
  return Boolean(localStorage.getItem('jwt'));
};
