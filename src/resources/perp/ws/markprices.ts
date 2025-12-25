// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Markprices extends APIResource {
  /**
   * Returns the most recent mark prices from WebSocket stream for all symbols
   */
  retrieveLatest(options?: RequestOptions): APIPromise<MarkpriceRetrieveLatestResponse> {
    return this._client.get('/perp/ws/markprices/latest', options);
  }
}

export type MarkpriceRetrieveLatestResponse =
  Array<MarkpriceRetrieveLatestResponse.MarkpriceRetrieveLatestResponseItem>;

export namespace MarkpriceRetrieveLatestResponse {
  export interface MarkpriceRetrieveLatestResponseItem {
    perp_address?: string | null;

    /**
     * Mark price
     */
    price?: number;

    source?: string;

    symbol?: string;

    /**
     * WebSocket timestamp in milliseconds
     */
    ws_ts_ms?: number | null;
  }
}

export declare namespace Markprices {
  export { type MarkpriceRetrieveLatestResponse as MarkpriceRetrieveLatestResponse };
}
