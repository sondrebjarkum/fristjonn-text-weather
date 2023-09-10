// export const YrWeatherSymbols = {
//   clearsky_day: "Klart vær",
//   clearsky_night: "Klart vær",
//   fair_day: "Delvis skyet",
//   fair_night: "Delvis skyet",
//   partlycloudy_day: "Delvis skyet",
//   partlycloudy_night: "Delvis skyet",
//   cloudy: "Overskyet",
//   lightrainshowers_day: "Lette regnbyger",
//   lightrainshowers_night: "Lette regnbyger",
//   rainshowers_day: "Regnbyger",
//   rainshowers_night: "Regnbyger",
//   heavyrainshowers_day: "Kraftige regnbyger",
//   heavyrainshowers_night: "Kraftige regnbyger",
//   heavyrain: "Kraftige regnbyger",
//   lightrain: "Lett regn",
//   rain: "Regn",
//   heavysleetshowers_day: "Kraftige sluddbyger",
//   heavysleetshowers_night: "Kraftige sluddbyger",
//   sleet: "Sludd",
//   lightsnowshowers_day: "Lettsnøbyger",
//   lightsnowshowers_night: "Lettsnøbyger",
//   snowshowers_day: "Snøbyger",
//   snowshowers_night: "Snøbyger",
//   heavysnowshowers_day: "Kraftige snøbyger",
//   heavysnowshowers_night: "Kraftige snøbyger",
//   snow: "Snø",
//   fog: "Tåke",
//   thunder: "Tordenvær",
//   lightrainandthunder_day: "Lett regn og tordenvær",
//   lightrainandthunder_night: "Lett regn og tordenvær",
//   rainandthunder_day: "Regn og tordenvær",
//   rainandthunder_night: "Regn og tordenvær",
//   heavysnowandthunder_day: "Kraftig snø og tordenvær",
//   heavysnowandthunder_night: "Kraftig snø og tordenvær",
// };

export const YrWeatherSymbols = {
  clearsky_day: "klarvær",
  clearsky_night: "klarvær",
  fair_day: "lettskyet",
  fair_night: "lettskyet",
  partlycloudy_day: "delvis skyet",
  partlycloudy_night: "delvis skyet",
  cloudy: "overskyet",
  rainshowers_day: "regnbyger",
  rainshowers_night: "regnbyger",
  rainshowersandthunder_day: "regnbyger og torden",
  rainshowersandthunder_night: "regnbyger og torden",
  sleetshowers_day: "sluddbyger",
  sleetshowers_night: "sluddbyger",
  snowshowers_day: "snøbyger",
  snowshowers_night: "snøbyger",
  rain: "regn",
  heavyrain: "kraftig regn",
  heavyrainandthunder: "kraftig regn og torden",
  sleet: "sludd",
  snow: "snø",
  snowandthunder: "snø og torden",
  fog: "tåke",
  sleetshowersandthunder_day: "sluddbyger og torden",
  sleetshowersandthunder_night: "sluddbyger og torden",
  snowshowersandthunder_day: "snøbyger og torden",
  snowshowersandthunder_night: "snøbyger og torden",
  rainandthunder: "regn og torden",
  sleetandthunder: "sludd og torden",
  lightrainshowersandthunder_day: "lette regnbyger og torden",
  lightrainshowersandthunder_night: "lette regnbyger og torden",
  heavyrainshowersandthunder_day: "kraftige regnbyger og torden",
  heavyrainshowersandthunder_night: "kraftige regnbyger og torden",
  lightssleetshowersandthunder_day: "lette sluddbyger og torden",
  lightssleetshowersandthunder_night: "lette sluddbyger og torden",
  heavysleetshowersandthunder_day: "kraftige sluddbyger og torden",
  heavysleetshowersandthunder_night: "kraftige sluddbyger og torden",
  lightssnowshowersandthunder_day: "lette snøbyger og torden",
  lightssnowshowersandthunder_night: "lette snøbyger og torden",
  heavysnowshowersandthunder_day: "kraftige snøbyger og torden",
  heavysnowshowersandthunder_night: "kraftige snøbyger og torden",
  lightrainandthunder: "lett regn og torden",
  lightsleetandthunder: "lett sludd og torden",
  heavysleetandthunder: "kraftig sludd og torden",
  lightsnowandthunder: "lett snø og torden",
  heavysnowandthunder: "kraftig snø og torden",
  lightrainshowers_day: "lette regnbyger",
  lightrainshowers_night: "lette regnbyger",
  heavyrainshowers_day: "kraftige regnbyger",
  heavyrainshowers_night: "kraftige regnbyger",
  lightsleetshowers_day: "lette sluddbyger",
  lightsleetshowers_night: "lette sluddbyger",
  heavysleetshowers_day: "kraftige sluddbyger",
  heavysleetshowers_night: "kraftige sluddbyger",
  lightsnowshowers_day: "lette snøbyger",
  lightsnowshowers_night: "lette snøbyger",
  heavysnowshowers_day: "kraftige snøbyger",
  heavysnowshowers_night: "kraftige snøbyger",
  lightrain: "lett regn",
  lightsleet: "lett sludd",
  heavysleet: "kraftig sludd",
  lightsnow: "lett snø",
  heavysnow: "kraftig snø",
} as const;

export interface YrApiResponse {
  type: string;
  geometry: Geometry;
  properties: Properties;
  timeseries: TimeSeries[];
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  meta: Meta;
  timeseries: TimeSeries[];
}

export interface Meta {
  updated_at: string;
  units: Units;
}

export interface Units {
  air_pressure_at_sea_level: string;
  air_temperature: string;
  cloud_area_fraction: string;
  precipitation_amount: string;
  relative_humidity: string;
  wind_from_direction: string;
  wind_speed: string;
}

export interface TimeSeries {
  time: string;
  data: Data;
}

export interface Data {
  instant: Instant;
  next_12_hours: Next12Hours;
  next_1_hours: Next1Hours;
  next_6_hours: Next6Hours;
}

export interface Instant {
  details: Details;
}

export interface Details {
  air_pressure_at_sea_level: number;
  air_temperature: number;
  cloud_area_fraction: number;
  relative_humidity: number;
  wind_from_direction: number;
  wind_speed: number;
  precipitation_amount?: number;
}

export interface Next12Hours {
  summary: Summary;
}

export interface Summary {
  symbol_code: keyof typeof YrWeatherSymbols;
}

export interface Next1Hours {
  summary: Summary;
  details: Details;
}

export interface Next6Hours {
  summary: Summary;
  details: Details;
}
