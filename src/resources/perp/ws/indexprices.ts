// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Indexprices extends APIResource {
  /**
   * Returns the most recent index prices from WebSocket stream for all symbols
   */
  retrieveLatest(options?: RequestOptions): APIPromise<IndexpriceRetrieveLatestResponse> {
    return this._client.get('/perp/ws/indexprices/latest', options);
  }
}

export type IndexpriceRetrieveLatestResponse =
  Array<IndexpriceRetrieveLatestResponse.IndexpriceRetrieveLatestResponseItem>;

export namespace IndexpriceRetrieveLatestResponse {
  export interface IndexpriceRetrieveLatestResponseItem {
    /**
     * Index price
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

export declare namespace Indexprices {
  export { type IndexpriceRetrieveLatestResponse as IndexpriceRetrieveLatestResponse };
}
