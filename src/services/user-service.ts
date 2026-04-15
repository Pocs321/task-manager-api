interface User {
  id: number;
  name: string;
  email: string;
}

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const getUser = async (id: number): Promise<User> => {
  const response = await fetch(`${API_BASE}/users/${id}`);
  const data = await response.json();
  return data as User;
};

export const getAllUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_BASE}/users`);
  const data = await response.json();
  return data as User[];
};
