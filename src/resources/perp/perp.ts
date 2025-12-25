// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FuturesAPI from './futures';
import { FutureRetrieveLatestResponse, Futures } from './futures';
import * as MarketsAPI from './markets';
import {
  MarketAnalytics,
  MarketRetrieveAllAnalyticsResponse,
  MarketRetrieveHottestResponse,
  MarketRetrieveTopGainersResponse,
  MarketRetrieveTopLosersResponse,
  MarketSummaryWithPrice,
  Markets,
} from './markets';
import * as TvAPI from './tv';
import {
  Tv,
  TvRetrieveConfigResponse,
  TvRetrieveHistoryParams,
  TvRetrieveHistoryResponse,
  TvRetrieveSymbolInfoParams,
  TvRetrieveSymbolInfoResponse,
  TvRetrieveSymbolsParams,
  TvRetrieveSymbolsResponse,
  TvRetrieveTimeResponse,
  TvSearchSymbolsParams,
  TvSearchSymbolsResponse,
} from './tv';
import * as UserAPI from './user';
import {
  User,
  UserRetrieveHistoryParams,
  UserRetrieveHistoryResponse,
  UserRetrievePositionsResponse,
  UserRetrieveStatsResponse,
} from './user';
import * as WsAPI from './ws/ws';
import { Ws } from './ws/ws';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Perp extends APIResource {
  futures: FuturesAPI.Futures = new FuturesAPI.Futures(this._client);
  ws: WsAPI.Ws = new WsAPI.Ws(this._client);
  user: UserAPI.User = new UserAPI.User(this._client);
  tv: TvAPI.Tv = new TvAPI.Tv(this._client);
  markets: MarketsAPI.Markets = new MarketsAPI.Markets(this._client);

  /**
   * Returns OHLCV candlestick data for a specific symbol
   */
  retrieveKlines(
    query: PerpRetrieveKlinesParams,
    options?: RequestOptions,
  ): APIPromise<PerpRetrieveKlinesResponse> {
    return this._client.get('/perp/klines', { query, ...options });
  }

  /**
   * Returns the top traders ranked by total PnL
   */
  retrieveLeaderboard(
    query: PerpRetrieveLeaderboardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PerpRetrieveLeaderboardResponse> {
    return this._client.get('/perp/leaderboard', { query, ...options });
  }
}

export type PerpRetrieveKlinesResponse = Array<PerpRetrieveKlinesResponse.PerpRetrieveKlinesResponseItem>;

export namespace PerpRetrieveKlinesResponse {
  export interface PerpRetrieveKlinesResponseItem {
    /**
     * Close price
     */
    close?: number;

    /**
     * Candle close time in milliseconds
     */
    close_time_ms?: number;

    /**
     * High price
     */
    high?: number;

    interval?: string;

    /**
     * Low price
     */
    low?: number;

    /**
     * Open price
     */
    open?: number;

    /**
     * Candle open time in milliseconds
     */
    open_time_ms?: number;

    /**
     * Quote asset volume
     */
    quote_volume?: number | null;

    source?: string;

    symbol?: string;

    /**
     * Number of trades
     */
    trades?: number | null;

    /**
     * Trading volume
     */
    volume?: number | null;
  }
}

export type PerpRetrieveLeaderboardResponse =
  Array<PerpRetrieveLeaderboardResponse.PerpRetrieveLeaderboardResponseItem>;

export namespace PerpRetrieveLeaderboardResponse {
  export interface PerpRetrieveLeaderboardResponseItem {
    /**
     * Leaderboard rank
     */
    rank?: number;

    /**
     * Total profit/loss
     */
    total_pnl?: string;

    /**
     * Total number of trades
     */
    total_trades?: number;

    /**
     * Total trading volume in USD
     */
    total_volume_usd?: string;

    /**
     * Trader wallet address
     */
    user_address?: string;

    /**
     * Win rate as percentage
     */
    win_rate?: string | null;
  }
}

export interface PerpRetrieveKlinesParams {
  /**
   * Trading pair symbol (e.g., PERP_BTC_USDC)
   */
  symbol: string;

  /**
   * End timestamp in milliseconds
   */
  end_ts_ms?: number;

  /**
   * Maximum number of candles to return (1-1000, default 500)
   */
  limit?: number;

  /**
   * Start timestamp in milliseconds
   */
  start_ts_ms?: number;
}

export interface PerpRetrieveLeaderboardParams {
  /**
   * Maximum number of entries to return (1-500, default 100)
   */
  limit?: number;
}

Perp.Futures = Futures;
Perp.Ws = Ws;
Perp.User = User;
Perp.Tv = Tv;
Perp.Markets = Markets;

export declare namespace Perp {
  export {
    type PerpRetrieveKlinesResponse as PerpRetrieveKlinesResponse,
    type PerpRetrieveLeaderboardResponse as PerpRetrieveLeaderboardResponse,
    type PerpRetrieveKlinesParams as PerpRetrieveKlinesParams,
    type PerpRetrieveLeaderboardParams as PerpRetrieveLeaderboardParams,
  };

  export { Futures as Futures, type FutureRetrieveLatestResponse as FutureRetrieveLatestResponse };

  export { Ws as Ws };

  export {
    User as User,
    type UserRetrieveHistoryResponse as UserRetrieveHistoryResponse,
    type UserRetrievePositionsResponse as UserRetrievePositionsResponse,
    type UserRetrieveStatsResponse as UserRetrieveStatsResponse,
    type UserRetrieveHistoryParams as UserRetrieveHistoryParams,
  };

  export {
    Tv as Tv,
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

  export {
    Markets as Markets,
    type MarketAnalytics as MarketAnalytics,
    type MarketSummaryWithPrice as MarketSummaryWithPrice,
    type MarketRetrieveAllAnalyticsResponse as MarketRetrieveAllAnalyticsResponse,
    type MarketRetrieveHottestResponse as MarketRetrieveHottestResponse,
    type MarketRetrieveTopGainersResponse as MarketRetrieveTopGainersResponse,
    type MarketRetrieveTopLosersResponse as MarketRetrieveTopLosersResponse,
  };
}
