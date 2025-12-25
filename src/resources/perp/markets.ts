// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Markets extends APIResource {
  /**
   * Returns analytics for all perpetual markets sorted by 24h volume
   */
  retrieveAllAnalytics(options?: RequestOptions): APIPromise<MarketRetrieveAllAnalyticsResponse> {
    return this._client.get('/perp/markets/analytics', options);
  }

  /**
   * Returns detailed analytics for a specific perpetual market
   */
  retrieveAnalytics(address: string, options?: RequestOptions): APIPromise<MarketAnalytics> {
    return this._client.get(path`/perp/market/${address}/analytics`, options);
  }

  /**
   * Returns markets with the highest trading volume in the last 24 hours
   */
  retrieveHottest(options?: RequestOptions): APIPromise<MarketRetrieveHottestResponse> {
    return this._client.get('/perp/markets/hottest', options);
  }

  /**
   * Returns markets with the highest positive price change in the last 24 hours
   */
  retrieveTopGainers(options?: RequestOptions): APIPromise<MarketRetrieveTopGainersResponse> {
    return this._client.get('/perp/markets/top-gainers', options);
  }

  /**
   * Returns markets with the highest negative price change in the last 24 hours
   */
  retrieveTopLosers(options?: RequestOptions): APIPromise<MarketRetrieveTopLosersResponse> {
    return this._client.get('/perp/markets/top-losers', options);
  }
}

export interface MarketAnalytics {
  /**
   * Number of active positions
   */
  active_positions?: number;

  /**
   * 24h high price
   */
  high_24h?: string | null;

  /**
   * Last traded price
   */
  last_price?: string | null;

  /**
   * Last trade timestamp
   */
  last_trade_timestamp?: number | null;

  /**
   * Long side volume in USD
   */
  long_volume_usd?: string;

  /**
   * 24h low price
   */
  low_24h?: string | null;

  /**
   * Open interest on long side
   */
  open_interest_long?: string;

  /**
   * Open interest on short side
   */
  open_interest_short?: string;

  /**
   * Perpetual contract address
   */
  perp_address?: string;

  /**
   * 24h price change percentage
   */
  price_change_24h_percentage?: string | null;

  /**
   * Short side volume in USD
   */
  short_volume_usd?: string;

  /**
   * Trading pair symbol
   */
  symbol?: string | null;

  /**
   * Total number of trades
   */
  total_trades?: number;

  /**
   * Total trading volume in USD
   */
  total_volume_usd?: string;

  /**
   * Number of trades in last 24h
   */
  trades_24h?: number;

  /**
   * Number of unique traders
   */
  unique_traders?: number;

  /**
   * 24h trading volume
   */
  volume_24h?: string;
}

export interface MarketSummaryWithPrice {
  /**
   * Last traded price
   */
  last_price?: string | null;

  /**
   * Perpetual contract address
   */
  perp_address?: string;

  /**
   * 24h price change percentage
   */
  price_change_24h_percentage?: string | null;

  /**
   * Trading pair symbol
   */
  symbol?: string | null;

  /**
   * Number of trades in last 24h
   */
  trades_24h?: number;

  /**
   * 24h trading volume
   */
  volume_24h?: string;
}

export type MarketRetrieveAllAnalyticsResponse = Array<MarketAnalytics>;

export type MarketRetrieveHottestResponse = Array<MarketSummaryWithPrice>;

export type MarketRetrieveTopGainersResponse = Array<MarketSummaryWithPrice>;

export type MarketRetrieveTopLosersResponse = Array<MarketSummaryWithPrice>;

export declare namespace Markets {
  export {
    type MarketAnalytics as MarketAnalytics,
    type MarketSummaryWithPrice as MarketSummaryWithPrice,
    type MarketRetrieveAllAnalyticsResponse as MarketRetrieveAllAnalyticsResponse,
    type MarketRetrieveHottestResponse as MarketRetrieveHottestResponse,
    type MarketRetrieveTopGainersResponse as MarketRetrieveTopGainersResponse,
    type MarketRetrieveTopLosersResponse as MarketRetrieveTopLosersResponse,
  };
}
