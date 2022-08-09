import { Data } from "../interfaces/data";

export async function fetchMembers(token: string) {
  const response = await fetch("http://localhost:8081/api/members ", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
}

export async function sendNewMember(token: string, data: Data) {
  const response = await fetch("http://localhost:8081/api/members ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

}
