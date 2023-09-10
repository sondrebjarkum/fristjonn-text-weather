import { Data, TimeSeries, YrApiResponse, YrWeatherSymbols } from "../types/yr";

class TableComponent {
  startTag = "<table>";
  endTag = "</table>";
  header = `<tr>
              <th>Dato</th>
              <th>Varsel</th>
              <th>Temp</th>
              <th>Regn</th>
            <tr>
            `;
  rows = "";

  addRow(html: string) {
    this.rows += html;
  }

  create(timeseries: TimeSeries[], longTerm: boolean) {
    timeseries.forEach((hourly) => {
      const datetime = new Date(hourly.time).toLocaleString("no", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });

      const hour = parseInt(
        new Date(hourly.time).toLocaleTimeString("no").split(":")[0]
      );

      const isNight = hour > 6 && hour < 23 ? "" : "background: lightgray;";

      let perceptionAcc: keyof Data = "next_1_hours";

      if (!hourly.data[perceptionAcc]) {
        if (!longTerm) {
          return;
        }
        perceptionAcc = "next_6_hours";

        if (!hourly.data[perceptionAcc]) {
          return;
        }
      }

      const symbolCode = hourly.data[perceptionAcc].summary.symbol_code;

      const perception = YrWeatherSymbols[symbolCode];

      const temp =
        Math.round(hourly.data.instant.details.air_temperature) + " °C";

      const rain =
        hourly.data[perceptionAcc].details?.precipitation_amount || 0;

      this.addRow(`
          <tr style="${isNight}">
            <td>${datetime}</td>
            <td>${perception}</td>
            <td>${temp}</td>
            <td>${rain + " mm"}</td>
          </tr>
        `);
    });
  }

  content() {
    return `${this.startTag} ${this.header} ${this.rows} ${this.endTag}`;
  }
}

const Table = (weatherData: YrApiResponse, longTerm: boolean) => {
  const { timeseries } = weatherData.properties;

  const forecast = new TableComponent();
  forecast.create(timeseries, longTerm);

  return forecast.content();
};

export default Table;
