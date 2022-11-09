import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { MyBooks } from '../../models/my-books.model';
import { Component, OnInit } from '@angular/core';
import {
  faTrash,
  faArrowUp,
  faArrowDown,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss'],
})
export class MyBooksComponent implements OnInit {
  myBooks!: Observable<MyBooks[]>;
  trashIcon = faTrash;
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
  close = faClose;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.myBooks = this.bookService.getMyBooks();
  }

  removeBook(myBooks: MyBooks, book: Book) {
    this.bookService.removeBookFromMyBooks(myBooks, book);
  }

  sortMyBooks(myBooks: MyBooks, book: Book, isUp: boolean) {
    this.bookService.sortBooks(myBooks, book, isUp);
  }

  removeMyBooks(myBooks: MyBooks) {
    this.bookService.removeMyBooks(myBooks);
  }
}
