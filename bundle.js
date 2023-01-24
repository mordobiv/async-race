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
            const carsBlock = document.querySelector('.cars');
            if (carsBlock) {
                carsBlock.append((0,_garage_cars__WEBPACK_IMPORTED_MODULE_2__.renderSpecificCar)(newCar));
            }
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
    // const carIconBlock = createImg('assets/icon/carIcon.svg', 'car');
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
    const allCars = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
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
        const results = [];
        const carsBlock = document.querySelector('.cars');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksSUFBSSxFQUFFO1FBQ1IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU87WUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDL0I7SUFDRCxNQUFNLE9BQU8sR0FBRyxvREFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLGtDQUFrQztJQUNsQyxxRUFBa0IsRUFBRSxDQUFDO0lBQ3JCLG9FQUFXLEVBQUUsQ0FBQztJQUNkLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUVELGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7O1VDdEJqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkQ7QUFDRztBQUNkO0FBRWxELEtBQUssVUFBVSxTQUFTO0lBQ3RCLGlFQUFZLEVBQUUsQ0FBQztJQUNmLHdFQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSwwRUFBaUIsRUFBRSxDQUFDO0lBQ3pCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFvQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2hGLENBQUM7QUFFRCxTQUFTLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9hbmltYXRpb24vZHJpdmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2NhcnMtbmFtZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2NhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9yZWNvcmRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9oZWxwZXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9jYXItbWFuYWdlbWVudC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvaGVhZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvd2lubmVyLWhlYWRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9yZWNvcmRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJhY2VTdGF0cyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGdldERyaXZlU3RlcCh2ZWxvY2l0eTogbnVtYmVyKSB7XG4gIGNvbnN0IHRpbWUgPSByYWNlU3RhdHMubWF4QW5pbWF0aW9uVGltZSAvICh2ZWxvY2l0eSAvIHJhY2VTdGF0cy5taW5Qb3NzaWJsZVZlbG9jaXR5KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IHJhY2VTdGF0cy5mcmFtZXNQZXJTZWNvbmQgKiB0aW1lO1xuXG4gIGNvbnN0IHN0ZXBEaXN0YW5jZSA9IHJhY2VTdGF0cy5kaXN0YW5jZSAvIHRvdGFsU3RlcHM7XG4gIHJldHVybiB7XG4gICAgc3RlcERpc3RhbmNlLFxuICAgIHRpbWUsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERyaXZlU3RlcDtcbiIsImV4cG9ydCBjb25zdCBhcGlVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwLyc7XG5cbmV4cG9ydCBjb25zdCByYWNlU3RhdHMgPSB7XG4gIG1heEFuaW1hdGlvblRpbWU6IDQwLFxuICBtaW5Qb3NzaWJsZVZlbG9jaXR5OiA1MCxcbiAgZnJhbWVzUGVyU2Vjb25kOiA2MCxcbiAgZGlzdGFuY2U6IDEwMCxcbn07XG5cbmV4cG9ydCBjb25zdCB3aW5uZXJzQ29uZmlnID0ge1xuICBsaW1pdDogNyxcbiAgcGFnZTogMSxcbiAgc29ydDogJ3RpbWUnLFxuICBvcmRlcjogJ0FTQycsXG59O1xuXG5leHBvcnQgY29uc3QgY2Fyc1RvR2VuZXJhdGUgPSA3O1xuIiwiZXhwb3J0IGNvbnN0IGJyYW5kcyA9IFsnUGV1Z2VvdCcsICdCTVcnLCAnUG9yc2NoZScsICdaaGlndWxpJywgJ0F1ZGknLCAnTWVyY2VkZXMnLCAnRmlhdCcsICdNQVonLCAnQnVnZ2F0aScsICdSb2xscy1Sb3lzZScsICdQYWdhbmknXTtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSBbJzQwNiBDb3VwZScsICdBTUcnLCAnTS1TZXJpZXMnLCAnUlMnLCAnMy1zZXJpZXMnLCAnQTYnLCAnQzIwOCcsICc5MTEnLCAnQ2F5bWFuJywgJzRTJywgJ1Nwb3J0J107XG4iLCJpbXBvcnQgeyBhcGlVcmwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBnYXJhZ2VVcmwgPSBgJHthcGlVcmx9Z2FyYWdlL2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDYXJzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdhcmFnZVVybCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGFsbENhcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGFsbENhcnM7XG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcignQ2Fubm90IGdldCBjYXJzIGxpc3QnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcihjYXI6IHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0pIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGdhcmFnZVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcblxuICBpZiAocmVxdWVzdC5vaykge1xuICAgIC8vIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgICByZXR1cm4gcmVxdWVzdC5qc29uKCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGNhcicpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ2FyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1BlcmZlY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FyKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgY29sb3IgPSAnMTIzJykge1xuICBjb25zdCBjYXIgPSB7XG4gICAgbmFtZSxcbiAgICBjb2xvcixcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcblxuICBpZiAocmVxdWVzdC5vaykge1xuICAgIC8vIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgY2FyJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFwaVVybCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGVuZ2luZVVybCA9IGAke2FwaVVybH1lbmdpbmVgO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRTdG9wQ2FyKGNhcklkOiBudW1iZXIsIHN0YXR1czogJ3N0YXJ0ZWQnIHwgJ3N0b3BwZWQnKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5naW5lVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYCR7Y2FySWR9YCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzdGF0dXMnLCBzdGF0dXMpO1xuICBjb25zdCBzdGFydEVuZ2luZVJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gIH0pO1xuICBpZiAoc3RhcnRFbmdpbmVSZXF1ZXN0Lm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdGFydEVuZ2luZVJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHsgdmVsb2NpdHkgfSA9IHJlc3BvbnNlO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tFbmdpbmUoY2FySWQ6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuZ2luZVVybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpZCcsIGAke2NhcklkfWApO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc3RhdHVzJywgJ2RyaXZlJyk7XG4gIGNvbnN0IHN0YXJ0RHJpdmVSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGlkOiBjYXJJZCxcbiAgICAgIHN0YXR1czogJ2RyaXZlJyxcbiAgICB9KSxcbiAgfSk7XG4gIHJldHVybiBzdGFydERyaXZlUmVxdWVzdC5vaztcbn1cbiIsImltcG9ydCB7IGFwaVVybCwgd2lubmVyc0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IHdpbm5lcnNVcmwgPSBgJHthcGlVcmx9d2lubmVycy9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2lubmVycyhyZW5kZXJPcHRpb25zPzogeyBzb3J0OiAnd2lucycgfCAndGltZScsIG9yZGVyOiAnQVNDJyB8ICdERVNDJywgcGFnZT86IG51bWJlciB9KSB7XG4gIGxldCB1cmxPcHRpb25zID0ge307XG4gIGNvbnNvbGUubG9nKHJlbmRlck9wdGlvbnMpO1xuXG4gIGlmIChyZW5kZXJPcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMod2lubmVyc0NvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIShrZXkgaW4gcmVuZGVyT3B0aW9ucykpIHtcbiAgICAgICAgdXJsT3B0aW9uc1trZXldID0gd2lubmVyc0NvbmZpZ1trZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsT3B0aW9uc1trZXldID0gcmVuZGVyT3B0aW9uc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgdXJsT3B0aW9ucyA9IHdpbm5lcnNDb25maWc7XG5cbiAgLy8gdXJsT3B0aW9ucy5saW1pdCA9IHdpbm5lcnNDb25maWcubGltaXQ7XG4gIC8vIHVybE9wdGlvbnMucGFnZSA9IHdpbm5lcnNDb25maWcucGFnZTtcblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbm5lcnNVcmwpO1xuICBPYmplY3Qua2V5cyh1cmxPcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChgXyR7a2V5fWAsIGAke3VybE9wdGlvbnNba2V5XX1gKTtcbiAgfSk7XG4gIGNvbnN0IHdpbm5lcnNSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKHdpbm5lcnNSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIHdpbm5lcnNSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2lubmVyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5uZXJzVXJsfSR7aWR9YCk7XG4gIGNvbnN0IHdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZiAod2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiB3aW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxuICByZXR1cm4gd2lubmVyUmVxdWVzdC5zdGF0dXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5uZXIoaWQ6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gIGNvbnN0IHJlY29yZE5vZGUgPSB7XG4gICAgaWQsXG4gICAgd2luczogMSxcbiAgICB0aW1lLFxuICB9O1xuICBjb25zdCBjcmVhdGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2god2lubmVyc1VybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWNvcmROb2RlKSxcbiAgfSk7XG4gIGlmIChjcmVhdGVXaW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXaW5uZXIoaWQ6bnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IGAke3dpbm5lcnNVcmx9JHtpZH1gO1xuICBjb25zdCBkZWxldGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSk7XG4gIGlmIChkZWxldGVXaW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIGRlbGV0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5uZXIoaWQ6IG51bWJlciwgd2luczogbnVtYmVyLCB0aW1lOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gYCR7d2lubmVyc1VybH0ke2lkfWA7XG4gIGNvbnN0IHVwZGF0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB3aW5zLFxuICAgICAgdGltZSxcbiAgICB9KSxcbiAgfSk7XG4gIGlmICh1cGRhdGVXaW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIHVwZGF0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShjbGFzc05hbWU6IHN0cmluZywgdGV4dENvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYgKHRleHRDb250ZW50KSBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ1dHRvbk5hbWU6IHN0cmluZykge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9IGBidXR0b24gYnV0dG9uX18ke2J1dHRvbk5hbWV9YDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uTmFtZTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZyhzcmM6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgaW1nQmxvY2sgPSBjcmVhdGVOb2RlKGNsYXNzTmFtZSk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfV9faW1nYDtcbiAgaW1nLnNyYyA9IHNyYztcbiAgaW1nQmxvY2suYXBwZW5kKGltZyk7XG4gIHJldHVybiBpbWdCbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0Q29udGVudDogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlQ2VsbCh0ZXh0Q29udGVudD86IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgaWYgKHRleHRDb250ZW50KSBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29sb3JTdmcoY29sb3I6IHN0cmluZykge1xuICByZXR1cm4gYFxuICA8IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIj5cblxuICA8c3ZnIGZpbGw9XCIke2NvbG9yfVwiIGhlaWdodD1cIjIzcHhcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJjYXJfX2ltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDQ3LjAzMiA0Ny4wMzJcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHN0cm9rZT1cIiMwMDAwMDBcIj5cblxuICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiLz5cblxuICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cblxuICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPGc+IDxwYXRoIGQ9XCJNMjkuMzk1LDBIMTcuNjM2Yy0zLjExNywwLTUuNjQzLDMuNDY3LTUuNjQzLDYuNTg0djM0LjgwNGMwLDMuMTE2LDIuNTI2LDUuNjQ0LDUuNjQzLDUuNjQ0aDExLjc1OSBjMy4xMTYsMCw1LjY0NC0yLjUyNyw1LjY0NC01LjY0NFY2LjU4NEMzNS4wMzcsMy40NjcsMzIuNTExLDAsMjkuMzk1LDB6IE0zNC4wNSwxNC4xODh2MTEuNjY1bC0yLjcyOSwwLjM1MXYtNC44MDZMMzQuMDUsMTQuMTg4eiBNMzIuNjE4LDEwLjc3M2MtMS4wMTYsMy45LTIuMjE5LDguNTEtMi4yMTksOC41MUgxNi42MzFsLTIuMjIyLTguNTFDMTQuNDEsMTAuNzczLDIzLjI5Myw3Ljc1NSwzMi42MTgsMTAuNzczeiBNMTUuNzQxLDIxLjcxMyB2NC40OTJsLTIuNzMtMC4zNDlWMTQuNTAyTDE1Ljc0MSwyMS43MTN6IE0xMy4wMTEsMzcuOTM4VjI3LjU3OWwyLjczLDAuMzQzdjguMTk2TDEzLjAxMSwzNy45Mzh6IE0xNC41NjgsNDAuODgybDIuMjE4LTMuMzM2IGgxMy43NzFsMi4yMTksMy4zMzZIMTQuNTY4eiBNMzEuMzIxLDM1LjgwNXYtNy44NzJsMi43MjktMC4zNTV2MTAuMDQ4TDMxLjMyMSwzNS44MDV6XCIvPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8L2c+IDwvZz5cblxuICA8L3N2Zz5cbmBcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyLCB1cGRhdGVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ2FycywgeyByZW5kZXJTcGVjaWZpY0NhciB9IGZyb20gJy4vZ2FyYWdlLWNhcnMnO1xuXG5mdW5jdGlvbiByZW5kZXJDYXJTZWxlY3Rpb24oYmxvY2tUeXBlOiBzdHJpbmcpIHtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZU5vZGUoYmxvY2tUeXBlKTtcblxuICBjb25zdCBzZXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBzZXROYW1lLmNsYXNzTmFtZSA9IGAke2Jsb2NrVHlwZX1fX2lucHV0YDtcblxuICBjb25zdCBjb2xvciA9IGNyZWF0ZU5vZGUoYCR7YmxvY2tUeXBlfV9fY29sb3JgLCAnU2V0IGNvbG9yOiAnKTtcbiAgY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb2xvclBpY2tlci50eXBlID0gJ2NvbG9yJztcbiAgY29sb3JQaWNrZXIuY2xhc3NOYW1lID0gJ2NvbG9yX19waWNrZXInO1xuXG4gIGNvbG9yLmFwcGVuZChjb2xvclBpY2tlcik7XG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihibG9ja1R5cGUpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGJsb2NrVHlwZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogc2V0TmFtZS52YWx1ZSxcbiAgICAgICAgY29sb3I6IGNvbG9yUGlja2VyLnZhbHVlLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IG5ld0NhciA9IGF3YWl0IGNyZWF0ZUNhcihjYXIpO1xuICAgICAgY29uc3QgY2Fyc0hlYWRlckFtb3VudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgKyAxfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBjYXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FycycpO1xuICAgICAgaWYgKGNhcnNCbG9jaykge1xuICAgICAgICBjYXJzQmxvY2suYXBwZW5kKHJlbmRlclNwZWNpZmljQ2FyKG5ld0NhcikpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNhcklkIH0gPSBzZXROYW1lLmRhdGFzZXQ7XG4gICAgICBpZiAoY2FySWQpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gc2V0TmFtZTtcbiAgICAgICAgdXBkYXRlQ2FyKCtjYXJJZCwgdmFsdWUsIGNvbG9yUGlja2VyLnZhbHVlKTtcbiAgICAgICAgY29uc3QgZ2FyYWdlQ2FycyA9IGF3YWl0IHJlbmRlckdhcmFnZUNhcnMoKTtcbiAgICAgICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKTtcbiAgICAgICAgZ2FyYWdlVmlldz8uYXBwZW5kKGdhcmFnZUNhcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbWFpbi5hcHBlbmQoc2V0TmFtZSwgY29sb3IsIGJ1dHRvbik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDYXJNYW5hZ2VtZW50KCkge1xuICBjb25zdCBjYXJNYW5hZ2VtZW50QmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItbWFuYWdlbWVudCcpO1xuICBjb25zdCBjcmVhdGVDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignY3JlYXRlJyk7XG4gIGNvbnN0IGVkaXRDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignZWRpdCcpO1xuXG4gIGNhck1hbmFnZW1lbnRCbG9jay5hcHBlbmQoY3JlYXRlQ2FyQmxvY2ssIGVkaXRDYXJCbG9jayk7XG4gIHJldHVybiBjYXJNYW5hZ2VtZW50QmxvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhck1hbmFnZW1lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUltZywgcmVuZGVyQ29sb3JTdmcgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldEFsbENhcnMsIHJlbW92ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IHN0YXJ0U3RvcENhciwgY2hlY2tFbmdpbmUgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvZW5naW5lJztcbmltcG9ydCB7XG4gIGNyZWF0ZVdpbm5lciwgZGVsZXRlV2lubmVyLCBnZXRXaW5uZXIsIHVwZGF0ZVdpbm5lcixcbn0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IGdldERyaXZlU3RlcCBmcm9tICcuLi8uLi8uLi9hbmltYXRpb24vZHJpdmUnO1xuaW1wb3J0IHsgSUNhciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY2FyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyID0gY3JlYXRlTm9kZSgnaGVhZGVyJyk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJMYWJlbCA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fbGFiZWwnLCAnR2FyYWdlJyk7XG4gIGNvbnN0IGNhcnNBbW91bnQgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fdmFsdWUnLCBjYXJzQW1vdW50Lmxlbmd0aCk7XG5cbiAgZ2FyYWdlQ2Fyc0hlYWRlci5hcHBlbmQoZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsLCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUpO1xuICByZXR1cm4gZ2FyYWdlQ2Fyc0hlYWRlcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBhZ2UoKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcicpO1xuICBjb25zdCBwYWdlTnVtYmVyTGFiZWwgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fbGFiZWwnLCAnUGFnZSAjJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX192YWx1ZScsICcxJyk7XG4gIHBhZ2VOdW1iZXIuYXBwZW5kKHBhZ2VOdW1iZXJMYWJlbCwgcGFnZU51bWJlclZhbHVlKTtcbiAgcmV0dXJuIHBhZ2VOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTcGVjaWZpY0NhcihjYXI6IElDYXIpIHtcbiAgY29uc3QgY2FyQmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItYmxvY2snKTtcbiAgY2FyQmxvY2suZGF0YXNldC5jYXJJZCA9IGAke2Nhci5pZH1gO1xuXG4gIGNvbnN0IGNhck1vZGlmaWVycyA9IGNyZWF0ZU5vZGUoJ21vZGlmaWVyJyk7XG5cbiAgY29uc3Qgc2VsZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzZWxlY3QnKTtcbiAgc2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0X19pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWRpdElucHV0LnZhbHVlID0gY2FyLm5hbWU7XG4gICAgZWRpdElucHV0LmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcbiAgfSk7XG5cbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyZW1vdmUnKTtcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUNhcihjYXIuaWQpO1xuICAgIGNhckJsb2NrLnJlbW92ZSgpO1xuICAgIGNvbnN0IGNhcnNIZWFkZXJBbW91bnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZhbHVlJyk7XG4gICAgaWYgKGNhcnNIZWFkZXJBbW91bnRCbG9jayAmJiBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQpIHtcbiAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgLSAxfWA7XG4gICAgfVxuICAgIGRlbGV0ZVdpbm5lcihjYXIuaWQpO1xuICB9KTtcbiAgY2FyTW9kaWZpZXJzLmFwcGVuZChzZWxlY3RCdXR0b24sIHJlbW92ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2FyTmFtZSA9IGNyZWF0ZU5vZGUoJ25hbWUnLCBjYXIubmFtZSk7XG4gIC8vIGNvbnN0IGNhckljb25CbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vY2FySWNvbi5zdmcnLCAnY2FyJyk7XG4gIGNvbnN0IGNhckljb25CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJJY29uQmxvY2suaW5uZXJIVE1MID0gcmVuZGVyQ29sb3JTdmcoY2FyLmNvbG9yKTtcbiAgY2FySWNvbkJsb2NrLmNsYXNzTmFtZSA9ICdjYXInO1xuXG4gIGNvbnN0IGZsYWdJY29uQmxvY2sgPSBjcmVhdGVJbWcoJ2Fzc2V0cy9pY29uL2ZsYWcuc3ZnJywgJ2ZsYWcnKTtcbiAgY29uc3QgY29udHJvbHMgPSBjcmVhdGVOb2RlKCdjb250cm9scycpO1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJ1dHRvbignc3RhcnQnKTtcbiAgY29uc3Qgc3RvcCA9IGNyZWF0ZUJ1dHRvbignc3RvcCcpO1xuICBzdGFydC5kaXNhYmxlZCA9IGZhbHNlO1xuICBzdG9wLmRpc2FibGVkID0gdHJ1ZTtcbiAgc3RhcnQuZGF0YXNldC5jYXJJZCA9IGAke2Nhci5pZH1gO1xuICBsZXQgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCA9IDA7XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9fZGlzYWJsZWQnKTtcbiAgICBzdGFydC5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3Qgc3RhcnRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBhd2FpdCBzdGFydFN0b3BDYXIoY2FyLmlkLCAnc3RhcnRlZCcpO1xuICAgIGNvbnN0IGRyaXZlQW5pbWF0aW9uU3RlcCA9IGdldERyaXZlU3RlcCh2ZWxvY2l0eSk7XG4gICAgc3RvcC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoY2FySWNvbkJsb2NrKSB7XG4gICAgICAgIGlmICgrY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZS5zbGljZSgwLCAtMSkgPj0gMTAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgICAgICAgICBjb25zdCBlbmRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgICAgICAgY29uc3QgcmFjZUR1cmF0aW9uID0gKChlbmRSYWNlIC0gc3RhcnRSYWNlKSAvIDEwMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JhY2UnKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyYWNlJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmFjZScsICdmYWxzZScpO1xuICAgICAgICAgICAgYWxlcnQoYCR7Y2FyLm5hbWV9IGhhcyB3b24hXFxuVGltZTogJHtyYWNlRHVyYXRpb259c2ApO1xuICAgICAgICAgICAgY29uc3QgY2FyV2luID0gYXdhaXQgZ2V0V2lubmVyKGNhci5pZCk7XG4gICAgICAgICAgICBpZiAoY2FyV2luID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgY3JlYXRlV2lubmVyKGNhci5pZCwgK3JhY2VEdXJhdGlvbik7XG4gICAgICAgICAgICAgIGNvbnN0IHJlY29yZHNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3Jkc19fYW1vdW50Jyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmRzQW1vdW50ICYmIHJlY29yZHNBbW91bnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmRzQW1vdW50LnRleHRDb250ZW50ID0gYCR7K3JlY29yZHNBbW91bnQudGV4dENvbnRlbnQgKyAxfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1RpbWUgPSArcmFjZUR1cmF0aW9uIDwgY2FyV2luLnRpbWUgPyArcmFjZUR1cmF0aW9uIDogY2FyV2luLnRpbWU7XG4gICAgICAgICAgICAgIHVwZGF0ZVdpbm5lcihjYXIuaWQsIGNhcldpbi53aW5zICsgMSwgK25ld1RpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZVZhbHVlID0gY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZTtcbiAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlVmFsdWUgPSBjdXJyZW50VHJhbnNsYXRlVmFsdWUgPyBgJHsrY3VycmVudFRyYW5zbGF0ZVZhbHVlLnNsaWNlKDAsIC0xKSArIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2V9JWAgOiBgJHtkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgO1xuICAgICAgICBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlID0gbmV3VHJhbnNsYXRlVmFsdWU7XG4gICAgICB9XG4gICAgfSwgZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZSk7XG4gICAgY2FyQmxvY2suZGF0YXNldC5pbnRlcnZhbElkID0gYCR7Y2FyQW5pbWF0aW9uSW50ZXJ2YWxJZH1gO1xuICAgIGNvbnN0IGlzRW5naW5lT2sgPSBhd2FpdCBjaGVja0VuZ2luZShjYXIuaWQpO1xuICAgIGlmICghaXNFbmdpbmVPaykgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgfSk7XG4gIHN0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3RvcC5kaXNhYmxlZCA9IHRydWU7XG4gICAgc3RhcnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBzdGFydFN0b3BDYXIoY2FyLmlkLCAnc3RvcHBlZCcpO1xuICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSAnJztcbiAgICBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICB9KTtcbiAgY29udHJvbHMuYXBwZW5kKHN0YXJ0LCBzdG9wKTtcblxuICBjb25zdCByYWNlID0gY3JlYXRlTm9kZSgncmFjZScpO1xuICByYWNlLmFwcGVuZChjYXJJY29uQmxvY2ssIGZsYWdJY29uQmxvY2spO1xuXG4gIGNhckJsb2NrLmFwcGVuZChjYXJNb2RpZmllcnMsIGNhck5hbWUsIGNvbnRyb2xzLCByYWNlKTtcbiAgcmV0dXJuIGNhckJsb2NrO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJDYXJzKCkge1xuICBjb25zdCBjYXJzID0gY3JlYXRlTm9kZSgnY2FycycpO1xuICBjb25zdCBhbGxDYXJzID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICBhbGxDYXJzLmZvckVhY2goKGNhcjogSUNhcikgPT4ge1xuICAgIGNhcnMuYXBwZW5kKHJlbmRlclNwZWNpZmljQ2FyKGNhcikpO1xuICB9KTtcbiAgcmV0dXJuIGNhcnM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZUNhcnMoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLWNhcnMnKSkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1jYXJzJyk/LnJlbW92ZSgpO1xuICBjb25zdCBnYXJhZ2VDYXJzID0gY3JlYXRlTm9kZSgnZ2FyYWdlLWNhcnMnKTtcbiAgY29uc3QgaGVhZGVyID0gYXdhaXQgcmVuZGVySGVhZGVyKCk7XG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gcmVuZGVyQ3VycmVudFBhZ2UoKTtcbiAgY29uc3QgY2FycyA9IGF3YWl0IHJlbmRlckNhcnMoKTtcblxuICBnYXJhZ2VDYXJzLmFwcGVuZChoZWFkZXIsIGN1cnJlbnRQYWdlLCBjYXJzKTtcbiAgcmV0dXJuIGdhcmFnZUNhcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZUNhcnM7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGJyYW5kcywgbW9kZWxzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMtbmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgeyByZW5kZXJTcGVjaWZpY0NhciB9IGZyb20gJy4vZ2FyYWdlLWNhcnMnO1xuaW1wb3J0IHsgY2Fyc1RvR2VuZXJhdGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5mdW5jdGlvbiByZW5kZXJHYXJhZ2VDb250cm9scygpIHtcbiAgY29uc3QgZ2FyYWdlQ29udHJvbHMgPSBjcmVhdGVOb2RlKCdjb250cm9scycpO1xuXG4gIGNvbnN0IHJhY2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3JhY2UnKTtcbiAgcmFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ3RydWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zdGFydCcpLmZvckVhY2goKGVsKSA9PiAoZWwgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCkpO1xuICB9KTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3Jlc2V0Jyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbl9fc3RvcCcpLmZvckVhY2goKGVsKSA9PiAoZWwgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCkpKTtcbiAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2dlbmVyYXRlJyk7XG4gIGdlbmVyYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCBjYXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FycycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyc1RvR2VuZXJhdGU7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmFuZEJyYW5kID0gYnJhbmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJyYW5kcy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IHJhbmRNb2RlbCA9IG1vZGVsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb2RlbHMubGVuZ3RoKV07XG4gICAgICBjb25zdCBjYXJOYW1lID0gYCR7cmFuZEJyYW5kfSAke3JhbmRNb2RlbH1gO1xuICAgICAgY29uc3QgY2FyID0ge1xuICAgICAgICBuYW1lOiBjYXJOYW1lLFxuICAgICAgICBjb2xvcjogYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCxcbiAgICAgIH07XG4gICAgICByZXN1bHRzLnB1c2goY3JlYXRlQ2FyKGNhcikpO1xuICAgIH1cbiAgICBpZiAoY2Fyc0Jsb2NrKSB7XG4gICAgICAoYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0cykpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGNhcnNCbG9jay5hcHBlbmQocmVuZGVyU3BlY2lmaWNDYXIoZWwpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBjYXJzSGVhZGVyQW1vdW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ICsgY2Fyc1RvR2VuZXJhdGV9YDtcbiAgICB9XG4gIH0pO1xuXG4gIGdhcmFnZUNvbnRyb2xzLmFwcGVuZChyYWNlQnV0dG9uLCByZXNldEJ1dHRvbiwgZ2VuZXJhdGVCdXR0b24pO1xuICByZXR1cm4gZ2FyYWdlQ29udHJvbHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZUNvbnRyb2xzO1xuIiwiaW1wb3J0IHJlbmRlckNhck1hbmFnZW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL2Nhci1tYW5hZ2VtZW50JztcbmltcG9ydCByZW5kZXJHYXJhZ2VDb250cm9scyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNvbnRyb2xzJztcbmltcG9ydCByZW5kZXJHYXJhZ2VDYXJzIGZyb20gJy4vY29tcG9uZW50cy9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZVBhZ2UoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAnZmFsc2UnKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgZ2FyYWdlVmlldyA9IGNyZWF0ZU5vZGUoJ2dhcmFnZScpO1xuICBpZiAoYm9keSkge1xuICAgIGNvbnN0IGNhck1hbmFnZW1lbnQgPSByZW5kZXJDYXJNYW5hZ2VtZW50KCk7XG4gICAgY29uc3QgZ2FyYWdlQ29udHJvbHMgPSByZW5kZXJHYXJhZ2VDb250cm9scygpO1xuICAgIGNvbnN0IGdhcmFnZUNhcnMgPSBhd2FpdCByZW5kZXJHYXJhZ2VDYXJzKCk7XG5cbiAgICBnYXJhZ2VWaWV3LmFwcGVuZChjYXJNYW5hZ2VtZW50LCBnYXJhZ2VDb250cm9scywgZ2FyYWdlQ2Fycyk7XG4gICAgYm9keS5hcHBlbmQoZ2FyYWdlVmlldyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlUGFnZTtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlclJlY29yZHNQYWdlIGZyb20gJy4vcmVjb3Jkcy9yZWNvcmRzJztcblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuXG4gIGNvbnN0IGhlYWRlckJ1dHRvbnMgPSBjcmVhdGVOb2RlKCdidXR0b25zJyk7XG5cbiAgY29uc3QgdG9HYXJhZ2UgPSBjcmVhdGVCdXR0b24oJ2dhcmFnZScpO1xuICB0b0dhcmFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IHJlY29yZHNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoZ2FyYWdlVmlldyAmJiByZWNvcmRzVmlldykge1xuICAgICAgZ2FyYWdlVmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHJlY29yZHNWaWV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0b1JlY29yZHMgPSBjcmVhdGVCdXR0b24oJ3JlY29yZHMnKTtcbiAgdG9SZWNvcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgcmVjb3Jkc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChnYXJhZ2VWaWV3ICYmIHJlY29yZHNWaWV3KSB7XG4gICAgICBnYXJhZ2VWaWV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICByZWNvcmRzVmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHJlbmRlclJlY29yZHNQYWdlKCk7XG4gICAgfVxuICB9KTtcblxuICBoZWFkZXJCdXR0b25zLmFwcGVuZCh0b0dhcmFnZSwgdG9SZWNvcmRzKTtcblxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckJ1dHRvbnMpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHk/LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXI7XG4iLCJpbXBvcnQgeyBnZXRXaW5uZXJzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IHsgY3JlYXRlSW1nLCBjcmVhdGVUYWJsZUNlbGwsIGNyZWF0ZVRhYmxlSGVhZGVyLCByZW5kZXJDb2xvclN2ZyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2FycyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCBJV2lubmVyIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvd2lubmVyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyVGFibGUodXJsT3B0aW9ucz8pIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICB0YWJsZS5jbGFzc05hbWUgPSAnd2lubmVycyc7XG4gIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGhlYWRlclJvdy5jbGFzc05hbWUgPSAnd2lubmVyc19faGVhZGVyJztcbiAgY29uc3QgdGFibGVIZWFkZXJOdW1iZXIgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19udW1iZXInLCAnIycpO1xuICBjb25zdCB0YWJsZUhlYWRlckNhciA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX2NhcicsICdDYXInKTtcbiAgY29uc3QgdGFibGVIZWFkZXJOYW1lID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fbmFtZScsICdOYW1lJyk7XG5cbiAgY29uc3QgdGFibGVIZWFkZXJXaW5zID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fd2lucyBjbGlja2FibGUnLCAnV2lucyDih4UnKTtcbiAgdGFibGVIZWFkZXJXaW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzb3J0OiAnd2lucycsXG4gICAgICBvcmRlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnID8gJ0FTQycgOiAnREVTQycsXG4gICAgfTtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnZGVzYycpO1xuICAgIH0gZWxzZSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnYXNjJyk7XG4gICAgcmVuZGVyVGFibGUob3B0aW9ucyk7XG4gIH0pO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGVyVGltZSA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX3RpbWUnLCAnVGltZSDih4UnKTtcbiAgdGFibGVIZWFkZXJUaW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzb3J0OiAndGltZScsXG4gICAgICBvcmRlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnID8gJ0FTQycgOiAnREVTQycsXG4gICAgfTtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnZGVzYycpO1xuICAgIH0gZWxzZSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnYXNjJyk7XG4gICAgcmVuZGVyVGFibGUob3B0aW9ucyk7XG4gIH0pO1xuXG4gIGhlYWRlclJvdy5hcHBlbmQoXG4gICAgdGFibGVIZWFkZXJOdW1iZXIsXG4gICAgdGFibGVIZWFkZXJDYXIsXG4gICAgdGFibGVIZWFkZXJOYW1lLFxuICAgIHRhYmxlSGVhZGVyV2lucyxcbiAgICB0YWJsZUhlYWRlclRpbWUsXG4gICk7XG4gIHRhYmxlLmFwcGVuZChoZWFkZXJSb3cpO1xuICBjb25zdCB3aW5uZXJzID0gYXdhaXQgZ2V0V2lubmVycyh1cmxPcHRpb25zKTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBjYXJzID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xuICB3aW5uZXJzLmZvckVhY2goYXN5bmMgKHdpbm5lcjogSVdpbm5lcikgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBkYXRhUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBudW1iZXJDZWxsID0gY3JlYXRlVGFibGVDZWxsKGAke2NvdW50ZXJ9YCk7XG5cbiAgICBjb25zdCBjYXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBsZXQgbmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjYXJzW2ldLmlkID09PSB3aW5uZXIuaWQpIHtcbiAgICAgICAgbmFtZUNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoY2Fyc1tpXS5uYW1lKTtcbiAgICAgICAgY2FyQ2VsbC5pbm5lckhUTUwgPSByZW5kZXJDb2xvclN2ZyhjYXJzW2ldLmNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgd2luc0NlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7d2lubmVyLndpbnN9YCk7XG4gICAgY29uc3QgdGltZUNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7d2lubmVyLnRpbWV9YCk7XG4gICAgZGF0YVJvdy5hcHBlbmQobnVtYmVyQ2VsbCwgY2FyQ2VsbCwgbmFtZUNlbGwsIHdpbnNDZWxsLCB0aW1lQ2VsbCk7XG4gICAgdGFibGUuYXBwZW5kKGRhdGFSb3cpO1xuICB9KTtcbiAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJyk7XG4gIGlmIChyZWNvcmRzPy5xdWVyeVNlbGVjdG9yKCcud2lubmVycycpKSByZWNvcmRzLnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzJyk/LnJlbW92ZSgpO1xuICByZWNvcmRzPy5hcHBlbmQodGFibGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYWJsZTtcbiIsImltcG9ydCB7IGdldFdpbm5lcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcldpbm5lckhlYWRlcigpIHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGdldFdpbm5lcnMoKTtcbiAgY29uc3QgcmVjb3Jkc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKTtcbiAgY29uc3QgcmVjb3Jkc0xhYmVsID0gY3JlYXRlTm9kZSgncmVjb3Jkc19fbGFiZWwnLCAnUmVjb3JkczonKTtcbiAgY29uc3QgcmVjb3Jkc1ZhbHVlID0gY3JlYXRlTm9kZSgncmVjb3Jkc19fYW1vdW50JywgYCR7cmVjb3Jkcy5sZW5ndGh9YCk7XG4gIHJlY29yZHNCbG9jaz8uYXBwZW5kKHJlY29yZHNMYWJlbCwgcmVjb3Jkc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2lubmVySGVhZGVyO1xuIiwiaW1wb3J0IHsgZ2V0V2lubmVycyB9IGZyb20gJy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlJztcbmltcG9ydCByZW5kZXJXaW5uZXJIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL3dpbm5lci1oZWFkZXInO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJSZWNvcmRzUGFnZSgpIHtcbiAgY29uc3QgcmVuZGVyT3B0aW9ucyA9IHtcbiAgICBzb3J0OiAnd2lucycsXG4gICAgb3JkZXI6ICdBU0MnLFxuICB9O1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBpZiAoYm9keSkge1xuICAgIGNvbnN0IHJlY29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpO1xuICAgIGlmIChyZWNvcmRzKSByZWNvcmRzLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IHJlY29yZHMgPSBjcmVhdGVOb2RlKCdyZWNvcmRzJyk7XG4gIC8vIHJlY29yZHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVuZGVyV2lubmVySGVhZGVyKCk7XG4gIHJlbmRlclRhYmxlKCk7XG4gIGJvZHk/LmFwcGVuZChyZWNvcmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUmVjb3Jkc1BhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJHYXJhZ2VQYWdlIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9nYXJhZ2UvZ2FyYWdlJztcbmltcG9ydCByZW5kZXJSZWNvcmRzUGFnZSBmcm9tICcuL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9yZWNvcmRzJztcbmltcG9ydCByZW5kZXJIZWFkZXIgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL2hlYWRlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcbiAgcmVuZGVySGVhZGVyKCk7XG4gIHJlbmRlckdhcmFnZVBhZ2UoKTtcbiAgYXdhaXQgcmVuZGVyUmVjb3Jkc1BhZ2UoKTtcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbnJlbmRlckFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9