// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PaxeerApexEngineAPI } from '../client';

export abstract class APIResource {
  protected _client: PaxeerApexEngineAPI;

  constructor(client: PaxeerApexEngineAPI) {
    this._client = client;
  }
}
