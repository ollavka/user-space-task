interface Geolocation {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  city: string;
  suite: string;
  zipcode: string;
  geo: Geolocation;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
