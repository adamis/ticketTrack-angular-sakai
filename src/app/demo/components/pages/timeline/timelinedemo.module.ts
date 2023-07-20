import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineDemoRoutingModule } from './timelinedemo-routing.module';
import { TimelineDemoComponent } from './timelinedemo.component';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbModule,
        FormsModule,
        TimelineModule,
        ButtonModule,
        CardModule,
        InputMaskModule,
		InputNumberModule,
        InputTextModule,
        TimelineDemoRoutingModule
    ],
    declarations: [TimelineDemoComponent]
})
export class TimelineDemoModule { }
