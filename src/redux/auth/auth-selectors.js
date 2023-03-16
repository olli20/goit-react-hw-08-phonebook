export const isUserLogin = ({ auth }) => auth.isLogin;
export const getError = ({ auth }) => auth.error;
export const getUser = ({ auth }) => auth.user;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
