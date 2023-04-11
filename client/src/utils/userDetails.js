const loginUser = async (email, password) => {
  const response = await fetch("127.0.0.1:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: email,
      password: password,
    },
  });
  return response;
};

export { loginUser };
