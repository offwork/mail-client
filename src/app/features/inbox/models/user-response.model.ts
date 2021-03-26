export interface Response<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data?: Array<T>;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
