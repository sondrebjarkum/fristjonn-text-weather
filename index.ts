import Table from "./components/table";
import { Root } from "./components/root";
import compressor from "./helpers/compressor";
import readStream from "./helpers/stream-reader";
import { YrApiResponse } from "./types/yr";

const server = Bun.serve({
  port: 3323,
  async fetch(request) {
    console.log("request:", request);

    const { body } = await fetch(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.295713&lon=9.002495",
      {
        headers: {
          Origin: "bjarkum.no github.com/sondrebjarkum",
        },
      }
    );

    if (!body) {
      console.log("error fetching");
      return new Response("error");
    }

    const yrApiResponse = await readStream<YrApiResponse>(body);

    const longTermForecast = request.url.includes("/langtid");

    const forecastDocument = Root(Table(yrApiResponse, longTermForecast));

    const responseBody = compressor(forecastDocument);

    return new Response(responseBody, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Content-Encoding": "gzip",
      },
    });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
