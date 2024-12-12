export interface UserInfo extends Record<string, string> {
  email: string;
  password: string;
}

export interface NavLink {
  name: string;
  href: string;
}
