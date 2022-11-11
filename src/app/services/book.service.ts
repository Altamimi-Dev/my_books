import { MyBooks } from './../models/my-books.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AvilableBooks } from '../constants/avilable_books';
import { Book } from '../models/book.model';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  avilableBooks: Book[] = AvilableBooks;
  selectedBooks: Book[] = [];
  myBooks: MyBooks[] = [];

  getAvilableBooks(): Observable<Book[]> {
    return of(this.avilableBooks);
  }

  getSelectedBooks(): Observable<Book[]> {
    return of(this.selectedBooks);
  }

  addBook(book: Book) {
    const index = this.avilableBooks.indexOf(book);

    if (this.selectedBooks.includes(book)) {
      return;
    } else {
      this.selectedBooks.push(book);
      this.avilableBooks.splice(index, 1);
    }
  }

  removeBook(book: Book) {
    const index = this.selectedBooks.indexOf(book);
    this.avilableBooks.push(book);
    this.selectedBooks.splice(index, 1);
  }

  saveList(title: string) {
    const books = [...this.selectedBooks];
    this.myBooks.push(new MyBooks(books, title));
    while (this.selectedBooks.length > 0) {
      this.selectedBooks.pop();
    }
  }

  getMyBooks(): Observable<MyBooks[]> {
    return of(this.myBooks);
  }

  removeBookFromMyBooks(myBooks: MyBooks, book: Book) {
    const myBindex = this.myBooks.indexOf(myBooks);
    const bindex = this.myBooks[myBindex].books.indexOf(book);
    this.avilableBooks.push(this.myBooks[myBindex].books[bindex]);
    this.myBooks[myBindex].books.splice(bindex, 1);
  }

  sortBooks(myBooks: MyBooks, book: Book, isUp: boolean) {
    const myBindex = this.myBooks.indexOf(myBooks);
    const bindex = this.myBooks[myBindex].books.indexOf(book);
    const oldIndex = bindex;

    if (isUp === true && bindex !== 0) {
      const newIndex = oldIndex - 1;
      this.swapElements(this.myBooks[myBindex].books, newIndex, oldIndex);
    } else if (
      isUp === false &&
      bindex + 1 < this.myBooks[myBindex].books.length
    ) {
      const newIndex = oldIndex + 1;
      this.swapElements(this.myBooks[myBindex].books, newIndex, oldIndex);
    }
  }

  swapElements(list: Book[], newIndex: number, oldIndex: number) {
    let temp = list[newIndex];
    list[newIndex] = list[oldIndex];
    list[oldIndex] = temp;
  }

  removeMyBooks(myBooks: MyBooks) {
    const myBindex = this.myBooks.indexOf(myBooks);
    this.myBooks[myBindex].books.forEach((book) => {
      this.avilableBooks.push(book);
    });
    this.myBooks.splice(myBindex, 1);
  }
}
