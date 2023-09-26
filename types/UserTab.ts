export enum UserTab {
  profile = 'Profile of user',
  posts = 'Posts of user',
  albums = 'Albums of user',
  todos = 'Todos of user'
}

export type UserTabKey = keyof typeof UserTab;
