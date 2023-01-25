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
    const blockLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header__label', `${blockType}`);
    const setName = document.createElement('input');
    setName.className = `${blockType}__input`;
    const color = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)(`${blockType}__color color-block`);
    const colorPickerLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)(`${blockType}__color__label`, 'Set color: ');
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.className = 'color__picker';
    color.append(colorPickerLabel, colorPicker);
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
    main.append(blockLabel, setName, color, button);
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
    const garageCarsHeaderLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('header__label', 'Garage ');
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
        next.disabled = true;
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
        await (0,_modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_3__["default"])(updateGaragePageOptions);
    });
    previous.addEventListener('click', async () => {
        previous.disabled = true;
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
        if (+recordsAmount < (_config__WEBPACK_IMPORTED_MODULE_2__.winnersConfig.limit * +currentPage) + 1)
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
            if (+recordsAmount < (_config__WEBPACK_IMPORTED_MODULE_2__.winnersConfig.limit * +currentPage) + 1)
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
    const tableHeaderTime = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTableHeader)('header__time clickable', 'Time ⇅');
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
    if (!sessionStorage.getItem('winnersPage'))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042RDtBQUNHO0FBQ2Q7QUFFbEQsS0FBSyxVQUFVLFNBQVM7SUFDdEIsaUVBQVksRUFBRSxDQUFDO0lBQ2Ysd0VBQWdCLEVBQUUsQ0FBQztJQUNuQixNQUFNLDBFQUFpQixFQUFFLENBQUM7SUFDekIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDaEYsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2FuaW1hdGlvbi9kcml2ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvY29uZmlnLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvY2Fycy1uYW1lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvY2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvZGF0YS1jb250cm9sbGVyL3JlY29yZHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2Nhci1tYW5hZ2VtZW50LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9nYXJhZ2UtY2Fycy1oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2dhcmFnZS1jYXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9nYXJhZ2UtY29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9nYXJhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9tb2R1bGVzL3VwZGF0ZS1keW5hbWljLWNvbnRlbnQvY29tcG9uZW50cy50cy91cGRhdGUtY2Fycy1hbW91bnQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9tb2R1bGVzL3VwZGF0ZS1keW5hbWljLWNvbnRlbnQvY29tcG9uZW50cy50cy91cGRhdGUtZ2FyYWdlLXBhZ2UtbnVtYmVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvbW9kdWxlcy91cGRhdGUtZHluYW1pYy1jb250ZW50L2NvbXBvbmVudHMudHMvdXBkYXRlLWdhcmFnZS1wYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvbW9kdWxlcy91cGRhdGUtZHluYW1pYy1jb250ZW50L2NvbXBvbmVudHMudHMvdXBkYXRlLWdhcmFnZS10YWJsZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC91cGRhdGUtZ2FyYWdlLWR5bmFtaWMtY29udGVudC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvaGVhZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9jb21wb25lbnRzL3JlbmRlci10YWJsZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9jb21wb25lbnRzL3dpbm5lci1oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYWNlU3RhdHMgfSBmcm9tICcuLi9jb25maWcnO1xuXG5mdW5jdGlvbiBnZXREcml2ZVN0ZXAodmVsb2NpdHk6IG51bWJlcikge1xuICBjb25zdCB0aW1lID0gcmFjZVN0YXRzLm1heEFuaW1hdGlvblRpbWUgLyAodmVsb2NpdHkgLyByYWNlU3RhdHMubWluUG9zc2libGVWZWxvY2l0eSk7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSByYWNlU3RhdHMuZnJhbWVzUGVyU2Vjb25kICogdGltZTtcblxuICBjb25zdCBzdGVwRGlzdGFuY2UgPSByYWNlU3RhdHMuZGlzdGFuY2UgLyB0b3RhbFN0ZXBzO1xuICByZXR1cm4ge1xuICAgIHN0ZXBEaXN0YW5jZSxcbiAgICB0aW1lLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREcml2ZVN0ZXA7XG4iLCJleHBvcnQgY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC8nO1xuXG5leHBvcnQgY29uc3QgcmFjZVN0YXRzID0ge1xuICBtYXhBbmltYXRpb25UaW1lOiA0MCxcbiAgbWluUG9zc2libGVWZWxvY2l0eTogNTAsXG4gIGZyYW1lc1BlclNlY29uZDogNjAsXG4gIGRpc3RhbmNlOiAxMDAsXG59O1xuXG5leHBvcnQgY29uc3Qgd2lubmVyc0NvbmZpZyA9IHtcbiAgbGltaXQ6IDEwLFxuICBwYWdlOiAxLFxuICBzb3J0OiAndGltZScsXG4gIG9yZGVyOiAnQVNDJyxcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJzUGVyR2FyYWdlUGFnZSA9IDc7XG5cbmV4cG9ydCBjb25zdCBjYXJzVG9HZW5lcmF0ZSA9IDEwMDtcbiIsImV4cG9ydCBjb25zdCBicmFuZHMgPSBbJ1BldWdlb3QnLCAnQk1XJywgJ1BvcnNjaGUnLCAnWmhpZ3VsaScsICdBdWRpJywgJ01lcmNlZGVzJywgJ0ZpYXQnLCAnTUFaJywgJ0J1Z2dhdGknLCAnUm9sbHMtUm95c2UnLCAnUGFnYW5pJ107XG5leHBvcnQgY29uc3QgbW9kZWxzID0gWyc0MDYgQ291cGUnLCAnQU1HJywgJ00tU2VyaWVzJywgJ1JTJywgJzMtc2VyaWVzJywgJ0E2JywgJ0MyMDgnLCAnOTExJywgJ0NheW1hbicsICc0UycsICdTcG9ydCddO1xuIiwiaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZ2FyYWdlVXJsID0gYCR7YXBpVXJsfWdhcmFnZS9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2FycyhvcHRpb25zPzogeyBfbGltaXQ6IG51bWJlciwgX3BhZ2U6IHN0cmluZ30pIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChnYXJhZ2VVcmwpO1xuICBpZiAob3B0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCBgJHtvcHRpb25zW2tleSBhcyBrZXlvZiB0eXBlb2Ygb3B0aW9uc119YCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGFsbENhcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGFsbENhcnM7XG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcignQ2Fubm90IGdldCBjYXJzIGxpc3QnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Z2FyYWdlVXJsfSR7aWR9YCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcihjYXI6IHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0pIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGdhcmFnZVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcblxuICBpZiAocmVxdWVzdC5vaykge1xuICAgIC8vIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgICByZXR1cm4gcmVxdWVzdC5qc29uKCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGNhcicpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ2FyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1BlcmZlY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FyKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgY29sb3IgPSAnMTIzJykge1xuICBjb25zdCBjYXIgPSB7XG4gICAgbmFtZSxcbiAgICBjb2xvcixcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcnNBbW91bnQoKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZ2FyYWdlVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ19saW1pdCcsICcxJyk7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICByZXR1cm4gcmVxdWVzdC5oZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xufVxuIiwiaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZW5naW5lVXJsID0gYCR7YXBpVXJsfWVuZ2luZWA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydFN0b3BDYXIoY2FySWQ6IG51bWJlciwgc3RhdHVzOiAnc3RhcnRlZCcgfCAnc3RvcHBlZCcpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmdpbmVVcmwpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnaWQnLCBgJHtjYXJJZH1gKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXR1cycsIHN0YXR1cyk7XG4gIGNvbnN0IHN0YXJ0RW5naW5lUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSk7XG4gIGlmIChzdGFydEVuZ2luZVJlcXVlc3Qub2spIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0YXJ0RW5naW5lUmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgeyB2ZWxvY2l0eSB9ID0gcmVzcG9uc2U7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0VuZ2luZShjYXJJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5naW5lVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYCR7Y2FySWR9YCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzdGF0dXMnLCAnZHJpdmUnKTtcbiAgY29uc3Qgc3RhcnREcml2ZVJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaWQ6IGNhcklkLFxuICAgICAgc3RhdHVzOiAnZHJpdmUnLFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIHN0YXJ0RHJpdmVSZXF1ZXN0Lm9rO1xufVxuIiwiaW1wb3J0IHsgYXBpVXJsLCB3aW5uZXJzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB1cmxXaW5uZXJzU29ydCBmcm9tICcuLi9pbnRlcmZhY2VzL3VybC13aW5uZXJzLXNvcnQnO1xuXG5jb25zdCB3aW5uZXJzVXJsID0gYCR7YXBpVXJsfXdpbm5lcnMvYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbm5lcnMocmVuZGVyT3B0aW9ucz86IHVybFdpbm5lcnNTb3J0KSB7XG4gIGxldCB1cmxPcHRpb25zID0gd2lubmVyc0NvbmZpZztcbiAgaWYgKHJlbmRlck9wdGlvbnMpIHtcbiAgICBpZiAocmVuZGVyT3B0aW9ucy5vcmRlcikgdXJsT3B0aW9ucy5vcmRlciA9IHJlbmRlck9wdGlvbnMub3JkZXJcbiAgICBpZiAocmVuZGVyT3B0aW9ucy5zb3J0KSB1cmxPcHRpb25zLnNvcnQgPSByZW5kZXJPcHRpb25zLnNvcnQ7O1xuICB9XG5cbiAgdXJsT3B0aW9ucy5wYWdlID0gKyhzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpIHx8IDEpO1xuXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2lubmVyc1VybCk7XG4gIE9iamVjdC5rZXlzKHVybE9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KGBfJHtrZXl9YCwgYCR7dXJsT3B0aW9uc1trZXkgYXMga2V5b2YgdHlwZW9mIHVybE9wdGlvbnNdfWApO1xuICB9KTtcbiAgY29uc3Qgd2lubmVyc1JlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZiAod2lubmVyc1JlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gd2lubmVyc1JlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5uZXIoaWQ6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbm5lcnNVcmx9JHtpZH1gKTtcbiAgY29uc3Qgd2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmICh3aW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIHdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG4gIHJldHVybiB3aW5uZXJSZXF1ZXN0LnN0YXR1cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbm5lcihpZDogbnVtYmVyLCB0aW1lOiBudW1iZXIpIHtcbiAgY29uc3QgcmVjb3JkTm9kZSA9IHtcbiAgICBpZCxcbiAgICB3aW5zOiAxLFxuICAgIHRpbWUsXG4gIH07XG4gIGNvbnN0IGNyZWF0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh3aW5uZXJzVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlY29yZE5vZGUpLFxuICB9KTtcbiAgaWYgKGNyZWF0ZVdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gY3JlYXRlV2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVdpbm5lcihpZDpudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gYCR7d2lubmVyc1VybH0ke2lkfWA7XG4gIGNvbnN0IGRlbGV0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICB9KTtcbiAgaWYgKGRlbGV0ZVdpbm5lclJlcXVlc3Qub2spIHtcbiAgICByZXR1cm4gZGVsZXRlV2lubmVyUmVxdWVzdC5qc29uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbm5lcihpZDogbnVtYmVyLCB3aW5zOiBudW1iZXIsIHRpbWU6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBgJHt3aW5uZXJzVXJsfSR7aWR9YDtcbiAgY29uc3QgdXBkYXRlV2lubmVyUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHdpbnMsXG4gICAgICB0aW1lLFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIHVwZGF0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjb3Jkc0Ftb3VudCgpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5uZXJzVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ19saW1pdCcsICcxJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0Q29udGVudD86IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZiAodGV4dENvbnRlbnQpIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oYnV0dG9uTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NOYW1lID0gYGJ1dHRvbiBidXR0b25fXyR7YnV0dG9uTmFtZX1gO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25OYW1lO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nKHNyYzogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICBjb25zdCBpbWdCbG9jayA9IGNyZWF0ZU5vZGUoY2xhc3NOYW1lKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5jbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9X19pbWdgO1xuICBpbWcuc3JjID0gc3JjO1xuICBpbWdCbG9jay5hcHBlbmQoaW1nKTtcbiAgcmV0dXJuIGltZ0Jsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVIZWFkZXIoY2xhc3NOYW1lOiBzdHJpbmcsIHRleHRDb250ZW50OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVDZWxsKHRleHRDb250ZW50Pzogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBpZiAodGV4dENvbnRlbnQpIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50R2FyYWdlUGFnZSgpIHtcbiAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKSB8fCAnMSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50R2FyYWdlUGFnZShwYWdlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FyYWdlUGFnZScsIGAke3BhZ2V9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb2xvclN2Zyhjb2xvcjogc3RyaW5nKSB7XG4gIHJldHVybiBgXG4gIDwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFwiPlxuXG4gIDxzdmcgZmlsbD1cIiR7Y29sb3J9XCIgaGVpZ2h0PVwiMjNweFwiIHZlcnNpb249XCIxLjFcIiBpZD1cImNhcl9faW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNDcuMDMyIDQ3LjAzMlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgc3Ryb2tlPVwiIzAwMDAwMFwiPlxuXG4gIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCIvPlxuXG4gIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuXG4gIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8Zz4gPHBhdGggZD1cIk0yOS4zOTUsMEgxNy42MzZjLTMuMTE3LDAtNS42NDMsMy40NjctNS42NDMsNi41ODR2MzQuODA0YzAsMy4xMTYsMi41MjYsNS42NDQsNS42NDMsNS42NDRoMTEuNzU5IGMzLjExNiwwLDUuNjQ0LTIuNTI3LDUuNjQ0LTUuNjQ0VjYuNTg0QzM1LjAzNywzLjQ2NywzMi41MTEsMCwyOS4zOTUsMHogTTM0LjA1LDE0LjE4OHYxMS42NjVsLTIuNzI5LDAuMzUxdi00LjgwNkwzNC4wNSwxNC4xODh6IE0zMi42MTgsMTAuNzczYy0xLjAxNiwzLjktMi4yMTksOC41MS0yLjIxOSw4LjUxSDE2LjYzMWwtMi4yMjItOC41MUMxNC40MSwxMC43NzMsMjMuMjkzLDcuNzU1LDMyLjYxOCwxMC43NzN6IE0xNS43NDEsMjEuNzEzIHY0LjQ5MmwtMi43My0wLjM0OVYxNC41MDJMMTUuNzQxLDIxLjcxM3ogTTEzLjAxMSwzNy45MzhWMjcuNTc5bDIuNzMsMC4zNDN2OC4xOTZMMTMuMDExLDM3LjkzOHogTTE0LjU2OCw0MC44ODJsMi4yMTgtMy4zMzYgaDEzLjc3MWwyLjIxOSwzLjMzNkgxNC41Njh6IE0zMS4zMjEsMzUuODA1di03Ljg3MmwyLjcyOS0wLjM1NXYxMC4wNDhMMzEuMzIxLDM1LjgwNXpcIi8+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDwvZz4gPC9nPlxuXG4gIDwvc3ZnPlxuYFxufVxuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBjcmVhdGVDYXIsIHVwZGF0ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB1cGRhdGVHYXJhZ2VQYWdlIGZyb20gJy4uL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC91cGRhdGUtZ2FyYWdlLWR5bmFtaWMtY29udGVudCc7XG5cbmZ1bmN0aW9uIHJlbmRlckNhclNlbGVjdGlvbihibG9ja1R5cGU6IHN0cmluZykge1xuICBjb25zdCBtYWluID0gY3JlYXRlTm9kZShibG9ja1R5cGUpO1xuXG4gIGNvbnN0IGJsb2NrTGFiZWwgPSBjcmVhdGVOb2RlKCdoZWFkZXJfX2xhYmVsJywgYCR7YmxvY2tUeXBlfWApO1xuICBjb25zdCBzZXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBzZXROYW1lLmNsYXNzTmFtZSA9IGAke2Jsb2NrVHlwZX1fX2lucHV0YDtcblxuICBjb25zdCBjb2xvciA9IGNyZWF0ZU5vZGUoYCR7YmxvY2tUeXBlfV9fY29sb3IgY29sb3ItYmxvY2tgKTtcbiAgY29uc3QgY29sb3JQaWNrZXJMYWJlbCA9IGNyZWF0ZU5vZGUoYCR7YmxvY2tUeXBlfV9fY29sb3JfX2xhYmVsYCwgJ1NldCBjb2xvcjogJyk7XG4gIGNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcic7XG4gIGNvbG9yUGlja2VyLmNsYXNzTmFtZSA9ICdjb2xvcl9fcGlja2VyJztcbiAgY29sb3IuYXBwZW5kKGNvbG9yUGlja2VyTGFiZWwsIGNvbG9yUGlja2VyKTtcblxuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oYmxvY2tUeXBlKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGlmIChibG9ja1R5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICBjb25zdCBjYXIgPSB7XG4gICAgICAgIG5hbWU6IHNldE5hbWUudmFsdWUsXG4gICAgICAgIGNvbG9yOiBjb2xvclBpY2tlci52YWx1ZSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBjcmVhdGVDYXIoY2FyKTtcbiAgICAgIGNvbnN0IHVwZGF0ZVBhZ2VPcHRpb25zID0ge1xuICAgICAgICB1cGRhdGVIZWFkZXI6IHRydWUsXG4gICAgICAgIHVwZGF0ZVBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIHVwZGF0ZVBhZ2VOdW1iZXI6IHRydWUsXG4gICAgICB9XG4gICAgICB1cGRhdGVHYXJhZ2VQYWdlKHVwZGF0ZVBhZ2VPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjYXJJZCB9ID0gc2V0TmFtZS5kYXRhc2V0O1xuICAgICAgaWYgKGNhcklkKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHNldE5hbWU7XG4gICAgICAgIHVwZGF0ZUNhcigrY2FySWQsIHZhbHVlLCBjb2xvclBpY2tlci52YWx1ZSk7XG4gICAgICAgIHVwZGF0ZUdhcmFnZVBhZ2Uoe30pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbWFpbi5hcHBlbmQoYmxvY2tMYWJlbCwgc2V0TmFtZSwgY29sb3IsIGJ1dHRvbik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDYXJNYW5hZ2VtZW50KCkge1xuICBjb25zdCBjYXJNYW5hZ2VtZW50QmxvY2sgPSBjcmVhdGVOb2RlKCdjYXItbWFuYWdlbWVudCcpO1xuICBjb25zdCBjcmVhdGVDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignY3JlYXRlJyk7XG4gIGNvbnN0IGVkaXRDYXJCbG9jayA9IHJlbmRlckNhclNlbGVjdGlvbignZWRpdCcpO1xuXG4gIGNhck1hbmFnZW1lbnRCbG9jay5hcHBlbmQoY3JlYXRlQ2FyQmxvY2ssIGVkaXRDYXJCbG9jayk7XG4gIHJldHVybiBjYXJNYW5hZ2VtZW50QmxvY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhck1hbmFnZW1lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IGdldENhcnNBbW91bnQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnNcIjtcblxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJHYXJhZ2VIZWFkZXIoKSB7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXIgPSBjcmVhdGVOb2RlKCdoZWFkZXInKTtcbiAgY29uc3QgZ2FyYWdlQ2Fyc0hlYWRlckxhYmVsID0gY3JlYXRlTm9kZSgnaGVhZGVyX19sYWJlbCcsICdHYXJhZ2UgJyk7XG4gIGNvbnN0IGNhcnNBbW91bnQgPSBhd2FpdCBnZXRDYXJzQW1vdW50KCk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fdmFsdWUnLCBgJHtjYXJzQW1vdW50fWApO1xuXG4gIGdhcmFnZUNhcnNIZWFkZXIuYXBwZW5kKGdhcmFnZUNhcnNIZWFkZXJMYWJlbCwgZ2FyYWdlQ2Fyc0hlYWRlclZhbHVlKTtcbiAgcmV0dXJuIGdhcmFnZUNhcnNIZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhcmFnZUhlYWRlcjsiLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24sIGNyZWF0ZUltZywgcmVuZGVyQ29sb3JTdmcsIGdldEN1cnJlbnRHYXJhZ2VQYWdlLCBzZXRDdXJyZW50R2FyYWdlUGFnZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2FycywgcmVtb3ZlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHsgc3RhcnRTdG9wQ2FyLCBjaGVja0VuZ2luZSB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9lbmdpbmUnO1xuaW1wb3J0IHtcbiAgY3JlYXRlV2lubmVyLCBkZWxldGVXaW5uZXIsIGdldFdpbm5lciwgdXBkYXRlV2lubmVyLFxufSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgZ2V0RHJpdmVTdGVwIGZyb20gJy4uLy4uLy4uL2FuaW1hdGlvbi9kcml2ZSc7XG5pbXBvcnQgSUNhciBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2Nhcic7XG5pbXBvcnQgeyBjYXJzUGVyR2FyYWdlUGFnZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdXBkYXRlR2FyYWdlUGFnZSBmcm9tICcuLi9tb2R1bGVzL3VwZGF0ZS1keW5hbWljLWNvbnRlbnQvdXBkYXRlLWdhcmFnZS1keW5hbWljLWNvbnRlbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3BlY2lmaWNDYXIoY2FyOiBJQ2FyKSB7XG4gIGNvbnN0IGNhckJsb2NrID0gY3JlYXRlTm9kZSgnY2FyLWJsb2NrJyk7XG4gIGNhckJsb2NrLmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcblxuICBjb25zdCBjYXJNb2RpZmllcnMgPSBjcmVhdGVOb2RlKCdtb2RpZmllcicpO1xuXG4gIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc2VsZWN0Jyk7XG4gIHNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdF9faW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGVkaXRJbnB1dC52YWx1ZSA9IGNhci5uYW1lO1xuICAgIGVkaXRJbnB1dC5kYXRhc2V0LmNhcklkID0gYCR7Y2FyLmlkfWA7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVtb3ZlJyk7XG4gIGNvbnN0IHJlbW92ZU9wdGlvbnMgPSB7XG4gICAgdXBkYXRlSGVhZGVyOiB0cnVlLFxuICAgIHVwZGF0ZVBhZ2luYXRpb246IHRydWUsXG4gICAgdXBkYXRlUGFnZU51bWJlcjogdHJ1ZSxcbiAgfVxuICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgcmVtb3ZlQ2FyKGNhci5pZCk7XG4gICAgY2FyQmxvY2sucmVtb3ZlKCk7XG4gICAgY29uc3QgY2Fyc0hlYWRlckFtb3VudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICBpZiAoY2Fyc0hlYWRlckFtb3VudEJsb2NrICYmIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCkge1xuICAgICAgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ID0gYCR7K2NhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCAtIDF9YDtcbiAgICB9XG4gICAgYXdhaXQgZGVsZXRlV2lubmVyKGNhci5pZCk7XG5cbiAgICBjb25zdCBjYXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FycycpO1xuICAgIGNvbnN0IGN1cnJlbnRHYXJhZ2VQYWdlID0gZ2V0Q3VycmVudEdhcmFnZVBhZ2UoKTtcbiAgICBpZiAoY2Fyc0Jsb2NrPy5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCAmJiBjdXJyZW50R2FyYWdlUGFnZSAhPT0gJzEnKSBzZXRDdXJyZW50R2FyYWdlUGFnZSgrY3VycmVudEdhcmFnZVBhZ2UgLSAxKTtcbiAgICB1cGRhdGVHYXJhZ2VQYWdlKHJlbW92ZU9wdGlvbnMpO1xuICB9KTtcblxuICBjYXJNb2RpZmllcnMuYXBwZW5kKHNlbGVjdEJ1dHRvbiwgcmVtb3ZlQnV0dG9uKTtcblxuICBjb25zdCBjYXJOYW1lID0gY3JlYXRlTm9kZSgnbmFtZScsIGNhci5uYW1lKTtcbiAgY29uc3QgY2FySWNvbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhckljb25CbG9jay5pbm5lckhUTUwgPSByZW5kZXJDb2xvclN2ZyhjYXIuY29sb3IpO1xuICBjYXJJY29uQmxvY2suY2xhc3NOYW1lID0gJ2Nhcic7XG5cbiAgY29uc3QgZmxhZ0ljb25CbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vZmxhZy5zdmcnLCAnZmxhZycpO1xuICBjb25zdCBjb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlQnV0dG9uKCdzdGFydCcpO1xuICBjb25zdCBzdG9wID0gY3JlYXRlQnV0dG9uKCdzdG9wJyk7XG4gIHN0YXJ0LmRpc2FibGVkID0gZmFsc2U7XG4gIHN0b3AuZGlzYWJsZWQgPSB0cnVlO1xuICBzdGFydC5kYXRhc2V0LmNhcklkID0gYCR7Y2FyLmlkfWA7XG4gIGxldCBjYXJBbmltYXRpb25JbnRlcnZhbElkID0gMDtcbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgc3RhcnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uX19kaXNhYmxlZCcpO1xuICAgIHN0YXJ0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25zdCBzdGFydFJhY2UgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGF3YWl0IHN0YXJ0U3RvcENhcihjYXIuaWQsICdzdGFydGVkJyk7XG4gICAgY29uc3QgZHJpdmVBbmltYXRpb25TdGVwID0gZ2V0RHJpdmVTdGVwKHZlbG9jaXR5KTtcbiAgICBzdG9wLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBjYXJBbmltYXRpb25JbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChjYXJJY29uQmxvY2spIHtcbiAgICAgICAgaWYgKCtjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlLnNsaWNlKDAsIC0xKSA+PSAxMDApIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICAgICAgICAgIGNvbnN0IGVuZFJhY2UgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgICAgICBjb25zdCByYWNlRHVyYXRpb24gPSAoKGVuZFJhY2UgLSBzdGFydFJhY2UpIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmFjZScpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JhY2UnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBhbGVydChgJHtjYXIubmFtZX0gaGFzIHdvbiFcXG5UaW1lOiAke3JhY2VEdXJhdGlvbn1zYCk7XG4gICAgICAgICAgICBjb25zdCBjYXJXaW4gPSBhd2FpdCBnZXRXaW5uZXIoY2FyLmlkKTtcbiAgICAgICAgICAgIGlmIChjYXJXaW4gPT09IDQwNCkge1xuICAgICAgICAgICAgICBjcmVhdGVXaW5uZXIoY2FyLmlkLCArcmFjZUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgY29uc3QgcmVjb3Jkc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzX19hbW91bnQnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZHNBbW91bnQgJiYgcmVjb3Jkc0Ftb3VudC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIHJlY29yZHNBbW91bnQudGV4dENvbnRlbnQgPSBgJHsrcmVjb3Jkc0Ftb3VudC50ZXh0Q29udGVudCArIDF9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3VGltZSA9ICtyYWNlRHVyYXRpb24gPCBjYXJXaW4udGltZSA/ICtyYWNlRHVyYXRpb24gOiBjYXJXaW4udGltZTtcbiAgICAgICAgICAgICAgdXBkYXRlV2lubmVyKGNhci5pZCwgY2FyV2luLndpbnMgKyAxLCArbmV3VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRlVmFsdWUgPSBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlO1xuICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVWYWx1ZSA9IGN1cnJlbnRUcmFuc2xhdGVWYWx1ZSA/IGAkeytjdXJyZW50VHJhbnNsYXRlVmFsdWUuc2xpY2UoMCwgLTEpICsgZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYCA6IGAke2RyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2V9JWA7XG4gICAgICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSBuZXdUcmFuc2xhdGVWYWx1ZTtcbiAgICAgIH1cbiAgICB9LCBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlKTtcbiAgICBjYXJCbG9jay5kYXRhc2V0LmludGVydmFsSWQgPSBgJHtjYXJBbmltYXRpb25JbnRlcnZhbElkfWA7XG4gICAgY29uc3QgaXNFbmdpbmVPayA9IGF3YWl0IGNoZWNrRW5naW5lKGNhci5pZCk7XG4gICAgaWYgKCFpc0VuZ2luZU9rKSBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICB9KTtcbiAgc3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdG9wLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdGFydC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHN0YXJ0U3RvcENhcihjYXIuaWQsICdzdG9wcGVkJyk7XG4gICAgY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZSA9ICcnO1xuICAgIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gIH0pO1xuICBjb250cm9scy5hcHBlbmQoc3RhcnQsIHN0b3ApO1xuXG4gIGNvbnN0IHJhY2UgPSBjcmVhdGVOb2RlKCdyYWNlJyk7XG4gIHJhY2UuYXBwZW5kKGNhckljb25CbG9jaywgZmxhZ0ljb25CbG9jayk7XG5cbiAgY2FyQmxvY2suYXBwZW5kKGNhck1vZGlmaWVycywgY2FyTmFtZSwgY29udHJvbHMsIHJhY2UpO1xuICByZXR1cm4gY2FyQmxvY2s7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckNhcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzJyk/LnJlbW92ZSgpO1xuICBjb25zdCBjYXJzID0gY3JlYXRlTm9kZSgnY2FycycpO1xuICBjb25zdCBnYXJhZ2VQYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FyYWdlUGFnZScpO1xuICBsZXQgYWxsQ2FycyA9IFtdO1xuICBpZiAoZ2FyYWdlUGFnZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyc1BlckdhcmFnZVBhZ2U7IGkgKz0gMSkge1xuICAgICAgYWxsQ2FycyA9IGF3YWl0IGdldEFsbENhcnMoeyBfbGltaXQ6IGNhcnNQZXJHYXJhZ2VQYWdlLCBfcGFnZTogKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKSB8fCAnMScpIH0pO1xuICAgIH1cbiAgfVxuICBhbGxDYXJzLmZvckVhY2goKGNhcjogSUNhcikgPT4ge1xuICAgIGNhcnMuYXBwZW5kKHJlbmRlclNwZWNpZmljQ2FyKGNhcikpO1xuICB9KTtcbiAgcmV0dXJuIGNhcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhcnM7XG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGJyYW5kcywgbW9kZWxzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMtbmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ2FycywgeyByZW5kZXJTcGVjaWZpY0NhciB9IGZyb20gJy4vZ2FyYWdlLWNhcnMnO1xuaW1wb3J0IHsgY2Fyc1RvR2VuZXJhdGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5mdW5jdGlvbiByZW5kZXJHYXJhZ2VDb250cm9scygpIHtcbiAgY29uc3QgZ2FyYWdlQ29udHJvbHMgPSBjcmVhdGVOb2RlKCdjb250cm9scycpO1xuXG4gIGNvbnN0IHJhY2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3JhY2UnKTtcbiAgcmFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ3RydWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zdGFydCcpLmZvckVhY2goKGVsKSA9PiAoZWwgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCkpO1xuICB9KTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3Jlc2V0Jyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbl9fc3RvcCcpLmZvckVhY2goKGVsKSA9PiAoZWwgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCkpKTtcbiAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2dlbmVyYXRlJyk7XG4gIGdlbmVyYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dF9fZ2FyYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnNUb0dlbmVyYXRlOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJhbmRCcmFuZCA9IGJyYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBicmFuZHMubGVuZ3RoKV07XG4gICAgICBjb25zdCByYW5kTW9kZWwgPSBtb2RlbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9kZWxzLmxlbmd0aCldO1xuICAgICAgY29uc3QgY2FyTmFtZSA9IGAke3JhbmRCcmFuZH0gJHtyYW5kTW9kZWx9YDtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogY2FyTmFtZSxcbiAgICAgICAgY29sb3I6IGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWAsXG4gICAgICB9O1xuICAgICAgcmVzdWx0cy5wdXNoKGNyZWF0ZUNhcihjYXIpKTtcbiAgICB9XG4gICAgY29uc3QgZ2FyYWdlQ2FycyA9IGF3YWl0IHJlbmRlckdhcmFnZUNhcnMoKTtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xuICAgIGdhcmFnZVZpZXc/LmFwcGVuZChnYXJhZ2VDYXJzKTtcblxuICAgIGNvbnN0IGNhcnNIZWFkZXJBbW91bnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZhbHVlJyk7XG4gICAgaWYgKGNhcnNIZWFkZXJBbW91bnRCbG9jayAmJiBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQpIHtcbiAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgKyBjYXJzVG9HZW5lcmF0ZX1gO1xuICAgIH1cbiAgfSk7XG5cbiAgZ2FyYWdlQ29udHJvbHMuYXBwZW5kKHJhY2VCdXR0b24sIHJlc2V0QnV0dG9uLCBnZW5lcmF0ZUJ1dHRvbik7XG4gIHJldHVybiBnYXJhZ2VDb250cm9scztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlQ29udHJvbHM7XG4iLCJpbXBvcnQgeyBjYXJzUGVyR2FyYWdlUGFnZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRBbGxDYXJzLCBnZXRDYXJzQW1vdW50IH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uLCBjcmVhdGVOb2RlLCBnZXRDdXJyZW50R2FyYWdlUGFnZSwgc2V0Q3VycmVudEdhcmFnZVBhZ2UgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB1cGRhdGVHYXJhZ2VQYWdlIGZyb20gJy4uL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC91cGRhdGUtZ2FyYWdlLWR5bmFtaWMtY29udGVudCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ2FycyBmcm9tICcuL2dhcmFnZS1jYXJzJztcblxuY29uc3QgdXBkYXRlR2FyYWdlUGFnZU9wdGlvbnMgPSB7XG4gIHVwZGF0ZVBhZ2luYXRpb246IHRydWUsXG4gIHVwZGF0ZVBhZ2VOdW1iZXI6IHRydWUsXG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQYWdlQmxvY2soKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcicpO1xuICBjb25zdCBwYWdlTnVtYmVyTGFiZWwgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fbGFiZWwnLCAnUGFnZSAjJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX192YWx1ZScsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKSB8fCAnMScpO1xuICBwYWdlTnVtYmVyLmFwcGVuZChwYWdlTnVtYmVyTGFiZWwsIHBhZ2VOdW1iZXJWYWx1ZSk7XG4gIHJldHVybiBwYWdlTnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyR2FyYWdlUGFnaW5hdGlvbigpIHtcbiAgY29uc3QgcGFnaW5hdGlvbkJsb2NrID0gY3JlYXRlTm9kZSgncGFnaW5hdGlvbicpO1xuICBsZXQgY3VycmVudFBhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXJhZ2VQYWdlJyk7XG4gIGNvbnN0IHByZXZpb3VzID0gY3JlYXRlQnV0dG9uKCdQcmV2Jyk7XG4gIGlmIChjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSA9PT0gJzEnKSBwcmV2aW91cy5kaXNhYmxlZCA9IHRydWU7XG5cbiAgY29uc3QgbmV4dCA9IGNyZWF0ZUJ1dHRvbignTmV4dCcpO1xuICBwcmV2aW91cy5jbGFzc0xpc3QuYWRkKCdwcmV2X19nYXJhZ2UnKTtcbiAgbmV4dC5jbGFzc0xpc3QuYWRkKCduZXh0X19nYXJhZ2UnKTtcbiAgbGV0IGNhcnNBbW91bnQgPSAoYXdhaXQgZ2V0QWxsQ2FycygpKS5sZW5ndGg7XG4gIGlmIChjYXJzQW1vdW50ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgaWYgKCtjYXJzQW1vdW50IDwgY2Fyc1BlckdhcmFnZVBhZ2UgKiArY3VycmVudFBhZ2UpIG5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBuZXh0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3Jlc2V0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgaWYgKHJlc2V0QnV0dG9uKSByZXNldEJ1dHRvbi5jbGljaygpO1xuICAgIGNhcnNBbW91bnQgPSBhd2FpdCBnZXRDYXJzQW1vdW50KCk7XG5cbiAgICBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRHYXJhZ2VQYWdlKCk7XG4gICAgc2V0Q3VycmVudEdhcmFnZVBhZ2UoK2N1cnJlbnRQYWdlICsgMSk7XG4gICAgY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSArIDE7XG5cbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJyk7XG4gICAgZ2FyYWdlVmlldz8uYXBwZW5kKGdhcmFnZUNhcnMpO1xuXG4gICAgYXdhaXQgdXBkYXRlR2FyYWdlUGFnZSh1cGRhdGVHYXJhZ2VQYWdlT3B0aW9ucyk7XG4gIH0pO1xuXG4gIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIHByZXZpb3VzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRHYXJhZ2VQYWdlKCk7XG4gICAgc2V0Q3VycmVudEdhcmFnZVBhZ2UoK2N1cnJlbnRQYWdlIC0gMSk7XG5cbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJyk7XG4gICAgZ2FyYWdlVmlldz8uYXBwZW5kKGdhcmFnZUNhcnMpO1xuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19yZXNldCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGlmIChyZXNldEJ1dHRvbikgcmVzZXRCdXR0b24uY2xpY2soKTtcblxuICAgIHVwZGF0ZUdhcmFnZVBhZ2UodXBkYXRlR2FyYWdlUGFnZU9wdGlvbnMpO1xuICB9KTtcblxuICBjb25zdCBjdXJyZW50UGFnZUJsb2NrID0gcmVuZGVyQ3VycmVudFBhZ2VCbG9jaygpO1xuICBwYWdpbmF0aW9uQmxvY2suYXBwZW5kKHByZXZpb3VzLCBjdXJyZW50UGFnZUJsb2NrLCBuZXh0KTtcbiAgcmV0dXJuIHBhZ2luYXRpb25CbG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlUGFnaW5hdGlvbjtcbiIsImltcG9ydCByZW5kZXJDYXJNYW5hZ2VtZW50IGZyb20gJy4vY29tcG9uZW50cy9jYXItbWFuYWdlbWVudCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ29udHJvbHMgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scyc7XG5pbXBvcnQgcmVuZGVyQ2FycyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMnO1xuaW1wb3J0IHsgcmVuZGVyR2FyYWdlUGFnaW5hdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJHYXJhZ2VIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jYXJzLWhlYWRlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZVBhZ2UoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAnZmFsc2UnKTtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FyYWdlUGFnZScsICcxJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGdhcmFnZVZpZXcgPSBjcmVhdGVOb2RlKCdnYXJhZ2UnKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBjb25zdCBjYXJNYW5hZ2VtZW50ID0gcmVuZGVyQ2FyTWFuYWdlbWVudCgpO1xuICAgIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gcmVuZGVyR2FyYWdlQ29udHJvbHMoKTtcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gYXdhaXQgcmVuZGVyR2FyYWdlUGFnaW5hdGlvbigpO1xuICAgIGNvbnN0IGhlYWRlciA9IGF3YWl0IHJlbmRlckdhcmFnZUhlYWRlcigpO1xuICAgIGNvbnN0IGdhcmFnZUNhcnMgPSBhd2FpdCByZW5kZXJDYXJzKCk7XG5cbiAgICBnYXJhZ2VWaWV3LmFwcGVuZChjYXJNYW5hZ2VtZW50LCBnYXJhZ2VDb250cm9scywgcGFnaW5hdGlvbiwgaGVhZGVyLCBnYXJhZ2VDYXJzKTtcbiAgICBib2R5LmFwcGVuZChnYXJhZ2VWaWV3KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VQYWdlO1xuIiwiaW1wb3J0IHsgZ2V0Q2Fyc0Ftb3VudCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fyc1wiO1xuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVHYXJhZ2VIZWFkZXIgKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICBpZiAoaGVhZGVyKSB7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYXdhaXQgZ2V0Q2Fyc0Ftb3VudCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUdhcmFnZUhlYWRlcjtcbiIsImltcG9ydCB7IGdldEN1cnJlbnRHYXJhZ2VQYWdlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2hlbHBlcnNcIjtcblxuZnVuY3Rpb24gdXBkYXRlR2FyYWdlUGFnZU51bWJlcigpIHtcbiAgY29uc3QgcGFnZU51bWJlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtbnVtYmVyX192YWx1ZScpO1xuICBpZiAocGFnZU51bWJlckJsb2NrKSB7XG4gICAgcGFnZU51bWJlckJsb2NrLnRleHRDb250ZW50ID0gZ2V0Q3VycmVudEdhcmFnZVBhZ2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHYXJhZ2VQYWdlTnVtYmVyO1xuIiwiaW1wb3J0IHsgY2Fyc1BlckdhcmFnZVBhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBnZXRDYXJzQW1vdW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50R2FyYWdlUGFnZSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByZXZCdXR0b24oKSB7XG5cbiAgY29uc3QgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50R2FyYWdlUGFnZSgpO1xuICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2X19nYXJhZ2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgaWYgKGN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlID09PSAnMScgJiYgcHJldmlvdXNCdXR0b24pIHtcbiAgICBwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0gZWxzZSBwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVOZXh0QnV0dG9uKCkge1xuICBjb25zdCBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRHYXJhZ2VQYWdlKCk7XG4gIGNvbnN0IGNhcnNBbW91bnQgPSBhd2FpdCBnZXRDYXJzQW1vdW50KCk7XG4gIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dF9fZ2FyYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGNvbnNvbGUubG9nKGNhcnNBbW91bnQsIGNhcnNQZXJHYXJhZ2VQYWdlLCBjdXJyZW50UGFnZSk7XG4gIGlmIChjYXJzQW1vdW50ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgaWYgKCtjYXJzQW1vdW50IDw9IGNhcnNQZXJHYXJhZ2VQYWdlICogK2N1cnJlbnRQYWdlKSBuZXh0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBlbHNlIG5leHRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVHYXJhZ2VQYWdpbmF0aW9uKCkge1xuICB1cGRhdGVQcmV2QnV0dG9uKCk7XG4gIHVwZGF0ZU5leHRCdXR0b24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlR2FyYWdlUGFnaW5hdGlvbjsiLCJpbXBvcnQgcmVuZGVyQ2FycyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9nYXJhZ2UtY2Fyc1wiO1xuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVHYXJhZ2VUYWJsZSgpIHtcbiAgY29uc3QgY2FycyA9IGF3YWl0IHJlbmRlckNhcnMoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpPy5hcHBlbmQoY2Fycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUdhcmFnZVRhYmxlO1xuIiwiaW1wb3J0IElVcGRhdGVHYXJhZ2VQYWdlT3B0aW9ucyBmcm9tIFwiLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy91cGRhdGUtZ2FyYWdlLXBhZ2VcIjtcbmltcG9ydCB1cGRhdGVHYXJhZ2VIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy50cy91cGRhdGUtY2Fycy1hbW91bnRcIjtcbmltcG9ydCB1cGRhdGVHYXJhZ2VQYWdlTnVtYmVyIGZyb20gXCIuL2NvbXBvbmVudHMudHMvdXBkYXRlLWdhcmFnZS1wYWdlLW51bWJlclwiO1xuaW1wb3J0IHVwZGF0ZUdhcmFnZVBhZ2luYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy50cy91cGRhdGUtZ2FyYWdlLXBhZ2luYXRpb25cIjtcbmltcG9ydCB1cGRhdGVHYXJhZ2VUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzLnRzL3VwZGF0ZS1nYXJhZ2UtdGFibGVcIjtcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2FyYWdlUGFnZSh1cGRhdGVQYWdlT3B0aW9uczogSVVwZGF0ZUdhcmFnZVBhZ2VPcHRpb25zKSB7XG4gIGlmICh1cGRhdGVQYWdlT3B0aW9ucy51cGRhdGVIZWFkZXIpIHVwZGF0ZUdhcmFnZUhlYWRlcigpO1xuICBpZiAodXBkYXRlUGFnZU9wdGlvbnMudXBkYXRlUGFnaW5hdGlvbikgdXBkYXRlR2FyYWdlUGFnaW5hdGlvbigpO1xuICBpZiAodXBkYXRlUGFnZU9wdGlvbnMudXBkYXRlUGFnZU51bWJlcikgdXBkYXRlR2FyYWdlUGFnZU51bWJlcigpO1xuICB1cGRhdGVHYXJhZ2VUYWJsZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHYXJhZ2VQYWdlO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgcmVuZGVyUmVjb3Jkc1BhZ2UgZnJvbSAnLi9yZWNvcmRzL3JlY29yZHMnO1xuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgY29uc3QgaGVhZGVyQnV0dG9ucyA9IGNyZWF0ZU5vZGUoJ2J1dHRvbnMnKTtcblxuICBjb25zdCB0b0dhcmFnZSA9IGNyZWF0ZUJ1dHRvbignZ2FyYWdlJyk7XG4gIHRvR2FyYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgcmVjb3Jkc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChnYXJhZ2VWaWV3ICYmIHJlY29yZHNWaWV3KSB7XG4gICAgICBnYXJhZ2VWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmVjb3Jkc1ZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRvUmVjb3JkcyA9IGNyZWF0ZUJ1dHRvbigncmVjb3JkcycpO1xuICB0b1JlY29yZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCByZWNvcmRzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGdhcmFnZVZpZXcgJiYgcmVjb3Jkc1ZpZXcpIHtcbiAgICAgIGdhcmFnZVZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJlY29yZHNWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmVuZGVyUmVjb3Jkc1BhZ2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhlYWRlckJ1dHRvbnMuYXBwZW5kKHRvR2FyYWdlLCB0b1JlY29yZHMpO1xuXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyQnV0dG9ucyk7XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keT8uYXBwZW5kKGhlYWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlcjtcbiIsImltcG9ydCB7IGdldFJlY29yZHNBbW91bnQgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IHdpbm5lcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHJlbmRlclRhYmxlIGZyb20gJy4vcmVuZGVyLXRhYmxlJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyV2lubmVyc1BhZ2luYXRpb24oKSB7XG4gIGNvbnN0IHBhZ2luYXRpb24gPSBjcmVhdGVOb2RlKCd3aW5uZXJzLXBhZ2luYXRpb24nKTtcbiAgY29uc3QgcHJldmlvdXMgPSBjcmVhdGVCdXR0b24oJ1ByZXYnKTtcbiAgY29uc3QgbmV4dCA9IGNyZWF0ZUJ1dHRvbignTmV4dCcpO1xuXG4gIGxldCBjdXJyZW50UGFnZSA9IDA7XG4gIGNvbnN0IHRtcFBhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpO1xuICBpZiAodG1wUGFnZSkge1xuICAgIGN1cnJlbnRQYWdlID0gK3RtcFBhZ2U7XG4gIH1cbiAgaWYgKGN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlID09PSAxKSB7XG4gICAgcHJldmlvdXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgbGV0IHJlY29yZHNBbW91bnQgPSBhd2FpdCBnZXRSZWNvcmRzQW1vdW50KCkgfHwgMTtcblxuICBpZiAocmVjb3Jkc0Ftb3VudCAmJiBjdXJyZW50UGFnZSkge1xuICAgIGlmICgrcmVjb3Jkc0Ftb3VudCA8ICh3aW5uZXJzQ29uZmlnLmxpbWl0ICogK2N1cnJlbnRQYWdlKSArIDEpIG5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV4dC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG1wUGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNQYWdlJyk7XG4gICAgaWYgKHRtcFBhZ2UpIHtcbiAgICAgIGN1cnJlbnRQYWdlID0gK3RtcFBhZ2U7XG4gICAgfVxuICAgIFxuICAgIGN1cnJlbnRQYWdlIC09IDE7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc1BhZ2UnLCBgJHtjdXJyZW50UGFnZX1gKTtcblxuICAgIGlmIChjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSA9PT0gMSkge1xuICAgICAgcHJldmlvdXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZW5kZXJUYWJsZSgpO1xuICB9KTtcblxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByZXZpb3VzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRQYWdlID0gMDtcbiAgICBjb25zdCB0bXBQYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc1BhZ2UnKTtcbiAgICBpZiAodG1wUGFnZSkge1xuICAgICAgY3VycmVudFBhZ2UgPSArdG1wUGFnZTtcbiAgICB9XG4gICAgY3VycmVudFBhZ2UgKz0gMTtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzUGFnZScsIGAke2N1cnJlbnRQYWdlfWApO1xuICAgIGlmIChyZWNvcmRzQW1vdW50ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgICBpZiAoK3JlY29yZHNBbW91bnQgPCAod2lubmVyc0NvbmZpZy5saW1pdCAqICtjdXJyZW50UGFnZSkgKyAxKSBuZXh0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVuZGVyVGFibGUoKTtcbiAgfSk7XG5cbiAgcGFnaW5hdGlvbi5hcHBlbmQocHJldmlvdXMsIG5leHQpO1xuICByZXR1cm4gcGFnaW5hdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2lubmVyc1BhZ2luYXRpb247XG4iLCJpbXBvcnQgeyBnZXRXaW5uZXJzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IHsgY3JlYXRlVGFibGVDZWxsLCBjcmVhdGVUYWJsZUhlYWRlciwgcmVuZGVyQ29sb3JTdmcgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldEFsbENhcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgSVdpbm5lciBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3dpbm5lcic7XG5pbXBvcnQgeyB3aW5uZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB1cmxXaW5uZXJzU29ydCBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VybC13aW5uZXJzLXNvcnQnO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJUYWJsZSh1cmxPcHRpb25zPzogdXJsV2lubmVyc1NvcnQpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICB0YWJsZS5jbGFzc05hbWUgPSAnd2lubmVycyc7XG4gIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGhlYWRlclJvdy5jbGFzc05hbWUgPSAnd2lubmVyc19faGVhZGVyJztcbiAgY29uc3QgdGFibGVIZWFkZXJOdW1iZXIgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19udW1iZXInLCAnIycpO1xuICBjb25zdCB0YWJsZUhlYWRlckNhciA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX2NhcicsICdDYXInKTtcbiAgY29uc3QgdGFibGVIZWFkZXJOYW1lID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fbmFtZScsICdOYW1lJyk7XG5cbiAgY29uc3QgdGFibGVIZWFkZXJXaW5zID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fd2lucyBjbGlja2FibGUnLCAnV2lucyDih4UnKTtcbiAgdGFibGVIZWFkZXJXaW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzb3J0OiAnd2lucycsXG4gICAgICBvcmRlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnID8gJ0FTQycgOiAnREVTQycsXG4gICAgfTtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnZGVzYycpO1xuICAgIH0gZWxzZSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnYXNjJyk7XG4gICAgcmVuZGVyVGFibGUob3B0aW9ucyk7XG4gIH0pO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGVyVGltZSA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX3RpbWUgY2xpY2thYmxlJywgJ1RpbWUg4oeFJyk7XG4gIHRhYmxlSGVhZGVyVGltZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc29ydDogJ3RpbWUnLFxuICAgICAgb3JkZXI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNPcmRlcicpID09PSAnYXNjJyA/ICdBU0MnIDogJ0RFU0MnLFxuICAgIH07XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNPcmRlcicpID09PSAnYXNjJykge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc09yZGVyJywgJ2Rlc2MnKTtcbiAgICB9IGVsc2Ugc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc09yZGVyJywgJ2FzYycpO1xuICAgIHJlbmRlclRhYmxlKG9wdGlvbnMpO1xuICB9KTtcblxuICBoZWFkZXJSb3cuYXBwZW5kKFxuICAgIHRhYmxlSGVhZGVyTnVtYmVyLFxuICAgIHRhYmxlSGVhZGVyQ2FyLFxuICAgIHRhYmxlSGVhZGVyTmFtZSxcbiAgICB0YWJsZUhlYWRlcldpbnMsXG4gICAgdGFibGVIZWFkZXJUaW1lLFxuICApO1xuICB0YWJsZS5hcHBlbmQoaGVhZGVyUm93KTtcbiAgY29uc3Qgd2lubmVycyA9IGF3YWl0IGdldFdpbm5lcnModXJsT3B0aW9ucyk7XG4gIGxldCBjb3VudGVyID0gMCArIHdpbm5lcnNDb25maWcubGltaXQgKiAoKyhzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpIHx8IDEpIC0gMSk7XG4gIGNvbnN0IGNhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIHdpbm5lcnMuZm9yRWFjaChhc3luYyAod2lubmVyOiBJV2lubmVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGRhdGFSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG51bWJlckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7Y291bnRlcn1gKTtcblxuICAgIGNvbnN0IGNhckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGxldCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcnNbaV0uaWQgPT09IHdpbm5lci5pZCkge1xuICAgICAgICBuYW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChjYXJzW2ldLm5hbWUpO1xuICAgICAgICBjYXJDZWxsLmlubmVySFRNTCA9IHJlbmRlckNvbG9yU3ZnKGNhcnNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3aW5zQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChgJHt3aW5uZXIud2luc31gKTtcbiAgICBjb25zdCB0aW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChgJHt3aW5uZXIudGltZX1gKTtcbiAgICBkYXRhUm93LmFwcGVuZChudW1iZXJDZWxsLCBjYXJDZWxsLCBuYW1lQ2VsbCwgd2luc0NlbGwsIHRpbWVDZWxsKTtcbiAgICB0YWJsZS5hcHBlbmQoZGF0YVJvdyk7XG4gIH0pO1xuICBjb25zdCByZWNvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKTtcbiAgaWYgKHJlY29yZHM/LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzJykpIHJlY29yZHMucXVlcnlTZWxlY3RvcignLndpbm5lcnMnKT8ucmVtb3ZlKCk7XG4gIHJlY29yZHM/LmFwcGVuZCh0YWJsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhYmxlO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0UmVjb3Jkc0Ftb3VudCB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyV2lubmVySGVhZGVyKCkge1xuICBjb25zdCByZWNvcmRzTGFiZWwgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19sYWJlbCcsICdSZWNvcmRzOicpO1xuICBjb25zdCByZWNvcmRzQW1vdW50ID0gYXdhaXQgZ2V0UmVjb3Jkc0Ftb3VudCgpO1xuICBjb25zdCByZWNvcmRzVmFsdWUgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19hbW91bnQnLCByZWNvcmRzQW1vdW50IHx8ICcwJyk7XG4gIGNvbnN0IHJlY29yZHNBbW91bnRCbG9jayA9IGNyZWF0ZU5vZGUoJ3JlY29yZHNfX2Ftb3VudC1ibG9jaycpO1xuICByZWNvcmRzQW1vdW50QmxvY2suYXBwZW5kKHJlY29yZHNMYWJlbCwgcmVjb3Jkc1ZhbHVlKTtcbiAgcmV0dXJuIHJlY29yZHNBbW91bnRCbG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2lubmVySGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uJztcbmltcG9ydCByZW5kZXJUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlJztcbmltcG9ydCByZW5kZXJXaW5uZXJIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL3dpbm5lci1oZWFkZXInO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJSZWNvcmRzUGFnZSgpIHtcbiAgaWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzUGFnZScsICcxJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGlmIChib2R5KSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJyk7XG4gICAgaWYgKHJlY29yZHMpIHJlY29yZHMucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgcmVjb3JkcyA9IGNyZWF0ZU5vZGUoJ3JlY29yZHMnKTtcbiAgY29uc3QgcGFnaW5hdGlvbiA9IGF3YWl0IHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uKCk7XG4gIHJlY29yZHMuYXBwZW5kKHBhZ2luYXRpb24pO1xuICBjb25zdCByZWNvcmRzSGVhZGVyID0gYXdhaXQgcmVuZGVyV2lubmVySGVhZGVyKCk7XG4gIHJlY29yZHMuYXBwZW5kKHJlY29yZHNIZWFkZXIpO1xuICByZW5kZXJUYWJsZSgpO1xuICBib2R5Py5hcHBlbmQocmVjb3Jkcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclJlY29yZHNQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVyR2FyYWdlUGFnZSBmcm9tICcuL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2dhcmFnZSc7XG5pbXBvcnQgcmVuZGVyUmVjb3Jkc1BhZ2UgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcyc7XG5pbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9oZWFkZXInO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJBcHAoKSB7XG4gIHJlbmRlckhlYWRlcigpO1xuICByZW5kZXJHYXJhZ2VQYWdlKCk7XG4gIGF3YWl0IHJlbmRlclJlY29yZHNQYWdlKCk7XG4gIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5yZW5kZXJBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==