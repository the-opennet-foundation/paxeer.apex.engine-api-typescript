// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Markets extends APIResource {
  /**
   * Returns a list of all active perpetual markets with their symbols and addresses
   */
  list(options?: RequestOptions): APIPromise<MarketListResponse> {
    return this._client.get('/markets', options);
  }
}

export type MarketListResponse = Array<MarketListResponse.MarketListResponseItem>;

export namespace MarketListResponse {
  export interface MarketListResponseItem {
    /**
     * Perpetual contract address
     */
    perp_address?: string;

    source?: string;

    /**
     * Trading pair symbol
     */
    symbol?: string;
  }
}

export declare namespace Markets {
  export { type MarketListResponse as MarketListResponse };
}
