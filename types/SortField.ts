export enum SortField {
  ID = 'id',
  Name = 'name',
  Username = 'username',
  Email = 'email',
}

export type SortKey = keyof typeof SortField;
