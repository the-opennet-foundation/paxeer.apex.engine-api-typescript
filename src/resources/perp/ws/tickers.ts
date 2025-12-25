// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Tickers extends APIResource {
  /**
   * Returns the most recent ticker data from WebSocket stream for all symbols
   */
  retrieveLatest(options?: RequestOptions): APIPromise<TickerRetrieveLatestResponse> {
    return this._client.get('/perp/ws/tickers/latest', options);
  }
}

export type TickerRetrieveLatestResponse =
  Array<TickerRetrieveLatestResponse.TickerRetrieveLatestResponseItem>;

export namespace TickerRetrieveLatestResponse {
  export interface TickerRetrieveLatestResponseItem {
    /**
     * 24h trading amount in quote currency
     */
    amount_24h?: number | null;

    /**
     * 24h high price
     */
    high_24h?: number | null;

    /**
     * Last traded price
     */
    last_price?: number | null;

    /**
     * 24h low price
     */
    low_24h?: number | null;

    /**
     * 24h open price
     */
    open_24h?: number | null;

    source?: string;

    symbol?: string;

    /**
     * Number of trades in last 24h
     */
    trades_24h?: number | null;

    /**
     * 24h trading volume
     */
    volume_24h?: number | null;

    /**
     * WebSocket timestamp in milliseconds
     */
    ws_ts_ms?: number | null;
  }
}

export declare namespace Tickers {
  export { type TickerRetrieveLatestResponse as TickerRetrieveLatestResponse };
}
