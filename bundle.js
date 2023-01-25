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
/* harmony export */   "getCarsAmount": () => (/* binding */ getCarsAmount),
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
}
async function getCarsAmount() {
    const url = new URL(garageUrl);
    url.searchParams.set('_limit', '1');
    const request = await fetch(url);
    return request.headers.get('X-Total-Count');
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
/* harmony export */   "getCurrentGaragePage": () => (/* binding */ getCurrentGaragePage),
/* harmony export */   "renderColorSvg": () => (/* binding */ renderColorSvg),
/* harmony export */   "setCurrentGaragePage": () => (/* binding */ setCurrentGaragePage)
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
function getCurrentGaragePage() {
    return sessionStorage.getItem('garagePage') || '1';
}
function setCurrentGaragePage(page) {
    sessionStorage.setItem('garagePage', `${page}`);
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
/* harmony import */ var _modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/update-dynamic-content/update-garage-dynamic-content */ "./src/scripts/pages/garage/modules/update-dynamic-content/update-garage-dynamic-content.ts");



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
            await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.createCar)(car);
            const updatePageOptions = {
                updateHeader: true,
                updatePagination: true,
                updatePageNumber: true,
            };
            (0,_modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_2__["default"])(updatePageOptions);
        }
        else {
            const { carId } = setName.dataset;
            if (carId) {
                const { value } = setName;
                (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.updateCar)(+carId, value, colorPicker.value);
                (0,_modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_2__["default"])({});
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

/***/ "./src/scripts/pages/garage/components/garage-cars-header.ts":
/*!*******************************************************************!*\
  !*** ./src/scripts/pages/garage/components/garage-cars-header.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");


async function renderGarageHeader() {
    const garageCarsHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header');
    const garageCarsHeaderLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header__label', 'Garage');
    const carsAmount = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getCarsAmount)();
    const garageCarsHeaderValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header__value', `${carsAmount}`);
    garageCarsHeader.append(garageCarsHeaderLabel, garageCarsHeaderValue);
    return garageCarsHeader;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGarageHeader);


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
/* harmony import */ var _modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/update-dynamic-content/update-garage-dynamic-content */ "./src/scripts/pages/garage/modules/update-dynamic-content/update-garage-dynamic-content.ts");







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
    const removeOptions = {
        updateHeader: true,
        updatePagination: true,
        updatePageNumber: true,
    };
    removeButton.addEventListener('click', async () => {
        (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.removeCar)(car.id);
        carBlock.remove();
        const carsHeaderAmountBlock = document.querySelector('.header__value');
        if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
            carsHeaderAmountBlock.textContent = `${+carsHeaderAmountBlock.textContent - 1}`;
        }
        await (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_3__.deleteWinner)(car.id);
        const carsBlock = document.querySelector('.cars');
        const currentGaragePage = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentGaragePage)();
        if ((carsBlock === null || carsBlock === void 0 ? void 0 : carsBlock.childElementCount) === 0 && currentGaragePage !== '1')
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.setCurrentGaragePage)(+currentGaragePage - 1);
        (0,_modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_6__["default"])(removeOptions);
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
    var _a;
    (_a = document.querySelector('.cars')) === null || _a === void 0 ? void 0 : _a.remove();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCars);


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
/* harmony import */ var _modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/update-dynamic-content/update-garage-dynamic-content */ "./src/scripts/pages/garage/modules/update-dynamic-content/update-garage-dynamic-content.ts");
/* harmony import */ var _garage_cars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./garage-cars */ "./src/scripts/pages/garage/components/garage-cars.ts");





const updateGaragePageOptions = {
    updatePagination: true,
    updatePageNumber: true,
};
function renderCurrentPageBlock() {
    const pageNumber = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('page-number');
    const pageNumberLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('page-number__label', 'Page #');
    const pageNumberValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('page-number__value', sessionStorage.getItem('garagePage') || '1');
    pageNumber.append(pageNumberLabel, pageNumberValue);
    return pageNumber;
}
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
        carsAmount = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getCarsAmount)();
        currentPage = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getCurrentGaragePage)();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.setCurrentGaragePage)(+currentPage + 1);
        currentPage = currentPage + 1;
        const garageCars = await (0,_garage_cars__WEBPACK_IMPORTED_MODULE_4__["default"])();
        const garageView = document.querySelector('.garage');
        garageView === null || garageView === void 0 ? void 0 : garageView.append(garageCars);
        (0,_modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_3__["default"])(updateGaragePageOptions);
    });
    previous.addEventListener('click', async () => {
        currentPage = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getCurrentGaragePage)();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.setCurrentGaragePage)(+currentPage - 1);
        const garageCars = await (0,_garage_cars__WEBPACK_IMPORTED_MODULE_4__["default"])();
        const garageView = document.querySelector('.garage');
        garageView === null || garageView === void 0 ? void 0 : garageView.append(garageCars);
        const resetButton = document.querySelector('.button__reset');
        if (resetButton)
            resetButton.click();
        (0,_modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_3__["default"])(updateGaragePageOptions);
    });
    const currentPageBlock = renderCurrentPageBlock();
    paginationBlock.append(previous, currentPageBlock, next);
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
/* harmony import */ var _components_garage_cars_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/garage-cars-header */ "./src/scripts/pages/garage/components/garage-cars-header.ts");






async function renderGaragePage() {
    sessionStorage.setItem('race', 'false');
    sessionStorage.setItem('garagePage', '1');
    const body = document.querySelector('body');
    const garageView = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createNode)('garage');
    if (body) {
        const carManagement = (0,_components_car_management__WEBPACK_IMPORTED_MODULE_0__["default"])();
        const garageControls = (0,_components_garage_controls__WEBPACK_IMPORTED_MODULE_1__["default"])();
        const pagination = await (0,_components_pagination__WEBPACK_IMPORTED_MODULE_3__.renderGaragePagination)();
        const header = await (0,_components_garage_cars_header__WEBPACK_IMPORTED_MODULE_5__["default"])();
        const garageCars = await (0,_components_garage_cars__WEBPACK_IMPORTED_MODULE_2__["default"])();
        garageView.append(carManagement, garageControls, pagination, header, garageCars);
        body.append(garageView);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGaragePage);


/***/ }),

/***/ "./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-cars-amount.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-cars-amount.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");

async function updateGarageHeader() {
    const header = document.querySelector('.header__value');
    if (header) {
        header.textContent = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_0__.getCarsAmount)();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateGarageHeader);


/***/ }),

/***/ "./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-page-number.ts":
/*!************************************************************************************************************!*\
  !*** ./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-page-number.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../helpers */ "./src/scripts/helpers.ts");

function updateGaragePageNumber() {
    const pageNumberBlock = document.querySelector('.page-number__value');
    if (pageNumberBlock) {
        pageNumberBlock.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentGaragePage)();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateGaragePageNumber);


/***/ }),

/***/ "./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-pagination.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-pagination.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config */ "./src/scripts/config.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../helpers */ "./src/scripts/helpers.ts");



function updatePrevButton() {
    const currentPage = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getCurrentGaragePage)();
    const previousButton = document.querySelector('.prev__garage');
    if (currentPage && currentPage === '1' && previousButton) {
        previousButton.disabled = true;
    }
    else
        previousButton.disabled = false;
}
async function updateNextButton() {
    const currentPage = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getCurrentGaragePage)();
    const carsAmount = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getCarsAmount)();
    const nextButton = document.querySelector('.next__garage');
    console.log(carsAmount, _config__WEBPACK_IMPORTED_MODULE_0__.carsPerGaragePage, currentPage);
    if (carsAmount && currentPage) {
        if (+carsAmount <= _config__WEBPACK_IMPORTED_MODULE_0__.carsPerGaragePage * +currentPage)
            nextButton.disabled = true;
        else
            nextButton.disabled = false;
    }
}
function updateGaragePagination() {
    updatePrevButton();
    updateNextButton();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateGaragePagination);


/***/ }),

/***/ "./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-table.ts":
/*!******************************************************************************************************!*\
  !*** ./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-table.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_garage_cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/garage-cars */ "./src/scripts/pages/garage/components/garage-cars.ts");

async function updateGarageTable() {
    var _a;
    const cars = await (0,_components_garage_cars__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (_a = document.querySelector('.garage')) === null || _a === void 0 ? void 0 : _a.append(cars);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateGarageTable);


/***/ }),

/***/ "./src/scripts/pages/garage/modules/update-dynamic-content/update-garage-dynamic-content.ts":
/*!**************************************************************************************************!*\
  !*** ./src/scripts/pages/garage/modules/update-dynamic-content/update-garage-dynamic-content.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ts_update_cars_amount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.ts/update-cars-amount */ "./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-cars-amount.ts");
/* harmony import */ var _components_ts_update_garage_page_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.ts/update-garage-page-number */ "./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-page-number.ts");
/* harmony import */ var _components_ts_update_garage_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.ts/update-garage-pagination */ "./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-pagination.ts");
/* harmony import */ var _components_ts_update_garage_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.ts/update-garage-table */ "./src/scripts/pages/garage/modules/update-dynamic-content/components.ts/update-garage-table.ts");




async function updateGaragePage(updatePageOptions) {
    if (updatePageOptions.updateHeader)
        (0,_components_ts_update_cars_amount__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (updatePageOptions.updatePagination)
        (0,_components_ts_update_garage_pagination__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (updatePageOptions.updatePageNumber)
        (0,_components_ts_update_garage_page_number__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_components_ts_update_garage_table__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateGaragePage);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTLFlBQVksQ0FBQyxRQUFnQjtJQUNwQyxNQUFNLElBQUksR0FBRywrREFBMEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxrRUFBNkIsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sVUFBVSxHQUFHLDhEQUF5QixHQUFHLElBQUksQ0FBQztJQUVwRCxNQUFNLFlBQVksR0FBRyx1REFBa0IsR0FBRyxVQUFVLENBQUM7SUFDckQsT0FBTztRQUNMLFlBQVk7UUFDWixJQUFJO0tBQ0wsQ0FBQztBQUNKLENBQUM7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickIsTUFBTSxNQUFNLEdBQUcsd0JBQXdCLENBQUM7QUFFeEMsTUFBTSxTQUFTLEdBQUc7SUFDdkIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixtQkFBbUIsRUFBRSxFQUFFO0lBQ3ZCLGVBQWUsRUFBRSxFQUFFO0lBQ25CLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVLLE1BQU0sYUFBYSxHQUFHO0lBQzNCLEtBQUssRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxLQUFLO0NBQ2IsQ0FBQztBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBRTVCLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCM0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0gsTUFBTSxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RwRjtBQUVuQyxNQUFNLFNBQVMsR0FBRyxHQUFHLDJDQUFNLFNBQVMsQ0FBQztBQUU5QixLQUFLLFVBQVUsVUFBVSxDQUFDLE9BQTBDO0lBQ3pFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLElBQUksT0FBTyxFQUFFO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNuQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBMkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEMsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQ2YsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFDRCxPQUFPLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVNLEtBQUssVUFBVSxNQUFNLENBQUMsRUFBVTtJQUNyQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtRQUNmLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsR0FBb0M7SUFDbEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUMxQixDQUFDLENBQUM7SUFFSCxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDZCxzQkFBc0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkI7SUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsRUFBVTtJQUN4QyxNQUFNLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRTtRQUMvQyxNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO1FBQ2QsMEJBQTBCO0tBQzNCO0FBQ0gsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxLQUFLLEdBQUcsS0FBSztJQUNyRSxNQUFNLEdBQUcsR0FBRztRQUNWLElBQUk7UUFDSixLQUFLO0tBQ04sQ0FBQztJQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBQy9DLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUMxQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxVQUFVLGFBQWE7SUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRWtDO0FBRW5DLE1BQU0sU0FBUyxHQUFHLEdBQUcsMkNBQU0sUUFBUSxDQUFDO0FBRTdCLEtBQUssVUFBVSxZQUFZLENBQUMsS0FBYSxFQUFFLE1BQTZCO0lBQzdFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQzFDLE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUMsQ0FBQztJQUNILElBQUksa0JBQWtCLENBQUMsRUFBRSxFQUFFO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUM5QixPQUFPLFFBQVEsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFFTSxLQUFLLFVBQVUsV0FBVyxDQUFDLEtBQWE7SUFDN0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDekMsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuQixFQUFFLEVBQUUsS0FBSztZQUNULE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUM7S0FDSCxDQUFDLENBQUM7SUFDSCxPQUFPLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztBQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmlEO0FBR2xELE1BQU0sVUFBVSxHQUFHLEdBQUcsMkNBQU0sVUFBVSxDQUFDO0FBRWhDLEtBQUssVUFBVSxVQUFVLENBQUMsYUFBOEI7SUFDN0QsSUFBSSxVQUFVLEdBQUcsa0RBQWEsQ0FBQztJQUMvQixJQUFJLGFBQWEsRUFBRTtRQUNqQixJQUFJLGFBQWEsQ0FBQyxLQUFLO1lBQUUsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSztRQUMvRCxJQUFJLGFBQWEsQ0FBQyxJQUFJO1lBQUUsVUFBVSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQUEsQ0FBQztLQUMvRDtJQUVELFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFaEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN0QyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLEdBQThCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLGNBQWMsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEVBQUU7UUFDckIsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDOUI7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFNBQVMsQ0FBQyxFQUFVO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsSUFBSSxhQUFhLENBQUMsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQzlCLENBQUM7QUFFTSxLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQVUsRUFBRSxJQUFZO0lBQ3pELE1BQU0sVUFBVSxHQUFHO1FBQ2pCLEVBQUU7UUFDRixJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUk7S0FDTCxDQUFDO0lBQ0YsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDbEQsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0tBQ2pDLENBQUMsQ0FBQztJQUNILElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFO1FBQzFCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUFTO0lBQzFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQzNDLE1BQU0sRUFBRSxRQUFRO0tBQ2pCLENBQUMsQ0FBQztJQUNILElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFO1FBQzFCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFDdkUsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDakMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDM0MsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkIsSUFBSTtZQUNKLElBQUk7U0FDTCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBRU0sS0FBSyxVQUFVLGdCQUFnQjtJQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUM5QztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRk0sU0FBUyxVQUFVLENBQUMsU0FBaUIsRUFBRSxXQUFvQjtJQUNoRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzNCLElBQUksV0FBVztRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVNLFNBQVMsWUFBWSxDQUFDLFVBQWtCO0lBQzdDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsVUFBVSxFQUFFLENBQUM7SUFDbEQsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxTQUFpQjtJQUN0RCxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsU0FBUyxPQUFPLENBQUM7SUFDcEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDZCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxTQUFTLGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsV0FBbUI7SUFDdEUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMvQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBQyxXQUFvQjtJQUNsRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLElBQUksV0FBVztRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVNLFNBQVMsb0JBQW9CO0lBQ2xDLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDckQsQ0FBQztBQUVNLFNBQVMsb0JBQW9CLENBQUMsSUFBcUI7SUFDeEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBQyxLQUFhO0lBQzFDLE9BQU87OztlQUdNLEtBQUs7Ozs7Ozs7OztDQVNuQjtBQUNELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEMkQ7QUFDUztBQUMwQjtBQUUvRixTQUFTLGtCQUFrQixDQUFDLFNBQWlCO0lBQzNDLE1BQU0sSUFBSSxHQUFHLG9EQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbkMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQXFCLENBQUM7SUFDcEUsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLFNBQVMsU0FBUyxDQUFDO0lBRTFDLE1BQU0sS0FBSyxHQUFHLG9EQUFVLENBQUMsR0FBRyxTQUFTLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMvRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQzNCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO0lBRXhDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUIsTUFBTSxNQUFNLEdBQUcsc0RBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFDLElBQUksU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUMxQixNQUFNLEdBQUcsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ25CLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSzthQUN6QixDQUFDO1lBQ0YsTUFBTSxnRUFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0saUJBQWlCLEdBQUc7Z0JBQ3hCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3ZCO1lBQ0QseUdBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsZ0VBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1Qyx5R0FBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxtQkFBbUI7SUFDMUIsTUFBTSxrQkFBa0IsR0FBRyxvREFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsTUFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsTUFBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEQsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN4RCxPQUFPLGtCQUFrQixDQUFDO0FBQzVCLENBQUM7QUFFRCxpRUFBZSxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRFc7QUFDZ0I7QUFHOUQsS0FBSyxVQUFVLGtCQUFrQjtJQUMvQixNQUFNLGdCQUFnQixHQUFHLG9EQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsTUFBTSxxQkFBcUIsR0FBRyxvREFBVSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRSxNQUFNLFVBQVUsR0FBRyxNQUFNLG9FQUFhLEVBQUUsQ0FBQztJQUN6QyxNQUFNLHFCQUFxQixHQUFHLG9EQUFVLENBQUMsZUFBZSxFQUFFLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUUzRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUN0RSxPQUFPLGdCQUFnQixDQUFDO0FBQzFCLENBQUM7QUFFRCxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkaUc7QUFDN0Q7QUFDTTtBQUdsQztBQUNVO0FBRUE7QUFDMkM7QUFFeEYsU0FBUyxpQkFBaUIsQ0FBQyxHQUFTO0lBQ3pDLE1BQU0sUUFBUSxHQUFHLG9EQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFckMsTUFBTSxZQUFZLEdBQUcsb0RBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU1QyxNQUFNLFlBQVksR0FBRyxzREFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQzFDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFxQixDQUFDO1FBQzdFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUMzQixTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sWUFBWSxHQUFHLHNEQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsTUFBTSxhQUFhLEdBQUc7UUFDcEIsWUFBWSxFQUFFLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixnQkFBZ0IsRUFBRSxJQUFJO0tBQ3ZCO0lBQ0QsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNoRCxnRUFBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkUsSUFBSSxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7WUFDOUQscUJBQXFCLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDakY7UUFDRCxNQUFNLHNFQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsTUFBTSxpQkFBaUIsR0FBRyw4REFBb0IsRUFBRSxDQUFDO1FBQ2pELElBQUksVUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGlCQUFpQixNQUFLLENBQUMsSUFBSSxpQkFBaUIsS0FBSyxHQUFHO1lBQUUsOERBQW9CLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsSCx5R0FBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztJQUVILFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRWhELE1BQU0sT0FBTyxHQUFHLG9EQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELFlBQVksQ0FBQyxTQUFTLEdBQUcsd0RBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsWUFBWSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFFL0IsTUFBTSxhQUFhLEdBQUcsbURBQVMsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRSxNQUFNLFFBQVEsR0FBRyxvREFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sS0FBSyxHQUFHLHNEQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsc0RBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxJQUFJLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUMvQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3pDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyxNQUFNLHFFQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RCxNQUFNLGtCQUFrQixHQUFHLDREQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNyRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ3JELGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNyQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUFFO3dCQUMvRSxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDeEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksb0JBQW9CLFlBQVksR0FBRyxDQUFDLENBQUM7d0JBQ3RELE1BQU0sTUFBTSxHQUFHLE1BQU0sbUVBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3ZDLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTs0QkFDbEIsc0VBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDakUsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLFdBQVcsRUFBRTtnQ0FDOUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQzs2QkFDakU7eUJBQ0Y7NkJBQU07NEJBQ0wsTUFBTSxPQUFPLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQzFFLHNFQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNqRDtxQkFDRjtvQkFDRCxPQUFPO2lCQUNSO2dCQUNELE1BQU0scUJBQXFCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQzNELE1BQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLENBQUM7Z0JBQ3RLLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztRQUMxRCxNQUFNLFVBQVUsR0FBRyxNQUFNLG9FQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVO1lBQUUsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QixxRUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFN0IsTUFBTSxJQUFJLEdBQUcsb0RBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUV6QyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxLQUFLLFVBQVUsVUFBVTs7SUFDdkIsY0FBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsMENBQUUsTUFBTSxFQUFFLENBQUM7SUFDMUMsTUFBTSxJQUFJLEdBQUcsb0RBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixJQUFJLFVBQVUsRUFBRTtRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzREFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdDLE9BQU8sR0FBRyxNQUFNLGlFQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsc0RBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakg7S0FDRjtJQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFTLEVBQUUsRUFBRTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcElrQztBQUNRO0FBQ1Y7QUFDVTtBQUNuQjtBQUVqRCxTQUFTLG9CQUFvQjtJQUMzQixNQUFNLGNBQWMsR0FBRyxvREFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTlDLE1BQU0sVUFBVSxHQUFHLHNEQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDeEMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBRSxFQUF3QixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDakcsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLFdBQVcsR0FBRyxzREFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUUsRUFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0ksTUFBTSxjQUFjLEdBQUcsc0RBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO1FBQ2hGLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzVCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsbURBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFDLE1BQU0sU0FBUyxHQUFHLDhEQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcscUVBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTSxTQUFTLEdBQUcsOERBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxxRUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLE9BQU8sR0FBRyxHQUFHLFNBQVMsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUM1QyxNQUFNLEdBQUcsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7YUFDL0QsQ0FBQztZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0VBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsTUFBTSxVQUFVLEdBQUcsTUFBTSx3REFBZ0IsRUFBRSxDQUFDO1FBQzVDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvQixNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RSxJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLFdBQVcsRUFBRTtZQUM5RCxxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsR0FBRyxtREFBYyxFQUFFLENBQUM7U0FDOUY7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMvRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDO0FBRUQsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZ0I7QUFDc0I7QUFDOEI7QUFDVDtBQUNsRDtBQUU3QyxNQUFNLHVCQUF1QixHQUFHO0lBQzlCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtDQUN2QjtBQUVELFNBQVMsc0JBQXNCO0lBQzdCLE1BQU0sVUFBVSxHQUFHLG9EQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsTUFBTSxlQUFlLEdBQUcsb0RBQVUsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRSxNQUFNLGVBQWUsR0FBRyxvREFBVSxDQUFDLG9CQUFvQixFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDdEcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDcEQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUVNLEtBQUssVUFBVSxzQkFBc0I7SUFDMUMsTUFBTSxlQUFlLEdBQUcsb0RBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxJQUFJLFdBQVcsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sUUFBUSxHQUFHLHNEQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsSUFBSSxXQUFXLElBQUksV0FBVyxLQUFLLEdBQUc7UUFBRSxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUVqRSxNQUFNLElBQUksR0FBRyxzREFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25DLElBQUksVUFBVSxHQUFHLENBQUMsTUFBTSxpRUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDN0MsSUFBSSxVQUFVLElBQUksV0FBVyxFQUFFO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsc0RBQWlCLEdBQUcsQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDMUU7SUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQXNCLENBQUM7UUFDbEYsSUFBSSxXQUFXO1lBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLFVBQVUsR0FBRyxNQUFNLG9FQUFhLEVBQUUsQ0FBQztRQUVuQyxXQUFXLEdBQUcsOERBQW9CLEVBQUUsQ0FBQztRQUNyQyw4REFBb0IsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxXQUFXLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUU5QixNQUFNLFVBQVUsR0FBRyxNQUFNLHdEQUFnQixFQUFFLENBQUM7UUFDNUMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9CLHlHQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzVDLFdBQVcsR0FBRyw4REFBb0IsRUFBRSxDQUFDO1FBQ3JDLDhEQUFvQixDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sVUFBVSxHQUFHLE1BQU0sd0RBQWdCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0IsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBc0IsQ0FBQztRQUNsRixJQUFJLFdBQVc7WUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckMseUdBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sZ0JBQWdCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUNsRCxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBRUQsaUVBQWUsc0JBQXNCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFd0I7QUFDRTtBQUNkO0FBQ2U7QUFDdEI7QUFDc0I7QUFFakUsS0FBSyxVQUFVLGdCQUFnQjtJQUM3QixjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLE1BQU0sVUFBVSxHQUFHLG9EQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsSUFBSSxJQUFJLEVBQUU7UUFDUixNQUFNLGFBQWEsR0FBRyxzRUFBbUIsRUFBRSxDQUFDO1FBQzVDLE1BQU0sY0FBYyxHQUFHLHVFQUFvQixFQUFFLENBQUM7UUFDOUMsTUFBTSxVQUFVLEdBQUcsTUFBTSw4RUFBc0IsRUFBRSxDQUFDO1FBQ2xELE1BQU0sTUFBTSxHQUFHLE1BQU0sMEVBQWtCLEVBQUUsQ0FBQztRQUMxQyxNQUFNLFVBQVUsR0FBRyxNQUFNLG1FQUFVLEVBQUUsQ0FBQztRQUV0QyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQztBQUVELGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJvQztBQUVwRSxLQUFLLFVBQVUsa0JBQWtCO0lBQy9CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxJQUFJLE1BQU0sRUFBRTtRQUNWLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxvRUFBYSxFQUFFLENBQUM7S0FDNUM7QUFDSCxDQUFDO0FBRUQsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUNEI7QUFFOUQsU0FBUyxzQkFBc0I7SUFDN0IsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RFLElBQUksZUFBZSxFQUFFO1FBQ25CLGVBQWUsQ0FBQyxXQUFXLEdBQUcsOERBQW9CLEVBQUUsQ0FBQztLQUN0RDtBQUNILENBQUM7QUFFRCxpRUFBZSxzQkFBc0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG9CO0FBQ1U7QUFDTjtBQUU5RCxTQUFTLGdCQUFnQjtJQUV2QixNQUFNLFdBQVcsR0FBRyw4REFBb0IsRUFBRSxDQUFDO0lBQzNDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO0lBQ3BGLElBQUksV0FBVyxJQUFJLFdBQVcsS0FBSyxHQUFHLElBQUksY0FBYyxFQUFFO1FBQ3hELGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ2hDOztRQUFNLGNBQWMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxLQUFLLFVBQVUsZ0JBQWdCO0lBQzdCLE1BQU0sV0FBVyxHQUFHLDhEQUFvQixFQUFFLENBQUM7SUFDM0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxvRUFBYSxFQUFFLENBQUM7SUFDekMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUM7SUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsc0RBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEQsSUFBSSxVQUFVLElBQUksV0FBVyxFQUFFO1FBQzdCLElBQUksQ0FBQyxVQUFVLElBQUksc0RBQWlCLEdBQUcsQ0FBQyxXQUFXO1lBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O1lBQzNFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQztBQUVELFNBQVMsc0JBQXNCO0lBQzdCLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsZ0JBQWdCLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBRUQsaUVBQWUsc0JBQXNCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qm1CO0FBRXpELEtBQUssVUFBVSxpQkFBaUI7O0lBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sbUVBQVUsRUFBRSxDQUFDO0lBQ2hDLGNBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDVztBQUNEO0FBQ1Y7QUFFcEUsS0FBSyxVQUFVLGdCQUFnQixDQUFDLGlCQUEyQztJQUN6RSxJQUFJLGlCQUFpQixDQUFDLFlBQVk7UUFBRSw2RUFBa0IsRUFBRSxDQUFDO0lBQ3pELElBQUksaUJBQWlCLENBQUMsZ0JBQWdCO1FBQUUsbUZBQXNCLEVBQUUsQ0FBQztJQUNqRSxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQjtRQUFFLG9GQUFzQixFQUFFLENBQUM7SUFDakUsOEVBQWlCLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBRUQsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnNCO0FBQ0o7QUFFbEQsU0FBUyxZQUFZO0lBQ25CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFFNUIsTUFBTSxhQUFhLEdBQUcsb0RBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU1QyxNQUFNLFFBQVEsR0FBRyxzREFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3RDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFtQixDQUFDO1FBQ3ZFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFtQixDQUFDO1FBQ3pFLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbkMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFNBQVMsR0FBRyxzREFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFtQixDQUFDO1FBQ3ZFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFtQixDQUFDO1FBQ3pFLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDbEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3BDLDREQUFpQixFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFN0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3dDO0FBQ1I7QUFDWjtBQUNQO0FBRXpDLEtBQUssVUFBVSx1QkFBdUI7SUFDcEMsTUFBTSxVQUFVLEdBQUcsb0RBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sUUFBUSxHQUFHLHNEQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsTUFBTSxJQUFJLEdBQUcsc0RBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxJQUFJLE9BQU8sRUFBRTtRQUNYLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUNELElBQUksV0FBVyxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFDcEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDMUI7SUFFRCxJQUFJLGFBQWEsR0FBRyxNQUFNLDBFQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxELElBQUksYUFBYSxJQUFJLFdBQVcsRUFBRTtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLHdEQUFtQixHQUFHLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQy9FO0lBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxJQUFJLE9BQU8sRUFBRTtZQUNYLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQztTQUN4QjtRQUVELFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDakIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXhELElBQUksV0FBVyxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDcEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFDRCx5REFBVyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNsQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxJQUFJLE9BQU8sRUFBRTtZQUNYLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQztTQUN4QjtRQUNELFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDakIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksYUFBYSxJQUFJLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLHdEQUFtQixHQUFHLENBQUMsV0FBVztnQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMvRTtRQUNELHlEQUFXLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEdUI7QUFDd0I7QUFDM0I7QUFFWDtBQUdoRCxLQUFLLFVBQVUsV0FBVyxDQUFDLFVBQTJCOztJQUNwRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsU0FBUyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQUN4QyxNQUFNLGlCQUFpQixHQUFHLDJEQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sY0FBYyxHQUFHLDJEQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvRCxNQUFNLGVBQWUsR0FBRywyREFBaUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFbEUsTUFBTSxlQUFlLEdBQUcsMkRBQWlCLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUUsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDN0MsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO1NBQ3pFLENBQUM7UUFDRixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3BELGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEOztZQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sZUFBZSxHQUFHLDJEQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUM3QyxNQUFNLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDekUsQ0FBQztRQUNGLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDcEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEQ7O1lBQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLE1BQU0sQ0FDZCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGVBQWUsRUFDZixlQUFlLEVBQ2YsZUFBZSxDQUNoQixDQUFDO0lBQ0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixNQUFNLE9BQU8sR0FBRyxNQUFNLG9FQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLHdEQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxpRUFBVSxFQUFFLENBQUM7SUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBZSxFQUFFLEVBQUU7UUFDeEMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNiLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsTUFBTSxVQUFVLEdBQUcseURBQWUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFakQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQzVCLFFBQVEsR0FBRyx5REFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsT0FBTyxDQUFDLFNBQVMsR0FBRyx3REFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuRDtTQUNGO1FBQ0QsTUFBTSxRQUFRLEdBQUcseURBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sUUFBUSxHQUFHLHlEQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQUUsYUFBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsMENBQUUsTUFBTSxFQUFFLENBQUM7SUFDcEYsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRUQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFFbUI7QUFDc0I7QUFFcEUsS0FBSyxVQUFVLGtCQUFrQjtJQUMvQixNQUFNLFlBQVksR0FBRyxvREFBVSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sYUFBYSxHQUFHLE1BQU0sMEVBQWdCLEVBQUUsQ0FBQztJQUMvQyxNQUFNLFlBQVksR0FBRyxvREFBVSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN6RSxNQUFNLGtCQUFrQixHQUFHLG9EQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMvRCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RELE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUVELGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlM7QUFDbUI7QUFDVjtBQUNRO0FBRTVELEtBQUssVUFBVSxpQkFBaUI7SUFDOUIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLElBQUksRUFBRTtRQUNSLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPO1lBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQy9CO0lBQ0QsTUFBTSxPQUFPLEdBQUcsb0RBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxNQUFNLFVBQVUsR0FBRyxNQUFNLGtFQUF1QixFQUFFLENBQUM7SUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQixNQUFNLGFBQWEsR0FBRyxNQUFNLHFFQUFrQixFQUFFLENBQUM7SUFDakQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QixvRUFBVyxFQUFFLENBQUM7SUFDZCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ3JCakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZEO0FBQ0c7QUFDZDtBQUVsRCxLQUFLLFVBQVUsU0FBUztJQUN0QixpRUFBWSxFQUFFLENBQUM7SUFDZix3RUFBZ0IsRUFBRSxDQUFDO0lBQ25CLE1BQU0sMEVBQWlCLEVBQUUsQ0FBQztJQUN6QixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBb0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNoRixDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9uL2RyaXZlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9jYXJzLW5hbWUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9jYXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvZW5naW5lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvY2FyLW1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2dhcmFnZS1jYXJzLWhlYWRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC9jb21wb25lbnRzLnRzL3VwZGF0ZS1jYXJzLWFtb3VudC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC9jb21wb25lbnRzLnRzL3VwZGF0ZS1nYXJhZ2UtcGFnZS1udW1iZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9tb2R1bGVzL3VwZGF0ZS1keW5hbWljLWNvbnRlbnQvY29tcG9uZW50cy50cy91cGRhdGUtZ2FyYWdlLXBhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9tb2R1bGVzL3VwZGF0ZS1keW5hbWljLWNvbnRlbnQvY29tcG9uZW50cy50cy91cGRhdGUtZ2FyYWdlLXRhYmxlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvbW9kdWxlcy91cGRhdGUtZHluYW1pYy1jb250ZW50L3VwZGF0ZS1nYXJhZ2UtZHluYW1pYy1jb250ZW50LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvd2lubmVyLWhlYWRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9yZWNvcmRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJhY2VTdGF0cyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGdldERyaXZlU3RlcCh2ZWxvY2l0eTogbnVtYmVyKSB7XG4gIGNvbnN0IHRpbWUgPSByYWNlU3RhdHMubWF4QW5pbWF0aW9uVGltZSAvICh2ZWxvY2l0eSAvIHJhY2VTdGF0cy5taW5Qb3NzaWJsZVZlbG9jaXR5KTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IHJhY2VTdGF0cy5mcmFtZXNQZXJTZWNvbmQgKiB0aW1lO1xuXG4gIGNvbnN0IHN0ZXBEaXN0YW5jZSA9IHJhY2VTdGF0cy5kaXN0YW5jZSAvIHRvdGFsU3RlcHM7XG4gIHJldHVybiB7XG4gICAgc3RlcERpc3RhbmNlLFxuICAgIHRpbWUsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERyaXZlU3RlcDtcbiIsImV4cG9ydCBjb25zdCBhcGlVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwLyc7XG5cbmV4cG9ydCBjb25zdCByYWNlU3RhdHMgPSB7XG4gIG1heEFuaW1hdGlvblRpbWU6IDQwLFxuICBtaW5Qb3NzaWJsZVZlbG9jaXR5OiA1MCxcbiAgZnJhbWVzUGVyU2Vjb25kOiA2MCxcbiAgZGlzdGFuY2U6IDEwMCxcbn07XG5cbmV4cG9ydCBjb25zdCB3aW5uZXJzQ29uZmlnID0ge1xuICBsaW1pdDogMTAsXG4gIHBhZ2U6IDEsXG4gIHNvcnQ6ICd0aW1lJyxcbiAgb3JkZXI6ICdBU0MnLFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcnNQZXJHYXJhZ2VQYWdlID0gNztcblxuZXhwb3J0IGNvbnN0IGNhcnNUb0dlbmVyYXRlID0gMTAwO1xuIiwiZXhwb3J0IGNvbnN0IGJyYW5kcyA9IFsnUGV1Z2VvdCcsICdCTVcnLCAnUG9yc2NoZScsICdaaGlndWxpJywgJ0F1ZGknLCAnTWVyY2VkZXMnLCAnRmlhdCcsICdNQVonLCAnQnVnZ2F0aScsICdSb2xscy1Sb3lzZScsICdQYWdhbmknXTtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSBbJzQwNiBDb3VwZScsICdBTUcnLCAnTS1TZXJpZXMnLCAnUlMnLCAnMy1zZXJpZXMnLCAnQTYnLCAnQzIwOCcsICc5MTEnLCAnQ2F5bWFuJywgJzRTJywgJ1Nwb3J0J107XG4iLCJpbXBvcnQgeyBhcGlVcmwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBnYXJhZ2VVcmwgPSBgJHthcGlVcmx9Z2FyYWdlL2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDYXJzKG9wdGlvbnM/OiB7IF9saW1pdDogbnVtYmVyLCBfcGFnZTogc3RyaW5nfSkge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGdhcmFnZVVybCk7XG4gIGlmIChvcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChrZXksIGAke29wdGlvbnNba2V5IGFzIGtleW9mIHR5cGVvZiBvcHRpb25zXX1gKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gYWxsQ2FycztcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhcnMgbGlzdCcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2FyKGNhcjogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfSkge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goZ2FyYWdlVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gIH0pO1xuXG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3dvdycpO1xuICAgIHJldHVybiByZXF1ZXN0Lmpzb24oKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhZGQgY2FyJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVDYXIoaWQ6IG51bWJlcikge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAvLyBjb25zb2xlLmxvZygnUGVyZmVjdCcpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXIoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBjb2xvciA9ICcxMjMnKSB7XG4gIGNvbnN0IGNhciA9IHtcbiAgICBuYW1lLFxuICAgIGNvbG9yLFxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2Fyc0Ftb3VudCgpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChnYXJhZ2VVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnX2xpbWl0JywgJzEnKTtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIHJldHVybiByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG59XG4iLCJpbXBvcnQgeyBhcGlVcmwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBlbmdpbmVVcmwgPSBgJHthcGlVcmx9ZW5naW5lYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U3RvcENhcihjYXJJZDogbnVtYmVyLCBzdGF0dXM6ICdzdGFydGVkJyB8ICdzdG9wcGVkJykge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuZ2luZVVybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpZCcsIGAke2NhcklkfWApO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc3RhdHVzJywgc3RhdHVzKTtcbiAgY29uc3Qgc3RhcnRFbmdpbmVSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICB9KTtcbiAgaWYgKHN0YXJ0RW5naW5lUmVxdWVzdC5vaykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RhcnRFbmdpbmVSZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IHZlbG9jaXR5IH0gPSByZXNwb25zZTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRW5naW5lKGNhcklkOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmdpbmVVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnaWQnLCBgJHtjYXJJZH1gKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXR1cycsICdkcml2ZScpO1xuICBjb25zdCBzdGFydERyaXZlUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpZDogY2FySWQsXG4gICAgICBzdGF0dXM6ICdkcml2ZScsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gc3RhcnREcml2ZVJlcXVlc3Qub2s7XG59XG4iLCJpbXBvcnQgeyBhcGlVcmwsIHdpbm5lcnNDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHVybFdpbm5lcnNTb3J0IGZyb20gJy4uL2ludGVyZmFjZXMvdXJsLXdpbm5lcnMtc29ydCc7XG5cbmNvbnN0IHdpbm5lcnNVcmwgPSBgJHthcGlVcmx9d2lubmVycy9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2lubmVycyhyZW5kZXJPcHRpb25zPzogdXJsV2lubmVyc1NvcnQpIHtcbiAgbGV0IHVybE9wdGlvbnMgPSB3aW5uZXJzQ29uZmlnO1xuICBpZiAocmVuZGVyT3B0aW9ucykge1xuICAgIGlmIChyZW5kZXJPcHRpb25zLm9yZGVyKSB1cmxPcHRpb25zLm9yZGVyID0gcmVuZGVyT3B0aW9ucy5vcmRlclxuICAgIGlmIChyZW5kZXJPcHRpb25zLnNvcnQpIHVybE9wdGlvbnMuc29ydCA9IHJlbmRlck9wdGlvbnMuc29ydDs7XG4gIH1cblxuICB1cmxPcHRpb25zLnBhZ2UgPSArKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNQYWdlJykgfHwgMSk7XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5uZXJzVXJsKTtcbiAgT2JqZWN0LmtleXModXJsT3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoYF8ke2tleX1gLCBgJHt1cmxPcHRpb25zW2tleSBhcyBrZXlvZiB0eXBlb2YgdXJsT3B0aW9uc119YCk7XG4gIH0pO1xuICBjb25zdCB3aW5uZXJzUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmICh3aW5uZXJzUmVxdWVzdC5vaykge1xuICAgIHJldHVybiB3aW5uZXJzUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbm5lcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7d2lubmVyc1VybH0ke2lkfWApO1xuICBjb25zdCB3aW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKHdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gd2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbiAgcmV0dXJuIHdpbm5lclJlcXVlc3Quc3RhdHVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2lubmVyKGlkOiBudW1iZXIsIHRpbWU6IG51bWJlcikge1xuICBjb25zdCByZWNvcmROb2RlID0ge1xuICAgIGlkLFxuICAgIHdpbnM6IDEsXG4gICAgdGltZSxcbiAgfTtcbiAgY29uc3QgY3JlYXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHdpbm5lcnNVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVjb3JkTm9kZSksXG4gIH0pO1xuICBpZiAoY3JlYXRlV2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiBjcmVhdGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlV2lubmVyKGlkOm51bWJlcikge1xuICBjb25zdCB1cmwgPSBgJHt3aW5uZXJzVXJsfSR7aWR9YDtcbiAgY29uc3QgZGVsZXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pO1xuICBpZiAoZGVsZXRlV2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiBkZWxldGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2lubmVyKGlkOiBudW1iZXIsIHdpbnM6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IGAke3dpbm5lcnNVcmx9JHtpZH1gO1xuICBjb25zdCB1cGRhdGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgd2lucyxcbiAgICAgIHRpbWUsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gdXBkYXRlV2lubmVyUmVxdWVzdC5qc29uKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNvcmRzQW1vdW50KCkge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbm5lcnNVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnX2xpbWl0JywgJzEnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoY2xhc3NOYW1lOiBzdHJpbmcsIHRleHRDb250ZW50Pzogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlmICh0ZXh0Q29udGVudCkgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidXR0b25OYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnV0dG9uIGJ1dHRvbl9fJHtidXR0b25OYW1lfWA7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk5hbWU7XG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWcoc3JjOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGltZ0Jsb2NrID0gY3JlYXRlTm9kZShjbGFzc05hbWUpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLmNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX1fX2ltZ2A7XG4gIGltZy5zcmMgPSBzcmM7XG4gIGltZ0Jsb2NrLmFwcGVuZChpbWcpO1xuICByZXR1cm4gaW1nQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcihjbGFzc05hbWU6IHN0cmluZywgdGV4dENvbnRlbnQ6IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZUNlbGwodGV4dENvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGlmICh0ZXh0Q29udGVudCkgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRHYXJhZ2VQYWdlKCkge1xuICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FyYWdlUGFnZScpIHx8ICcxJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRHYXJhZ2VQYWdlKHBhZ2U6IHN0cmluZyB8IG51bWJlcikge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXJhZ2VQYWdlJywgYCR7cGFnZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbG9yU3ZnKGNvbG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBcbiAgPCFET0NUWVBFIHN2ZyBQVUJMSUMgXCItLy9XM0MvL0RURCBTVkcgMS4xLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCI+XG5cbiAgPHN2ZyBmaWxsPVwiJHtjb2xvcn1cIiBoZWlnaHQ9XCIyM3B4XCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiY2FyX19pbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCA0Ny4wMzIgNDcuMDMyXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBzdHJva2U9XCIjMDAwMDAwXCI+XG5cbiAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIi8+XG5cbiAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG5cbiAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxnPiA8cGF0aCBkPVwiTTI5LjM5NSwwSDE3LjYzNmMtMy4xMTcsMC01LjY0MywzLjQ2Ny01LjY0Myw2LjU4NHYzNC44MDRjMCwzLjExNiwyLjUyNiw1LjY0NCw1LjY0Myw1LjY0NGgxMS43NTkgYzMuMTE2LDAsNS42NDQtMi41MjcsNS42NDQtNS42NDRWNi41ODRDMzUuMDM3LDMuNDY3LDMyLjUxMSwwLDI5LjM5NSwweiBNMzQuMDUsMTQuMTg4djExLjY2NWwtMi43MjksMC4zNTF2LTQuODA2TDM0LjA1LDE0LjE4OHogTTMyLjYxOCwxMC43NzNjLTEuMDE2LDMuOS0yLjIxOSw4LjUxLTIuMjE5LDguNTFIMTYuNjMxbC0yLjIyMi04LjUxQzE0LjQxLDEwLjc3MywyMy4yOTMsNy43NTUsMzIuNjE4LDEwLjc3M3ogTTE1Ljc0MSwyMS43MTMgdjQuNDkybC0yLjczLTAuMzQ5VjE0LjUwMkwxNS43NDEsMjEuNzEzeiBNMTMuMDExLDM3LjkzOFYyNy41NzlsMi43MywwLjM0M3Y4LjE5NkwxMy4wMTEsMzcuOTM4eiBNMTQuNTY4LDQwLjg4MmwyLjIxOC0zLjMzNiBoMTMuNzcxbDIuMjE5LDMuMzM2SDE0LjU2OHogTTMxLjMyMSwzNS44MDV2LTcuODcybDIuNzI5LTAuMzU1djEwLjA0OEwzMS4zMjEsMzUuODA1elwiLz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPC9nPiA8L2c+XG5cbiAgPC9zdmc+XG5gXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNhciwgdXBkYXRlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHVwZGF0ZUdhcmFnZVBhZ2UgZnJvbSAnLi4vbW9kdWxlcy91cGRhdGUtZHluYW1pYy1jb250ZW50L3VwZGF0ZS1nYXJhZ2UtZHluYW1pYy1jb250ZW50JztcblxuZnVuY3Rpb24gcmVuZGVyQ2FyU2VsZWN0aW9uKGJsb2NrVHlwZTogc3RyaW5nKSB7XG4gIGNvbnN0IG1haW4gPSBjcmVhdGVOb2RlKGJsb2NrVHlwZSk7XG5cbiAgY29uc3Qgc2V0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgc2V0TmFtZS5jbGFzc05hbWUgPSBgJHtibG9ja1R5cGV9X19pbnB1dGA7XG5cbiAgY29uc3QgY29sb3IgPSBjcmVhdGVOb2RlKGAke2Jsb2NrVHlwZX1fX2NvbG9yYCwgJ1NldCBjb2xvcjogJyk7XG4gIGNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcic7XG4gIGNvbG9yUGlja2VyLmNsYXNzTmFtZSA9ICdjb2xvcl9fcGlja2VyJztcblxuICBjb2xvci5hcHBlbmQoY29sb3JQaWNrZXIpO1xuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oYmxvY2tUeXBlKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGlmIChibG9ja1R5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICBjb25zdCBjYXIgPSB7XG4gICAgICAgIG5hbWU6IHNldE5hbWUudmFsdWUsXG4gICAgICAgIGNvbG9yOiBjb2xvclBpY2tlci52YWx1ZSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBjcmVhdGVDYXIoY2FyKTtcbiAgICAgIGNvbnN0IHVwZGF0ZVBhZ2VPcHRpb25zID0ge1xuICAgICAgICB1cGRhdGVIZWFkZXI6IHRydWUsXG4gICAgICAgIHVwZGF0ZVBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIHVwZGF0ZVBhZ2VOdW1iZXI6IHRydWUsXG4gICAgICB9XG4gICAgICB1cGRhdGVHYXJhZ2VQYWdlKHVwZGF0ZVBhZ2VPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjYXJJZCB9ID0gc2V0TmFtZS5kYXRhc2V0O1xuICAgICAgaWYgKGNhcklkKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHNldE5hbWU7XG4gICAgICAgIHVwZGF0ZUNhcigrY2FySWQsIHZhbHVlLCBjb2xvclBpY2tlci52YWx1ZSk7XG4gICAgICAgIHVwZGF0ZUdhcmFnZVBhZ2Uoe30pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbWFpbi5hcHBlbmQoc2V0TmFtZSwgY29sb3IsIGJ1dHRvbik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDYXJNYW5hZ2VtZW50KCkge1xuICBjb25zdCBjYXJNYW5hZ2VtZW50QmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItbWFuYWdlbWVudCcpO1xuICBjb25zdCBjcmVhdGVDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignY3JlYXRlJyk7XG4gIGNvbnN0IGVkaXRDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignZWRpdCcpO1xuXG4gIGNhck1hbmFnZW1lbnRCbG9jay5hcHBlbmQoY3JlYXRlQ2FyQmxvY2ssIGVkaXRDYXJCbG9jayk7XG4gIHJldHVybiBjYXJNYW5hZ2VtZW50QmxvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhck1hbmFnZW1lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IGdldENhcnNBbW91bnQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnNcIjtcblxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VIZWFkZXIoKSB7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXIgPSBjcmVhdGVOb2RlKCdoZWFkZXInKTtcbiAgY29uc3QgZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsID0gY3JlYXRlTm9kZSgnaGVhZGVyX19sYWJlbCcsICdHYXJhZ2UnKTtcbiAgY29uc3QgY2Fyc0Ftb3VudCA9IGF3YWl0IGdldENhcnNBbW91bnQoKTtcbiAgY29uc3QgZ2FyYWdlQ2Fyc0hlYWRlclZhbHVlID0gY3JlYXRlTm9kZSgnaGVhZGVyX192YWx1ZScsIGAke2NhcnNBbW91bnR9YCk7XG5cbiAgZ2FyYWdlQ2Fyc0hlYWRlci5hcHBlbmQoZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsLCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUpO1xuICByZXR1cm4gZ2FyYWdlQ2Fyc0hlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlSGVhZGVyOyIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlSW1nLCByZW5kZXJDb2xvclN2ZywgZ2V0Q3VycmVudEdhcmFnZVBhZ2UsIHNldEN1cnJlbnRHYXJhZ2VQYWdlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBnZXRBbGxDYXJzLCByZW1vdmVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgeyBzdGFydFN0b3BDYXIsIGNoZWNrRW5naW5lIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2VuZ2luZSc7XG5pbXBvcnQge1xuICBjcmVhdGVXaW5uZXIsIGRlbGV0ZVdpbm5lciwgZ2V0V2lubmVyLCB1cGRhdGVXaW5uZXIsXG59IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcbmltcG9ydCBnZXREcml2ZVN0ZXAgZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9uL2RyaXZlJztcbmltcG9ydCBJQ2FyIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY2FyJztcbmltcG9ydCB7IGNhcnNQZXJHYXJhZ2VQYWdlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB1cGRhdGVHYXJhZ2VQYWdlIGZyb20gJy4uL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC91cGRhdGUtZ2FyYWdlLWR5bmFtaWMtY29udGVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTcGVjaWZpY0NhcihjYXI6IElDYXIpIHtcbiAgY29uc3QgY2FyQmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItYmxvY2snKTtcbiAgY2FyQmxvY2suZGF0YXNldC5jYXJJZCA9IGAke2Nhci5pZH1gO1xuXG4gIGNvbnN0IGNhck1vZGlmaWVycyA9IGNyZWF0ZU5vZGUoJ21vZGlmaWVyJyk7XG5cbiAgY29uc3Qgc2VsZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzZWxlY3QnKTtcbiAgc2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0X19pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWRpdElucHV0LnZhbHVlID0gY2FyLm5hbWU7XG4gICAgZWRpdElucHV0LmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcbiAgfSk7XG5cbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyZW1vdmUnKTtcbiAgY29uc3QgcmVtb3ZlT3B0aW9ucyA9IHtcbiAgICB1cGRhdGVIZWFkZXI6IHRydWUsXG4gICAgdXBkYXRlUGFnaW5hdGlvbjogdHJ1ZSxcbiAgICB1cGRhdGVQYWdlTnVtYmVyOiB0cnVlLFxuICB9XG4gIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICByZW1vdmVDYXIoY2FyLmlkKTtcbiAgICBjYXJCbG9jay5yZW1vdmUoKTtcbiAgICBjb25zdCBjYXJzSGVhZGVyQW1vdW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICAgIGlmIChjYXJzSGVhZGVyQW1vdW50QmxvY2sgJiYgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50KSB7XG4gICAgICBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgPSBgJHsrY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50IC0gMX1gO1xuICAgIH1cbiAgICBhd2FpdCBkZWxldGVXaW5uZXIoY2FyLmlkKTtcblxuICAgIGNvbnN0IGNhcnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzJyk7XG4gICAgY29uc3QgY3VycmVudEdhcmFnZVBhZ2UgPSBnZXRDdXJyZW50R2FyYWdlUGFnZSgpO1xuICAgIGlmIChjYXJzQmxvY2s/LmNoaWxkRWxlbWVudENvdW50ID09PSAwICYmIGN1cnJlbnRHYXJhZ2VQYWdlICE9PSAnMScpIHNldEN1cnJlbnRHYXJhZ2VQYWdlKCtjdXJyZW50R2FyYWdlUGFnZSAtIDEpO1xuICAgIHVwZGF0ZUdhcmFnZVBhZ2UocmVtb3ZlT3B0aW9ucyk7XG4gIH0pO1xuXG4gIGNhck1vZGlmaWVycy5hcHBlbmQoc2VsZWN0QnV0dG9uLCByZW1vdmVCdXR0b24pO1xuXG4gIGNvbnN0IGNhck5hbWUgPSBjcmVhdGVOb2RlKCduYW1lJywgY2FyLm5hbWUpO1xuICBjb25zdCBjYXJJY29uQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FySWNvbkJsb2NrLmlubmVySFRNTCA9IHJlbmRlckNvbG9yU3ZnKGNhci5jb2xvcik7XG4gIGNhckljb25CbG9jay5jbGFzc05hbWUgPSAnY2FyJztcblxuICBjb25zdCBmbGFnSWNvbkJsb2NrID0gY3JlYXRlSW1nKCdhc3NldHMvaWNvbi9mbGFnLnN2ZycsICdmbGFnJyk7XG4gIGNvbnN0IGNvbnRyb2xzID0gY3JlYXRlTm9kZSgnY29udHJvbHMnKTtcbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVCdXR0b24oJ3N0YXJ0Jyk7XG4gIGNvbnN0IHN0b3AgPSBjcmVhdGVCdXR0b24oJ3N0b3AnKTtcbiAgc3RhcnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgc3RvcC5kaXNhYmxlZCA9IHRydWU7XG4gIHN0YXJ0LmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcbiAgbGV0IGNhckFuaW1hdGlvbkludGVydmFsSWQgPSAwO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBzdGFydC5jbGFzc0xpc3QuYWRkKCdidXR0b25fX2Rpc2FibGVkJyk7XG4gICAgc3RhcnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IHN0YXJ0UmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gYXdhaXQgc3RhcnRTdG9wQ2FyKGNhci5pZCwgJ3N0YXJ0ZWQnKTtcbiAgICBjb25zdCBkcml2ZUFuaW1hdGlvblN0ZXAgPSBnZXREcml2ZVN0ZXAodmVsb2NpdHkpO1xuICAgIHN0b3AuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNhckFuaW1hdGlvbkludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGNhckljb25CbG9jaykge1xuICAgICAgICBpZiAoK2Nhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUuc2xpY2UoMCwgLTEpID49IDEwMCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gICAgICAgICAgY29uc3QgZW5kUmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICAgIGNvbnN0IHJhY2VEdXJhdGlvbiA9ICgoZW5kUmFjZSAtIHN0YXJ0UmFjZSkgLyAxMDAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyYWNlJykgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmFjZScpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGFsZXJ0KGAke2Nhci5uYW1lfSBoYXMgd29uIVxcblRpbWU6ICR7cmFjZUR1cmF0aW9ufXNgKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcldpbiA9IGF3YWl0IGdldFdpbm5lcihjYXIuaWQpO1xuICAgICAgICAgICAgaWYgKGNhcldpbiA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgIGNyZWF0ZVdpbm5lcihjYXIuaWQsICtyYWNlRHVyYXRpb24pO1xuICAgICAgICAgICAgICBjb25zdCByZWNvcmRzQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHNfX2Ftb3VudCcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3Jkc0Ftb3VudCAmJiByZWNvcmRzQW1vdW50LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcmVjb3Jkc0Ftb3VudC50ZXh0Q29udGVudCA9IGAkeytyZWNvcmRzQW1vdW50LnRleHRDb250ZW50ICsgMX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBuZXdUaW1lID0gK3JhY2VEdXJhdGlvbiA8IGNhcldpbi50aW1lID8gK3JhY2VEdXJhdGlvbiA6IGNhcldpbi50aW1lO1xuICAgICAgICAgICAgICB1cGRhdGVXaW5uZXIoY2FyLmlkLCBjYXJXaW4ud2lucyArIDEsICtuZXdUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVWYWx1ZSA9IGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGU7XG4gICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVZhbHVlID0gY3VycmVudFRyYW5zbGF0ZVZhbHVlID8gYCR7K2N1cnJlbnRUcmFuc2xhdGVWYWx1ZS5zbGljZSgwLCAtMSkgKyBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgIDogYCR7ZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYDtcbiAgICAgICAgY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZSA9IG5ld1RyYW5zbGF0ZVZhbHVlO1xuICAgICAgfVxuICAgIH0sIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2UpO1xuICAgIGNhckJsb2NrLmRhdGFzZXQuaW50ZXJ2YWxJZCA9IGAke2NhckFuaW1hdGlvbkludGVydmFsSWR9YDtcbiAgICBjb25zdCBpc0VuZ2luZU9rID0gYXdhaXQgY2hlY2tFbmdpbmUoY2FyLmlkKTtcbiAgICBpZiAoIWlzRW5naW5lT2spIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gIH0pO1xuICBzdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0b3AuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHN0YXJ0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgc3RhcnRTdG9wQ2FyKGNhci5pZCwgJ3N0b3BwZWQnKTtcbiAgICBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlID0gJyc7XG4gICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgfSk7XG4gIGNvbnRyb2xzLmFwcGVuZChzdGFydCwgc3RvcCk7XG5cbiAgY29uc3QgcmFjZSA9IGNyZWF0ZU5vZGUoJ3JhY2UnKTtcbiAgcmFjZS5hcHBlbmQoY2FySWNvbkJsb2NrLCBmbGFnSWNvbkJsb2NrKTtcblxuICBjYXJCbG9jay5hcHBlbmQoY2FyTW9kaWZpZXJzLCBjYXJOYW1lLCBjb250cm9scywgcmFjZSk7XG4gIHJldHVybiBjYXJCbG9jaztcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ2FycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnMnKT8ucmVtb3ZlKCk7XG4gIGNvbnN0IGNhcnMgPSBjcmVhdGVOb2RlKCdjYXJzJyk7XG4gIGNvbnN0IGdhcmFnZVBhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXJhZ2VQYWdlJyk7XG4gIGxldCBhbGxDYXJzID0gW107XG4gIGlmIChnYXJhZ2VQYWdlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJzUGVyR2FyYWdlUGFnZTsgaSArPSAxKSB7XG4gICAgICBhbGxDYXJzID0gYXdhaXQgZ2V0QWxsQ2Fycyh7IF9saW1pdDogY2Fyc1BlckdhcmFnZVBhZ2UsIF9wYWdlOiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FyYWdlUGFnZScpIHx8ICcxJykgfSk7XG4gICAgfVxuICB9XG4gIGFsbENhcnMuZm9yRWFjaCgoY2FyOiBJQ2FyKSA9PiB7XG4gICAgY2Fycy5hcHBlbmQocmVuZGVyU3BlY2lmaWNDYXIoY2FyKSk7XG4gIH0pO1xuICByZXR1cm4gY2Fycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2FycztcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgYnJhbmRzLCBtb2RlbHMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycy1uYW1lJztcbmltcG9ydCB7IGNyZWF0ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCByZW5kZXJHYXJhZ2VDYXJzLCB7IHJlbmRlclNwZWNpZmljQ2FyIH0gZnJvbSAnLi9nYXJhZ2UtY2Fycyc7XG5pbXBvcnQgeyBjYXJzVG9HZW5lcmF0ZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIHJlbmRlckdhcmFnZUNvbnRyb2xzKCkge1xuICBjb25zdCBnYXJhZ2VDb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG5cbiAgY29uc3QgcmFjZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmFjZScpO1xuICByYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAndHJ1ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25fX3N0YXJ0JykuZm9yRWFjaCgoZWwpID0+IChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKSk7XG4gIH0pO1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVzZXQnKTtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zdG9wJykuZm9yRWFjaCgoZWwpID0+IChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKSkpO1xuICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignZ2VuZXJhdGUnKTtcbiAgZ2VuZXJhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0X19nYXJhZ2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyc1RvR2VuZXJhdGU7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmFuZEJyYW5kID0gYnJhbmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJyYW5kcy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IHJhbmRNb2RlbCA9IG1vZGVsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb2RlbHMubGVuZ3RoKV07XG4gICAgICBjb25zdCBjYXJOYW1lID0gYCR7cmFuZEJyYW5kfSAke3JhbmRNb2RlbH1gO1xuICAgICAgY29uc3QgY2FyID0ge1xuICAgICAgICBuYW1lOiBjYXJOYW1lLFxuICAgICAgICBjb2xvcjogYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCxcbiAgICAgIH07XG4gICAgICByZXN1bHRzLnB1c2goY3JlYXRlQ2FyKGNhcikpO1xuICAgIH1cbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJyk7XG4gICAgZ2FyYWdlVmlldz8uYXBwZW5kKGdhcmFnZUNhcnMpO1xuXG4gICAgY29uc3QgY2Fyc0hlYWRlckFtb3VudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICBpZiAoY2Fyc0hlYWRlckFtb3VudEJsb2NrICYmIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCkge1xuICAgICAgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ID0gYCR7K2NhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCArIGNhcnNUb0dlbmVyYXRlfWA7XG4gICAgfVxuICB9KTtcblxuICBnYXJhZ2VDb250cm9scy5hcHBlbmQocmFjZUJ1dHRvbiwgcmVzZXRCdXR0b24sIGdlbmVyYXRlQnV0dG9uKTtcbiAgcmV0dXJuIGdhcmFnZUNvbnRyb2xzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VDb250cm9scztcbiIsImltcG9ydCB7IGNhcnNQZXJHYXJhZ2VQYWdlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IGdldEFsbENhcnMsIGdldENhcnNBbW91bnQgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24sIGNyZWF0ZU5vZGUsIGdldEN1cnJlbnRHYXJhZ2VQYWdlLCBzZXRDdXJyZW50R2FyYWdlUGFnZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHVwZGF0ZUdhcmFnZVBhZ2UgZnJvbSAnLi4vbW9kdWxlcy91cGRhdGUtZHluYW1pYy1jb250ZW50L3VwZGF0ZS1nYXJhZ2UtZHluYW1pYy1jb250ZW50JztcbmltcG9ydCByZW5kZXJHYXJhZ2VDYXJzIGZyb20gJy4vZ2FyYWdlLWNhcnMnO1xuXG5jb25zdCB1cGRhdGVHYXJhZ2VQYWdlT3B0aW9ucyA9IHtcbiAgdXBkYXRlUGFnaW5hdGlvbjogdHJ1ZSxcbiAgdXBkYXRlUGFnZU51bWJlcjogdHJ1ZSxcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBhZ2VCbG9jaygpIHtcbiAgY29uc3QgcGFnZU51bWJlciA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJMYWJlbCA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX19sYWJlbCcsICdQYWdlICMnKTtcbiAgY29uc3QgcGFnZU51bWJlclZhbHVlID0gY3JlYXRlTm9kZSgncGFnZS1udW1iZXJfX3ZhbHVlJywgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FyYWdlUGFnZScpIHx8ICcxJyk7XG4gIHBhZ2VOdW1iZXIuYXBwZW5kKHBhZ2VOdW1iZXJMYWJlbCwgcGFnZU51bWJlclZhbHVlKTtcbiAgcmV0dXJuIHBhZ2VOdW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VQYWdpbmF0aW9uKCkge1xuICBjb25zdCBwYWdpbmF0aW9uQmxvY2sgPSBjcmVhdGVOb2RlKCdwYWdpbmF0aW9uJyk7XG4gIGxldCBjdXJyZW50UGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKTtcbiAgY29uc3QgcHJldmlvdXMgPSBjcmVhdGVCdXR0b24oJ1ByZXYnKTtcbiAgaWYgKGN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlID09PSAnMScpIHByZXZpb3VzLmRpc2FibGVkID0gdHJ1ZTtcblxuICBjb25zdCBuZXh0ID0gY3JlYXRlQnV0dG9uKCdOZXh0Jyk7XG4gIHByZXZpb3VzLmNsYXNzTGlzdC5hZGQoJ3ByZXZfX2dhcmFnZScpO1xuICBuZXh0LmNsYXNzTGlzdC5hZGQoJ25leHRfX2dhcmFnZScpO1xuICBsZXQgY2Fyc0Ftb3VudCA9IChhd2FpdCBnZXRBbGxDYXJzKCkpLmxlbmd0aDtcbiAgaWYgKGNhcnNBbW91bnQgJiYgY3VycmVudFBhZ2UpIHtcbiAgICBpZiAoK2NhcnNBbW91bnQgPCBjYXJzUGVyR2FyYWdlUGFnZSAqICtjdXJyZW50UGFnZSkgbmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fcmVzZXQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBpZiAocmVzZXRCdXR0b24pIHJlc2V0QnV0dG9uLmNsaWNrKCk7XG4gICAgY2Fyc0Ftb3VudCA9IGF3YWl0IGdldENhcnNBbW91bnQoKTtcblxuICAgIGN1cnJlbnRQYWdlID0gZ2V0Q3VycmVudEdhcmFnZVBhZ2UoKTtcbiAgICBzZXRDdXJyZW50R2FyYWdlUGFnZSgrY3VycmVudFBhZ2UgKyAxKTtcbiAgICBjdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlICsgMTtcblxuICAgIGNvbnN0IGdhcmFnZUNhcnMgPSBhd2FpdCByZW5kZXJHYXJhZ2VDYXJzKCk7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKTtcbiAgICBnYXJhZ2VWaWV3Py5hcHBlbmQoZ2FyYWdlQ2Fycyk7XG5cbiAgICB1cGRhdGVHYXJhZ2VQYWdlKHVwZGF0ZUdhcmFnZVBhZ2VPcHRpb25zKTtcbiAgfSk7XG5cbiAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50R2FyYWdlUGFnZSgpO1xuICAgIHNldEN1cnJlbnRHYXJhZ2VQYWdlKCtjdXJyZW50UGFnZSAtIDEpO1xuXG4gICAgY29uc3QgZ2FyYWdlQ2FycyA9IGF3YWl0IHJlbmRlckdhcmFnZUNhcnMoKTtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xuICAgIGdhcmFnZVZpZXc/LmFwcGVuZChnYXJhZ2VDYXJzKTtcblxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fcmVzZXQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBpZiAocmVzZXRCdXR0b24pIHJlc2V0QnV0dG9uLmNsaWNrKCk7XG5cbiAgICB1cGRhdGVHYXJhZ2VQYWdlKHVwZGF0ZUdhcmFnZVBhZ2VPcHRpb25zKTtcbiAgfSk7XG5cbiAgY29uc3QgY3VycmVudFBhZ2VCbG9jayA9IHJlbmRlckN1cnJlbnRQYWdlQmxvY2soKTtcbiAgcGFnaW5hdGlvbkJsb2NrLmFwcGVuZChwcmV2aW91cywgY3VycmVudFBhZ2VCbG9jaywgbmV4dCk7XG4gIHJldHVybiBwYWdpbmF0aW9uQmxvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZVBhZ2luYXRpb247XG4iLCJpbXBvcnQgcmVuZGVyQ2FyTWFuYWdlbWVudCBmcm9tICcuL2NvbXBvbmVudHMvY2FyLW1hbmFnZW1lbnQnO1xuaW1wb3J0IHJlbmRlckdhcmFnZUNvbnRyb2xzIGZyb20gJy4vY29tcG9uZW50cy9nYXJhZ2UtY29udHJvbHMnO1xuaW1wb3J0IHJlbmRlckNhcnMgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jYXJzJztcbmltcG9ydCB7IHJlbmRlckdhcmFnZVBhZ2luYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9nYXJhZ2UtY2Fycy1oZWFkZXInO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VQYWdlKCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ2ZhbHNlJyk7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhcmFnZVBhZ2UnLCAnMScpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBnYXJhZ2VWaWV3ID0gY3JlYXRlTm9kZSgnZ2FyYWdlJyk7XG4gIGlmIChib2R5KSB7XG4gICAgY29uc3QgY2FyTWFuYWdlbWVudCA9IHJlbmRlckNhck1hbmFnZW1lbnQoKTtcbiAgICBjb25zdCBnYXJhZ2VDb250cm9scyA9IHJlbmRlckdhcmFnZUNvbnRyb2xzKCk7XG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGF3YWl0IHJlbmRlckdhcmFnZVBhZ2luYXRpb24oKTtcbiAgICBjb25zdCBoZWFkZXIgPSBhd2FpdCByZW5kZXJHYXJhZ2VIZWFkZXIoKTtcbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyQ2FycygpO1xuXG4gICAgZ2FyYWdlVmlldy5hcHBlbmQoY2FyTWFuYWdlbWVudCwgZ2FyYWdlQ29udHJvbHMsIHBhZ2luYXRpb24sIGhlYWRlciwgZ2FyYWdlQ2Fycyk7XG4gICAgYm9keS5hcHBlbmQoZ2FyYWdlVmlldyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlUGFnZTtcbiIsImltcG9ydCB7IGdldENhcnNBbW91bnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnNcIjtcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2FyYWdlSGVhZGVyICgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgaWYgKGhlYWRlcikge1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGF3YWl0IGdldENhcnNBbW91bnQoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHYXJhZ2VIZWFkZXI7XG4iLCJpbXBvcnQgeyBnZXRDdXJyZW50R2FyYWdlUGFnZSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZUdhcmFnZVBhZ2VOdW1iZXIoKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLW51bWJlcl9fdmFsdWUnKTtcbiAgaWYgKHBhZ2VOdW1iZXJCbG9jaykge1xuICAgIHBhZ2VOdW1iZXJCbG9jay50ZXh0Q29udGVudCA9IGdldEN1cnJlbnRHYXJhZ2VQYWdlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlR2FyYWdlUGFnZU51bWJlcjtcbiIsImltcG9ydCB7IGNhcnNQZXJHYXJhZ2VQYWdlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0Q2Fyc0Ftb3VudCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fyc1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudEdhcmFnZVBhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaGVscGVyc1wiO1xuXG5mdW5jdGlvbiB1cGRhdGVQcmV2QnV0dG9uKCkge1xuXG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gZ2V0Q3VycmVudEdhcmFnZVBhZ2UoKTtcbiAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldl9fZ2FyYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGlmIChjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSA9PT0gJzEnICYmIHByZXZpb3VzQnV0dG9uKSB7XG4gICAgcHJldmlvdXNCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9IGVsc2UgcHJldmlvdXNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTmV4dEJ1dHRvbigpIHtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50R2FyYWdlUGFnZSgpO1xuICBjb25zdCBjYXJzQW1vdW50ID0gYXdhaXQgZ2V0Q2Fyc0Ftb3VudCgpO1xuICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRfX2dhcmFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBjb25zb2xlLmxvZyhjYXJzQW1vdW50LCBjYXJzUGVyR2FyYWdlUGFnZSwgY3VycmVudFBhZ2UpO1xuICBpZiAoY2Fyc0Ftb3VudCAmJiBjdXJyZW50UGFnZSkge1xuICAgIGlmICgrY2Fyc0Ftb3VudCA8PSBjYXJzUGVyR2FyYWdlUGFnZSAqICtjdXJyZW50UGFnZSkgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBuZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlR2FyYWdlUGFnaW5hdGlvbigpIHtcbiAgdXBkYXRlUHJldkJ1dHRvbigpO1xuICB1cGRhdGVOZXh0QnV0dG9uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUdhcmFnZVBhZ2luYXRpb247IiwiaW1wb3J0IHJlbmRlckNhcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnNcIjtcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2FyYWdlVGFibGUoKSB7XG4gIGNvbnN0IGNhcnMgPSBhd2FpdCByZW5kZXJDYXJzKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKT8uYXBwZW5kKGNhcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHYXJhZ2VUYWJsZTtcbiIsImltcG9ydCBJVXBkYXRlR2FyYWdlUGFnZU9wdGlvbnMgZnJvbSBcIi4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdXBkYXRlLWdhcmFnZS1wYWdlXCI7XG5pbXBvcnQgdXBkYXRlR2FyYWdlSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMudHMvdXBkYXRlLWNhcnMtYW1vdW50XCI7XG5pbXBvcnQgdXBkYXRlR2FyYWdlUGFnZU51bWJlciBmcm9tIFwiLi9jb21wb25lbnRzLnRzL3VwZGF0ZS1nYXJhZ2UtcGFnZS1udW1iZXJcIjtcbmltcG9ydCB1cGRhdGVHYXJhZ2VQYWdpbmF0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMudHMvdXBkYXRlLWdhcmFnZS1wYWdpbmF0aW9uXCI7XG5pbXBvcnQgdXBkYXRlR2FyYWdlVGFibGUgZnJvbSBcIi4vY29tcG9uZW50cy50cy91cGRhdGUtZ2FyYWdlLXRhYmxlXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdhcmFnZVBhZ2UodXBkYXRlUGFnZU9wdGlvbnM6IElVcGRhdGVHYXJhZ2VQYWdlT3B0aW9ucykge1xuICBpZiAodXBkYXRlUGFnZU9wdGlvbnMudXBkYXRlSGVhZGVyKSB1cGRhdGVHYXJhZ2VIZWFkZXIoKTtcbiAgaWYgKHVwZGF0ZVBhZ2VPcHRpb25zLnVwZGF0ZVBhZ2luYXRpb24pIHVwZGF0ZUdhcmFnZVBhZ2luYXRpb24oKTtcbiAgaWYgKHVwZGF0ZVBhZ2VPcHRpb25zLnVwZGF0ZVBhZ2VOdW1iZXIpIHVwZGF0ZUdhcmFnZVBhZ2VOdW1iZXIoKTtcbiAgdXBkYXRlR2FyYWdlVGFibGUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlR2FyYWdlUGFnZTtcbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlclJlY29yZHNQYWdlIGZyb20gJy4vcmVjb3Jkcy9yZWNvcmRzJztcblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuXG4gIGNvbnN0IGhlYWRlckJ1dHRvbnMgPSBjcmVhdGVOb2RlKCdidXR0b25zJyk7XG5cbiAgY29uc3QgdG9HYXJhZ2UgPSBjcmVhdGVCdXR0b24oJ2dhcmFnZScpO1xuICB0b0dhcmFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IHJlY29yZHNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoZ2FyYWdlVmlldyAmJiByZWNvcmRzVmlldykge1xuICAgICAgZ2FyYWdlVmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHJlY29yZHNWaWV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0b1JlY29yZHMgPSBjcmVhdGVCdXR0b24oJ3JlY29yZHMnKTtcbiAgdG9SZWNvcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgcmVjb3Jkc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChnYXJhZ2VWaWV3ICYmIHJlY29yZHNWaWV3KSB7XG4gICAgICBnYXJhZ2VWaWV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICByZWNvcmRzVmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHJlbmRlclJlY29yZHNQYWdlKCk7XG4gICAgfVxuICB9KTtcblxuICBoZWFkZXJCdXR0b25zLmFwcGVuZCh0b0dhcmFnZSwgdG9SZWNvcmRzKTtcblxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckJ1dHRvbnMpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHk/LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXI7XG4iLCJpbXBvcnQgeyBnZXRSZWNvcmRzQW1vdW50IH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyB3aW5uZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCByZW5kZXJUYWJsZSBmcm9tICcuL3JlbmRlci10YWJsZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uKCkge1xuICBjb25zdCBwYWdpbmF0aW9uID0gY3JlYXRlTm9kZSgnd2lubmVycy1wYWdpbmF0aW9uJyk7XG4gIGNvbnN0IHByZXZpb3VzID0gY3JlYXRlQnV0dG9uKCdQcmV2Jyk7XG4gIGNvbnN0IG5leHQgPSBjcmVhdGVCdXR0b24oJ05leHQnKTtcblxuICBsZXQgY3VycmVudFBhZ2UgPSAwO1xuICBjb25zdCB0bXBQYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc1BhZ2UnKTtcbiAgaWYgKHRtcFBhZ2UpIHtcbiAgICBjdXJyZW50UGFnZSA9ICt0bXBQYWdlO1xuICB9XG4gIGlmIChjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSA9PT0gMSkge1xuICAgIHByZXZpb3VzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCByZWNvcmRzQW1vdW50ID0gYXdhaXQgZ2V0UmVjb3Jkc0Ftb3VudCgpIHx8IDE7XG5cbiAgaWYgKHJlY29yZHNBbW91bnQgJiYgY3VycmVudFBhZ2UpIHtcbiAgICBpZiAoK3JlY29yZHNBbW91bnQgPCB3aW5uZXJzQ29uZmlnLmxpbWl0ICogK2N1cnJlbnRQYWdlKSBuZXh0LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5leHQuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRtcFBhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpO1xuICAgIGlmICh0bXBQYWdlKSB7XG4gICAgICBjdXJyZW50UGFnZSA9ICt0bXBQYWdlO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50UGFnZSAtPSAxO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dpbm5lcnNQYWdlJywgYCR7Y3VycmVudFBhZ2V9YCk7XG5cbiAgICBpZiAoY3VycmVudFBhZ2UgJiYgY3VycmVudFBhZ2UgPT09IDEpIHtcbiAgICAgIHByZXZpb3VzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVuZGVyVGFibGUoKTtcbiAgfSk7XG5cbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcmV2aW91cy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGxldCBjdXJyZW50UGFnZSA9IDA7XG4gICAgY29uc3QgdG1wUGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNQYWdlJyk7XG4gICAgaWYgKHRtcFBhZ2UpIHtcbiAgICAgIGN1cnJlbnRQYWdlID0gK3RtcFBhZ2U7XG4gICAgfVxuICAgIGN1cnJlbnRQYWdlICs9IDE7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc1BhZ2UnLCBgJHtjdXJyZW50UGFnZX1gKTtcbiAgICBpZiAocmVjb3Jkc0Ftb3VudCAmJiBjdXJyZW50UGFnZSkge1xuICAgICAgaWYgKCtyZWNvcmRzQW1vdW50IDwgd2lubmVyc0NvbmZpZy5saW1pdCAqICtjdXJyZW50UGFnZSkgbmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJlbmRlclRhYmxlKCk7XG4gIH0pO1xuXG4gIHBhZ2luYXRpb24uYXBwZW5kKHByZXZpb3VzLCBuZXh0KTtcbiAgcmV0dXJuIHBhZ2luYXRpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IHsgZ2V0V2lubmVycyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcbmltcG9ydCB7IGNyZWF0ZVRhYmxlQ2VsbCwgY3JlYXRlVGFibGVIZWFkZXIsIHJlbmRlckNvbG9yU3ZnIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBnZXRBbGxDYXJzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IElXaW5uZXIgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy93aW5uZXInO1xuaW1wb3J0IHsgd2lubmVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdXJsV2lubmVyc1NvcnQgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91cmwtd2lubmVycy1zb3J0JztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyVGFibGUodXJsT3B0aW9ucz86IHVybFdpbm5lcnNTb3J0KSB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgdGFibGUuY2xhc3NOYW1lID0gJ3dpbm5lcnMnO1xuICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBoZWFkZXJSb3cuY2xhc3NOYW1lID0gJ3dpbm5lcnNfX2hlYWRlcic7XG4gIGNvbnN0IHRhYmxlSGVhZGVyTnVtYmVyID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fbnVtYmVyJywgJyMnKTtcbiAgY29uc3QgdGFibGVIZWFkZXJDYXIgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19jYXInLCAnQ2FyJyk7XG4gIGNvbnN0IHRhYmxlSGVhZGVyTmFtZSA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX25hbWUnLCAnTmFtZScpO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGVyV2lucyA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX3dpbnMgY2xpY2thYmxlJywgJ1dpbnMg4oeFJyk7XG4gIHRhYmxlSGVhZGVyV2lucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc29ydDogJ3dpbnMnLFxuICAgICAgb3JkZXI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNPcmRlcicpID09PSAnYXNjJyA/ICdBU0MnIDogJ0RFU0MnLFxuICAgIH07XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNPcmRlcicpID09PSAnYXNjJykge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc09yZGVyJywgJ2Rlc2MnKTtcbiAgICB9IGVsc2Ugc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc09yZGVyJywgJ2FzYycpO1xuICAgIHJlbmRlclRhYmxlKG9wdGlvbnMpO1xuICB9KTtcblxuICBjb25zdCB0YWJsZUhlYWRlclRpbWUgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX190aW1lJywgJ1RpbWUg4oeFJyk7XG4gIHRhYmxlSGVhZGVyVGltZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc29ydDogJ3RpbWUnLFxuICAgICAgb3JkZXI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNPcmRlcicpID09PSAnYXNjJyA/ICdBU0MnIDogJ0RFU0MnLFxuICAgIH07XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNPcmRlcicpID09PSAnYXNjJykge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc09yZGVyJywgJ2Rlc2MnKTtcbiAgICB9IGVsc2Ugc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc09yZGVyJywgJ2FzYycpO1xuICAgIHJlbmRlclRhYmxlKG9wdGlvbnMpO1xuICB9KTtcblxuICBoZWFkZXJSb3cuYXBwZW5kKFxuICAgIHRhYmxlSGVhZGVyTnVtYmVyLFxuICAgIHRhYmxlSGVhZGVyQ2FyLFxuICAgIHRhYmxlSGVhZGVyTmFtZSxcbiAgICB0YWJsZUhlYWRlcldpbnMsXG4gICAgdGFibGVIZWFkZXJUaW1lLFxuICApO1xuICB0YWJsZS5hcHBlbmQoaGVhZGVyUm93KTtcbiAgY29uc3Qgd2lubmVycyA9IGF3YWl0IGdldFdpbm5lcnModXJsT3B0aW9ucyk7XG4gIGxldCBjb3VudGVyID0gMCArIHdpbm5lcnNDb25maWcubGltaXQgKiAoKyhzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpIHx8IDEpIC0gMSk7XG4gIGNvbnN0IGNhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIHdpbm5lcnMuZm9yRWFjaChhc3luYyAod2lubmVyOiBJV2lubmVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGRhdGFSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG51bWJlckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7Y291bnRlcn1gKTtcblxuICAgIGNvbnN0IGNhckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGxldCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcnNbaV0uaWQgPT09IHdpbm5lci5pZCkge1xuICAgICAgICBuYW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChjYXJzW2ldLm5hbWUpO1xuICAgICAgICBjYXJDZWxsLmlubmVySFRNTCA9IHJlbmRlckNvbG9yU3ZnKGNhcnNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3aW5zQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChgJHt3aW5uZXIud2luc31gKTtcbiAgICBjb25zdCB0aW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChgJHt3aW5uZXIudGltZX1gKTtcbiAgICBkYXRhUm93LmFwcGVuZChudW1iZXJDZWxsLCBjYXJDZWxsLCBuYW1lQ2VsbCwgd2luc0NlbGwsIHRpbWVDZWxsKTtcbiAgICB0YWJsZS5hcHBlbmQoZGF0YVJvdyk7XG4gIH0pO1xuICBjb25zdCByZWNvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKTtcbiAgaWYgKHJlY29yZHM/LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzJykpIHJlY29yZHMucXVlcnlTZWxlY3RvcignLndpbm5lcnMnKT8ucmVtb3ZlKCk7XG4gIHJlY29yZHM/LmFwcGVuZCh0YWJsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhYmxlO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0UmVjb3Jkc0Ftb3VudCB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyV2lubmVySGVhZGVyKCkge1xuICBjb25zdCByZWNvcmRzTGFiZWwgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19sYWJlbCcsICdSZWNvcmRzOicpO1xuICBjb25zdCByZWNvcmRzQW1vdW50ID0gYXdhaXQgZ2V0UmVjb3Jkc0Ftb3VudCgpO1xuICBjb25zdCByZWNvcmRzVmFsdWUgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19hbW91bnQnLCByZWNvcmRzQW1vdW50IHx8ICcwJyk7XG4gIGNvbnN0IHJlY29yZHNBbW91bnRCbG9jayA9IGNyZWF0ZU5vZGUoJ3JlY29yZHNfX2Ftb3VudC1ibG9jaycpO1xuICByZWNvcmRzQW1vdW50QmxvY2suYXBwZW5kKHJlY29yZHNMYWJlbCwgcmVjb3Jkc1ZhbHVlKTtcbiAgcmV0dXJuIHJlY29yZHNBbW91bnRCbG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2lubmVySGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uJztcbmltcG9ydCByZW5kZXJUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlJztcbmltcG9ydCByZW5kZXJXaW5uZXJIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL3dpbm5lci1oZWFkZXInO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJSZWNvcmRzUGFnZSgpIHtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc1BhZ2UnLCAnMScpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBpZiAoYm9keSkge1xuICAgIGNvbnN0IHJlY29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpO1xuICAgIGlmIChyZWNvcmRzKSByZWNvcmRzLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IHJlY29yZHMgPSBjcmVhdGVOb2RlKCdyZWNvcmRzJyk7XG4gIGNvbnN0IHBhZ2luYXRpb24gPSBhd2FpdCByZW5kZXJXaW5uZXJzUGFnaW5hdGlvbigpO1xuICByZWNvcmRzLmFwcGVuZChwYWdpbmF0aW9uKTtcbiAgY29uc3QgcmVjb3Jkc0hlYWRlciA9IGF3YWl0IHJlbmRlcldpbm5lckhlYWRlcigpO1xuICByZWNvcmRzLmFwcGVuZChyZWNvcmRzSGVhZGVyKTtcbiAgcmVuZGVyVGFibGUoKTtcbiAgYm9keT8uYXBwZW5kKHJlY29yZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJSZWNvcmRzUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckdhcmFnZVBhZ2UgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9nYXJhZ2UnO1xuaW1wb3J0IHJlbmRlclJlY29yZHNQYWdlIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9yZWNvcmRzL3JlY29yZHMnO1xuaW1wb3J0IHJlbmRlckhlYWRlciBmcm9tICcuL3NjcmlwdHMvcGFnZXMvaGVhZGVyJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyQXBwKCkge1xuICByZW5kZXJIZWFkZXIoKTtcbiAgcmVuZGVyR2FyYWdlUGFnZSgpO1xuICBhd2FpdCByZW5kZXJSZWNvcmRzUGFnZSgpO1xuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxucmVuZGVyQXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=