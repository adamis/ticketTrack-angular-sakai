import { TimelineService } from './../../../service/timeline.service';
import { Component, OnInit } from '@angular/core';
import { Console, log, table } from 'console';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './timelinedemo.component.html',
    styleUrls: ['./timelinedemo.scss']
})
export class TimelineDemoComponent implements OnInit {
    [x: string]: any;

    events1: any[] = [];
    breadcrumbItems: MenuItem[] = [];

    constructor(private timelineService: TimelineService){}


    ngOnInit() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({ label: 'Track' },{ label: 'Ticket' });


    }

    search(ticket: String){
        console.log(ticket);

        this.timelineService.findTimelineByticket(ticket)
        .then((list) =>{
            console.table(list);
            this.events1 = list;
        })
        .catch((error) =>{
            console.log(error);
        })
        ;

        /*
        this.events1 = [
            { status: 'TESTE1', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B' }
        ];
        */
    }

}
