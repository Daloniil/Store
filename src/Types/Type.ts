export type ItemType = {
  _id: number;
  eat: ReducerType;
  ves: number;
  size: number;
};

export type ReducerType = {
  id: number;
  photoURL: string;
  name: string;
  cost: number;
  structure: string;
  amount: number;
};

export type Item = {
  item: ReducerType[];
};
