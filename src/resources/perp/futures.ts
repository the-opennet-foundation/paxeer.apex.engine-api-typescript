// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Futures extends APIResource {
  /**
   * Returns the most recent futures snapshot for each symbol including prices,
   * funding rates, and 24h stats
   */
  retrieveLatest(options?: RequestOptions): APIPromise<FutureRetrieveLatestResponse> {
    return this._client.get('/perp/futures/latest', options);
  }
}

export type FutureRetrieveLatestResponse =
  Array<FutureRetrieveLatestResponse.FutureRetrieveLatestResponseItem>;

export namespace FutureRetrieveLatestResponse {
  export interface FutureRetrieveLatestResponseItem {
    /**
     * Estimated funding rate
     */
    est_funding_rate?: number;

    /**
     * Current index price
     */
    index_price?: number;

    /**
     * Last settled funding rate
     */
    last_funding_rate?: number;

    /**
     * Current mark price
     */
    mark_price?: number;

    /**
     * Next funding timestamp in milliseconds
     */
    next_funding_time?: number;

    perp_address?: string;

    /**
     * Snapshot timestamp from Orderly in milliseconds
     */
    snapshot_ts_ms?: number | null;

    source?: string;

    /**
     * Sum of unitary funding
     */
    sum_unitary_funding?: number;

    symbol?: string;
  }
}

export declare namespace Futures {
  export { type FutureRetrieveLatestResponse as FutureRetrieveLatestResponse };
}
