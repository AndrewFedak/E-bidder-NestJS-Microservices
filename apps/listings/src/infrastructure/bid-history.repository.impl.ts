﻿import { IBidHistoryRepository } from '../domain/models/listing-format/auctions/bid-history/ibid-history.repository';

import { Bid } from '../domain/models/listing-format/auctions/bid-history/bid';

export class BidHistoryRepository implements IBidHistoryRepository {
  constructor(private readonly _session: ISession) {}

  noOfBidsFor(autionId: string): number {
    const sql = `SELECT Count(*) FROM BidHistory Where AuctionId = '${autionId}'`;
    const query = this._session.CreateSQLQuery(sql);
    const result = query.UniqueResult();

    return Number(result);
  }

  add(bid: Bid): void {
    this._session.Save(bid);
  }
}