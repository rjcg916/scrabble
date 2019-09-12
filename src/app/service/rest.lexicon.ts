import { Injectable, Inject, InjectionToken} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

class WordFrequency {
  word : string;
  frequency : Object
}

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestLexicon {
  constructor(private http: HttpClient,
              @Inject(REST_URL) private url : string) {}

  isWordValid(word : string) : boolean {
    let result : WordFrequency;
    this.http.get<WordFrequency>('${this.url}/${word}/frequency').subscribe(data => result = data);
    return result.word == word;
  }
}
