export class Book {
  public id: number;
  public title: string;
  public year: number;
  public author: string;

  constructor(id: number, title: string, year: number, author: string) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.author = author;
  }
}
