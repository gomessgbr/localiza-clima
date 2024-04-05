export interface ForeCastResponseModel{
  id: number,
    name: string,
    state: string,
    country: string,
    meteogram: string,
    data: [
        {
            date: string,
            date_br: string,
            humidity: {
                min: number,
                max: number,
                dawn: {
                    min: number,
                    max: number
                },
                morning: {
                    min: number,
                    max: number
                },
                afternoon: {
                    min: number,
                    max: number
                },
                night: {
                    min: number,
                    max: number
                }
            },
            pressure: {
                pressure: number
            },
            rain: {
                probability: number,
                precipitation: number
            },
            wind: {
                velocity_min: number,
                velocity_max: number,
                velocity_avg: number,
                gust_max: number,
                direction_degrees: number,
                direction: string,
                dawn: {
                    direction: string,
                    direction_degrees: number,
                    gust_max: number,
                    velocity_max: number,
                    velocity_avg: number
                },
                morning: {
                    direction: string,
                    direction_degrees: number,
                    gust_max: number,
                    velocity_max: number,
                    velocity_avg: number
                },
                afternoon: {
                    direction: string,
                    direction_degrees: number,
                    gust_max: number,
                    velocity_max: number,
                    velocity_avg: number
                },
                night: {
                    direction: string,
                    direction_degrees: number,
                    gust_max: number,
                    velocity_max: number,
                    velocity_avg: number
                }
            },
            uv: {
                max: number
            },
            thermal_sensation: {
                min: number,
                max: number
            },
            text_icon: {
                icon: {
                    dawn: string,
                    morning: string,
                    afternoon: string,
                    night: string,
                    day: string
                },
                text: {
                    pt: string,
                    en: string,
                    es: string,
                    phrase: {
                        reduced: string,
                        morning: string,
                        afternoon: string,
                        night: string,
                        dawn: string
                    }
                }
            },
            temperature: {
                min: number,
                max: number,
                dawn: {
                    min: number,
                    max: number
                },
                morning: {
                    min: number,
                    max: number
                },
                afternoon: {
                    min: number,
                    max: number
                },
                night: {
                    min: number,
                    max: number
                }
            },
            cloud_coverage: {
                low: number,
                mid: number,
                high: number,
                dawn: {
                    low: number,
                    mid: number,
                    high: number
                },
                morning: {
                    low: number,
                    mid: number,
                    high: number
                },
                afternoon: {
                    low: number,
                    mid: number,
                    high: number
                },
                night: {
                    low: number,
                    mid: number,
                    high: number
                }
            },
            sun: {
                sunrise: string,
                sunset: string
            }
        },
    ]

}