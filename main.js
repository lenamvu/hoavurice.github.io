(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">Title</a>\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact : true}\">\n        <a [routerLink]=\"['/']\">Trang chủ</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/dmhang']\">DM hàng</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/dmkh']\">DM khách hàng</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/hoadon']\">HÓA ĐƠN</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/giaonhan']\">GIAO NHẬN HÀNG</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a (click)=\"logout()\">{{ login? 'Login' : 'Logout' }}</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\" style=\"text-align: center\">HÒA VŨ RICE - 117 Nguyễn Đình Chiểu - Khóm 4 - TP.Châu Đốc - tỉnh An Giang (02963.867.749 - 0943.345.143)</h4>\n        </div>\n        <div class=\"panel-body\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'HOAVU';
        this.login = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('checkLogin') == '1') {
            this.login = true;
        }
        else {
            this.login = false;
        }
    };
    AppComponent.prototype.logout = function () {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            localStorage.removeItem('checkLogin');
            this.login = true;
            this.router.navigate(['']);
            //console.log(localStorage.getItem('user'));
        }
        else {
            this.login = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guards/auth.guard */ "./src/app/services/guards/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/trangchu/trangchu.component */ "./src/app/components/trangchu/trangchu.component.ts");
/* harmony import */ var _components_dmhang_dmhang_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dmhang/dmhang.component */ "./src/app/components/dmhang/dmhang.component.ts");
/* harmony import */ var _components_dmkh_dmkh_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dmkh/dmkh.component */ "./src/app/components/dmkh/dmkh.component.ts");
/* harmony import */ var _components_hoadon_hoadon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/hoadon/hoadon.component */ "./src/app/components/hoadon/hoadon.component.ts");
/* harmony import */ var _components_hoadon_chitiethd_chitiethd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/hoadon/chitiethd/chitiethd.component */ "./src/app/components/hoadon/chitiethd/chitiethd.component.ts");
/* harmony import */ var _components_dmkh_dmkh_list_dmkh_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dmkh/dmkh-list/dmkh-list.component */ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.ts");
/* harmony import */ var _components_dmkh_dmkh_detail_dmkh_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dmkh/dmkh-detail/dmkh-detail.component */ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.ts");
/* harmony import */ var _components_dmhang_dmhang_list_dmhang_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dmhang/dmhang-list/dmhang-list.component */ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.ts");
/* harmony import */ var _components_dmhang_dmhang_detail_dmhang_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dmhang/dmhang-detail/dmhang-detail.component */ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.ts");
/* harmony import */ var _components_dmhang_dmhang_add_dmhang_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dmhang/dmhang-add/dmhang-add.component */ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.ts");
/* harmony import */ var _components_dmhang_dmhang_edit_dmhang_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dmhang/dmhang-edit/dmhang-edit.component */ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.ts");
/* harmony import */ var _components_dmkh_dmkh_add_dmkh_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dmkh/dmkh-add/dmkh-add.component */ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.ts");
/* harmony import */ var _components_dmkh_dmkh_edit_dmkh_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dmkh/dmkh-edit/dmkh-edit.component */ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_hoadon_hoadons_hoadons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/hoadon/hoadons/hoadons.component */ "./src/app/components/hoadon/hoadons/hoadons.component.ts");
/* harmony import */ var _pipes_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/chitiethd.pipe */ "./src/app/pipes/chitiethd.pipe.ts");
/* harmony import */ var _components_giaonhan_giaohang_giaohang_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/giaonhan/giaohang/giaohang.component */ "./src/app/components/giaonhan/giaohang/giaohang.component.ts");
/* harmony import */ var _components_giaonhan_nhanhang_nhanhang_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/giaonhan/nhanhang/nhanhang.component */ "./src/app/components/giaonhan/nhanhang/nhanhang.component.ts");
/* harmony import */ var _pipes_show_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/show-chitiethd.pipe */ "./src/app/pipes/show-chitiethd.pipe.ts");
/* harmony import */ var _pipes_tenkh_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/tenkh.pipe */ "./src/app/pipes/tenkh.pipe.ts");
/* harmony import */ var _pipes_tenhang_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/tenhang.pipe */ "./src/app/pipes/tenhang.pipe.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import Router;

//import Service


//import HttpModule

//import ngModule
























var appRoutes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"]
    },
    {
        path: 'dmhang',
        component: _components_dmhang_dmhang_component__WEBPACK_IMPORTED_MODULE_9__["DmhangComponent"],
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _components_dmhang_dmhang_list_dmhang_list_component__WEBPACK_IMPORTED_MODULE_15__["DmhangListComponent"]
            },
            {
                path: ':id/edit',
                component: _components_dmhang_dmhang_edit_dmhang_edit_component__WEBPACK_IMPORTED_MODULE_18__["DmhangEditComponent"]
            },
            {
                path: 'add',
                component: _components_dmhang_dmhang_add_dmhang_add_component__WEBPACK_IMPORTED_MODULE_17__["DmhangAddComponent"]
            }
        ]
    },
    {
        path: 'dmkh',
        component: _components_dmkh_dmkh_component__WEBPACK_IMPORTED_MODULE_10__["DmkhComponent"],
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _components_dmkh_dmkh_list_dmkh_list_component__WEBPACK_IMPORTED_MODULE_13__["DmkhListComponent"]
            },
            {
                path: ':id/edit',
                component: _components_dmkh_dmkh_edit_dmkh_edit_component__WEBPACK_IMPORTED_MODULE_20__["DmkhEditComponent"]
            },
            {
                path: 'add',
                component: _components_dmkh_dmkh_add_dmkh_add_component__WEBPACK_IMPORTED_MODULE_19__["DmkhAddComponent"]
            }
        ]
    },
    {
        path: 'hoadon',
        component: _components_hoadon_hoadon_component__WEBPACK_IMPORTED_MODULE_11__["HoadonComponent"],
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _components_hoadon_hoadons_hoadons_component__WEBPACK_IMPORTED_MODULE_22__["HoadonsComponent"]
            },
            {
                path: 'add',
                component: _components_hoadon_chitiethd_chitiethd_component__WEBPACK_IMPORTED_MODULE_12__["ChitiethdComponent"]
            }
        ]
    },
    {
        path: 'giaonhan',
        component: _components_giaonhan_giaohang_giaohang_component__WEBPACK_IMPORTED_MODULE_24__["GiaohangComponent"],
        children: [
            {
                path: '',
                component: _components_giaonhan_giaohang_giaohang_component__WEBPACK_IMPORTED_MODULE_24__["GiaohangComponent"]
            },
            {
                path: 'add',
                component: _components_giaonhan_nhanhang_nhanhang_component__WEBPACK_IMPORTED_MODULE_25__["NhanhangComponent"]
            }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_8__["TrangchuComponent"],
                _components_dmhang_dmhang_component__WEBPACK_IMPORTED_MODULE_9__["DmhangComponent"],
                _components_dmkh_dmkh_component__WEBPACK_IMPORTED_MODULE_10__["DmkhComponent"],
                _components_hoadon_hoadon_component__WEBPACK_IMPORTED_MODULE_11__["HoadonComponent"],
                _components_hoadon_chitiethd_chitiethd_component__WEBPACK_IMPORTED_MODULE_12__["ChitiethdComponent"],
                _components_dmkh_dmkh_list_dmkh_list_component__WEBPACK_IMPORTED_MODULE_13__["DmkhListComponent"],
                _components_dmkh_dmkh_detail_dmkh_detail_component__WEBPACK_IMPORTED_MODULE_14__["DmkhDetailComponent"],
                _components_dmhang_dmhang_list_dmhang_list_component__WEBPACK_IMPORTED_MODULE_15__["DmhangListComponent"],
                _components_dmhang_dmhang_detail_dmhang_detail_component__WEBPACK_IMPORTED_MODULE_16__["DmhangDetailComponent"],
                _components_dmhang_dmhang_add_dmhang_add_component__WEBPACK_IMPORTED_MODULE_17__["DmhangAddComponent"],
                _components_dmhang_dmhang_edit_dmhang_edit_component__WEBPACK_IMPORTED_MODULE_18__["DmhangEditComponent"],
                _components_dmkh_dmkh_add_dmkh_add_component__WEBPACK_IMPORTED_MODULE_19__["DmkhAddComponent"],
                _components_dmkh_dmkh_edit_dmkh_edit_component__WEBPACK_IMPORTED_MODULE_20__["DmkhEditComponent"],
                _components_hoadon_hoadons_hoadons_component__WEBPACK_IMPORTED_MODULE_22__["HoadonsComponent"],
                _pipes_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_23__["ChitiethdPipe"],
                _components_giaonhan_giaohang_giaohang_component__WEBPACK_IMPORTED_MODULE_24__["GiaohangComponent"],
                _components_giaonhan_nhanhang_nhanhang_component__WEBPACK_IMPORTED_MODULE_25__["NhanhangComponent"],
                _pipes_show_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_26__["ShowChitiethdPipe"],
                _pipes_tenkh_pipe__WEBPACK_IMPORTED_MODULE_27__["TenkhPipe"],
                _pipes_tenhang_pipe__WEBPACK_IMPORTED_MODULE_28__["TenhangPipe"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_dmhang_service__WEBPACK_IMPORTED_MODULE_3__["DmhangService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_21__["DatePipe"],
                _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-add/dmhang-add.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-add/dmhang-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>THÊM MỚI MẶT HÀNG</legend>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.mahang\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tên hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tenhang\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Xuất xứ</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.xuatxu\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onAdd_dmhang()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-add/dmhang-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: DmhangAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangAddComponent", function() { return DmhangAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _models_dmhang_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/dmhang.model */ "./src/app/models/dmhang.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DmhangAddComponent = /** @class */ (function () {
    function DmhangAddComponent(dmhangservice, routerService) {
        this.dmhangservice = dmhangservice;
        this.routerService = routerService;
    }
    DmhangAddComponent.prototype.ngOnInit = function () {
        this.db = new _models_dmhang_model__WEBPACK_IMPORTED_MODULE_2__["dmhang"]();
    };
    DmhangAddComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DmhangAddComponent.prototype.onAdd_dmhang = function () {
        var _this = this;
        this.subscription = this.dmhangservice.add_dmhang(this.db).subscribe(function (data) {
            //console.log(data);
            if (data) {
                _this.routerService.navigate(['dmhang']);
            }
        });
    };
    DmhangAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang-add',
            template: __webpack_require__(/*! ./dmhang-add.component.html */ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.html"),
            styles: [__webpack_require__(/*! ./dmhang-add.component.css */ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DmhangAddComponent);
    return DmhangAddComponent;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: DmhangDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangDetailComponent", function() { return DmhangDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DmhangDetailComponent = /** @class */ (function () {
    function DmhangDetailComponent() {
    }
    DmhangDetailComponent.prototype.ngOnInit = function () {
    };
    DmhangDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang-detail',
            template: __webpack_require__(/*! ./dmhang-detail.component.html */ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.html"),
            styles: [__webpack_require__(/*! ./dmhang-detail.component.css */ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DmhangDetailComponent);
    return DmhangDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>CẬP NHẬT LẠI MẶT HÀNG</legend>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.mahang\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tên hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tenhang\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Xuất xứ</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.xuatxu\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onEdit_dmhang()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: DmhangEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangEditComponent", function() { return DmhangEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _models_dmhang_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/dmhang.model */ "./src/app/models/dmhang.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DmhangEditComponent = /** @class */ (function () {
    function DmhangEditComponent(dmhangservice, routerService, activeRouterService) {
        this.dmhangservice = dmhangservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
    }
    DmhangEditComponent.prototype.ngOnInit = function () {
        this.db = new _models_dmhang_model__WEBPACK_IMPORTED_MODULE_2__["dmhang"]();
        this.loadData();
    };
    DmhangEditComponent.prototype.loadData = function () {
        var _this = this;
        this.subscriptionParams = this.activeRouterService.params.subscribe(function (data) {
            var id = data['id'];
            _this.subscription = _this.dmhangservice.getOnedmhang(id).subscribe(function (dmhang) {
                _this.db = dmhang;
            });
        });
    };
    DmhangEditComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionParams) {
            this.subscriptionParams.unsubscribe();
        }
    };
    DmhangEditComponent.prototype.onEdit_dmhang = function () {
        var _this = this;
        this.subscription =
            this.dmhangservice.uppdate_dmhang(this.db).subscribe(function (data) {
                _this.routerService.navigateByUrl('dmhang');
                //console.log(data);
            });
    };
    DmhangEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang-edit',
            template: __webpack_require__(/*! ./dmhang-edit.component.html */ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.html"),
            styles: [__webpack_require__(/*! ./dmhang-edit.component.css */ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DmhangEditComponent);
    return DmhangEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-list/dmhang-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-list/dmhang-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">DANH SÁCH CÁC MẶT HÀNG</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/dmhang/add']\">Thêm</button>\n\t\t<label>{{ txtchon }}</label>\n\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"txtchon\">\n\t\t\t<option value=\"{{ item.mahang }}\" *ngFor=\"let item of db\">{{ item.tenhang }}</option>\n\t\t</select>\n\t\t<label>{{ txtchonkh }}</label>\n\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"txtchonkh\">\n\t\t\t<option value=\"{{ item.makh }}\" *ngFor=\"let item of db\">{{ item.tenkh }}</option>\n\t\t</select>\n\t\t<table class=\"table table-bordered table-hover\" [style.margin-top.px]=\"10\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t<th>Mã hàng</th>\n\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t<th>Xuất xứ</th>\n\t\t\t\t\t<th>Action</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of db\">\n\t\t\t\t\t<td>{{ item.id }}</td>\n\t\t\t\t\t<td>{{ item.mahang }}</td>\n\t\t\t\t\t<td>{{ item.tenhang }}</td>\n\t\t\t\t\t<td>{{ item.xuatxu }}</td>\n\t\t\t\t\t<td>\n\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\"\n\t\t\t[routerLink]=\"['/dmhang', item.id, 'edit']\"\n\t\t>Edit</button>\n\t\t/<button type=\"button\" class=\"btn btn-large btn-block btn-danger\"\n\t\t\t(click)=\"onDelete_dmhang(item.id)\"\n\t\t>Delete</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-list/dmhang-list.component.ts ***!
  \************************************************************************/
/*! exports provided: DmhangListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangListComponent", function() { return DmhangListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DmhangListComponent = /** @class */ (function () {
    function DmhangListComponent(dmhangservice) {
        this.dmhangservice = dmhangservice;
        this.db = [];
    }
    DmhangListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db = data;
        });
    };
    DmhangListComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DmhangListComponent.prototype.onDelete_dmhang = function (id) {
        var _this = this;
        this.subscription = this.dmhangservice.delete_dmhang(id).subscribe(function (data) {
            _this.updateDataAfterDelete(id);
        });
    };
    DmhangListComponent.prototype.updateDataAfterDelete = function (id) {
        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].id == id) {
                this.db.splice(i, 1);
                break;
            }
        }
    };
    DmhangListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang-list',
            template: __webpack_require__(/*! ./dmhang-list.component.html */ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.html"),
            styles: [__webpack_require__(/*! ./dmhang-list.component.css */ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"]])
    ], DmhangListComponent);
    return DmhangListComponent;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/dmhang/dmhang.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/dmhang/dmhang.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<div class=\"row\">\r\n\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t<div class=\"panel panel-danger\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h3 class=\"panel-title\">Panel title</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" [(ngModel)]=\"txtA\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" [(ngModel)]=\"txtB\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"{{ txtA * txtB }}\" [(ngModel)]=\"txtC\" >\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" [(ngModel)]=\"txtD\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" [(ngModel)]=\"txtE\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"{{ txtE * txtD }}\" [(ngModel)]=\"txtF\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"{{ txtC }}\" [(ngModel)]=\"txtG\">\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dmhang/dmhang.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dmhang/dmhang.component.ts ***!
  \*******************************************************/
/*! exports provided: DmhangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangComponent", function() { return DmhangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DmhangComponent = /** @class */ (function () {
    function DmhangComponent() {
    }
    DmhangComponent.prototype.ngOnInit = function () {
    };
    DmhangComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang',
            template: __webpack_require__(/*! ./dmhang.component.html */ "./src/app/components/dmhang/dmhang.component.html"),
            styles: [__webpack_require__(/*! ./dmhang.component.css */ "./src/app/components/dmhang/dmhang.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DmhangComponent);
    return DmhangComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-add/dmkh-add.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-add/dmkh-add.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>THÊM MỚI MẶT HÀNG</legend>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã khách hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.makh\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tên khách hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tenkh\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Địa chỉ</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.diachi\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Phone</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.phone\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">STK</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tk\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onAdd_dmkh()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-add/dmkh-add.component.ts ***!
  \****************************************************************/
/*! exports provided: DmkhAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhAddComponent", function() { return DmkhAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _models_dmkh_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/dmkh.model */ "./src/app/models/dmkh.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DmkhAddComponent = /** @class */ (function () {
    function DmkhAddComponent(dmkhservice, routerService) {
        this.dmkhservice = dmkhservice;
        this.routerService = routerService;
    }
    DmkhAddComponent.prototype.ngOnInit = function () {
        this.db = new _models_dmkh_model__WEBPACK_IMPORTED_MODULE_2__["dmkh"]();
    };
    DmkhAddComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DmkhAddComponent.prototype.onAdd_dmkh = function () {
        var _this = this;
        this.subscription = this.dmkhservice.add_dmkh(this.db).subscribe(function (data) {
            //console.log(data);
            if (data) {
                _this.routerService.navigate(['dmkh']);
            }
        });
    };
    DmkhAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh-add',
            template: __webpack_require__(/*! ./dmkh-add.component.html */ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.html"),
            styles: [__webpack_require__(/*! ./dmkh-add.component.css */ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__["DmkhService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DmkhAddComponent);
    return DmkhAddComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dmkh-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: DmkhDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhDetailComponent", function() { return DmkhDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DmkhDetailComponent = /** @class */ (function () {
    function DmkhDetailComponent() {
    }
    DmkhDetailComponent.prototype.ngOnInit = function () {
    };
    DmkhDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh-detail',
            template: __webpack_require__(/*! ./dmkh-detail.component.html */ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.html"),
            styles: [__webpack_require__(/*! ./dmkh-detail.component.css */ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DmkhDetailComponent);
    return DmkhDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>CẬP NHẬT LẠI KHÁCH HÀNG</legend>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã khách hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.makh\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tên khách hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tenkh\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Địa chỉ</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.diachi\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Phone</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.phone\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">STK</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tk\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onEdit_dmkh()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: DmkhEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhEditComponent", function() { return DmkhEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _models_dmkh_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/dmkh.model */ "./src/app/models/dmkh.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DmkhEditComponent = /** @class */ (function () {
    function DmkhEditComponent(dmhangservice, routerService, activeRouterService) {
        this.dmhangservice = dmhangservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
    }
    DmkhEditComponent.prototype.ngOnInit = function () {
        this.db = new _models_dmkh_model__WEBPACK_IMPORTED_MODULE_2__["dmkh"]();
        this.loadData();
    };
    DmkhEditComponent.prototype.loadData = function () {
        var _this = this;
        this.subscriptionParams = this.activeRouterService.params.subscribe(function (data) {
            var id = data['id'];
            _this.subscription = _this.dmhangservice.getOnedmkh(id).subscribe(function (dmkh) {
                _this.db = dmkh;
            });
        });
    };
    DmkhEditComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionParams) {
            this.subscriptionParams.unsubscribe();
        }
    };
    DmkhEditComponent.prototype.onEdit_dmkh = function () {
        var _this = this;
        this.subscription =
            this.dmhangservice.uppdate_dmkh(this.db).subscribe(function (data) {
                _this.routerService.navigateByUrl('dmkh');
                //console.log(data);
            });
    };
    DmkhEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh-edit',
            template: __webpack_require__(/*! ./dmkh-edit.component.html */ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.html"),
            styles: [__webpack_require__(/*! ./dmkh-edit.component.css */ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__["DmkhService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DmkhEditComponent);
    return DmkhEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-list/dmkh-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-list/dmkh-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">DANH SÁCH CÁC KHÁCH HÀNG</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-danger\"\n\t\t[routerLink]=\"['/dmkh/add']\"\n\t\t>THÊM</button>\n\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t<th>Mã khách hàng</th>\n\t\t\t\t\t<th>Tên khách hàng</th>\n\t\t\t\t\t<th>Địa chỉ</th>\n\t\t\t\t\t<th>Phone</th>\n\t\t\t\t\t<th>STK</th>\n\t\t\t\t\t<th>Action</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of db; index as i\">\n\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td>{{ item.makh }}</td>\n\t\t\t\t\t<td>{{ item.tenkh }}</td>\n\t\t\t\t\t<td>{{ item.diachi }}</td>\n\t\t\t\t\t<td>{{ item.phone }}</td>\n\t\t\t\t\t<td>{{ item.tk }}</td>\n\t\t\t\t\t<td>\n\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\" \n\t\t\t[routerLink]=\"['/dmkh', item.id, 'edit']\"\n\t\t>Edit</button>\n\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-danger\"\n\t\t\t(click)=\"onDelete_dmkh(item.id)\"\n\t\t>Delete</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-list/dmkh-list.component.ts ***!
  \******************************************************************/
/*! exports provided: DmkhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhListComponent", function() { return DmkhListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DmkhListComponent = /** @class */ (function () {
    function DmkhListComponent(dmkhservice) {
        this.dmkhservice = dmkhservice;
        this.db = [];
    }
    DmkhListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db = data;
        });
    };
    DmkhListComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DmkhListComponent.prototype.onDelete_dmkh = function (id) {
        var _this = this;
        console.log(id);
        this.subscription = this.dmkhservice.delete_dmkh(id).subscribe(function (data) {
            _this.updateDataAfterDelete(id);
        });
    };
    DmkhListComponent.prototype.updateDataAfterDelete = function (id) {
        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].id == id) {
                this.db.splice(i, 1);
                break;
            }
        }
    };
    DmkhListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh-list',
            template: __webpack_require__(/*! ./dmkh-list.component.html */ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.html"),
            styles: [__webpack_require__(/*! ./dmkh-list.component.css */ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__["DmkhService"]])
    ], DmkhListComponent);
    return DmkhListComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/dmkh/dmkh.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/dmkh/dmkh.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/dmkh/dmkh.component.ts ***!
  \***************************************************/
/*! exports provided: DmkhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhComponent", function() { return DmkhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DmkhComponent = /** @class */ (function () {
    function DmkhComponent() {
    }
    DmkhComponent.prototype.ngOnInit = function () {
    };
    DmkhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh',
            template: __webpack_require__(/*! ./dmkh.component.html */ "./src/app/components/dmkh/dmkh.component.html"),
            styles: [__webpack_require__(/*! ./dmkh.component.css */ "./src/app/components/dmkh/dmkh.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DmkhComponent);
    return DmkhComponent;
}());



/***/ }),

/***/ "./src/app/components/giaonhan/giaohang/giaohang.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/giaonhan/giaohang/giaohang.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/giaonhan/giaohang/giaohang.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/giaonhan/giaohang/giaohang.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t<div class=\"panel panel-danger\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\">Hóa đơn chưa giao</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Mã hóa đơn</th>\n\t\t\t\t\t\t\t<th>Mã KH</th>\n\t\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t\t<th>Thanh toán</th>\n\t\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t\t\t\t<th>Tình trạng</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t<div class=\"panel panel-success\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\">Hóa đơn đã giao</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\tPanel content\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/giaonhan/giaohang/giaohang.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/giaonhan/giaohang/giaohang.component.ts ***!
  \********************************************************************/
/*! exports provided: GiaohangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiaohangComponent", function() { return GiaohangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GiaohangComponent = /** @class */ (function () {
    function GiaohangComponent() {
    }
    GiaohangComponent.prototype.ngOnInit = function () {
    };
    GiaohangComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-giaohang',
            template: __webpack_require__(/*! ./giaohang.component.html */ "./src/app/components/giaonhan/giaohang/giaohang.component.html"),
            styles: [__webpack_require__(/*! ./giaohang.component.css */ "./src/app/components/giaonhan/giaohang/giaohang.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GiaohangComponent);
    return GiaohangComponent;
}());



/***/ }),

/***/ "./src/app/components/giaonhan/nhanhang/nhanhang.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/giaonhan/nhanhang/nhanhang.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/giaonhan/nhanhang/nhanhang.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/giaonhan/nhanhang/nhanhang.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nhanhang works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/giaonhan/nhanhang/nhanhang.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/giaonhan/nhanhang/nhanhang.component.ts ***!
  \********************************************************************/
/*! exports provided: NhanhangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanhangComponent", function() { return NhanhangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NhanhangComponent = /** @class */ (function () {
    function NhanhangComponent() {
    }
    NhanhangComponent.prototype.ngOnInit = function () {
    };
    NhanhangComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nhanhang',
            template: __webpack_require__(/*! ./nhanhang.component.html */ "./src/app/components/giaonhan/nhanhang/nhanhang.component.html"),
            styles: [__webpack_require__(/*! ./nhanhang.component.css */ "./src/app/components/giaonhan/nhanhang/nhanhang.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NhanhangComponent);
    return NhanhangComponent;
}());



/***/ }),

/***/ "./src/app/components/hoadon/chitiethd/chitiethd.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd/chitiethd.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hoadon/chitiethd/chitiethd.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd/chitiethd.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<label>Mã hóa đơn: {{ mahoadon }} </label>\n<!-- <input type=\"text\" name=\"\" size=\"20\" value=\"\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"mahoadon\" disabled=\"true\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\"> -->\n<hr/>\n\n<label>Tên Khách hàng:</label>\n<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"txt_makh\" (click)=\"checkHoadon()\">\n\t<option value=\"{{ item.makh }}\" *ngFor=\"let item of db_dmkh\">{{ item.tenkh }}</option>\n</select>\n<div class=\"row\">\n\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\t\t<div class=\"panel panel-danger\">\n\t\t\t<div class =\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" [routerLink]=\"['/hoadon/']\">CHI TIẾT ĐẶT HÀNG</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<!-- <tr *ngFor=\"let item of db_hoadon | chitiethd : mahoadon\">\n\t\t\t\t\t\t\t<td  colspan=\"6\">{{ item.mahoadon }}</td>\n\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t\t\t<th>Số lượng</th>\n\t\t\t\t\t\t\t<th>ĐVT</th>\n\t\t\t\t\t\t\t<th>Đơn giá</th>\n\t\t\t\t\t\t\t<th>Thành tiền</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<!-- Dong 1 -->\n\t\t\t\t\t\t<tr *ngFor=\"let item of db_chitiet\">\n\t\t\t\t\t\t\t<td>{{ item.id }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"item.mahang\">\n\t\t\t\t\t\t\t<option value=\"{{ item.mahang }}\" *ngFor=\"let item of db_dmhang\">{{ item.tenhang }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" value=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\"  [(ngModel)]=\"item.sl\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"valuechange(item)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"item.DVT\">\n\t\t\t\t\t\t\t<option value=\"B\" >Bao</option>\n\t\t\t\t\t\t\t<option value=\"Kg\" >Kg</option>\n\t\t\t\t\t\t\t<option value=\"T\" >Túi</option>\n\t\t\t\t\t\t\t<option value=\"Thieng\" >Thiêng</option>\n\t\t\t\t\t\t\t<option value=\"C\" >Cục</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"item.dg\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"valuechange(item)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" value=\"{{ item.sl * item.dg }}\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"item.tt\" disabled=\"true\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [required]=\"false\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Thành tiền: </label>{{ tongtt==0 ? '' : tongtt | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Tiền cũ: </label>{{ tiencu==0 ? '' : tiencu | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Tổng thành tiền: </label>{{ tongcong==0 ? '' : tongcong | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Thanh toán: </label>\n\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"thanhtoan\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"Valuethanhtoan()\">\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Còn lại: </label>\n\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"conlai\"\n\t\t\t\t\t\t\t\tdisabled=\"true\">\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\"><button type=\"button\" class=\"btn btn-large btn-block btn-primary\" (click)=\"onClick(db_chitiet)\">Click me!!!</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\" (click)=\"onCancel()\">Cancel</button>\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hoadon/chitiethd/chitiethd.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd/chitiethd.component.ts ***!
  \********************************************************************/
/*! exports provided: ChitiethdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitiethdComponent", function() { return ChitiethdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _services_chitiet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/chitiet.service */ "./src/app/services/chitiet.service.ts");
/* harmony import */ var _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/chitiethd.service */ "./src/app/services/chitiethd.service.ts");
/* harmony import */ var _services_hoadon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/hoadon.service */ "./src/app/services/hoadon.service.ts");
/* harmony import */ var _models_chitiethd_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../models/chitiethd.model */ "./src/app/models/chitiethd.model.ts");
/* harmony import */ var _models_hoadon_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../models/hoadon.model */ "./src/app/models/hoadon.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChitiethdComponent = /** @class */ (function () {
    function ChitiethdComponent(dmhangservice, dmkhservice, chitietservice, chitiethdservice, hoadonservice, routerService, activeRouterService, datePipe) {
        this.dmhangservice = dmhangservice;
        this.dmkhservice = dmkhservice;
        this.chitietservice = chitietservice;
        this.chitiethdservice = chitiethdservice;
        this.hoadonservice = hoadonservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
        this.datePipe = datePipe;
        this.db_dmhang = [];
        this.db_dmkh = [];
        this.db_chitiet = [];
        this.db_hoadon = [];
        this.today = Date.now();
        this.fixedTimezone = this.today;
        this.tongtt = 0;
        this.dem = 1;
        this.tiencu = 0;
        this.tongcong = 0;
    }
    ChitiethdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
        var date = new Date();
        this.mahoadon = this.datePipe.transform(date, "ddMMyyyy");
    };
    ChitiethdComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ChitiethdComponent.prototype.valuechange = function (chitiet) {
        this.tongcong = 0;
        if (chitiet.sl != null && chitiet.dg != null) {
            chitiet.tt = chitiet.sl * chitiet.dg;
        }
        else {
            chitiet.tt = null;
        }
        this.tongtt = 0;
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            this.tongtt = this.tongtt + (this.db_chitiet[i].tt * 1000);
        }
        if (this.tongtt > 0) {
            this.tongcong = this.tongtt + this.tiencu;
        }
        else {
            this.tongcong = 0;
        }
    };
    ChitiethdComponent.prototype.Valuethanhtoan = function () {
        this.conlai = this.tongtt - this.thanhtoan;
        this.tongcong = this.tongtt - this.thanhtoan + this.tiencu;
    };
    ChitiethdComponent.prototype.checkMahoadon = function () {
        this.mahoadon = this.mahoadon.slice(0, 8);
        this.dem = 1;
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].mahoadon.slice(0, 8) == this.mahoadon.slice(0, 8)) {
                this.dem++;
            }
        }
        if (this.dem < 10) {
            this.mahoadon = this.mahoadon.slice(0, 8) + '00' + this.dem;
        }
        else if (this.dem < 100) {
            this.mahoadon = this.mahoadon.slice(0, 8) + '0' + this.dem;
        }
        else {
            this.mahoadon = this.mahoadon.slice(0, 8) + this.dem;
        }
    };
    ChitiethdComponent.prototype.checkHoadon = function () {
        this.Update_Form();
        this.tiencu = 0;
        this.checkMahoadon();
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].kt == false && this.db_hoadon[i].makh == this.txt_makh) {
                this.tiencu = this.tiencu + this.db_hoadon[i].conlai;
            }
        }
    };
    ChitiethdComponent.prototype.onClick = function (csdl) {
        this.Add_hoadon(this.mahoadon, this.txt_makh, this.tongtt, this.thanhtoan, this.conlai);
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            if (this.db_chitiet[i].mahang != null) {
                this.onAdd_chitiethd(this.mahoadon, this.db_chitiet[i].mahang, this.db_chitiet[i].sl, this.db_chitiet[i].DVT, this.db_chitiet[i].dg, this.db_chitiet[i].tt);
            }
        }
        this.Clear_Form();
        this.Update_Form();
    };
    ChitiethdComponent.prototype.onAdd_chitiethd = function (mahoadon, mahang, sl, dvt, dg, tt) {
        var _this = this;
        this.new_chitiethd = new _models_chitiethd_model__WEBPACK_IMPORTED_MODULE_6__["chitiethd"]();
        this.new_chitiethd.mahoadon = mahoadon;
        this.new_chitiethd.mahang = mahang;
        this.new_chitiethd.sl = sl;
        this.new_chitiethd.DVT = dvt;
        this.new_chitiethd.dg = dg;
        this.new_chitiethd.tt = tt;
        this.subscription = this.chitiethdservice.add_chitiethd(this.new_chitiethd).subscribe(function (data) {
            if (data) {
                _this.routerService.navigate(['hoadon']);
            }
        });
    };
    ChitiethdComponent.prototype.Add_hoadon = function (mahoadon, makh, tonghoadon, tratien, conlai) {
        var _this = this;
        this.new_hoadon = new _models_hoadon_model__WEBPACK_IMPORTED_MODULE_7__["hoadon"]();
        this.new_hoadon.mahoadon = mahoadon;
        this.new_hoadon.makh = makh;
        this.new_hoadon.tonghoadon = tonghoadon;
        this.new_hoadon.tratien = tratien;
        this.new_hoadon.conlai = conlai;
        this.new_hoadon.tinhtrang = false;
        if (tonghoadon == tratien) {
            this.new_hoadon.kt = true;
        }
        else {
            this.new_hoadon.kt = false;
        }
        this.subscription = this.hoadonservice.add_hoadon(this.new_hoadon).subscribe(function (data) {
            if (data) {
                _this.routerService.navigate(['hoadon']);
            }
        });
    };
    ChitiethdComponent.prototype.Clear_Form = function () {
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            this.db_chitiet[i].hoadon = null;
            this.db_chitiet[i].mahang = null;
            this.db_chitiet[i].sl = null;
            this.db_chitiet[i].DVT = null;
            this.db_chitiet[i].dg = null;
            this.db_chitiet[i].tt = null;
        }
        this.tongtt = 0;
        this.tiencu = 0;
        this.txt_makh = '';
        this.conlai = 0;
        this.thanhtoan = 0;
        this.tongcong = 0;
        this.Update_Form();
        this.checkMahoadon();
    };
    ChitiethdComponent.prototype.onCancel = function () {
        this.Clear_Form();
    };
    ChitiethdComponent.prototype.Update_Form = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
    };
    ChitiethdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chitiethd',
            template: __webpack_require__(/*! ./chitiethd.component.html */ "./src/app/components/hoadon/chitiethd/chitiethd.component.html"),
            styles: [__webpack_require__(/*! ./chitiethd.component.css */ "./src/app/components/hoadon/chitiethd/chitiethd.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__["DmkhService"],
            _services_chitiet_service__WEBPACK_IMPORTED_MODULE_3__["ChitietService"],
            _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_4__["ChitiethdService"],
            _services_hoadon_service__WEBPACK_IMPORTED_MODULE_5__["HoadonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]])
    ], ChitiethdComponent);
    return ChitiethdComponent;
}());



/***/ }),

/***/ "./src/app/components/hoadon/hoadon.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/hoadon/hoadon.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hoadon/hoadon.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/hoadon/hoadon.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/hoadon/hoadon.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/hoadon/hoadon.component.ts ***!
  \*******************************************************/
/*! exports provided: HoadonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoadonComponent", function() { return HoadonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoadonComponent = /** @class */ (function () {
    function HoadonComponent() {
    }
    HoadonComponent.prototype.ngOnInit = function () {
    };
    HoadonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hoadon',
            template: __webpack_require__(/*! ./hoadon.component.html */ "./src/app/components/hoadon/hoadon.component.html"),
            styles: [__webpack_require__(/*! ./hoadon.component.css */ "./src/app/components/hoadon/hoadon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HoadonComponent);
    return HoadonComponent;
}());



/***/ }),

/***/ "./src/app/components/hoadon/hoadons/hoadons.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/hoadon/hoadons/hoadons.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hoadon/hoadons/hoadons.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/hoadon/hoadons/hoadons.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show_chua\">\n\t<input type=\"text\" name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"mahoadon\">\n<select name=\"\" id=\"input\" class=\"form-control\" required=\"required\" [(ngModel)]=\"makhs\">\n\t<option value=\"{{ item.makh }}\" *ngFor=\"let item of db_dmkh\">{{ item.tenkh }}</option>\n</select>\t\n</div>\n\n \n<div class=\"row\">\n\t<div *ngIf=\"show_chua\" class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t<div class=\"panel panel-danger\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" [routerLink]=\"['/hoadon/add']\">HÓA ĐƠN CHƯA GIAO</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Mã hóa đơn</th>\n\t\t\t\t\t\t\t<th>Mã KH</th>\n\t\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t\t<th>Thanh toán</th>\n\t\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t\t\t\t<th>Tình trạng</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr  *ngFor=\"let item of db_hoadon | chitiethd : mahoadon : kttt : makhs; let i = index\">\n\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t\t\t<td (click)=\"list_chitiethd(item.mahoadon,false,false,true)\">{{ item.mahoadon }}</td>\n\t\t\t\t\t\t<td *ngFor=\"let tam of db_dmkh | tenkh : item.makh\">{{ tam.tenkh }}</td>\n\t\t\t\t\t\t\t<td>{{ item.tonghoadon }}</td>\n\t\t\t\t\t\t\t<td>{{ item.tratien }}</td>\n\t\t\t\t\t\t\t<td>{{ item.conlai }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\"\n\t\t\t(click)=\"onEdit_hoadon(item.id)\"\n\t\t>{{ item.tinhtrang ? 'Giao' : 'Chưa' }}</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Dong nay la chinh giua -->\n<div *ngIf=\"show\" class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\" style=\"width: 470px\">\n\t\t<div  class=\"panel panel-primary\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" (click)=\"onPrint()\">Chi tiết hóa đơn số: {{ mahd }} - ngày: {{ ngay }}</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<label>Tên khách hàng: {{ tenkhs }}</label>\n\t\t\t\t<tr><td>\n\t\t\t\t\t\t\t<table (click)=\"list_back(true,true,false)\" class=\"table table-bordered table-hover\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr style=\"text-align: center\">\n\t\t\t\t\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>SL</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>DVT</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>ĐG</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>TT</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of db_chitiethd | showChitiethd : mahd; let myId = index\">\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">{{ myId + 1 }}</td>\n\t\t\t\t<td *ngFor=\"let tam of db_dmhang | tenhang : item.mahang\">{{ tam.tenhang }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">{{ item.sl }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">{{ item.DVT }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">{{ item.dg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: right;\">{{ item.tt }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Tổng toa:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold; text-align: right;\"><h5> {{ tongtt ==0 ? '' : tongtt | number :'3.0-3'}}</h5> </td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Tiền cũ:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold;color: green; text-align: right;\"><h5> \n\t\t\t\t\t\t\t\t\t\t\t{{ test_conlai ==0 ? '' : test_conlai + thanhtoan - tongtt  | number :'3.0-3'}}</h5> </td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Tổng cộng:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold;color: red; text-align: right;\"><h5>{{ test_tonghoadon ==0 ? '' : test_tonghoadon - test_tratien + thanhtoan | number :'3.0-3'}}</h5> </td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"thanhtoan\">\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Thanh toán:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold;color: blue; text-align: right;\"><h5>{{ thanhtoan==0 ? '' : thanhtoan | number :'3.0-3'}}</h5></td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"thanhtoan\">\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Còn lại:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold; text-align: right;\"><h5>{{ test_conlai==0 ? '' : test_conlai | number :'3.0-3' }}</h5></td></tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td></tr>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n<!-- Dong nay la ben phai -->\n\t<div *ngIf=\"show_giao\" class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t<div class=\"panel panel-success\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" [routerLink]=\"['/hoadon/add']\">HÓA ĐƠN ĐÃ GIAO</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Mã hóa đơn</th>\n\t\t\t\t\t\t\t<th>Mã KH</th>\n\t\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t\t<th>Thanh toán</th>\n\t\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t\t\t\t<th>Tình trạng</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr  *ngFor=\"let item of db_hoadon | chitiethd : mahoadon : !kttt : makhs; let i = index\">\n\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t\t\t<td (click)=\"list_chitiethd(item.mahoadon,false,false,true)\">{{ item.mahoadon }}</td>\n\t\t\t\t\t\t<td *ngFor=\"let tam of db_dmkh | tenkh : item.makh\">{{ tam.tenkh }}</td>\n\t\t\t\t\t\t\t<td>{{ item.tonghoadon }}</td>\n\t\t\t\t\t\t\t<td>{{ item.tratien }}</td>\n\t\t\t\t\t\t\t<td>{{ item.conlai }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\n\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-danger\"\n\t\t\t(click)=\"onEdit_hoadon(item.id)\"\n\t\t>{{ item.tinhtrang ? 'Giao' : 'Chưa' }}</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--  Dòng này thử -->\n\n<!-- \"id\": 8,\n      \"mahoadon\": \"03112018005\",\n      \"makh\": \"AP01\",\n      \"tonghoadon\": 5850000,\n      \"tratien\": 750000,\n      \"conlai\": 5100000,\n      \"kt\": false,\n      \"tinhtrang\": true -->\n"

/***/ }),

/***/ "./src/app/components/hoadon/hoadons/hoadons.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/hoadon/hoadons/hoadons.component.ts ***!
  \****************************************************************/
/*! exports provided: HoadonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoadonsComponent", function() { return HoadonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _services_chitiet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/chitiet.service */ "./src/app/services/chitiet.service.ts");
/* harmony import */ var _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/chitiethd.service */ "./src/app/services/chitiethd.service.ts");
/* harmony import */ var _services_hoadon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/hoadon.service */ "./src/app/services/hoadon.service.ts");
/* harmony import */ var _models_hoadon_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../models/hoadon.model */ "./src/app/models/hoadon.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HoadonsComponent = /** @class */ (function () {
    function HoadonsComponent(dmhangservice, dmkhservice, chitietservice, chitiethdservice, hoadonservice, routerService, activeRouterService, datePipe) {
        this.dmhangservice = dmhangservice;
        this.dmkhservice = dmkhservice;
        this.chitietservice = chitietservice;
        this.chitiethdservice = chitiethdservice;
        this.hoadonservice = hoadonservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
        this.datePipe = datePipe;
        this.db_dmhang = [];
        this.db_dmkh = [];
        this.db_chitiet = [];
        this.db_chitiethd = [];
        this.db_hoadon = [];
        this.db_hd = [];
        this.today = Date.now();
        this.fixedTimezone = this.today;
        this.tongtt = 0;
        this.dem = 1;
        this.tiencu = 0;
        this.tongcong = 0;
        this.show = false;
        this.show_chua = true;
        this.show_giao = true;
        this.kttt = false;
        this.test_tonghoadon = 0;
        this.test_tratien = 0;
        this.test_conlai = 0;
    }
    HoadonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.chitiethdservice.getAllchitiethd().subscribe(function (data) {
            _this.db_chitiethd = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
        var date = new Date();
        this.mahoadon = this.datePipe.transform(date, "ddMMyyyy");
    };
    HoadonsComponent.prototype.Clear_Form = function () {
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            this.db_chitiet[i].hoadon = null;
            this.db_chitiet[i].mahang = null;
            this.db_chitiet[i].sl = null;
            this.db_chitiet[i].DVT = null;
            this.db_chitiet[i].dg = null;
            this.db_chitiet[i].tt = null;
        }
        this.tongtt = 0;
        this.tiencu = 0;
        this.txt_makh = '';
        this.conlai = 0;
        this.thanhtoan = 0;
        this.tongcong = 0;
    };
    HoadonsComponent.prototype.Update_Form = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.chitiethdservice.getAllchitiethd().subscribe(function (data) {
            _this.db_chitiethd = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
    };
    HoadonsComponent.prototype.onEdit_hoadon = function (id) {
        var _this = this;
        this.db = new _models_hoadon_model__WEBPACK_IMPORTED_MODULE_6__["hoadon"]();
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].id == id) {
                this.db.id = this.db_hoadon[i].id;
                this.db.mahoadon = this.db_hoadon[i].mahoadon;
                this.db.makh = this.db_hoadon[i].makh;
                this.db.tonghoadon = this.db_hoadon[i].tonghoadon;
                this.db.tratien = this.db_hoadon[i].tratien;
                this.db.conlai = this.db_hoadon[i].conlai;
                this.db.kt = this.db_hoadon[i].kt;
                this.db.tinhtrang = !this.db_hoadon[i].tinhtrang;
            }
        }
        this.subscription =
            this.hoadonservice.uppdate_hoadon(this.db).subscribe(function (data) {
                _this.routerService.navigateByUrl('hoadon');
                //console.log(data);
            });
        //this.Update_Form();
        this.ngOnInit();
    };
    HoadonsComponent.prototype.list_chitiethd = function (mahd, chua, giao, show) {
        this.mahd = mahd;
        this.ngay = mahd.slice(0, 2) + "/" + mahd.slice(2, 4) + "/" + mahd.slice(4, 8);
        for (var i = this.db_chitiethd.length - 1; i >= 0; i--) {
            if (this.db_chitiethd[i].mahoadon == mahd) {
                this.db_hd[i] = this.db_chitiethd[i];
                //console.log(this.db_hd[i]);
            }
        }
        this.tiencu = 0;
        this.tongcong = 0;
        this.test_tonghoadon = 0;
        this.test_tratien = 0;
        this.test_conlai = 0;
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            this.tiencu = this.tiencu + this.db_hoadon[i].conlai;
            this.tongcong = this.tongcong + this.tiencu + this.tongtt;
            if (this.db_hoadon[i].mahoadon == mahd) {
                this.tongtt = this.db_hoadon[i].tonghoadon;
                this.thanhtoan = this.db_hoadon[i].tratien;
                this.conlai = this.db_hoadon[i].conlai;
                this.tenkhs = this.db_hoadon[i].makh;
                for (var i = this.db_dmkh.length - 1; i >= 0; i--) {
                    if (this.db_dmkh[i].makh == this.tenkhs) {
                        this.tenkhs = this.db_dmkh[i].tenkh;
                    }
                }
            }
        }
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            this.test_tonghoadon = this.test_tonghoadon + this.db_hoadon[i].tonghoadon;
            this.test_tratien = this.test_tratien + this.db_hoadon[i].tratien;
            this.test_conlai = this.test_conlai + this.db_hoadon[i].conlai;
        }
        //console.log(this.test_tonghoadon + ' - ' + this.test_tratien + ' - ' + this.test_conlai);
        this.show = show;
        this.show_chua = chua;
        this.show_giao = giao;
    };
    HoadonsComponent.prototype.list_back = function (chua, giao, show) {
        this.show = show;
        this.show_chua = chua;
        this.show_giao = giao;
    };
    HoadonsComponent.prototype.onPrint = function () {
        window.print();
    };
    HoadonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hoadons',
            template: __webpack_require__(/*! ./hoadons.component.html */ "./src/app/components/hoadon/hoadons/hoadons.component.html"),
            styles: [__webpack_require__(/*! ./hoadons.component.css */ "./src/app/components/hoadon/hoadons/hoadons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__["DmkhService"],
            _services_chitiet_service__WEBPACK_IMPORTED_MODULE_3__["ChitietService"],
            _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_4__["ChitiethdService"],
            _services_hoadon_service__WEBPACK_IMPORTED_MODULE_5__["HoadonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], HoadonsComponent);
    return HoadonsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" *ngIf=\"error ==-1\">\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n\t<strong>Tên đăng nhập không đúng!</strong> Bạn vui lòng nhập lại....\n</div>\n<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t<div class=\"panel panel-warning\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\">LOGIN</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<form autocomplete=\"false\" novalidate=\"true\">\n\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"\">Username:</label>\n\t\t\t\t\t<input \ttype=\"text\" \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t#username>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"\">Password:</label>\n\t\t\t\t\t<input \ttype=\"Password\" \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t#password>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onLogin(username.value,password.value)\">Login</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.error = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkLogin();
    };
    LoginComponent.prototype.checkLogin = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['']);
        }
    };
    LoginComponent.prototype.onLogin = function (usn, pass) {
        var use = {
            username: usn,
            password: pass
        };
        if (usn == 'admin' && pass == 'admin') {
            localStorage.setItem('user', JSON.stringify(use));
            localStorage.setItem('checkLogin', '1');
            this.router.navigate(['hoadon']);
        }
        else {
            this.error = -1;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/trangchu/trangchu.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/trangchu/trangchu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trangchu/trangchu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/trangchu/trangchu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  trangchu works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/trangchu/trangchu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/trangchu/trangchu.component.ts ***!
  \***********************************************************/
/*! exports provided: TrangchuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchuComponent", function() { return TrangchuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrangchuComponent = /** @class */ (function () {
    function TrangchuComponent() {
    }
    TrangchuComponent.prototype.ngOnInit = function () {
    };
    TrangchuComponent.prototype.logout = function () {
        if (localStorage.getItem('user')) {
            localStorage.setItem('user', null);
        }
    };
    TrangchuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trangchu',
            template: __webpack_require__(/*! ./trangchu.component.html */ "./src/app/components/trangchu/trangchu.component.html"),
            styles: [__webpack_require__(/*! ./trangchu.component.css */ "./src/app/components/trangchu/trangchu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrangchuComponent);
    return TrangchuComponent;
}());



/***/ }),

/***/ "./src/app/models/chitiethd.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/chitiethd.model.ts ***!
  \*******************************************/
/*! exports provided: chitiethd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chitiethd", function() { return chitiethd; });
var chitiethd = /** @class */ (function () {
    function chitiethd() {
    }
    return chitiethd;
}());



/***/ }),

/***/ "./src/app/models/dmhang.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/dmhang.model.ts ***!
  \****************************************/
/*! exports provided: dmhang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dmhang", function() { return dmhang; });
var dmhang = /** @class */ (function () {
    function dmhang() {
    }
    return dmhang;
}());



/***/ }),

/***/ "./src/app/models/dmkh.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/dmkh.model.ts ***!
  \**************************************/
/*! exports provided: dmkh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dmkh", function() { return dmkh; });
var dmkh = /** @class */ (function () {
    function dmkh() {
    }
    return dmkh;
}());



/***/ }),

/***/ "./src/app/models/hoadon.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/hoadon.model.ts ***!
  \****************************************/
/*! exports provided: hoadon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoadon", function() { return hoadon; });
var hoadon = /** @class */ (function () {
    function hoadon() {
    }
    return hoadon;
}());



/***/ }),

/***/ "./src/app/pipes/chitiethd.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/chitiethd.pipe.ts ***!
  \*****************************************/
/*! exports provided: ChitiethdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitiethdPipe", function() { return ChitiethdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChitiethdPipe = /** @class */ (function () {
    function ChitiethdPipe() {
    }
    ChitiethdPipe.prototype.transform = function (hoadons, mahd, id, makhs) {
        if (!mahd) {
            if (makhs) {
                hoadons = hoadons.filter(function (item) {
                    return item.tinhtrang.toString().toLocaleLowerCase().indexOf(id.toString().toLocaleLowerCase()) !== -1;
                });
                return hoadons.filter(function (item) {
                    return item.makh.toString().toLocaleLowerCase().indexOf(makhs.toString().toLocaleLowerCase()) !== -1;
                });
            }
            else {
                return hoadons.filter(function (item) {
                    return item.tinhtrang.toString().toLocaleLowerCase().indexOf(id.toString().toLocaleLowerCase()) !== -1;
                });
            }
        }
        else if (mahd) {
            /*hoadons = hoadons.filter(x =>{
                //console.log(x.id.toString().indexOf(id));
                return x.id.toString().includes(id);
            });*/
            if (makhs) {
                hoadons = hoadons.filter(function (item) {
                    return item.tinhtrang.toString().toLocaleLowerCase().indexOf(id.toString().toLocaleLowerCase()) !== -1;
                });
                hoadons = hoadons.filter(function (item) {
                    return item.mahoadon.toString().toLocaleLowerCase().indexOf(mahd.toString().toLocaleLowerCase()) !== -1;
                });
                return hoadons.filter(function (item) {
                    return item.makh.toString().toLocaleLowerCase().indexOf(makhs.toString().toLocaleLowerCase()) !== -1;
                });
            }
            else {
                hoadons = hoadons.filter(function (item) {
                    return item.tinhtrang.toString().toLocaleLowerCase().indexOf(id.toString().toLocaleLowerCase()) !== -1;
                });
                return hoadons.filter(function (item) {
                    return item.mahoadon.toString().toLocaleLowerCase().indexOf(mahd.toString().toLocaleLowerCase()) !== -1;
                });
            }
        }
    };
    ChitiethdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'chitiethd'
        })
    ], ChitiethdPipe);
    return ChitiethdPipe;
}());



/***/ }),

/***/ "./src/app/pipes/show-chitiethd.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/show-chitiethd.pipe.ts ***!
  \**********************************************/
/*! exports provided: ShowChitiethdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowChitiethdPipe", function() { return ShowChitiethdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShowChitiethdPipe = /** @class */ (function () {
    function ShowChitiethdPipe() {
    }
    ShowChitiethdPipe.prototype.transform = function (chitiethds, mahd) {
        if (!mahd) {
            return chitiethds;
        }
        else if (mahd) {
            return chitiethds.filter(function (item) {
                return item.mahoadon.toString().toLocaleLowerCase().indexOf(mahd.toLocaleLowerCase()) !== -1;
            });
        }
        else {
            return chitiethds;
        }
    };
    ShowChitiethdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'showChitiethd'
        })
    ], ShowChitiethdPipe);
    return ShowChitiethdPipe;
}());



/***/ }),

/***/ "./src/app/pipes/tenhang.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/tenhang.pipe.ts ***!
  \***************************************/
/*! exports provided: TenhangPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenhangPipe", function() { return TenhangPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TenhangPipe = /** @class */ (function () {
    function TenhangPipe() {
    }
    TenhangPipe.prototype.transform = function (dmhangs, mahangs) {
        if (!mahangs) {
            return dmhangs;
        }
        else if (mahangs) {
            return dmhangs.filter(function (item) {
                return item.mahang.toString().toLocaleLowerCase().indexOf(mahangs.toLocaleLowerCase()) !== -1;
            });
        }
        else {
            return dmhangs;
        }
    };
    TenhangPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'tenhang'
        })
    ], TenhangPipe);
    return TenhangPipe;
}());



/***/ }),

/***/ "./src/app/pipes/tenkh.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/tenkh.pipe.ts ***!
  \*************************************/
/*! exports provided: TenkhPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenkhPipe", function() { return TenkhPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TenkhPipe = /** @class */ (function () {
    function TenkhPipe() {
    }
    TenkhPipe.prototype.transform = function (dmkhs, makhs) {
        if (!makhs) {
            return dmkhs;
        }
        else if (makhs) {
            return dmkhs.filter(function (item) {
                return item.makh.toString().toLocaleLowerCase().indexOf(makhs.toLocaleLowerCase()) !== -1;
            });
        }
        else {
            return dmkhs;
        }
    };
    TenkhPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'tenkh'
        })
    ], TenkhPipe);
    return TenkhPipe;
}());



/***/ }),

/***/ "./src/app/services/chitiet.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/chitiet.service.ts ***!
  \*********************************************/
/*! exports provided: ChitietService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitietService", function() { return ChitietService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var ChitietService = /** @class */ (function () {
    function ChitietService(http) {
        this.http = http;
        this.API = 'http://localhost:3000/chitiet';
    }
    //List danh sách  các mặt hàng
    ChitietService.prototype.getAllchitiet = function () {
        return this.http.get(this.API);
    };
    ChitietService.prototype.getOnechitiet = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    ChitietService.prototype.add_chitiet = function (chitiet) {
        return this.http.post(this.API, chitiet);
    };
    ChitietService.prototype.delete_chitiet = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    ChitietService.prototype.uppdate_chitiet = function (chitiet) {
        return this.http.put(this.API + "/" + chitiet.id, chitiet);
    };
    ChitietService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChitietService);
    return ChitietService;
}());



/***/ }),

/***/ "./src/app/services/chitiethd.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/chitiethd.service.ts ***!
  \***********************************************/
/*! exports provided: ChitiethdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitiethdService", function() { return ChitiethdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var ChitiethdService = /** @class */ (function () {
    function ChitiethdService(http) {
        this.http = http;
        this.API = 'http://localhost:3000/chitiethd';
    }
    //List danh sách  các mặt hàng
    /*getAllchitiethd() : Observable<chitiethd[]>{
      return this.http.get(this.API);
    }
    getOnechitiethd(id: number) : Observable<chitiethd>{
      return this.http.get(`${this.API}/${id}`);
    }
    add_chitiethd(chitiethd : chitiethd) : Observable<chitiethd>{
      return this.http.post(this.API, chitiethd);
    }
     delete_chitiethd(id : number) : Observable<chitiethd>{
        return this.http.delete(`${this.API}/${id}`);
    }
    uppdate_chitiethd(chitiethd : chitiethd) : Observable<chitiethd>{
        return this.http.put(`${this.API}/${chitiethd.id}`,chitiethd);
    }*/
    //Chinh sua lai
    ChitiethdService.prototype.getAllchitiethd = function () {
        return this.http.get(this.API);
    };
    ChitiethdService.prototype.getOnechitiethd = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    ChitiethdService.prototype.add_chitiethd = function (chitiethd) {
        return this.http.post(this.API, chitiethd);
    };
    ChitiethdService.prototype.delete_chitiethd = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    ChitiethdService.prototype.uppdate_chitiethd = function (chitiethd) {
        return this.http.put(this.API + "/" + chitiethd.id, chitiethd);
    };
    ChitiethdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChitiethdService);
    return ChitiethdService;
}());



/***/ }),

/***/ "./src/app/services/dmhang.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dmhang.service.ts ***!
  \********************************************/
/*! exports provided: DmhangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangService", function() { return DmhangService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var DmhangService = /** @class */ (function () {
    function DmhangService(http) {
        this.http = http;
        //Khai báo đường dẫn đến Server để lấy dl
        this.API = 'http://localhost:3000/dmhang';
    }
    //List danh sách  các mặt hàng
    /* getAlldmhang() : Observable<dmhang[]>{
       return this.http.get(this.API);
     }
     getOnedmhang(id: number) : Observable<dmhang>{
       return this.http.get(`${this.API}/${id}`);
     }
   
     add_dmhang(dmhang : dmhang) : Observable<dmhang>{
       return this.http.post(this.API, dmhang);
     }
      delete_dmhang(id : number) : Observable<dmhang>{
         return this.http.delete(`${this.API}/${id}`);
     }
     uppdate_dmhang(dmhang : dmhang) : Observable<dmhang>{
         return this.http.put(`${this.API}/${dmhang.id}`,dmhang);
     }*/
    //Chinh sua lai
    DmhangService.prototype.getAlldmhang = function () {
        return this.http.get(this.API);
    };
    DmhangService.prototype.getOnedmhang = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    DmhangService.prototype.add_dmhang = function (dmhang) {
        return this.http.post(this.API, dmhang);
    };
    DmhangService.prototype.delete_dmhang = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    DmhangService.prototype.uppdate_dmhang = function (dmhang) {
        return this.http.put(this.API + "/" + dmhang.id, dmhang);
    };
    DmhangService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DmhangService);
    return DmhangService;
}());



/***/ }),

/***/ "./src/app/services/dmkh.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/dmkh.service.ts ***!
  \******************************************/
/*! exports provided: DmkhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhService", function() { return DmkhService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var DmkhService = /** @class */ (function () {
    function DmkhService(http) {
        this.http = http;
        //Khai báo đường dẫn đến Server để lấy dl
        this.API = 'http://localhost:3000/dmkh';
    }
    //List danh sách  các mặt hàng
    /*getAlldmkh() : Observable<dmkh[]>{
      return this.http.get(this.API);
    }
    getOnedmkh(id: number) : Observable<dmkh>{
      return this.http.get(`${this.API}/${id}`);
    }
    add_dmkh(dmkh : dmkh) : Observable<dmkh>{
      return this.http.post(this.API, dmkh);
    }
     delete_dmkh(id : number) : Observable<dmkh>{
        return this.http.delete(`${this.API}/${id}`);
    }
    uppdate_dmkh(dmkh : dmkh) : Observable<dmkh>{
        return this.http.put(`${this.API}/${dmkh.id}`,dmkh);
    }*/
    DmkhService.prototype.getAlldmkh = function () {
        return this.http.get(this.API);
    };
    DmkhService.prototype.getOnedmkh = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    DmkhService.prototype.add_dmkh = function (dmkh) {
        return this.http.post(this.API, dmkh);
    };
    DmkhService.prototype.delete_dmkh = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    DmkhService.prototype.uppdate_dmkh = function (dmkh) {
        return this.http.put(this.API + "/" + dmkh.id, dmkh);
    };
    DmkhService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DmkhService);
    return DmkhService;
}());



/***/ }),

/***/ "./src/app/services/guards/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/services/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('user')) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/hoadon.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/hoadon.service.ts ***!
  \********************************************/
/*! exports provided: HoadonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoadonService", function() { return HoadonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var HoadonService = /** @class */ (function () {
    function HoadonService(http) {
        this.http = http;
        this.API = 'http://localhost:3000/hoadon';
    }
    //List danh sách  các mặt hàng
    /*getAllhoadon() : Observable<hoadon[]>{
      return this.http.get(this.API);
    }
    getOnehoadon(id: number) : Observable<hoadon>{
      return this.http.get(`${this.API}/${id}`);
    }
    add_hoadon(hoadon : hoadon) : Observable<hoadon>{
      return this.http.post(this.API, hoadon);
    }
     delete_hoadon(id : number) : Observable<hoadon>{
        return this.http.delete(`${this.API}/${id}`);
    }
    uppdate_hoadon(hoadon : hoadon) : Observable<hoadon>{
        return this.http.put(`${this.API}/${hoadon.id}`,hoadon);
    }*/
    HoadonService.prototype.getAllhoadon = function () {
        return this.http.get(this.API);
    };
    HoadonService.prototype.getOnehoadon = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    HoadonService.prototype.add_hoadon = function (hoadon) {
        return this.http.post(this.API, hoadon);
    };
    HoadonService.prototype.delete_hoadon = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    HoadonService.prototype.uppdate_hoadon = function (hoadon) {
        return this.http.put(this.API + "/" + hoadon.id, hoadon);
    };
    HoadonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HoadonService);
    return HoadonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular 4\HOAVU\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map