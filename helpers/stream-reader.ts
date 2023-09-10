async function log(data: any) {
  const fileName = `YR_REPSONSE_LOG.json`;
  await Bun.write(fileName, JSON.stringify(data, null, 2));
}

async function readStream<TResponse>(body: ReadableStream): Promise<TResponse> {
  const reader = body.getReader();
  let result = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      log(JSON.parse(result));
      return JSON.parse(result);
    }

    if (typeof value === "string") {
      result += value;
    } else {
      result += new TextDecoder().decode(value);
    }
  }
}

export default readStream;
