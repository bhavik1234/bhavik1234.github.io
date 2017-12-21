webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin: 0;\r\n    font-family: Arial;\r\n  }\r\n  \r\n  .header {\r\n    padding: 5px 8px;\r\n    background: #555;\r\n    color: #f1f1f1;\r\n    text-align: center;\r\n  }\r\n  \r\n  .content {\r\n    display:block;\r\n    padding: 16px;\r\n  }\r\n  \r\n  .sticky {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  .sticky + .content {\r\n    padding-top: 102px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\r\n  <div class=\"header\" id=\"myHeader\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12\">\r\n        <h3>CHATBOT</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-chat-dialog class=\"brown lighten-4\"></app-chat-dialog>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// importing chatmodule
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__chat_chat_module__["a" /* ChatModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat-dialog/chat-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message {\r\n    border-radius: 50px;\r\n    margin: 0 15px 10px;\r\n    padding: 15px 20px;\r\n    position: relative;\r\n    font-weight: bold;\r\n}\r\n.message.to {\r\n    background-color: #2095FE;\r\n    color: #fff;\r\n    margin-left: 100px;\r\n    text-align: right;\r\n}\r\n.message.from {\r\n    background-color: rgb(121, 254, 32);\r\n    color: #363636;\r\n    margin-right: 100px;\r\n}\r\n.message.to + .message.to,\r\n.message.from + .message.from {\r\nmargin-top: -10px;\r\n}\r\n/* .footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: red;\r\n    color: white;\r\n    text-align: left;\r\n} */\r\nbody {\r\n  margin: 0;\r\n  font-family: Arial;\r\n}\r\n\r\n.header {\r\n  padding: 5px 8px;\r\n  background: #555;\r\n  color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n.content {\r\n  display:block;\r\n  padding: 16px;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n.sticky + .content {\r\n  padding-top: 102px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat-dialog/chat-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container deep-orange lighten-1\"> -->\r\n<div class=\"content\"  style=\"overflow:scroll; height:400px;overflow-x: hidden;\">\r\n  <div class=\"row\">\r\n    <div class=\"col s8 m6 offset-s2 offset-m3\" >\r\n      <ng-container *ngFor=\"let message of messages | async\">\r\n        <div class=\"message\" [ngClass]=\"{'from':message.sentBY === 'bot','to':message.sentBy === 'user'}\">\r\n          {{message.content}}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col s9 m9 offset-s1 offset-m1\">\r\n      <label for=\"nameField\">Your Message</label>\r\n      <input type=\"text\" [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\">\r\n    </div>\r\n    <div class=\"col s1 m1\">\r\n      <button class=\"btn-floating btn-large red\" (click)=\"activateSpeechSearch()\" [disabled]=\"!showSearchButton\">\r\n         <i class=\"large material-icons\">mic</i>\r\n       </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"header\" id=\"myHeader\">\r\n    <div class=\"row\">\r\n        <div class=\"col s12 m12\">\r\n          <h1>CHATBOT</h1>\r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n<div class=\"row\">\r\n  <div class=\"col s8 m6 offset-s2 offset-m3\">\r\n    <ng-container *ngFor=\"let message of messages | async\">\r\n      <div class=\"message\" [ngClass]=\"{'from':message.sentBY === 'bot','to':message.sentBy === 'user'}\">\r\n        {{message.content}}\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col s9 m9 offset-s1 offset-m1\">\r\n      <label for=\"nameField\">Your Message</label>\r\n      <input type=\"text\" [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\">\r\n    </div>\r\n    <div class=\"col s1 m1\">\r\n      <button class=\"btn-floating btn-large red\" (click)=\"activateSpeechSearch()\" [disabled]=\"!showSearchButton\">\r\n        <i class=\"large material-icons\">mic</i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/chat/chat-dialog/chat-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speech_service__ = __webpack_require__("../../../../../src/app/chat/speech.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// importing dependency
var ChatDialogComponent = (function () {
    function ChatDialogComponent(chat, speechService) {
        this.chat = chat;
        this.speechService = speechService;
        this.showSearchButton = true;
        this.speechData = '';
    }
    ChatDialogComponent.prototype.ngOnInit = function () {
        // appends to array after each new message is added to feedSource
        this.messages = this.chat.conversation.asObservable()
            .scan((function (acc, val) { return acc.concat(val); }));
    };
    ChatDialogComponent.prototype.ngOnDestroy = function () {
        this.speechService.DestroySpeechObject();
    };
    ChatDialogComponent.prototype.sendMessage = function () {
        this.chat.converse(this.formValue);
        console.log(this.formValue);
        this.formValue = '';
    };
    ChatDialogComponent.prototype.activateSpeechSearch = function () {
        var _this = this;
        this.showSearchButton = false;
        this.speechService.record()
            .subscribe(
        // listener
        function (value) {
            _this.speechData = value;
            _this.formValue = _this.speechData;
            _this.sendMessage();
            console.log(value);
        }, 
        // errror
        function (err) {
            console.log(err);
            if (err.error === 'no-speech') {
                console.log('--restatring service--');
                _this.activateSpeechSearch();
            }
        }, 
        // completion
        function () {
            _this.showSearchButton = true;
            console.log('--complete--');
            // this.activateSpeechSearch();
        });
    };
    return ChatDialogComponent;
}());
ChatDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat-dialog',
        template: __webpack_require__("../../../../../src/app/chat/chat-dialog/chat-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat-dialog/chat-dialog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__speech_service__["a" /* SpeechService */]) === "function" && _b || Object])
], ChatDialogComponent);

var _a, _b;
//# sourceMappingURL=chat-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_dialog_chat_dialog_component__ = __webpack_require__("../../../../../src/app/chat/chat-dialog/chat-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speech_service__ = __webpack_require__("../../../../../src/app/chat/speech.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// importing forms module




var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__chat_dialog_chat_dialog_component__["a" /* ChatDialogComponent */]],
        // exporting chatdialogcomponent
        exports: [__WEBPACK_IMPORTED_MODULE_3__chat_dialog_chat_dialog_component__["a" /* ChatDialogComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_5__speech_service__["a" /* SpeechService */]]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Message */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_api_ai_javascript__ = __webpack_require__("../../../../api-ai-javascript/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// importing dependencies



// Message class for displaying messages in the component
var Message = (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    return Message;
}());

var ChatService = (function () {
    function ChatService() {
        this.token = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].dialogflow.angularBot;
        this.client = new __WEBPACK_IMPORTED_MODULE_2_api_ai_javascript__["a" /* ApiAiClient */]({ accessToken: this.token });
        this.conversation = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    // Sends and receives messages via DialogFlow
    ChatService.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new Message(msg, 'user');
        this.update(userMessage);
        console.log(this.token);
        return this.client.textRequest(msg)
            .then(function (res) {
            var speech = res.result.fulfillment.speech;
            var botMessage = new Message(speech, 'bot');
            _this.update(botMessage);
        });
    };
    // Adds message to source
    ChatService.prototype.update = function (msg) {
        this.conversation.next([msg]);
        console.log(this.token);
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/chat/speech.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechService = (function () {
    function SpeechService(zone) {
        this.zone = zone;
    }
    SpeechService.prototype.record = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            _this.speechRecognition.continuous = true;
            // this.speechRecognition.interimResults = true;
            _this.speechRecognition.lang = 'en-us';
            _this.speechRecognition.maxAlternatives = 1;
            _this.speechRecognition.onresult = function (speech) {
                var term = '';
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log('Unrecognized result - Please try again');
                        }
                        else {
                            term = __WEBPACK_IMPORTED_MODULE_2_lodash__["trim"](transcript);
                            console.log('Did you said? -> ' + term + ' , If not then say something else...');
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
            console.log('Say something - We are listening !!!');
        });
    };
    SpeechService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    };
    return SpeechService;
}());
SpeechService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _a || Object])
], SpeechService);

var _a;
//# sourceMappingURL=speech.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    dialogflow: {
        angularBot: '734d75343a474dec864092239fb3b383'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map