export interface Token {
  img: string;
  title: string;
  price: number;
}

export interface TokenFurhter extends Token {
  token_title: string;
  created_by: string;
  percentage: number;
}

export interface CreateToken {
  name: string;
  ticker: string;
  total_supply: number;
  comission: number;
  recieve: number;
}
