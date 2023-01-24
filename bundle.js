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
        var raceDuration, startRace, velocity, driveAnimationStep, isEngineOk;
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
                            raceDuration = endRace - startRace;
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
    var resetButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('reset');
    var generateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('genarate');
    generateButton.addEventListener('click', function () {
        var carsToGenerate = 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMvQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUVELGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7O1VDVGpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042RDtBQUNHO0FBQ2Q7QUFFbEQsaUVBQVksRUFBRSxDQUFDO0FBQ2Ysd0VBQWdCLEVBQUUsQ0FBQztBQUNuQiwwRUFBaUIsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbi9kcml2ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvY29uZmlnLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvY2Fycy1uYW1lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvY2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvY2FyLW1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2dhcmFnZS1jYXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9nYXJhZ2UtY29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9nYXJhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9yZWNvcmRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJhY2VTdGF0cyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGdldERyaXZlU3RlcCh2ZWxvY2l0eTogbnVtYmVyKSB7XG4gIGNvbnN0IHRpbWUgPSByYWNlU3RhdHMubWF4QW5pbWF0aW9uVGltZSAvICh2ZWxvY2l0eSAvIHJhY2VTdGF0cy5taW5Qb3NzaWJsZVZlbG9jaXR5KTtcbiAgY29uc29sZS5sb2codGltZSk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSByYWNlU3RhdHMuZnJhbWVzUGVyU2Vjb25kICogdGltZTtcblxuICBjb25zdCBzdGVwRGlzdGFuY2UgPSByYWNlU3RhdHMuZGlzdGFuY2UgLyB0b3RhbFN0ZXBzO1xuICByZXR1cm4ge1xuICAgIHN0ZXBEaXN0YW5jZSxcbiAgICB0aW1lLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREcml2ZVN0ZXA7XG4iLCJleHBvcnQgY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC8nO1xuXG5leHBvcnQgY29uc3QgcmFjZVN0YXRzID0ge1xuICBtYXhBbmltYXRpb25UaW1lOiA0MCxcbiAgZnJhbWVzUGVyU2Vjb25kOiA2MCxcbiAgZGlzdGFuY2U6IDEwMCxcbiAgbWluUG9zc2libGVWZWxvY2l0eTogNTAsXG59O1xuIiwiZXhwb3J0IGNvbnN0IGJyYW5kcyA9IFsnUGV1Z2VvdCcsICdCTVcnLCAnUG9yc2NoZScsICdaaGlndWxpJywgJ0F1ZGknLCAnTWVyY2VkZXMnLCAnRmlhdCcsICdNQVonLCAnQnVnZ2F0aScsICdSb2xscy1Sb3lzZScsICdQYWdhbmknXTtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSBbJzQwNiBDb3VwZScsICdBTUcnLCAnTS1TZXJpZXMnLCAnUlMnLCAnMy1zZXJpZXMnLCAnQTYnLCAnQzIwOCcsICc5MTEnLCAnQ2F5bWFuJywgJzRTJywgJ1Nwb3J0J107XG4iLCJpbXBvcnQgeyBhcGlVcmwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBnYXJhZ2VVcmwgPSBgJHthcGlVcmx9Z2FyYWdlL2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDYXJzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdhcmFnZVVybCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGFsbENhcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGFsbENhcnM7XG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcignQ2Fubm90IGdldCBjYXJzIGxpc3QnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUubG9nKGF3YWl0IChyZXNwb25zZSkuanNvbigpKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2FyKGNhcjogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfSkge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goZ2FyYWdlVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gIH0pO1xuXG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgY29uc29sZS5sb2coJ3dvdycpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBjYXInKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ2FyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgY29uc29sZS5sb2coJ1BlcmZlY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FyKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgY29sb3IgPSAnMTIzJykge1xuICBjb25zdCBjYXIgPSB7XG4gICAgbmFtZSxcbiAgICBjb2xvcixcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcblxuICBpZiAocmVxdWVzdC5vaykge1xuICAgIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgY2FyJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFwaVVybCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGVuZ2luZVVybCA9IGAke2FwaVVybH1lbmdpbmVgO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRTdG9wQ2FyKGNhcklkOiBudW1iZXIsIHN0YXR1czogJ3N0YXJ0ZWQnIHwgJ3N0b3BwZWQnKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5naW5lVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYCR7Y2FySWR9YCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzdGF0dXMnLCBzdGF0dXMpO1xuICBjb25zdCBzdGFydFN0b3BFbmdpbmVSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICB9KTtcbiAgaWYgKHN0YXJ0U3RvcEVuZ2luZVJlcXVlc3Qub2spIHtcbiAgICBpZiAoc3RhdHVzID09PSAnc3RhcnRlZCcpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RhcnRTdG9wRW5naW5lUmVxdWVzdC5qc29uKCk7XG4gICAgICBjb25zdCB7IHZlbG9jaXR5IH0gPSByZXNwb25zZTtcbiAgICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRW5naW5lKGNhcklkOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmdpbmVVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnaWQnLCBgJHtjYXJJZH1gKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXR1cycsICdkcml2ZScpO1xuICBjb25zdCBzdGFydERyaXZlUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpZDogY2FySWQsXG4gICAgICBzdGF0dXM6ICdkcml2ZScsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gKHN0YXJ0RHJpdmVSZXF1ZXN0Lm9rKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0Q29udGVudD86IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZiAodGV4dENvbnRlbnQpIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oYnV0dG9uTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NOYW1lID0gYGJ1dHRvbiBidXR0b25fXyR7YnV0dG9uTmFtZX1gO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25OYW1lO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nKHNyYzogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICBjb25zdCBpbWdCbG9jayA9IGNyZWF0ZU5vZGUoY2xhc3NOYW1lKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5jbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9X19pbWdgO1xuICBpbWcuc3JjID0gc3JjO1xuICBpbWdCbG9jay5hcHBlbmQoaW1nKTtcbiAgcmV0dXJuIGltZ0Jsb2NrO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlVmFsdWUocmF3VmFsdWU6IHN0cmluZykge1xuLy8gICBpZiAocmF3VmFsdWUpIHtcblxuLy8gICB9XG4vLyAgIHJldHVybiAwO1xuLy8gfVxuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBjcmVhdGVDYXIsIHVwZGF0ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcblxuZnVuY3Rpb24gcmVuZGVyQ2FyU2VsZWN0aW9uKGJsb2NrVHlwZTogc3RyaW5nKSB7XG4gIGNvbnN0IG1haW4gPSBjcmVhdGVOb2RlKGJsb2NrVHlwZSk7XG5cbiAgY29uc3Qgc2V0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgc2V0TmFtZS5jbGFzc05hbWUgPSBgJHtibG9ja1R5cGV9X19pbnB1dGA7XG5cbiAgY29uc3QgY29sb3IgPSBjcmVhdGVOb2RlKGAke2Jsb2NrVHlwZX1fX2NvbG9yYCk7XG5cbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKGJsb2NrVHlwZSk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoYmxvY2tUeXBlID09PSAnY3JlYXRlJykge1xuICAgICAgY29uc3QgY2FyID0ge1xuICAgICAgICBuYW1lOiBzZXROYW1lLnZhbHVlLFxuICAgICAgICBjb2xvcjogJ2FhYWFhYScsXG4gICAgICB9O1xuICAgICAgY3JlYXRlQ2FyKGNhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY2FySWQgfSA9IHNldE5hbWUuZGF0YXNldDtcbiAgICAgIGlmIChjYXJJZCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBzZXROYW1lO1xuICAgICAgICB1cGRhdGVDYXIoK2NhcklkLCB2YWx1ZSwgJ2Jyb3duJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBtYWluLmFwcGVuZChzZXROYW1lLCBjb2xvciwgYnV0dG9uKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNhck1hbmFnZW1lbnQoKSB7XG4gIGNvbnN0IGNhck1hbmFnZW1lbnRCbG9jayA9IGNyZWF0ZU5vZGUoJ2Nhci1tYW5hZ2VtZW50Jyk7XG4gIGNvbnN0IGNyZWF0ZUNhckJsb2NrID0gcmVuZGVyQ2FyU2VsZWN0aW9uKCdjcmVhdGUnKTtcbiAgY29uc3QgZWRpdENhckJsb2NrID0gcmVuZGVyQ2FyU2VsZWN0aW9uKCdlZGl0Jyk7XG5cbiAgY2FyTWFuYWdlbWVudEJsb2NrLmFwcGVuZChjcmVhdGVDYXJCbG9jaywgZWRpdENhckJsb2NrKTtcbiAgcmV0dXJuIGNhck1hbmFnZW1lbnRCbG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2FyTWFuYWdlbWVudDtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlSW1nIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBnZXRBbGxDYXJzLCByZW1vdmVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgeyBzdGFydFN0b3BDYXIsIGNoZWNrRW5naW5lIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2VuZ2luZSc7XG5pbXBvcnQgZ2V0RHJpdmVTdGVwIGZyb20gJy4uLy4uLy4uL2FuaW1hdGlvbi9kcml2ZSc7XG5pbXBvcnQgeyBJQ2FyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9jYXInO1xuaW1wb3J0IHsgcmFjZVN0YXRzIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyR2FyYWdlSGVhZGVyKCkge1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyID0gY3JlYXRlTm9kZSgnaGVhZGVyJyk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJMYWJlbCA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fbGFiZWwnLCAnR2FyYWdlJyk7XG4gIGNvbnN0IGNhcnNBbW91bnQgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fdmFsdWUnLCBjYXJzQW1vdW50Lmxlbmd0aCk7XG5cbiAgZ2FyYWdlQ2Fyc0hlYWRlci5hcHBlbmQoZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsLCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUpO1xuICByZXR1cm4gZ2FyYWdlQ2Fyc0hlYWRlcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBhZ2UoKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcicpO1xuICBjb25zdCBwYWdlTnVtYmVyTGFiZWwgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fbGFiZWwnLCAnUGFnZSAjJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX192YWx1ZScsICcxJyk7XG4gIHBhZ2VOdW1iZXIuYXBwZW5kKHBhZ2VOdW1iZXJMYWJlbCwgcGFnZU51bWJlclZhbHVlKTtcbiAgcmV0dXJuIHBhZ2VOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNwZWNpZmljQ2FyKGNhcjogSUNhcikge1xuICBjb25zdCBjYXJCbG9jayA9IGNyZWF0ZU5vZGUoJ2Nhci1ibG9jaycpO1xuXG4gIGNvbnN0IGNhck1vZGlmaWVycyA9IGNyZWF0ZU5vZGUoJ21vZGlmaWVyJyk7XG4gIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc2VsZWN0Jyk7XG4gIHNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdF9faW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGVkaXRJbnB1dC52YWx1ZSA9IGNhci5uYW1lO1xuICAgIGVkaXRJbnB1dC5kYXRhc2V0LmNhcklkID0gYCR7Y2FyLmlkfWA7XG4gIH0pO1xuICBjb25zdCByZW1vdmVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3JlbW92ZScpO1xuICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQ2FyKGNhci5pZCk7XG4gICAgY2FyQmxvY2sucmVtb3ZlKCk7XG4gIH0pO1xuICBjYXJNb2RpZmllcnMuYXBwZW5kKHNlbGVjdEJ1dHRvbiwgcmVtb3ZlQnV0dG9uKTtcblxuICBjb25zdCBjYXJOYW1lID0gY3JlYXRlTm9kZSgnbmFtZScsIGNhci5uYW1lKTtcbiAgY29uc3QgY2FySWNvbkJsb2NrID0gY3JlYXRlSW1nKCdhc3NldHMvaWNvbi9jYXJJY29uLnN2ZycsICdjYXInKTtcbiAgY29uc3QgZmxhZ0ljb25CbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vZmxhZy5zdmcnLCAnZmxhZycpO1xuICBjb25zdCBjb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG4gIGNvbnN0IHN0b3AgPSBjcmVhdGVCdXR0b24oJ3N0b3AnKTtcbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVCdXR0b24oJ3N0YXJ0Jyk7XG4gIHN0YXJ0LmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcbiAgbGV0IGNhckFuaW1hdGlvbkludGVydmFsSWQ6IG51bWJlcjtcbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHJhY2VEdXJhdGlvbjtcbiAgICBjb25zdCBzdGFydFJhY2UgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGF3YWl0IHN0YXJ0U3RvcENhcihjYXIuaWQsICdzdGFydGVkJyk7XG4gICAgY29uc3QgZHJpdmVBbmltYXRpb25TdGVwID0gZ2V0RHJpdmVTdGVwKHZlbG9jaXR5KTtcblxuICAgIGNhckFuaW1hdGlvbkludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKCtjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlLnNsaWNlKDAsIC0xKSA+PSAxMDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgICAgICAgY29uc3QgZW5kUmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICByYWNlRHVyYXRpb24gPSBlbmRSYWNlIC0gc3RhcnRSYWNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRlVmFsdWUgPSBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlO1xuICAgICAgY29uc3QgbmV3VHJhbnNsYXRlVmFsdWUgPSBjdXJyZW50VHJhbnNsYXRlVmFsdWUgPyBgJHsrY3VycmVudFRyYW5zbGF0ZVZhbHVlLnNsaWNlKDAsIC0xKSArIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2V9JWAgOiBgJHtkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgO1xuICAgICAgY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZSA9IG5ld1RyYW5zbGF0ZVZhbHVlO1xuICAgIH0sIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2UpO1xuXG4gICAgY29uc3QgaXNFbmdpbmVPayA9IGF3YWl0IGNoZWNrRW5naW5lKGNhci5pZCk7XG4gICAgaWYgKCFpc0VuZ2luZU9rKSBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICB9KTtcblxuICBzdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gICAgY29uc3Qgc3RvcENhciA9IGF3YWl0IHN0YXJ0U3RvcENhcihjYXIuaWQsICdzdG9wcGVkJyk7XG4gICAgaWYgKHN0b3BDYXIpIHtcbiAgICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSAnJztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnRyb2xzLmFwcGVuZChzdGFydCwgc3RvcCk7XG5cbiAgY29uc3QgcmFjZSA9IGNyZWF0ZU5vZGUoJ3JhY2UnKTtcbiAgcmFjZS5hcHBlbmQoY2FySWNvbkJsb2NrLCBmbGFnSWNvbkJsb2NrKTtcblxuICBjYXJCbG9jay5hcHBlbmQoY2FyTW9kaWZpZXJzLCBjYXJOYW1lLCBjb250cm9scywgcmFjZSk7XG4gIHJldHVybiBjYXJCbG9jaztcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ2FycygpIHtcbiAgY29uc3QgY2FycyA9IGNyZWF0ZU5vZGUoJ2NhcnMnKTtcbiAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IGdldEFsbENhcnMoKTtcbiAgYWxsQ2Fycy5mb3JFYWNoKChjYXI6IElDYXIpID0+IHtcbiAgICBjYXJzLmFwcGVuZChyZW5kZXJTcGVjaWZpY0NhcihjYXIpKTtcbiAgfSk7XG4gIHJldHVybiBjYXJzO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VDYXJzKCkge1xuICBjb25zdCBnYXJhZ2VDYXJzID0gY3JlYXRlTm9kZSgnZ2FyYWdlLWNhcnMnKTtcbiAgY29uc3QgaGVhZGVyID0gYXdhaXQgcmVuZGVyR2FyYWdlSGVhZGVyKCk7XG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gcmVuZGVyQ3VycmVudFBhZ2UoKTtcbiAgY29uc3QgY2FycyA9IGF3YWl0IHJlbmRlckNhcnMoKTtcblxuICBnYXJhZ2VDYXJzLmFwcGVuZChoZWFkZXIsIGN1cnJlbnRQYWdlLCBjYXJzKTtcbiAgcmV0dXJuIGdhcmFnZUNhcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZUNhcnM7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGJyYW5kcywgbW9kZWxzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMtbmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5cbmZ1bmN0aW9uIHJlbmRlckdhcmFnZUNvbnRyb2xzKCkge1xuICBjb25zdCBnYXJhZ2VDb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG5cbiAgY29uc3QgcmFjZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmFjZScpO1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVzZXQnKTtcbiAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2dlbmFyYXRlJyk7XG4gIGdlbmVyYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhcnNUb0dlbmVyYXRlID0gMTA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJzVG9HZW5lcmF0ZTsgaSArPSAxKSB7XG4gICAgICBjb25zdCByYW5kQnJhbmQgPSBicmFuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYnJhbmRzLmxlbmd0aCldO1xuICAgICAgY29uc3QgcmFuZE1vZGVsID0gbW9kZWxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vZGVscy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IGNhck5hbWUgPSBgJHtyYW5kQnJhbmR9ICR7cmFuZE1vZGVsfWA7XG4gICAgICBjb25zdCBjYXIgPSB7XG4gICAgICAgIG5hbWU6IGNhck5hbWUsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICB9O1xuICAgICAgY3JlYXRlQ2FyKGNhcik7XG4gICAgfVxuICB9KTtcblxuICBnYXJhZ2VDb250cm9scy5hcHBlbmQocmFjZUJ1dHRvbiwgcmVzZXRCdXR0b24sIGdlbmVyYXRlQnV0dG9uKTtcbiAgcmV0dXJuIGdhcmFnZUNvbnRyb2xzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VDb250cm9scztcbiIsImltcG9ydCByZW5kZXJDYXJNYW5hZ2VtZW50IGZyb20gJy4vY29tcG9uZW50cy9jYXItbWFuYWdlbWVudCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ29udHJvbHMgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scyc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ2FycyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMnO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBnYXJhZ2VWaWV3ID0gY3JlYXRlTm9kZSgnZ2FyYWdlJyk7XG4gIGlmIChib2R5KSB7XG4gICAgY29uc3QgY2FyTWFuYWdlbWVudCA9IHJlbmRlckNhck1hbmFnZW1lbnQoKTtcbiAgICBjb25zdCBnYXJhZ2VDb250cm9scyA9IHJlbmRlckdhcmFnZUNvbnRyb2xzKCk7XG4gICAgY29uc3QgZ2FyYWdlQ2FycyA9IGF3YWl0IHJlbmRlckdhcmFnZUNhcnMoKTtcblxuICAgIGdhcmFnZVZpZXcuYXBwZW5kKGNhck1hbmFnZW1lbnQsIGdhcmFnZUNvbnRyb2xzLCBnYXJhZ2VDYXJzKTtcbiAgICBib2R5LmFwcGVuZChnYXJhZ2VWaWV3KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VQYWdlO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgdG9HYXJhZ2UgPSBjcmVhdGVCdXR0b24oJ2dhcmFnZScpO1xuICB0b0dhcmFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IHJlY29yZHNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoZ2FyYWdlVmlldyAmJiByZWNvcmRzVmlldykge1xuICAgICAgZ2FyYWdlVmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHJlY29yZHNWaWV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0b1JlY29yZHMgPSBjcmVhdGVCdXR0b24oJ3JlY29yZHMnKTtcbiAgdG9SZWNvcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgcmVjb3Jkc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChnYXJhZ2VWaWV3ICYmIHJlY29yZHNWaWV3KSB7XG4gICAgICBnYXJhZ2VWaWV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICByZWNvcmRzVmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG4gIGNvbnN0IGhlYWRlckJ1dHRvbnMgPSBjcmVhdGVOb2RlKCdidXR0b25zJyk7XG4gIGhlYWRlckJ1dHRvbnMuYXBwZW5kKHRvR2FyYWdlLCB0b1JlY29yZHMpO1xuXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyQnV0dG9ucyk7XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keT8uYXBwZW5kKGhlYWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuZnVuY3Rpb24gcmVuZGVyUmVjb3Jkc1BhZ2UoKSB7XG4gIGNvbnN0IHJlY29yZHMgPSBjcmVhdGVOb2RlKCdyZWNvcmRzJyk7XG4gIHJlY29yZHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keT8uYXBwZW5kKHJlY29yZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJSZWNvcmRzUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckdhcmFnZVBhZ2UgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9nYXJhZ2UnO1xuaW1wb3J0IHJlbmRlclJlY29yZHNQYWdlIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9yZWNvcmRzL3JlY29yZHMnO1xuaW1wb3J0IHJlbmRlckhlYWRlciBmcm9tICcuL3NjcmlwdHMvcGFnZXMvaGVhZGVyJztcblxucmVuZGVySGVhZGVyKCk7XG5yZW5kZXJHYXJhZ2VQYWdlKCk7XG5yZW5kZXJSZWNvcmRzUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9