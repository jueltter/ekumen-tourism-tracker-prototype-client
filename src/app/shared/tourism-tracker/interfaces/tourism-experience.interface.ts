export interface TourismExperience {
  id:          number;
  province:    number;
  city:        string;
  address:     string;
  latitude:    string;
  longitude:   string;
  name:        string;
  description: string;
  type:        string;
  mediaList:   MediaList[];
}

export interface MediaList {
  id:                number;
  title:             string;
  description:       string;
  mediaType:         string;
  fileName:          string;
  filePath:          string;
  mimeType:          string;
  tourismExperience: number;
}
