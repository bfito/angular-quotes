import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JokesService {

  constructor(private myHttp: Http) { }

  getRandom() {
    return this.myHttp.get('http://api.icndb.com/jokes/random')
      // Promise is an object that helps determine something....
      .toPromise()
      .then(result => result.json())

      // Observable method of dealing with "async code"
      // .map((res) => res.json());

      // Hardcoded joke
      // return 'Chuck Norris was bitten by a cobra and after five days of excruciating pain... the cobra died.'

  }
}
