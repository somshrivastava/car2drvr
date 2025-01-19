// frontend/src/utils/auth.js

export const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.uid && user.email.includes("@husky.neu.edu");
};

export const logout = () => {
  localStorage.removeItem("user");
  window.location.reload(); // Reload to reflect logout
};
