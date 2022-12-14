export interface DayObj {
  list: Array<ConditionsObj>;
  dateTime: string;
}

export interface SkiObj {
  SkiArea: {
    id: number;
    name: string;
    official_website: string;
    geo_lat: number;
    geo_lng: number;
    top_elevation: number | null;
    bottom_elevation: number | null;
    vertical_drop: number | null;
    operating_status: number;
    has_downhill: boolean;
    has_nordic: boolean;
  };
  Region: Array<{
    name: string;
    id: number;
    RegionsSkiArea: {
      id: number;
      ski_area_id: number;
      region_id: number;
      temp_region: number;
      temp_country: number;
    };
  }>;
}
export interface WeatherObj {
  //cod is API internal parameter
  cod: string;
  //cnt == len(list)
  cnt: number;
  //internal parameter
  message: string;
  //list of actual, usable weather data (see conditions)
  list: Array<ConditionsObj>;
  //city contains info about the city (if available)
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
}

export interface ConditionsObj {
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    //actual temp
    temp: number;
    //internal parameter
    temp_kf: number;
    //min/max temps
    temp_max: number;
    temp_min: number;
  };
  clouds: { all: number };
  pop: number;
  rain?: { '3h': number };
  snow?: { '3h': number };
  sys: { pod: string };
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind: {
    deg: number;
    speed: number;
  };
}
