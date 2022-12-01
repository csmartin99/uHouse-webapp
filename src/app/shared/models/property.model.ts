import { SafeResourceUrl } from "@angular/platform-browser";

export interface Property {
  id: string;
  name: string;
  price: number;
  picture: string;
  address?: string;
  area?: string;
  rooms?: string;
  premium: string;
  googlemapssrc?: SafeResourceUrl;
}
