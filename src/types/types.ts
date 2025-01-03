export interface ApiError extends Error {
  status: number;
  message: string;
}

export interface UserInfo extends Record<string, string> {
  email: string;
  password: string;
}

export interface NavLink {
  name: string;
  href: string;
}
