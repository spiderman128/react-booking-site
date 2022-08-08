// Export sort type
export enum Order {
  Asc = 'asc',
  Desc = 'desc',
}

export interface ISortBy {
  field: string;
  order: Order;
}
