export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: string;
}

export interface IBorrowBook {
  quantity: number;
  dueDate: Date;
}
