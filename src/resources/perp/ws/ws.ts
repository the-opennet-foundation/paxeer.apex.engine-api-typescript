// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IndexpricesAPI from './indexprices';
import { IndexpriceRetrieveLatestResponse, Indexprices } from './indexprices';
import * as MarkpricesAPI from './markprices';
import { MarkpriceRetrieveLatestResponse, Markprices } from './markprices';
import * as TickersAPI from './tickers';
import { TickerRetrieveLatestResponse, Tickers } from './tickers';

export class Ws extends APIResource {
  markprices: MarkpricesAPI.Markprices = new MarkpricesAPI.Markprices(this._client);
  indexprices: IndexpricesAPI.Indexprices = new IndexpricesAPI.Indexprices(this._client);
  tickers: TickersAPI.Tickers = new TickersAPI.Tickers(this._client);
}

Ws.Markprices = Markprices;
Ws.Indexprices = Indexprices;
Ws.Tickers = Tickers;

export declare namespace Ws {
  export {
    Markprices as Markprices,
    type MarkpriceRetrieveLatestResponse as MarkpriceRetrieveLatestResponse,
  };

  export {
    Indexprices as Indexprices,
    type IndexpriceRetrieveLatestResponse as IndexpriceRetrieveLatestResponse,
  };

  export { Tickers as Tickers, type TickerRetrieveLatestResponse as TickerRetrieveLatestResponse };
}
