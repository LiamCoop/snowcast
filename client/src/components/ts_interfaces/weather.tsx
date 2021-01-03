export interface weatherObj {
    //cod is API internal parameter
    cod: string;
    //cnt == len(list)
    cnt: number;
    //internal parameter
    message: string;
    //list of actual, usable weather data (see conditions)
    list: Array<conditions>;
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

export interface conditions {
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
    clouds: {
        all: number;
        dt: number;
        dt_txt: string
    };
    pop: number;
    rain: any;
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
