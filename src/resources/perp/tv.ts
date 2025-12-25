// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Tv extends APIResource {
  /**
   * Proxy endpoint for TradingView charting library - returns datafeed configuration
   */
  retrieveConfig(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/perp/tv/config', options);
  }

  /**
   * Proxy endpoint for TradingView charting library - returns OHLCV historical data
   */
  retrieveHistory(
    query: TvRetrieveHistoryParams,
    options?: RequestOptions,
  ): APIPromise<TvRetrieveHistoryResponse> {
    return this._client.get('/perp/tv/history', { query, ...options });
  }

  /**
   * Proxy endpoint for TradingView charting library - returns symbol information for
   * multiple symbols
   */
  retrieveSymbolInfo(
    query: TvRetrieveSymbolInfoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get('/perp/tv/symbol_info', { query, ...options });
  }

  /**
   * Proxy endpoint for TradingView charting library - returns symbol information
   */
  retrieveSymbols(
    query: TvRetrieveSymbolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get('/perp/tv/symbols', { query, ...options });
  }

  /**
   * Proxy endpoint for TradingView charting library - returns server time
   */
  retrieveTime(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/perp/tv/time', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Proxy endpoint for TradingView charting library - search for symbols
   */
  searchSymbols(
    query: TvSearchSymbolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TvSearchSymbolsResponse> {
    return this._client.get('/perp/tv/search', { query, ...options });
  }
}

export type TvRetrieveConfigResponse = unknown;

export interface TvRetrieveHistoryResponse {
  /**
   * Close prices
   */
  c?: Array<number>;

  /**
   * High prices
   */
  h?: Array<number>;

  /**
   * Low prices
   */
  l?: Array<number>;

  /**
   * Open prices
   */
  o?: Array<number>;

  /**
   * Status (ok, no_data, error)
   */
  s?: string;

  /**
   * Timestamps
   */
  t?: Array<number>;

  /**
   * Volume
   */
  v?: Array<number>;
}

export type TvRetrieveSymbolInfoResponse = unknown;

export type TvRetrieveSymbolsResponse = unknown;

export type TvRetrieveTimeResponse = string;

export type TvSearchSymbolsResponse = Array<unknown>;

export interface TvRetrieveHistoryParams {
  /**
   * Time resolution (e.g., 1, 5, 15, 60, D, W)
   */
  resolution: string;

  /**
   * Trading pair symbol
   */
  symbol: string;

  /**
   * Number of bars to return
   */
  countback?: number;

  /**
   * Start timestamp (Unix seconds)
   */
  from?: number;

  /**
   * End timestamp (Unix seconds)
   */
  to?: number;
}

export interface TvRetrieveSymbolInfoParams {
  /**
   * Symbol group
   */
  group?: string;
}

export interface TvRetrieveSymbolsParams {
  /**
   * Symbol to get information for
   */
  symbol?: string;
}

export interface TvSearchSymbolsParams {
  /**
   * Exchange filter
   */
  exchange?: string;

  /**
   * Maximum results
   */
  limit?: number;

  /**
   * Search query
   */
  query?: string;

  /**
   * Symbol type filter
   */
  type?: string;
}

export declare namespace Tv {
  export {
    type TvRetrieveConfigResponse as TvRetrieveConfigResponse,
    type TvRetrieveHistoryResponse as TvRetrieveHistoryResponse,
    type TvRetrieveSymbolInfoResponse as TvRetrieveSymbolInfoResponse,
    type TvRetrieveSymbolsResponse as TvRetrieveSymbolsResponse,
    type TvRetrieveTimeResponse as TvRetrieveTimeResponse,
    type TvSearchSymbolsResponse as TvSearchSymbolsResponse,
    type TvRetrieveHistoryParams as TvRetrieveHistoryParams,
    type TvRetrieveSymbolInfoParams as TvRetrieveSymbolInfoParams,
    type TvRetrieveSymbolsParams as TvRetrieveSymbolsParams,
    type TvSearchSymbolsParams as TvSearchSymbolsParams,
  };
}
