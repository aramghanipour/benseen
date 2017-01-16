import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Author } from '../../models/author';
import 'rxjs/add/operator/map'

@Component({
    selector: 'counter',
    template: require('./counter.component.html')
})
export class CounterComponent implements OnInit{
    authors: Author[] = [];

    ngOnInit() {
        console.log("hello");
    }

    constructor(private http: Http) { }

    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }


    btnClickedEvent() {
        var prodUrl = 'http://localhost/bookfinderapi/api/authors/getall';

        this.http.get(prodUrl)
            .map(res => res.json())
            .map((authors: Array<any>) => {
                let result: Array<Author> = [];
                if (authors) {
                    authors.forEach(data => {
                        result.push(data);
                    });
                }
                return result;
            }).subscribe(
                data => {
                    this.authors = data;

                    console.log(this.authors);
                });
    }
}
