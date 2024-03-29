﻿import { Money } from '../../../domain/money/money';

export class BidPlaced {
  constructor(
    public auctionId: string,
    public bidderId: string,
    public amountBid: Money,
    public timeOfBid: Date,
  ) {}
}
