import { AvilableBooks } from './../constants/avilable_books';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAvilableBooks should return value from observable', (done: DoneFn) => {
    service.getAvilableBooks().subscribe((value) => {
      expect(value).toBe(AvilableBooks);
      done();
    });
  });

  it('#getSelectedBooks should return value from observable', (done: DoneFn) => {
    service.getSelectedBooks().subscribe((value) => {
      expect(value).toEqual([]);
      done();
    });
  });

  it('#getMyBooks should return value from observable', (done: DoneFn) => {
    service.getMyBooks().subscribe((value) => {
      expect(value).toEqual([]);
      done();
    });
  });

  it('#addBook should add book to selectedBooks', () => {
    const book = AvilableBooks[0];
    service.addBook(book);
    service.getSelectedBooks().subscribe((value) => {
      expect(value).toEqual([book]);
    });
  });

  it('#removeBook should remove book from selectedBooks', () => {
    const book = AvilableBooks[0];
    service.addBook(book);
    service.removeBook(book);
    service.getSelectedBooks().subscribe((value) => {
      expect(value).toEqual([]);
    });
  });
});
