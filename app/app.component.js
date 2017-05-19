System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.contact = { firstName: "Avinash", lastName: "jeyasankar",
                        phone: "0137 1350 928", email: "avinash.jeyasankar@cesltd.com" };
                    this.showDetail = false;
                }
                AppComponent.prototype.onSelect = function () {
                    this.showDetail = true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h3 (click)=\"onSelect()\" [class.clicked]=\"showDetail === true\">{{contact.firstName}}{{contact.lastName}}</h3>\n        <input [(ngModel)]=\"contact.firstName\" type=\"text\">\n\t\t<div *ngIf=\"showDetail === true\">Phone Number:{{contact.phone}} <br>\n\t\tE-mail:{{contact.email}}\n\t\t</div>\n    ",
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDTyxZQUFPLEdBQUMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxZQUFZO3dCQUMxRCxLQUFLLEVBQUMsZUFBZSxFQUFDLEtBQUssRUFBQywrQkFBK0IsRUFBQyxDQUFDO29CQUN0RCxlQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUkxQixDQUFDO2dCQUhELCtCQUFRLEdBQVI7b0JBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7Z0JBakJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwwVEFNVDt3QkFDSixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDakMsQ0FBQzs7Z0NBQUE7Z0JBUUYsbUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHVDQU9DLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDMgKGNsaWNrKT1cIm9uU2VsZWN0KClcIiBbY2xhc3MuY2xpY2tlZF09XCJzaG93RGV0YWlsID09PSB0cnVlXCI+e3tjb250YWN0LmZpcnN0TmFtZX19e3tjb250YWN0Lmxhc3ROYW1lfX08L2gzPlxyXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImNvbnRhY3QuZmlyc3ROYW1lXCIgdHlwZT1cInRleHRcIj5cclxuXHRcdDxkaXYgKm5nSWY9XCJzaG93RGV0YWlsID09PSB0cnVlXCI+UGhvbmUgTnVtYmVyOnt7Y29udGFjdC5waG9uZX19IDxicj5cclxuXHRcdEUtbWFpbDp7e2NvbnRhY3QuZW1haWx9fVxyXG5cdFx0PC9kaXY+XHJcbiAgICBgLFxyXG5cdHN0eWxlVXJsczogW1wiLi4vc3JjL2Nzcy9hcHAuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5wdWJsaWMgY29udGFjdD17Zmlyc3ROYW1lOlwiQXZpbmFzaFwiLCBsYXN0TmFtZTpcImpleWFzYW5rYXJcIixcclxucGhvbmU6XCIwMTM3IDEzNTAgOTI4XCIsZW1haWw6XCJhdmluYXNoLmpleWFzYW5rYXJAY2VzbHRkLmNvbVwifTtcclxucHVibGljIHNob3dEZXRhaWwgPSBmYWxzZTtcclxub25TZWxlY3QoKXtcclxudGhpcy5zaG93RGV0YWlsPXRydWU7XHJcbn1cclxufSJdfQ==
