export interface Response<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data?: Array<T>;
  support?: Support;
}

export interface Support {
  text: string;
  url: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
