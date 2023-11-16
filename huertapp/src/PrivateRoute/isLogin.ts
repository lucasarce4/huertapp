export const isLogin = (): string | null => {
  return localStorage.getItem("token");
};
