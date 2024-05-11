const handleLogin = async (e: Event, user: string, pass: string) => {
  const test = await fetch("http://localhost:3010/auth/login", {
    method: "POST",
    headers: { user, pass },
  });
  console.log(test);
};

export { handleLogin };
