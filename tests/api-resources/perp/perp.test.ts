// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerApexEngineAPI from 'paxeer.apex.engine-api';

const client = new PaxeerApexEngineAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource perp', () => {
  // Prism tests are disabled
  test.skip('retrieveKlines: only required params', async () => {
    const responsePromise = client.perp.retrieveKlines({ symbol: 'symbol' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveKlines: required and optional params', async () => {
    const response = await client.perp.retrieveKlines({
      symbol: 'symbol',
      end_ts_ms: 0,
      limit: 1,
      start_ts_ms: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveLeaderboard', async () => {
    const responsePromise = client.perp.retrieveLeaderboard();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveLeaderboard: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.perp.retrieveLeaderboard({ limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerApexEngineAPI.NotFoundError);
  });
});
