// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerApexEngineAPI from '@paxeer-network/apex-futures-engine-api';

const client = new PaxeerApexEngineAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tv', () => {
  // Prism tests are disabled
  test.skip('retrieveConfig', async () => {
    const responsePromise = client.perp.tv.retrieveConfig();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveHistory: only required params', async () => {
    const responsePromise = client.perp.tv.retrieveHistory({ resolution: 'resolution', symbol: 'symbol' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveHistory: required and optional params', async () => {
    const response = await client.perp.tv.retrieveHistory({
      resolution: 'resolution',
      symbol: 'symbol',
      countback: 0,
      from: 0,
      to: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveSymbolInfo', async () => {
    const responsePromise = client.perp.tv.retrieveSymbolInfo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSymbolInfo: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.perp.tv.retrieveSymbolInfo({ group: 'group' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerApexEngineAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveSymbols', async () => {
    const responsePromise = client.perp.tv.retrieveSymbols();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSymbols: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.perp.tv.retrieveSymbols({ symbol: 'symbol' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerApexEngineAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveTime', async () => {
    const responsePromise = client.perp.tv.retrieveTime();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchSymbols', async () => {
    const responsePromise = client.perp.tv.searchSymbols();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchSymbols: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.perp.tv.searchSymbols(
        {
          exchange: 'exchange',
          limit: 0,
          query: 'query',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerApexEngineAPI.NotFoundError);
  });
});
