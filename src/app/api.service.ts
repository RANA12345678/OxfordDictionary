import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // Service to get data
  getWords(word: string) {
    const _headers = new HttpHeaders();
    const headers: HttpHeaders = _headers
      .append('Accept', 'application/json')
      .append('app_id', '65dd1d20')
      .append('app_key', '277e99f53db7098f6374f000650952a4');
    return this.http.get(`/api/search/en?q=${word}&prefix=false&limit=10`, {
      headers
    });
  }
  // Service to get full data
  getDefinition(word: string) {
    const _headers = new HttpHeaders();
    const headers: HttpHeaders = _headers
      .append('Accept', 'application/json')
      .append('app_id', '65dd1d20')
      .append('app_key', '277e99f53db7098f6374f000650952a4');
    return this.http.get(`/api/entries/en/${word}`, { headers });
  }
  // Service to get synonyms and antonyms
  getSynAnt(word: string) {
    const _headers = new HttpHeaders();
    const headers: HttpHeaders = _headers
      .append('Accept', 'application/json')
      .append('app_id', '65dd1d20')
      .append('app_key', '277e99f53db7098f6374f000650952a4');
    return this.http.get(`/api/entries/en/${word}/synonyms;antonyms`, {
      headers
    });
  }
}
