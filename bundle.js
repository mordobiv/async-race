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
    var records = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records');
    records.style.display = 'none';
    var body = document.querySelector('body');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDOzs7OztDQUN4QjtBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRGdCO0FBQ1M7QUFFcEQsU0FBUyxpQkFBaUI7SUFDeEIsSUFBTSxPQUFPLEdBQUcsb0RBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDL0IsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxvRUFBVyxFQUFFLENBQUM7SUFDZCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ1hqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQSwwREFBMEQ7QUFFRztBQUNHO0FBQ2Q7QUFFbEQsaUVBQVksRUFBRSxDQUFDO0FBQ2Ysd0VBQWdCLEVBQUUsQ0FBQztBQUNuQiwwRUFBaUIsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbi9kcml2ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvY29uZmlnLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvY2Fycy1uYW1lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvY2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL3JlY29yZHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2Nhci1tYW5hZ2VtZW50LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9nYXJhZ2UtY2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNvbnRyb2xzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvZ2FyYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvY29tcG9uZW50cy9yZW5kZXItdGFibGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYWNlU3RhdHMgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgc3RhcnRTdG9wQ2FyLCBjaGVja0VuZ2luZSB9IGZyb20gJy4uL2RhdGEtY29udHJvbGxlci9lbmdpbmUnO1xuXG5mdW5jdGlvbiBnZXREcml2ZVN0ZXAodmVsb2NpdHk6IG51bWJlcikge1xuICBjb25zdCB0aW1lID0gcmFjZVN0YXRzLm1heEFuaW1hdGlvblRpbWUgLyAodmVsb2NpdHkgLyByYWNlU3RhdHMubWluUG9zc2libGVWZWxvY2l0eSk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSByYWNlU3RhdHMuZnJhbWVzUGVyU2Vjb25kICogdGltZTtcblxuICBjb25zdCBzdGVwRGlzdGFuY2UgPSByYWNlU3RhdHMuZGlzdGFuY2UgLyB0b3RhbFN0ZXBzO1xuICByZXR1cm4ge1xuICAgIHN0ZXBEaXN0YW5jZSxcbiAgICB0aW1lLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREcml2ZVN0ZXA7XG4iLCJjb25zdCBhcGlVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwLyc7XG5cbmV4cG9ydCBjb25zdCByYWNlU3RhdHMgPSB7XG4gIG1heEFuaW1hdGlvblRpbWU6IDQwLFxuICBtaW5Qb3NzaWJsZVZlbG9jaXR5OiA1MCxcbiAgZnJhbWVzUGVyU2Vjb25kOiA2MCxcbiAgZGlzdGFuY2U6IDEwMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVVybDtcbiIsImV4cG9ydCBjb25zdCBicmFuZHMgPSBbJ1BldWdlb3QnLCAnQk1XJywgJ1BvcnNjaGUnLCAnWmhpZ3VsaScsICdBdWRpJywgJ01lcmNlZGVzJywgJ0ZpYXQnLCAnTUFaJywgJ0J1Z2dhdGknLCAnUm9sbHMtUm95c2UnLCAnUGFnYW5pJ107XG5leHBvcnQgY29uc3QgbW9kZWxzID0gWyc0MDYgQ291cGUnLCAnQU1HJywgJ00tU2VyaWVzJywgJ1JTJywgJzMtc2VyaWVzJywgJ0E2JywgJ0MyMDgnLCAnOTExJywgJ0NheW1hbicsICc0UycsICdTcG9ydCddO1xuIiwiaW1wb3J0IGFwaVVybCBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBnYXJhZ2VVcmwgPSBgJHthcGlVcmx9Z2FyYWdlL2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDYXJzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdhcmFnZVVybCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGFsbENhcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGFsbENhcnM7XG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcignQ2Fubm90IGdldCBjYXJzIGxpc3QnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcihjYXI6IHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0pIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGdhcmFnZVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcblxuICBpZiAocmVxdWVzdC5vaykge1xuICAgIC8vIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgICByZXR1cm4gcmVxdWVzdC5qc29uKCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGNhcicpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ2FyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1BlcmZlY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FyKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgY29sb3IgPSAnMTIzJykge1xuICBjb25zdCBjYXIgPSB7XG4gICAgbmFtZSxcbiAgICBjb2xvcixcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcblxuICBpZiAocmVxdWVzdC5vaykge1xuICAgIC8vIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgY2FyJyk7XG4gIH1cbn1cbiIsImltcG9ydCBhcGlVcmwgZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZW5naW5lVXJsID0gYCR7YXBpVXJsfWVuZ2luZWA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydFN0b3BDYXIoY2FySWQ6IG51bWJlciwgc3RhdHVzOiAnc3RhcnRlZCcgfCAnc3RvcHBlZCcpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmdpbmVVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnaWQnLCBgJHtjYXJJZH1gKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXR1cycsIHN0YXR1cyk7XG4gIGNvbnN0IHN0YXJ0RW5naW5lUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSk7XG4gIGlmIChzdGFydEVuZ2luZVJlcXVlc3Qub2spIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0YXJ0RW5naW5lUmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgeyB2ZWxvY2l0eSB9ID0gcmVzcG9uc2U7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0VuZ2luZShjYXJJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5naW5lVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYCR7Y2FySWR9YCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzdGF0dXMnLCAnZHJpdmUnKTtcbiAgY29uc3Qgc3RhcnREcml2ZVJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaWQ6IGNhcklkLFxuICAgICAgc3RhdHVzOiAnZHJpdmUnLFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIHN0YXJ0RHJpdmVSZXF1ZXN0Lm9rO1xufVxuIiwiaW1wb3J0IGFwaVVybCBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCB3aW5uZXJzVXJsID0gYCR7YXBpVXJsfXdpbm5lcnMvYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbm5lcnMoKSB7XG4gIGNvbnN0IHdpbm5lcnNSZXF1ZXN0ID0gYXdhaXQgZmV0Y2god2lubmVyc1VybCk7XG4gIGlmICh3aW5uZXJzUmVxdWVzdC5vaykge1xuICAgIHJldHVybiB3aW5uZXJzUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbm5lcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7d2lubmVyc1VybH0ke2lkfWApO1xuICBjb25zdCB3aW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKHdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gd2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbiAgcmV0dXJuIHdpbm5lclJlcXVlc3Quc3RhdHVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2lubmVyKGlkOiBudW1iZXIsIHRpbWU6IG51bWJlcikge1xuICBjb25zdCByZWNvcmROb2RlID0ge1xuICAgIGlkLFxuICAgIHdpbnM6IDEsXG4gICAgdGltZSxcbiAgfTtcbiAgY29uc3QgY3JlYXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHdpbm5lcnNVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVjb3JkTm9kZSksXG4gIH0pO1xuICBpZiAoY3JlYXRlV2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiBjcmVhdGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlV2lubmVyKGlkOm51bWJlcikge1xuICBjb25zdCB1cmwgPSBgJHt3aW5uZXJzVXJsfSR7aWR9YDtcbiAgY29uc3QgZGVsZXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pO1xuICBpZiAoZGVsZXRlV2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiBkZWxldGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2lubmVyKGlkOiBudW1iZXIsIHdpbnM6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IGAke3dpbm5lcnNVcmx9JHtpZH1gO1xuICBjb25zdCB1cGRhdGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgd2lucyxcbiAgICAgIHRpbWUsXG4gICAgfSksXG4gIH0pO1xuICBpZiAodXBkYXRlV2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiB1cGRhdGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoY2xhc3NOYW1lOiBzdHJpbmcsIHRleHRDb250ZW50Pzogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlmICh0ZXh0Q29udGVudCkgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidXR0b25OYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnV0dG9uIGJ1dHRvbl9fJHtidXR0b25OYW1lfWA7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk5hbWU7XG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWcoc3JjOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGltZ0Jsb2NrID0gY3JlYXRlTm9kZShjbGFzc05hbWUpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLmNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX1fX2ltZ2A7XG4gIGltZy5zcmMgPSBzcmM7XG4gIGltZ0Jsb2NrLmFwcGVuZChpbWcpO1xuICByZXR1cm4gaW1nQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcihjbGFzc05hbWU6IHN0cmluZywgdGV4dENvbnRlbnQ6IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZUNlbGwodGV4dENvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGlmICh0ZXh0Q29udGVudCkgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyLCB1cGRhdGVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgeyByZW5kZXJTcGVjaWZpY0NhciB9IGZyb20gJy4vZ2FyYWdlLWNhcnMnO1xuXG5mdW5jdGlvbiByZW5kZXJDYXJTZWxlY3Rpb24oYmxvY2tUeXBlOiBzdHJpbmcpIHtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZU5vZGUoYmxvY2tUeXBlKTtcblxuICBjb25zdCBzZXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBzZXROYW1lLmNsYXNzTmFtZSA9IGAke2Jsb2NrVHlwZX1fX2lucHV0YDtcblxuICBjb25zdCBjb2xvciA9IGNyZWF0ZU5vZGUoYCR7YmxvY2tUeXBlfV9fY29sb3JgKTtcblxuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oYmxvY2tUeXBlKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGlmIChibG9ja1R5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICBjb25zdCBjYXIgPSB7XG4gICAgICAgIG5hbWU6IHNldE5hbWUudmFsdWUsXG4gICAgICAgIGNvbG9yOiAnYWFhYWFhJyxcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdDYXIgPSBhd2FpdCBjcmVhdGVDYXIoY2FyKTtcbiAgICAgIGNvbnN0IGNhcnNIZWFkZXJBbW91bnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZhbHVlJyk7XG4gICAgICBpZiAoY2Fyc0hlYWRlckFtb3VudEJsb2NrICYmIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCkge1xuICAgICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ICsgMX1gO1xuICAgICAgfVxuICAgICAgY29uc3QgY2Fyc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnMnKTtcbiAgICAgIGlmIChjYXJzQmxvY2spIHtcbiAgICAgICAgY2Fyc0Jsb2NrLmFwcGVuZChyZW5kZXJTcGVjaWZpY0NhcihuZXdDYXIpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjYXJJZCB9ID0gc2V0TmFtZS5kYXRhc2V0O1xuICAgICAgaWYgKGNhcklkKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHNldE5hbWU7XG4gICAgICAgIHVwZGF0ZUNhcigrY2FySWQsIHZhbHVlLCAnYnJvd24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIG1haW4uYXBwZW5kKHNldE5hbWUsIGNvbG9yLCBidXR0b24pO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2FyTWFuYWdlbWVudCgpIHtcbiAgY29uc3QgY2FyTWFuYWdlbWVudEJsb2NrID0gY3JlYXRlTm9kZSgnY2FyLW1hbmFnZW1lbnQnKTtcbiAgY29uc3QgY3JlYXRlQ2FyQmxvY2sgPSByZW5kZXJDYXJTZWxlY3Rpb24oJ2NyZWF0ZScpO1xuICBjb25zdCBlZGl0Q2FyQmxvY2sgPSByZW5kZXJDYXJTZWxlY3Rpb24oJ2VkaXQnKTtcblxuICBjYXJNYW5hZ2VtZW50QmxvY2suYXBwZW5kKGNyZWF0ZUNhckJsb2NrLCBlZGl0Q2FyQmxvY2spO1xuICByZXR1cm4gY2FyTWFuYWdlbWVudEJsb2NrO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXJNYW5hZ2VtZW50O1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbWcgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldEFsbENhcnMsIHJlbW92ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IHN0YXJ0U3RvcENhciwgY2hlY2tFbmdpbmUgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvZW5naW5lJztcbmltcG9ydCB7IGNyZWF0ZVdpbm5lciwgZGVsZXRlV2lubmVyLCBnZXRXaW5uZXIsIHVwZGF0ZVdpbm5lciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcbmltcG9ydCBnZXREcml2ZVN0ZXAgZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9uL2RyaXZlJztcbmltcG9ydCB7IElDYXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2Nhcic7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgZ2FyYWdlQ2Fyc0hlYWRlciA9IGNyZWF0ZU5vZGUoJ2hlYWRlcicpO1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyTGFiZWwgPSBjcmVhdGVOb2RlKCdoZWFkZXJfX2xhYmVsJywgJ0dhcmFnZScpO1xuICBjb25zdCBjYXJzQW1vdW50ID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUgPSBjcmVhdGVOb2RlKCdoZWFkZXJfX3ZhbHVlJywgY2Fyc0Ftb3VudC5sZW5ndGgpO1xuXG4gIGdhcmFnZUNhcnNIZWFkZXIuYXBwZW5kKGdhcmFnZUNhcnNIZWFkZXJMYWJlbCwgZ2FyYWdlQ2Fyc0hlYWRlclZhbHVlKTtcbiAgcmV0dXJuIGdhcmFnZUNhcnNIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQYWdlKCkge1xuICBjb25zdCBwYWdlTnVtYmVyID0gY3JlYXRlTm9kZSgncGFnZS1udW1iZXInKTtcbiAgY29uc3QgcGFnZU51bWJlckxhYmVsID0gY3JlYXRlTm9kZSgncGFnZS1udW1iZXJfX2xhYmVsJywgJ1BhZ2UgIycpO1xuICBjb25zdCBwYWdlTnVtYmVyVmFsdWUgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fdmFsdWUnLCAnMScpO1xuICBwYWdlTnVtYmVyLmFwcGVuZChwYWdlTnVtYmVyTGFiZWwsIHBhZ2VOdW1iZXJWYWx1ZSk7XG4gIHJldHVybiBwYWdlTnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3BlY2lmaWNDYXIoY2FyOiBJQ2FyKSB7XG4gIGNvbnN0IGNhckJsb2NrID0gY3JlYXRlTm9kZSgnY2FyLWJsb2NrJyk7XG5cbiAgY29uc3QgY2FyTW9kaWZpZXJzID0gY3JlYXRlTm9kZSgnbW9kaWZpZXInKTtcbiAgY29uc3Qgc2VsZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzZWxlY3QnKTtcbiAgc2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0X19pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWRpdElucHV0LnZhbHVlID0gY2FyLm5hbWU7XG4gICAgZWRpdElucHV0LmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcbiAgfSk7XG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVtb3ZlJyk7XG4gIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVDYXIoY2FyLmlkKTtcbiAgICBjYXJCbG9jay5yZW1vdmUoKTtcbiAgICBjb25zdCBjYXJzSGVhZGVyQW1vdW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50IC0gMX1gO1xuICAgIH1cbiAgICBkZWxldGVXaW5uZXIoY2FyLmlkKTtcbiAgfSk7XG4gIGNhck1vZGlmaWVycy5hcHBlbmQoc2VsZWN0QnV0dG9uLCByZW1vdmVCdXR0b24pO1xuXG4gIGNvbnN0IGNhck5hbWUgPSBjcmVhdGVOb2RlKCduYW1lJywgY2FyLm5hbWUpO1xuICBjb25zdCBjYXJJY29uQmxvY2sgPSBjcmVhdGVJbWcoJ2Fzc2V0cy9pY29uL2Nhckljb24uc3ZnJywgJ2NhcicpO1xuICBjb25zdCBmbGFnSWNvbkJsb2NrID0gY3JlYXRlSW1nKCdhc3NldHMvaWNvbi9mbGFnLnN2ZycsICdmbGFnJyk7XG4gIGNvbnN0IGNvbnRyb2xzID0gY3JlYXRlTm9kZSgnY29udHJvbHMnKTtcbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVCdXR0b24oJ3N0YXJ0Jyk7XG4gIHN0YXJ0LmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcbiAgbGV0IGNhckFuaW1hdGlvbkludGVydmFsSWQgPSAwO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBzdGFydC5jbGFzc0xpc3QuYWRkKCdidXR0b25fX2Rpc2FibGVkJyk7XG4gICAgY29uc3Qgc3RhcnRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBhd2FpdCBzdGFydFN0b3BDYXIoY2FyLmlkLCAnc3RhcnRlZCcpO1xuICAgIGNvbnN0IGRyaXZlQW5pbWF0aW9uU3RlcCA9IGdldERyaXZlU3RlcCh2ZWxvY2l0eSk7XG5cbiAgICBjYXJBbmltYXRpb25JbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChjYXJJY29uQmxvY2spIHtcbiAgICAgICAgaWYgKCtjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlLnNsaWNlKDAsIC0xKSA+PSAxMDApIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICAgICAgICAgIGNvbnN0IGVuZFJhY2UgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgICAgICBjb25zdCByYWNlRHVyYXRpb24gPSAoKGVuZFJhY2UgLSBzdGFydFJhY2UpIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmFjZScpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JhY2UnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBhbGVydChgQ2FyICMgJHtjYXIuaWR9IGhhcyB3b24hXFxuVGltZTogJHtyYWNlRHVyYXRpb259c2ApO1xuICAgICAgICAgICAgY29uc3QgY2FyV2luID0gYXdhaXQgZ2V0V2lubmVyKGNhci5pZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJXaW4pO1xuICAgICAgICAgICAgaWYgKGNhcldpbiA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgIGNyZWF0ZVdpbm5lcihjYXIuaWQsICtyYWNlRHVyYXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXBkYXRlV2lubmVyKGNhci5pZCwgY2FyV2luLndpbnMgKyAxLCArcmFjZUR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVWYWx1ZSA9IGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGU7XG4gICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVZhbHVlID0gY3VycmVudFRyYW5zbGF0ZVZhbHVlID8gYCR7K2N1cnJlbnRUcmFuc2xhdGVWYWx1ZS5zbGljZSgwLCAtMSkgKyBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgIDogYCR7ZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYDtcbiAgICAgICAgY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZSA9IG5ld1RyYW5zbGF0ZVZhbHVlO1xuICAgICAgfVxuICAgIH0sIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2UpO1xuICAgIGNhckJsb2NrLmRhdGFzZXQuaW50ZXJ2YWxJZCA9IGAke2NhckFuaW1hdGlvbkludGVydmFsSWR9YDtcbiAgICBjb25zdCBpc0VuZ2luZU9rID0gYXdhaXQgY2hlY2tFbmdpbmUoY2FyLmlkKTtcbiAgICBpZiAoIWlzRW5naW5lT2spIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gIH0pO1xuICBjb25zdCBzdG9wID0gY3JlYXRlQnV0dG9uKCdzdG9wJyk7XG4gIHN0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZSA9ICcnO1xuICAgIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gIH0pO1xuICBjb250cm9scy5hcHBlbmQoc3RhcnQsIHN0b3ApO1xuXG4gIGNvbnN0IHJhY2UgPSBjcmVhdGVOb2RlKCdyYWNlJyk7XG4gIHJhY2UuYXBwZW5kKGNhckljb25CbG9jaywgZmxhZ0ljb25CbG9jayk7XG5cbiAgY2FyQmxvY2suYXBwZW5kKGNhck1vZGlmaWVycywgY2FyTmFtZSwgY29udHJvbHMsIHJhY2UpO1xuICByZXR1cm4gY2FyQmxvY2s7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckNhcnMoKSB7XG4gIGNvbnN0IGNhcnMgPSBjcmVhdGVOb2RlKCdjYXJzJyk7XG4gIGNvbnN0IGFsbENhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIGFsbENhcnMuZm9yRWFjaCgoY2FyOiBJQ2FyKSA9PiB7XG4gICAgY2Fycy5hcHBlbmQocmVuZGVyU3BlY2lmaWNDYXIoY2FyKSk7XG4gIH0pO1xuICByZXR1cm4gY2Fycztcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyR2FyYWdlQ2FycygpIHtcbiAgY29uc3QgZ2FyYWdlQ2FycyA9IGNyZWF0ZU5vZGUoJ2dhcmFnZS1jYXJzJyk7XG4gIGNvbnN0IGhlYWRlciA9IGF3YWl0IHJlbmRlckhlYWRlcigpO1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHJlbmRlckN1cnJlbnRQYWdlKCk7XG4gIGNvbnN0IGNhcnMgPSBhd2FpdCByZW5kZXJDYXJzKCk7XG5cbiAgZ2FyYWdlQ2Fycy5hcHBlbmQoaGVhZGVyLCBjdXJyZW50UGFnZSwgY2Fycyk7XG4gIHJldHVybiBnYXJhZ2VDYXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VDYXJzO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBicmFuZHMsIG1vZGVscyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzLW5hbWUnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHsgcmVuZGVyU3BlY2lmaWNDYXIgfSBmcm9tICcuL2dhcmFnZS1jYXJzJztcbmltcG9ydCB7IElDYXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2Nhcic7XG5pbXBvcnQgcmVuZGVyUmVjb3Jkc1BhZ2UgZnJvbSAnLi4vLi4vcmVjb3Jkcy9yZWNvcmRzJztcblxuZnVuY3Rpb24gcmVuZGVyR2FyYWdlQ29udHJvbHMoKSB7XG4gIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gY3JlYXRlTm9kZSgnY29udHJvbHMnKTtcblxuICBjb25zdCByYWNlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyYWNlJyk7XG4gIHJhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmFjZScsICd0cnVlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbl9fc3RhcnQnKS5mb3JFYWNoKChlbCkgPT4gKGVsIGFzIEhUTUxCdXR0b25FbGVtZW50KS5jbGljaygpKTtcbiAgfSk7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyZXNldCcpO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25fX3N0b3AnKS5mb3JFYWNoKChlbCkgPT4gKGVsIGFzIEhUTUxCdXR0b25FbGVtZW50KS5jbGljaygpKSlcbiAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2dlbmFyYXRlJyk7XG4gIGdlbmVyYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNhcnNUb0dlbmVyYXRlID0gMTAwO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCBjYXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FycycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyc1RvR2VuZXJhdGU7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmFuZEJyYW5kID0gYnJhbmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJyYW5kcy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IHJhbmRNb2RlbCA9IG1vZGVsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb2RlbHMubGVuZ3RoKV07XG4gICAgICBjb25zdCBjYXJOYW1lID0gYCR7cmFuZEJyYW5kfSAke3JhbmRNb2RlbH1gO1xuICAgICAgY29uc3QgY2FyID0ge1xuICAgICAgICBuYW1lOiBjYXJOYW1lLFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgfTtcbiAgICAgIHJlc3VsdHMucHVzaChjcmVhdGVDYXIoY2FyKSk7XG4gICAgfVxuICAgIGlmIChjYXJzQmxvY2spIHtcbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdHMpKTtcbiAgICAgIChhd2FpdCBQcm9taXNlLmFsbChyZXN1bHRzKSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgY2Fyc0Jsb2NrLmFwcGVuZChyZW5kZXJTcGVjaWZpY0NhcihlbCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNhcnNIZWFkZXJBbW91bnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZhbHVlJyk7XG4gICAgaWYgKGNhcnNIZWFkZXJBbW91bnRCbG9jayAmJiBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQpIHtcbiAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgKyAxMDB9YDtcbiAgICB9XG4gIH0pO1xuXG4gIGdhcmFnZUNvbnRyb2xzLmFwcGVuZChyYWNlQnV0dG9uLCByZXNldEJ1dHRvbiwgZ2VuZXJhdGVCdXR0b24pO1xuICByZXR1cm4gZ2FyYWdlQ29udHJvbHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZUNvbnRyb2xzO1xuIiwiaW1wb3J0IHJlbmRlckNhck1hbmFnZW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL2Nhci1tYW5hZ2VtZW50JztcbmltcG9ydCByZW5kZXJHYXJhZ2VDb250cm9scyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNvbnRyb2xzJztcbmltcG9ydCByZW5kZXJHYXJhZ2VDYXJzIGZyb20gJy4vY29tcG9uZW50cy9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZVBhZ2UoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAnZmFsc2UnKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgZ2FyYWdlVmlldyA9IGNyZWF0ZU5vZGUoJ2dhcmFnZScpO1xuICBpZiAoYm9keSkge1xuICAgIGNvbnN0IGNhck1hbmFnZW1lbnQgPSByZW5kZXJDYXJNYW5hZ2VtZW50KCk7XG4gICAgY29uc3QgZ2FyYWdlQ29udHJvbHMgPSByZW5kZXJHYXJhZ2VDb250cm9scygpO1xuICAgIGNvbnN0IGdhcmFnZUNhcnMgPSBhd2FpdCByZW5kZXJHYXJhZ2VDYXJzKCk7XG5cbiAgICBnYXJhZ2VWaWV3LmFwcGVuZChjYXJNYW5hZ2VtZW50LCBnYXJhZ2VDb250cm9scywgZ2FyYWdlQ2Fycyk7XG4gICAgYm9keS5hcHBlbmQoZ2FyYWdlVmlldyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlUGFnZTtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgY29uc3QgaGVhZGVyQnV0dG9ucyA9IGNyZWF0ZU5vZGUoJ2J1dHRvbnMnKTtcblxuICBjb25zdCB0b0dhcmFnZSA9IGNyZWF0ZUJ1dHRvbignZ2FyYWdlJyk7XG4gIHRvR2FyYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgcmVjb3Jkc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChnYXJhZ2VWaWV3ICYmIHJlY29yZHNWaWV3KSB7XG4gICAgICBnYXJhZ2VWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmVjb3Jkc1ZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRvUmVjb3JkcyA9IGNyZWF0ZUJ1dHRvbigncmVjb3JkcycpO1xuICB0b1JlY29yZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCByZWNvcmRzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGdhcmFnZVZpZXcgJiYgcmVjb3Jkc1ZpZXcpIHtcbiAgICAgIGdhcmFnZVZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJlY29yZHNWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSk7XG5cbiAgaGVhZGVyQnV0dG9ucy5hcHBlbmQodG9HYXJhZ2UsIHRvUmVjb3Jkcyk7XG5cbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJCdXR0b25zKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5Py5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySGVhZGVyO1xuIiwiaW1wb3J0IHsgZ2V0V2lubmVyLCBnZXRXaW5uZXJzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IHsgY3JlYXRlSW1nLCBjcmVhdGVUYWJsZUNlbGwsIGNyZWF0ZVRhYmxlSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBnZXRDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlclRhYmxlKCkge1xuICAvLyBjb25zb2xlLmxvZyhhd2FpdCBnZXRXaW5uZXIoNikpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIHRhYmxlLmNsYXNzTmFtZSA9ICd3aW5uZXJzJztcbiAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgaGVhZGVyUm93LmNsYXNzTmFtZSA9ICd3aW5uZXJzX19oZWFkZXInO1xuICBjb25zdCB0YWJsZUhlYWRlck51bWJlciA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX251bWJlcicsICcjJyk7XG4gIGNvbnN0IHRhYmxlSGVhZGVyQ2FyID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fY2FyJywgJ0NhcicpO1xuICBjb25zdCB0YWJsZUhlYWRlck5hbWUgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19uYW1lJywgJ05hbWUnKTtcbiAgY29uc3QgdGFibGVIZWFkZXJXaW5zID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fd2lucycsICdXaW5zJyk7XG4gIGNvbnN0IHRhYmxlSGVhZGVyVGltZSA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX3RpbWUnLCAnVGltZScpO1xuICBoZWFkZXJSb3cuYXBwZW5kKFxuICAgIHRhYmxlSGVhZGVyTnVtYmVyLFxuICAgIHRhYmxlSGVhZGVyQ2FyLFxuICAgIHRhYmxlSGVhZGVyTmFtZSxcbiAgICB0YWJsZUhlYWRlcldpbnMsXG4gICAgdGFibGVIZWFkZXJUaW1lLFxuICApO1xuICB0YWJsZS5hcHBlbmQoaGVhZGVyUm93KTtcbiAgY29uc3Qgd2lubmVycyA9IGF3YWl0IGdldFdpbm5lcnMoKTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICB3aW5uZXJzLmZvckVhY2goYXN5bmMgKHdpbm5lcikgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBkYXRhUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBudW1iZXJDZWxsID0gY3JlYXRlVGFibGVDZWxsKGAke2NvdW50ZXJ9YCk7XG5cbiAgICBjb25zdCBjYXJDZWxsID0gY3JlYXRlVGFibGVDZWxsKCk7XG4gICAgY29uc3QgY2FySW1nQmxvY2sgPSBjcmVhdGVJbWcoJ2Fzc2V0cy9pY29uL2Nhckljb24uc3ZnJywgJ2NhcicpO1xuICAgIGNhckNlbGwuYXBwZW5kKGNhckltZ0Jsb2NrKTtcblxuICAgIGNvbnN0IGNhciA9IGF3YWl0IGdldENhcih3aW5uZXIuaWQpO1xuICAgIGNvbnN0IG5hbWVDZWxsID0gY3JlYXRlVGFibGVDZWxsKGNhci5uYW1lKTtcbiAgICBjb25zdCB3aW5zQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbCh3aW5uZXIud2lucyk7XG4gICAgY29uc3QgdGltZUNlbGwgPSBjcmVhdGVUYWJsZUNlbGwod2lubmVyLnRpbWUpO1xuICAgIGRhdGFSb3cuYXBwZW5kKG51bWJlckNlbGwsIGNhckNlbGwsIG5hbWVDZWxsLCB3aW5zQ2VsbCwgdGltZUNlbGwpO1xuICAgIHRhYmxlLmFwcGVuZChkYXRhUm93KTtcbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKGF3YWl0IGdldFdpbm5lcigxKSk7XG4gIC8vIGNvbnNvbGUubG9nKGF3YWl0IGNyZWF0ZVdpbm5lcigzLCA1KSk7XG4gIC8vIGNvbnNvbGUubG9nKGRlbGV0ZVdpbm5lcigzKSk7XG4gIC8vIGNvbnNvbGUubG9nKHVwZGF0ZVdpbm5lcigyLCAzLCAxKSk7XG4gIGNvbnN0IHJlY29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpO1xuICByZWNvcmRzPy5hcHBlbmQodGFibGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYWJsZTtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlJztcblxuZnVuY3Rpb24gcmVuZGVyUmVjb3Jkc1BhZ2UoKSB7XG4gIGNvbnN0IHJlY29yZHMgPSBjcmVhdGVOb2RlKCdyZWNvcmRzJyk7XG4gIHJlY29yZHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgcmVuZGVyVGFibGUoKTtcbiAgYm9keT8uYXBwZW5kKHJlY29yZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJSZWNvcmRzUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gcmVxdWlyZSgnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi4vaW5kZXguaHRtbCcpO1xuXG5pbXBvcnQgcmVuZGVyR2FyYWdlUGFnZSBmcm9tICcuL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2dhcmFnZSc7XG5pbXBvcnQgcmVuZGVyUmVjb3Jkc1BhZ2UgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcyc7XG5pbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9oZWFkZXInO1xuXG5yZW5kZXJIZWFkZXIoKTtcbnJlbmRlckdhcmFnZVBhZ2UoKTtcbnJlbmRlclJlY29yZHNQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=