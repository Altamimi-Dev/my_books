import { Book } from './book.model';

export class MyBooks {
  public title: string;
  public books: Book[];

  constructor(books: Book[], title: string) {
    this.title = title;
    this.books = books;
  }
}
