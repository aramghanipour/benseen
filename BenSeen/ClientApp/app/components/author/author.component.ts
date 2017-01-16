import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'author',
    template: require('./author.component.html')
})
export class AuthorComponent {
    public authors: Author[];

    constructor(http: Http) {
        http.get('http://localhost/bookfinderapi/api/authors/getall').subscribe(result => {
            this.authors = result.json();
        });
    }
}

interface Author {
    authorID: number;
    firstname: string;
    lastname: string;
    country:string;
}
