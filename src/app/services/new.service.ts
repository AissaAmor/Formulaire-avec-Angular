import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class NewService {
  constructor(private http: HttpClient) { }
  testSer() {
    alert('Bonjour');
  }
  postDate() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  postDateID() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
  postDateByID(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}



