import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
})
export class AllBooksComponent implements OnInit {
  avilableBooks!: Observable<Book[]>;
  add = faAdd;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.avilableBooks = this.bookService.getAvilableBooks();
  }

  onAddBook(book: Book) {
    this.bookService.addBook(book);
  }
}
