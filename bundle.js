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
/* harmony export */   "carsPerGaragePage": () => (/* binding */ carsPerGaragePage),
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
    limit: 10,
    page: 1,
    sort: 'time',
    order: 'ASC',
};
const carsPerGaragePage = 7;
const carsToGenerate = 100;


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
async function getAllCars(options) {
    const url = new URL(garageUrl);
    if (options) {
        Object.keys(options).forEach((key) => {
            url.searchParams.set(key, `${options[key]}`);
        });
    }
    const response = await fetch(url);
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
/* harmony export */   "getRecordsAmount": () => (/* binding */ getRecordsAmount),
/* harmony export */   "getWinner": () => (/* binding */ getWinner),
/* harmony export */   "getWinners": () => (/* binding */ getWinners),
/* harmony export */   "updateWinner": () => (/* binding */ updateWinner)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/scripts/config.ts");

const winnersUrl = `${_config__WEBPACK_IMPORTED_MODULE_0__.apiUrl}winners/`;
async function getWinners(renderOptions) {
    let urlOptions = _config__WEBPACK_IMPORTED_MODULE_0__.winnersConfig;
    if (renderOptions) {
        if (renderOptions.order)
            urlOptions.order = renderOptions.order;
        if (renderOptions.sort)
            urlOptions.sort = renderOptions.sort;
        ;
    }
    urlOptions.page = +(sessionStorage.getItem('winnersPage') || 1);
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
    return updateWinnerRequest.json();
}
async function getRecordsAmount() {
    const url = new URL(winnersUrl);
    url.searchParams.set('_limit', '1');
    const response = await fetch(url);
    if (response.ok) {
        return response.headers.get('X-Total-Count');
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
/* harmony export */   "createTableHeader": () => (/* binding */ createTableHeader),
/* harmony export */   "renderColorSvg": () => (/* binding */ renderColorSvg)
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
function renderColorSvg(color) {
    return `
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

  <svg fill="${color}" height="23px" version="1.1" id="car__img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.032 47.032" xml:space="preserve" stroke="#000000">

  <g id="SVGRepo_bgCarrier" stroke-width="0"/>

  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

  <g id="SVGRepo_iconCarrier"> <g> <path d="M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759 c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713 v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336 h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g>

  </svg>
`;
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
    const color = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)(`${blockType}__color`, 'Set color: ');
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.className = 'color__picker';
    color.append(colorPicker);
    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(blockType);
    button.addEventListener('click', async () => {
        if (blockType === 'create') {
            const car = {
                name: setName.value,
                color: colorPicker.value,
            };
            const newCar = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.createCar)(car);
            const carsHeaderAmountBlock = document.querySelector('.header__value');
            if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
                carsHeaderAmountBlock.textContent = `${+carsHeaderAmountBlock.textContent + 1}`;
            }
            const garageCars = await (0,_garage_cars__WEBPACK_IMPORTED_MODULE_2__["default"])();
            const garageView = document.querySelector('.garage');
            garageView === null || garageView === void 0 ? void 0 : garageView.append(garageCars);
        }
        else {
            const { carId } = setName.dataset;
            if (carId) {
                const { value } = setName;
                (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.updateCar)(+carId, value, colorPicker.value);
                const garageCars = await (0,_garage_cars__WEBPACK_IMPORTED_MODULE_2__["default"])();
                const garageView = document.querySelector('.garage');
                garageView === null || garageView === void 0 ? void 0 : garageView.append(garageCars);
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./src/scripts/config.ts");






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
    const pageNumberValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('page-number__value', sessionStorage.getItem('garagePage') || '1');
    pageNumber.append(pageNumberLabel, pageNumberValue);
    return pageNumber;
}
function renderSpecificCar(car) {
    const carBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('car-block');
    carBlock.dataset.carId = `${car.id}`;
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
    const carIconBlock = document.createElement('div');
    carIconBlock.innerHTML = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.renderColorSvg)(car.color);
    carIconBlock.className = 'car';
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
    const garagePage = sessionStorage.getItem('garagePage');
    let allCars = [];
    if (garagePage) {
        for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_5__.carsPerGaragePage; i += 1) {
            allCars = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)({ _limit: _config__WEBPACK_IMPORTED_MODULE_5__.carsPerGaragePage, _page: (sessionStorage.getItem('garagePage') || '1') });
        }
    }
    allCars.forEach((car) => {
        cars.append(renderSpecificCar(car));
    });
    return cars;
}
async function renderGarageCars() {
    var _a;
    if (document.querySelector('.garage-cars'))
        (_a = document.querySelector('.garage-cars')) === null || _a === void 0 ? void 0 : _a.remove();
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
        const nextButton = document.querySelector('.next__garage');
        nextButton.disabled = false;
        const results = [];
        for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_4__.carsToGenerate; i += 1) {
            const randBrand = _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.brands[Math.floor(Math.random() * _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.brands.length)];
            const randModel = _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.models[Math.floor(Math.random() * _data_controller_cars_name__WEBPACK_IMPORTED_MODULE_1__.models.length)];
            const carName = `${randBrand} ${randModel}`;
            const car = {
                name: carName,
                color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            };
            results.push((0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_2__.createCar)(car));
        }
        const garageCars = await (0,_garage_cars__WEBPACK_IMPORTED_MODULE_3__["default"])();
        const garageView = document.querySelector('.garage');
        garageView === null || garageView === void 0 ? void 0 : garageView.append(garageCars);
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

/***/ "./src/scripts/pages/garage/components/pagination.ts":
/*!***********************************************************!*\
  !*** ./src/scripts/pages/garage/components/pagination.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "renderGaragePagination": () => (/* binding */ renderGaragePagination)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./src/scripts/config.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _garage_cars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./garage-cars */ "./src/scripts/pages/garage/components/garage-cars.ts");




async function renderGaragePagination() {
    const paginationBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('pagination');
    let currentPage = sessionStorage.getItem('garagePage');
    const previous = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('Prev');
    if (currentPage && currentPage === '1')
        previous.disabled = true;
    const next = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('Next');
    previous.classList.add('prev__garage');
    next.classList.add('next__garage');
    let carsAmount = (await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)()).length;
    if (carsAmount && currentPage) {
        if (+carsAmount < _config__WEBPACK_IMPORTED_MODULE_0__.carsPerGaragePage * +currentPage)
            next.disabled = true;
    }
    next.addEventListener('click', async () => {
        const resetButton = document.querySelector('.button__reset');
        if (resetButton)
            resetButton.click();
        carsAmount = (await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)()).length;
        currentPage = sessionStorage.getItem('garagePage');
        sessionStorage.setItem('garagePage', `${(+(currentPage || 0) + 1)}`);
        currentPage = sessionStorage.getItem('garagePage');
        if (carsAmount && currentPage) {
            if (+carsAmount <= _config__WEBPACK_IMPORTED_MODULE_0__.carsPerGaragePage * +currentPage)
                next.disabled = true;
        }
        const garageCars = await (0,_garage_cars__WEBPACK_IMPORTED_MODULE_3__["default"])();
        const garageView = document.querySelector('.garage');
        garageView === null || garageView === void 0 ? void 0 : garageView.append(garageCars);
        previous.disabled = false;
    });
    previous.addEventListener('click', async () => {
        next.disabled = false;
        currentPage = sessionStorage.getItem('garagePage');
        sessionStorage.setItem('garagePage', `${(+(currentPage || 1)) - 1}`);
        currentPage = sessionStorage.getItem('garagePage');
        if (currentPage && currentPage === '1')
            previous.disabled = true;
        const garageCars = await (0,_garage_cars__WEBPACK_IMPORTED_MODULE_3__["default"])();
        const garageView = document.querySelector('.garage');
        garageView === null || garageView === void 0 ? void 0 : garageView.append(garageCars);
        const resetButton = document.querySelector('.button__reset');
        if (resetButton)
            resetButton.click();
    });
    paginationBlock.append(previous, next);
    return paginationBlock;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGaragePagination);


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
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pagination */ "./src/scripts/pages/garage/components/pagination.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/scripts/helpers.ts");





async function renderGaragePage() {
    sessionStorage.setItem('race', 'false');
    sessionStorage.setItem('garagePage', '1');
    const body = document.querySelector('body');
    const garageView = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createNode)('garage');
    if (body) {
        const carManagement = (0,_components_car_management__WEBPACK_IMPORTED_MODULE_0__["default"])();
        const garageControls = (0,_components_garage_controls__WEBPACK_IMPORTED_MODULE_1__["default"])();
        const pagination = await (0,_components_pagination__WEBPACK_IMPORTED_MODULE_3__.renderGaragePagination)();
        const garageCars = await (0,_components_garage_cars__WEBPACK_IMPORTED_MODULE_2__["default"])();
        garageView.append(carManagement, garageControls, pagination, garageCars);
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

/***/ "./src/scripts/pages/records/components/pagination.ts":
/*!************************************************************!*\
  !*** ./src/scripts/pages/records/components/pagination.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_controller_records__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-controller/records */ "./src/scripts/data-controller/records.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/scripts/config.ts");
/* harmony import */ var _render_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-table */ "./src/scripts/pages/records/components/render-table.ts");




async function renderWinnersPagination() {
    const pagination = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('winners-pagination');
    const previous = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('Prev');
    const next = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('Next');
    let currentPage = 0;
    const tmpPage = sessionStorage.getItem('winnersPage');
    if (tmpPage) {
        currentPage = +tmpPage;
    }
    if (currentPage && currentPage === 1) {
        previous.disabled = true;
    }
    let recordsAmount = await (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_0__.getRecordsAmount)() || 1;
    if (recordsAmount && currentPage) {
        if (+recordsAmount < _config__WEBPACK_IMPORTED_MODULE_2__.winnersConfig.limit * +currentPage)
            next.disabled = true;
    }
    previous.addEventListener('click', () => {
        next.disabled = false;
        const tmpPage = sessionStorage.getItem('winnersPage');
        if (tmpPage) {
            currentPage = +tmpPage;
        }
        currentPage -= 1;
        sessionStorage.setItem('winnersPage', `${currentPage}`);
        if (currentPage && currentPage === 1) {
            previous.disabled = true;
        }
        (0,_render_table__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
    next.addEventListener('click', () => {
        previous.disabled = false;
        let currentPage = 0;
        const tmpPage = sessionStorage.getItem('winnersPage');
        if (tmpPage) {
            currentPage = +tmpPage;
        }
        currentPage += 1;
        sessionStorage.setItem('winnersPage', `${currentPage}`);
        if (recordsAmount && currentPage) {
            if (+recordsAmount < _config__WEBPACK_IMPORTED_MODULE_2__.winnersConfig.limit * +currentPage)
                next.disabled = true;
        }
        (0,_render_table__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
    pagination.append(previous, next);
    return pagination;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWinnersPagination);


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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./src/scripts/config.ts");




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
    let counter = 0 + _config__WEBPACK_IMPORTED_MODULE_3__.winnersConfig.limit * (+(sessionStorage.getItem('winnersPage') || 1) - 1);
    const cars = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_2__.getAllCars)();
    winners.forEach(async (winner) => {
        counter += 1;
        const dataRow = document.createElement('tr');
        const numberCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(`${counter}`);
        const carCell = document.createElement('td');
        let nameCell = document.createElement('div');
        for (let i = 0; i < cars.length; i += 1) {
            if (cars[i].id === winner.id) {
                nameCell = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableCell)(cars[i].name);
                carCell.innerHTML = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.renderColorSvg)(cars[i].color);
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _data_controller_records__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data-controller/records */ "./src/scripts/data-controller/records.ts");


async function renderWinnerHeader() {
    const recordsLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records__label', 'Records:');
    const recordsAmount = await (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_1__.getRecordsAmount)();
    const recordsValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records__amount', recordsAmount || '0');
    const recordsAmountBlock = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records__amount-block');
    recordsAmountBlock.append(recordsLabel, recordsValue);
    return recordsAmountBlock;
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
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pagination */ "./src/scripts/pages/records/components/pagination.ts");
/* harmony import */ var _components_render_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/render-table */ "./src/scripts/pages/records/components/render-table.ts");
/* harmony import */ var _components_winner_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/winner-header */ "./src/scripts/pages/records/components/winner-header.ts");




async function renderRecordsPage() {
    sessionStorage.setItem('winnersPage', '1');
    const body = document.querySelector('body');
    if (body) {
        const records = document.querySelector('.records');
        if (records)
            records.remove();
    }
    const records = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('records');
    const pagination = await (0,_components_pagination__WEBPACK_IMPORTED_MODULE_1__["default"])();
    records.append(pagination);
    const recordsHeader = await (0,_components_winner_header__WEBPACK_IMPORTED_MODULE_3__["default"])();
    records.append(recordsHeader);
    (0,_components_render_table__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ042RDtBQUNHO0FBQ2Q7QUFFbEQsS0FBSyxVQUFVLFNBQVM7SUFDdEIsaUVBQVksRUFBRSxDQUFDO0lBQ2Ysd0VBQWdCLEVBQUUsQ0FBQztJQUNuQixNQUFNLDBFQUFpQixFQUFFLENBQUM7SUFDekIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDaEYsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbi9kcml2ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvY29uZmlnLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvY2Fycy1uYW1lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvY2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL3JlY29yZHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2Nhci1tYW5hZ2VtZW50LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9nYXJhZ2UtY2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNvbnRyb2xzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvZ2FyYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvd2lubmVyLWhlYWRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9yZWNvcmRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJhY2VTdGF0cyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGdldERyaXZlU3RlcCh2ZWxvY2l0eTogbnVtYmVyKSB7XG4gIGNvbnN0IHRpbWUgPSByYWNlU3RhdHMubWF4QW5pbWF0aW9uVGltZSAvICh2ZWxvY2l0eSAvIHJhY2VTdGF0cy5taW5Qb3NzaWJsZVZlbG9jaXR5KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IHJhY2VTdGF0cy5mcmFtZXNQZXJTZWNvbmQgKiB0aW1lO1xuXG4gIGNvbnN0IHN0ZXBEaXN0YW5jZSA9IHJhY2VTdGF0cy5kaXN0YW5jZSAvIHRvdGFsU3RlcHM7XG4gIHJldHVybiB7XG4gICAgc3RlcERpc3RhbmNlLFxuICAgIHRpbWUsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERyaXZlU3RlcDtcbiIsImV4cG9ydCBjb25zdCBhcGlVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwLyc7XG5cbmV4cG9ydCBjb25zdCByYWNlU3RhdHMgPSB7XG4gIG1heEFuaW1hdGlvblRpbWU6IDQwLFxuICBtaW5Qb3NzaWJsZVZlbG9jaXR5OiA1MCxcbiAgZnJhbWVzUGVyU2Vjb25kOiA2MCxcbiAgZGlzdGFuY2U6IDEwMCxcbn07XG5cbmV4cG9ydCBjb25zdCB3aW5uZXJzQ29uZmlnID0ge1xuICBsaW1pdDogMTAsXG4gIHBhZ2U6IDEsXG4gIHNvcnQ6ICd0aW1lJyxcbiAgb3JkZXI6ICdBU0MnLFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcnNQZXJHYXJhZ2VQYWdlID0gNztcblxuZXhwb3J0IGNvbnN0IGNhcnNUb0dlbmVyYXRlID0gMTAwO1xuIiwiZXhwb3J0IGNvbnN0IGJyYW5kcyA9IFsnUGV1Z2VvdCcsICdCTVcnLCAnUG9yc2NoZScsICdaaGlndWxpJywgJ0F1ZGknLCAnTWVyY2VkZXMnLCAnRmlhdCcsICdNQVonLCAnQnVnZ2F0aScsICdSb2xscy1Sb3lzZScsICdQYWdhbmknXTtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSBbJzQwNiBDb3VwZScsICdBTUcnLCAnTS1TZXJpZXMnLCAnUlMnLCAnMy1zZXJpZXMnLCAnQTYnLCAnQzIwOCcsICc5MTEnLCAnQ2F5bWFuJywgJzRTJywgJ1Nwb3J0J107XG4iLCJpbXBvcnQgeyBhcGlVcmwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBnYXJhZ2VVcmwgPSBgJHthcGlVcmx9Z2FyYWdlL2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDYXJzKG9wdGlvbnM/OiB7IF9saW1pdDogbnVtYmVyLCBfcGFnZTogc3RyaW5nfSkge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGdhcmFnZVVybCk7XG4gIGlmIChvcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChrZXksIGAke29wdGlvbnNba2V5IGFzIGtleW9mIHR5cGVvZiBvcHRpb25zXX1gKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gYWxsQ2FycztcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhcnMgbGlzdCcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2FyKGNhcjogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfSkge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goZ2FyYWdlVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gIH0pO1xuXG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3dvdycpO1xuICAgIHJldHVybiByZXF1ZXN0Lmpzb24oKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgY2FyJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVDYXIoaWQ6IG51bWJlcikge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAvLyBjb25zb2xlLmxvZygnUGVyZmVjdCcpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXIoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBjb2xvciA9ICcxMjMnKSB7XG4gIGNvbnN0IGNhciA9IHtcbiAgICBuYW1lLFxuICAgIGNvbG9yLFxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gIH0pO1xuXG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3dvdycpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBjYXInKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZW5naW5lVXJsID0gYCR7YXBpVXJsfWVuZ2luZWA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydFN0b3BDYXIoY2FySWQ6IG51bWJlciwgc3RhdHVzOiAnc3RhcnRlZCcgfCAnc3RvcHBlZCcpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmdpbmVVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnaWQnLCBgJHtjYXJJZH1gKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXR1cycsIHN0YXR1cyk7XG4gIGNvbnN0IHN0YXJ0RW5naW5lUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSk7XG4gIGlmIChzdGFydEVuZ2luZVJlcXVlc3Qub2spIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0YXJ0RW5naW5lUmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgeyB2ZWxvY2l0eSB9ID0gcmVzcG9uc2U7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0VuZ2luZShjYXJJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5naW5lVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYCR7Y2FySWR9YCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzdGF0dXMnLCAnZHJpdmUnKTtcbiAgY29uc3Qgc3RhcnREcml2ZVJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaWQ6IGNhcklkLFxuICAgICAgc3RhdHVzOiAnZHJpdmUnLFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIHN0YXJ0RHJpdmVSZXF1ZXN0Lm9rO1xufVxuIiwiaW1wb3J0IHsgYXBpVXJsLCB3aW5uZXJzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB1cmxXaW5uZXJzU29ydCBmcm9tICcuLi9pbnRlcmZhY2VzL3VybC13aW5uZXJzLXNvcnQnO1xuXG5jb25zdCB3aW5uZXJzVXJsID0gYCR7YXBpVXJsfXdpbm5lcnMvYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbm5lcnMocmVuZGVyT3B0aW9ucz86IHVybFdpbm5lcnNTb3J0KSB7XG4gIGxldCB1cmxPcHRpb25zID0gd2lubmVyc0NvbmZpZztcbiAgaWYgKHJlbmRlck9wdGlvbnMpIHtcbiAgICBpZiAocmVuZGVyT3B0aW9ucy5vcmRlcikgdXJsT3B0aW9ucy5vcmRlciA9IHJlbmRlck9wdGlvbnMub3JkZXJcbiAgICBpZiAocmVuZGVyT3B0aW9ucy5zb3J0KSB1cmxPcHRpb25zLnNvcnQgPSByZW5kZXJPcHRpb25zLnNvcnQ7O1xuICB9XG5cbiAgdXJsT3B0aW9ucy5wYWdlID0gKyhzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpIHx8IDEpO1xuXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2lubmVyc1VybCk7XG4gIE9iamVjdC5rZXlzKHVybE9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KGBfJHtrZXl9YCwgYCR7dXJsT3B0aW9uc1trZXkgYXMga2V5b2YgdHlwZW9mIHVybE9wdGlvbnNdfWApO1xuICB9KTtcbiAgY29uc3Qgd2lubmVyc1JlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZiAod2lubmVyc1JlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gd2lubmVyc1JlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5uZXIoaWQ6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbm5lcnNVcmx9JHtpZH1gKTtcbiAgY29uc3Qgd2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmICh3aW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIHdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG4gIHJldHVybiB3aW5uZXJSZXF1ZXN0LnN0YXR1cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbm5lcihpZDogbnVtYmVyLCB0aW1lOiBudW1iZXIpIHtcbiAgY29uc3QgcmVjb3JkTm9kZSA9IHtcbiAgICBpZCxcbiAgICB3aW5zOiAxLFxuICAgIHRpbWUsXG4gIH07XG4gIGNvbnN0IGNyZWF0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh3aW5uZXJzVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlY29yZE5vZGUpLFxuICB9KTtcbiAgaWYgKGNyZWF0ZVdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gY3JlYXRlV2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVdpbm5lcihpZDpudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gYCR7d2lubmVyc1VybH0ke2lkfWA7XG4gIGNvbnN0IGRlbGV0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICB9KTtcbiAgaWYgKGRlbGV0ZVdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gZGVsZXRlV2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbm5lcihpZDogbnVtYmVyLCB3aW5zOiBudW1iZXIsIHRpbWU6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBgJHt3aW5uZXJzVXJsfSR7aWR9YDtcbiAgY29uc3QgdXBkYXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHdpbnMsXG4gICAgICB0aW1lLFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIHVwZGF0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjb3Jkc0Ftb3VudCgpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5uZXJzVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ19saW1pdCcsICcxJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0Q29udGVudD86IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZiAodGV4dENvbnRlbnQpIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oYnV0dG9uTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NOYW1lID0gYGJ1dHRvbiBidXR0b25fXyR7YnV0dG9uTmFtZX1gO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25OYW1lO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nKHNyYzogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICBjb25zdCBpbWdCbG9jayA9IGNyZWF0ZU5vZGUoY2xhc3NOYW1lKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5jbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9X19pbWdgO1xuICBpbWcuc3JjID0gc3JjO1xuICBpbWdCbG9jay5hcHBlbmQoaW1nKTtcbiAgcmV0dXJuIGltZ0Jsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVIZWFkZXIoY2xhc3NOYW1lOiBzdHJpbmcsIHRleHRDb250ZW50OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVDZWxsKHRleHRDb250ZW50Pzogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBpZiAodGV4dENvbnRlbnQpIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb2xvclN2Zyhjb2xvcjogc3RyaW5nKSB7XG4gIHJldHVybiBgXG4gIDwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFwiPlxuXG4gIDxzdmcgZmlsbD1cIiR7Y29sb3J9XCIgaGVpZ2h0PVwiMjNweFwiIHZlcnNpb249XCIxLjFcIiBpZD1cImNhcl9faW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNDcuMDMyIDQ3LjAzMlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgc3Ryb2tlPVwiIzAwMDAwMFwiPlxuXG4gIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCIvPlxuXG4gIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuXG4gIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8Zz4gPHBhdGggZD1cIk0yOS4zOTUsMEgxNy42MzZjLTMuMTE3LDAtNS42NDMsMy40NjctNS42NDMsNi41ODR2MzQuODA0YzAsMy4xMTYsMi41MjYsNS42NDQsNS42NDMsNS42NDRoMTEuNzU5IGMzLjExNiwwLDUuNjQ0LTIuNTI3LDUuNjQ0LTUuNjQ0VjYuNTg0QzM1LjAzNywzLjQ2NywzMi41MTEsMCwyOS4zOTUsMHogTTM0LjA1LDE0LjE4OHYxMS42NjVsLTIuNzI5LDAuMzUxdi00LjgwNkwzNC4wNSwxNC4xODh6IE0zMi42MTgsMTAuNzczYy0xLjAxNiwzLjktMi4yMTksOC41MS0yLjIxOSw4LjUxSDE2LjYzMWwtMi4yMjItOC41MUMxNC40MSwxMC43NzMsMjMuMjkzLDcuNzU1LDMyLjYxOCwxMC43NzN6IE0xNS43NDEsMjEuNzEzIHY0LjQ5MmwtMi43My0wLjM0OVYxNC41MDJMMTUuNzQxLDIxLjcxM3ogTTEzLjAxMSwzNy45MzhWMjcuNTc5bDIuNzMsMC4zNDN2OC4xOTZMMTMuMDExLDM3LjkzOHogTTE0LjU2OCw0MC44ODJsMi4yMTgtMy4zMzYgaDEzLjc3MWwyLjIxOSwzLjMzNkgxNC41Njh6IE0zMS4zMjEsMzUuODA1di03Ljg3MmwyLjcyOS0wLjM1NXYxMC4wNDhMMzEuMzIxLDM1LjgwNXpcIi8+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDwvZz4gPC9nPlxuXG4gIDwvc3ZnPlxuYFxufVxuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBjcmVhdGVDYXIsIHVwZGF0ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCByZW5kZXJHYXJhZ2VDYXJzLCB7IHJlbmRlclNwZWNpZmljQ2FyIH0gZnJvbSAnLi9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24nO1xuXG5mdW5jdGlvbiByZW5kZXJDYXJTZWxlY3Rpb24oYmxvY2tUeXBlOiBzdHJpbmcpIHtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZU5vZGUoYmxvY2tUeXBlKTtcblxuICBjb25zdCBzZXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBzZXROYW1lLmNsYXNzTmFtZSA9IGAke2Jsb2NrVHlwZX1fX2lucHV0YDtcblxuICBjb25zdCBjb2xvciA9IGNyZWF0ZU5vZGUoYCR7YmxvY2tUeXBlfV9fY29sb3JgLCAnU2V0IGNvbG9yOiAnKTtcbiAgY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb2xvclBpY2tlci50eXBlID0gJ2NvbG9yJztcbiAgY29sb3JQaWNrZXIuY2xhc3NOYW1lID0gJ2NvbG9yX19waWNrZXInO1xuXG4gIGNvbG9yLmFwcGVuZChjb2xvclBpY2tlcik7XG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihibG9ja1R5cGUpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGJsb2NrVHlwZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogc2V0TmFtZS52YWx1ZSxcbiAgICAgICAgY29sb3I6IGNvbG9yUGlja2VyLnZhbHVlLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IG5ld0NhciA9IGF3YWl0IGNyZWF0ZUNhcihjYXIpO1xuICAgICAgY29uc3QgY2Fyc0hlYWRlckFtb3VudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgKyAxfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuICAgICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKTtcbiAgICAgIGdhcmFnZVZpZXc/LmFwcGVuZChnYXJhZ2VDYXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjYXJJZCB9ID0gc2V0TmFtZS5kYXRhc2V0O1xuICAgICAgaWYgKGNhcklkKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHNldE5hbWU7XG4gICAgICAgIHVwZGF0ZUNhcigrY2FySWQsIHZhbHVlLCBjb2xvclBpY2tlci52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGdhcmFnZUNhcnMgPSBhd2FpdCByZW5kZXJHYXJhZ2VDYXJzKCk7XG4gICAgICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJyk7XG4gICAgICAgIGdhcmFnZVZpZXc/LmFwcGVuZChnYXJhZ2VDYXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIG1haW4uYXBwZW5kKHNldE5hbWUsIGNvbG9yLCBidXR0b24pO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2FyTWFuYWdlbWVudCgpIHtcbiAgY29uc3QgY2FyTWFuYWdlbWVudEJsb2NrID0gY3JlYXRlTm9kZSgnY2FyLW1hbmFnZW1lbnQnKTtcbiAgY29uc3QgY3JlYXRlQ2FyQmxvY2sgPSByZW5kZXJDYXJTZWxlY3Rpb24oJ2NyZWF0ZScpO1xuICBjb25zdCBlZGl0Q2FyQmxvY2sgPSByZW5kZXJDYXJTZWxlY3Rpb24oJ2VkaXQnKTtcblxuICBjYXJNYW5hZ2VtZW50QmxvY2suYXBwZW5kKGNyZWF0ZUNhckJsb2NrLCBlZGl0Q2FyQmxvY2spO1xuICByZXR1cm4gY2FyTWFuYWdlbWVudEJsb2NrO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXJNYW5hZ2VtZW50O1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbWcsIHJlbmRlckNvbG9yU3ZnIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBnZXRBbGxDYXJzLCByZW1vdmVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgeyBzdGFydFN0b3BDYXIsIGNoZWNrRW5naW5lIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2VuZ2luZSc7XG5pbXBvcnQge1xuICBjcmVhdGVXaW5uZXIsIGRlbGV0ZVdpbm5lciwgZ2V0V2lubmVyLCB1cGRhdGVXaW5uZXIsXG59IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcbmltcG9ydCBnZXREcml2ZVN0ZXAgZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9uL2RyaXZlJztcbmltcG9ydCBJQ2FyIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY2FyJztcbmltcG9ydCB7IGNhcnNQZXJHYXJhZ2VQYWdlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyID0gY3JlYXRlTm9kZSgnaGVhZGVyJyk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJMYWJlbCA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fbGFiZWwnLCAnR2FyYWdlJyk7XG4gIGNvbnN0IGNhcnNBbW91bnQgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fdmFsdWUnLCBjYXJzQW1vdW50Lmxlbmd0aCk7XG5cbiAgZ2FyYWdlQ2Fyc0hlYWRlci5hcHBlbmQoZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsLCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUpO1xuICByZXR1cm4gZ2FyYWdlQ2Fyc0hlYWRlcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBhZ2UoKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcicpO1xuICBjb25zdCBwYWdlTnVtYmVyTGFiZWwgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fbGFiZWwnLCAnUGFnZSAjJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX192YWx1ZScsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKSB8fCAnMScpO1xuICBwYWdlTnVtYmVyLmFwcGVuZChwYWdlTnVtYmVyTGFiZWwsIHBhZ2VOdW1iZXJWYWx1ZSk7XG4gIHJldHVybiBwYWdlTnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3BlY2lmaWNDYXIoY2FyOiBJQ2FyKSB7XG4gIGNvbnN0IGNhckJsb2NrID0gY3JlYXRlTm9kZSgnY2FyLWJsb2NrJyk7XG4gIGNhckJsb2NrLmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcblxuICBjb25zdCBjYXJNb2RpZmllcnMgPSBjcmVhdGVOb2RlKCdtb2RpZmllcicpO1xuXG4gIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc2VsZWN0Jyk7XG4gIHNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdF9faW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGVkaXRJbnB1dC52YWx1ZSA9IGNhci5uYW1lO1xuICAgIGVkaXRJbnB1dC5kYXRhc2V0LmNhcklkID0gYCR7Y2FyLmlkfWA7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVtb3ZlJyk7XG4gIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVDYXIoY2FyLmlkKTtcbiAgICBjYXJCbG9jay5yZW1vdmUoKTtcbiAgICBjb25zdCBjYXJzSGVhZGVyQW1vdW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50IC0gMX1gO1xuICAgIH1cbiAgICBkZWxldGVXaW5uZXIoY2FyLmlkKTtcbiAgfSk7XG4gIGNhck1vZGlmaWVycy5hcHBlbmQoc2VsZWN0QnV0dG9uLCByZW1vdmVCdXR0b24pO1xuXG4gIGNvbnN0IGNhck5hbWUgPSBjcmVhdGVOb2RlKCduYW1lJywgY2FyLm5hbWUpO1xuICBjb25zdCBjYXJJY29uQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FySWNvbkJsb2NrLmlubmVySFRNTCA9IHJlbmRlckNvbG9yU3ZnKGNhci5jb2xvcik7XG4gIGNhckljb25CbG9jay5jbGFzc05hbWUgPSAnY2FyJztcblxuICBjb25zdCBmbGFnSWNvbkJsb2NrID0gY3JlYXRlSW1nKCdhc3NldHMvaWNvbi9mbGFnLnN2ZycsICdmbGFnJyk7XG4gIGNvbnN0IGNvbnRyb2xzID0gY3JlYXRlTm9kZSgnY29udHJvbHMnKTtcbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVCdXR0b24oJ3N0YXJ0Jyk7XG4gIGNvbnN0IHN0b3AgPSBjcmVhdGVCdXR0b24oJ3N0b3AnKTtcbiAgc3RhcnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgc3RvcC5kaXNhYmxlZCA9IHRydWU7XG4gIHN0YXJ0LmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcbiAgbGV0IGNhckFuaW1hdGlvbkludGVydmFsSWQgPSAwO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBzdGFydC5jbGFzc0xpc3QuYWRkKCdidXR0b25fX2Rpc2FibGVkJyk7XG4gICAgc3RhcnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IHN0YXJ0UmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gYXdhaXQgc3RhcnRTdG9wQ2FyKGNhci5pZCwgJ3N0YXJ0ZWQnKTtcbiAgICBjb25zdCBkcml2ZUFuaW1hdGlvblN0ZXAgPSBnZXREcml2ZVN0ZXAodmVsb2NpdHkpO1xuICAgIHN0b3AuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNhckFuaW1hdGlvbkludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGNhckljb25CbG9jaykge1xuICAgICAgICBpZiAoK2Nhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUuc2xpY2UoMCwgLTEpID49IDEwMCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gICAgICAgICAgY29uc3QgZW5kUmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICAgIGNvbnN0IHJhY2VEdXJhdGlvbiA9ICgoZW5kUmFjZSAtIHN0YXJ0UmFjZSkgLyAxMDAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyYWNlJykgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmFjZScpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGFsZXJ0KGAke2Nhci5uYW1lfSBoYXMgd29uIVxcblRpbWU6ICR7cmFjZUR1cmF0aW9ufXNgKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcldpbiA9IGF3YWl0IGdldFdpbm5lcihjYXIuaWQpO1xuICAgICAgICAgICAgaWYgKGNhcldpbiA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgIGNyZWF0ZVdpbm5lcihjYXIuaWQsICtyYWNlRHVyYXRpb24pO1xuICAgICAgICAgICAgICBjb25zdCByZWNvcmRzQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHNfX2Ftb3VudCcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3Jkc0Ftb3VudCAmJiByZWNvcmRzQW1vdW50LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcmVjb3Jkc0Ftb3VudC50ZXh0Q29udGVudCA9IGAkeytyZWNvcmRzQW1vdW50LnRleHRDb250ZW50ICsgMX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBuZXdUaW1lID0gK3JhY2VEdXJhdGlvbiA8IGNhcldpbi50aW1lID8gK3JhY2VEdXJhdGlvbiA6IGNhcldpbi50aW1lO1xuICAgICAgICAgICAgICB1cGRhdGVXaW5uZXIoY2FyLmlkLCBjYXJXaW4ud2lucyArIDEsICtuZXdUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVWYWx1ZSA9IGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGU7XG4gICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVZhbHVlID0gY3VycmVudFRyYW5zbGF0ZVZhbHVlID8gYCR7K2N1cnJlbnRUcmFuc2xhdGVWYWx1ZS5zbGljZSgwLCAtMSkgKyBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgIDogYCR7ZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYDtcbiAgICAgICAgY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZSA9IG5ld1RyYW5zbGF0ZVZhbHVlO1xuICAgICAgfVxuICAgIH0sIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2UpO1xuICAgIGNhckJsb2NrLmRhdGFzZXQuaW50ZXJ2YWxJZCA9IGAke2NhckFuaW1hdGlvbkludGVydmFsSWR9YDtcbiAgICBjb25zdCBpc0VuZ2luZU9rID0gYXdhaXQgY2hlY2tFbmdpbmUoY2FyLmlkKTtcbiAgICBpZiAoIWlzRW5naW5lT2spIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gIH0pO1xuICBzdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0b3AuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHN0YXJ0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgc3RhcnRTdG9wQ2FyKGNhci5pZCwgJ3N0b3BwZWQnKTtcbiAgICBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlID0gJyc7XG4gICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgfSk7XG4gIGNvbnRyb2xzLmFwcGVuZChzdGFydCwgc3RvcCk7XG5cbiAgY29uc3QgcmFjZSA9IGNyZWF0ZU5vZGUoJ3JhY2UnKTtcbiAgcmFjZS5hcHBlbmQoY2FySWNvbkJsb2NrLCBmbGFnSWNvbkJsb2NrKTtcblxuICBjYXJCbG9jay5hcHBlbmQoY2FyTW9kaWZpZXJzLCBjYXJOYW1lLCBjb250cm9scywgcmFjZSk7XG4gIHJldHVybiBjYXJCbG9jaztcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ2FycygpIHtcbiAgY29uc3QgY2FycyA9IGNyZWF0ZU5vZGUoJ2NhcnMnKTtcbiAgY29uc3QgZ2FyYWdlUGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKTtcbiAgbGV0IGFsbENhcnMgPSBbXTtcbiAgaWYgKGdhcmFnZVBhZ2UpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnNQZXJHYXJhZ2VQYWdlOyBpICs9IDEpIHtcbiAgICAgIGFsbENhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKHsgX2xpbWl0OiBjYXJzUGVyR2FyYWdlUGFnZSwgX3BhZ2U6IChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXJhZ2VQYWdlJykgfHwgJzEnKSB9KTtcbiAgICB9XG4gIH1cbiAgYWxsQ2Fycy5mb3JFYWNoKChjYXI6IElDYXIpID0+IHtcbiAgICBjYXJzLmFwcGVuZChyZW5kZXJTcGVjaWZpY0NhcihjYXIpKTtcbiAgfSk7XG4gIHJldHVybiBjYXJzO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VDYXJzKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1jYXJzJykpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UtY2FycycpPy5yZW1vdmUoKTtcbiAgY29uc3QgZ2FyYWdlQ2FycyA9IGNyZWF0ZU5vZGUoJ2dhcmFnZS1jYXJzJyk7XG4gIGNvbnN0IGhlYWRlciA9IGF3YWl0IHJlbmRlckhlYWRlcigpO1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHJlbmRlckN1cnJlbnRQYWdlKCk7XG4gIGNvbnN0IGNhcnMgPSBhd2FpdCByZW5kZXJDYXJzKCk7XG5cbiAgZ2FyYWdlQ2Fycy5hcHBlbmQoaGVhZGVyLCBjdXJyZW50UGFnZSwgY2Fycyk7XG4gIHJldHVybiBnYXJhZ2VDYXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VDYXJzO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBicmFuZHMsIG1vZGVscyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzLW5hbWUnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHJlbmRlckdhcmFnZUNhcnMsIHsgcmVuZGVyU3BlY2lmaWNDYXIgfSBmcm9tICcuL2dhcmFnZS1jYXJzJztcbmltcG9ydCB7IGNhcnNUb0dlbmVyYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuZnVuY3Rpb24gcmVuZGVyR2FyYWdlQ29udHJvbHMoKSB7XG4gIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gY3JlYXRlTm9kZSgnY29udHJvbHMnKTtcblxuICBjb25zdCByYWNlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyYWNlJyk7XG4gIHJhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmFjZScsICd0cnVlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbl9fc3RhcnQnKS5mb3JFYWNoKChlbCkgPT4gKGVsIGFzIEhUTUxCdXR0b25FbGVtZW50KS5jbGljaygpKTtcbiAgfSk7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyZXNldCcpO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25fX3N0b3AnKS5mb3JFYWNoKChlbCkgPT4gKGVsIGFzIEhUTUxCdXR0b25FbGVtZW50KS5jbGljaygpKSk7XG4gIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdnZW5lcmF0ZScpO1xuICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRfX2dhcmFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIG5leHRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJzVG9HZW5lcmF0ZTsgaSArPSAxKSB7XG4gICAgICBjb25zdCByYW5kQnJhbmQgPSBicmFuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYnJhbmRzLmxlbmd0aCldO1xuICAgICAgY29uc3QgcmFuZE1vZGVsID0gbW9kZWxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vZGVscy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IGNhck5hbWUgPSBgJHtyYW5kQnJhbmR9ICR7cmFuZE1vZGVsfWA7XG4gICAgICBjb25zdCBjYXIgPSB7XG4gICAgICAgIG5hbWU6IGNhck5hbWUsXG4gICAgICAgIGNvbG9yOiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gLFxuICAgICAgfTtcbiAgICAgIHJlc3VsdHMucHVzaChjcmVhdGVDYXIoY2FyKSk7XG4gICAgfVxuICAgIGNvbnN0IGdhcmFnZUNhcnMgPSBhd2FpdCByZW5kZXJHYXJhZ2VDYXJzKCk7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKTtcbiAgICBnYXJhZ2VWaWV3Py5hcHBlbmQoZ2FyYWdlQ2Fycyk7XG5cbiAgICBjb25zdCBjYXJzSGVhZGVyQW1vdW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ICsgY2Fyc1RvR2VuZXJhdGV9YDtcbiAgICB9XG4gIH0pO1xuXG4gIGdhcmFnZUNvbnRyb2xzLmFwcGVuZChyYWNlQnV0dG9uLCByZXNldEJ1dHRvbiwgZ2VuZXJhdGVCdXR0b24pO1xuICByZXR1cm4gZ2FyYWdlQ29udHJvbHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZUNvbnRyb2xzO1xuIiwiaW1wb3J0IHsgY2Fyc1BlckdhcmFnZVBhZ2UgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgZ2V0QWxsQ2FycyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiwgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlckdhcmFnZUNhcnMgZnJvbSAnLi9nYXJhZ2UtY2Fycyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VQYWdpbmF0aW9uKCkge1xuICBjb25zdCBwYWdpbmF0aW9uQmxvY2sgPSBjcmVhdGVOb2RlKCdwYWdpbmF0aW9uJyk7XG4gIGxldCBjdXJyZW50UGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKTtcbiAgY29uc3QgcHJldmlvdXMgPSBjcmVhdGVCdXR0b24oJ1ByZXYnKTtcbiAgaWYgKGN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlID09PSAnMScpIHByZXZpb3VzLmRpc2FibGVkID0gdHJ1ZTtcblxuICBjb25zdCBuZXh0ID0gY3JlYXRlQnV0dG9uKCdOZXh0Jyk7XG4gIHByZXZpb3VzLmNsYXNzTGlzdC5hZGQoJ3ByZXZfX2dhcmFnZScpO1xuICBuZXh0LmNsYXNzTGlzdC5hZGQoJ25leHRfX2dhcmFnZScpO1xuICBsZXQgY2Fyc0Ftb3VudCA9IChhd2FpdCBnZXRBbGxDYXJzKCkpLmxlbmd0aDtcbiAgaWYgKGNhcnNBbW91bnQgJiYgY3VycmVudFBhZ2UpIHtcbiAgICBpZiAoK2NhcnNBbW91bnQgPCBjYXJzUGVyR2FyYWdlUGFnZSAqICtjdXJyZW50UGFnZSkgbmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fcmVzZXQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBpZiAocmVzZXRCdXR0b24pIHJlc2V0QnV0dG9uLmNsaWNrKCk7XG4gICAgY2Fyc0Ftb3VudCA9IChhd2FpdCBnZXRBbGxDYXJzKCkpLmxlbmd0aDtcblxuICAgIGN1cnJlbnRQYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FyYWdlUGFnZScpO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhcmFnZVBhZ2UnLCBgJHsoKyhjdXJyZW50UGFnZSB8fCAwKSArIDEpfWApO1xuICAgIGN1cnJlbnRQYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FyYWdlUGFnZScpO1xuXG4gICAgaWYgKGNhcnNBbW91bnQgJiYgY3VycmVudFBhZ2UpIHtcbiAgICAgIGlmICgrY2Fyc0Ftb3VudCA8PSBjYXJzUGVyR2FyYWdlUGFnZSAqICtjdXJyZW50UGFnZSkgbmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FyYWdlQ2FycyA9IGF3YWl0IHJlbmRlckdhcmFnZUNhcnMoKTtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xuICAgIGdhcmFnZVZpZXc/LmFwcGVuZChnYXJhZ2VDYXJzKTtcblxuICAgIHByZXZpb3VzLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIG5leHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjdXJyZW50UGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKTtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXJhZ2VQYWdlJywgYCR7KCsoY3VycmVudFBhZ2UgfHwgMSkpIC0gMX1gKTtcbiAgICBjdXJyZW50UGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKTtcbiAgICBpZiAoY3VycmVudFBhZ2UgJiYgY3VycmVudFBhZ2UgPT09ICcxJykgcHJldmlvdXMuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZ2FyYWdlQ2FycyA9IGF3YWl0IHJlbmRlckdhcmFnZUNhcnMoKTtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xuICAgIGdhcmFnZVZpZXc/LmFwcGVuZChnYXJhZ2VDYXJzKTtcblxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fcmVzZXQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBpZiAocmVzZXRCdXR0b24pIHJlc2V0QnV0dG9uLmNsaWNrKCk7XG4gIH0pO1xuXG4gIHBhZ2luYXRpb25CbG9jay5hcHBlbmQocHJldmlvdXMsIG5leHQpO1xuICByZXR1cm4gcGFnaW5hdGlvbkJsb2NrO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IHJlbmRlckNhck1hbmFnZW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL2Nhci1tYW5hZ2VtZW50JztcbmltcG9ydCByZW5kZXJHYXJhZ2VDb250cm9scyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNvbnRyb2xzJztcbmltcG9ydCByZW5kZXJHYXJhZ2VDYXJzIGZyb20gJy4vY29tcG9uZW50cy9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgeyByZW5kZXJHYXJhZ2VQYWdpbmF0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VQYWdlKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ2ZhbHNlJyk7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhcmFnZVBhZ2UnLCAnMScpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBnYXJhZ2VWaWV3ID0gY3JlYXRlTm9kZSgnZ2FyYWdlJyk7XG4gIGlmIChib2R5KSB7XG4gICAgY29uc3QgY2FyTWFuYWdlbWVudCA9IHJlbmRlckNhck1hbmFnZW1lbnQoKTtcbiAgICBjb25zdCBnYXJhZ2VDb250cm9scyA9IHJlbmRlckdhcmFnZUNvbnRyb2xzKCk7XG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGF3YWl0IHJlbmRlckdhcmFnZVBhZ2luYXRpb24oKTtcbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuXG4gICAgZ2FyYWdlVmlldy5hcHBlbmQoY2FyTWFuYWdlbWVudCwgZ2FyYWdlQ29udHJvbHMsIHBhZ2luYXRpb24sIGdhcmFnZUNhcnMpO1xuICAgIGJvZHkuYXBwZW5kKGdhcmFnZVZpZXcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZVBhZ2U7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJSZWNvcmRzUGFnZSBmcm9tICcuL3JlY29yZHMvcmVjb3Jkcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuICBjb25zdCBoZWFkZXJCdXR0b25zID0gY3JlYXRlTm9kZSgnYnV0dG9ucycpO1xuXG4gIGNvbnN0IHRvR2FyYWdlID0gY3JlYXRlQnV0dG9uKCdnYXJhZ2UnKTtcbiAgdG9HYXJhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCByZWNvcmRzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGdhcmFnZVZpZXcgJiYgcmVjb3Jkc1ZpZXcpIHtcbiAgICAgIGdhcmFnZVZpZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZWNvcmRzVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdG9SZWNvcmRzID0gY3JlYXRlQnV0dG9uKCdyZWNvcmRzJyk7XG4gIHRvUmVjb3Jkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IHJlY29yZHNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoZ2FyYWdlVmlldyAmJiByZWNvcmRzVmlldykge1xuICAgICAgZ2FyYWdlVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcmVjb3Jkc1ZpZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZW5kZXJSZWNvcmRzUGFnZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgaGVhZGVyQnV0dG9ucy5hcHBlbmQodG9HYXJhZ2UsIHRvUmVjb3Jkcyk7XG5cbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJCdXR0b25zKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5Py5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySGVhZGVyO1xuIiwiaW1wb3J0IHsgZ2V0UmVjb3Jkc0Ftb3VudCB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcbmltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgd2lubmVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgcmVuZGVyVGFibGUgZnJvbSAnLi9yZW5kZXItdGFibGUnO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJXaW5uZXJzUGFnaW5hdGlvbigpIHtcbiAgY29uc3QgcGFnaW5hdGlvbiA9IGNyZWF0ZU5vZGUoJ3dpbm5lcnMtcGFnaW5hdGlvbicpO1xuICBjb25zdCBwcmV2aW91cyA9IGNyZWF0ZUJ1dHRvbignUHJldicpO1xuICBjb25zdCBuZXh0ID0gY3JlYXRlQnV0dG9uKCdOZXh0Jyk7XG5cbiAgbGV0IGN1cnJlbnRQYWdlID0gMDtcbiAgY29uc3QgdG1wUGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNQYWdlJyk7XG4gIGlmICh0bXBQYWdlKSB7XG4gICAgY3VycmVudFBhZ2UgPSArdG1wUGFnZTtcbiAgfVxuICBpZiAoY3VycmVudFBhZ2UgJiYgY3VycmVudFBhZ2UgPT09IDEpIHtcbiAgICBwcmV2aW91cy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBsZXQgcmVjb3Jkc0Ftb3VudCA9IGF3YWl0IGdldFJlY29yZHNBbW91bnQoKSB8fCAxO1xuXG4gIGlmIChyZWNvcmRzQW1vdW50ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgaWYgKCtyZWNvcmRzQW1vdW50IDwgd2lubmVyc0NvbmZpZy5saW1pdCAqICtjdXJyZW50UGFnZSkgbmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBwcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXh0LmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0bXBQYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc1BhZ2UnKTtcbiAgICBpZiAodG1wUGFnZSkge1xuICAgICAgY3VycmVudFBhZ2UgPSArdG1wUGFnZTtcbiAgICB9XG4gICAgXG4gICAgY3VycmVudFBhZ2UgLT0gMTtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzUGFnZScsIGAke2N1cnJlbnRQYWdlfWApO1xuXG4gICAgaWYgKGN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlID09PSAxKSB7XG4gICAgICBwcmV2aW91cy5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJlbmRlclRhYmxlKCk7XG4gIH0pO1xuXG4gIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJldmlvdXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBsZXQgY3VycmVudFBhZ2UgPSAwO1xuICAgIGNvbnN0IHRtcFBhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpO1xuICAgIGlmICh0bXBQYWdlKSB7XG4gICAgICBjdXJyZW50UGFnZSA9ICt0bXBQYWdlO1xuICAgIH1cbiAgICBjdXJyZW50UGFnZSArPSAxO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dpbm5lcnNQYWdlJywgYCR7Y3VycmVudFBhZ2V9YCk7XG4gICAgaWYgKHJlY29yZHNBbW91bnQgJiYgY3VycmVudFBhZ2UpIHtcbiAgICAgIGlmICgrcmVjb3Jkc0Ftb3VudCA8IHdpbm5lcnNDb25maWcubGltaXQgKiArY3VycmVudFBhZ2UpIG5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZW5kZXJUYWJsZSgpO1xuICB9KTtcblxuICBwYWdpbmF0aW9uLmFwcGVuZChwcmV2aW91cywgbmV4dCk7XG4gIHJldHVybiBwYWdpbmF0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJXaW5uZXJzUGFnaW5hdGlvbjtcbiIsImltcG9ydCB7IGdldFdpbm5lcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZUNlbGwsIGNyZWF0ZVRhYmxlSGVhZGVyLCByZW5kZXJDb2xvclN2ZyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2FycyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCBJV2lubmVyIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvd2lubmVyJztcbmltcG9ydCB7IHdpbm5lcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHVybFdpbm5lcnNTb3J0IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXJsLXdpbm5lcnMtc29ydCc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlclRhYmxlKHVybE9wdGlvbnM/OiB1cmxXaW5uZXJzU29ydCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIHRhYmxlLmNsYXNzTmFtZSA9ICd3aW5uZXJzJztcbiAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgaGVhZGVyUm93LmNsYXNzTmFtZSA9ICd3aW5uZXJzX19oZWFkZXInO1xuICBjb25zdCB0YWJsZUhlYWRlck51bWJlciA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX251bWJlcicsICcjJyk7XG4gIGNvbnN0IHRhYmxlSGVhZGVyQ2FyID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fY2FyJywgJ0NhcicpO1xuICBjb25zdCB0YWJsZUhlYWRlck5hbWUgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19uYW1lJywgJ05hbWUnKTtcblxuICBjb25zdCB0YWJsZUhlYWRlcldpbnMgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX193aW5zIGNsaWNrYWJsZScsICdXaW5zIOKHhScpO1xuICB0YWJsZUhlYWRlcldpbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHNvcnQ6ICd3aW5zJyxcbiAgICAgIG9yZGVyOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzT3JkZXInKSA9PT0gJ2FzYycgPyAnQVNDJyA6ICdERVNDJyxcbiAgICB9O1xuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzT3JkZXInKSA9PT0gJ2FzYycpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dpbm5lcnNPcmRlcicsICdkZXNjJyk7XG4gICAgfSBlbHNlIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dpbm5lcnNPcmRlcicsICdhc2MnKTtcbiAgICByZW5kZXJUYWJsZShvcHRpb25zKTtcbiAgfSk7XG5cbiAgY29uc3QgdGFibGVIZWFkZXJUaW1lID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fdGltZScsICdUaW1lIOKHhScpO1xuICB0YWJsZUhlYWRlclRpbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHNvcnQ6ICd0aW1lJyxcbiAgICAgIG9yZGVyOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzT3JkZXInKSA9PT0gJ2FzYycgPyAnQVNDJyA6ICdERVNDJyxcbiAgICB9O1xuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzT3JkZXInKSA9PT0gJ2FzYycpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dpbm5lcnNPcmRlcicsICdkZXNjJyk7XG4gICAgfSBlbHNlIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dpbm5lcnNPcmRlcicsICdhc2MnKTtcbiAgICByZW5kZXJUYWJsZShvcHRpb25zKTtcbiAgfSk7XG5cbiAgaGVhZGVyUm93LmFwcGVuZChcbiAgICB0YWJsZUhlYWRlck51bWJlcixcbiAgICB0YWJsZUhlYWRlckNhcixcbiAgICB0YWJsZUhlYWRlck5hbWUsXG4gICAgdGFibGVIZWFkZXJXaW5zLFxuICAgIHRhYmxlSGVhZGVyVGltZSxcbiAgKTtcbiAgdGFibGUuYXBwZW5kKGhlYWRlclJvdyk7XG4gIGNvbnN0IHdpbm5lcnMgPSBhd2FpdCBnZXRXaW5uZXJzKHVybE9wdGlvbnMpO1xuICBsZXQgY291bnRlciA9IDAgKyB3aW5uZXJzQ29uZmlnLmxpbWl0ICogKCsoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc1BhZ2UnKSB8fCAxKSAtIDEpO1xuICBjb25zdCBjYXJzID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICB3aW5uZXJzLmZvckVhY2goYXN5bmMgKHdpbm5lcjogSVdpbm5lcikgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBkYXRhUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBudW1iZXJDZWxsID0gY3JlYXRlVGFibGVDZWxsKGAke2NvdW50ZXJ9YCk7XG5cbiAgICBjb25zdCBjYXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBsZXQgbmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjYXJzW2ldLmlkID09PSB3aW5uZXIuaWQpIHtcbiAgICAgICAgbmFtZUNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoY2Fyc1tpXS5uYW1lKTtcbiAgICAgICAgY2FyQ2VsbC5pbm5lckhUTUwgPSByZW5kZXJDb2xvclN2ZyhjYXJzW2ldLmNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgd2luc0NlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7d2lubmVyLndpbnN9YCk7XG4gICAgY29uc3QgdGltZUNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7d2lubmVyLnRpbWV9YCk7XG4gICAgZGF0YVJvdy5hcHBlbmQobnVtYmVyQ2VsbCwgY2FyQ2VsbCwgbmFtZUNlbGwsIHdpbnNDZWxsLCB0aW1lQ2VsbCk7XG4gICAgdGFibGUuYXBwZW5kKGRhdGFSb3cpO1xuICB9KTtcbiAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJyk7XG4gIGlmIChyZWNvcmRzPy5xdWVyeVNlbGVjdG9yKCcud2lubmVycycpKSByZWNvcmRzLnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzJyk/LnJlbW92ZSgpO1xuICByZWNvcmRzPy5hcHBlbmQodGFibGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYWJsZTtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldFJlY29yZHNBbW91bnQgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcldpbm5lckhlYWRlcigpIHtcbiAgY29uc3QgcmVjb3Jkc0xhYmVsID0gY3JlYXRlTm9kZSgncmVjb3Jkc19fbGFiZWwnLCAnUmVjb3JkczonKTtcbiAgY29uc3QgcmVjb3Jkc0Ftb3VudCA9IGF3YWl0IGdldFJlY29yZHNBbW91bnQoKTtcbiAgY29uc3QgcmVjb3Jkc1ZhbHVlID0gY3JlYXRlTm9kZSgncmVjb3Jkc19fYW1vdW50JywgcmVjb3Jkc0Ftb3VudCB8fCAnMCcpO1xuICBjb25zdCByZWNvcmRzQW1vdW50QmxvY2sgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19hbW91bnQtYmxvY2snKTtcbiAgcmVjb3Jkc0Ftb3VudEJsb2NrLmFwcGVuZChyZWNvcmRzTGFiZWwsIHJlY29yZHNWYWx1ZSk7XG4gIHJldHVybiByZWNvcmRzQW1vdW50QmxvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcldpbm5lckhlYWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJXaW5uZXJzUGFnaW5hdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XG5pbXBvcnQgcmVuZGVyVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL3JlbmRlci10YWJsZSc7XG5pbXBvcnQgcmVuZGVyV2lubmVySGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy93aW5uZXItaGVhZGVyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyUmVjb3Jkc1BhZ2UoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dpbm5lcnNQYWdlJywgJzEnKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBjb25zdCByZWNvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKTtcbiAgICBpZiAocmVjb3JkcykgcmVjb3Jkcy5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCByZWNvcmRzID0gY3JlYXRlTm9kZSgncmVjb3JkcycpO1xuICBjb25zdCBwYWdpbmF0aW9uID0gYXdhaXQgcmVuZGVyV2lubmVyc1BhZ2luYXRpb24oKTtcbiAgcmVjb3Jkcy5hcHBlbmQocGFnaW5hdGlvbik7XG4gIGNvbnN0IHJlY29yZHNIZWFkZXIgPSBhd2FpdCByZW5kZXJXaW5uZXJIZWFkZXIoKTtcbiAgcmVjb3Jkcy5hcHBlbmQocmVjb3Jkc0hlYWRlcik7XG4gIHJlbmRlclRhYmxlKCk7XG4gIGJvZHk/LmFwcGVuZChyZWNvcmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUmVjb3Jkc1BhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJHYXJhZ2VQYWdlIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9nYXJhZ2UvZ2FyYWdlJztcbmltcG9ydCByZW5kZXJSZWNvcmRzUGFnZSBmcm9tICcuL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9yZWNvcmRzJztcbmltcG9ydCByZW5kZXJIZWFkZXIgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL2hlYWRlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcbiAgcmVuZGVySGVhZGVyKCk7XG4gIHJlbmRlckdhcmFnZVBhZ2UoKTtcbiAgYXdhaXQgcmVuZGVyUmVjb3Jkc1BhZ2UoKTtcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbnJlbmRlckFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9