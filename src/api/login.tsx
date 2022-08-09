export async function sendLoginCredentials() {
  const response = await fetch("http://localhost:8081/auth ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "sarah",
      password: "connor",
    }),
  });

  const data = await response.json();
  return data.token as string;
}
