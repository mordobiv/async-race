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
    console.log(time);
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
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl),
/* harmony export */   "raceStats": () => (/* binding */ raceStats)
/* harmony export */ });
var apiUrl = 'http://127.0.0.1:3000/';
var raceStats = {
    maxAnimationTime: 40,
    framesPerSecond: 60,
    distance: 100,
    minPossibleVelocity: 50,
};


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

var garageUrl = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "garage/");
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
        var response, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetch("".concat(garageUrl).concat(id))];
                case 1:
                    response = _c.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    _b = (_a = console).log;
                    return [4 /*yield*/, (response).json()];
                case 2:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 3;
                case 3: return [2 /*return*/];
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
                        console.log('wow');
                    }
                    else {
                        throw new Error('Cannot add car');
                    }
                    return [2 /*return*/];
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
                        console.log('Perfect');
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
                        console.log('wow');
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

var engineUrl = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "engine");
function startStopCar(carId, status) {
    return __awaiter(this, void 0, void 0, function () {
        var url, startStopEngineRequest, response, velocity;
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
                    startStopEngineRequest = _a.sent();
                    if (!startStopEngineRequest.ok) return [3 /*break*/, 4];
                    if (!(status === 'started')) return [3 /*break*/, 3];
                    return [4 /*yield*/, startStopEngineRequest.json()];
                case 2:
                    response = _a.sent();
                    velocity = response.velocity;
                    return [2 /*return*/, velocity];
                case 3: return [2 /*return*/, true];
                case 4: return [2 /*return*/];
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
                    return [2 /*return*/, (startDriveRequest.ok)];
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
/* harmony export */   "createNode": () => (/* binding */ createNode)
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
// export function getTranslateValue(rawValue: string) {
//   if (rawValue) {
//   }
//   return 0;
// }


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


function renderCarSelection(blockType) {
    var main = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)(blockType);
    var setName = document.createElement('input');
    setName.className = "".concat(blockType, "__input");
    var color = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)("".concat(blockType, "__color"));
    var button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(blockType);
    button.addEventListener('click', function () {
        if (blockType === 'create') {
            var car = {
                name: setName.value,
                color: 'aaaaaa',
            };
            (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.createCar)(car);
        }
        else {
            var carId = setName.dataset.carId;
            if (carId) {
                var value = setName.value;
                (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.updateCar)(+carId, value, 'brown');
            }
        }
    });
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");
/* harmony import */ var _data_controller_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data-controller/engine */ "./src/scripts/data-controller/engine.ts");
/* harmony import */ var _animation_drive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../animation/drive */ "./src/scripts/animation/drive.ts");
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




var isWinnerFound = false;
function renderGarageHeader() {
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
    });
    carModifiers.append(selectButton, removeButton);
    var carName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('name', car.name);
    var carIconBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('assets/icon/carIcon.svg', 'car');
    var flagIconBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('assets/icon/flag.svg', 'flag');
    var controls = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('controls');
    var stop = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('stop');
    var start = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('start');
    start.dataset.carId = "".concat(car.id);
    var carAnimationIntervalId;
    start.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var startRace, velocity, driveAnimationStep, isEngineOk;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    startRace = new Date().valueOf();
                    return [4 /*yield*/, (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.startStopCar)(car.id, 'started')];
                case 1:
                    velocity = _a.sent();
                    driveAnimationStep = (0,_animation_drive__WEBPACK_IMPORTED_MODULE_3__["default"])(velocity);
                    carAnimationIntervalId = window.setInterval(function () {
                        if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
                            clearInterval(carAnimationIntervalId);
                            var endRace = new Date().valueOf();
                            var raceDuration = endRace - startRace;
                            if (!isWinnerFound) {
                                alert("Car # ".concat(car.id, " has won!\nTime: ").concat((raceDuration / 1000).toFixed(2), "s"));
                                isWinnerFound = true;
                            }
                            return;
                        }
                        var currentTranslateValue = carIconBlock.style.translate;
                        var newTranslateValue = currentTranslateValue ? "".concat(+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance, "%") : "".concat(driveAnimationStep.stepDistance, "%");
                        carIconBlock.style.translate = newTranslateValue;
                    }, driveAnimationStep.stepDistance);
                    return [4 /*yield*/, (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.checkEngine)(car.id)];
                case 2:
                    isEngineOk = _a.sent();
                    if (!isEngineOk)
                        clearInterval(carAnimationIntervalId);
                    return [2 /*return*/];
            }
        });
    }); });
    stop.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var stopCar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clearInterval(carAnimationIntervalId);
                    return [4 /*yield*/, (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.startStopCar)(car.id, 'stopped')];
                case 1:
                    stopCar = _a.sent();
                    if (stopCar) {
                        carIconBlock.style.translate = '';
                    }
                    return [2 /*return*/];
            }
        });
    }); });
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
                    return [4 /*yield*/, renderGarageHeader()];
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



function renderGarageControls() {
    var garageControls = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('controls');
    var raceButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('race');
    raceButton.addEventListener('click', function () {
        document.querySelectorAll('.button__start').forEach(function (el) { return el.click(); });
    });
    var resetButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('reset');
    var generateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('genarate');
    generateButton.addEventListener('click', function () {
        var carsToGenerate = 100;
        for (var i = 0; i < carsToGenerate; i += 1) {
            var randBrand = _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.brands[Math.floor(Math.random() * _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.brands.length)];
            var randModel = _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.models[Math.floor(Math.random() * _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.models.length)];
            var carName = "".concat(randBrand, " ").concat(randModel);
            var car = {
                name: carName,
                color: 'blue',
            };
            (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_2__.createCar)(car);
        }
    });
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
    var header = document.createElement('header');
    header.className = 'header';
    var headerButtons = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('buttons');
    headerButtons.append(toGarage, toRecords);
    header.append(headerButtons);
    var body = document.querySelector('body');
    body === null || body === void 0 ? void 0 : body.append(header);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);


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

function renderRecordsPage() {
    var records = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records');
    records.style.display = 'none';
    var body = document.querySelector('body');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEVBQWlCLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9hbmltYXRpb24vZHJpdmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2NhcnMtbmFtZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2NhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2Nhci1tYW5hZ2VtZW50LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9nYXJhZ2UtY2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNvbnRyb2xzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvZ2FyYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYWNlU3RhdHMgfSBmcm9tICcuLi9jb25maWcnO1xuXG5mdW5jdGlvbiBnZXREcml2ZVN0ZXAodmVsb2NpdHk6IG51bWJlcikge1xuICBjb25zdCB0aW1lID0gcmFjZVN0YXRzLm1heEFuaW1hdGlvblRpbWUgLyAodmVsb2NpdHkgLyByYWNlU3RhdHMubWluUG9zc2libGVWZWxvY2l0eSk7XG4gIGNvbnNvbGUubG9nKHRpbWUpO1xuICBjb25zdCB0b3RhbFN0ZXBzID0gcmFjZVN0YXRzLmZyYW1lc1BlclNlY29uZCAqIHRpbWU7XG5cbiAgY29uc3Qgc3RlcERpc3RhbmNlID0gcmFjZVN0YXRzLmRpc3RhbmNlIC8gdG90YWxTdGVwcztcbiAgcmV0dXJuIHtcbiAgICBzdGVwRGlzdGFuY2UsXG4gICAgdGltZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RHJpdmVTdGVwO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvJztcblxuZXhwb3J0IGNvbnN0IHJhY2VTdGF0cyA9IHtcbiAgbWF4QW5pbWF0aW9uVGltZTogNDAsXG4gIGZyYW1lc1BlclNlY29uZDogNjAsXG4gIGRpc3RhbmNlOiAxMDAsXG4gIG1pblBvc3NpYmxlVmVsb2NpdHk6IDUwLFxufTtcbiIsImV4cG9ydCBjb25zdCBicmFuZHMgPSBbJ1BldWdlb3QnLCAnQk1XJywgJ1BvcnNjaGUnLCAnWmhpZ3VsaScsICdBdWRpJywgJ01lcmNlZGVzJywgJ0ZpYXQnLCAnTUFaJywgJ0J1Z2dhdGknLCAnUm9sbHMtUm95c2UnLCAnUGFnYW5pJ107XG5leHBvcnQgY29uc3QgbW9kZWxzID0gWyc0MDYgQ291cGUnLCAnQU1HJywgJ00tU2VyaWVzJywgJ1JTJywgJzMtc2VyaWVzJywgJ0E2JywgJ0MyMDgnLCAnOTExJywgJ0NheW1hbicsICc0UycsICdTcG9ydCddO1xuIiwiaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZ2FyYWdlVXJsID0gYCR7YXBpVXJsfWdhcmFnZS9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2FycygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnYXJhZ2VVcmwpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBhbGxDYXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBhbGxDYXJzO1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FycyBsaXN0Jyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXIoaWQ6IG51bWJlcikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWApO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmxvZyhhd2FpdCAocmVzcG9uc2UpLmpzb24oKSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcihjYXI6IHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0pIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGdhcmFnZVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcblxuICBpZiAocmVxdWVzdC5vaykge1xuICAgIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgY2FyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNhcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBpZiAocmVxdWVzdC5vaykge1xuICAgIGNvbnNvbGUubG9nKCdQZXJmZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGNvbG9yID0gJzEyMycpIHtcbiAgY29uc3QgY2FyID0ge1xuICAgIG5hbWUsXG4gICAgY29sb3IsXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyKSxcbiAgfSk7XG5cbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICBjb25zb2xlLmxvZygnd293Jyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGNhcicpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBhcGlVcmwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBlbmdpbmVVcmwgPSBgJHthcGlVcmx9ZW5naW5lYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U3RvcENhcihjYXJJZDogbnVtYmVyLCBzdGF0dXM6ICdzdGFydGVkJyB8ICdzdG9wcGVkJykge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuZ2luZVVybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpZCcsIGAke2NhcklkfWApO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc3RhdHVzJywgc3RhdHVzKTtcbiAgY29uc3Qgc3RhcnRTdG9wRW5naW5lUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSk7XG4gIGlmIChzdGFydFN0b3BFbmdpbmVSZXF1ZXN0Lm9rKSB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ3N0YXJ0ZWQnKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0YXJ0U3RvcEVuZ2luZVJlcXVlc3QuanNvbigpO1xuICAgICAgY29uc3QgeyB2ZWxvY2l0eSB9ID0gcmVzcG9uc2U7XG4gICAgICByZXR1cm4gdmVsb2NpdHk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0VuZ2luZShjYXJJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5naW5lVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYCR7Y2FySWR9YCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzdGF0dXMnLCAnZHJpdmUnKTtcbiAgY29uc3Qgc3RhcnREcml2ZVJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaWQ6IGNhcklkLFxuICAgICAgc3RhdHVzOiAnZHJpdmUnLFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIChzdGFydERyaXZlUmVxdWVzdC5vayk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShjbGFzc05hbWU6IHN0cmluZywgdGV4dENvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYgKHRleHRDb250ZW50KSBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ1dHRvbk5hbWU6IHN0cmluZykge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9IGBidXR0b24gYnV0dG9uX18ke2J1dHRvbk5hbWV9YDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uTmFtZTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZyhzcmM6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgaW1nQmxvY2sgPSBjcmVhdGVOb2RlKGNsYXNzTmFtZSk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfV9faW1nYDtcbiAgaW1nLnNyYyA9IHNyYztcbiAgaW1nQmxvY2suYXBwZW5kKGltZyk7XG4gIHJldHVybiBpbWdCbG9jaztcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZVZhbHVlKHJhd1ZhbHVlOiBzdHJpbmcpIHtcbi8vICAgaWYgKHJhd1ZhbHVlKSB7XG5cbi8vICAgfVxuLy8gICByZXR1cm4gMDtcbi8vIH1cbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyLCB1cGRhdGVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5cbmZ1bmN0aW9uIHJlbmRlckNhclNlbGVjdGlvbihibG9ja1R5cGU6IHN0cmluZykge1xuICBjb25zdCBtYWluID0gY3JlYXRlTm9kZShibG9ja1R5cGUpO1xuXG4gIGNvbnN0IHNldE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHNldE5hbWUuY2xhc3NOYW1lID0gYCR7YmxvY2tUeXBlfV9faW5wdXRgO1xuXG4gIGNvbnN0IGNvbG9yID0gY3JlYXRlTm9kZShgJHtibG9ja1R5cGV9X19jb2xvcmApO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihibG9ja1R5cGUpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGJsb2NrVHlwZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogc2V0TmFtZS52YWx1ZSxcbiAgICAgICAgY29sb3I6ICdhYWFhYWEnLFxuICAgICAgfTtcbiAgICAgIGNyZWF0ZUNhcihjYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNhcklkIH0gPSBzZXROYW1lLmRhdGFzZXQ7XG4gICAgICBpZiAoY2FySWQpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gc2V0TmFtZTtcbiAgICAgICAgdXBkYXRlQ2FyKCtjYXJJZCwgdmFsdWUsICdicm93bicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbWFpbi5hcHBlbmQoc2V0TmFtZSwgY29sb3IsIGJ1dHRvbik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDYXJNYW5hZ2VtZW50KCkge1xuICBjb25zdCBjYXJNYW5hZ2VtZW50QmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItbWFuYWdlbWVudCcpO1xuICBjb25zdCBjcmVhdGVDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignY3JlYXRlJyk7XG4gIGNvbnN0IGVkaXRDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignZWRpdCcpO1xuXG4gIGNhck1hbmFnZW1lbnRCbG9jay5hcHBlbmQoY3JlYXRlQ2FyQmxvY2ssIGVkaXRDYXJCbG9jayk7XG4gIHJldHVybiBjYXJNYW5hZ2VtZW50QmxvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhck1hbmFnZW1lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUltZyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2FycywgcmVtb3ZlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHsgc3RhcnRTdG9wQ2FyLCBjaGVja0VuZ2luZSB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9lbmdpbmUnO1xuaW1wb3J0IGdldERyaXZlU3RlcCBmcm9tICcuLi8uLi8uLi9hbmltYXRpb24vZHJpdmUnO1xuaW1wb3J0IHsgSUNhciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY2FyJztcbmltcG9ydCB7IHJhY2VTdGF0cyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmxldCBpc1dpbm5lckZvdW5kID0gZmFsc2U7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZUhlYWRlcigpIHtcbiAgY29uc3QgZ2FyYWdlQ2Fyc0hlYWRlciA9IGNyZWF0ZU5vZGUoJ2hlYWRlcicpO1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyTGFiZWwgPSBjcmVhdGVOb2RlKCdoZWFkZXJfX2xhYmVsJywgJ0dhcmFnZScpO1xuICBjb25zdCBjYXJzQW1vdW50ID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUgPSBjcmVhdGVOb2RlKCdoZWFkZXJfX3ZhbHVlJywgY2Fyc0Ftb3VudC5sZW5ndGgpO1xuXG4gIGdhcmFnZUNhcnNIZWFkZXIuYXBwZW5kKGdhcmFnZUNhcnNIZWFkZXJMYWJlbCwgZ2FyYWdlQ2Fyc0hlYWRlclZhbHVlKTtcbiAgcmV0dXJuIGdhcmFnZUNhcnNIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQYWdlKCkge1xuICBjb25zdCBwYWdlTnVtYmVyID0gY3JlYXRlTm9kZSgncGFnZS1udW1iZXInKTtcbiAgY29uc3QgcGFnZU51bWJlckxhYmVsID0gY3JlYXRlTm9kZSgncGFnZS1udW1iZXJfX2xhYmVsJywgJ1BhZ2UgIycpO1xuICBjb25zdCBwYWdlTnVtYmVyVmFsdWUgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fdmFsdWUnLCAnMScpO1xuICBwYWdlTnVtYmVyLmFwcGVuZChwYWdlTnVtYmVyTGFiZWwsIHBhZ2VOdW1iZXJWYWx1ZSk7XG4gIHJldHVybiBwYWdlTnVtYmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTcGVjaWZpY0NhcihjYXI6IElDYXIpIHtcbiAgY29uc3QgY2FyQmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItYmxvY2snKTtcbiAgY29uc3QgY2FyTW9kaWZpZXJzID0gY3JlYXRlTm9kZSgnbW9kaWZpZXInKTtcbiAgY29uc3Qgc2VsZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzZWxlY3QnKTtcbiAgc2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0X19pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWRpdElucHV0LnZhbHVlID0gY2FyLm5hbWU7XG4gICAgZWRpdElucHV0LmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcbiAgfSk7XG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVtb3ZlJyk7XG4gIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVDYXIoY2FyLmlkKTtcbiAgICBjYXJCbG9jay5yZW1vdmUoKTtcbiAgfSk7XG4gIGNhck1vZGlmaWVycy5hcHBlbmQoc2VsZWN0QnV0dG9uLCByZW1vdmVCdXR0b24pO1xuXG4gIGNvbnN0IGNhck5hbWUgPSBjcmVhdGVOb2RlKCduYW1lJywgY2FyLm5hbWUpO1xuICBjb25zdCBjYXJJY29uQmxvY2sgPSBjcmVhdGVJbWcoJ2Fzc2V0cy9pY29uL2Nhckljb24uc3ZnJywgJ2NhcicpO1xuICBjb25zdCBmbGFnSWNvbkJsb2NrID0gY3JlYXRlSW1nKCdhc3NldHMvaWNvbi9mbGFnLnN2ZycsICdmbGFnJyk7XG4gIGNvbnN0IGNvbnRyb2xzID0gY3JlYXRlTm9kZSgnY29udHJvbHMnKTtcbiAgY29uc3Qgc3RvcCA9IGNyZWF0ZUJ1dHRvbignc3RvcCcpO1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJ1dHRvbignc3RhcnQnKTtcbiAgc3RhcnQuZGF0YXNldC5jYXJJZCA9IGAke2Nhci5pZH1gO1xuICBsZXQgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZDogbnVtYmVyO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzdGFydFJhY2UgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGF3YWl0IHN0YXJ0U3RvcENhcihjYXIuaWQsICdzdGFydGVkJyk7XG4gICAgY29uc3QgZHJpdmVBbmltYXRpb25TdGVwID0gZ2V0RHJpdmVTdGVwKHZlbG9jaXR5KTtcblxuICAgIGNhckFuaW1hdGlvbkludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKCtjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlLnNsaWNlKDAsIC0xKSA+PSAxMDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgICAgICAgY29uc3QgZW5kUmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICBjb25zdCByYWNlRHVyYXRpb24gPSBlbmRSYWNlIC0gc3RhcnRSYWNlO1xuICAgICAgICBpZiAoIWlzV2lubmVyRm91bmQpIHtcbiAgICAgICAgICBhbGVydChgQ2FyICMgJHtjYXIuaWR9IGhhcyB3b24hXFxuVGltZTogJHsocmFjZUR1cmF0aW9uIC8gMTAwMCkudG9GaXhlZCgyKX1zYCk7XG4gICAgICAgICAgaXNXaW5uZXJGb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZVZhbHVlID0gY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVZhbHVlID0gY3VycmVudFRyYW5zbGF0ZVZhbHVlID8gYCR7K2N1cnJlbnRUcmFuc2xhdGVWYWx1ZS5zbGljZSgwLCAtMSkgKyBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgIDogYCR7ZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYDtcbiAgICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSBuZXdUcmFuc2xhdGVWYWx1ZTtcbiAgICB9LCBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlKTtcblxuICAgIGNvbnN0IGlzRW5naW5lT2sgPSBhd2FpdCBjaGVja0VuZ2luZShjYXIuaWQpO1xuICAgIGlmICghaXNFbmdpbmVPaykgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgfSk7XG5cbiAgc3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICAgIGNvbnN0IHN0b3BDYXIgPSBhd2FpdCBzdGFydFN0b3BDYXIoY2FyLmlkLCAnc3RvcHBlZCcpO1xuICAgIGlmIChzdG9wQ2FyKSB7XG4gICAgICBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlID0gJyc7XG4gICAgfVxuICB9KTtcblxuICBjb250cm9scy5hcHBlbmQoc3RhcnQsIHN0b3ApO1xuXG4gIGNvbnN0IHJhY2UgPSBjcmVhdGVOb2RlKCdyYWNlJyk7XG4gIHJhY2UuYXBwZW5kKGNhckljb25CbG9jaywgZmxhZ0ljb25CbG9jayk7XG5cbiAgY2FyQmxvY2suYXBwZW5kKGNhck1vZGlmaWVycywgY2FyTmFtZSwgY29udHJvbHMsIHJhY2UpO1xuICByZXR1cm4gY2FyQmxvY2s7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckNhcnMoKSB7XG4gIGNvbnN0IGNhcnMgPSBjcmVhdGVOb2RlKCdjYXJzJyk7XG4gIGNvbnN0IGFsbENhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIGFsbENhcnMuZm9yRWFjaCgoY2FyOiBJQ2FyKSA9PiB7XG4gICAgY2Fycy5hcHBlbmQocmVuZGVyU3BlY2lmaWNDYXIoY2FyKSk7XG4gIH0pO1xuICByZXR1cm4gY2Fycztcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyR2FyYWdlQ2FycygpIHtcbiAgY29uc3QgZ2FyYWdlQ2FycyA9IGNyZWF0ZU5vZGUoJ2dhcmFnZS1jYXJzJyk7XG4gIGNvbnN0IGhlYWRlciA9IGF3YWl0IHJlbmRlckdhcmFnZUhlYWRlcigpO1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHJlbmRlckN1cnJlbnRQYWdlKCk7XG4gIGNvbnN0IGNhcnMgPSBhd2FpdCByZW5kZXJDYXJzKCk7XG5cbiAgZ2FyYWdlQ2Fycy5hcHBlbmQoaGVhZGVyLCBjdXJyZW50UGFnZSwgY2Fycyk7XG4gIHJldHVybiBnYXJhZ2VDYXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VDYXJzO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBicmFuZHMsIG1vZGVscyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzLW5hbWUnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuXG5mdW5jdGlvbiByZW5kZXJHYXJhZ2VDb250cm9scygpIHtcbiAgY29uc3QgZ2FyYWdlQ29udHJvbHMgPSBjcmVhdGVOb2RlKCdjb250cm9scycpO1xuXG4gIGNvbnN0IHJhY2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3JhY2UnKTtcbiAgcmFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zdGFydCcpLmZvckVhY2goKGVsKSA9PiAoZWwgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCkpO1xuICB9KTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3Jlc2V0Jyk7XG4gIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdnZW5hcmF0ZScpO1xuICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXJzVG9HZW5lcmF0ZSA9IDEwMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnNUb0dlbmVyYXRlOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJhbmRCcmFuZCA9IGJyYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBicmFuZHMubGVuZ3RoKV07XG4gICAgICBjb25zdCByYW5kTW9kZWwgPSBtb2RlbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9kZWxzLmxlbmd0aCldO1xuICAgICAgY29uc3QgY2FyTmFtZSA9IGAke3JhbmRCcmFuZH0gJHtyYW5kTW9kZWx9YDtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogY2FyTmFtZSxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgIH07XG4gICAgICBjcmVhdGVDYXIoY2FyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGdhcmFnZUNvbnRyb2xzLmFwcGVuZChyYWNlQnV0dG9uLCByZXNldEJ1dHRvbiwgZ2VuZXJhdGVCdXR0b24pO1xuICByZXR1cm4gZ2FyYWdlQ29udHJvbHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZUNvbnRyb2xzO1xuIiwiaW1wb3J0IHJlbmRlckNhck1hbmFnZW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL2Nhci1tYW5hZ2VtZW50JztcbmltcG9ydCByZW5kZXJHYXJhZ2VDb250cm9scyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNvbnRyb2xzJztcbmltcG9ydCByZW5kZXJHYXJhZ2VDYXJzIGZyb20gJy4vY29tcG9uZW50cy9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZVBhZ2UoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGdhcmFnZVZpZXcgPSBjcmVhdGVOb2RlKCdnYXJhZ2UnKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBjb25zdCBjYXJNYW5hZ2VtZW50ID0gcmVuZGVyQ2FyTWFuYWdlbWVudCgpO1xuICAgIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gcmVuZGVyR2FyYWdlQ29udHJvbHMoKTtcbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuXG4gICAgZ2FyYWdlVmlldy5hcHBlbmQoY2FyTWFuYWdlbWVudCwgZ2FyYWdlQ29udHJvbHMsIGdhcmFnZUNhcnMpO1xuICAgIGJvZHkuYXBwZW5kKGdhcmFnZVZpZXcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZVBhZ2U7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCB0b0dhcmFnZSA9IGNyZWF0ZUJ1dHRvbignZ2FyYWdlJyk7XG4gIHRvR2FyYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgcmVjb3Jkc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChnYXJhZ2VWaWV3ICYmIHJlY29yZHNWaWV3KSB7XG4gICAgICBnYXJhZ2VWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmVjb3Jkc1ZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRvUmVjb3JkcyA9IGNyZWF0ZUJ1dHRvbigncmVjb3JkcycpO1xuICB0b1JlY29yZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCByZWNvcmRzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGdhcmFnZVZpZXcgJiYgcmVjb3Jkc1ZpZXcpIHtcbiAgICAgIGdhcmFnZVZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJlY29yZHNWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcbiAgY29uc3QgaGVhZGVyQnV0dG9ucyA9IGNyZWF0ZU5vZGUoJ2J1dHRvbnMnKTtcbiAgaGVhZGVyQnV0dG9ucy5hcHBlbmQodG9HYXJhZ2UsIHRvUmVjb3Jkcyk7XG5cbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJCdXR0b25zKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5Py5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5mdW5jdGlvbiByZW5kZXJSZWNvcmRzUGFnZSgpIHtcbiAgY29uc3QgcmVjb3JkcyA9IGNyZWF0ZU5vZGUoJ3JlY29yZHMnKTtcbiAgcmVjb3Jkcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5Py5hcHBlbmQocmVjb3Jkcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclJlY29yZHNQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVyR2FyYWdlUGFnZSBmcm9tICcuL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2dhcmFnZSc7XG5pbXBvcnQgcmVuZGVyUmVjb3Jkc1BhZ2UgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcyc7XG5pbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9oZWFkZXInO1xuXG5yZW5kZXJIZWFkZXIoKTtcbnJlbmRlckdhcmFnZVBhZ2UoKTtcbnJlbmRlclJlY29yZHNQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=