const loginUser = async (email, password) => {
  const response = await fetch("http://127.0.0.1:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await response.json();
  localStorage.setItem("authToken", data.authToken);
};
const getUser = async (authToken) => {
  const response = await fetch("http://127.0.0.1:3000/api/auth/getUser", {
    method: "POST",
    headers: {
      "auth-token": authToken,
    },
    body: JSON.stringify({}),
  });
  const data = await response.json();
  return data;
};

export { loginUser, getUser };
