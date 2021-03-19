export interface ProfileData {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}


export class Profile {
  public data: ProfileData;
  public support: Support;
  constructor(
    private self: any
  ) {
    this.data = self.data;
    this.support = self.data;
  }
}

