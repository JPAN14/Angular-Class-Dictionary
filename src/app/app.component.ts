import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  classList: any;
  classListKeys: string[];
  searchText: string;
  searchResult: string;

  constructor(private http: HttpClient) {
    // Looks like there is an issue with the HttpClient when parsing JSON
    // https://github.com/angular/angular/issues/18680#issuecomment-330425866
    // For now, I added a responseType of 'text'
    http.get('./assets/class-email-dictionary.json', { responseType: 'text' })
      .subscribe(data => {
        this.classList = JSON.parse(data);
        this.classListKeys = Object.keys(this.classList);
      }
    );
  }

  search() {
    let email = this.classList[this.searchText];
    let errorMessage = 'NO MATCH NAME. PLEASE TRY AGAIN';

    if (email) {
      this.searchResult = email;
    } else {
      this.searchResult = errorMessage;
    }
  }
}
