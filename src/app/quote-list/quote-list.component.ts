import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quotes: Array<any> =
  [
    {
      id: 1,
      text: 'The ones who are crazy enough to think that they can change the world are the ones who do.',
      author: '-John McAfee-'
    }, {
      id: 2,
      text: 'Software is like sex, it is better free.',
      author: '-Linus Torvald-'
    }, {
      id: 3,
      text: 'There are things known and things unknown and in between are the doors.',
      author: '-Jim Morrison-'
    }, {
      id: 4,
      text: 'You affect the world by what you browse.',
      author: '-Tim Berners-Lee-'
    }, {
      id: 5,
      text: 'An intellectual is a person who has discovered something more interesting than sex.',
      author: '-Aldous Huxley-'
    }
  ];

  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (quote) => quote.id !== id
    );
  }
}
