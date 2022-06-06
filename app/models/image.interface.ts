/*export interface Image {
  author: string;
  cocc: string;
  id: string;
  name: string;
  width: number;
  heigth: number;
  url: string;
  download_url: string;
}*/
export interface Image {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
