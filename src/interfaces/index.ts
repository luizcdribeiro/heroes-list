export interface Category {
  Id: number;
  Name: string;
}


export interface Hero {
  Id: number;
  Name: string;
  Active: boolean;
  Category: Category;
}

export interface HeroRequest {
  Name: string,
  CategoryId: number,
  Active: boolean
}