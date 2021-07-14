import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private HttpClient: HttpClient) {}

  getDetails() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return resultPromise;
  }

  getallposts() {
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

}
