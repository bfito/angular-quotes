import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-chuck-norris-page',
  templateUrl: './chuck-norris-page.component.html',
  styleUrls: ['./chuck-norris-page.component.css'],
  providers: [JokesService]
})
export class ChuckNorrisPageComponent implements OnInit {

  currentJoke: string = '';

  constructor(private theService: JokesService) { }

  ngOnInit() {
    // This is to refresh site for random joke
    // this.theService.getRandom()
    //   .then((result) => {
        // We cannot guess the structure of result is, this is why we console.log the following:
      //   console.log('RANDOM AJAX');
      //   console.log(result);
      //   this.currentJoke = result.value.joke;
      // })

      // this is for getRandomJoke button
      this.getRandomJoke()
  }
  getRandomJoke() {
    this.theService.getRandom()
    .then((result) => {
      this.currentJoke = result.value.joke;
    })
    .catch((err) => {
      console.log('Random Joke Error');
      console.log(err);
      this.currentJoke = 'There was an error. Try again later.';

    });
  }
}
