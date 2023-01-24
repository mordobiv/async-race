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
    const time = _config__WEBPACK_IMPORTED_MODULE_0__.raceStats.maxAnimationTime / (velocity / _config__WEBPACK_IMPORTED_MODULE_0__.raceStats.minPossibleVelocity);
    const totalSteps = _config__WEBPACK_IMPORTED_MODULE_0__.raceStats.framesPerSecond * time;
    const stepDistance = _config__WEBPACK_IMPORTED_MODULE_0__.raceStats.distance / totalSteps;
    return {
        stepDistance,
        time,
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
/* harmony export */   "carsToGenerate": () => (/* binding */ carsToGenerate),
/* harmony export */   "raceStats": () => (/* binding */ raceStats),
/* harmony export */   "winnersConfig": () => (/* binding */ winnersConfig)
/* harmony export */ });
const apiUrl = 'http://127.0.0.1:3000/';
const raceStats = {
    maxAnimationTime: 40,
    minPossibleVelocity: 50,
    framesPerSecond: 60,
    distance: 100,
};
const winnersConfig = {
    limit: 7,
    page: 1,
    sort: 'time',
    order: 'ASC',
};
const carsToGenerate = 7;


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
const brands = ['Peugeot', 'BMW', 'Porsche', 'Zhiguli', 'Audi', 'Mercedes', 'Fiat', 'MAZ', 'Buggati', 'Rolls-Royse', 'Pagani'];
const models = ['406 Coupe', 'AMG', 'M-Series', 'RS', '3-series', 'A6', 'C208', '911', 'Cayman', '4S', 'Sport'];


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

const garageUrl = `${_config__WEBPACK_IMPORTED_MODULE_0__.apiUrl}garage/`;
async function getAllCars() {
    const response = await fetch(garageUrl);
    if (response.ok) {
        const allCars = await response.json();
        return allCars;
    }
    return new Error('Cannot get cars list');
}
async function getCar(id) {
    const response = await fetch(`${garageUrl}${id}`);
    if (response.ok) {
        return response.json();
    }
}
async function createCar(car) {
    const request = await fetch(garageUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    });
    if (request.ok) {
        // console.log('wow');
        return request.json();
    }
    throw new Error('Cannot add car');
}
async function removeCar(id) {
    const request = await fetch(`${garageUrl}${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (request.ok) {
        // console.log('Perfect');
    }
}
async function updateCar(id, name, color = '123') {
    const car = {
        name,
        color,
    };
    const request = await fetch(`${garageUrl}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    });
    if (request.ok) {
        // console.log('wow');
    }
    else {
        throw new Error('Cannot add car');
    }
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

const engineUrl = `${_config__WEBPACK_IMPORTED_MODULE_0__.apiUrl}engine`;
async function startStopCar(carId, status) {
    const url = new URL(engineUrl);
    url.searchParams.set('id', `${carId}`);
    url.searchParams.set('status', status);
    const startEngineRequest = await fetch(url, {
        method: 'PATCH',
    });
    if (startEngineRequest.ok) {
        const response = await startEngineRequest.json();
        const { velocity } = response;
        return velocity;
    }
}
async function checkEngine(carId) {
    const url = new URL(engineUrl);
    url.searchParams.set('id', `${carId}`);
    url.searchParams.set('status', 'drive');
    const startDriveRequest = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            id: carId,
            status: 'drive',
        }),
    });
    return startDriveRequest.ok;
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

const winnersUrl = `${_config__WEBPACK_IMPORTED_MODULE_0__.apiUrl}winners/`;
async function getWinners(renderOptions) {
    let urlOptions = {};
    console.log(renderOptions);
    if (renderOptions) {
        Object.keys(_config__WEBPACK_IMPORTED_MODULE_0__.winnersConfig).forEach((key) => {
            if (!(key in renderOptions)) {
                urlOptions[key] = _config__WEBPACK_IMPORTED_MODULE_0__.winnersConfig[key];
            }
            else {
                urlOptions[key] = renderOptions[key];
            }
        });
    }
    else
        urlOptions = _config__WEBPACK_IMPORTED_MODULE_0__.winnersConfig;
    // urlOptions.limit = winnersConfig.limit;
    // urlOptions.page = winnersConfig.page;
    const url = new URL(winnersUrl);
    Object.keys(urlOptions).forEach((key) => {
        url.searchParams.set(`_${key}`, `${urlOptions[key]}`);
    });
    const winnersRequest = await fetch(url);
    if (winnersRequest.ok) {
        return winnersRequest.json();
    }
}
async function getWinner(id) {
    const url = new URL(`${winnersUrl}${id}`);
    const winnerRequest = await fetch(url);
    if (winnerRequest.ok) {
        return winnerRequest.json();
    }
    return winnerRequest.status;
}
async function createWinner(id, time) {
    const recordNode = {
        id,
        wins: 1,
        time,
    };
    const createWinnerRequest = await fetch(winnersUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recordNode),
    });
    if (createWinnerRequest.ok) {
        return createWinnerRequest.json();
    }
}
async function deleteWinner(id) {
    const url = `${winnersUrl}${id}`;
    const deleteWinnerRequest = await fetch(url, {
        method: 'DELETE',
    });
    if (deleteWinnerRequest.ok) {
        return deleteWinnerRequest.json();
    }
}
async function updateWinner(id, wins, time) {
    const url = `${winnersUrl}${id}`;
    const updateWinnerRequest = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            wins,
            time,
        }),
    });
    if (updateWinnerRequest.ok) {
        return updateWinnerRequest.json();
    }
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
    const node = document.createElement('div');
    node.className = className;
    if (textContent)
        node.textContent = textContent;
    return node;
}
function createButton(buttonName) {
    const button = document.createElement('button');
    button.className = `button button__${buttonName}`;
    button.textContent = buttonName;
    return button;
}
function createImg(src, className) {
    const imgBlock = createNode(className);
    const img = document.createElement('img');
    img.className = `${className}__img`;
    img.src = src;
    imgBlock.append(img);
    return imgBlock;
}
function createTableHeader(className, textContent) {
    const node = document.createElement('th');
    node.className = className;
    node.textContent = textContent;
    return node;
}
function createTableCell(textContent) {
    const node = document.createElement('td');
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



function renderCarSelection(blockType) {
    const main = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)(blockType);
    const setName = document.createElement('input');
    setName.className = `${blockType}__input`;
    const color = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)(`${blockType}__color`);
    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(blockType);
    button.addEventListener('click', async () => {
        if (blockType === 'create') {
            const car = {
                name: setName.value,
                color: 'aaaaaa',
            };
            const newCar = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.createCar)(car);
            const carsHeaderAmountBlock = document.querySelector('.header__value');
            if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
                carsHeaderAmountBlock.textContent = `${+carsHeaderAmountBlock.textContent + 1}`;
            }
            const carsBlock = document.querySelector('.cars');
            if (carsBlock) {
                carsBlock.append((0,_garage_cars__WEBPACK_IMPORTED_MODULE_2__.renderSpecificCar)(newCar));
            }
        }
        else {
            const { carId } = setName.dataset;
            if (carId) {
                const { value } = setName;
                (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.updateCar)(+carId, value, 'brown');
            }
        }
    });
    main.append(setName, color, button);
    return main;
}
function renderCarManagement() {
    const carManagementBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('car-management');
    const createCarBlock = renderCarSelection('create');
    const editCarBlock = renderCarSelection('edit');
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





async function renderHeader() {
    const garageCarsHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header');
    const garageCarsHeaderLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header__label', 'Garage');
    const carsAmount = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
    const garageCarsHeaderValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header__value', carsAmount.length);
    garageCarsHeader.append(garageCarsHeaderLabel, garageCarsHeaderValue);
    return garageCarsHeader;
}
function renderCurrentPage() {
    const pageNumber = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('page-number');
    const pageNumberLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('page-number__label', 'Page #');
    const pageNumberValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('page-number__value', '1');
    pageNumber.append(pageNumberLabel, pageNumberValue);
    return pageNumber;
}
function renderSpecificCar(car) {
    const carBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('car-block');
    const carModifiers = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('modifier');
    const selectButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('select');
    selectButton.addEventListener('click', () => {
        const editInput = document.querySelector('.edit__input');
        editInput.value = car.name;
        editInput.dataset.carId = `${car.id}`;
    });
    const removeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('remove');
    removeButton.addEventListener('click', () => {
        (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.removeCar)(car.id);
        carBlock.remove();
        const carsHeaderAmountBlock = document.querySelector('.header__value');
        if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
            carsHeaderAmountBlock.textContent = `${+carsHeaderAmountBlock.textContent - 1}`;
        }
        (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.deleteWinner)(car.id);
    });
    carModifiers.append(selectButton, removeButton);
    const carName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('name', car.name);
    const carIconBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('assets/icon/carIcon.svg', 'car');
    const flagIconBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('assets/icon/flag.svg', 'flag');
    const controls = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('controls');
    const start = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('start');
    const stop = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('stop');
    start.disabled = false;
    stop.disabled = true;
    start.dataset.carId = `${car.id}`;
    let carAnimationIntervalId = 0;
    start.addEventListener('click', async () => {
        start.classList.add('button__disabled');
        start.disabled = true;
        const startRace = new Date().valueOf();
        const velocity = await (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.startStopCar)(car.id, 'started');
        const driveAnimationStep = (0,_animation_drive__WEBPACK_IMPORTED_MODULE_4__["default"])(velocity);
        stop.disabled = false;
        carAnimationIntervalId = window.setInterval(async () => {
            if (carIconBlock) {
                if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
                    clearInterval(carAnimationIntervalId);
                    const endRace = new Date().valueOf();
                    const raceDuration = ((endRace - startRace) / 1000).toFixed(2);
                    if (sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true') {
                        sessionStorage.setItem('race', 'false');
                        alert(`${car.name} has won!\nTime: ${raceDuration}s`);
                        const carWin = await (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.getWinner)(car.id);
                        if (carWin === 404) {
                            (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.createWinner)(car.id, +raceDuration);
                            const recordsAmount = document.querySelector('.records__amount');
                            if (recordsAmount && recordsAmount.textContent) {
                                recordsAmount.textContent = `${+recordsAmount.textContent + 1}`;
                            }
                        }
                        else {
                            const newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
                            (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.updateWinner)(car.id, carWin.wins + 1, +newTime);
                        }
                    }
                    return;
                }
                const currentTranslateValue = carIconBlock.style.translate;
                const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance}%` : `${driveAnimationStep.stepDistance}%`;
                carIconBlock.style.translate = newTranslateValue;
            }
        }, driveAnimationStep.stepDistance);
        carBlock.dataset.intervalId = `${carAnimationIntervalId}`;
        const isEngineOk = await (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.checkEngine)(car.id);
        if (!isEngineOk)
            clearInterval(carAnimationIntervalId);
    });
    stop.addEventListener('click', () => {
        stop.disabled = true;
        start.disabled = false;
        (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.startStopCar)(car.id, 'stopped');
        carIconBlock.style.translate = '';
        clearInterval(carAnimationIntervalId);
    });
    controls.append(start, stop);
    const race = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('race');
    race.append(carIconBlock, flagIconBlock);
    carBlock.append(carModifiers, carName, controls, race);
    return carBlock;
}
async function renderCars() {
    const cars = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('cars');
    const allCars = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
    allCars.forEach((car) => {
        cars.append(renderSpecificCar(car));
    });
    return cars;
}
async function renderGarageCars() {
    const garageCars = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('garage-cars');
    const header = await renderHeader();
    const currentPage = renderCurrentPage();
    const cars = await renderCars();
    garageCars.append(header, currentPage, cars);
    return garageCars;
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/scripts/config.ts");





function renderGarageControls() {
    const garageControls = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('controls');
    const raceButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('race');
    raceButton.addEventListener('click', () => {
        sessionStorage.setItem('race', 'true');
        document.querySelectorAll('.button__start').forEach((el) => el.click());
    });
    const resetButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('reset');
    resetButton.addEventListener('click', () => document.querySelectorAll('.button__stop').forEach((el) => el.click()));
    const generateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('generate');
    generateButton.addEventListener('click', async () => {
        const results = [];
        const carsBlock = document.querySelector('.cars');
        for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_4__.carsToGenerate; i += 1) {
            const randBrand = _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.brands[Math.floor(Math.random() * _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.brands.length)];
            const randModel = _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.models[Math.floor(Math.random() * _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.models.length)];
            const carName = `${randBrand} ${randModel}`;
            const car = {
                name: carName,
                color: 'blue',
            };
            results.push((0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_2__.createCar)(car));
        }
        if (carsBlock) {
            (await Promise.all(results)).forEach((el) => {
                carsBlock.append((0,_garage_cars__WEBPACK_IMPORTED_MODULE_3__.renderSpecificCar)(el));
            });
        }
        const carsHeaderAmountBlock = document.querySelector('.header__value');
        if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
            carsHeaderAmountBlock.textContent = `${+carsHeaderAmountBlock.textContent + _config__WEBPACK_IMPORTED_MODULE_4__.carsToGenerate}`;
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




async function renderGaragePage() {
    sessionStorage.setItem('race', 'false');
    const body = document.querySelector('body');
    const garageView = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.createNode)('garage');
    if (body) {
        const carManagement = (0,_components_car_management__WEBPACK_IMPORTED_MODULE_0__["default"])();
        const garageControls = (0,_components_garage_controls__WEBPACK_IMPORTED_MODULE_1__["default"])();
        const garageCars = await (0,_components_garage_cars__WEBPACK_IMPORTED_MODULE_2__["default"])();
        garageView.append(carManagement, garageControls, garageCars);
        body.append(garageView);
    }
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
    const header = document.createElement('header');
    header.className = 'header';
    const headerButtons = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('buttons');
    const toGarage = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('garage');
    toGarage.addEventListener('click', () => {
        const garageView = document.querySelector('.garage');
        const recordsView = document.querySelector('.records');
        if (garageView && recordsView) {
            garageView.style.display = 'block';
            recordsView.style.display = 'none';
        }
    });
    const toRecords = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('records');
    toRecords.addEventListener('click', () => {
        const garageView = document.querySelector('.garage');
        const recordsView = document.querySelector('.records');
        if (garageView && recordsView) {
            garageView.style.display = 'none';
            recordsView.style.display = 'block';
            (0,_records_records__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
    });
    headerButtons.append(toGarage, toRecords);
    header.append(headerButtons);
    const body = document.querySelector('body');
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



async function renderTable(urlOptions) {
    var _a;
    const table = document.createElement('table');
    table.className = 'winners';
    const headerRow = document.createElement('tr');
    headerRow.className = 'winners__header';
    const tableHeaderNumber = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__number', '#');
    const tableHeaderCar = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__car', 'Car');
    const tableHeaderName = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__name', 'Name');
    const tableHeaderWins = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__wins clickable', 'Wins ⇅');
    tableHeaderWins.addEventListener('click', () => {
        const options = {
            sort: 'wins',
            order: sessionStorage.getItem('winnersOrder') === 'asc' ? 'ASC' : 'DESC',
        };
        if (sessionStorage.getItem('winnersOrder') === 'asc') {
            sessionStorage.setItem('winnersOrder', 'desc');
        }
        else
            sessionStorage.setItem('winnersOrder', 'asc');
        renderTable(options);
    });
    const tableHeaderTime = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__time', 'Time ⇅');
    tableHeaderTime.addEventListener('click', () => {
        const options = {
            sort: 'time',
            order: sessionStorage.getItem('winnersOrder') === 'asc' ? 'ASC' : 'DESC',
        };
        if (sessionStorage.getItem('winnersOrder') === 'asc') {
            sessionStorage.setItem('winnersOrder', 'desc');
        }
        else
            sessionStorage.setItem('winnersOrder', 'asc');
        renderTable(options);
    });
    headerRow.append(tableHeaderNumber, tableHeaderCar, tableHeaderName, tableHeaderWins, tableHeaderTime);
    table.append(headerRow);
    const winners = await (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_0__.getWinners)(urlOptions);
    let counter = 0;
    const cars = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_2__.getAllCars)();
    winners.forEach(async (winner) => {
        counter += 1;
        const dataRow = document.createElement('tr');
        const numberCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(`${counter}`);
        const carCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)();
        const carImgBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createImg)('assets/icon/carIcon.svg', 'car');
        carCell.append(carImgBlock);
        let nameCell = document.createElement('div');
        for (let i = 0; i < cars.length; i += 1) {
            if (cars[i].id === winner.id) {
                nameCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(cars[i].name);
            }
        }
        const winsCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(`${winner.wins}`);
        const timeCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(`${winner.time}`);
        dataRow.append(numberCell, carCell, nameCell, winsCell, timeCell);
        table.append(dataRow);
    });
    const records = document.querySelector('.records');
    if (records === null || records === void 0 ? void 0 : records.querySelector('.winners'))
        (_a = records.querySelector('.winners')) === null || _a === void 0 ? void 0 : _a.remove();
    records === null || records === void 0 ? void 0 : records.append(table);
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


async function renderWinnerHeader() {
    const records = await (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_0__.getWinners)();
    const recordsBlock = document.querySelector('.records');
    const recordsLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('records__label', 'Records:');
    const recordsValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('records__amount', `${records.length}`);
    recordsBlock === null || recordsBlock === void 0 ? void 0 : recordsBlock.append(recordsLabel, recordsValue);
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



async function renderRecordsPage() {
    const renderOptions = {
        sort: 'wins',
        order: 'ASC',
    };
    const body = document.querySelector('body');
    if (body) {
        const records = document.querySelector('.records');
        if (records)
            records.remove();
    }
    const records = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records');
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



async function renderApp() {
    (0,_scripts_pages_header__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_scripts_pages_garage_garage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    await (0,_scripts_pages_records_records__WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.querySelector('.records').style.display = 'none';
}
renderApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTLFlBQVksQ0FBQyxRQUFnQjtJQUNwQyxNQUFNLElBQUksR0FBRywrREFBMEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxrRUFBNkIsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sVUFBVSxHQUFHLDhEQUF5QixHQUFHLElBQUksQ0FBQztJQUVwRCxNQUFNLFlBQVksR0FBRyx1REFBa0IsR0FBRyxVQUFVLENBQUM7SUFDckQsT0FBTztRQUNMLFlBQVk7UUFDWixJQUFJO0tBQ0wsQ0FBQztBQUNKLENBQUM7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JyQixNQUFNLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQztBQUV4QyxNQUFNLFNBQVMsR0FBRztJQUN2QixnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLG1CQUFtQixFQUFFLEVBQUU7SUFDdkIsZUFBZSxFQUFFLEVBQUU7SUFDbkIsUUFBUSxFQUFFLEdBQUc7Q0FDZCxDQUFDO0FBRUssTUFBTSxhQUFhLEdBQUc7SUFDM0IsS0FBSyxFQUFFLENBQUM7SUFDUixJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLEtBQUs7Q0FDYixDQUFDO0FBRUssTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ6QixNQUFNLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvSCxNQUFNLE1BQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcEY7QUFFbkMsTUFBTSxTQUFTLEdBQUcsR0FBRywyQ0FBTSxTQUFTLENBQUM7QUFFOUIsS0FBSyxVQUFVLFVBQVU7SUFDOUIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQ2YsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFDRCxPQUFPLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVNLEtBQUssVUFBVSxNQUFNLENBQUMsRUFBVTtJQUNyQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtRQUNmLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsR0FBb0M7SUFDbEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUMxQixDQUFDLENBQUM7SUFFSCxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDZCxzQkFBc0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkI7SUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsRUFBVTtJQUN4QyxNQUFNLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRTtRQUMvQyxNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO1FBQ2QsMEJBQTBCO0tBQzNCO0FBQ0gsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxLQUFLLEdBQUcsS0FBSztJQUNyRSxNQUFNLEdBQUcsR0FBRztRQUNWLElBQUk7UUFDSixLQUFLO0tBQ04sQ0FBQztJQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBQy9DLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUMxQixDQUFDLENBQUM7SUFFSCxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDZCxzQkFBc0I7S0FDdkI7U0FBTTtRQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNuQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVrQztBQUVuQyxNQUFNLFNBQVMsR0FBRyxHQUFHLDJDQUFNLFFBQVEsQ0FBQztBQUU3QixLQUFLLFVBQVUsWUFBWSxDQUFDLEtBQWEsRUFBRSxNQUE2QjtJQUM3RSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUMxQyxNQUFNLEVBQUUsT0FBTztLQUNoQixDQUFDLENBQUM7SUFDSCxJQUFJLGtCQUFrQixDQUFDLEVBQUUsRUFBRTtRQUN6QixNQUFNLFFBQVEsR0FBRyxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pELE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFDOUIsT0FBTyxRQUFRLENBQUM7S0FDakI7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFdBQVcsQ0FBQyxLQUFhO0lBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ3pDLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkIsRUFBRSxFQUFFLEtBQUs7WUFDVCxNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDO0tBQ0gsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7QUFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmlEO0FBRWxELE1BQU0sVUFBVSxHQUFHLEdBQUcsMkNBQU0sVUFBVSxDQUFDO0FBRWhDLEtBQUssVUFBVSxVQUFVLENBQUMsYUFBK0U7SUFDOUcsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFM0IsSUFBSSxhQUFhLEVBQUU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxrREFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFFO2dCQUMzQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsa0RBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjs7UUFBTSxVQUFVLEdBQUcsa0RBQWEsQ0FBQztJQUVsQywwQ0FBMEM7SUFDMUMsd0NBQXdDO0lBRXhDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDdEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLGNBQWMsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEVBQUU7UUFDckIsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDOUI7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFNBQVMsQ0FBQyxFQUFVO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsSUFBSSxhQUFhLENBQUMsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQzlCLENBQUM7QUFFTSxLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQVUsRUFBRSxJQUFZO0lBQ3pELE1BQU0sVUFBVSxHQUFHO1FBQ2pCLEVBQUU7UUFDRixJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUk7S0FDTCxDQUFDO0lBQ0YsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDbEQsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0tBQ2pDLENBQUMsQ0FBQztJQUNILElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFO1FBQzFCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUFTO0lBQzFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQzNDLE1BQU0sRUFBRSxRQUFRO0tBQ2pCLENBQUMsQ0FBQztJQUNILElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFO1FBQzFCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFDdkUsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDakMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDM0MsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkIsSUFBSTtZQUNKLElBQUk7U0FDTCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxtQkFBbUIsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNuQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRk0sU0FBUyxVQUFVLENBQUMsU0FBaUIsRUFBRSxXQUFvQjtJQUNoRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzNCLElBQUksV0FBVztRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVNLFNBQVMsWUFBWSxDQUFDLFVBQWtCO0lBQzdDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsVUFBVSxFQUFFLENBQUM7SUFDbEQsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxTQUFpQjtJQUN0RCxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsU0FBUyxPQUFPLENBQUM7SUFDcEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDZCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxTQUFTLGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsV0FBbUI7SUFDdEUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMvQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBQyxXQUFvQjtJQUNsRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLElBQUksV0FBVztRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEMyRDtBQUNTO0FBQ25CO0FBRWxELFNBQVMsa0JBQWtCLENBQUMsU0FBaUI7SUFDM0MsTUFBTSxJQUFJLEdBQUcsb0RBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVuQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztJQUNwRSxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsU0FBUyxTQUFTLENBQUM7SUFFMUMsTUFBTSxLQUFLLEdBQUcsb0RBQVUsQ0FBQyxHQUFHLFNBQVMsU0FBUyxDQUFDLENBQUM7SUFFaEQsTUFBTSxNQUFNLEdBQUcsc0RBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFDLElBQUksU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUMxQixNQUFNLEdBQUcsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ25CLEtBQUssRUFBRSxRQUFRO2FBQ2hCLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGdFQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdkUsSUFBSSxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQzlELHFCQUFxQixDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMscUJBQXFCLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDO2FBQ2pGO1lBQ0QsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxJQUFJLFNBQVMsRUFBRTtnQkFDYixTQUFTLENBQUMsTUFBTSxDQUFDLCtEQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDN0M7U0FDRjthQUFNO1lBQ0wsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsZ0VBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsbUJBQW1CO0lBQzFCLE1BQU0sa0JBQWtCLEdBQUcsb0RBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhELGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEQsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBRUQsaUVBQWUsbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEb0M7QUFDRDtBQUNNO0FBR2xDO0FBQ1U7QUFHcEQsS0FBSyxVQUFVLFlBQVk7SUFDekIsTUFBTSxnQkFBZ0IsR0FBRyxvREFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0scUJBQXFCLEdBQUcsb0RBQVUsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEUsTUFBTSxVQUFVLEdBQUcsTUFBTSxpRUFBVSxFQUFFLENBQUM7SUFDdEMsTUFBTSxxQkFBcUIsR0FBRyxvREFBVSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFN0UsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDdEUsT0FBTyxnQkFBZ0IsQ0FBQztBQUMxQixDQUFDO0FBRUQsU0FBUyxpQkFBaUI7SUFDeEIsTUFBTSxVQUFVLEdBQUcsb0RBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxNQUFNLGVBQWUsR0FBRyxvREFBVSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sZUFBZSxHQUFHLG9EQUFVLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDcEQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUVNLFNBQVMsaUJBQWlCLENBQUMsR0FBUztJQUN6QyxNQUFNLFFBQVEsR0FBRyxvREFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sWUFBWSxHQUFHLG9EQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsTUFBTSxZQUFZLEdBQUcsc0RBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUMxQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBcUIsQ0FBQztRQUM3RSxTQUFTLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDM0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLFlBQVksR0FBRyxzREFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQzFDLGdFQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RSxJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLFdBQVcsRUFBRTtZQUM5RCxxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUNqRjtRQUNELHNFQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsWUFBWSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFaEQsTUFBTSxPQUFPLEdBQUcsb0RBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLE1BQU0sWUFBWSxHQUFHLG1EQUFTLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakUsTUFBTSxhQUFhLEdBQUcsbURBQVMsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRSxNQUFNLFFBQVEsR0FBRyxvREFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sS0FBSyxHQUFHLHNEQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsc0RBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxJQUFJLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUMvQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3pDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyxNQUFNLHFFQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RCxNQUFNLGtCQUFrQixHQUFHLDREQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNyRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ3JELGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNyQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUFFO3dCQUMvRSxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDeEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksb0JBQW9CLFlBQVksR0FBRyxDQUFDLENBQUM7d0JBQ3RELE1BQU0sTUFBTSxHQUFHLE1BQU0sbUVBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3ZDLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTs0QkFDbEIsc0VBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDakUsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLFdBQVcsRUFBRTtnQ0FDOUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQzs2QkFDakU7eUJBQ0Y7NkJBQU07NEJBQ0wsTUFBTSxPQUFPLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQzFFLHNFQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNqRDtxQkFDRjtvQkFDRCxPQUFPO2lCQUNSO2dCQUNELE1BQU0scUJBQXFCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQzNELE1BQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLENBQUM7Z0JBQ3RLLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztRQUMxRCxNQUFNLFVBQVUsR0FBRyxNQUFNLG9FQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVO1lBQUUsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QixxRUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFN0IsTUFBTSxJQUFJLEdBQUcsb0RBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUV6QyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxLQUFLLFVBQVUsVUFBVTtJQUN2QixNQUFNLElBQUksR0FBRyxvREFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLE1BQU0saUVBQVUsRUFBRSxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFTLEVBQUUsRUFBRTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxLQUFLLFVBQVUsZ0JBQWdCO0lBQzdCLE1BQU0sVUFBVSxHQUFHLG9EQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztJQUNwQyxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sVUFBVSxFQUFFLENBQUM7SUFFaEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0STRCO0FBQ1E7QUFDVjtBQUNSO0FBQ0Q7QUFFakQsU0FBUyxvQkFBb0I7SUFDM0IsTUFBTSxjQUFjLEdBQUcsb0RBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU5QyxNQUFNLFVBQVUsR0FBRyxzREFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUUsRUFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxXQUFXLEdBQUcsc0RBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFFLEVBQXdCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNJLE1BQU0sY0FBYyxHQUFHLHNEQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsRCxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsbURBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFDLE1BQU0sU0FBUyxHQUFHLDhEQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcscUVBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTSxTQUFTLEdBQUcsOERBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxxRUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLE9BQU8sR0FBRyxHQUFHLFNBQVMsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUM1QyxNQUFNLEdBQUcsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsTUFBTTthQUNkLENBQUM7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLGdFQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksU0FBUyxFQUFFO1lBQ2IsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDMUMsU0FBUyxDQUFDLE1BQU0sQ0FBQywrREFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RSxJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLFdBQVcsRUFBRTtZQUM5RCxxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsR0FBRyxtREFBYyxFQUFFLENBQUM7U0FDOUY7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMvRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDO0FBRUQsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QzBCO0FBQ0U7QUFDUjtBQUNiO0FBRTNDLEtBQUssVUFBVSxnQkFBZ0I7SUFDN0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxNQUFNLFVBQVUsR0FBRyxvREFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLElBQUksSUFBSSxFQUFFO1FBQ1IsTUFBTSxhQUFhLEdBQUcsc0VBQW1CLEVBQUUsQ0FBQztRQUM1QyxNQUFNLGNBQWMsR0FBRyx1RUFBb0IsRUFBRSxDQUFDO1FBQzlDLE1BQU0sVUFBVSxHQUFHLE1BQU0sbUVBQWdCLEVBQUUsQ0FBQztRQUU1QyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN6QjtBQUNILENBQUM7QUFFRCxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnNCO0FBQ0o7QUFFbEQsU0FBUyxZQUFZO0lBQ25CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFFNUIsTUFBTSxhQUFhLEdBQUcsb0RBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU1QyxNQUFNLFFBQVEsR0FBRyxzREFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3RDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFtQixDQUFDO1FBQ3ZFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFtQixDQUFDO1FBQ3pFLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbkMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFNBQVMsR0FBRyxzREFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFtQixDQUFDO1FBQ3ZFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFtQixDQUFDO1FBQ3pFLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDbEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3BDLDREQUFpQixFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFN0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDa0M7QUFDbUI7QUFDdEI7QUFHM0QsS0FBSyxVQUFVLFdBQVcsQ0FBQyxVQUFXOztJQUNwQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsU0FBUyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQUN4QyxNQUFNLGlCQUFpQixHQUFHLDJEQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sY0FBYyxHQUFHLDJEQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvRCxNQUFNLGVBQWUsR0FBRywyREFBaUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFbEUsTUFBTSxlQUFlLEdBQUcsMkRBQWlCLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUUsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDN0MsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO1NBQ3pFLENBQUM7UUFDRixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3BELGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEOztZQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sZUFBZSxHQUFHLDJEQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUM3QyxNQUFNLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDekUsQ0FBQztRQUNGLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDcEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEQ7O1lBQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLE1BQU0sQ0FDZCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGVBQWUsRUFDZixlQUFlLEVBQ2YsZUFBZSxDQUNoQixDQUFDO0lBQ0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixNQUFNLE9BQU8sR0FBRyxNQUFNLG9FQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLE1BQU0sSUFBSSxHQUFHLE1BQU0saUVBQVUsRUFBRSxDQUFDO0lBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQWUsRUFBRSxFQUFFO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDYixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sVUFBVSxHQUFHLHlEQUFlLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRWpELE1BQU0sT0FBTyxHQUFHLHlEQUFlLEVBQUUsQ0FBQztRQUNsQyxNQUFNLFdBQVcsR0FBRyxtREFBUyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUIsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUM1QixRQUFRLEdBQUcseURBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUM7U0FDRjtRQUNELE1BQU0sUUFBUSxHQUFHLHlEQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRCxNQUFNLFFBQVEsR0FBRyx5REFBZSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUFFLGFBQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLDBDQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3BGLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRW1DO0FBQ2hCO0FBRTlDLEtBQUssVUFBVSxrQkFBa0I7SUFDL0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxvRUFBVSxFQUFFLENBQUM7SUFDbkMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxNQUFNLFlBQVksR0FBRyxvREFBVSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sWUFBWSxHQUFHLG9EQUFVLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN4RSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZTO0FBQ1M7QUFDUTtBQUU1RCxLQUFLLFVBQVUsaUJBQWlCO0lBQzlCLE1BQU0sYUFBYSxHQUFHO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLEtBQUs7S0FDYixDQUFDO0lBQ0YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLElBQUksRUFBRTtRQUNSLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPO1lBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQy9CO0lBQ0QsTUFBTSxPQUFPLEdBQUcsb0RBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxrQ0FBa0M7SUFDbEMscUVBQWtCLEVBQUUsQ0FBQztJQUNyQixvRUFBVyxFQUFFLENBQUM7SUFDZCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ3RCakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZEO0FBQ0c7QUFDZDtBQUVsRCxLQUFLLFVBQVUsU0FBUztJQUN0QixpRUFBWSxFQUFFLENBQUM7SUFDZix3RUFBZ0IsRUFBRSxDQUFDO0lBQ25CLE1BQU0sMEVBQWlCLEVBQUUsQ0FBQztJQUN6QixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBb0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNoRixDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9uL2RyaXZlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9jYXJzLW5hbWUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9jYXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvZW5naW5lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvY2FyLW1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2dhcmFnZS1jYXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9nYXJhZ2UtY29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9nYXJhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9jb21wb25lbnRzL3JlbmRlci10YWJsZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9jb21wb25lbnRzL3dpbm5lci1oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYWNlU3RhdHMgfSBmcm9tICcuLi9jb25maWcnO1xuXG5mdW5jdGlvbiBnZXREcml2ZVN0ZXAodmVsb2NpdHk6IG51bWJlcikge1xuICBjb25zdCB0aW1lID0gcmFjZVN0YXRzLm1heEFuaW1hdGlvblRpbWUgLyAodmVsb2NpdHkgLyByYWNlU3RhdHMubWluUG9zc2libGVWZWxvY2l0eSk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSByYWNlU3RhdHMuZnJhbWVzUGVyU2Vjb25kICogdGltZTtcblxuICBjb25zdCBzdGVwRGlzdGFuY2UgPSByYWNlU3RhdHMuZGlzdGFuY2UgLyB0b3RhbFN0ZXBzO1xuICByZXR1cm4ge1xuICAgIHN0ZXBEaXN0YW5jZSxcbiAgICB0aW1lLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREcml2ZVN0ZXA7XG4iLCJleHBvcnQgY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC8nO1xuXG5leHBvcnQgY29uc3QgcmFjZVN0YXRzID0ge1xuICBtYXhBbmltYXRpb25UaW1lOiA0MCxcbiAgbWluUG9zc2libGVWZWxvY2l0eTogNTAsXG4gIGZyYW1lc1BlclNlY29uZDogNjAsXG4gIGRpc3RhbmNlOiAxMDAsXG59O1xuXG5leHBvcnQgY29uc3Qgd2lubmVyc0NvbmZpZyA9IHtcbiAgbGltaXQ6IDcsXG4gIHBhZ2U6IDEsXG4gIHNvcnQ6ICd0aW1lJyxcbiAgb3JkZXI6ICdBU0MnLFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcnNUb0dlbmVyYXRlID0gNztcbiIsImV4cG9ydCBjb25zdCBicmFuZHMgPSBbJ1BldWdlb3QnLCAnQk1XJywgJ1BvcnNjaGUnLCAnWmhpZ3VsaScsICdBdWRpJywgJ01lcmNlZGVzJywgJ0ZpYXQnLCAnTUFaJywgJ0J1Z2dhdGknLCAnUm9sbHMtUm95c2UnLCAnUGFnYW5pJ107XG5leHBvcnQgY29uc3QgbW9kZWxzID0gWyc0MDYgQ291cGUnLCAnQU1HJywgJ00tU2VyaWVzJywgJ1JTJywgJzMtc2VyaWVzJywgJ0E2JywgJ0MyMDgnLCAnOTExJywgJ0NheW1hbicsICc0UycsICdTcG9ydCddO1xuIiwiaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZ2FyYWdlVXJsID0gYCR7YXBpVXJsfWdhcmFnZS9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2FycygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnYXJhZ2VVcmwpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBhbGxDYXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBhbGxDYXJzO1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FycyBsaXN0Jyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXIoaWQ6IG51bWJlcikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWApO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXIoY2FyOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChnYXJhZ2VVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyKSxcbiAgfSk7XG5cbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAvLyBjb25zb2xlLmxvZygnd293Jyk7XG4gICAgcmV0dXJuIHJlcXVlc3QuanNvbigpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBjYXInKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNhcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBpZiAocmVxdWVzdC5vaykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdQZXJmZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGNvbG9yID0gJzEyMycpIHtcbiAgY29uc3QgY2FyID0ge1xuICAgIG5hbWUsXG4gICAgY29sb3IsXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyKSxcbiAgfSk7XG5cbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAvLyBjb25zb2xlLmxvZygnd293Jyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGNhcicpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBhcGlVcmwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBlbmdpbmVVcmwgPSBgJHthcGlVcmx9ZW5naW5lYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U3RvcENhcihjYXJJZDogbnVtYmVyLCBzdGF0dXM6ICdzdGFydGVkJyB8ICdzdG9wcGVkJykge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuZ2luZVVybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpZCcsIGAke2NhcklkfWApO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc3RhdHVzJywgc3RhdHVzKTtcbiAgY29uc3Qgc3RhcnRFbmdpbmVSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICB9KTtcbiAgaWYgKHN0YXJ0RW5naW5lUmVxdWVzdC5vaykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RhcnRFbmdpbmVSZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IHZlbG9jaXR5IH0gPSByZXNwb25zZTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRW5naW5lKGNhcklkOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmdpbmVVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnaWQnLCBgJHtjYXJJZH1gKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXR1cycsICdkcml2ZScpO1xuICBjb25zdCBzdGFydERyaXZlUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpZDogY2FySWQsXG4gICAgICBzdGF0dXM6ICdkcml2ZScsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gc3RhcnREcml2ZVJlcXVlc3Qub2s7XG59XG4iLCJpbXBvcnQgeyBhcGlVcmwsIHdpbm5lcnNDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCB3aW5uZXJzVXJsID0gYCR7YXBpVXJsfXdpbm5lcnMvYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbm5lcnMocmVuZGVyT3B0aW9ucz86IHsgc29ydDogJ3dpbnMnIHwgJ3RpbWUnLCBvcmRlcjogJ0FTQycgfCAnREVTQycsIHBhZ2U/OiBudW1iZXIgfSkge1xuICBsZXQgdXJsT3B0aW9ucyA9IHt9O1xuICBjb25zb2xlLmxvZyhyZW5kZXJPcHRpb25zKTtcblxuICBpZiAocmVuZGVyT3B0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKHdpbm5lcnNDb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCEoa2V5IGluIHJlbmRlck9wdGlvbnMpKSB7XG4gICAgICAgIHVybE9wdGlvbnNba2V5XSA9IHdpbm5lcnNDb25maWdba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybE9wdGlvbnNba2V5XSA9IHJlbmRlck9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHVybE9wdGlvbnMgPSB3aW5uZXJzQ29uZmlnO1xuXG4gIC8vIHVybE9wdGlvbnMubGltaXQgPSB3aW5uZXJzQ29uZmlnLmxpbWl0O1xuICAvLyB1cmxPcHRpb25zLnBhZ2UgPSB3aW5uZXJzQ29uZmlnLnBhZ2U7XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5uZXJzVXJsKTtcbiAgT2JqZWN0LmtleXModXJsT3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoYF8ke2tleX1gLCBgJHt1cmxPcHRpb25zW2tleV19YCk7XG4gIH0pO1xuICBjb25zdCB3aW5uZXJzUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmICh3aW5uZXJzUmVxdWVzdC5vaykge1xuICAgIHJldHVybiB3aW5uZXJzUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbm5lcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7d2lubmVyc1VybH0ke2lkfWApO1xuICBjb25zdCB3aW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKHdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gd2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbiAgcmV0dXJuIHdpbm5lclJlcXVlc3Quc3RhdHVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2lubmVyKGlkOiBudW1iZXIsIHRpbWU6IG51bWJlcikge1xuICBjb25zdCByZWNvcmROb2RlID0ge1xuICAgIGlkLFxuICAgIHdpbnM6IDEsXG4gICAgdGltZSxcbiAgfTtcbiAgY29uc3QgY3JlYXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHdpbm5lcnNVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVjb3JkTm9kZSksXG4gIH0pO1xuICBpZiAoY3JlYXRlV2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiBjcmVhdGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlV2lubmVyKGlkOm51bWJlcikge1xuICBjb25zdCB1cmwgPSBgJHt3aW5uZXJzVXJsfSR7aWR9YDtcbiAgY29uc3QgZGVsZXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pO1xuICBpZiAoZGVsZXRlV2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiBkZWxldGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2lubmVyKGlkOiBudW1iZXIsIHdpbnM6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IGAke3dpbm5lcnNVcmx9JHtpZH1gO1xuICBjb25zdCB1cGRhdGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgd2lucyxcbiAgICAgIHRpbWUsXG4gICAgfSksXG4gIH0pO1xuICBpZiAodXBkYXRlV2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiB1cGRhdGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoY2xhc3NOYW1lOiBzdHJpbmcsIHRleHRDb250ZW50Pzogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlmICh0ZXh0Q29udGVudCkgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidXR0b25OYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnV0dG9uIGJ1dHRvbl9fJHtidXR0b25OYW1lfWA7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk5hbWU7XG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWcoc3JjOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGltZ0Jsb2NrID0gY3JlYXRlTm9kZShjbGFzc05hbWUpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLmNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX1fX2ltZ2A7XG4gIGltZy5zcmMgPSBzcmM7XG4gIGltZ0Jsb2NrLmFwcGVuZChpbWcpO1xuICByZXR1cm4gaW1nQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcihjbGFzc05hbWU6IHN0cmluZywgdGV4dENvbnRlbnQ6IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZUNlbGwodGV4dENvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGlmICh0ZXh0Q29udGVudCkgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyLCB1cGRhdGVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgeyByZW5kZXJTcGVjaWZpY0NhciB9IGZyb20gJy4vZ2FyYWdlLWNhcnMnO1xuXG5mdW5jdGlvbiByZW5kZXJDYXJTZWxlY3Rpb24oYmxvY2tUeXBlOiBzdHJpbmcpIHtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZU5vZGUoYmxvY2tUeXBlKTtcblxuICBjb25zdCBzZXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBzZXROYW1lLmNsYXNzTmFtZSA9IGAke2Jsb2NrVHlwZX1fX2lucHV0YDtcblxuICBjb25zdCBjb2xvciA9IGNyZWF0ZU5vZGUoYCR7YmxvY2tUeXBlfV9fY29sb3JgKTtcblxuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oYmxvY2tUeXBlKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGlmIChibG9ja1R5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICBjb25zdCBjYXIgPSB7XG4gICAgICAgIG5hbWU6IHNldE5hbWUudmFsdWUsXG4gICAgICAgIGNvbG9yOiAnYWFhYWFhJyxcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdDYXIgPSBhd2FpdCBjcmVhdGVDYXIoY2FyKTtcbiAgICAgIGNvbnN0IGNhcnNIZWFkZXJBbW91bnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZhbHVlJyk7XG4gICAgICBpZiAoY2Fyc0hlYWRlckFtb3VudEJsb2NrICYmIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCkge1xuICAgICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ICsgMX1gO1xuICAgICAgfVxuICAgICAgY29uc3QgY2Fyc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnMnKTtcbiAgICAgIGlmIChjYXJzQmxvY2spIHtcbiAgICAgICAgY2Fyc0Jsb2NrLmFwcGVuZChyZW5kZXJTcGVjaWZpY0NhcihuZXdDYXIpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjYXJJZCB9ID0gc2V0TmFtZS5kYXRhc2V0O1xuICAgICAgaWYgKGNhcklkKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHNldE5hbWU7XG4gICAgICAgIHVwZGF0ZUNhcigrY2FySWQsIHZhbHVlLCAnYnJvd24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIG1haW4uYXBwZW5kKHNldE5hbWUsIGNvbG9yLCBidXR0b24pO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2FyTWFuYWdlbWVudCgpIHtcbiAgY29uc3QgY2FyTWFuYWdlbWVudEJsb2NrID0gY3JlYXRlTm9kZSgnY2FyLW1hbmFnZW1lbnQnKTtcbiAgY29uc3QgY3JlYXRlQ2FyQmxvY2sgPSByZW5kZXJDYXJTZWxlY3Rpb24oJ2NyZWF0ZScpO1xuICBjb25zdCBlZGl0Q2FyQmxvY2sgPSByZW5kZXJDYXJTZWxlY3Rpb24oJ2VkaXQnKTtcblxuICBjYXJNYW5hZ2VtZW50QmxvY2suYXBwZW5kKGNyZWF0ZUNhckJsb2NrLCBlZGl0Q2FyQmxvY2spO1xuICByZXR1cm4gY2FyTWFuYWdlbWVudEJsb2NrO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXJNYW5hZ2VtZW50O1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbWcgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldEFsbENhcnMsIHJlbW92ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IHN0YXJ0U3RvcENhciwgY2hlY2tFbmdpbmUgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvZW5naW5lJztcbmltcG9ydCB7XG4gIGNyZWF0ZVdpbm5lciwgZGVsZXRlV2lubmVyLCBnZXRXaW5uZXIsIHVwZGF0ZVdpbm5lcixcbn0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IGdldERyaXZlU3RlcCBmcm9tICcuLi8uLi8uLi9hbmltYXRpb24vZHJpdmUnO1xuaW1wb3J0IHsgSUNhciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY2FyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyID0gY3JlYXRlTm9kZSgnaGVhZGVyJyk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJMYWJlbCA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fbGFiZWwnLCAnR2FyYWdlJyk7XG4gIGNvbnN0IGNhcnNBbW91bnQgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fdmFsdWUnLCBjYXJzQW1vdW50Lmxlbmd0aCk7XG5cbiAgZ2FyYWdlQ2Fyc0hlYWRlci5hcHBlbmQoZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsLCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUpO1xuICByZXR1cm4gZ2FyYWdlQ2Fyc0hlYWRlcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBhZ2UoKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcicpO1xuICBjb25zdCBwYWdlTnVtYmVyTGFiZWwgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fbGFiZWwnLCAnUGFnZSAjJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX192YWx1ZScsICcxJyk7XG4gIHBhZ2VOdW1iZXIuYXBwZW5kKHBhZ2VOdW1iZXJMYWJlbCwgcGFnZU51bWJlclZhbHVlKTtcbiAgcmV0dXJuIHBhZ2VOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTcGVjaWZpY0NhcihjYXI6IElDYXIpIHtcbiAgY29uc3QgY2FyQmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItYmxvY2snKTtcblxuICBjb25zdCBjYXJNb2RpZmllcnMgPSBjcmVhdGVOb2RlKCdtb2RpZmllcicpO1xuICBjb25zdCBzZWxlY3RCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3NlbGVjdCcpO1xuICBzZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRfX2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBlZGl0SW5wdXQudmFsdWUgPSBjYXIubmFtZTtcbiAgICBlZGl0SW5wdXQuZGF0YXNldC5jYXJJZCA9IGAke2Nhci5pZH1gO1xuICB9KTtcbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyZW1vdmUnKTtcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUNhcihjYXIuaWQpO1xuICAgIGNhckJsb2NrLnJlbW92ZSgpO1xuICAgIGNvbnN0IGNhcnNIZWFkZXJBbW91bnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZhbHVlJyk7XG4gICAgaWYgKGNhcnNIZWFkZXJBbW91bnRCbG9jayAmJiBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQpIHtcbiAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgLSAxfWA7XG4gICAgfVxuICAgIGRlbGV0ZVdpbm5lcihjYXIuaWQpO1xuICB9KTtcbiAgY2FyTW9kaWZpZXJzLmFwcGVuZChzZWxlY3RCdXR0b24sIHJlbW92ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2FyTmFtZSA9IGNyZWF0ZU5vZGUoJ25hbWUnLCBjYXIubmFtZSk7XG4gIGNvbnN0IGNhckljb25CbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vY2FySWNvbi5zdmcnLCAnY2FyJyk7XG4gIGNvbnN0IGZsYWdJY29uQmxvY2sgPSBjcmVhdGVJbWcoJ2Fzc2V0cy9pY29uL2ZsYWcuc3ZnJywgJ2ZsYWcnKTtcbiAgY29uc3QgY29udHJvbHMgPSBjcmVhdGVOb2RlKCdjb250cm9scycpO1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJ1dHRvbignc3RhcnQnKTtcbiAgY29uc3Qgc3RvcCA9IGNyZWF0ZUJ1dHRvbignc3RvcCcpO1xuICBzdGFydC5kaXNhYmxlZCA9IGZhbHNlO1xuICBzdG9wLmRpc2FibGVkID0gdHJ1ZTtcbiAgc3RhcnQuZGF0YXNldC5jYXJJZCA9IGAke2Nhci5pZH1gO1xuICBsZXQgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCA9IDA7XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9fZGlzYWJsZWQnKTtcbiAgICBzdGFydC5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3Qgc3RhcnRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBhd2FpdCBzdGFydFN0b3BDYXIoY2FyLmlkLCAnc3RhcnRlZCcpO1xuICAgIGNvbnN0IGRyaXZlQW5pbWF0aW9uU3RlcCA9IGdldERyaXZlU3RlcCh2ZWxvY2l0eSk7XG4gICAgc3RvcC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoY2FySWNvbkJsb2NrKSB7XG4gICAgICAgIGlmICgrY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZS5zbGljZSgwLCAtMSkgPj0gMTAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgICAgICAgICBjb25zdCBlbmRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgICAgICAgY29uc3QgcmFjZUR1cmF0aW9uID0gKChlbmRSYWNlIC0gc3RhcnRSYWNlKSAvIDEwMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JhY2UnKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyYWNlJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmFjZScsICdmYWxzZScpO1xuICAgICAgICAgICAgYWxlcnQoYCR7Y2FyLm5hbWV9IGhhcyB3b24hXFxuVGltZTogJHtyYWNlRHVyYXRpb259c2ApO1xuICAgICAgICAgICAgY29uc3QgY2FyV2luID0gYXdhaXQgZ2V0V2lubmVyKGNhci5pZCk7XG4gICAgICAgICAgICBpZiAoY2FyV2luID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgY3JlYXRlV2lubmVyKGNhci5pZCwgK3JhY2VEdXJhdGlvbik7XG4gICAgICAgICAgICAgIGNvbnN0IHJlY29yZHNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3Jkc19fYW1vdW50Jyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmRzQW1vdW50ICYmIHJlY29yZHNBbW91bnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmRzQW1vdW50LnRleHRDb250ZW50ID0gYCR7K3JlY29yZHNBbW91bnQudGV4dENvbnRlbnQgKyAxfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1RpbWUgPSArcmFjZUR1cmF0aW9uIDwgY2FyV2luLnRpbWUgPyArcmFjZUR1cmF0aW9uIDogY2FyV2luLnRpbWU7XG4gICAgICAgICAgICAgIHVwZGF0ZVdpbm5lcihjYXIuaWQsIGNhcldpbi53aW5zICsgMSwgK25ld1RpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZVZhbHVlID0gY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZTtcbiAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlVmFsdWUgPSBjdXJyZW50VHJhbnNsYXRlVmFsdWUgPyBgJHsrY3VycmVudFRyYW5zbGF0ZVZhbHVlLnNsaWNlKDAsIC0xKSArIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2V9JWAgOiBgJHtkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgO1xuICAgICAgICBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlID0gbmV3VHJhbnNsYXRlVmFsdWU7XG4gICAgICB9XG4gICAgfSwgZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZSk7XG4gICAgY2FyQmxvY2suZGF0YXNldC5pbnRlcnZhbElkID0gYCR7Y2FyQW5pbWF0aW9uSW50ZXJ2YWxJZH1gO1xuICAgIGNvbnN0IGlzRW5naW5lT2sgPSBhd2FpdCBjaGVja0VuZ2luZShjYXIuaWQpO1xuICAgIGlmICghaXNFbmdpbmVPaykgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgfSk7XG4gIHN0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3RvcC5kaXNhYmxlZCA9IHRydWU7XG4gICAgc3RhcnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBzdGFydFN0b3BDYXIoY2FyLmlkLCAnc3RvcHBlZCcpO1xuICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSAnJztcbiAgICBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICB9KTtcbiAgY29udHJvbHMuYXBwZW5kKHN0YXJ0LCBzdG9wKTtcblxuICBjb25zdCByYWNlID0gY3JlYXRlTm9kZSgncmFjZScpO1xuICByYWNlLmFwcGVuZChjYXJJY29uQmxvY2ssIGZsYWdJY29uQmxvY2spO1xuXG4gIGNhckJsb2NrLmFwcGVuZChjYXJNb2RpZmllcnMsIGNhck5hbWUsIGNvbnRyb2xzLCByYWNlKTtcbiAgcmV0dXJuIGNhckJsb2NrO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJDYXJzKCkge1xuICBjb25zdCBjYXJzID0gY3JlYXRlTm9kZSgnY2FycycpO1xuICBjb25zdCBhbGxDYXJzID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICBhbGxDYXJzLmZvckVhY2goKGNhcjogSUNhcikgPT4ge1xuICAgIGNhcnMuYXBwZW5kKHJlbmRlclNwZWNpZmljQ2FyKGNhcikpO1xuICB9KTtcbiAgcmV0dXJuIGNhcnM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZUNhcnMoKSB7XG4gIGNvbnN0IGdhcmFnZUNhcnMgPSBjcmVhdGVOb2RlKCdnYXJhZ2UtY2FycycpO1xuICBjb25zdCBoZWFkZXIgPSBhd2FpdCByZW5kZXJIZWFkZXIoKTtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSByZW5kZXJDdXJyZW50UGFnZSgpO1xuICBjb25zdCBjYXJzID0gYXdhaXQgcmVuZGVyQ2FycygpO1xuXG4gIGdhcmFnZUNhcnMuYXBwZW5kKGhlYWRlciwgY3VycmVudFBhZ2UsIGNhcnMpO1xuICByZXR1cm4gZ2FyYWdlQ2Fycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlQ2FycztcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgYnJhbmRzLCBtb2RlbHMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycy1uYW1lJztcbmltcG9ydCB7IGNyZWF0ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IHJlbmRlclNwZWNpZmljQ2FyIH0gZnJvbSAnLi9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgeyBjYXJzVG9HZW5lcmF0ZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIHJlbmRlckdhcmFnZUNvbnRyb2xzKCkge1xuICBjb25zdCBnYXJhZ2VDb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG5cbiAgY29uc3QgcmFjZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmFjZScpO1xuICByYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAndHJ1ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25fX3N0YXJ0JykuZm9yRWFjaCgoZWwpID0+IChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKSk7XG4gIH0pO1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVzZXQnKTtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zdG9wJykuZm9yRWFjaCgoZWwpID0+IChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKSkpO1xuICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignZ2VuZXJhdGUnKTtcbiAgZ2VuZXJhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IGNhcnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJzVG9HZW5lcmF0ZTsgaSArPSAxKSB7XG4gICAgICBjb25zdCByYW5kQnJhbmQgPSBicmFuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYnJhbmRzLmxlbmd0aCldO1xuICAgICAgY29uc3QgcmFuZE1vZGVsID0gbW9kZWxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vZGVscy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IGNhck5hbWUgPSBgJHtyYW5kQnJhbmR9ICR7cmFuZE1vZGVsfWA7XG4gICAgICBjb25zdCBjYXIgPSB7XG4gICAgICAgIG5hbWU6IGNhck5hbWUsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICB9O1xuICAgICAgcmVzdWx0cy5wdXNoKGNyZWF0ZUNhcihjYXIpKTtcbiAgICB9XG4gICAgaWYgKGNhcnNCbG9jaykge1xuICAgICAgKGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdHMpKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBjYXJzQmxvY2suYXBwZW5kKHJlbmRlclNwZWNpZmljQ2FyKGVsKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgY2Fyc0hlYWRlckFtb3VudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICBpZiAoY2Fyc0hlYWRlckFtb3VudEJsb2NrICYmIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCkge1xuICAgICAgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ID0gYCR7K2NhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCArIGNhcnNUb0dlbmVyYXRlfWA7XG4gICAgfVxuICB9KTtcblxuICBnYXJhZ2VDb250cm9scy5hcHBlbmQocmFjZUJ1dHRvbiwgcmVzZXRCdXR0b24sIGdlbmVyYXRlQnV0dG9uKTtcbiAgcmV0dXJuIGdhcmFnZUNvbnRyb2xzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VDb250cm9scztcbiIsImltcG9ydCByZW5kZXJDYXJNYW5hZ2VtZW50IGZyb20gJy4vY29tcG9uZW50cy9jYXItbWFuYWdlbWVudCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ29udHJvbHMgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scyc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ2FycyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMnO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VQYWdlKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ2ZhbHNlJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGdhcmFnZVZpZXcgPSBjcmVhdGVOb2RlKCdnYXJhZ2UnKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBjb25zdCBjYXJNYW5hZ2VtZW50ID0gcmVuZGVyQ2FyTWFuYWdlbWVudCgpO1xuICAgIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gcmVuZGVyR2FyYWdlQ29udHJvbHMoKTtcbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuXG4gICAgZ2FyYWdlVmlldy5hcHBlbmQoY2FyTWFuYWdlbWVudCwgZ2FyYWdlQ29udHJvbHMsIGdhcmFnZUNhcnMpO1xuICAgIGJvZHkuYXBwZW5kKGdhcmFnZVZpZXcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZVBhZ2U7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJSZWNvcmRzUGFnZSBmcm9tICcuL3JlY29yZHMvcmVjb3Jkcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuICBjb25zdCBoZWFkZXJCdXR0b25zID0gY3JlYXRlTm9kZSgnYnV0dG9ucycpO1xuXG4gIGNvbnN0IHRvR2FyYWdlID0gY3JlYXRlQnV0dG9uKCdnYXJhZ2UnKTtcbiAgdG9HYXJhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCByZWNvcmRzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGdhcmFnZVZpZXcgJiYgcmVjb3Jkc1ZpZXcpIHtcbiAgICAgIGdhcmFnZVZpZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZWNvcmRzVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdG9SZWNvcmRzID0gY3JlYXRlQnV0dG9uKCdyZWNvcmRzJyk7XG4gIHRvUmVjb3Jkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IHJlY29yZHNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoZ2FyYWdlVmlldyAmJiByZWNvcmRzVmlldykge1xuICAgICAgZ2FyYWdlVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcmVjb3Jkc1ZpZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZW5kZXJSZWNvcmRzUGFnZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgaGVhZGVyQnV0dG9ucy5hcHBlbmQodG9HYXJhZ2UsIHRvUmVjb3Jkcyk7XG5cbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJCdXR0b25zKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5Py5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySGVhZGVyO1xuIiwiaW1wb3J0IHsgZ2V0V2lubmVycyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcbmltcG9ydCB7IGNyZWF0ZUltZywgY3JlYXRlVGFibGVDZWxsLCBjcmVhdGVUYWJsZUhlYWRlciB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2FycyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCBJV2lubmVyIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvd2lubmVyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyVGFibGUodXJsT3B0aW9ucz8pIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICB0YWJsZS5jbGFzc05hbWUgPSAnd2lubmVycyc7XG4gIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGhlYWRlclJvdy5jbGFzc05hbWUgPSAnd2lubmVyc19faGVhZGVyJztcbiAgY29uc3QgdGFibGVIZWFkZXJOdW1iZXIgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19udW1iZXInLCAnIycpO1xuICBjb25zdCB0YWJsZUhlYWRlckNhciA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX2NhcicsICdDYXInKTtcbiAgY29uc3QgdGFibGVIZWFkZXJOYW1lID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fbmFtZScsICdOYW1lJyk7XG5cbiAgY29uc3QgdGFibGVIZWFkZXJXaW5zID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fd2lucyBjbGlja2FibGUnLCAnV2lucyDih4UnKTtcbiAgdGFibGVIZWFkZXJXaW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzb3J0OiAnd2lucycsXG4gICAgICBvcmRlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnID8gJ0FTQycgOiAnREVTQycsXG4gICAgfTtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnZGVzYycpO1xuICAgIH0gZWxzZSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnYXNjJyk7XG4gICAgcmVuZGVyVGFibGUob3B0aW9ucyk7XG4gIH0pO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGVyVGltZSA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX3RpbWUnLCAnVGltZSDih4UnKTtcbiAgdGFibGVIZWFkZXJUaW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzb3J0OiAndGltZScsXG4gICAgICBvcmRlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnID8gJ0FTQycgOiAnREVTQycsXG4gICAgfTtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnZGVzYycpO1xuICAgIH0gZWxzZSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnYXNjJyk7XG4gICAgcmVuZGVyVGFibGUob3B0aW9ucyk7XG4gIH0pO1xuXG4gIGhlYWRlclJvdy5hcHBlbmQoXG4gICAgdGFibGVIZWFkZXJOdW1iZXIsXG4gICAgdGFibGVIZWFkZXJDYXIsXG4gICAgdGFibGVIZWFkZXJOYW1lLFxuICAgIHRhYmxlSGVhZGVyV2lucyxcbiAgICB0YWJsZUhlYWRlclRpbWUsXG4gICk7XG4gIHRhYmxlLmFwcGVuZChoZWFkZXJSb3cpO1xuICBjb25zdCB3aW5uZXJzID0gYXdhaXQgZ2V0V2lubmVycyh1cmxPcHRpb25zKTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBjYXJzID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICB3aW5uZXJzLmZvckVhY2goYXN5bmMgKHdpbm5lcjogSVdpbm5lcikgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBkYXRhUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBudW1iZXJDZWxsID0gY3JlYXRlVGFibGVDZWxsKGAke2NvdW50ZXJ9YCk7XG5cbiAgICBjb25zdCBjYXJDZWxsID0gY3JlYXRlVGFibGVDZWxsKCk7XG4gICAgY29uc3QgY2FySW1nQmxvY2sgPSBjcmVhdGVJbWcoJ2Fzc2V0cy9pY29uL2Nhckljb24uc3ZnJywgJ2NhcicpO1xuICAgIGNhckNlbGwuYXBwZW5kKGNhckltZ0Jsb2NrKTtcblxuICAgIGxldCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcnNbaV0uaWQgPT09IHdpbm5lci5pZCkge1xuICAgICAgICBuYW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChjYXJzW2ldLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3aW5zQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChgJHt3aW5uZXIud2luc31gKTtcbiAgICBjb25zdCB0aW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChgJHt3aW5uZXIudGltZX1gKTtcbiAgICBkYXRhUm93LmFwcGVuZChudW1iZXJDZWxsLCBjYXJDZWxsLCBuYW1lQ2VsbCwgd2luc0NlbGwsIHRpbWVDZWxsKTtcbiAgICB0YWJsZS5hcHBlbmQoZGF0YVJvdyk7XG4gIH0pO1xuICBjb25zdCByZWNvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKTtcbiAgaWYgKHJlY29yZHM/LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzJykpIHJlY29yZHMucXVlcnlTZWxlY3RvcignLndpbm5lcnMnKT8ucmVtb3ZlKCk7XG4gIHJlY29yZHM/LmFwcGVuZCh0YWJsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhYmxlO1xuIiwiaW1wb3J0IHsgZ2V0V2lubmVycyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyV2lubmVySGVhZGVyKCkge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgZ2V0V2lubmVycygpO1xuICBjb25zdCByZWNvcmRzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpO1xuICBjb25zdCByZWNvcmRzTGFiZWwgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19sYWJlbCcsICdSZWNvcmRzOicpO1xuICBjb25zdCByZWNvcmRzVmFsdWUgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19hbW91bnQnLCBgJHtyZWNvcmRzLmxlbmd0aH1gKTtcbiAgcmVjb3Jkc0Jsb2NrPy5hcHBlbmQocmVjb3Jkc0xhYmVsLCByZWNvcmRzVmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJXaW5uZXJIZWFkZXI7XG4iLCJpbXBvcnQgeyBnZXRXaW5uZXJzIH0gZnJvbSAnLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlclRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXItdGFibGUnO1xuaW1wb3J0IHJlbmRlcldpbm5lckhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvd2lubmVyLWhlYWRlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlclJlY29yZHNQYWdlKCkge1xuICBjb25zdCByZW5kZXJPcHRpb25zID0ge1xuICAgIHNvcnQ6ICd3aW5zJyxcbiAgICBvcmRlcjogJ0FTQycsXG4gIH07XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGlmIChib2R5KSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJyk7XG4gICAgaWYgKHJlY29yZHMpIHJlY29yZHMucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgcmVjb3JkcyA9IGNyZWF0ZU5vZGUoJ3JlY29yZHMnKTtcbiAgLy8gcmVjb3Jkcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZW5kZXJXaW5uZXJIZWFkZXIoKTtcbiAgcmVuZGVyVGFibGUoKTtcbiAgYm9keT8uYXBwZW5kKHJlY29yZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJSZWNvcmRzUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckdhcmFnZVBhZ2UgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9nYXJhZ2UnO1xuaW1wb3J0IHJlbmRlclJlY29yZHNQYWdlIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9yZWNvcmRzL3JlY29yZHMnO1xuaW1wb3J0IHJlbmRlckhlYWRlciBmcm9tICcuL3NjcmlwdHMvcGFnZXMvaGVhZGVyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyQXBwKCkge1xuICByZW5kZXJIZWFkZXIoKTtcbiAgcmVuZGVyR2FyYWdlUGFnZSgpO1xuICBhd2FpdCByZW5kZXJSZWNvcmRzUGFnZSgpO1xuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxucmVuZGVyQXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=