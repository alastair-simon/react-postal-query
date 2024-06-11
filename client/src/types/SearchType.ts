//place type
export type Place = {
  "place name": string;
  longitude: string;
  state: string;
  "state abbreviation": string;
  latitude: string;
};

//search type
export type SearchType = {
    "post code": "90210";
    "country": "United States";
    "country abbreviation": "US";
    "places": Place[];
    id: number;
}