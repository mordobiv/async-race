/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/animation/drive.ts":
/*!****************************************!*\
  !*** ./src/scripts/animation/drive.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/scripts/config.ts");

function getDriveStep(velocity) {
    var time = _config__WEBPACK_IMPORTED_MODULE_0__.raceStats.maxAnimationTime / (velocity / _config__WEBPACK_IMPORTED_MODULE_0__.raceStats.minPossibleVelocity);
    var totalSteps = _config__WEBPACK_IMPORTED_MODULE_0__.raceStats.framesPerSecond * time;
    var stepDistance = _config__WEBPACK_IMPORTED_MODULE_0__.raceStats.distance / totalSteps;
    return {
        stepDistance: stepDistance,
        time: time,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDriveStep);


/***/ }),

/***/ "./src/scripts/config.ts":
/*!*******************************!*\
  !*** ./src/scripts/config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "raceStats": () => (/* binding */ raceStats)
/* harmony export */ });
var apiUrl = 'http://127.0.0.1:3000/';
var raceStats = {
    maxAnimationTime: 40,
    minPossibleVelocity: 50,
    framesPerSecond: 60,
    distance: 100,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiUrl);


/***/ }),

/***/ "./src/scripts/data-controller/cars-name.ts":
/*!**************************************************!*\
  !*** ./src/scripts/data-controller/cars-name.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "brands": () => (/* binding */ brands),
/* harmony export */   "models": () => (/* binding */ models)
/* harmony export */ });
var brands = ['Peugeot', 'BMW', 'Porsche', 'Zhiguli', 'Audi', 'Mercedes', 'Fiat', 'MAZ', 'Buggati', 'Rolls-Royse', 'Pagani'];
var models = ['406 Coupe', 'AMG', 'M-Series', 'RS', '3-series', 'A6', 'C208', '911', 'Cayman', '4S', 'Sport'];


/***/ }),

/***/ "./src/scripts/data-controller/cars.ts":
/*!*********************************************!*\
  !*** ./src/scripts/data-controller/cars.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCar": () => (/* binding */ createCar),
/* harmony export */   "getAllCars": () => (/* binding */ getAllCars),
/* harmony export */   "getCar": () => (/* binding */ getCar),
/* harmony export */   "removeCar": () => (/* binding */ removeCar),
/* harmony export */   "updateCar": () => (/* binding */ updateCar)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/scripts/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var garageUrl = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["default"], "garage/");
function getAllCars() {
    return __awaiter(this, void 0, void 0, function () {
        var response, allCars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(garageUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    allCars = _a.sent();
                    return [2 /*return*/, allCars];
                case 3: return [2 /*return*/, new Error('Cannot get cars list')];
            }
        });
    });
}
function getCar(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(garageUrl).concat(id))];
                case 1:
                    response = _a.sent();
                    if (response.ok) {
                        return [2 /*return*/, response.json()];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function createCar(car) {
    return __awaiter(this, void 0, void 0, function () {
        var request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(garageUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(car),
                    })];
                case 1:
                    request = _a.sent();
                    if (request.ok) {
                        // console.log('wow');
                        return [2 /*return*/, request.json()];
                    }
                    throw new Error('Cannot add car');
            }
        });
    });
}
function removeCar(id) {
    return __awaiter(this, void 0, void 0, function () {
        var request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(garageUrl).concat(id), {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })];
                case 1:
                    request = _a.sent();
                    if (request.ok) {
                        // console.log('Perfect');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateCar(id, name, color) {
    if (color === void 0) { color = '123'; }
    return __awaiter(this, void 0, void 0, function () {
        var car, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    car = {
                        name: name,
                        color: color,
                    };
                    return [4 /*yield*/, fetch("".concat(garageUrl).concat(id), {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(car),
                        })];
                case 1:
                    request = _a.sent();
                    if (request.ok) {
                        // console.log('wow');
                    }
                    else {
                        throw new Error('Cannot add car');
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/scripts/data-controller/engine.ts":
/*!***********************************************!*\
  !*** ./src/scripts/data-controller/engine.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkEngine": () => (/* binding */ checkEngine),
/* harmony export */   "startStopCar": () => (/* binding */ startStopCar)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/scripts/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var engineUrl = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["default"], "engine");
function startStopCar(carId, status) {
    return __awaiter(this, void 0, void 0, function () {
        var url, startEngineRequest, response, velocity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = new URL(engineUrl);
                    url.searchParams.set('id', "".concat(carId));
                    url.searchParams.set('status', status);
                    return [4 /*yield*/, fetch(url, {
                            method: 'PATCH',
                        })];
                case 1:
                    startEngineRequest = _a.sent();
                    if (!startEngineRequest.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, startEngineRequest.json()];
                case 2:
                    response = _a.sent();
                    velocity = response.velocity;
                    return [2 /*return*/, velocity];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function checkEngine(carId) {
    return __awaiter(this, void 0, void 0, function () {
        var url, startDriveRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = new URL(engineUrl);
                    url.searchParams.set('id', "".concat(carId));
                    url.searchParams.set('status', 'drive');
                    return [4 /*yield*/, fetch(url, {
                            method: 'PATCH',
                            body: JSON.stringify({
                                id: carId,
                                status: 'drive',
                            }),
                        })];
                case 1:
                    startDriveRequest = _a.sent();
                    return [2 /*return*/, startDriveRequest.ok];
            }
        });
    });
}


/***/ }),

/***/ "./src/scripts/data-controller/records.ts":
/*!************************************************!*\
  !*** ./src/scripts/data-controller/records.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWinner": () => (/* binding */ createWinner),
/* harmony export */   "deleteWinner": () => (/* binding */ deleteWinner),
/* harmony export */   "getWinner": () => (/* binding */ getWinner),
/* harmony export */   "getWinners": () => (/* binding */ getWinners),
/* harmony export */   "updateWinner": () => (/* binding */ updateWinner)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/scripts/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var winnersUrl = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["default"], "winners/");
function getWinners() {
    return __awaiter(this, void 0, void 0, function () {
        var winnersRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(winnersUrl)];
                case 1:
                    winnersRequest = _a.sent();
                    if (winnersRequest.ok) {
                        return [2 /*return*/, winnersRequest.json()];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getWinner(id) {
    return __awaiter(this, void 0, void 0, function () {
        var url, winnerRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = new URL("".concat(winnersUrl).concat(id));
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    winnerRequest = _a.sent();
                    if (winnerRequest.ok) {
                        return [2 /*return*/, winnerRequest.json()];
                    }
                    return [2 /*return*/, winnerRequest.status];
            }
        });
    });
}
function createWinner(id, time) {
    return __awaiter(this, void 0, void 0, function () {
        var recordNode, createWinnerRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    recordNode = {
                        id: id,
                        wins: 1,
                        time: time,
                    };
                    return [4 /*yield*/, fetch(winnersUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(recordNode),
                        })];
                case 1:
                    createWinnerRequest = _a.sent();
                    if (createWinnerRequest.ok) {
                        return [2 /*return*/, createWinnerRequest.json()];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deleteWinner(id) {
    return __awaiter(this, void 0, void 0, function () {
        var url, deleteWinnerRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "".concat(winnersUrl).concat(id);
                    return [4 /*yield*/, fetch(url, {
                            method: 'DELETE',
                        })];
                case 1:
                    deleteWinnerRequest = _a.sent();
                    if (deleteWinnerRequest.ok) {
                        return [2 /*return*/, deleteWinnerRequest.json()];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateWinner(id, wins, time) {
    return __awaiter(this, void 0, void 0, function () {
        var url, updateWinnerRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "".concat(winnersUrl).concat(id);
                    return [4 /*yield*/, fetch(url, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                wins: wins,
                                time: time,
                            }),
                        })];
                case 1:
                    updateWinnerRequest = _a.sent();
                    if (updateWinnerRequest.ok) {
                        return [2 /*return*/, updateWinnerRequest.json()];
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/scripts/helpers.ts":
/*!********************************!*\
  !*** ./src/scripts/helpers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createImg": () => (/* binding */ createImg),
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "createTableCell": () => (/* binding */ createTableCell),
/* harmony export */   "createTableHeader": () => (/* binding */ createTableHeader)
/* harmony export */ });
function createNode(className, textContent) {
    var node = document.createElement('div');
    node.className = className;
    if (textContent)
        node.textContent = textContent;
    return node;
}
function createButton(buttonName) {
    var button = document.createElement('button');
    button.className = "button button__".concat(buttonName);
    button.textContent = buttonName;
    return button;
}
function createImg(src, className) {
    var imgBlock = createNode(className);
    var img = document.createElement('img');
    img.className = "".concat(className, "__img");
    img.src = src;
    imgBlock.append(img);
    return imgBlock;
}
function createTableHeader(className, textContent) {
    var node = document.createElement('th');
    node.className = className;
    node.textContent = textContent;
    return node;
}
function createTableCell(textContent) {
    var node = document.createElement('td');
    if (textContent)
        node.textContent = textContent;
    return node;
}


/***/ }),

/***/ "./src/scripts/pages/garage/components/car-management.ts":
/*!***************************************************************!*\
  !*** ./src/scripts/pages/garage/components/car-management.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");
/* harmony import */ var _garage_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./garage-cars */ "./src/scripts/pages/garage/components/garage-cars.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function renderCarSelection(blockType) {
    var _this = this;
    var main = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)(blockType);
    var setName = document.createElement('input');
    setName.className = "".concat(blockType, "__input");
    var color = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)("".concat(blockType, "__color"));
    var button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(blockType);
    button.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var car, newCar, carsHeaderAmountBlock, carsBlock, carId, value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(blockType === 'create')) return [3 /*break*/, 2];
                    car = {
                        name: setName.value,
                        color: 'aaaaaa',
                    };
                    return [4 /*yield*/, (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.createCar)(car)];
                case 1:
                    newCar = _a.sent();
                    carsHeaderAmountBlock = document.querySelector('.header__value');
                    if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
                        carsHeaderAmountBlock.textContent = "".concat(+carsHeaderAmountBlock.textContent + 1);
                    }
                    carsBlock = document.querySelector('.cars');
                    if (carsBlock) {
                        carsBlock.append((0,_garage_cars__WEBPACK_IMPORTED_MODULE_2__.renderSpecificCar)(newCar));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    carId = setName.dataset.carId;
                    if (carId) {
                        value = setName.value;
                        (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.updateCar)(+carId, value, 'brown');
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
    main.append(setName, color, button);
    return main;
}
function renderCarManagement() {
    var carManagementBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('car-management');
    var createCarBlock = renderCarSelection('create');
    var editCarBlock = renderCarSelection('edit');
    carManagementBlock.append(createCarBlock, editCarBlock);
    return carManagementBlock;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCarManagement);


/***/ }),

/***/ "./src/scripts/pages/garage/components/garage-cars.ts":
/*!************************************************************!*\
  !*** ./src/scripts/pages/garage/components/garage-cars.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "renderSpecificCar": () => (/* binding */ renderSpecificCar)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");
/* harmony import */ var _data_controller_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data-controller/engine */ "./src/scripts/data-controller/engine.ts");
/* harmony import */ var _data_controller_records__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data-controller/records */ "./src/scripts/data-controller/records.ts");
/* harmony import */ var _animation_drive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../animation/drive */ "./src/scripts/animation/drive.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





function renderHeader() {
    return __awaiter(this, void 0, void 0, function () {
        var garageCarsHeader, garageCarsHeaderLabel, carsAmount, garageCarsHeaderValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    garageCarsHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header');
                    garageCarsHeaderLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header__label', 'Garage');
                    return [4 /*yield*/, (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)()];
                case 1:
                    carsAmount = _a.sent();
                    garageCarsHeaderValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header__value', carsAmount.length);
                    garageCarsHeader.append(garageCarsHeaderLabel, garageCarsHeaderValue);
                    return [2 /*return*/, garageCarsHeader];
            }
        });
    });
}
function renderCurrentPage() {
    var pageNumber = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('page-number');
    var pageNumberLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('page-number__label', 'Page #');
    var pageNumberValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('page-number__value', '1');
    pageNumber.append(pageNumberLabel, pageNumberValue);
    return pageNumber;
}
function renderSpecificCar(car) {
    var _this = this;
    var carBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('car-block');
    var carModifiers = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('modifier');
    var selectButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('select');
    selectButton.addEventListener('click', function () {
        var editInput = document.querySelector('.edit__input');
        editInput.value = car.name;
        editInput.dataset.carId = "".concat(car.id);
    });
    var removeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('remove');
    removeButton.addEventListener('click', function () {
        (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.removeCar)(car.id);
        carBlock.remove();
        var carsHeaderAmountBlock = document.querySelector('.header__value');
        if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
            carsHeaderAmountBlock.textContent = "".concat(+carsHeaderAmountBlock.textContent - 1);
        }
        (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.deleteWinner)(car.id);
    });
    carModifiers.append(selectButton, removeButton);
    var carName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('name', car.name);
    var carIconBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('assets/icon/carIcon.svg', 'car');
    var flagIconBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('assets/icon/flag.svg', 'flag');
    var controls = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('controls');
    var start = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('start');
    start.dataset.carId = "".concat(car.id);
    var carAnimationIntervalId = 0;
    start.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var startRace, velocity, driveAnimationStep, isEngineOk;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start.classList.add('button__disabled');
                    startRace = new Date().valueOf();
                    return [4 /*yield*/, (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.startStopCar)(car.id, 'started')];
                case 1:
                    velocity = _a.sent();
                    driveAnimationStep = (0,_animation_drive__WEBPACK_IMPORTED_MODULE_4__["default"])(velocity);
                    carAnimationIntervalId = window.setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var endRace, raceDuration, carWin, currentTranslateValue, newTranslateValue;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!carIconBlock) return [3 /*break*/, 4];
                                    if (!(+carIconBlock.style.translate.slice(0, -1) >= 100)) return [3 /*break*/, 3];
                                    clearInterval(carAnimationIntervalId);
                                    endRace = new Date().valueOf();
                                    raceDuration = ((endRace - startRace) / 1000).toFixed(2);
                                    if (!(sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true')) return [3 /*break*/, 2];
                                    sessionStorage.setItem('race', 'false');
                                    alert("Car # ".concat(car.id, " has won!\nTime: ").concat(raceDuration, "s"));
                                    return [4 /*yield*/, (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.getWinner)(car.id)];
                                case 1:
                                    carWin = _a.sent();
                                    console.log(carWin);
                                    if (carWin === 404) {
                                        (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.createWinner)(car.id, +raceDuration);
                                    }
                                    else {
                                        (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.updateWinner)(car.id, carWin.wins + 1, +raceDuration);
                                    }
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                                case 3:
                                    currentTranslateValue = carIconBlock.style.translate;
                                    newTranslateValue = currentTranslateValue ? "".concat(+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance, "%") : "".concat(driveAnimationStep.stepDistance, "%");
                                    carIconBlock.style.translate = newTranslateValue;
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }, driveAnimationStep.stepDistance);
                    carBlock.dataset.intervalId = "".concat(carAnimationIntervalId);
                    return [4 /*yield*/, (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.checkEngine)(car.id)];
                case 2:
                    isEngineOk = _a.sent();
                    if (!isEngineOk)
                        clearInterval(carAnimationIntervalId);
                    return [2 /*return*/];
            }
        });
    }); });
    var stop = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('stop');
    stop.addEventListener('click', function () {
        carIconBlock.style.translate = '';
        clearInterval(carAnimationIntervalId);
    });
    controls.append(start, stop);
    var race = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('race');
    race.append(carIconBlock, flagIconBlock);
    carBlock.append(carModifiers, carName, controls, race);
    return carBlock;
}
function renderCars() {
    return __awaiter(this, void 0, void 0, function () {
        var cars, allCars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cars = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('cars');
                    return [4 /*yield*/, (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)()];
                case 1:
                    allCars = _a.sent();
                    allCars.forEach(function (car) {
                        cars.append(renderSpecificCar(car));
                    });
                    return [2 /*return*/, cars];
            }
        });
    });
}
function renderGarageCars() {
    return __awaiter(this, void 0, void 0, function () {
        var garageCars, header, currentPage, cars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    garageCars = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('garage-cars');
                    return [4 /*yield*/, renderHeader()];
                case 1:
                    header = _a.sent();
                    currentPage = renderCurrentPage();
                    return [4 /*yield*/, renderCars()];
                case 2:
                    cars = _a.sent();
                    garageCars.append(header, currentPage, cars);
                    return [2 /*return*/, garageCars];
            }
        });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGarageCars);


/***/ }),

/***/ "./src/scripts/pages/garage/components/garage-controls.ts":
/*!****************************************************************!*\
  !*** ./src/scripts/pages/garage/components/garage-controls.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data-controller/cars-name */ "./src/scripts/data-controller/cars-name.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");
/* harmony import */ var _garage_cars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./garage-cars */ "./src/scripts/pages/garage/components/garage-cars.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function renderGarageControls() {
    var _this = this;
    var garageControls = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('controls');
    var raceButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('race');
    raceButton.addEventListener('click', function () {
        sessionStorage.setItem('race', 'true');
        document.querySelectorAll('.button__start').forEach(function (el) { return el.click(); });
    });
    var resetButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('reset');
    resetButton.addEventListener('click', function () { return document.querySelectorAll('.button__stop').forEach(function (el) { return el.click(); }); });
    var generateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('genarate');
    generateButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var carsToGenerate, results, carsBlock, i, randBrand, randModel, carName, car, _a, _b, carsHeaderAmountBlock;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    carsToGenerate = 100;
                    results = [];
                    carsBlock = document.querySelector('.cars');
                    for (i = 0; i < carsToGenerate; i += 1) {
                        randBrand = _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.brands[Math.floor(Math.random() * _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.brands.length)];
                        randModel = _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.models[Math.floor(Math.random() * _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.models.length)];
                        carName = "".concat(randBrand, " ").concat(randModel);
                        car = {
                            name: carName,
                            color: 'blue',
                        };
                        results.push((0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_2__.createCar)(car));
                    }
                    if (!carsBlock) return [3 /*break*/, 3];
                    _b = (_a = console).log;
                    return [4 /*yield*/, Promise.all(results)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [4 /*yield*/, Promise.all(results)];
                case 2:
                    (_c.sent()).forEach(function (el) {
                        carsBlock.append((0,_garage_cars__WEBPACK_IMPORTED_MODULE_3__.renderSpecificCar)(el));
                    });
                    _c.label = 3;
                case 3:
                    carsHeaderAmountBlock = document.querySelector('.header__value');
                    if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
                        carsHeaderAmountBlock.textContent = "".concat(+carsHeaderAmountBlock.textContent + 100);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    garageControls.append(raceButton, resetButton, generateButton);
    return garageControls;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGarageControls);


/***/ }),

/***/ "./src/scripts/pages/garage/garage.ts":
/*!********************************************!*\
  !*** ./src/scripts/pages/garage/garage.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_car_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/car-management */ "./src/scripts/pages/garage/components/car-management.ts");
/* harmony import */ var _components_garage_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/garage-controls */ "./src/scripts/pages/garage/components/garage-controls.ts");
/* harmony import */ var _components_garage_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/garage-cars */ "./src/scripts/pages/garage/components/garage-cars.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/scripts/helpers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function renderGaragePage() {
    return __awaiter(this, void 0, void 0, function () {
        var body, garageView, carManagement, garageControls, garageCars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sessionStorage.setItem('race', 'false');
                    body = document.querySelector('body');
                    garageView = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.createNode)('garage');
                    if (!body) return [3 /*break*/, 2];
                    carManagement = (0,_components_car_management__WEBPACK_IMPORTED_MODULE_0__["default"])();
                    garageControls = (0,_components_garage_controls__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    return [4 /*yield*/, (0,_components_garage_cars__WEBPACK_IMPORTED_MODULE_2__["default"])()];
                case 1:
                    garageCars = _a.sent();
                    garageView.append(carManagement, garageControls, garageCars);
                    body.append(garageView);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGaragePage);


/***/ }),

/***/ "./src/scripts/pages/header.ts":
/*!*************************************!*\
  !*** ./src/scripts/pages/header.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _records_records__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./records/records */ "./src/scripts/pages/records/records.ts");


function renderHeader() {
    var header = document.createElement('header');
    header.className = 'header';
    var headerButtons = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('buttons');
    var toGarage = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('garage');
    toGarage.addEventListener('click', function () {
        var garageView = document.querySelector('.garage');
        var recordsView = document.querySelector('.records');
        if (garageView && recordsView) {
            garageView.style.display = 'block';
            recordsView.style.display = 'none';
        }
    });
    var toRecords = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('records');
    toRecords.addEventListener('click', function () {
        var garageView = document.querySelector('.garage');
        var recordsView = document.querySelector('.records');
        if (garageView && recordsView) {
            garageView.style.display = 'none';
            recordsView.style.display = 'block';
            console.log(1);
            (0,_records_records__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
    });
    headerButtons.append(toGarage, toRecords);
    header.append(headerButtons);
    var body = document.querySelector('body');
    body === null || body === void 0 ? void 0 : body.append(header);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);


/***/ }),

/***/ "./src/scripts/pages/records/components/render-table.ts":
/*!**************************************************************!*\
  !*** ./src/scripts/pages/records/components/render-table.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_controller_records__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-controller/records */ "./src/scripts/data-controller/records.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function renderTable() {
    return __awaiter(this, void 0, void 0, function () {
        var table, headerRow, tableHeaderNumber, tableHeaderCar, tableHeaderName, tableHeaderWins, tableHeaderTime, winners, counter, records;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    table = document.createElement('table');
                    table.className = 'winners';
                    headerRow = document.createElement('tr');
                    headerRow.className = 'winners__header';
                    tableHeaderNumber = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__number', '#');
                    tableHeaderCar = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__car', 'Car');
                    tableHeaderName = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__name', 'Name');
                    tableHeaderWins = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__wins', 'Wins');
                    tableHeaderTime = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__time', 'Time');
                    headerRow.append(tableHeaderNumber, tableHeaderCar, tableHeaderName, tableHeaderWins, tableHeaderTime);
                    table.append(headerRow);
                    return [4 /*yield*/, (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_0__.getWinners)()];
                case 1:
                    winners = _a.sent();
                    counter = 0;
                    winners.forEach(function (winner) { return __awaiter(_this, void 0, void 0, function () {
                        var dataRow, numberCell, carCell, carImgBlock, car, nameCell, winsCell, timeCell;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    counter += 1;
                                    dataRow = document.createElement('tr');
                                    numberCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)("".concat(counter));
                                    carCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)();
                                    carImgBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createImg)('assets/icon/carIcon.svg', 'car');
                                    carCell.append(carImgBlock);
                                    return [4 /*yield*/, (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_2__.getCar)(winner.id)];
                                case 1:
                                    car = _a.sent();
                                    nameCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(car.name);
                                    winsCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(winner.wins);
                                    timeCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(winner.time);
                                    dataRow.append(numberCell, carCell, nameCell, winsCell, timeCell);
                                    table.append(dataRow);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    records = document.querySelector('.records');
                    records === null || records === void 0 ? void 0 : records.append(table);
                    return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTable);


/***/ }),

/***/ "./src/scripts/pages/records/records.ts":
/*!**********************************************!*\
  !*** ./src/scripts/pages/records/records.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _components_render_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/render-table */ "./src/scripts/pages/records/components/render-table.ts");


function renderRecordsPage() {
    var body = document.querySelector('body');
    if (body) {
        var records_1 = document.querySelector('.records');
        if (records_1)
            records_1.remove();
    }
    var records = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records');
    // records.style.display = 'none';
    (0,_components_render_table__WEBPACK_IMPORTED_MODULE_1__["default"])();
    body === null || body === void 0 ? void 0 : body.append(records);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderRecordsPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_pages_garage_garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/pages/garage/garage */ "./src/scripts/pages/garage/garage.ts");
/* harmony import */ var _scripts_pages_records_records__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/pages/records/records */ "./src/scripts/pages/records/records.ts");
/* harmony import */ var _scripts_pages_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/pages/header */ "./src/scripts/pages/header.ts");
// require('file-loader?name=[name].[ext]!../index.html');



(0,_scripts_pages_header__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_scripts_pages_garage_garage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_scripts_pages_records_records__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.querySelector('.records').style.display = 'none';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBb0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9hbmltYXRpb24vZHJpdmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2NhcnMtbmFtZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2NhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9yZWNvcmRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9oZWxwZXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9jYXItbWFuYWdlbWVudC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvaGVhZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL3JlY29yZHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFjZVN0YXRzIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHN0YXJ0U3RvcENhciwgY2hlY2tFbmdpbmUgfSBmcm9tICcuLi9kYXRhLWNvbnRyb2xsZXIvZW5naW5lJztcblxuZnVuY3Rpb24gZ2V0RHJpdmVTdGVwKHZlbG9jaXR5OiBudW1iZXIpIHtcbiAgY29uc3QgdGltZSA9IHJhY2VTdGF0cy5tYXhBbmltYXRpb25UaW1lIC8gKHZlbG9jaXR5IC8gcmFjZVN0YXRzLm1pblBvc3NpYmxlVmVsb2NpdHkpO1xuICBjb25zdCB0b3RhbFN0ZXBzID0gcmFjZVN0YXRzLmZyYW1lc1BlclNlY29uZCAqIHRpbWU7XG5cbiAgY29uc3Qgc3RlcERpc3RhbmNlID0gcmFjZVN0YXRzLmRpc3RhbmNlIC8gdG90YWxTdGVwcztcbiAgcmV0dXJuIHtcbiAgICBzdGVwRGlzdGFuY2UsXG4gICAgdGltZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RHJpdmVTdGVwO1xuIiwiY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC8nO1xuXG5leHBvcnQgY29uc3QgcmFjZVN0YXRzID0ge1xuICBtYXhBbmltYXRpb25UaW1lOiA0MCxcbiAgbWluUG9zc2libGVWZWxvY2l0eTogNTAsXG4gIGZyYW1lc1BlclNlY29uZDogNjAsXG4gIGRpc3RhbmNlOiAxMDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGlVcmw7XG4iLCJleHBvcnQgY29uc3QgYnJhbmRzID0gWydQZXVnZW90JywgJ0JNVycsICdQb3JzY2hlJywgJ1poaWd1bGknLCAnQXVkaScsICdNZXJjZWRlcycsICdGaWF0JywgJ01BWicsICdCdWdnYXRpJywgJ1JvbGxzLVJveXNlJywgJ1BhZ2FuaSddO1xuZXhwb3J0IGNvbnN0IG1vZGVscyA9IFsnNDA2IENvdXBlJywgJ0FNRycsICdNLVNlcmllcycsICdSUycsICczLXNlcmllcycsICdBNicsICdDMjA4JywgJzkxMScsICdDYXltYW4nLCAnNFMnLCAnU3BvcnQnXTtcbiIsImltcG9ydCBhcGlVcmwgZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZ2FyYWdlVXJsID0gYCR7YXBpVXJsfWdhcmFnZS9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2FycygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnYXJhZ2VVcmwpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBhbGxDYXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBhbGxDYXJzO1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FycyBsaXN0Jyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXIoaWQ6IG51bWJlcikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWApO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXIoY2FyOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChnYXJhZ2VVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyKSxcbiAgfSk7XG5cbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAvLyBjb25zb2xlLmxvZygnd293Jyk7XG4gICAgcmV0dXJuIHJlcXVlc3QuanNvbigpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBjYXInKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNhcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBpZiAocmVxdWVzdC5vaykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdQZXJmZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGNvbG9yID0gJzEyMycpIHtcbiAgY29uc3QgY2FyID0ge1xuICAgIG5hbWUsXG4gICAgY29sb3IsXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyKSxcbiAgfSk7XG5cbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAvLyBjb25zb2xlLmxvZygnd293Jyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGNhcicpO1xuICB9XG59XG4iLCJpbXBvcnQgYXBpVXJsIGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGVuZ2luZVVybCA9IGAke2FwaVVybH1lbmdpbmVgO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRTdG9wQ2FyKGNhcklkOiBudW1iZXIsIHN0YXR1czogJ3N0YXJ0ZWQnIHwgJ3N0b3BwZWQnKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5naW5lVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYCR7Y2FySWR9YCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzdGF0dXMnLCBzdGF0dXMpO1xuICBjb25zdCBzdGFydEVuZ2luZVJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gIH0pO1xuICBpZiAoc3RhcnRFbmdpbmVSZXF1ZXN0Lm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdGFydEVuZ2luZVJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHsgdmVsb2NpdHkgfSA9IHJlc3BvbnNlO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tFbmdpbmUoY2FySWQ6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuZ2luZVVybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpZCcsIGAke2NhcklkfWApO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc3RhdHVzJywgJ2RyaXZlJyk7XG4gIGNvbnN0IHN0YXJ0RHJpdmVSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGlkOiBjYXJJZCxcbiAgICAgIHN0YXR1czogJ2RyaXZlJyxcbiAgICB9KSxcbiAgfSk7XG4gIHJldHVybiBzdGFydERyaXZlUmVxdWVzdC5vaztcbn1cbiIsImltcG9ydCBhcGlVcmwgZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3Qgd2lubmVyc1VybCA9IGAke2FwaVVybH13aW5uZXJzL2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5uZXJzKCkge1xuICBjb25zdCB3aW5uZXJzUmVxdWVzdCA9IGF3YWl0IGZldGNoKHdpbm5lcnNVcmwpO1xuICBpZiAod2lubmVyc1JlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gd2lubmVyc1JlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5uZXIoaWQ6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbm5lcnNVcmx9JHtpZH1gKTtcbiAgY29uc3Qgd2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmICh3aW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIHdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG4gIHJldHVybiB3aW5uZXJSZXF1ZXN0LnN0YXR1cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbm5lcihpZDogbnVtYmVyLCB0aW1lOiBudW1iZXIpIHtcbiAgY29uc3QgcmVjb3JkTm9kZSA9IHtcbiAgICBpZCxcbiAgICB3aW5zOiAxLFxuICAgIHRpbWUsXG4gIH07XG4gIGNvbnN0IGNyZWF0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh3aW5uZXJzVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlY29yZE5vZGUpLFxuICB9KTtcbiAgaWYgKGNyZWF0ZVdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gY3JlYXRlV2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVdpbm5lcihpZDpudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gYCR7d2lubmVyc1VybH0ke2lkfWA7XG4gIGNvbnN0IGRlbGV0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICB9KTtcbiAgaWYgKGRlbGV0ZVdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gZGVsZXRlV2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbm5lcihpZDogbnVtYmVyLCB3aW5zOiBudW1iZXIsIHRpbWU6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBgJHt3aW5uZXJzVXJsfSR7aWR9YDtcbiAgY29uc3QgdXBkYXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHdpbnMsXG4gICAgICB0aW1lLFxuICAgIH0pLFxuICB9KTtcbiAgaWYgKHVwZGF0ZVdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gdXBkYXRlV2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0Q29udGVudD86IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZiAodGV4dENvbnRlbnQpIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oYnV0dG9uTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NOYW1lID0gYGJ1dHRvbiBidXR0b25fXyR7YnV0dG9uTmFtZX1gO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25OYW1lO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nKHNyYzogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICBjb25zdCBpbWdCbG9jayA9IGNyZWF0ZU5vZGUoY2xhc3NOYW1lKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5jbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9X19pbWdgO1xuICBpbWcuc3JjID0gc3JjO1xuICBpbWdCbG9jay5hcHBlbmQoaW1nKTtcbiAgcmV0dXJuIGltZ0Jsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVIZWFkZXIoY2xhc3NOYW1lOiBzdHJpbmcsIHRleHRDb250ZW50OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVDZWxsKHRleHRDb250ZW50Pzogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBpZiAodGV4dENvbnRlbnQpIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNhciwgdXBkYXRlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHsgcmVuZGVyU3BlY2lmaWNDYXIgfSBmcm9tICcuL2dhcmFnZS1jYXJzJztcblxuZnVuY3Rpb24gcmVuZGVyQ2FyU2VsZWN0aW9uKGJsb2NrVHlwZTogc3RyaW5nKSB7XG4gIGNvbnN0IG1haW4gPSBjcmVhdGVOb2RlKGJsb2NrVHlwZSk7XG5cbiAgY29uc3Qgc2V0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgc2V0TmFtZS5jbGFzc05hbWUgPSBgJHtibG9ja1R5cGV9X19pbnB1dGA7XG5cbiAgY29uc3QgY29sb3IgPSBjcmVhdGVOb2RlKGAke2Jsb2NrVHlwZX1fX2NvbG9yYCk7XG5cbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKGJsb2NrVHlwZSk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBpZiAoYmxvY2tUeXBlID09PSAnY3JlYXRlJykge1xuICAgICAgY29uc3QgY2FyID0ge1xuICAgICAgICBuYW1lOiBzZXROYW1lLnZhbHVlLFxuICAgICAgICBjb2xvcjogJ2FhYWFhYScsXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3Q2FyID0gYXdhaXQgY3JlYXRlQ2FyKGNhcik7XG4gICAgICBjb25zdCBjYXJzSGVhZGVyQW1vdW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICAgICAgaWYgKGNhcnNIZWFkZXJBbW91bnRCbG9jayAmJiBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQpIHtcbiAgICAgICAgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ID0gYCR7K2NhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCArIDF9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhcnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzJyk7XG4gICAgICBpZiAoY2Fyc0Jsb2NrKSB7XG4gICAgICAgIGNhcnNCbG9jay5hcHBlbmQocmVuZGVyU3BlY2lmaWNDYXIobmV3Q2FyKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY2FySWQgfSA9IHNldE5hbWUuZGF0YXNldDtcbiAgICAgIGlmIChjYXJJZCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBzZXROYW1lO1xuICAgICAgICB1cGRhdGVDYXIoK2NhcklkLCB2YWx1ZSwgJ2Jyb3duJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBtYWluLmFwcGVuZChzZXROYW1lLCBjb2xvciwgYnV0dG9uKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNhck1hbmFnZW1lbnQoKSB7XG4gIGNvbnN0IGNhck1hbmFnZW1lbnRCbG9jayA9IGNyZWF0ZU5vZGUoJ2Nhci1tYW5hZ2VtZW50Jyk7XG4gIGNvbnN0IGNyZWF0ZUNhckJsb2NrID0gcmVuZGVyQ2FyU2VsZWN0aW9uKCdjcmVhdGUnKTtcbiAgY29uc3QgZWRpdENhckJsb2NrID0gcmVuZGVyQ2FyU2VsZWN0aW9uKCdlZGl0Jyk7XG5cbiAgY2FyTWFuYWdlbWVudEJsb2NrLmFwcGVuZChjcmVhdGVDYXJCbG9jaywgZWRpdENhckJsb2NrKTtcbiAgcmV0dXJuIGNhck1hbmFnZW1lbnRCbG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2FyTWFuYWdlbWVudDtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlSW1nIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBnZXRBbGxDYXJzLCByZW1vdmVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgeyBzdGFydFN0b3BDYXIsIGNoZWNrRW5naW5lIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2VuZ2luZSc7XG5pbXBvcnQgeyBjcmVhdGVXaW5uZXIsIGRlbGV0ZVdpbm5lciwgZ2V0V2lubmVyLCB1cGRhdGVXaW5uZXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgZ2V0RHJpdmVTdGVwIGZyb20gJy4uLy4uLy4uL2FuaW1hdGlvbi9kcml2ZSc7XG5pbXBvcnQgeyBJQ2FyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9jYXInO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXIgPSBjcmVhdGVOb2RlKCdoZWFkZXInKTtcbiAgY29uc3QgZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsID0gY3JlYXRlTm9kZSgnaGVhZGVyX19sYWJlbCcsICdHYXJhZ2UnKTtcbiAgY29uc3QgY2Fyc0Ftb3VudCA9IGF3YWl0IGdldEFsbENhcnMoKTtcbiAgY29uc3QgZ2FyYWdlQ2Fyc0hlYWRlclZhbHVlID0gY3JlYXRlTm9kZSgnaGVhZGVyX192YWx1ZScsIGNhcnNBbW91bnQubGVuZ3RoKTtcblxuICBnYXJhZ2VDYXJzSGVhZGVyLmFwcGVuZChnYXJhZ2VDYXJzSGVhZGVyTGFiZWwsIGdhcmFnZUNhcnNIZWFkZXJWYWx1ZSk7XG4gIHJldHVybiBnYXJhZ2VDYXJzSGVhZGVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50UGFnZSgpIHtcbiAgY29uc3QgcGFnZU51bWJlciA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJMYWJlbCA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX19sYWJlbCcsICdQYWdlICMnKTtcbiAgY29uc3QgcGFnZU51bWJlclZhbHVlID0gY3JlYXRlTm9kZSgncGFnZS1udW1iZXJfX3ZhbHVlJywgJzEnKTtcbiAgcGFnZU51bWJlci5hcHBlbmQocGFnZU51bWJlckxhYmVsLCBwYWdlTnVtYmVyVmFsdWUpO1xuICByZXR1cm4gcGFnZU51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNwZWNpZmljQ2FyKGNhcjogSUNhcikge1xuICBjb25zdCBjYXJCbG9jayA9IGNyZWF0ZU5vZGUoJ2Nhci1ibG9jaycpO1xuXG4gIGNvbnN0IGNhck1vZGlmaWVycyA9IGNyZWF0ZU5vZGUoJ21vZGlmaWVyJyk7XG4gIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc2VsZWN0Jyk7XG4gIHNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdF9faW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGVkaXRJbnB1dC52YWx1ZSA9IGNhci5uYW1lO1xuICAgIGVkaXRJbnB1dC5kYXRhc2V0LmNhcklkID0gYCR7Y2FyLmlkfWA7XG4gIH0pO1xuICBjb25zdCByZW1vdmVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3JlbW92ZScpO1xuICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQ2FyKGNhci5pZCk7XG4gICAgY2FyQmxvY2sucmVtb3ZlKCk7XG4gICAgY29uc3QgY2Fyc0hlYWRlckFtb3VudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICBpZiAoY2Fyc0hlYWRlckFtb3VudEJsb2NrICYmIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCkge1xuICAgICAgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ID0gYCR7K2NhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCAtIDF9YDtcbiAgICB9XG4gICAgZGVsZXRlV2lubmVyKGNhci5pZCk7XG4gIH0pO1xuICBjYXJNb2RpZmllcnMuYXBwZW5kKHNlbGVjdEJ1dHRvbiwgcmVtb3ZlQnV0dG9uKTtcblxuICBjb25zdCBjYXJOYW1lID0gY3JlYXRlTm9kZSgnbmFtZScsIGNhci5uYW1lKTtcbiAgY29uc3QgY2FySWNvbkJsb2NrID0gY3JlYXRlSW1nKCdhc3NldHMvaWNvbi9jYXJJY29uLnN2ZycsICdjYXInKTtcbiAgY29uc3QgZmxhZ0ljb25CbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vZmxhZy5zdmcnLCAnZmxhZycpO1xuICBjb25zdCBjb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlQnV0dG9uKCdzdGFydCcpO1xuICBzdGFydC5kYXRhc2V0LmNhcklkID0gYCR7Y2FyLmlkfWA7XG4gIGxldCBjYXJBbmltYXRpb25JbnRlcnZhbElkID0gMDtcbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgc3RhcnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uX19kaXNhYmxlZCcpO1xuICAgIGNvbnN0IHN0YXJ0UmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gYXdhaXQgc3RhcnRTdG9wQ2FyKGNhci5pZCwgJ3N0YXJ0ZWQnKTtcbiAgICBjb25zdCBkcml2ZUFuaW1hdGlvblN0ZXAgPSBnZXREcml2ZVN0ZXAodmVsb2NpdHkpO1xuXG4gICAgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoY2FySWNvbkJsb2NrKSB7XG4gICAgICAgIGlmICgrY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZS5zbGljZSgwLCAtMSkgPj0gMTAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgICAgICAgICBjb25zdCBlbmRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgICAgICAgY29uc3QgcmFjZUR1cmF0aW9uID0gKChlbmRSYWNlIC0gc3RhcnRSYWNlKSAvIDEwMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JhY2UnKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyYWNlJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmFjZScsICdmYWxzZScpO1xuICAgICAgICAgICAgYWxlcnQoYENhciAjICR7Y2FyLmlkfSBoYXMgd29uIVxcblRpbWU6ICR7cmFjZUR1cmF0aW9ufXNgKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcldpbiA9IGF3YWl0IGdldFdpbm5lcihjYXIuaWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyV2luKTtcbiAgICAgICAgICAgIGlmIChjYXJXaW4gPT09IDQwNCkge1xuICAgICAgICAgICAgICBjcmVhdGVXaW5uZXIoY2FyLmlkLCArcmFjZUR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVdpbm5lcihjYXIuaWQsIGNhcldpbi53aW5zICsgMSwgK3JhY2VEdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRlVmFsdWUgPSBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlO1xuICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVWYWx1ZSA9IGN1cnJlbnRUcmFuc2xhdGVWYWx1ZSA/IGAkeytjdXJyZW50VHJhbnNsYXRlVmFsdWUuc2xpY2UoMCwgLTEpICsgZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYCA6IGAke2RyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2V9JWA7XG4gICAgICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSBuZXdUcmFuc2xhdGVWYWx1ZTtcbiAgICAgIH1cbiAgICB9LCBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlKTtcbiAgICBjYXJCbG9jay5kYXRhc2V0LmludGVydmFsSWQgPSBgJHtjYXJBbmltYXRpb25JbnRlcnZhbElkfWA7XG4gICAgY29uc3QgaXNFbmdpbmVPayA9IGF3YWl0IGNoZWNrRW5naW5lKGNhci5pZCk7XG4gICAgaWYgKCFpc0VuZ2luZU9rKSBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICB9KTtcbiAgY29uc3Qgc3RvcCA9IGNyZWF0ZUJ1dHRvbignc3RvcCcpO1xuICBzdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSAnJztcbiAgICBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICB9KTtcbiAgY29udHJvbHMuYXBwZW5kKHN0YXJ0LCBzdG9wKTtcblxuICBjb25zdCByYWNlID0gY3JlYXRlTm9kZSgncmFjZScpO1xuICByYWNlLmFwcGVuZChjYXJJY29uQmxvY2ssIGZsYWdJY29uQmxvY2spO1xuXG4gIGNhckJsb2NrLmFwcGVuZChjYXJNb2RpZmllcnMsIGNhck5hbWUsIGNvbnRyb2xzLCByYWNlKTtcbiAgcmV0dXJuIGNhckJsb2NrO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJDYXJzKCkge1xuICBjb25zdCBjYXJzID0gY3JlYXRlTm9kZSgnY2FycycpO1xuICBjb25zdCBhbGxDYXJzID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICBhbGxDYXJzLmZvckVhY2goKGNhcjogSUNhcikgPT4ge1xuICAgIGNhcnMuYXBwZW5kKHJlbmRlclNwZWNpZmljQ2FyKGNhcikpO1xuICB9KTtcbiAgcmV0dXJuIGNhcnM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZUNhcnMoKSB7XG4gIGNvbnN0IGdhcmFnZUNhcnMgPSBjcmVhdGVOb2RlKCdnYXJhZ2UtY2FycycpO1xuICBjb25zdCBoZWFkZXIgPSBhd2FpdCByZW5kZXJIZWFkZXIoKTtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSByZW5kZXJDdXJyZW50UGFnZSgpO1xuICBjb25zdCBjYXJzID0gYXdhaXQgcmVuZGVyQ2FycygpO1xuXG4gIGdhcmFnZUNhcnMuYXBwZW5kKGhlYWRlciwgY3VycmVudFBhZ2UsIGNhcnMpO1xuICByZXR1cm4gZ2FyYWdlQ2Fycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlQ2FycztcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgYnJhbmRzLCBtb2RlbHMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycy1uYW1lJztcbmltcG9ydCB7IGNyZWF0ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IHJlbmRlclNwZWNpZmljQ2FyIH0gZnJvbSAnLi9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgeyBJQ2FyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9jYXInO1xuaW1wb3J0IHJlbmRlclJlY29yZHNQYWdlIGZyb20gJy4uLy4uL3JlY29yZHMvcmVjb3Jkcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckdhcmFnZUNvbnRyb2xzKCkge1xuICBjb25zdCBnYXJhZ2VDb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG5cbiAgY29uc3QgcmFjZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmFjZScpO1xuICByYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAndHJ1ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25fX3N0YXJ0JykuZm9yRWFjaCgoZWwpID0+IChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKSk7XG4gIH0pO1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVzZXQnKTtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zdG9wJykuZm9yRWFjaCgoZWwpID0+IChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKSkpXG4gIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdnZW5hcmF0ZScpO1xuICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYXJzVG9HZW5lcmF0ZSA9IDEwMDtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgY2Fyc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnMnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnNUb0dlbmVyYXRlOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJhbmRCcmFuZCA9IGJyYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBicmFuZHMubGVuZ3RoKV07XG4gICAgICBjb25zdCByYW5kTW9kZWwgPSBtb2RlbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9kZWxzLmxlbmd0aCldO1xuICAgICAgY29uc3QgY2FyTmFtZSA9IGAke3JhbmRCcmFuZH0gJHtyYW5kTW9kZWx9YDtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogY2FyTmFtZSxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgIH07XG4gICAgICByZXN1bHRzLnB1c2goY3JlYXRlQ2FyKGNhcikpO1xuICAgIH1cbiAgICBpZiAoY2Fyc0Jsb2NrKSB7XG4gICAgICBjb25zb2xlLmxvZyhhd2FpdCBQcm9taXNlLmFsbChyZXN1bHRzKSk7XG4gICAgICAoYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0cykpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGNhcnNCbG9jay5hcHBlbmQocmVuZGVyU3BlY2lmaWNDYXIoZWwpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBjYXJzSGVhZGVyQW1vdW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ICsgMTAwfWA7XG4gICAgfVxuICB9KTtcblxuICBnYXJhZ2VDb250cm9scy5hcHBlbmQocmFjZUJ1dHRvbiwgcmVzZXRCdXR0b24sIGdlbmVyYXRlQnV0dG9uKTtcbiAgcmV0dXJuIGdhcmFnZUNvbnRyb2xzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VDb250cm9scztcbiIsImltcG9ydCByZW5kZXJDYXJNYW5hZ2VtZW50IGZyb20gJy4vY29tcG9uZW50cy9jYXItbWFuYWdlbWVudCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ29udHJvbHMgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scyc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ2FycyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMnO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VQYWdlKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ2ZhbHNlJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGdhcmFnZVZpZXcgPSBjcmVhdGVOb2RlKCdnYXJhZ2UnKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBjb25zdCBjYXJNYW5hZ2VtZW50ID0gcmVuZGVyQ2FyTWFuYWdlbWVudCgpO1xuICAgIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gcmVuZGVyR2FyYWdlQ29udHJvbHMoKTtcbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuXG4gICAgZ2FyYWdlVmlldy5hcHBlbmQoY2FyTWFuYWdlbWVudCwgZ2FyYWdlQ29udHJvbHMsIGdhcmFnZUNhcnMpO1xuICAgIGJvZHkuYXBwZW5kKGdhcmFnZVZpZXcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZVBhZ2U7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJSZWNvcmRzUGFnZSBmcm9tICcuL3JlY29yZHMvcmVjb3Jkcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuICBjb25zdCBoZWFkZXJCdXR0b25zID0gY3JlYXRlTm9kZSgnYnV0dG9ucycpO1xuXG4gIGNvbnN0IHRvR2FyYWdlID0gY3JlYXRlQnV0dG9uKCdnYXJhZ2UnKTtcbiAgdG9HYXJhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCByZWNvcmRzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGdhcmFnZVZpZXcgJiYgcmVjb3Jkc1ZpZXcpIHtcbiAgICAgIGdhcmFnZVZpZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZWNvcmRzVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdG9SZWNvcmRzID0gY3JlYXRlQnV0dG9uKCdyZWNvcmRzJyk7XG4gIHRvUmVjb3Jkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IHJlY29yZHNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoZ2FyYWdlVmlldyAmJiByZWNvcmRzVmlldykge1xuICAgICAgZ2FyYWdlVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcmVjb3Jkc1ZpZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjb25zb2xlLmxvZygxKTtcbiAgICAgIHJlbmRlclJlY29yZHNQYWdlKCk7XG4gICAgfVxuICB9KTtcblxuICBoZWFkZXJCdXR0b25zLmFwcGVuZCh0b0dhcmFnZSwgdG9SZWNvcmRzKTtcblxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckJ1dHRvbnMpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHk/LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXI7XG4iLCJpbXBvcnQgeyBnZXRXaW5uZXIsIGdldFdpbm5lcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgeyBjcmVhdGVJbWcsIGNyZWF0ZVRhYmxlQ2VsbCwgY3JlYXRlVGFibGVIZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldENhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyVGFibGUoKSB7XG4gIC8vIGNvbnNvbGUubG9nKGF3YWl0IGdldFdpbm5lcig2KSk7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgdGFibGUuY2xhc3NOYW1lID0gJ3dpbm5lcnMnO1xuICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBoZWFkZXJSb3cuY2xhc3NOYW1lID0gJ3dpbm5lcnNfX2hlYWRlcic7XG4gIGNvbnN0IHRhYmxlSGVhZGVyTnVtYmVyID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fbnVtYmVyJywgJyMnKTtcbiAgY29uc3QgdGFibGVIZWFkZXJDYXIgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19jYXInLCAnQ2FyJyk7XG4gIGNvbnN0IHRhYmxlSGVhZGVyTmFtZSA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX25hbWUnLCAnTmFtZScpO1xuICBjb25zdCB0YWJsZUhlYWRlcldpbnMgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX193aW5zJywgJ1dpbnMnKTtcbiAgY29uc3QgdGFibGVIZWFkZXJUaW1lID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fdGltZScsICdUaW1lJyk7XG4gIGhlYWRlclJvdy5hcHBlbmQoXG4gICAgdGFibGVIZWFkZXJOdW1iZXIsXG4gICAgdGFibGVIZWFkZXJDYXIsXG4gICAgdGFibGVIZWFkZXJOYW1lLFxuICAgIHRhYmxlSGVhZGVyV2lucyxcbiAgICB0YWJsZUhlYWRlclRpbWUsXG4gICk7XG4gIHRhYmxlLmFwcGVuZChoZWFkZXJSb3cpO1xuICBjb25zdCB3aW5uZXJzID0gYXdhaXQgZ2V0V2lubmVycygpO1xuICBsZXQgY291bnRlciA9IDA7XG4gIHdpbm5lcnMuZm9yRWFjaChhc3luYyAod2lubmVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGRhdGFSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG51bWJlckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7Y291bnRlcn1gKTtcblxuICAgIGNvbnN0IGNhckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoKTtcbiAgICBjb25zdCBjYXJJbWdCbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vY2FySWNvbi5zdmcnLCAnY2FyJyk7XG4gICAgY2FyQ2VsbC5hcHBlbmQoY2FySW1nQmxvY2spO1xuXG4gICAgY29uc3QgY2FyID0gYXdhaXQgZ2V0Q2FyKHdpbm5lci5pZCk7XG4gICAgY29uc3QgbmFtZUNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoY2FyLm5hbWUpO1xuICAgIGNvbnN0IHdpbnNDZWxsID0gY3JlYXRlVGFibGVDZWxsKHdpbm5lci53aW5zKTtcbiAgICBjb25zdCB0aW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbCh3aW5uZXIudGltZSk7XG4gICAgZGF0YVJvdy5hcHBlbmQobnVtYmVyQ2VsbCwgY2FyQ2VsbCwgbmFtZUNlbGwsIHdpbnNDZWxsLCB0aW1lQ2VsbCk7XG4gICAgdGFibGUuYXBwZW5kKGRhdGFSb3cpO1xuICB9KTtcbiAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJyk7XG4gIHJlY29yZHM/LmFwcGVuZCh0YWJsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhYmxlO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlclRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXItdGFibGUnO1xuXG5mdW5jdGlvbiByZW5kZXJSZWNvcmRzUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBjb25zdCByZWNvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKTtcbiAgICBpZiAocmVjb3JkcykgcmVjb3Jkcy5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCByZWNvcmRzID0gY3JlYXRlTm9kZSgncmVjb3JkcycpO1xuICAvLyByZWNvcmRzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlbmRlclRhYmxlKCk7XG4gIGJvZHk/LmFwcGVuZChyZWNvcmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUmVjb3Jkc1BhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHJlcXVpcmUoJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4uL2luZGV4Lmh0bWwnKTtcblxuaW1wb3J0IHJlbmRlckdhcmFnZVBhZ2UgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9nYXJhZ2UnO1xuaW1wb3J0IHJlbmRlclJlY29yZHNQYWdlIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9yZWNvcmRzL3JlY29yZHMnO1xuaW1wb3J0IHJlbmRlckhlYWRlciBmcm9tICcuL3NjcmlwdHMvcGFnZXMvaGVhZGVyJztcblxucmVuZGVySGVhZGVyKCk7XG5yZW5kZXJHYXJhZ2VQYWdlKCk7XG5yZW5kZXJSZWNvcmRzUGFnZSgpO1xuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=