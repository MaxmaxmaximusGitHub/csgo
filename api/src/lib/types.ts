export type User = {
  id: String
  steam_id: String
  steam_profile: String
  nickname: String
  avatar: String
  lang: String
  role: String
}



export interface UserInput {
  steam_id: String
  steam_profile: String
  nickname: String
  avatar: String
  lang: String
  role: String
}

