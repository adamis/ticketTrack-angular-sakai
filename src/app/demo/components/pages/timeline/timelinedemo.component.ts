import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './timelinedemo.component.html',
    styleUrls: ['./timelinedemo.scss']
})
export class TimelineDemoComponent implements OnInit {

    events1: any[] = [];
    breadcrumbItems: MenuItem[] = [];

    ngOnInit() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({ label: 'Track' },{ label: 'Ticket' });


    }

    search(){
        console.log("teste");
        this.events1 = [
            { status: 'TESTE1', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B' }
        ];
    }

}
