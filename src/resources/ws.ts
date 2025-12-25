// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Ws extends APIResource {
  /**
   * WebSocket endpoint that fans out real-time market data including:
   *
   * - markprices - Real-time mark prices
   * - indexprices - Real-time index prices
   * - tickers - Real-time 24h ticker data
   * - {symbol}@orderbookupdate - Orderbook updates per symbol
   */
  getMarketData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/ws/perp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
