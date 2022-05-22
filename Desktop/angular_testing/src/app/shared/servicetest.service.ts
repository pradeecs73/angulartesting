import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicetestService {

  constructor(private HttpClient: HttpClient) { }

  getDetailsservicetest() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return resultPromise;
  }

  getallpostsservicetest() {
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getNameservicetest(){
      return 'pradeep';
  }

}
