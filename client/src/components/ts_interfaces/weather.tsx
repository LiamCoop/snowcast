export interface weatherObj {
    //cod is API internal parameter
    cod: string;
    //cnt == len(list)
    cnt: number;
    //internal parameter
    message: string;
    //list of actual, usable weather data (see conditions)
    list: Array<conditionsObj>;
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

export interface conditionsObj {
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
    clouds: { all: number; };
    pop: number;
    rain?: { '3h': number; };
    snow?: { '3h': number; };
    sys: { pod: string; };
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