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
                        var endRace, raceDuration, carWin, recordsAmount, newTime, currentTranslateValue, newTranslateValue;
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
                                        recordsAmount = document.querySelector('.records__amount');
                                        if (recordsAmount && recordsAmount.textContent) {
                                            recordsAmount.textContent = "".concat(+recordsAmount.textContent + 1);
                                        }
                                    }
                                    else {
                                        newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
                                        (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.updateWinner)(car.id, carWin.wins + 1, +newTime);
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
        (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.startStopCar)(car.id, 'stopped');
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
                                    winsCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)("".concat(winner.wins));
                                    timeCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)("".concat(winner.time));
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

/***/ "./src/scripts/pages/records/components/winner-header.ts":
/*!***************************************************************!*\
  !*** ./src/scripts/pages/records/components/winner-header.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_controller_records__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-controller/records */ "./src/scripts/data-controller/records.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
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


function renderWinnerHeader() {
    return __awaiter(this, void 0, void 0, function () {
        var records, recordsBlock, recordsLabel, recordsValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_0__.getWinners)()];
                case 1:
                    records = _a.sent();
                    recordsBlock = document.querySelector('.records');
                    recordsLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('records__label', 'Records:');
                    recordsValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('records__amount', "".concat(records.length));
                    recordsBlock === null || recordsBlock === void 0 ? void 0 : recordsBlock.append(recordsLabel, recordsValue);
                    return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWinnerHeader);


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
/* harmony import */ var _components_winner_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/winner-header */ "./src/scripts/pages/records/components/winner-header.ts");



function renderRecordsPage() {
    var body = document.querySelector('body');
    if (body) {
        var records_1 = document.querySelector('.records');
        if (records_1)
            records_1.remove();
    }
    var records = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records');
    // records.style.display = 'none';
    (0,_components_winner_header__WEBPACK_IMPORTED_MODULE_2__["default"])();
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



(0,_scripts_pages_header__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_scripts_pages_garage_garage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_scripts_pages_records_records__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.querySelector('.records').style.display = 'none';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2NhcnMtbmFtZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2NhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9yZWNvcmRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9oZWxwZXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9jYXItbWFuYWdlbWVudC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvaGVhZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvd2lubmVyLWhlYWRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9yZWNvcmRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJhY2VTdGF0cyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBzdGFydFN0b3BDYXIsIGNoZWNrRW5naW5lIH0gZnJvbSAnLi4vZGF0YS1jb250cm9sbGVyL2VuZ2luZSc7XG5cbmZ1bmN0aW9uIGdldERyaXZlU3RlcCh2ZWxvY2l0eTogbnVtYmVyKSB7XG4gIGNvbnN0IHRpbWUgPSByYWNlU3RhdHMubWF4QW5pbWF0aW9uVGltZSAvICh2ZWxvY2l0eSAvIHJhY2VTdGF0cy5taW5Qb3NzaWJsZVZlbG9jaXR5KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IHJhY2VTdGF0cy5mcmFtZXNQZXJTZWNvbmQgKiB0aW1lO1xuXG4gIGNvbnN0IHN0ZXBEaXN0YW5jZSA9IHJhY2VTdGF0cy5kaXN0YW5jZSAvIHRvdGFsU3RlcHM7XG4gIHJldHVybiB7XG4gICAgc3RlcERpc3RhbmNlLFxuICAgIHRpbWUsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERyaXZlU3RlcDtcbiIsImNvbnN0IGFwaVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvJztcblxuZXhwb3J0IGNvbnN0IHJhY2VTdGF0cyA9IHtcbiAgbWF4QW5pbWF0aW9uVGltZTogNDAsXG4gIG1pblBvc3NpYmxlVmVsb2NpdHk6IDUwLFxuICBmcmFtZXNQZXJTZWNvbmQ6IDYwLFxuICBkaXN0YW5jZTogMTAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpVXJsO1xuIiwiZXhwb3J0IGNvbnN0IGJyYW5kcyA9IFsnUGV1Z2VvdCcsICdCTVcnLCAnUG9yc2NoZScsICdaaGlndWxpJywgJ0F1ZGknLCAnTWVyY2VkZXMnLCAnRmlhdCcsICdNQVonLCAnQnVnZ2F0aScsICdSb2xscy1Sb3lzZScsICdQYWdhbmknXTtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSBbJzQwNiBDb3VwZScsICdBTUcnLCAnTS1TZXJpZXMnLCAnUlMnLCAnMy1zZXJpZXMnLCAnQTYnLCAnQzIwOCcsICc5MTEnLCAnQ2F5bWFuJywgJzRTJywgJ1Nwb3J0J107XG4iLCJpbXBvcnQgYXBpVXJsIGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGdhcmFnZVVybCA9IGAke2FwaVVybH1nYXJhZ2UvYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENhcnMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2FyYWdlVXJsKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gYWxsQ2FycztcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhcnMgbGlzdCcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2FyKGNhcjogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfSkge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goZ2FyYWdlVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gIH0pO1xuXG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3dvdycpO1xuICAgIHJldHVybiByZXF1ZXN0Lmpzb24oKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgY2FyJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVDYXIoaWQ6IG51bWJlcikge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAvLyBjb25zb2xlLmxvZygnUGVyZmVjdCcpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXIoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBjb2xvciA9ICcxMjMnKSB7XG4gIGNvbnN0IGNhciA9IHtcbiAgICBuYW1lLFxuICAgIGNvbG9yLFxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gIH0pO1xuXG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3dvdycpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBjYXInKTtcbiAgfVxufVxuIiwiaW1wb3J0IGFwaVVybCBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBlbmdpbmVVcmwgPSBgJHthcGlVcmx9ZW5naW5lYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U3RvcENhcihjYXJJZDogbnVtYmVyLCBzdGF0dXM6ICdzdGFydGVkJyB8ICdzdG9wcGVkJykge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuZ2luZVVybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpZCcsIGAke2NhcklkfWApO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc3RhdHVzJywgc3RhdHVzKTtcbiAgY29uc3Qgc3RhcnRFbmdpbmVSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICB9KTtcbiAgaWYgKHN0YXJ0RW5naW5lUmVxdWVzdC5vaykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RhcnRFbmdpbmVSZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IHZlbG9jaXR5IH0gPSByZXNwb25zZTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRW5naW5lKGNhcklkOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmdpbmVVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnaWQnLCBgJHtjYXJJZH1gKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXR1cycsICdkcml2ZScpO1xuICBjb25zdCBzdGFydERyaXZlUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpZDogY2FySWQsXG4gICAgICBzdGF0dXM6ICdkcml2ZScsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gc3RhcnREcml2ZVJlcXVlc3Qub2s7XG59XG4iLCJpbXBvcnQgYXBpVXJsIGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IHdpbm5lcnNVcmwgPSBgJHthcGlVcmx9d2lubmVycy9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2lubmVycygpIHtcbiAgY29uc3Qgd2lubmVyc1JlcXVlc3QgPSBhd2FpdCBmZXRjaCh3aW5uZXJzVXJsKTtcbiAgaWYgKHdpbm5lcnNSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIHdpbm5lcnNSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2lubmVyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5uZXJzVXJsfSR7aWR9YCk7XG4gIGNvbnN0IHdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZiAod2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiB3aW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxuICByZXR1cm4gd2lubmVyUmVxdWVzdC5zdGF0dXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5uZXIoaWQ6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gIGNvbnN0IHJlY29yZE5vZGUgPSB7XG4gICAgaWQsXG4gICAgd2luczogMSxcbiAgICB0aW1lLFxuICB9O1xuICBjb25zdCBjcmVhdGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2god2lubmVyc1VybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWNvcmROb2RlKSxcbiAgfSk7XG4gIGlmIChjcmVhdGVXaW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXaW5uZXIoaWQ6bnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IGAke3dpbm5lcnNVcmx9JHtpZH1gO1xuICBjb25zdCBkZWxldGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSk7XG4gIGlmIChkZWxldGVXaW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIGRlbGV0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5uZXIoaWQ6IG51bWJlciwgd2luczogbnVtYmVyLCB0aW1lOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gYCR7d2lubmVyc1VybH0ke2lkfWA7XG4gIGNvbnN0IHVwZGF0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB3aW5zLFxuICAgICAgdGltZSxcbiAgICB9KSxcbiAgfSk7XG4gIGlmICh1cGRhdGVXaW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIHVwZGF0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShjbGFzc05hbWU6IHN0cmluZywgdGV4dENvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYgKHRleHRDb250ZW50KSBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ1dHRvbk5hbWU6IHN0cmluZykge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9IGBidXR0b24gYnV0dG9uX18ke2J1dHRvbk5hbWV9YDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uTmFtZTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZyhzcmM6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgaW1nQmxvY2sgPSBjcmVhdGVOb2RlKGNsYXNzTmFtZSk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfV9faW1nYDtcbiAgaW1nLnNyYyA9IHNyYztcbiAgaW1nQmxvY2suYXBwZW5kKGltZyk7XG4gIHJldHVybiBpbWdCbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0Q29udGVudDogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlQ2VsbCh0ZXh0Q29udGVudD86IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgaWYgKHRleHRDb250ZW50KSBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBjcmVhdGVDYXIsIHVwZGF0ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IHJlbmRlclNwZWNpZmljQ2FyIH0gZnJvbSAnLi9nYXJhZ2UtY2Fycyc7XG5cbmZ1bmN0aW9uIHJlbmRlckNhclNlbGVjdGlvbihibG9ja1R5cGU6IHN0cmluZykge1xuICBjb25zdCBtYWluID0gY3JlYXRlTm9kZShibG9ja1R5cGUpO1xuXG4gIGNvbnN0IHNldE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHNldE5hbWUuY2xhc3NOYW1lID0gYCR7YmxvY2tUeXBlfV9faW5wdXRgO1xuXG4gIGNvbnN0IGNvbG9yID0gY3JlYXRlTm9kZShgJHtibG9ja1R5cGV9X19jb2xvcmApO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihibG9ja1R5cGUpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGJsb2NrVHlwZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogc2V0TmFtZS52YWx1ZSxcbiAgICAgICAgY29sb3I6ICdhYWFhYWEnLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IG5ld0NhciA9IGF3YWl0IGNyZWF0ZUNhcihjYXIpO1xuICAgICAgY29uc3QgY2Fyc0hlYWRlckFtb3VudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgKyAxfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBjYXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FycycpO1xuICAgICAgaWYgKGNhcnNCbG9jaykge1xuICAgICAgICBjYXJzQmxvY2suYXBwZW5kKHJlbmRlclNwZWNpZmljQ2FyKG5ld0NhcikpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNhcklkIH0gPSBzZXROYW1lLmRhdGFzZXQ7XG4gICAgICBpZiAoY2FySWQpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gc2V0TmFtZTtcbiAgICAgICAgdXBkYXRlQ2FyKCtjYXJJZCwgdmFsdWUsICdicm93bicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbWFpbi5hcHBlbmQoc2V0TmFtZSwgY29sb3IsIGJ1dHRvbik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDYXJNYW5hZ2VtZW50KCkge1xuICBjb25zdCBjYXJNYW5hZ2VtZW50QmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItbWFuYWdlbWVudCcpO1xuICBjb25zdCBjcmVhdGVDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignY3JlYXRlJyk7XG4gIGNvbnN0IGVkaXRDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignZWRpdCcpO1xuXG4gIGNhck1hbmFnZW1lbnRCbG9jay5hcHBlbmQoY3JlYXRlQ2FyQmxvY2ssIGVkaXRDYXJCbG9jayk7XG4gIHJldHVybiBjYXJNYW5hZ2VtZW50QmxvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhck1hbmFnZW1lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUltZyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2FycywgcmVtb3ZlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHsgc3RhcnRTdG9wQ2FyLCBjaGVja0VuZ2luZSB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9lbmdpbmUnO1xuaW1wb3J0IHsgY3JlYXRlV2lubmVyLCBkZWxldGVXaW5uZXIsIGdldFdpbm5lciwgdXBkYXRlV2lubmVyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IGdldERyaXZlU3RlcCBmcm9tICcuLi8uLi8uLi9hbmltYXRpb24vZHJpdmUnO1xuaW1wb3J0IHsgSUNhciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY2FyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyID0gY3JlYXRlTm9kZSgnaGVhZGVyJyk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJMYWJlbCA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fbGFiZWwnLCAnR2FyYWdlJyk7XG4gIGNvbnN0IGNhcnNBbW91bnQgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fdmFsdWUnLCBjYXJzQW1vdW50Lmxlbmd0aCk7XG5cbiAgZ2FyYWdlQ2Fyc0hlYWRlci5hcHBlbmQoZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsLCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUpO1xuICByZXR1cm4gZ2FyYWdlQ2Fyc0hlYWRlcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBhZ2UoKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcicpO1xuICBjb25zdCBwYWdlTnVtYmVyTGFiZWwgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fbGFiZWwnLCAnUGFnZSAjJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX192YWx1ZScsICcxJyk7XG4gIHBhZ2VOdW1iZXIuYXBwZW5kKHBhZ2VOdW1iZXJMYWJlbCwgcGFnZU51bWJlclZhbHVlKTtcbiAgcmV0dXJuIHBhZ2VOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTcGVjaWZpY0NhcihjYXI6IElDYXIpIHtcbiAgY29uc3QgY2FyQmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItYmxvY2snKTtcblxuICBjb25zdCBjYXJNb2RpZmllcnMgPSBjcmVhdGVOb2RlKCdtb2RpZmllcicpO1xuICBjb25zdCBzZWxlY3RCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3NlbGVjdCcpO1xuICBzZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRfX2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBlZGl0SW5wdXQudmFsdWUgPSBjYXIubmFtZTtcbiAgICBlZGl0SW5wdXQuZGF0YXNldC5jYXJJZCA9IGAke2Nhci5pZH1gO1xuICB9KTtcbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyZW1vdmUnKTtcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUNhcihjYXIuaWQpO1xuICAgIGNhckJsb2NrLnJlbW92ZSgpO1xuICAgIGNvbnN0IGNhcnNIZWFkZXJBbW91bnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZhbHVlJyk7XG4gICAgaWYgKGNhcnNIZWFkZXJBbW91bnRCbG9jayAmJiBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQpIHtcbiAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgLSAxfWA7XG4gICAgfVxuICAgIGRlbGV0ZVdpbm5lcihjYXIuaWQpO1xuICB9KTtcbiAgY2FyTW9kaWZpZXJzLmFwcGVuZChzZWxlY3RCdXR0b24sIHJlbW92ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2FyTmFtZSA9IGNyZWF0ZU5vZGUoJ25hbWUnLCBjYXIubmFtZSk7XG4gIGNvbnN0IGNhckljb25CbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vY2FySWNvbi5zdmcnLCAnY2FyJyk7XG4gIGNvbnN0IGZsYWdJY29uQmxvY2sgPSBjcmVhdGVJbWcoJ2Fzc2V0cy9pY29uL2ZsYWcuc3ZnJywgJ2ZsYWcnKTtcbiAgY29uc3QgY29udHJvbHMgPSBjcmVhdGVOb2RlKCdjb250cm9scycpO1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJ1dHRvbignc3RhcnQnKTtcbiAgc3RhcnQuZGF0YXNldC5jYXJJZCA9IGAke2Nhci5pZH1gO1xuICBsZXQgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCA9IDA7XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9fZGlzYWJsZWQnKTtcbiAgICBjb25zdCBzdGFydFJhY2UgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGF3YWl0IHN0YXJ0U3RvcENhcihjYXIuaWQsICdzdGFydGVkJyk7XG4gICAgY29uc3QgZHJpdmVBbmltYXRpb25TdGVwID0gZ2V0RHJpdmVTdGVwKHZlbG9jaXR5KTtcblxuICAgIGNhckFuaW1hdGlvbkludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGNhckljb25CbG9jaykge1xuICAgICAgICBpZiAoK2Nhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUuc2xpY2UoMCwgLTEpID49IDEwMCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gICAgICAgICAgY29uc3QgZW5kUmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICAgIGNvbnN0IHJhY2VEdXJhdGlvbiA9ICgoZW5kUmFjZSAtIHN0YXJ0UmFjZSkgLyAxMDAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyYWNlJykgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmFjZScpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGFsZXJ0KGBDYXIgIyAke2Nhci5pZH0gaGFzIHdvbiFcXG5UaW1lOiAke3JhY2VEdXJhdGlvbn1zYCk7XG4gICAgICAgICAgICBjb25zdCBjYXJXaW4gPSBhd2FpdCBnZXRXaW5uZXIoY2FyLmlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcldpbik7XG4gICAgICAgICAgICBpZiAoY2FyV2luID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgY3JlYXRlV2lubmVyKGNhci5pZCwgK3JhY2VEdXJhdGlvbik7XG4gICAgICAgICAgICAgIGNvbnN0IHJlY29yZHNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3Jkc19fYW1vdW50Jyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmRzQW1vdW50ICYmIHJlY29yZHNBbW91bnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmRzQW1vdW50LnRleHRDb250ZW50ID0gYCR7K3JlY29yZHNBbW91bnQudGV4dENvbnRlbnQgKyAxfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1RpbWUgPSArcmFjZUR1cmF0aW9uIDwgY2FyV2luLnRpbWUgPyArcmFjZUR1cmF0aW9uIDogY2FyV2luLnRpbWU7XG4gICAgICAgICAgICAgIHVwZGF0ZVdpbm5lcihjYXIuaWQsIGNhcldpbi53aW5zICsgMSwgK25ld1RpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZVZhbHVlID0gY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZTtcbiAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlVmFsdWUgPSBjdXJyZW50VHJhbnNsYXRlVmFsdWUgPyBgJHsrY3VycmVudFRyYW5zbGF0ZVZhbHVlLnNsaWNlKDAsIC0xKSArIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2V9JWAgOiBgJHtkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgO1xuICAgICAgICBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlID0gbmV3VHJhbnNsYXRlVmFsdWU7XG4gICAgICB9XG4gICAgfSwgZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZSk7XG4gICAgY2FyQmxvY2suZGF0YXNldC5pbnRlcnZhbElkID0gYCR7Y2FyQW5pbWF0aW9uSW50ZXJ2YWxJZH1gO1xuICAgIGNvbnN0IGlzRW5naW5lT2sgPSBhd2FpdCBjaGVja0VuZ2luZShjYXIuaWQpO1xuICAgIGlmICghaXNFbmdpbmVPaykgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgfSk7XG4gIGNvbnN0IHN0b3AgPSBjcmVhdGVCdXR0b24oJ3N0b3AnKTtcbiAgc3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdGFydFN0b3BDYXIoY2FyLmlkLCAnc3RvcHBlZCcpO1xuICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSAnJztcbiAgICBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICB9KTtcbiAgY29udHJvbHMuYXBwZW5kKHN0YXJ0LCBzdG9wKTtcblxuICBjb25zdCByYWNlID0gY3JlYXRlTm9kZSgncmFjZScpO1xuICByYWNlLmFwcGVuZChjYXJJY29uQmxvY2ssIGZsYWdJY29uQmxvY2spO1xuXG4gIGNhckJsb2NrLmFwcGVuZChjYXJNb2RpZmllcnMsIGNhck5hbWUsIGNvbnRyb2xzLCByYWNlKTtcbiAgcmV0dXJuIGNhckJsb2NrO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJDYXJzKCkge1xuICBjb25zdCBjYXJzID0gY3JlYXRlTm9kZSgnY2FycycpO1xuICBjb25zdCBhbGxDYXJzID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICBhbGxDYXJzLmZvckVhY2goKGNhcjogSUNhcikgPT4ge1xuICAgIGNhcnMuYXBwZW5kKHJlbmRlclNwZWNpZmljQ2FyKGNhcikpO1xuICB9KTtcbiAgcmV0dXJuIGNhcnM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZUNhcnMoKSB7XG4gIGNvbnN0IGdhcmFnZUNhcnMgPSBjcmVhdGVOb2RlKCdnYXJhZ2UtY2FycycpO1xuICBjb25zdCBoZWFkZXIgPSBhd2FpdCByZW5kZXJIZWFkZXIoKTtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSByZW5kZXJDdXJyZW50UGFnZSgpO1xuICBjb25zdCBjYXJzID0gYXdhaXQgcmVuZGVyQ2FycygpO1xuXG4gIGdhcmFnZUNhcnMuYXBwZW5kKGhlYWRlciwgY3VycmVudFBhZ2UsIGNhcnMpO1xuICByZXR1cm4gZ2FyYWdlQ2Fycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlQ2FycztcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgYnJhbmRzLCBtb2RlbHMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycy1uYW1lJztcbmltcG9ydCB7IGNyZWF0ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IHJlbmRlclNwZWNpZmljQ2FyIH0gZnJvbSAnLi9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgeyBJQ2FyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9jYXInO1xuaW1wb3J0IHJlbmRlclJlY29yZHNQYWdlIGZyb20gJy4uLy4uL3JlY29yZHMvcmVjb3Jkcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckdhcmFnZUNvbnRyb2xzKCkge1xuICBjb25zdCBnYXJhZ2VDb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG5cbiAgY29uc3QgcmFjZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmFjZScpO1xuICByYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAndHJ1ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25fX3N0YXJ0JykuZm9yRWFjaCgoZWwpID0+IChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKSk7XG4gIH0pO1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVzZXQnKTtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zdG9wJykuZm9yRWFjaCgoZWwpID0+IChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKSkpXG4gIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdnZW5hcmF0ZScpO1xuICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYXJzVG9HZW5lcmF0ZSA9IDEwMDtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgY2Fyc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnMnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnNUb0dlbmVyYXRlOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJhbmRCcmFuZCA9IGJyYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBicmFuZHMubGVuZ3RoKV07XG4gICAgICBjb25zdCByYW5kTW9kZWwgPSBtb2RlbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9kZWxzLmxlbmd0aCldO1xuICAgICAgY29uc3QgY2FyTmFtZSA9IGAke3JhbmRCcmFuZH0gJHtyYW5kTW9kZWx9YDtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogY2FyTmFtZSxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgIH07XG4gICAgICByZXN1bHRzLnB1c2goY3JlYXRlQ2FyKGNhcikpO1xuICAgIH1cbiAgICBpZiAoY2Fyc0Jsb2NrKSB7XG4gICAgICBjb25zb2xlLmxvZyhhd2FpdCBQcm9taXNlLmFsbChyZXN1bHRzKSk7XG4gICAgICAoYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0cykpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGNhcnNCbG9jay5hcHBlbmQocmVuZGVyU3BlY2lmaWNDYXIoZWwpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBjYXJzSGVhZGVyQW1vdW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ICsgMTAwfWA7XG4gICAgfVxuICB9KTtcblxuICBnYXJhZ2VDb250cm9scy5hcHBlbmQocmFjZUJ1dHRvbiwgcmVzZXRCdXR0b24sIGdlbmVyYXRlQnV0dG9uKTtcbiAgcmV0dXJuIGdhcmFnZUNvbnRyb2xzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VDb250cm9scztcbiIsImltcG9ydCByZW5kZXJDYXJNYW5hZ2VtZW50IGZyb20gJy4vY29tcG9uZW50cy9jYXItbWFuYWdlbWVudCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ29udHJvbHMgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scyc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ2FycyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMnO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VQYWdlKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ2ZhbHNlJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGdhcmFnZVZpZXcgPSBjcmVhdGVOb2RlKCdnYXJhZ2UnKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBjb25zdCBjYXJNYW5hZ2VtZW50ID0gcmVuZGVyQ2FyTWFuYWdlbWVudCgpO1xuICAgIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gcmVuZGVyR2FyYWdlQ29udHJvbHMoKTtcbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuXG4gICAgZ2FyYWdlVmlldy5hcHBlbmQoY2FyTWFuYWdlbWVudCwgZ2FyYWdlQ29udHJvbHMsIGdhcmFnZUNhcnMpO1xuICAgIGJvZHkuYXBwZW5kKGdhcmFnZVZpZXcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZVBhZ2U7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJSZWNvcmRzUGFnZSBmcm9tICcuL3JlY29yZHMvcmVjb3Jkcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuICBjb25zdCBoZWFkZXJCdXR0b25zID0gY3JlYXRlTm9kZSgnYnV0dG9ucycpO1xuXG4gIGNvbnN0IHRvR2FyYWdlID0gY3JlYXRlQnV0dG9uKCdnYXJhZ2UnKTtcbiAgdG9HYXJhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCByZWNvcmRzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGdhcmFnZVZpZXcgJiYgcmVjb3Jkc1ZpZXcpIHtcbiAgICAgIGdhcmFnZVZpZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZWNvcmRzVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdG9SZWNvcmRzID0gY3JlYXRlQnV0dG9uKCdyZWNvcmRzJyk7XG4gIHRvUmVjb3Jkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IHJlY29yZHNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoZ2FyYWdlVmlldyAmJiByZWNvcmRzVmlldykge1xuICAgICAgZ2FyYWdlVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcmVjb3Jkc1ZpZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjb25zb2xlLmxvZygxKTtcbiAgICAgIHJlbmRlclJlY29yZHNQYWdlKCk7XG4gICAgfVxuICB9KTtcblxuICBoZWFkZXJCdXR0b25zLmFwcGVuZCh0b0dhcmFnZSwgdG9SZWNvcmRzKTtcblxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckJ1dHRvbnMpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHk/LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXI7XG4iLCJpbXBvcnQgeyBnZXRXaW5uZXIsIGdldFdpbm5lcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgeyBjcmVhdGVJbWcsIGNyZWF0ZVRhYmxlQ2VsbCwgY3JlYXRlVGFibGVIZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldENhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCBJV2lubmVyIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvd2lubmVyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyVGFibGUoKSB7XG4gIC8vIGNvbnNvbGUubG9nKGF3YWl0IGdldFdpbm5lcig2KSk7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgdGFibGUuY2xhc3NOYW1lID0gJ3dpbm5lcnMnO1xuICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBoZWFkZXJSb3cuY2xhc3NOYW1lID0gJ3dpbm5lcnNfX2hlYWRlcic7XG4gIGNvbnN0IHRhYmxlSGVhZGVyTnVtYmVyID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fbnVtYmVyJywgJyMnKTtcbiAgY29uc3QgdGFibGVIZWFkZXJDYXIgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19jYXInLCAnQ2FyJyk7XG4gIGNvbnN0IHRhYmxlSGVhZGVyTmFtZSA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX25hbWUnLCAnTmFtZScpO1xuICBjb25zdCB0YWJsZUhlYWRlcldpbnMgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX193aW5zJywgJ1dpbnMnKTtcbiAgY29uc3QgdGFibGVIZWFkZXJUaW1lID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fdGltZScsICdUaW1lJyk7XG4gIGhlYWRlclJvdy5hcHBlbmQoXG4gICAgdGFibGVIZWFkZXJOdW1iZXIsXG4gICAgdGFibGVIZWFkZXJDYXIsXG4gICAgdGFibGVIZWFkZXJOYW1lLFxuICAgIHRhYmxlSGVhZGVyV2lucyxcbiAgICB0YWJsZUhlYWRlclRpbWUsXG4gICk7XG4gIHRhYmxlLmFwcGVuZChoZWFkZXJSb3cpO1xuICBjb25zdCB3aW5uZXJzID0gYXdhaXQgZ2V0V2lubmVycygpO1xuICBsZXQgY291bnRlciA9IDA7XG4gIHdpbm5lcnMuZm9yRWFjaChhc3luYyAod2lubmVyOiBJV2lubmVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGRhdGFSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG51bWJlckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7Y291bnRlcn1gKTtcblxuICAgIGNvbnN0IGNhckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoKTtcbiAgICBjb25zdCBjYXJJbWdCbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vY2FySWNvbi5zdmcnLCAnY2FyJyk7XG4gICAgY2FyQ2VsbC5hcHBlbmQoY2FySW1nQmxvY2spO1xuXG4gICAgY29uc3QgY2FyID0gYXdhaXQgZ2V0Q2FyKHdpbm5lci5pZCk7XG4gICAgY29uc3QgbmFtZUNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoY2FyLm5hbWUpO1xuICAgIGNvbnN0IHdpbnNDZWxsID0gY3JlYXRlVGFibGVDZWxsKGAke3dpbm5lci53aW5zfWApO1xuICAgIGNvbnN0IHRpbWVDZWxsID0gY3JlYXRlVGFibGVDZWxsKGAke3dpbm5lci50aW1lfWApO1xuICAgIGRhdGFSb3cuYXBwZW5kKG51bWJlckNlbGwsIGNhckNlbGwsIG5hbWVDZWxsLCB3aW5zQ2VsbCwgdGltZUNlbGwpO1xuICAgIHRhYmxlLmFwcGVuZChkYXRhUm93KTtcbiAgfSk7XG4gIGNvbnN0IHJlY29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpO1xuICByZWNvcmRzPy5hcHBlbmQodGFibGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYWJsZTtcbiIsImltcG9ydCB7IGdldFdpbm5lcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcldpbm5lckhlYWRlcigpIHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGdldFdpbm5lcnMoKTtcbiAgY29uc3QgcmVjb3Jkc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKTtcbiAgY29uc3QgcmVjb3Jkc0xhYmVsID0gY3JlYXRlTm9kZSgncmVjb3Jkc19fbGFiZWwnLCAnUmVjb3JkczonKTtcbiAgY29uc3QgcmVjb3Jkc1ZhbHVlID0gY3JlYXRlTm9kZSgncmVjb3Jkc19fYW1vdW50JywgYCR7cmVjb3Jkcy5sZW5ndGh9YCk7XG4gIHJlY29yZHNCbG9jaz8uYXBwZW5kKHJlY29yZHNMYWJlbCwgcmVjb3Jkc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2lubmVySGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlclRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXItdGFibGUnO1xuaW1wb3J0IHJlbmRlcldpbm5lckhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvd2lubmVyLWhlYWRlcic7XG5cbmZ1bmN0aW9uIHJlbmRlclJlY29yZHNQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBpZiAoYm9keSkge1xuICAgIGNvbnN0IHJlY29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpO1xuICAgIGlmIChyZWNvcmRzKSByZWNvcmRzLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IHJlY29yZHMgPSBjcmVhdGVOb2RlKCdyZWNvcmRzJyk7XG4gIC8vIHJlY29yZHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVuZGVyV2lubmVySGVhZGVyKCk7XG4gIHJlbmRlclRhYmxlKCk7XG4gIGJvZHk/LmFwcGVuZChyZWNvcmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUmVjb3Jkc1BhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJHYXJhZ2VQYWdlIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9nYXJhZ2UvZ2FyYWdlJztcbmltcG9ydCByZW5kZXJSZWNvcmRzUGFnZSBmcm9tICcuL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9yZWNvcmRzJztcbmltcG9ydCByZW5kZXJIZWFkZXIgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL2hlYWRlcic7XG5cbnJlbmRlckhlYWRlcigpO1xucmVuZGVyR2FyYWdlUGFnZSgpO1xucmVuZGVyUmVjb3Jkc1BhZ2UoKTtcbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9