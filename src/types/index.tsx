export type PayoutStatus = 'pending' | 'completed' | 'failed';

export type PayoutData = {
  dateAndTime: string;
  status: PayoutStatus;
  username: string;
  value: string;
};

export type PayoutMetadata = {
  limit: number;
  page: number;
  totalCount: number;
};

export type Payout = {
  data: PayoutData[];
  metadata: PayoutMetadata;
};

export type query = {
  page: number;
  limit: number;
};
