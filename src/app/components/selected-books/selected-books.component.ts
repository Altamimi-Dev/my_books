import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selected-books',
  templateUrl: './selected-books.component.html',
  styleUrls: ['./selected-books.component.scss'],
})
export class SelectedBooksComponent implements OnInit {
  selectedBooks!: Observable<Book[]>;
  title = '';
  remove = faTrash;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.selectedBooks = this.bookService.getSelectedBooks();
  }

  onRemoveBook(book: Book) {
    this.bookService.removeBook(book);
  }

  onSaveList() {
    this.bookService.saveList(this.title);
    this.title = '';
  }
}
