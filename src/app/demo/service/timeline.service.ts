import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TimelineService {

    constructor(private http: HttpClient) { }

    header = new HttpHeaders({
        //Authorization: 'Basic ' + btoa('codiub:C0D1UB'),
        'Content-Type': 'application/json',
    });

    findTimelineByticket(ticket: String){
        return this.http.get<any>('http://localhost:8080/ticketTrack/ticket/'+ticket)
        .toPromise()
        ;
    }

}
