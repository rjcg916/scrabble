import { Injectable, Inject, InjectionToken} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

class WordFrequency {
  word : string;
  frequency : Object
}
 class WordDefinitions {
  word : string;
  definitions : object[];
 }

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestLexicon {
  constructor(private http: HttpClient,
              @Inject(REST_URL) private url : string) {}

isWordValid(word : string)  {
//    let result : WordFrequency;
return    this.http.get<WordFrequency>('${url}/${word}/frequency');
//    return result.word == word;
  }

  getDefinitions(word : string)   {
  //  let result : WordDefinitions;
   // this.http.get<WordDefinitions>('${url}/${word}/definitions').subscribe(data => result = data);
   // return result.definitions;
    //result = {"word" : "word", "definitions": [{"thing1": "1"}, {"thing2": "2"}]};
    //return result.definitions;
     return this.http.get<WordDefinitions>('${url}/${word}/definitions');

  }
}
