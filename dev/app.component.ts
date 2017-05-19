import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h3 (click)="onSelect()" [class.clicked]="showDetail === true">{{contact.firstName}}{{contact.lastName}}</h3>
        <input [(ngModel)]="contact.firstName" type="text">
		<div *ngIf="showDetail === true">Phone Number:{{contact.phone}} <br>
		E-mail:{{contact.email}}
		</div>
    `,
	styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
public contact={firstName:"Avinash", lastName:"jeyasankar",
phone:"0137 1350 928",email:"avinash.jeyasankar@cesltd.com"};
public showDetail = false;
onSelect(){
this.showDetail=true;
}
}