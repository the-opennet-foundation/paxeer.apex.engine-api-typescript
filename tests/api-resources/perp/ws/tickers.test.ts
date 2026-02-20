// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerApexEngineAPI from '@paxeer-network/apex-futures-engine-api';

const client = new PaxeerApexEngineAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tickers', () => {
  // Mock server tests are disabled
  test.skip('retrieveLatest', async () => {
    const responsePromise = client.perp.ws.tickers.retrieveLatest();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
