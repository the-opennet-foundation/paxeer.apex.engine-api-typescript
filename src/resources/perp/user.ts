// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class User extends APIResource {
  /**
   * Returns trade history for a specific user address with pagination
   */
  retrieveHistory(
    address: string,
    query: UserRetrieveHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserRetrieveHistoryResponse> {
    return this._client.get(path`/perp/user/${address}/history`, { query, ...options });
  }

  /**
   * Returns all currently open positions for a specific user address
   */
  retrievePositions(address: string, options?: RequestOptions): APIPromise<UserRetrievePositionsResponse> {
    return this._client.get(path`/perp/user/${address}/positions`, options);
  }

  /**
   * Returns aggregated trading statistics for a specific user address
   */
  retrieveStats(address: string, options?: RequestOptions): APIPromise<UserRetrieveStatsResponse> {
    return this._client.get(path`/perp/user/${address}/stats`, options);
  }
}

export type UserRetrieveHistoryResponse = Array<UserRetrieveHistoryResponse.UserRetrieveHistoryResponseItem>;

export namespace UserRetrieveHistoryResponse {
  export interface UserRetrieveHistoryResponseItem {
    /**
     * Block number
     */
    block_number?: number;

    /**
     * Collateral token address
     */
    collateral_token?: string;

    /**
     * Trade event type (e.g., PositionOpened, PositionClosed)
     */
    event_type?: string;

    /**
     * True if long, false if short
     */
    is_long?: boolean;

    /**
     * Perpetual contract address
     */
    perp_address?: string;

    /**
     * Trading pair symbol
     */
    perp_symbol?: string | null;

    /**
     * Realized PnL (for closing trades)
     */
    pnl?: string | null;

    /**
     * Execution price
     */
    price?: string;

    /**
     * Trade size
     */
    size?: string;

    /**
     * Trade timestamp
     */
    timestamp?: number;

    /**
     * Transaction hash
     */
    tx_hash?: string;
  }
}

export type UserRetrievePositionsResponse =
  Array<UserRetrievePositionsResponse.UserRetrievePositionsResponseItem>;

export namespace UserRetrievePositionsResponse {
  export interface UserRetrievePositionsResponseItem {
    /**
     * Average entry price
     */
    average_entry_price?: string;

    /**
     * Collateral token address
     */
    collateral_token?: string;

    /**
     * Current mark price
     */
    current_price?: string | null;

    /**
     * True if long position, false if short
     */
    is_long?: boolean;

    /**
     * Estimated liquidation price
     */
    liquidation_price?: string | null;

    /**
     * Margin amount
     */
    margin?: string;

    /**
     * Position open timestamp
     */
    open_timestamp?: number;

    /**
     * Perpetual contract address
     */
    perp_address?: string;

    /**
     * Trading pair symbol
     */
    perp_symbol?: string | null;

    /**
     * Position size (string to preserve precision)
     */
    size?: string;

    /**
     * Total cost basis
     */
    total_cost?: string;

    /**
     * Unrealized profit/loss
     */
    unrealized_pnl?: string | null;

    /**
     * Unrealized PnL as percentage
     */
    unrealized_pnl_percentage?: string | null;
  }
}

export interface UserRetrieveStatsResponse {
  /**
   * First trade timestamp
   */
  first_trade_timestamp?: number | null;

  /**
   * Most recent trade timestamp
   */
  last_trade_timestamp?: number | null;

  /**
   * Number of losing trades
   */
  losses?: number;

  /**
   * Number of currently open positions
   */
  open_positions_count?: number;

  /**
   * Total realized PnL
   */
  realized_pnl?: string;

  /**
   * Total margin locked in open positions
   */
  total_margin_locked?: string;

  /**
   * Total PnL (realized + unrealized)
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
   * Total unrealized PnL
   */
  unrealized_pnl?: string;

  /**
   * User wallet address
   */
  user_address?: string;

  /**
   * Win rate as percentage
   */
  win_rate?: string;

  /**
   * Number of winning trades
   */
  wins?: number;
}

export interface UserRetrieveHistoryParams {
  /**
   * Maximum number of trades to return (1-500, default 50)
   */
  limit?: number;

  /**
   * Number of trades to skip for pagination (default 0)
   */
  offset?: number;
}

export declare namespace User {
  export {
    type UserRetrieveHistoryResponse as UserRetrieveHistoryResponse,
    type UserRetrievePositionsResponse as UserRetrievePositionsResponse,
    type UserRetrieveStatsResponse as UserRetrieveStatsResponse,
    type UserRetrieveHistoryParams as UserRetrieveHistoryParams,
  };
}
