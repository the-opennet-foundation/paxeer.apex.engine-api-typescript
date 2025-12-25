# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Markets

Types:

- <code><a href="./src/resources/markets.ts">MarketListResponse</a></code>

Methods:

- <code title="get /markets">client.markets.<a href="./src/resources/markets.ts">list</a>() -> MarketListResponse</code>

# Perp

Types:

- <code><a href="./src/resources/perp/perp.ts">PerpRetrieveKlinesResponse</a></code>
- <code><a href="./src/resources/perp/perp.ts">PerpRetrieveLeaderboardResponse</a></code>

Methods:

- <code title="get /perp/klines">client.perp.<a href="./src/resources/perp/perp.ts">retrieveKlines</a>({ ...params }) -> PerpRetrieveKlinesResponse</code>
- <code title="get /perp/leaderboard">client.perp.<a href="./src/resources/perp/perp.ts">retrieveLeaderboard</a>({ ...params }) -> PerpRetrieveLeaderboardResponse</code>

## Futures

Types:

- <code><a href="./src/resources/perp/futures.ts">FutureRetrieveLatestResponse</a></code>

Methods:

- <code title="get /perp/futures/latest">client.perp.futures.<a href="./src/resources/perp/futures.ts">retrieveLatest</a>() -> FutureRetrieveLatestResponse</code>

## Ws

### Markprices

Types:

- <code><a href="./src/resources/perp/ws/markprices.ts">MarkpriceRetrieveLatestResponse</a></code>

Methods:

- <code title="get /perp/ws/markprices/latest">client.perp.ws.markprices.<a href="./src/resources/perp/ws/markprices.ts">retrieveLatest</a>() -> MarkpriceRetrieveLatestResponse</code>

### Indexprices

Types:

- <code><a href="./src/resources/perp/ws/indexprices.ts">IndexpriceRetrieveLatestResponse</a></code>

Methods:

- <code title="get /perp/ws/indexprices/latest">client.perp.ws.indexprices.<a href="./src/resources/perp/ws/indexprices.ts">retrieveLatest</a>() -> IndexpriceRetrieveLatestResponse</code>

### Tickers

Types:

- <code><a href="./src/resources/perp/ws/tickers.ts">TickerRetrieveLatestResponse</a></code>

Methods:

- <code title="get /perp/ws/tickers/latest">client.perp.ws.tickers.<a href="./src/resources/perp/ws/tickers.ts">retrieveLatest</a>() -> TickerRetrieveLatestResponse</code>

## User

Types:

- <code><a href="./src/resources/perp/user.ts">UserRetrieveHistoryResponse</a></code>
- <code><a href="./src/resources/perp/user.ts">UserRetrievePositionsResponse</a></code>
- <code><a href="./src/resources/perp/user.ts">UserRetrieveStatsResponse</a></code>

Methods:

- <code title="get /perp/user/{address}/history">client.perp.user.<a href="./src/resources/perp/user.ts">retrieveHistory</a>(address, { ...params }) -> UserRetrieveHistoryResponse</code>
- <code title="get /perp/user/{address}/positions">client.perp.user.<a href="./src/resources/perp/user.ts">retrievePositions</a>(address) -> UserRetrievePositionsResponse</code>
- <code title="get /perp/user/{address}/stats">client.perp.user.<a href="./src/resources/perp/user.ts">retrieveStats</a>(address) -> UserRetrieveStatsResponse</code>

## Tv

Types:

- <code><a href="./src/resources/perp/tv.ts">TvRetrieveConfigResponse</a></code>
- <code><a href="./src/resources/perp/tv.ts">TvRetrieveHistoryResponse</a></code>
- <code><a href="./src/resources/perp/tv.ts">TvRetrieveSymbolInfoResponse</a></code>
- <code><a href="./src/resources/perp/tv.ts">TvRetrieveSymbolsResponse</a></code>
- <code><a href="./src/resources/perp/tv.ts">TvRetrieveTimeResponse</a></code>
- <code><a href="./src/resources/perp/tv.ts">TvSearchSymbolsResponse</a></code>

Methods:

- <code title="get /perp/tv/config">client.perp.tv.<a href="./src/resources/perp/tv.ts">retrieveConfig</a>() -> unknown</code>
- <code title="get /perp/tv/history">client.perp.tv.<a href="./src/resources/perp/tv.ts">retrieveHistory</a>({ ...params }) -> TvRetrieveHistoryResponse</code>
- <code title="get /perp/tv/symbol_info">client.perp.tv.<a href="./src/resources/perp/tv.ts">retrieveSymbolInfo</a>({ ...params }) -> unknown</code>
- <code title="get /perp/tv/symbols">client.perp.tv.<a href="./src/resources/perp/tv.ts">retrieveSymbols</a>({ ...params }) -> unknown</code>
- <code title="get /perp/tv/time">client.perp.tv.<a href="./src/resources/perp/tv.ts">retrieveTime</a>() -> string</code>
- <code title="get /perp/tv/search">client.perp.tv.<a href="./src/resources/perp/tv.ts">searchSymbols</a>({ ...params }) -> TvSearchSymbolsResponse</code>

## Markets

Types:

- <code><a href="./src/resources/perp/markets.ts">MarketAnalytics</a></code>
- <code><a href="./src/resources/perp/markets.ts">MarketSummaryWithPrice</a></code>
- <code><a href="./src/resources/perp/markets.ts">MarketRetrieveAllAnalyticsResponse</a></code>
- <code><a href="./src/resources/perp/markets.ts">MarketRetrieveHottestResponse</a></code>
- <code><a href="./src/resources/perp/markets.ts">MarketRetrieveTopGainersResponse</a></code>
- <code><a href="./src/resources/perp/markets.ts">MarketRetrieveTopLosersResponse</a></code>

Methods:

- <code title="get /perp/markets/analytics">client.perp.markets.<a href="./src/resources/perp/markets.ts">retrieveAllAnalytics</a>() -> MarketRetrieveAllAnalyticsResponse</code>
- <code title="get /perp/market/{address}/analytics">client.perp.markets.<a href="./src/resources/perp/markets.ts">retrieveAnalytics</a>(address) -> MarketAnalytics</code>
- <code title="get /perp/markets/hottest">client.perp.markets.<a href="./src/resources/perp/markets.ts">retrieveHottest</a>() -> MarketRetrieveHottestResponse</code>
- <code title="get /perp/markets/top-gainers">client.perp.markets.<a href="./src/resources/perp/markets.ts">retrieveTopGainers</a>() -> MarketRetrieveTopGainersResponse</code>
- <code title="get /perp/markets/top-losers">client.perp.markets.<a href="./src/resources/perp/markets.ts">retrieveTopLosers</a>() -> MarketRetrieveTopLosersResponse</code>

# Ws

Methods:

- <code title="get /ws/perp">client.ws.<a href="./src/resources/ws.ts">getMarketData</a>() -> void</code>
