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

/***/ "./src/scripts/pages/garage/components/drive-car.ts":
/*!**********************************************************!*\
  !*** ./src/scripts/pages/garage/components/drive-car.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "driveCar": () => (/* binding */ driveCar),
/* harmony export */   "startRace": () => (/* binding */ startRace),
/* harmony export */   "startSingleCar": () => (/* binding */ startSingleCar)
/* harmony export */ });
/* harmony import */ var _data_controller_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-controller/engine */ "./src/scripts/data-controller/engine.ts");
/* harmony import */ var _animation_drive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animation/drive */ "./src/scripts/animation/drive.ts");
/* harmony import */ var _data_controller_records__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data-controller/records */ "./src/scripts/data-controller/records.ts");
/* harmony import */ var _data_controller_cars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data-controller/cars */ "./src/scripts/data-controller/cars.ts");





async function sentDriveRequests(carId) {
    return (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_0__.startStopCar)(carId, 'started');
}
async function driveCar(carBlock) {
    const start = carBlock.querySelector('.button__start');
    start.classList.add('button__disabled');
    start.disabled = true;
    const carId = +(carBlock.dataset.carId || 1);
    return await sentDriveRequests(carId);
    // const velocity = await startStopCar(carId, 'started');
    // const driveAnimationStep = getDriveStep(velocity);
    // const carIconBlock = carBlock.querySelector('.car') as HTMLDivElement;
    // const stop = carBlock.querySelector('.button__stop') as HTMLButtonElement;
    // const startRace = new Date().valueOf();
    // stop.disabled = false;
    // const carAnimationIntervalId = window.setInterval(async () => {
    //   if (carIconBlock) {
    //     if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
    //       clearInterval(carAnimationIntervalId);
    //       const endRace = new Date().valueOf();
    //       const raceDuration = ((endRace - startRace) / 1000).toFixed(2);
    //       if (sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true') {
    //         sessionStorage.setItem('race', 'false');
    //         const car = await getCar(carId);
    //         alert(`${car.name} has won!\nTime: ${raceDuration}s`);
    //         const carWin = await getWinner(carId);
    //         if (carWin === 404) {
    //           createWinner(carId, +raceDuration);
    //           const recordsAmount = document.querySelector('.records__amount');
    //           if (recordsAmount && recordsAmount.textContent) {
    //             recordsAmount.textContent = `${+recordsAmount.textContent + 1}`;
    //           }
    //         } else {
    //           const newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
    //           updateWinner(carId, carWin.wins + 1, +newTime);
    //         }
    //       }
    //       return;
    //     }
    //     const currentTranslateValue = carIconBlock.style.translate;
    //     const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance}%` : `${driveAnimationStep.stepDistance}%`;
    //     carIconBlock.style.translate = newTranslateValue;
    //   }
    // }, driveAnimationStep.stepDistance);
    // carBlock.dataset[`intervalId`] = `${carAnimationIntervalId}`;
    // const isEngineOk = await checkEngine(carId);
    // if (!isEngineOk) clearInterval(carAnimationIntervalId);
    // return Promise;
}
;
async function startSingleCar(carBlock) {
    const start = carBlock.querySelector('.button__start');
    start.classList.add('button__disabled');
    start.disabled = true;
    const carId = +(carBlock.dataset.carId || 1);
    const velocity = await sentDriveRequests(carId);
    const driveAnimationStep = (0,_animation_drive__WEBPACK_IMPORTED_MODULE_1__["default"])(velocity);
    const carIconBlock = carBlock.querySelector('.car');
    const stop = carBlock.querySelector('.button__stop');
    const startRace = new Date().valueOf();
    stop.disabled = false;
    const carAnimationIntervalId = window.setInterval(async () => {
        if (carIconBlock) {
            if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
                clearInterval(carAnimationIntervalId);
                const endRace = new Date().valueOf();
                const raceDuration = ((endRace - startRace) / 1000).toFixed(2);
                if (sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true') {
                    sessionStorage.setItem('race', 'false');
                    const car = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_3__.getCar)(carId);
                    alert(`${car.name} has won!\nTime: ${raceDuration}s`);
                    const carWin = await (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_2__.getWinner)(carId);
                    if (carWin === 404) {
                        (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_2__.createWinner)(carId, +raceDuration);
                        const recordsAmount = document.querySelector('.records__amount');
                        if (recordsAmount && recordsAmount.textContent) {
                            recordsAmount.textContent = `${+recordsAmount.textContent + 1}`;
                        }
                    }
                    else {
                        const newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
                        (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_2__.updateWinner)(carId, carWin.wins + 1, +newTime);
                    }
                }
                return;
            }
            const currentTranslateValue = carIconBlock.style.translate;
            const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance}%` : `${driveAnimationStep.stepDistance}%`;
            carIconBlock.style.translate = newTranslateValue;
        }
    }, driveAnimationStep.stepDistance);
    carBlock.dataset[`intervalId`] = `${carAnimationIntervalId}`;
    const isEngineOk = await (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_0__.checkEngine)(carId);
    if (!isEngineOk)
        clearInterval(carAnimationIntervalId);
    return Promise;
}
async function startRace() {
    const raceButton = document.querySelector('.button__race');
    raceButton.disabled = true;
    const carBlocks = document.querySelectorAll('.car-block');
    const speeds = [];
    const speedsPromises = [];
    carBlocks.forEach(async (carBlock) => {
        const carId = +(carBlock.dataset.carId || 1);
        const velocity = sentDriveRequests(carId);
        speedsPromises.push(velocity);
        speeds.push({
            carId,
            velocity,
        });
    });
    await Promise.all(speedsPromises);
    carBlocks.forEach(async (carBlock) => {
        let velocity = 1;
        const carId = +(carBlock.dataset.carId || 1);
        for (let i = 0; i < speeds.length; i++) {
            if (carId === speeds[i].carId) {
                velocity = await speeds[i].velocity;
                break;
            }
        }
        const driveAnimationStep = (0,_animation_drive__WEBPACK_IMPORTED_MODULE_1__["default"])(velocity);
        const carIconBlock = carBlock.querySelector('.car');
        const stop = carBlock.querySelector('.button__stop');
        stop.disabled = false;
        const startRaceDate = new Date().valueOf();
        const carAnimationIntervalId = window.setInterval(async () => {
            if (carIconBlock) {
                if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
                    clearInterval(carAnimationIntervalId);
                    const endRace = new Date().valueOf();
                    const raceDuration = ((endRace - startRaceDate) / 1000).toFixed(2);
                    if (sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true') {
                        sessionStorage.setItem('race', 'false');
                        const resetButton = document.querySelector('.button__reset');
                        resetButton.disabled = false;
                        const car = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_3__.getCar)(carId);
                        alert(`${car.name} has won!\nTime: ${raceDuration}s`);
                        const carWin = await (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_2__.getWinner)(carId);
                        if (carWin === 404) {
                            (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_2__.createWinner)(carId, +raceDuration);
                            const recordsAmount = document.querySelector('.records__amount');
                            if (recordsAmount && recordsAmount.textContent) {
                                recordsAmount.textContent = `${+recordsAmount.textContent + 1}`;
                            }
                        }
                        else {
                            const newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
                            (0,_data_controller_records__WEBPACK_IMPORTED_MODULE_2__.updateWinner)(carId, carWin.wins + 1, +newTime);
                        }
                    }
                    return;
                }
                const currentTranslateValue = carIconBlock.style.translate;
                const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance}%` : `${driveAnimationStep.stepDistance}%`;
                carIconBlock.style.translate = newTranslateValue;
            }
        }, driveAnimationStep.stepDistance);
        carBlock.dataset[`intervalId`] = `${carAnimationIntervalId}`;
        const isEngineOk = await (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_0__.checkEngine)(carId);
        if (!isEngineOk)
            clearInterval(carAnimationIntervalId);
        return Promise;
    });
}


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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/scripts/config.ts");
/* harmony import */ var _modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/update-dynamic-content/update-garage-dynamic-content */ "./src/scripts/pages/garage/modules/update-dynamic-content/update-garage-dynamic-content.ts");
/* harmony import */ var _drive_car__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drive-car */ "./src/scripts/pages/garage/components/drive-car.ts");







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
        (0,_modules_update_dynamic_content_update_garage_dynamic_content__WEBPACK_IMPORTED_MODULE_5__["default"])(removeOptions);
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
    start.addEventListener('click', async () => {
        (0,_drive_car__WEBPACK_IMPORTED_MODULE_6__.startSingleCar)(carBlock);
    });
    stop.addEventListener('click', async () => {
        stop.disabled = true;
        start.disabled = false;
        await (0,_data_controller_engine__WEBPACK_IMPORTED_MODULE_2__.startStopCar)(car.id, 'stopped');
        carIconBlock.style.translate = '';
        const carIntervalId = carBlock.dataset['intervalId'];
        console.log(carIntervalId);
        clearInterval(carIntervalId);
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
        for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_4__.carsPerGaragePage; i += 1) {
            allCars = await (0,_data_controller_cars__WEBPACK_IMPORTED_MODULE_1__.getAllCars)({ _limit: _config__WEBPACK_IMPORTED_MODULE_4__.carsPerGaragePage, _page: (sessionStorage.getItem('garagePage') || '1') });
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
/* harmony import */ var _drive_car__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drive-car */ "./src/scripts/pages/garage/components/drive-car.ts");






function renderGarageControls() {
    const garageControls = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createNode)('controls');
    const raceButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('race');
    raceButton.addEventListener('click', () => {
        sessionStorage.setItem('race', 'true');
        const stopButtons = document.querySelectorAll('.button__stop');
        stopButtons.forEach((button) => button.click());
        (0,_drive_car__WEBPACK_IMPORTED_MODULE_5__.startRace)();
    });
    const resetButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('reset');
    resetButton.disabled = true;
    resetButton.addEventListener('click', () => {
        document.querySelectorAll('.button__stop').forEach((el) => el.click());
        raceButton.disabled = false;
    });
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
        const raceButton = document.querySelector('.button__race');
        raceButton.disabled = false;
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
        const raceButton = document.querySelector('.button__race');
        raceButton.disabled = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTLFlBQVksQ0FBQyxRQUFnQjtJQUNwQyxNQUFNLElBQUksR0FBRywrREFBMEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxrRUFBNkIsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sVUFBVSxHQUFHLDhEQUF5QixHQUFHLElBQUksQ0FBQztJQUVwRCxNQUFNLFlBQVksR0FBRyx1REFBa0IsR0FBRyxVQUFVLENBQUM7SUFDckQsT0FBTztRQUNMLFlBQVk7UUFDWixJQUFJO0tBQ0wsQ0FBQztBQUNKLENBQUM7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickIsTUFBTSxNQUFNLEdBQUcsd0JBQXdCLENBQUM7QUFFeEMsTUFBTSxTQUFTLEdBQUc7SUFDdkIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixtQkFBbUIsRUFBRSxFQUFFO0lBQ3ZCLGVBQWUsRUFBRSxFQUFFO0lBQ25CLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVLLE1BQU0sYUFBYSxHQUFHO0lBQzNCLEtBQUssRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxLQUFLO0NBQ2IsQ0FBQztBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBRTVCLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCM0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0gsTUFBTSxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RwRjtBQUVuQyxNQUFNLFNBQVMsR0FBRyxHQUFHLDJDQUFNLFNBQVMsQ0FBQztBQUU5QixLQUFLLFVBQVUsVUFBVSxDQUFDLE9BQTBDO0lBQ3pFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLElBQUksT0FBTyxFQUFFO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNuQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBMkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEMsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQ2YsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFDRCxPQUFPLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVNLEtBQUssVUFBVSxNQUFNLENBQUMsRUFBVTtJQUNyQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtRQUNmLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsR0FBb0M7SUFDbEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUMxQixDQUFDLENBQUM7SUFFSCxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDZCxzQkFBc0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkI7SUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsRUFBVTtJQUN4QyxNQUFNLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRTtRQUMvQyxNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO1FBQ2QsMEJBQTBCO0tBQzNCO0FBQ0gsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxLQUFLLEdBQUcsS0FBSztJQUNyRSxNQUFNLEdBQUcsR0FBRztRQUNWLElBQUk7UUFDSixLQUFLO0tBQ04sQ0FBQztJQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBQy9DLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUMxQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxVQUFVLGFBQWE7SUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRWtDO0FBRW5DLE1BQU0sU0FBUyxHQUFHLEdBQUcsMkNBQU0sUUFBUSxDQUFDO0FBRTdCLEtBQUssVUFBVSxZQUFZLENBQUMsS0FBYSxFQUFFLE1BQTZCO0lBQzdFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQzFDLE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUMsQ0FBQztJQUNILElBQUksa0JBQWtCLENBQUMsRUFBRSxFQUFFO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUM5QixPQUFPLFFBQVEsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFFTSxLQUFLLFVBQVUsV0FBVyxDQUFDLEtBQWE7SUFDN0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2QyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDekMsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuQixFQUFFLEVBQUUsS0FBSztZQUNULE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUM7S0FDSCxDQUFDLENBQUM7SUFDSCxPQUFPLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztBQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmlEO0FBR2xELE1BQU0sVUFBVSxHQUFHLEdBQUcsMkNBQU0sVUFBVSxDQUFDO0FBRWhDLEtBQUssVUFBVSxVQUFVLENBQUMsYUFBOEI7SUFDN0QsSUFBSSxVQUFVLEdBQUcsa0RBQWEsQ0FBQztJQUMvQixJQUFJLGFBQWEsRUFBRTtRQUNqQixJQUFJLGFBQWEsQ0FBQyxLQUFLO1lBQUUsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSztRQUMvRCxJQUFJLGFBQWEsQ0FBQyxJQUFJO1lBQUUsVUFBVSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQUEsQ0FBQztLQUMvRDtJQUVELFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFaEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN0QyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLEdBQThCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLGNBQWMsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEVBQUU7UUFDckIsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDOUI7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFNBQVMsQ0FBQyxFQUFVO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsSUFBSSxhQUFhLENBQUMsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQzlCLENBQUM7QUFFTSxLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQVUsRUFBRSxJQUFZO0lBQ3pELE1BQU0sVUFBVSxHQUFHO1FBQ2pCLEVBQUU7UUFDRixJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUk7S0FDTCxDQUFDO0lBQ0YsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDbEQsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0tBQ2pDLENBQUMsQ0FBQztJQUNILElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFO1FBQzFCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUFTO0lBQzFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQzNDLE1BQU0sRUFBRSxRQUFRO0tBQ2pCLENBQUMsQ0FBQztJQUNILElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFO1FBQzFCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFDdkUsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDakMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDM0MsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkIsSUFBSTtZQUNKLElBQUk7U0FDTCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBRU0sS0FBSyxVQUFVLGdCQUFnQjtJQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUM5QztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRk0sU0FBUyxVQUFVLENBQUMsU0FBaUIsRUFBRSxXQUFvQjtJQUNoRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzNCLElBQUksV0FBVztRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVNLFNBQVMsWUFBWSxDQUFDLFVBQWtCO0lBQzdDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsVUFBVSxFQUFFLENBQUM7SUFDbEQsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxTQUFpQjtJQUN0RCxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsU0FBUyxPQUFPLENBQUM7SUFDcEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDZCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxTQUFTLGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsV0FBbUI7SUFDdEUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMvQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBQyxXQUFvQjtJQUNsRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLElBQUksV0FBVztRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVNLFNBQVMsb0JBQW9CO0lBQ2xDLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDckQsQ0FBQztBQUVNLFNBQVMsb0JBQW9CLENBQUMsSUFBcUI7SUFDeEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBQyxLQUFhO0lBQzFDLE9BQU87OztlQUdNLEtBQUs7Ozs7Ozs7OztDQVNuQjtBQUNELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEMkQ7QUFDUztBQUMwQjtBQUUvRixTQUFTLGtCQUFrQixDQUFDLFNBQWlCO0lBQzNDLE1BQU0sSUFBSSxHQUFHLG9EQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbkMsTUFBTSxVQUFVLEdBQUcsb0RBQVUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO0lBQ3BFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxTQUFTLFNBQVMsQ0FBQztJQUUxQyxNQUFNLEtBQUssR0FBRyxvREFBVSxDQUFDLEdBQUcsU0FBUyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVELE1BQU0sZ0JBQWdCLEdBQUcsb0RBQVUsQ0FBQyxHQUFHLFNBQVMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakYsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxXQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUMzQixXQUFXLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztJQUN4QyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTVDLE1BQU0sTUFBTSxHQUFHLHNEQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUMxQyxJQUFJLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDMUIsTUFBTSxHQUFHLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNuQixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7YUFDekIsQ0FBQztZQUNGLE1BQU0sZ0VBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixNQUFNLGlCQUFpQixHQUFHO2dCQUN4QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsZ0JBQWdCLEVBQUUsSUFBSTthQUN2QjtZQUNELHlHQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNMLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2xDLElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLGdFQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMseUdBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFTLG1CQUFtQjtJQUMxQixNQUFNLGtCQUFrQixHQUFHLG9EQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxNQUFNLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoRCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hELE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUVELGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RDRCO0FBQ1g7QUFDcUM7QUFDM0I7QUFDUDtBQUV2RCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsS0FBYTtJQUM1QyxPQUFPLHFFQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFFTSxLQUFLLFVBQVUsUUFBUSxDQUFDLFFBQXdCO0lBQ3JELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQXNCLENBQUM7SUFDNUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4QyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN0QixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0MsT0FBTyxNQUFNLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLHlEQUF5RDtJQUV6RCxxREFBcUQ7SUFFckQseUVBQXlFO0lBRXpFLDZFQUE2RTtJQUU3RSwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBRXpCLGtFQUFrRTtJQUNsRSx3QkFBd0I7SUFDeEIsK0RBQStEO0lBQy9ELCtDQUErQztJQUMvQyw4Q0FBOEM7SUFDOUMsd0VBQXdFO0lBRXhFLDJGQUEyRjtJQUMzRixtREFBbUQ7SUFFbkQsMkNBQTJDO0lBQzNDLGlFQUFpRTtJQUNqRSxpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ2hDLGdEQUFnRDtJQUNoRCw4RUFBOEU7SUFDOUUsOERBQThEO0lBQzlELCtFQUErRTtJQUMvRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVGQUF1RjtJQUN2Riw0REFBNEQ7SUFDNUQsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsUUFBUTtJQUVSLGtFQUFrRTtJQUNsRSw2S0FBNks7SUFDN0ssd0RBQXdEO0lBQ3hELE1BQU07SUFDTix1Q0FBdUM7SUFDdkMsZ0VBQWdFO0lBQ2hFLCtDQUErQztJQUMvQywwREFBMEQ7SUFDMUQsa0JBQWtCO0FBQ3BCLENBQUM7QUFBQSxDQUFDO0FBRUssS0FBSyxVQUFVLGNBQWMsQ0FBQyxRQUF3QjtJQUMzRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFzQixDQUFDO0lBQzVFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDeEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdEIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sUUFBUSxHQUFHLE1BQU0saUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFaEQsTUFBTSxrQkFBa0IsR0FBRyw0REFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWxELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFtQixDQUFDO0lBRXRFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO0lBRTFFLE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFdEIsTUFBTSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQzNELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNyRCxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRS9ELElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU0sRUFBRTtvQkFDL0UsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRXhDLE1BQU0sR0FBRyxHQUFHLE1BQU0sNkRBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksb0JBQW9CLFlBQVksR0FBRyxDQUFDLENBQUM7b0JBQ3RELE1BQU0sTUFBTSxHQUFHLE1BQU0sbUVBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO3dCQUNsQixzRUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUNuQyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7d0JBQ2pFLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUU7NEJBQzlDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7eUJBQ2pFO3FCQUNGO3lCQUFNO3dCQUNMLE1BQU0sT0FBTyxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUMxRSxzRUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNoRDtpQkFDRjtnQkFDRCxPQUFPO2FBQ1I7WUFFRCxNQUFNLHFCQUFxQixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQzNELE1BQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLENBQUM7WUFDdEssWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7U0FDbEQ7SUFDSCxDQUFDLEVBQUUsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLHNCQUFzQixFQUFFLENBQUM7SUFDN0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxvRUFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxVQUFVO1FBQUUsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDdkQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVNLEtBQUssVUFBVSxTQUFTO0lBRTdCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO0lBQ2hGLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzNCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUUxRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO1FBQ25DLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBRSxRQUEyQixDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsS0FBSztZQUNMLFFBQVE7U0FDVCxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVoQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUNyQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFFLFFBQTJCLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUM3QixRQUFRLEdBQUcsTUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUNwQyxNQUFNO2FBQ1A7U0FDRjtRQUNELE1BQU0sa0JBQWtCLEdBQUcsNERBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBbUIsQ0FBQztRQUV0RSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBc0IsQ0FBQztRQUMxRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixNQUFNLGFBQWEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTNDLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMzRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ3JELGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNyQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFbkUsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUFFO3dCQUMvRSxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFFeEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBc0IsQ0FBQzt3QkFDbEYsV0FBVyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBRTdCLE1BQU0sR0FBRyxHQUFHLE1BQU0sNkRBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksb0JBQW9CLFlBQVksR0FBRyxDQUFDLENBQUM7d0JBQ3RELE1BQU0sTUFBTSxHQUFHLE1BQU0sbUVBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFOzRCQUNsQixzRUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUNuQyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7NEJBQ2pFLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUU7Z0NBQzlDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7NkJBQ2pFO3lCQUNGOzZCQUFNOzRCQUNMLE1BQU0sT0FBTyxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUMxRSxzRUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNoRDtxQkFDRjtvQkFDRCxPQUFPO2lCQUNSO2dCQUVELE1BQU0scUJBQXFCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQzNELE1BQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLENBQUM7Z0JBQ3RLLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLFFBQTJCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztRQUNqRixNQUFNLFVBQVUsR0FBRyxNQUFNLG9FQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVU7WUFBRSxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN2RCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TTZDO0FBQ2dCO0FBRzlELEtBQUssVUFBVSxrQkFBa0I7SUFDL0IsTUFBTSxnQkFBZ0IsR0FBRyxvREFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0scUJBQXFCLEdBQUcsb0RBQVUsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckUsTUFBTSxVQUFVLEdBQUcsTUFBTSxvRUFBYSxFQUFFLENBQUM7SUFDekMsTUFBTSxxQkFBcUIsR0FBRyxvREFBVSxDQUFDLGVBQWUsRUFBRSxHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFFM0UsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDdEUsT0FBTyxnQkFBZ0IsQ0FBQztBQUMxQixDQUFDO0FBRUQsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGlHO0FBQzdEO0FBQ007QUFHbEM7QUFHVTtBQUMyQztBQUM3QjtBQUUzRCxTQUFTLGlCQUFpQixDQUFDLEdBQVM7SUFDekMsTUFBTSxRQUFRLEdBQUcsb0RBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVyQyxNQUFNLFlBQVksR0FBRyxvREFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTVDLE1BQU0sWUFBWSxHQUFHLHNEQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDMUMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQXFCLENBQUM7UUFDN0UsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxZQUFZLEdBQUcsc0RBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLGFBQWEsR0FBRztRQUNwQixZQUFZLEVBQUUsSUFBSTtRQUNsQixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLGdCQUFnQixFQUFFLElBQUk7S0FDdkI7SUFDRCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2hELGdFQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RSxJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLFdBQVcsRUFBRTtZQUM5RCxxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUNqRjtRQUNELE1BQU0sc0VBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFM0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxNQUFNLGlCQUFpQixHQUFHLDhEQUFvQixFQUFFLENBQUM7UUFDakQsSUFBSSxVQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsaUJBQWlCLE1BQUssQ0FBQyxJQUFJLGlCQUFpQixLQUFLLEdBQUc7WUFBRSw4REFBb0IsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xILHlHQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBRUgsWUFBWSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFaEQsTUFBTSxPQUFPLEdBQUcsb0RBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsWUFBWSxDQUFDLFNBQVMsR0FBRyx3REFBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxZQUFZLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUUvQixNQUFNLGFBQWEsR0FBRyxtREFBUyxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sUUFBUSxHQUFHLG9EQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsTUFBTSxLQUFLLEdBQUcsc0RBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxNQUFNLElBQUksR0FBRyxzREFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRWxDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDekMsMERBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsTUFBTSxxRUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU3QixNQUFNLElBQUksR0FBRyxvREFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRXpDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVELEtBQUssVUFBVSxVQUFVOztJQUN2QixjQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxNQUFNLEVBQUUsQ0FBQztJQUMxQyxNQUFNLElBQUksR0FBRyxvREFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLElBQUksVUFBVSxFQUFFO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNEQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsT0FBTyxHQUFHLE1BQU0saUVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxzREFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqSDtLQUNGO0lBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVMsRUFBRSxFQUFFO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdrQztBQUNRO0FBQ1Y7QUFDVTtBQUNuQjtBQUNUO0FBRXhDLFNBQVMsb0JBQW9CO0lBQzNCLE1BQU0sY0FBYyxHQUFHLG9EQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFOUMsTUFBTSxVQUFVLEdBQUcsc0RBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUN4QyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUUsTUFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0RSxxREFBUyxFQUFFLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sV0FBVyxHQUFHLHNEQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDNUIsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDekMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUUsRUFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3RixVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sY0FBYyxHQUFHLHNEQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBc0IsQ0FBQztRQUNoRixVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUM1QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1EQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxNQUFNLFNBQVMsR0FBRyw4REFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLHFFQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sU0FBUyxHQUFHLDhEQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcscUVBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTSxPQUFPLEdBQUcsR0FBRyxTQUFTLElBQUksU0FBUyxFQUFFLENBQUM7WUFDNUMsTUFBTSxHQUFHLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2FBQy9ELENBQUM7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLGdFQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELE1BQU0sVUFBVSxHQUFHLE1BQU0sd0RBQWdCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0IsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkUsSUFBSSxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7WUFDOUQscUJBQXFCLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsbURBQWMsRUFBRSxDQUFDO1NBQzlGO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0QsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQztBQUVELGlFQUFlLG9CQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGdCO0FBQ3NCO0FBQzhCO0FBQ1Q7QUFDbEQ7QUFFN0MsTUFBTSx1QkFBdUIsR0FBRztJQUM5QixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGdCQUFnQixFQUFFLElBQUk7Q0FDdkI7QUFFRCxTQUFTLHNCQUFzQjtJQUM3QixNQUFNLFVBQVUsR0FBRyxvREFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sZUFBZSxHQUFHLG9EQUFVLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkUsTUFBTSxlQUFlLEdBQUcsb0RBQVUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3RHLFVBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFTSxLQUFLLFVBQVUsc0JBQXNCO0lBQzFDLE1BQU0sZUFBZSxHQUFHLG9EQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsSUFBSSxXQUFXLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxNQUFNLFFBQVEsR0FBRyxzREFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLElBQUksV0FBVyxJQUFJLFdBQVcsS0FBSyxHQUFHO1FBQUUsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFFakUsTUFBTSxJQUFJLEdBQUcsc0RBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuQyxJQUFJLFVBQVUsR0FBRyxDQUFDLE1BQU0saUVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdDLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLHNEQUFpQixHQUFHLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQzFFO0lBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUN4QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBc0IsQ0FBQztRQUNoRixVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFzQixDQUFDO1FBQ2xGLElBQUksV0FBVztZQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxVQUFVLEdBQUcsTUFBTSxvRUFBYSxFQUFFLENBQUM7UUFFbkMsV0FBVyxHQUFHLDhEQUFvQixFQUFFLENBQUM7UUFDckMsOERBQW9CLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsV0FBVyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFOUIsTUFBTSxVQUFVLEdBQUcsTUFBTSx3REFBZ0IsRUFBRSxDQUFDO1FBQzVDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvQixNQUFNLHlHQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzVDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO1FBQ2hGLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFdBQVcsR0FBRyw4REFBb0IsRUFBRSxDQUFDO1FBQ3JDLDhEQUFvQixDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sVUFBVSxHQUFHLE1BQU0sd0RBQWdCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0IsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBc0IsQ0FBQztRQUNsRixJQUFJLFdBQVc7WUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckMseUdBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sZ0JBQWdCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUNsRCxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBRUQsaUVBQWUsc0JBQXNCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFd0I7QUFDRTtBQUNkO0FBQ2U7QUFDdEI7QUFDc0I7QUFFakUsS0FBSyxVQUFVLGdCQUFnQjtJQUM3QixjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLE1BQU0sVUFBVSxHQUFHLG9EQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsSUFBSSxJQUFJLEVBQUU7UUFDUixNQUFNLGFBQWEsR0FBRyxzRUFBbUIsRUFBRSxDQUFDO1FBQzVDLE1BQU0sY0FBYyxHQUFHLHVFQUFvQixFQUFFLENBQUM7UUFDOUMsTUFBTSxVQUFVLEdBQUcsTUFBTSw4RUFBc0IsRUFBRSxDQUFDO1FBQ2xELE1BQU0sTUFBTSxHQUFHLE1BQU0sMEVBQWtCLEVBQUUsQ0FBQztRQUMxQyxNQUFNLFVBQVUsR0FBRyxNQUFNLG1FQUFVLEVBQUUsQ0FBQztRQUV0QyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQztBQUVELGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJvQztBQUVwRSxLQUFLLFVBQVUsa0JBQWtCO0lBQy9CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxJQUFJLE1BQU0sRUFBRTtRQUNWLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxvRUFBYSxFQUFFLENBQUM7S0FDNUM7QUFDSCxDQUFDO0FBRUQsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUNEI7QUFFOUQsU0FBUyxzQkFBc0I7SUFDN0IsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RFLElBQUksZUFBZSxFQUFFO1FBQ25CLGVBQWUsQ0FBQyxXQUFXLEdBQUcsOERBQW9CLEVBQUUsQ0FBQztLQUN0RDtBQUNILENBQUM7QUFFRCxpRUFBZSxzQkFBc0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG9CO0FBQ1U7QUFDTjtBQUU5RCxTQUFTLGdCQUFnQjtJQUV2QixNQUFNLFdBQVcsR0FBRyw4REFBb0IsRUFBRSxDQUFDO0lBQzNDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFzQixDQUFDO0lBQ3BGLElBQUksV0FBVyxJQUFJLFdBQVcsS0FBSyxHQUFHLElBQUksY0FBYyxFQUFFO1FBQ3hELGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ2hDOztRQUFNLGNBQWMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxLQUFLLFVBQVUsZ0JBQWdCO0lBQzdCLE1BQU0sV0FBVyxHQUFHLDhEQUFvQixFQUFFLENBQUM7SUFDM0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxvRUFBYSxFQUFFLENBQUM7SUFDekMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXNCLENBQUM7SUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsc0RBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEQsSUFBSSxVQUFVLElBQUksV0FBVyxFQUFFO1FBQzdCLElBQUksQ0FBQyxVQUFVLElBQUksc0RBQWlCLEdBQUcsQ0FBQyxXQUFXO1lBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O1lBQzNFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQztBQUVELFNBQVMsc0JBQXNCO0lBQzdCLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsZ0JBQWdCLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBRUQsaUVBQWUsc0JBQXNCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qm1CO0FBRXpELEtBQUssVUFBVSxpQkFBaUI7O0lBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sbUVBQVUsRUFBRSxDQUFDO0lBQ2hDLGNBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDVztBQUNEO0FBQ1Y7QUFFcEUsS0FBSyxVQUFVLGdCQUFnQixDQUFDLGlCQUEyQztJQUN6RSxJQUFJLGlCQUFpQixDQUFDLFlBQVk7UUFBRSw2RUFBa0IsRUFBRSxDQUFDO0lBQ3pELElBQUksaUJBQWlCLENBQUMsZ0JBQWdCO1FBQUUsbUZBQXNCLEVBQUUsQ0FBQztJQUNqRSxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQjtRQUFFLG9GQUFzQixFQUFFLENBQUM7SUFDakUsOEVBQWlCLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBRUQsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnNCO0FBQ0o7QUFFbEQsU0FBUyxZQUFZO0lBQ25CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFFNUIsTUFBTSxhQUFhLEdBQUcsb0RBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU1QyxNQUFNLFFBQVEsR0FBRyxzREFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3RDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFtQixDQUFDO1FBQ3ZFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFtQixDQUFDO1FBQ3pFLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbkMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFNBQVMsR0FBRyxzREFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFtQixDQUFDO1FBQ3ZFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFtQixDQUFDO1FBQ3pFLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDbEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3BDLDREQUFpQixFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFN0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3dDO0FBQ1I7QUFDWjtBQUNQO0FBRXpDLEtBQUssVUFBVSx1QkFBdUI7SUFDcEMsTUFBTSxVQUFVLEdBQUcsb0RBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sUUFBUSxHQUFHLHNEQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsTUFBTSxJQUFJLEdBQUcsc0RBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxJQUFJLE9BQU8sRUFBRTtRQUNYLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUNELElBQUksV0FBVyxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFDcEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDMUI7SUFFRCxJQUFJLGFBQWEsR0FBRyxNQUFNLDBFQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxELElBQUksYUFBYSxJQUFJLFdBQVcsRUFBRTtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsd0RBQW1CLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDckY7SUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxFQUFFO1lBQ1gsV0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQ3hCO1FBRUQsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNqQixjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFeEQsSUFBSSxXQUFXLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtZQUNwQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUNELHlEQUFXLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ2xDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNwQixNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxFQUFFO1lBQ1gsV0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNqQixjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxhQUFhLElBQUksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyx3REFBbUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDckY7UUFDRCx5REFBVyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBRUQsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHVCO0FBQ3dCO0FBQzNCO0FBRVg7QUFHaEQsS0FBSyxVQUFVLFdBQVcsQ0FBQyxVQUEyQjs7SUFDcEQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLFNBQVMsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7SUFDeEMsTUFBTSxpQkFBaUIsR0FBRywyREFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRSxNQUFNLGNBQWMsR0FBRywyREFBaUIsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0QsTUFBTSxlQUFlLEdBQUcsMkRBQWlCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRWxFLE1BQU0sZUFBZSxHQUFHLDJEQUFpQixDQUFDLHdCQUF3QixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQzdDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtTQUN6RSxDQUFDO1FBQ0YsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNwRCxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoRDs7WUFBTSxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBRywyREFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUM3QyxNQUFNLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDekUsQ0FBQztRQUNGLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDcEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEQ7O1lBQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLE1BQU0sQ0FDZCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGVBQWUsRUFDZixlQUFlLEVBQ2YsZUFBZSxDQUNoQixDQUFDO0lBQ0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixNQUFNLE9BQU8sR0FBRyxNQUFNLG9FQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLHdEQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxpRUFBVSxFQUFFLENBQUM7SUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBZSxFQUFFLEVBQUU7UUFDeEMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNiLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsTUFBTSxVQUFVLEdBQUcseURBQWUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFakQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQzVCLFFBQVEsR0FBRyx5REFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsT0FBTyxDQUFDLFNBQVMsR0FBRyx3REFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuRDtTQUNGO1FBQ0QsTUFBTSxRQUFRLEdBQUcseURBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sUUFBUSxHQUFHLHlEQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQUUsYUFBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsMENBQUUsTUFBTSxFQUFFLENBQUM7SUFDcEYsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRUQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFFbUI7QUFDc0I7QUFFcEUsS0FBSyxVQUFVLGtCQUFrQjtJQUMvQixNQUFNLFlBQVksR0FBRyxvREFBVSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sYUFBYSxHQUFHLE1BQU0sMEVBQWdCLEVBQUUsQ0FBQztJQUMvQyxNQUFNLFlBQVksR0FBRyxvREFBVSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN6RSxNQUFNLGtCQUFrQixHQUFHLG9EQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMvRCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RELE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUVELGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlM7QUFDbUI7QUFDVjtBQUNRO0FBRTVELEtBQUssVUFBVSxpQkFBaUI7SUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLElBQUksRUFBRTtRQUNSLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPO1lBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQy9CO0lBQ0QsTUFBTSxPQUFPLEdBQUcsb0RBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxNQUFNLFVBQVUsR0FBRyxNQUFNLGtFQUF1QixFQUFFLENBQUM7SUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQixNQUFNLGFBQWEsR0FBRyxNQUFNLHFFQUFrQixFQUFFLENBQUM7SUFDakQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QixvRUFBVyxFQUFFLENBQUM7SUFDZCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ3JCakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZEO0FBQ0c7QUFDZDtBQUVsRCxLQUFLLFVBQVUsU0FBUztJQUN0QixpRUFBWSxFQUFFLENBQUM7SUFDZix3RUFBZ0IsRUFBRSxDQUFDO0lBQ25CLE1BQU0sMEVBQWlCLEVBQUUsQ0FBQztJQUN6QixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBb0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNoRixDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvYW5pbWF0aW9uL2RyaXZlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9jYXJzLW5hbWUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL2RhdGEtY29udHJvbGxlci9jYXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvZW5naW5lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvY2FyLW1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9jb21wb25lbnRzL2RyaXZlLWNhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMtaGVhZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9nYXJhZ2UtY2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2NvbXBvbmVudHMvZ2FyYWdlLWNvbnRyb2xzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvZ2FyYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvbW9kdWxlcy91cGRhdGUtZHluYW1pYy1jb250ZW50L2NvbXBvbmVudHMudHMvdXBkYXRlLWNhcnMtYW1vdW50LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9nYXJhZ2UvbW9kdWxlcy91cGRhdGUtZHluYW1pYy1jb250ZW50L2NvbXBvbmVudHMudHMvdXBkYXRlLWdhcmFnZS1wYWdlLW51bWJlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC9jb21wb25lbnRzLnRzL3VwZGF0ZS1nYXJhZ2UtcGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC9jb21wb25lbnRzLnRzL3VwZGF0ZS1nYXJhZ2UtdGFibGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2dhcmFnZS9tb2R1bGVzL3VwZGF0ZS1keW5hbWljLWNvbnRlbnQvdXBkYXRlLWdhcmFnZS1keW5hbWljLWNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NjcmlwdHMvcGFnZXMvcmVjb3Jkcy9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvY29tcG9uZW50cy9yZW5kZXItdGFibGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvY29tcG9uZW50cy93aW5uZXItaGVhZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9yZWNvcmRzL3JlY29yZHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFjZVN0YXRzIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZnVuY3Rpb24gZ2V0RHJpdmVTdGVwKHZlbG9jaXR5OiBudW1iZXIpIHtcbiAgY29uc3QgdGltZSA9IHJhY2VTdGF0cy5tYXhBbmltYXRpb25UaW1lIC8gKHZlbG9jaXR5IC8gcmFjZVN0YXRzLm1pblBvc3NpYmxlVmVsb2NpdHkpO1xuICBjb25zdCB0b3RhbFN0ZXBzID0gcmFjZVN0YXRzLmZyYW1lc1BlclNlY29uZCAqIHRpbWU7XG5cbiAgY29uc3Qgc3RlcERpc3RhbmNlID0gcmFjZVN0YXRzLmRpc3RhbmNlIC8gdG90YWxTdGVwcztcbiAgcmV0dXJuIHtcbiAgICBzdGVwRGlzdGFuY2UsXG4gICAgdGltZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RHJpdmVTdGVwO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvJztcblxuZXhwb3J0IGNvbnN0IHJhY2VTdGF0cyA9IHtcbiAgbWF4QW5pbWF0aW9uVGltZTogNDAsXG4gIG1pblBvc3NpYmxlVmVsb2NpdHk6IDUwLFxuICBmcmFtZXNQZXJTZWNvbmQ6IDYwLFxuICBkaXN0YW5jZTogMTAwLFxufTtcblxuZXhwb3J0IGNvbnN0IHdpbm5lcnNDb25maWcgPSB7XG4gIGxpbWl0OiAxMCxcbiAgcGFnZTogMSxcbiAgc29ydDogJ3RpbWUnLFxuICBvcmRlcjogJ0FTQycsXG59O1xuXG5leHBvcnQgY29uc3QgY2Fyc1BlckdhcmFnZVBhZ2UgPSA3O1xuXG5leHBvcnQgY29uc3QgY2Fyc1RvR2VuZXJhdGUgPSAxMDA7XG4iLCJleHBvcnQgY29uc3QgYnJhbmRzID0gWydQZXVnZW90JywgJ0JNVycsICdQb3JzY2hlJywgJ1poaWd1bGknLCAnQXVkaScsICdNZXJjZWRlcycsICdGaWF0JywgJ01BWicsICdCdWdnYXRpJywgJ1JvbGxzLVJveXNlJywgJ1BhZ2FuaSddO1xuZXhwb3J0IGNvbnN0IG1vZGVscyA9IFsnNDA2IENvdXBlJywgJ0FNRycsICdNLVNlcmllcycsICdSUycsICczLXNlcmllcycsICdBNicsICdDMjA4JywgJzkxMScsICdDYXltYW4nLCAnNFMnLCAnU3BvcnQnXTtcbiIsImltcG9ydCB7IGFwaVVybCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGdhcmFnZVVybCA9IGAke2FwaVVybH1nYXJhZ2UvYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENhcnMob3B0aW9ucz86IHsgX2xpbWl0OiBudW1iZXIsIF9wYWdlOiBzdHJpbmd9KSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZ2FyYWdlVXJsKTtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KGtleSwgYCR7b3B0aW9uc1trZXkgYXMga2V5b2YgdHlwZW9mIG9wdGlvbnNdfWApO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBhbGxDYXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBhbGxDYXJzO1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FycyBsaXN0Jyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXIoaWQ6IG51bWJlcikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2dhcmFnZVVybH0ke2lkfWApO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXIoY2FyOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChnYXJhZ2VVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyKSxcbiAgfSk7XG5cbiAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAvLyBjb25zb2xlLmxvZygnd293Jyk7XG4gICAgcmV0dXJuIHJlcXVlc3QuanNvbigpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFkZCBjYXInKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNhcihpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBpZiAocmVxdWVzdC5vaykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdQZXJmZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGNvbG9yID0gJzEyMycpIHtcbiAgY29uc3QgY2FyID0ge1xuICAgIG5hbWUsXG4gICAgY29sb3IsXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtnYXJhZ2VVcmx9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyKSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJzQW1vdW50KCkge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGdhcmFnZVVybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdfbGltaXQnLCAnMScpO1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgcmV0dXJuIHJlcXVlc3QuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbn1cbiIsImltcG9ydCB7IGFwaVVybCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGVuZ2luZVVybCA9IGAke2FwaVVybH1lbmdpbmVgO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRTdG9wQ2FyKGNhcklkOiBudW1iZXIsIHN0YXR1czogJ3N0YXJ0ZWQnIHwgJ3N0b3BwZWQnKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5naW5lVXJsKTtcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYCR7Y2FySWR9YCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdzdGF0dXMnLCBzdGF0dXMpO1xuICBjb25zdCBzdGFydEVuZ2luZVJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gIH0pO1xuICBpZiAoc3RhcnRFbmdpbmVSZXF1ZXN0Lm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdGFydEVuZ2luZVJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHsgdmVsb2NpdHkgfSA9IHJlc3BvbnNlO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tFbmdpbmUoY2FySWQ6IG51bWJlcikge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuZ2luZVVybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpZCcsIGAke2NhcklkfWApO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc3RhdHVzJywgJ2RyaXZlJyk7XG4gIGNvbnN0IHN0YXJ0RHJpdmVSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGlkOiBjYXJJZCxcbiAgICAgIHN0YXR1czogJ2RyaXZlJyxcbiAgICB9KSxcbiAgfSk7XG4gIHJldHVybiBzdGFydERyaXZlUmVxdWVzdC5vaztcbn1cbiIsImltcG9ydCB7IGFwaVVybCwgd2lubmVyc0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgdXJsV2lubmVyc1NvcnQgZnJvbSAnLi4vaW50ZXJmYWNlcy91cmwtd2lubmVycy1zb3J0JztcblxuY29uc3Qgd2lubmVyc1VybCA9IGAke2FwaVVybH13aW5uZXJzL2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5uZXJzKHJlbmRlck9wdGlvbnM/OiB1cmxXaW5uZXJzU29ydCkge1xuICBsZXQgdXJsT3B0aW9ucyA9IHdpbm5lcnNDb25maWc7XG4gIGlmIChyZW5kZXJPcHRpb25zKSB7XG4gICAgaWYgKHJlbmRlck9wdGlvbnMub3JkZXIpIHVybE9wdGlvbnMub3JkZXIgPSByZW5kZXJPcHRpb25zLm9yZGVyXG4gICAgaWYgKHJlbmRlck9wdGlvbnMuc29ydCkgdXJsT3B0aW9ucy5zb3J0ID0gcmVuZGVyT3B0aW9ucy5zb3J0OztcbiAgfVxuXG4gIHVybE9wdGlvbnMucGFnZSA9ICsoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc1BhZ2UnKSB8fCAxKTtcblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbm5lcnNVcmwpO1xuICBPYmplY3Qua2V5cyh1cmxPcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChgXyR7a2V5fWAsIGAke3VybE9wdGlvbnNba2V5IGFzIGtleW9mIHR5cGVvZiB1cmxPcHRpb25zXX1gKTtcbiAgfSk7XG4gIGNvbnN0IHdpbm5lcnNSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKHdpbm5lcnNSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIHdpbm5lcnNSZXF1ZXN0Lmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2lubmVyKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5uZXJzVXJsfSR7aWR9YCk7XG4gIGNvbnN0IHdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZiAod2lubmVyUmVxdWVzdC5vaykge1xuICAgIHJldHVybiB3aW5uZXJSZXF1ZXN0Lmpzb24oKTtcbiAgfVxuICByZXR1cm4gd2lubmVyUmVxdWVzdC5zdGF0dXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5uZXIoaWQ6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gIGNvbnN0IHJlY29yZE5vZGUgPSB7XG4gICAgaWQsXG4gICAgd2luczogMSxcbiAgICB0aW1lLFxuICB9O1xuICBjb25zdCBjcmVhdGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2god2lubmVyc1VybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWNvcmROb2RlKSxcbiAgfSk7XG4gIGlmIChjcmVhdGVXaW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXaW5uZXIoaWQ6bnVtYmVyKSB7XG4gIGNvbnN0IHVybCA9IGAke3dpbm5lcnNVcmx9JHtpZH1gO1xuICBjb25zdCBkZWxldGVXaW5uZXJSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSk7XG4gIGlmIChkZWxldGVXaW5uZXJSZXF1ZXN0Lm9rKSB7XG4gICAgcmV0dXJuIGRlbGV0ZVdpbm5lclJlcXVlc3QuanNvbigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5uZXIoaWQ6IG51bWJlciwgd2luczogbnVtYmVyLCB0aW1lOiBudW1iZXIpIHtcbiAgY29uc3QgdXJsID0gYCR7d2lubmVyc1VybH0ke2lkfWA7XG4gIGNvbnN0IHVwZGF0ZVdpbm5lclJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB3aW5zLFxuICAgICAgdGltZSxcbiAgICB9KSxcbiAgfSk7XG4gIHJldHVybiB1cGRhdGVXaW5uZXJSZXF1ZXN0Lmpzb24oKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY29yZHNBbW91bnQoKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2lubmVyc1VybCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdfbGltaXQnLCAnMScpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5oZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShjbGFzc05hbWU6IHN0cmluZywgdGV4dENvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYgKHRleHRDb250ZW50KSBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ1dHRvbk5hbWU6IHN0cmluZykge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9IGBidXR0b24gYnV0dG9uX18ke2J1dHRvbk5hbWV9YDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uTmFtZTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZyhzcmM6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgaW1nQmxvY2sgPSBjcmVhdGVOb2RlKGNsYXNzTmFtZSk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfV9faW1nYDtcbiAgaW1nLnNyYyA9IHNyYztcbiAgaW1nQmxvY2suYXBwZW5kKGltZyk7XG4gIHJldHVybiBpbWdCbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0Q29udGVudDogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlQ2VsbCh0ZXh0Q29udGVudD86IHN0cmluZykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgaWYgKHRleHRDb250ZW50KSBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEdhcmFnZVBhZ2UoKSB7XG4gIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXJhZ2VQYWdlJykgfHwgJzEnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudEdhcmFnZVBhZ2UocGFnZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhcmFnZVBhZ2UnLCBgJHtwYWdlfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29sb3JTdmcoY29sb3I6IHN0cmluZykge1xuICByZXR1cm4gYFxuICA8IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIj5cblxuICA8c3ZnIGZpbGw9XCIke2NvbG9yfVwiIGhlaWdodD1cIjIzcHhcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJjYXJfX2ltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDQ3LjAzMiA0Ny4wMzJcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHN0cm9rZT1cIiMwMDAwMDBcIj5cblxuICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiLz5cblxuICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cblxuICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPGc+IDxwYXRoIGQ9XCJNMjkuMzk1LDBIMTcuNjM2Yy0zLjExNywwLTUuNjQzLDMuNDY3LTUuNjQzLDYuNTg0djM0LjgwNGMwLDMuMTE2LDIuNTI2LDUuNjQ0LDUuNjQzLDUuNjQ0aDExLjc1OSBjMy4xMTYsMCw1LjY0NC0yLjUyNyw1LjY0NC01LjY0NFY2LjU4NEMzNS4wMzcsMy40NjcsMzIuNTExLDAsMjkuMzk1LDB6IE0zNC4wNSwxNC4xODh2MTEuNjY1bC0yLjcyOSwwLjM1MXYtNC44MDZMMzQuMDUsMTQuMTg4eiBNMzIuNjE4LDEwLjc3M2MtMS4wMTYsMy45LTIuMjE5LDguNTEtMi4yMTksOC41MUgxNi42MzFsLTIuMjIyLTguNTFDMTQuNDEsMTAuNzczLDIzLjI5Myw3Ljc1NSwzMi42MTgsMTAuNzczeiBNMTUuNzQxLDIxLjcxMyB2NC40OTJsLTIuNzMtMC4zNDlWMTQuNTAyTDE1Ljc0MSwyMS43MTN6IE0xMy4wMTEsMzcuOTM4VjI3LjU3OWwyLjczLDAuMzQzdjguMTk2TDEzLjAxMSwzNy45Mzh6IE0xNC41NjgsNDAuODgybDIuMjE4LTMuMzM2IGgxMy43NzFsMi4yMTksMy4zMzZIMTQuNTY4eiBNMzEuMzIxLDM1LjgwNXYtNy44NzJsMi43MjktMC4zNTV2MTAuMDQ4TDMxLjMyMSwzNS44MDV6XCIvPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8L2c+IDwvZz5cblxuICA8L3N2Zz5cbmBcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyLCB1cGRhdGVDYXIgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgdXBkYXRlR2FyYWdlUGFnZSBmcm9tICcuLi9tb2R1bGVzL3VwZGF0ZS1keW5hbWljLWNvbnRlbnQvdXBkYXRlLWdhcmFnZS1keW5hbWljLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiByZW5kZXJDYXJTZWxlY3Rpb24oYmxvY2tUeXBlOiBzdHJpbmcpIHtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZU5vZGUoYmxvY2tUeXBlKTtcblxuICBjb25zdCBibG9ja0xhYmVsID0gY3JlYXRlTm9kZSgnaGVhZGVyX19sYWJlbCcsIGAke2Jsb2NrVHlwZX1gKTtcbiAgY29uc3Qgc2V0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgc2V0TmFtZS5jbGFzc05hbWUgPSBgJHtibG9ja1R5cGV9X19pbnB1dGA7XG5cbiAgY29uc3QgY29sb3IgPSBjcmVhdGVOb2RlKGAke2Jsb2NrVHlwZX1fX2NvbG9yIGNvbG9yLWJsb2NrYCk7XG4gIGNvbnN0IGNvbG9yUGlja2VyTGFiZWwgPSBjcmVhdGVOb2RlKGAke2Jsb2NrVHlwZX1fX2NvbG9yX19sYWJlbGAsICdTZXQgY29sb3I6ICcpO1xuICBjb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbG9yUGlja2VyLnR5cGUgPSAnY29sb3InO1xuICBjb2xvclBpY2tlci5jbGFzc05hbWUgPSAnY29sb3JfX3BpY2tlcic7XG4gIGNvbG9yLmFwcGVuZChjb2xvclBpY2tlckxhYmVsLCBjb2xvclBpY2tlcik7XG5cbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKGJsb2NrVHlwZSk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBpZiAoYmxvY2tUeXBlID09PSAnY3JlYXRlJykge1xuICAgICAgY29uc3QgY2FyID0ge1xuICAgICAgICBuYW1lOiBzZXROYW1lLnZhbHVlLFxuICAgICAgICBjb2xvcjogY29sb3JQaWNrZXIudmFsdWUsXG4gICAgICB9O1xuICAgICAgYXdhaXQgY3JlYXRlQ2FyKGNhcik7XG4gICAgICBjb25zdCB1cGRhdGVQYWdlT3B0aW9ucyA9IHtcbiAgICAgICAgdXBkYXRlSGVhZGVyOiB0cnVlLFxuICAgICAgICB1cGRhdGVQYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICB1cGRhdGVQYWdlTnVtYmVyOiB0cnVlLFxuICAgICAgfVxuICAgICAgdXBkYXRlR2FyYWdlUGFnZSh1cGRhdGVQYWdlT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY2FySWQgfSA9IHNldE5hbWUuZGF0YXNldDtcbiAgICAgIGlmIChjYXJJZCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBzZXROYW1lO1xuICAgICAgICB1cGRhdGVDYXIoK2NhcklkLCB2YWx1ZSwgY29sb3JQaWNrZXIudmFsdWUpO1xuICAgICAgICB1cGRhdGVHYXJhZ2VQYWdlKHt9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIG1haW4uYXBwZW5kKGJsb2NrTGFiZWwsIHNldE5hbWUsIGNvbG9yLCBidXR0b24pO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2FyTWFuYWdlbWVudCgpIHtcbiAgY29uc3QgY2FyTWFuYWdlbWVudEJsb2NrID0gY3JlYXRlTm9kZSgnY2FyLW1hbmFnZW1lbnQnKTtcbiAgY29uc3QgY3JlYXRlQ2FyQmxvY2sgPSByZW5kZXJDYXJTZWxlY3Rpb24oJ2NyZWF0ZScpO1xuICBjb25zdCBlZGl0Q2FyQmxvY2sgPSByZW5kZXJDYXJTZWxlY3Rpb24oJ2VkaXQnKTtcblxuICBjYXJNYW5hZ2VtZW50QmxvY2suYXBwZW5kKGNyZWF0ZUNhckJsb2NrLCBlZGl0Q2FyQmxvY2spO1xuICByZXR1cm4gY2FyTWFuYWdlbWVudEJsb2NrO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXJNYW5hZ2VtZW50O1xuIiwiaW1wb3J0IHsgc3RhcnRTdG9wQ2FyIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9lbmdpbmVcIjtcbmltcG9ydCBnZXREcml2ZVN0ZXAgZnJvbSBcIi4uLy4uLy4uL2FuaW1hdGlvbi9kcml2ZVwiO1xuaW1wb3J0IHsgZ2V0V2lubmVyLCBjcmVhdGVXaW5uZXIsIHVwZGF0ZVdpbm5lciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkc1wiO1xuaW1wb3J0IHsgY2hlY2tFbmdpbmUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2VuZ2luZVwiO1xuaW1wb3J0IHsgZ2V0Q2FyIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbnREcml2ZVJlcXVlc3RzKGNhcklkOiBudW1iZXIpIHtcbiAgcmV0dXJuIHN0YXJ0U3RvcENhcihjYXJJZCwgJ3N0YXJ0ZWQnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRyaXZlQ2FyKGNhckJsb2NrOiBIVE1MRGl2RWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3N0YXJ0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9fZGlzYWJsZWQnKTtcbiAgc3RhcnQuZGlzYWJsZWQgPSB0cnVlO1xuICBjb25zdCBjYXJJZCA9ICsoY2FyQmxvY2suZGF0YXNldC5jYXJJZCB8fCAxKTtcbiAgcmV0dXJuIGF3YWl0IHNlbnREcml2ZVJlcXVlc3RzKGNhcklkKTtcbiAgLy8gY29uc3QgdmVsb2NpdHkgPSBhd2FpdCBzdGFydFN0b3BDYXIoY2FySWQsICdzdGFydGVkJyk7XG5cbiAgLy8gY29uc3QgZHJpdmVBbmltYXRpb25TdGVwID0gZ2V0RHJpdmVTdGVwKHZlbG9jaXR5KTtcblxuICAvLyBjb25zdCBjYXJJY29uQmxvY2sgPSBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuY2FyJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgLy8gY29uc3Qgc3RvcCA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3N0b3AnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgXG4gIC8vIGNvbnN0IHN0YXJ0UmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAvLyBzdG9wLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgLy8gY29uc3QgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gIC8vICAgaWYgKGNhckljb25CbG9jaykge1xuICAvLyAgICAgaWYgKCtjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlLnNsaWNlKDAsIC0xKSA+PSAxMDApIHtcbiAgLy8gICAgICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgLy8gICAgICAgY29uc3QgZW5kUmFjZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAvLyAgICAgICBjb25zdCByYWNlRHVyYXRpb24gPSAoKGVuZFJhY2UgLSBzdGFydFJhY2UpIC8gMTAwMCkudG9GaXhlZCgyKTtcblxuICAvLyAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmFjZScpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JhY2UnKSA9PT0gJ3RydWUnKSB7XG4gIC8vICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmFjZScsICdmYWxzZScpO1xuXG4gIC8vICAgICAgICAgY29uc3QgY2FyID0gYXdhaXQgZ2V0Q2FyKGNhcklkKTtcbiAgLy8gICAgICAgICBhbGVydChgJHtjYXIubmFtZX0gaGFzIHdvbiFcXG5UaW1lOiAke3JhY2VEdXJhdGlvbn1zYCk7XG4gIC8vICAgICAgICAgY29uc3QgY2FyV2luID0gYXdhaXQgZ2V0V2lubmVyKGNhcklkKTtcbiAgLy8gICAgICAgICBpZiAoY2FyV2luID09PSA0MDQpIHtcbiAgLy8gICAgICAgICAgIGNyZWF0ZVdpbm5lcihjYXJJZCwgK3JhY2VEdXJhdGlvbik7XG4gIC8vICAgICAgICAgICBjb25zdCByZWNvcmRzQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHNfX2Ftb3VudCcpO1xuICAvLyAgICAgICAgICAgaWYgKHJlY29yZHNBbW91bnQgJiYgcmVjb3Jkc0Ftb3VudC50ZXh0Q29udGVudCkge1xuICAvLyAgICAgICAgICAgICByZWNvcmRzQW1vdW50LnRleHRDb250ZW50ID0gYCR7K3JlY29yZHNBbW91bnQudGV4dENvbnRlbnQgKyAxfWA7XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgIGNvbnN0IG5ld1RpbWUgPSArcmFjZUR1cmF0aW9uIDwgY2FyV2luLnRpbWUgPyArcmFjZUR1cmF0aW9uIDogY2FyV2luLnRpbWU7XG4gIC8vICAgICAgICAgICB1cGRhdGVXaW5uZXIoY2FySWQsIGNhcldpbi53aW5zICsgMSwgK25ld1RpbWUpO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgICByZXR1cm47XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVWYWx1ZSA9IGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGU7XG4gIC8vICAgICBjb25zdCBuZXdUcmFuc2xhdGVWYWx1ZSA9IGN1cnJlbnRUcmFuc2xhdGVWYWx1ZSA/IGAkeytjdXJyZW50VHJhbnNsYXRlVmFsdWUuc2xpY2UoMCwgLTEpICsgZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYCA6IGAke2RyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2V9JWA7XG4gIC8vICAgICBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlID0gbmV3VHJhbnNsYXRlVmFsdWU7XG4gIC8vICAgfVxuICAvLyB9LCBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlKTtcbiAgLy8gY2FyQmxvY2suZGF0YXNldFtgaW50ZXJ2YWxJZGBdID0gYCR7Y2FyQW5pbWF0aW9uSW50ZXJ2YWxJZH1gO1xuICAvLyBjb25zdCBpc0VuZ2luZU9rID0gYXdhaXQgY2hlY2tFbmdpbmUoY2FySWQpO1xuICAvLyBpZiAoIWlzRW5naW5lT2spIGNsZWFySW50ZXJ2YWwoY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCk7XG4gIC8vIHJldHVybiBQcm9taXNlO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2luZ2xlQ2FyKGNhckJsb2NrOiBIVE1MRGl2RWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3N0YXJ0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9fZGlzYWJsZWQnKTtcbiAgc3RhcnQuZGlzYWJsZWQgPSB0cnVlO1xuICBjb25zdCBjYXJJZCA9ICsoY2FyQmxvY2suZGF0YXNldC5jYXJJZCB8fCAxKTtcblxuICBjb25zdCB2ZWxvY2l0eSA9IGF3YWl0IHNlbnREcml2ZVJlcXVlc3RzKGNhcklkKTtcblxuICBjb25zdCBkcml2ZUFuaW1hdGlvblN0ZXAgPSBnZXREcml2ZVN0ZXAodmVsb2NpdHkpO1xuXG4gIGNvbnN0IGNhckljb25CbG9jayA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jYXInKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdCBzdG9wID0gY2FyQmxvY2sucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc3RvcCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBcbiAgY29uc3Qgc3RhcnRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gIHN0b3AuZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdCBjYXJBbmltYXRpb25JbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICBpZiAoY2FySWNvbkJsb2NrKSB7XG4gICAgICBpZiAoK2Nhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUuc2xpY2UoMCwgLTEpID49IDEwMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGNhckFuaW1hdGlvbkludGVydmFsSWQpO1xuICAgICAgICBjb25zdCBlbmRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgICAgIGNvbnN0IHJhY2VEdXJhdGlvbiA9ICgoZW5kUmFjZSAtIHN0YXJ0UmFjZSkgLyAxMDAwKS50b0ZpeGVkKDIpO1xuXG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyYWNlJykgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmFjZScpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyYWNlJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICBjb25zdCBjYXIgPSBhd2FpdCBnZXRDYXIoY2FySWQpO1xuICAgICAgICAgIGFsZXJ0KGAke2Nhci5uYW1lfSBoYXMgd29uIVxcblRpbWU6ICR7cmFjZUR1cmF0aW9ufXNgKTtcbiAgICAgICAgICBjb25zdCBjYXJXaW4gPSBhd2FpdCBnZXRXaW5uZXIoY2FySWQpO1xuICAgICAgICAgIGlmIChjYXJXaW4gPT09IDQwNCkge1xuICAgICAgICAgICAgY3JlYXRlV2lubmVyKGNhcklkLCArcmFjZUR1cmF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZHNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3Jkc19fYW1vdW50Jyk7XG4gICAgICAgICAgICBpZiAocmVjb3Jkc0Ftb3VudCAmJiByZWNvcmRzQW1vdW50LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgIHJlY29yZHNBbW91bnQudGV4dENvbnRlbnQgPSBgJHsrcmVjb3Jkc0Ftb3VudC50ZXh0Q29udGVudCArIDF9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3VGltZSA9ICtyYWNlRHVyYXRpb24gPCBjYXJXaW4udGltZSA/ICtyYWNlRHVyYXRpb24gOiBjYXJXaW4udGltZTtcbiAgICAgICAgICAgIHVwZGF0ZVdpbm5lcihjYXJJZCwgY2FyV2luLndpbnMgKyAxLCArbmV3VGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZVZhbHVlID0gY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVZhbHVlID0gY3VycmVudFRyYW5zbGF0ZVZhbHVlID8gYCR7K2N1cnJlbnRUcmFuc2xhdGVWYWx1ZS5zbGljZSgwLCAtMSkgKyBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlfSVgIDogYCR7ZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYDtcbiAgICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSBuZXdUcmFuc2xhdGVWYWx1ZTtcbiAgICB9XG4gIH0sIGRyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2UpO1xuICBjYXJCbG9jay5kYXRhc2V0W2BpbnRlcnZhbElkYF0gPSBgJHtjYXJBbmltYXRpb25JbnRlcnZhbElkfWA7XG4gIGNvbnN0IGlzRW5naW5lT2sgPSBhd2FpdCBjaGVja0VuZ2luZShjYXJJZCk7XG4gIGlmICghaXNFbmdpbmVPaykgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgcmV0dXJuIFByb21pc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydFJhY2UoKSB7XG5cbiAgY29uc3QgcmFjZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3JhY2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmFjZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGNvbnN0IGNhckJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItYmxvY2snKTtcblxuICBjb25zdCBzcGVlZHMgPSBbXTtcbiAgY29uc3Qgc3BlZWRzUHJvbWlzZXMgPSBbXTtcbiAgY2FyQmxvY2tzLmZvckVhY2goYXN5bmMgKGNhckJsb2NrKSA9PiB7XG4gICAgY29uc3QgY2FySWQgPSArKChjYXJCbG9jayBhcyBIVE1MRGl2RWxlbWVudCkuZGF0YXNldC5jYXJJZCB8fCAxKTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IHNlbnREcml2ZVJlcXVlc3RzKGNhcklkKTtcblxuICAgIHNwZWVkc1Byb21pc2VzLnB1c2godmVsb2NpdHkpO1xuICAgIHNwZWVkcy5wdXNoKHtcbiAgICAgIGNhcklkLFxuICAgICAgdmVsb2NpdHksXG4gICAgfSk7XG4gIH0pO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKHNwZWVkc1Byb21pc2VzKTtcblxuICAgIGNhckJsb2Nrcy5mb3JFYWNoKGFzeW5jIChjYXJCbG9jaykgPT4ge1xuICAgIGxldCB2ZWxvY2l0eSA9IDE7XG4gICAgY29uc3QgY2FySWQgPSArKChjYXJCbG9jayBhcyBIVE1MRGl2RWxlbWVudCkuZGF0YXNldC5jYXJJZCB8fCAxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwZWVkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcklkID09PSBzcGVlZHNbaV0uY2FySWQpIHtcbiAgICAgICAgdmVsb2NpdHkgPSBhd2FpdCBzcGVlZHNbaV0udmVsb2NpdHk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBkcml2ZUFuaW1hdGlvblN0ZXAgPSBnZXREcml2ZVN0ZXAodmVsb2NpdHkpO1xuXG4gICAgY29uc3QgY2FySWNvbkJsb2NrID0gY2FyQmxvY2sucXVlcnlTZWxlY3RvcignLmNhcicpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIFxuICAgIGNvbnN0IHN0b3AgPSBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19zdG9wJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgc3RvcC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhcnRSYWNlRGF0ZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuXG4gICAgY29uc3QgY2FyQW5pbWF0aW9uSW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoY2FySWNvbkJsb2NrKSB7XG4gICAgICAgIGlmICgrY2FySWNvbkJsb2NrLnN0eWxlLnRyYW5zbGF0ZS5zbGljZSgwLCAtMSkgPj0gMTAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgICAgICAgICBjb25zdCBlbmRSYWNlID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgICAgICAgY29uc3QgcmFjZUR1cmF0aW9uID0gKChlbmRSYWNlIC0gc3RhcnRSYWNlRGF0ZSkgLyAxMDAwKS50b0ZpeGVkKDIpO1xuXG4gICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JhY2UnKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyYWNlJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmFjZScsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3Jlc2V0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgICAgICByZXNldEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBjYXIgPSBhd2FpdCBnZXRDYXIoY2FySWQpO1xuICAgICAgICAgICAgYWxlcnQoYCR7Y2FyLm5hbWV9IGhhcyB3b24hXFxuVGltZTogJHtyYWNlRHVyYXRpb259c2ApO1xuICAgICAgICAgICAgY29uc3QgY2FyV2luID0gYXdhaXQgZ2V0V2lubmVyKGNhcklkKTtcbiAgICAgICAgICAgIGlmIChjYXJXaW4gPT09IDQwNCkge1xuICAgICAgICAgICAgICBjcmVhdGVXaW5uZXIoY2FySWQsICtyYWNlRHVyYXRpb24pO1xuICAgICAgICAgICAgICBjb25zdCByZWNvcmRzQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHNfX2Ftb3VudCcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3Jkc0Ftb3VudCAmJiByZWNvcmRzQW1vdW50LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcmVjb3Jkc0Ftb3VudC50ZXh0Q29udGVudCA9IGAkeytyZWNvcmRzQW1vdW50LnRleHRDb250ZW50ICsgMX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBuZXdUaW1lID0gK3JhY2VEdXJhdGlvbiA8IGNhcldpbi50aW1lID8gK3JhY2VEdXJhdGlvbiA6IGNhcldpbi50aW1lO1xuICAgICAgICAgICAgICB1cGRhdGVXaW5uZXIoY2FySWQsIGNhcldpbi53aW5zICsgMSwgK25ld1RpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRlVmFsdWUgPSBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlO1xuICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVWYWx1ZSA9IGN1cnJlbnRUcmFuc2xhdGVWYWx1ZSA/IGAkeytjdXJyZW50VHJhbnNsYXRlVmFsdWUuc2xpY2UoMCwgLTEpICsgZHJpdmVBbmltYXRpb25TdGVwLnN0ZXBEaXN0YW5jZX0lYCA6IGAke2RyaXZlQW5pbWF0aW9uU3RlcC5zdGVwRGlzdGFuY2V9JWA7XG4gICAgICAgIGNhckljb25CbG9jay5zdHlsZS50cmFuc2xhdGUgPSBuZXdUcmFuc2xhdGVWYWx1ZTtcbiAgICAgIH1cbiAgICB9LCBkcml2ZUFuaW1hdGlvblN0ZXAuc3RlcERpc3RhbmNlKTtcbiAgICAoY2FyQmxvY2sgYXMgSFRNTERpdkVsZW1lbnQpLmRhdGFzZXRbYGludGVydmFsSWRgXSA9IGAke2NhckFuaW1hdGlvbkludGVydmFsSWR9YDtcbiAgICBjb25zdCBpc0VuZ2luZU9rID0gYXdhaXQgY2hlY2tFbmdpbmUoY2FySWQpO1xuICAgIGlmICghaXNFbmdpbmVPaykgY2xlYXJJbnRlcnZhbChjYXJBbmltYXRpb25JbnRlcnZhbElkKTtcbiAgICByZXR1cm4gUHJvbWlzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBnZXRDYXJzQW1vdW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzXCI7XG5cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyR2FyYWdlSGVhZGVyKCkge1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyID0gY3JlYXRlTm9kZSgnaGVhZGVyJyk7XG4gIGNvbnN0IGdhcmFnZUNhcnNIZWFkZXJMYWJlbCA9IGNyZWF0ZU5vZGUoJ2hlYWRlcl9fbGFiZWwnLCAnR2FyYWdlICcpO1xuICBjb25zdCBjYXJzQW1vdW50ID0gYXdhaXQgZ2V0Q2Fyc0Ftb3VudCgpO1xuICBjb25zdCBnYXJhZ2VDYXJzSGVhZGVyVmFsdWUgPSBjcmVhdGVOb2RlKCdoZWFkZXJfX3ZhbHVlJywgYCR7Y2Fyc0Ftb3VudH1gKTtcblxuICBnYXJhZ2VDYXJzSGVhZGVyLmFwcGVuZChnYXJhZ2VDYXJzSGVhZGVyTGFiZWwsIGdhcmFnZUNhcnNIZWFkZXJWYWx1ZSk7XG4gIHJldHVybiBnYXJhZ2VDYXJzSGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VIZWFkZXI7IiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbWcsIHJlbmRlckNvbG9yU3ZnLCBnZXRDdXJyZW50R2FyYWdlUGFnZSwgc2V0Q3VycmVudEdhcmFnZVBhZ2UgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldEFsbENhcnMsIHJlbW92ZUNhciB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzJztcbmltcG9ydCB7IHN0YXJ0U3RvcENhciwgY2hlY2tFbmdpbmUgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvZW5naW5lJztcbmltcG9ydCB7XG4gIGNyZWF0ZVdpbm5lciwgZGVsZXRlV2lubmVyLCBnZXRXaW5uZXIsIHVwZGF0ZVdpbm5lcixcbn0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IGdldERyaXZlU3RlcCBmcm9tICcuLi8uLi8uLi9hbmltYXRpb24vZHJpdmUnO1xuaW1wb3J0IElDYXIgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9jYXInO1xuaW1wb3J0IHsgY2Fyc1BlckdhcmFnZVBhZ2UgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHVwZGF0ZUdhcmFnZVBhZ2UgZnJvbSAnLi4vbW9kdWxlcy91cGRhdGUtZHluYW1pYy1jb250ZW50L3VwZGF0ZS1nYXJhZ2UtZHluYW1pYy1jb250ZW50JztcbmltcG9ydCB7IGRyaXZlQ2FyLCBzdGFydFJhY2UsIHN0YXJ0U2luZ2xlQ2FyIH0gZnJvbSAnLi9kcml2ZS1jYXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3BlY2lmaWNDYXIoY2FyOiBJQ2FyKSB7XG4gIGNvbnN0IGNhckJsb2NrID0gY3JlYXRlTm9kZSgnY2FyLWJsb2NrJyk7XG4gIGNhckJsb2NrLmRhdGFzZXQuY2FySWQgPSBgJHtjYXIuaWR9YDtcblxuICBjb25zdCBjYXJNb2RpZmllcnMgPSBjcmVhdGVOb2RlKCdtb2RpZmllcicpO1xuXG4gIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc2VsZWN0Jyk7XG4gIHNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdF9faW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGVkaXRJbnB1dC52YWx1ZSA9IGNhci5uYW1lO1xuICAgIGVkaXRJbnB1dC5kYXRhc2V0LmNhcklkID0gYCR7Y2FyLmlkfWA7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmVtb3ZlJyk7XG4gIGNvbnN0IHJlbW92ZU9wdGlvbnMgPSB7XG4gICAgdXBkYXRlSGVhZGVyOiB0cnVlLFxuICAgIHVwZGF0ZVBhZ2luYXRpb246IHRydWUsXG4gICAgdXBkYXRlUGFnZU51bWJlcjogdHJ1ZSxcbiAgfVxuICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgcmVtb3ZlQ2FyKGNhci5pZCk7XG4gICAgY2FyQmxvY2sucmVtb3ZlKCk7XG4gICAgY29uc3QgY2Fyc0hlYWRlckFtb3VudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICBpZiAoY2Fyc0hlYWRlckFtb3VudEJsb2NrICYmIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCkge1xuICAgICAgY2Fyc0hlYWRlckFtb3VudEJsb2NrLnRleHRDb250ZW50ID0gYCR7K2NhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCAtIDF9YDtcbiAgICB9XG4gICAgYXdhaXQgZGVsZXRlV2lubmVyKGNhci5pZCk7XG5cbiAgICBjb25zdCBjYXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FycycpO1xuICAgIGNvbnN0IGN1cnJlbnRHYXJhZ2VQYWdlID0gZ2V0Q3VycmVudEdhcmFnZVBhZ2UoKTtcbiAgICBpZiAoY2Fyc0Jsb2NrPy5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCAmJiBjdXJyZW50R2FyYWdlUGFnZSAhPT0gJzEnKSBzZXRDdXJyZW50R2FyYWdlUGFnZSgrY3VycmVudEdhcmFnZVBhZ2UgLSAxKTtcbiAgICB1cGRhdGVHYXJhZ2VQYWdlKHJlbW92ZU9wdGlvbnMpO1xuICB9KTtcblxuICBjYXJNb2RpZmllcnMuYXBwZW5kKHNlbGVjdEJ1dHRvbiwgcmVtb3ZlQnV0dG9uKTtcblxuICBjb25zdCBjYXJOYW1lID0gY3JlYXRlTm9kZSgnbmFtZScsIGNhci5uYW1lKTtcbiAgY29uc3QgY2FySWNvbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhckljb25CbG9jay5pbm5lckhUTUwgPSByZW5kZXJDb2xvclN2ZyhjYXIuY29sb3IpO1xuICBjYXJJY29uQmxvY2suY2xhc3NOYW1lID0gJ2Nhcic7XG5cbiAgY29uc3QgZmxhZ0ljb25CbG9jayA9IGNyZWF0ZUltZygnYXNzZXRzL2ljb24vZmxhZy5zdmcnLCAnZmxhZycpO1xuICBjb25zdCBjb250cm9scyA9IGNyZWF0ZU5vZGUoJ2NvbnRyb2xzJyk7XG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlQnV0dG9uKCdzdGFydCcpO1xuICBjb25zdCBzdG9wID0gY3JlYXRlQnV0dG9uKCdzdG9wJyk7XG4gIHN0YXJ0LmRpc2FibGVkID0gZmFsc2U7XG4gIHN0b3AuZGlzYWJsZWQgPSB0cnVlO1xuICBzdGFydC5kYXRhc2V0LmNhcklkID0gYCR7Y2FyLmlkfWA7XG5cbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgc3RhcnRTaW5nbGVDYXIoY2FyQmxvY2spO1xuICB9KTtcblxuICBzdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIHN0b3AuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHN0YXJ0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgYXdhaXQgc3RhcnRTdG9wQ2FyKGNhci5pZCwgJ3N0b3BwZWQnKTtcbiAgICBjYXJJY29uQmxvY2suc3R5bGUudHJhbnNsYXRlID0gJyc7XG4gICAgY29uc3QgY2FySW50ZXJ2YWxJZCA9IGNhckJsb2NrLmRhdGFzZXRbJ2ludGVydmFsSWQnXTtcbiAgICBjb25zb2xlLmxvZyhjYXJJbnRlcnZhbElkKTtcbiAgICBjbGVhckludGVydmFsKGNhckludGVydmFsSWQpO1xuICB9KTtcbiAgY29udHJvbHMuYXBwZW5kKHN0YXJ0LCBzdG9wKTtcblxuICBjb25zdCByYWNlID0gY3JlYXRlTm9kZSgncmFjZScpO1xuICByYWNlLmFwcGVuZChjYXJJY29uQmxvY2ssIGZsYWdJY29uQmxvY2spO1xuXG4gIGNhckJsb2NrLmFwcGVuZChjYXJNb2RpZmllcnMsIGNhck5hbWUsIGNvbnRyb2xzLCByYWNlKTtcbiAgcmV0dXJuIGNhckJsb2NrO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJDYXJzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FycycpPy5yZW1vdmUoKTtcbiAgY29uc3QgY2FycyA9IGNyZWF0ZU5vZGUoJ2NhcnMnKTtcbiAgY29uc3QgZ2FyYWdlUGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKTtcbiAgbGV0IGFsbENhcnMgPSBbXTtcbiAgaWYgKGdhcmFnZVBhZ2UpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnNQZXJHYXJhZ2VQYWdlOyBpICs9IDEpIHtcbiAgICAgIGFsbENhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKHsgX2xpbWl0OiBjYXJzUGVyR2FyYWdlUGFnZSwgX3BhZ2U6IChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXJhZ2VQYWdlJykgfHwgJzEnKSB9KTtcbiAgICB9XG4gIH1cbiAgYWxsQ2Fycy5mb3JFYWNoKChjYXI6IElDYXIpID0+IHtcbiAgICBjYXJzLmFwcGVuZChyZW5kZXJTcGVjaWZpY0NhcihjYXIpKTtcbiAgfSk7XG4gIHJldHVybiBjYXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXJzO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBicmFuZHMsIG1vZGVscyB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzLW5hbWUnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHJlbmRlckdhcmFnZUNhcnMsIHsgcmVuZGVyU3BlY2lmaWNDYXIgfSBmcm9tICcuL2dhcmFnZS1jYXJzJztcbmltcG9ydCB7IGNhcnNUb0dlbmVyYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IHN0YXJ0UmFjZSB9IGZyb20gJy4vZHJpdmUtY2FyJztcblxuZnVuY3Rpb24gcmVuZGVyR2FyYWdlQ29udHJvbHMoKSB7XG4gIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gY3JlYXRlTm9kZSgnY29udHJvbHMnKTtcblxuICBjb25zdCByYWNlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdyYWNlJyk7XG4gIHJhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmFjZScsICd0cnVlJyk7XG4gICAgY29uc3Qgc3RvcEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zdG9wJyk7XG4gICAgc3RvcEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiAoYnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50KS5jbGljaygpKVxuICAgIHN0YXJ0UmFjZSgpO1xuICB9KTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3Jlc2V0Jyk7XG4gIHJlc2V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbl9fc3RvcCcpLmZvckVhY2goKGVsKSA9PiAoZWwgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCkpXG4gICAgcmFjZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcbiAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2dlbmVyYXRlJyk7XG4gIGdlbmVyYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dF9fZ2FyYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnNUb0dlbmVyYXRlOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJhbmRCcmFuZCA9IGJyYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBicmFuZHMubGVuZ3RoKV07XG4gICAgICBjb25zdCByYW5kTW9kZWwgPSBtb2RlbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9kZWxzLmxlbmd0aCldO1xuICAgICAgY29uc3QgY2FyTmFtZSA9IGAke3JhbmRCcmFuZH0gJHtyYW5kTW9kZWx9YDtcbiAgICAgIGNvbnN0IGNhciA9IHtcbiAgICAgICAgbmFtZTogY2FyTmFtZSxcbiAgICAgICAgY29sb3I6IGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWAsXG4gICAgICB9O1xuICAgICAgcmVzdWx0cy5wdXNoKGNyZWF0ZUNhcihjYXIpKTtcbiAgICB9XG4gICAgY29uc3QgZ2FyYWdlQ2FycyA9IGF3YWl0IHJlbmRlckdhcmFnZUNhcnMoKTtcbiAgICBjb25zdCBnYXJhZ2VWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xuICAgIGdhcmFnZVZpZXc/LmFwcGVuZChnYXJhZ2VDYXJzKTtcblxuICAgIGNvbnN0IGNhcnNIZWFkZXJBbW91bnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZhbHVlJyk7XG4gICAgaWYgKGNhcnNIZWFkZXJBbW91bnRCbG9jayAmJiBjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQpIHtcbiAgICAgIGNhcnNIZWFkZXJBbW91bnRCbG9jay50ZXh0Q29udGVudCA9IGAkeytjYXJzSGVhZGVyQW1vdW50QmxvY2sudGV4dENvbnRlbnQgKyBjYXJzVG9HZW5lcmF0ZX1gO1xuICAgIH1cbiAgfSk7XG5cbiAgZ2FyYWdlQ29udHJvbHMuYXBwZW5kKHJhY2VCdXR0b24sIHJlc2V0QnV0dG9uLCBnZW5lcmF0ZUJ1dHRvbik7XG4gIHJldHVybiBnYXJhZ2VDb250cm9scztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlQ29udHJvbHM7XG4iLCJpbXBvcnQgeyBjYXJzUGVyR2FyYWdlUGFnZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRBbGxDYXJzLCBnZXRDYXJzQW1vdW50IH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL2NhcnMnO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uLCBjcmVhdGVOb2RlLCBnZXRDdXJyZW50R2FyYWdlUGFnZSwgc2V0Q3VycmVudEdhcmFnZVBhZ2UgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB1cGRhdGVHYXJhZ2VQYWdlIGZyb20gJy4uL21vZHVsZXMvdXBkYXRlLWR5bmFtaWMtY29udGVudC91cGRhdGUtZ2FyYWdlLWR5bmFtaWMtY29udGVudCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ2FycyBmcm9tICcuL2dhcmFnZS1jYXJzJztcblxuY29uc3QgdXBkYXRlR2FyYWdlUGFnZU9wdGlvbnMgPSB7XG4gIHVwZGF0ZVBhZ2luYXRpb246IHRydWUsXG4gIHVwZGF0ZVBhZ2VOdW1iZXI6IHRydWUsXG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQYWdlQmxvY2soKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcicpO1xuICBjb25zdCBwYWdlTnVtYmVyTGFiZWwgPSBjcmVhdGVOb2RlKCdwYWdlLW51bWJlcl9fbGFiZWwnLCAnUGFnZSAjJyk7XG4gIGNvbnN0IHBhZ2VOdW1iZXJWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3BhZ2UtbnVtYmVyX192YWx1ZScsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhcmFnZVBhZ2UnKSB8fCAnMScpO1xuICBwYWdlTnVtYmVyLmFwcGVuZChwYWdlTnVtYmVyTGFiZWwsIHBhZ2VOdW1iZXJWYWx1ZSk7XG4gIHJldHVybiBwYWdlTnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyR2FyYWdlUGFnaW5hdGlvbigpIHtcbiAgY29uc3QgcGFnaW5hdGlvbkJsb2NrID0gY3JlYXRlTm9kZSgncGFnaW5hdGlvbicpO1xuICBsZXQgY3VycmVudFBhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXJhZ2VQYWdlJyk7XG4gIGNvbnN0IHByZXZpb3VzID0gY3JlYXRlQnV0dG9uKCdQcmV2Jyk7XG4gIGlmIChjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSA9PT0gJzEnKSBwcmV2aW91cy5kaXNhYmxlZCA9IHRydWU7XG5cbiAgY29uc3QgbmV4dCA9IGNyZWF0ZUJ1dHRvbignTmV4dCcpO1xuICBwcmV2aW91cy5jbGFzc0xpc3QuYWRkKCdwcmV2X19nYXJhZ2UnKTtcbiAgbmV4dC5jbGFzc0xpc3QuYWRkKCduZXh0X19nYXJhZ2UnKTtcbiAgbGV0IGNhcnNBbW91bnQgPSAoYXdhaXQgZ2V0QWxsQ2FycygpKS5sZW5ndGg7XG4gIGlmIChjYXJzQW1vdW50ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgaWYgKCtjYXJzQW1vdW50IDwgY2Fyc1BlckdhcmFnZVBhZ2UgKiArY3VycmVudFBhZ2UpIG5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByYWNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fcmFjZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHJhY2VCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBuZXh0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3Jlc2V0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgaWYgKHJlc2V0QnV0dG9uKSByZXNldEJ1dHRvbi5jbGljaygpO1xuICAgIGNhcnNBbW91bnQgPSBhd2FpdCBnZXRDYXJzQW1vdW50KCk7XG5cbiAgICBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRHYXJhZ2VQYWdlKCk7XG4gICAgc2V0Q3VycmVudEdhcmFnZVBhZ2UoK2N1cnJlbnRQYWdlICsgMSk7XG4gICAgY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSArIDE7XG5cbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJyk7XG4gICAgZ2FyYWdlVmlldz8uYXBwZW5kKGdhcmFnZUNhcnMpO1xuXG4gICAgYXdhaXQgdXBkYXRlR2FyYWdlUGFnZSh1cGRhdGVHYXJhZ2VQYWdlT3B0aW9ucyk7XG4gIH0pO1xuXG4gIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJhY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19yYWNlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcmFjZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHByZXZpb3VzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRHYXJhZ2VQYWdlKCk7XG4gICAgc2V0Q3VycmVudEdhcmFnZVBhZ2UoK2N1cnJlbnRQYWdlIC0gMSk7XG5cbiAgICBjb25zdCBnYXJhZ2VDYXJzID0gYXdhaXQgcmVuZGVyR2FyYWdlQ2FycygpO1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJyk7XG4gICAgZ2FyYWdlVmlldz8uYXBwZW5kKGdhcmFnZUNhcnMpO1xuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19yZXNldCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGlmIChyZXNldEJ1dHRvbikgcmVzZXRCdXR0b24uY2xpY2soKTtcblxuICAgIHVwZGF0ZUdhcmFnZVBhZ2UodXBkYXRlR2FyYWdlUGFnZU9wdGlvbnMpO1xuICB9KTtcblxuICBjb25zdCBjdXJyZW50UGFnZUJsb2NrID0gcmVuZGVyQ3VycmVudFBhZ2VCbG9jaygpO1xuICBwYWdpbmF0aW9uQmxvY2suYXBwZW5kKHByZXZpb3VzLCBjdXJyZW50UGFnZUJsb2NrLCBuZXh0KTtcbiAgcmV0dXJuIHBhZ2luYXRpb25CbG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FyYWdlUGFnaW5hdGlvbjtcbiIsImltcG9ydCByZW5kZXJDYXJNYW5hZ2VtZW50IGZyb20gJy4vY29tcG9uZW50cy9jYXItbWFuYWdlbWVudCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlQ29udHJvbHMgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jb250cm9scyc7XG5pbXBvcnQgcmVuZGVyQ2FycyBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlLWNhcnMnO1xuaW1wb3J0IHsgcmVuZGVyR2FyYWdlUGFnaW5hdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCByZW5kZXJHYXJhZ2VIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS1jYXJzLWhlYWRlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhcmFnZVBhZ2UoKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JhY2UnLCAnZmFsc2UnKTtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FyYWdlUGFnZScsICcxJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGdhcmFnZVZpZXcgPSBjcmVhdGVOb2RlKCdnYXJhZ2UnKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBjb25zdCBjYXJNYW5hZ2VtZW50ID0gcmVuZGVyQ2FyTWFuYWdlbWVudCgpO1xuICAgIGNvbnN0IGdhcmFnZUNvbnRyb2xzID0gcmVuZGVyR2FyYWdlQ29udHJvbHMoKTtcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gYXdhaXQgcmVuZGVyR2FyYWdlUGFnaW5hdGlvbigpO1xuICAgIGNvbnN0IGhlYWRlciA9IGF3YWl0IHJlbmRlckdhcmFnZUhlYWRlcigpO1xuICAgIGNvbnN0IGdhcmFnZUNhcnMgPSBhd2FpdCByZW5kZXJDYXJzKCk7XG5cbiAgICBnYXJhZ2VWaWV3LmFwcGVuZChjYXJNYW5hZ2VtZW50LCBnYXJhZ2VDb250cm9scywgcGFnaW5hdGlvbiwgaGVhZGVyLCBnYXJhZ2VDYXJzKTtcbiAgICBib2R5LmFwcGVuZChnYXJhZ2VWaWV3KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VQYWdlO1xuIiwiaW1wb3J0IHsgZ2V0Q2Fyc0Ftb3VudCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fyc1wiO1xuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVHYXJhZ2VIZWFkZXIgKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xuICBpZiAoaGVhZGVyKSB7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYXdhaXQgZ2V0Q2Fyc0Ftb3VudCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUdhcmFnZUhlYWRlcjtcbiIsImltcG9ydCB7IGdldEN1cnJlbnRHYXJhZ2VQYWdlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2hlbHBlcnNcIjtcblxuZnVuY3Rpb24gdXBkYXRlR2FyYWdlUGFnZU51bWJlcigpIHtcbiAgY29uc3QgcGFnZU51bWJlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtbnVtYmVyX192YWx1ZScpO1xuICBpZiAocGFnZU51bWJlckJsb2NrKSB7XG4gICAgcGFnZU51bWJlckJsb2NrLnRleHRDb250ZW50ID0gZ2V0Q3VycmVudEdhcmFnZVBhZ2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHYXJhZ2VQYWdlTnVtYmVyO1xuIiwiaW1wb3J0IHsgY2Fyc1BlckdhcmFnZVBhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBnZXRDYXJzQW1vdW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9jYXJzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50R2FyYWdlUGFnZSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByZXZCdXR0b24oKSB7XG5cbiAgY29uc3QgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50R2FyYWdlUGFnZSgpO1xuICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2X19nYXJhZ2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgaWYgKGN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlID09PSAnMScgJiYgcHJldmlvdXNCdXR0b24pIHtcbiAgICBwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0gZWxzZSBwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVOZXh0QnV0dG9uKCkge1xuICBjb25zdCBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRHYXJhZ2VQYWdlKCk7XG4gIGNvbnN0IGNhcnNBbW91bnQgPSBhd2FpdCBnZXRDYXJzQW1vdW50KCk7XG4gIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dF9fZ2FyYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGNvbnNvbGUubG9nKGNhcnNBbW91bnQsIGNhcnNQZXJHYXJhZ2VQYWdlLCBjdXJyZW50UGFnZSk7XG4gIGlmIChjYXJzQW1vdW50ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgaWYgKCtjYXJzQW1vdW50IDw9IGNhcnNQZXJHYXJhZ2VQYWdlICogK2N1cnJlbnRQYWdlKSBuZXh0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBlbHNlIG5leHRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVHYXJhZ2VQYWdpbmF0aW9uKCkge1xuICB1cGRhdGVQcmV2QnV0dG9uKCk7XG4gIHVwZGF0ZU5leHRCdXR0b24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlR2FyYWdlUGFnaW5hdGlvbjsiLCJpbXBvcnQgcmVuZGVyQ2FycyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9nYXJhZ2UtY2Fyc1wiO1xuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVHYXJhZ2VUYWJsZSgpIHtcbiAgY29uc3QgY2FycyA9IGF3YWl0IHJlbmRlckNhcnMoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpPy5hcHBlbmQoY2Fycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUdhcmFnZVRhYmxlO1xuIiwiaW1wb3J0IElVcGRhdGVHYXJhZ2VQYWdlT3B0aW9ucyBmcm9tIFwiLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy91cGRhdGUtZ2FyYWdlLXBhZ2VcIjtcbmltcG9ydCB1cGRhdGVHYXJhZ2VIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy50cy91cGRhdGUtY2Fycy1hbW91bnRcIjtcbmltcG9ydCB1cGRhdGVHYXJhZ2VQYWdlTnVtYmVyIGZyb20gXCIuL2NvbXBvbmVudHMudHMvdXBkYXRlLWdhcmFnZS1wYWdlLW51bWJlclwiO1xuaW1wb3J0IHVwZGF0ZUdhcmFnZVBhZ2luYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy50cy91cGRhdGUtZ2FyYWdlLXBhZ2luYXRpb25cIjtcbmltcG9ydCB1cGRhdGVHYXJhZ2VUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzLnRzL3VwZGF0ZS1nYXJhZ2UtdGFibGVcIjtcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2FyYWdlUGFnZSh1cGRhdGVQYWdlT3B0aW9uczogSVVwZGF0ZUdhcmFnZVBhZ2VPcHRpb25zKSB7XG4gIGlmICh1cGRhdGVQYWdlT3B0aW9ucy51cGRhdGVIZWFkZXIpIHVwZGF0ZUdhcmFnZUhlYWRlcigpO1xuICBpZiAodXBkYXRlUGFnZU9wdGlvbnMudXBkYXRlUGFnaW5hdGlvbikgdXBkYXRlR2FyYWdlUGFnaW5hdGlvbigpO1xuICBpZiAodXBkYXRlUGFnZU9wdGlvbnMudXBkYXRlUGFnZU51bWJlcikgdXBkYXRlR2FyYWdlUGFnZU51bWJlcigpO1xuICB1cGRhdGVHYXJhZ2VUYWJsZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVHYXJhZ2VQYWdlO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgcmVuZGVyUmVjb3Jkc1BhZ2UgZnJvbSAnLi9yZWNvcmRzL3JlY29yZHMnO1xuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgY29uc3QgaGVhZGVyQnV0dG9ucyA9IGNyZWF0ZU5vZGUoJ2J1dHRvbnMnKTtcblxuICBjb25zdCB0b0dhcmFnZSA9IGNyZWF0ZUJ1dHRvbignZ2FyYWdlJyk7XG4gIHRvR2FyYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgcmVjb3Jkc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChnYXJhZ2VWaWV3ICYmIHJlY29yZHNWaWV3KSB7XG4gICAgICBnYXJhZ2VWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmVjb3Jkc1ZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRvUmVjb3JkcyA9IGNyZWF0ZUJ1dHRvbigncmVjb3JkcycpO1xuICB0b1JlY29yZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCByZWNvcmRzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGdhcmFnZVZpZXcgJiYgcmVjb3Jkc1ZpZXcpIHtcbiAgICAgIGdhcmFnZVZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJlY29yZHNWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmVuZGVyUmVjb3Jkc1BhZ2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhlYWRlckJ1dHRvbnMuYXBwZW5kKHRvR2FyYWdlLCB0b1JlY29yZHMpO1xuXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyQnV0dG9ucyk7XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keT8uYXBwZW5kKGhlYWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlcjtcbiIsImltcG9ydCB7IGdldFJlY29yZHNBbW91bnQgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvcmVjb3Jkcyc7XG5pbXBvcnQgeyBjcmVhdGVOb2RlLCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IHdpbm5lcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHJlbmRlclRhYmxlIGZyb20gJy4vcmVuZGVyLXRhYmxlJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyV2lubmVyc1BhZ2luYXRpb24oKSB7XG4gIGNvbnN0IHBhZ2luYXRpb24gPSBjcmVhdGVOb2RlKCd3aW5uZXJzLXBhZ2luYXRpb24nKTtcbiAgY29uc3QgcHJldmlvdXMgPSBjcmVhdGVCdXR0b24oJ1ByZXYnKTtcbiAgY29uc3QgbmV4dCA9IGNyZWF0ZUJ1dHRvbignTmV4dCcpO1xuXG4gIGxldCBjdXJyZW50UGFnZSA9IDA7XG4gIGNvbnN0IHRtcFBhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpO1xuICBpZiAodG1wUGFnZSkge1xuICAgIGN1cnJlbnRQYWdlID0gK3RtcFBhZ2U7XG4gIH1cbiAgaWYgKGN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlID09PSAxKSB7XG4gICAgcHJldmlvdXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgbGV0IHJlY29yZHNBbW91bnQgPSBhd2FpdCBnZXRSZWNvcmRzQW1vdW50KCkgfHwgMTtcblxuICBpZiAocmVjb3Jkc0Ftb3VudCAmJiBjdXJyZW50UGFnZSkge1xuICAgIGlmICgrcmVjb3Jkc0Ftb3VudCA8ICh3aW5uZXJzQ29uZmlnLmxpbWl0ICogK2N1cnJlbnRQYWdlKSArIDEpIG5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV4dC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG1wUGFnZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNQYWdlJyk7XG4gICAgaWYgKHRtcFBhZ2UpIHtcbiAgICAgIGN1cnJlbnRQYWdlID0gK3RtcFBhZ2U7XG4gICAgfVxuICAgIFxuICAgIGN1cnJlbnRQYWdlIC09IDE7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc1BhZ2UnLCBgJHtjdXJyZW50UGFnZX1gKTtcblxuICAgIGlmIChjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSA9PT0gMSkge1xuICAgICAgcHJldmlvdXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZW5kZXJUYWJsZSgpO1xuICB9KTtcblxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByZXZpb3VzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRQYWdlID0gMDtcbiAgICBjb25zdCB0bXBQYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc1BhZ2UnKTtcbiAgICBpZiAodG1wUGFnZSkge1xuICAgICAgY3VycmVudFBhZ2UgPSArdG1wUGFnZTtcbiAgICB9XG4gICAgY3VycmVudFBhZ2UgKz0gMTtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzUGFnZScsIGAke2N1cnJlbnRQYWdlfWApO1xuICAgIGlmIChyZWNvcmRzQW1vdW50ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgICBpZiAoK3JlY29yZHNBbW91bnQgPCAod2lubmVyc0NvbmZpZy5saW1pdCAqICtjdXJyZW50UGFnZSkgKyAxKSBuZXh0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVuZGVyVGFibGUoKTtcbiAgfSk7XG5cbiAgcGFnaW5hdGlvbi5hcHBlbmQocHJldmlvdXMsIG5leHQpO1xuICByZXR1cm4gcGFnaW5hdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2lubmVyc1BhZ2luYXRpb247XG4iLCJpbXBvcnQgeyBnZXRXaW5uZXJzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1jb250cm9sbGVyL3JlY29yZHMnO1xuaW1wb3J0IHsgY3JlYXRlVGFibGVDZWxsLCBjcmVhdGVUYWJsZUhlYWRlciwgcmVuZGVyQ29sb3JTdmcgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldEFsbENhcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLWNvbnRyb2xsZXIvY2Fycyc7XG5pbXBvcnQgSVdpbm5lciBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3dpbm5lcic7XG5pbXBvcnQgeyB3aW5uZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB1cmxXaW5uZXJzU29ydCBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VybC13aW5uZXJzLXNvcnQnO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJUYWJsZSh1cmxPcHRpb25zPzogdXJsV2lubmVyc1NvcnQpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICB0YWJsZS5jbGFzc05hbWUgPSAnd2lubmVycyc7XG4gIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGhlYWRlclJvdy5jbGFzc05hbWUgPSAnd2lubmVyc19faGVhZGVyJztcbiAgY29uc3QgdGFibGVIZWFkZXJOdW1iZXIgPSBjcmVhdGVUYWJsZUhlYWRlcignaGVhZGVyX19udW1iZXInLCAnIycpO1xuICBjb25zdCB0YWJsZUhlYWRlckNhciA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX2NhcicsICdDYXInKTtcbiAgY29uc3QgdGFibGVIZWFkZXJOYW1lID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fbmFtZScsICdOYW1lJyk7XG5cbiAgY29uc3QgdGFibGVIZWFkZXJXaW5zID0gY3JlYXRlVGFibGVIZWFkZXIoJ2hlYWRlcl9fd2lucyBjbGlja2FibGUnLCAnV2lucyDih4UnKTtcbiAgdGFibGVIZWFkZXJXaW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBzb3J0OiAnd2lucycsXG4gICAgICBvcmRlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnID8gJ0FTQycgOiAnREVTQycsXG4gICAgfTtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2lubmVyc09yZGVyJykgPT09ICdhc2MnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnZGVzYycpO1xuICAgIH0gZWxzZSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzT3JkZXInLCAnYXNjJyk7XG4gICAgcmVuZGVyVGFibGUob3B0aW9ucyk7XG4gIH0pO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGVyVGltZSA9IGNyZWF0ZVRhYmxlSGVhZGVyKCdoZWFkZXJfX3RpbWUgY2xpY2thYmxlJywgJ1RpbWUg4oeFJyk7XG4gIHRhYmxlSGVhZGVyVGltZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc29ydDogJ3RpbWUnLFxuICAgICAgb3JkZXI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNPcmRlcicpID09PSAnYXNjJyA/ICdBU0MnIDogJ0RFU0MnLFxuICAgIH07XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dpbm5lcnNPcmRlcicpID09PSAnYXNjJykge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc09yZGVyJywgJ2Rlc2MnKTtcbiAgICB9IGVsc2Ugc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc09yZGVyJywgJ2FzYycpO1xuICAgIHJlbmRlclRhYmxlKG9wdGlvbnMpO1xuICB9KTtcblxuICBoZWFkZXJSb3cuYXBwZW5kKFxuICAgIHRhYmxlSGVhZGVyTnVtYmVyLFxuICAgIHRhYmxlSGVhZGVyQ2FyLFxuICAgIHRhYmxlSGVhZGVyTmFtZSxcbiAgICB0YWJsZUhlYWRlcldpbnMsXG4gICAgdGFibGVIZWFkZXJUaW1lLFxuICApO1xuICB0YWJsZS5hcHBlbmQoaGVhZGVyUm93KTtcbiAgY29uc3Qgd2lubmVycyA9IGF3YWl0IGdldFdpbm5lcnModXJsT3B0aW9ucyk7XG4gIGxldCBjb3VudGVyID0gMCArIHdpbm5lcnNDb25maWcubGltaXQgKiAoKyhzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpIHx8IDEpIC0gMSk7XG4gIGNvbnN0IGNhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gIHdpbm5lcnMuZm9yRWFjaChhc3luYyAod2lubmVyOiBJV2lubmVyKSA9PiB7XG4gICAgY291bnRlciArPSAxO1xuICAgIGNvbnN0IGRhdGFSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG51bWJlckNlbGwgPSBjcmVhdGVUYWJsZUNlbGwoYCR7Y291bnRlcn1gKTtcblxuICAgIGNvbnN0IGNhckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGxldCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcnNbaV0uaWQgPT09IHdpbm5lci5pZCkge1xuICAgICAgICBuYW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChjYXJzW2ldLm5hbWUpO1xuICAgICAgICBjYXJDZWxsLmlubmVySFRNTCA9IHJlbmRlckNvbG9yU3ZnKGNhcnNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3aW5zQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChgJHt3aW5uZXIud2luc31gKTtcbiAgICBjb25zdCB0aW1lQ2VsbCA9IGNyZWF0ZVRhYmxlQ2VsbChgJHt3aW5uZXIudGltZX1gKTtcbiAgICBkYXRhUm93LmFwcGVuZChudW1iZXJDZWxsLCBjYXJDZWxsLCBuYW1lQ2VsbCwgd2luc0NlbGwsIHRpbWVDZWxsKTtcbiAgICB0YWJsZS5hcHBlbmQoZGF0YVJvdyk7XG4gIH0pO1xuICBjb25zdCByZWNvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZHMnKTtcbiAgaWYgKHJlY29yZHM/LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzJykpIHJlY29yZHMucXVlcnlTZWxlY3RvcignLndpbm5lcnMnKT8ucmVtb3ZlKCk7XG4gIHJlY29yZHM/LmFwcGVuZCh0YWJsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhYmxlO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0UmVjb3Jkc0Ftb3VudCB9IGZyb20gJy4uLy4uLy4uL2RhdGEtY29udHJvbGxlci9yZWNvcmRzJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyV2lubmVySGVhZGVyKCkge1xuICBjb25zdCByZWNvcmRzTGFiZWwgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19sYWJlbCcsICdSZWNvcmRzOicpO1xuICBjb25zdCByZWNvcmRzQW1vdW50ID0gYXdhaXQgZ2V0UmVjb3Jkc0Ftb3VudCgpO1xuICBjb25zdCByZWNvcmRzVmFsdWUgPSBjcmVhdGVOb2RlKCdyZWNvcmRzX19hbW91bnQnLCByZWNvcmRzQW1vdW50IHx8ICcwJyk7XG4gIGNvbnN0IHJlY29yZHNBbW91bnRCbG9jayA9IGNyZWF0ZU5vZGUoJ3JlY29yZHNfX2Ftb3VudC1ibG9jaycpO1xuICByZWNvcmRzQW1vdW50QmxvY2suYXBwZW5kKHJlY29yZHNMYWJlbCwgcmVjb3Jkc1ZhbHVlKTtcbiAgcmV0dXJuIHJlY29yZHNBbW91bnRCbG9jaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2lubmVySGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uJztcbmltcG9ydCByZW5kZXJUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVyLXRhYmxlJztcbmltcG9ydCByZW5kZXJXaW5uZXJIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL3dpbm5lci1oZWFkZXInO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJSZWNvcmRzUGFnZSgpIHtcbiAgaWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3aW5uZXJzUGFnZScsICcxJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGlmIChib2R5KSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmRzJyk7XG4gICAgaWYgKHJlY29yZHMpIHJlY29yZHMucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgcmVjb3JkcyA9IGNyZWF0ZU5vZGUoJ3JlY29yZHMnKTtcbiAgY29uc3QgcGFnaW5hdGlvbiA9IGF3YWl0IHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uKCk7XG4gIHJlY29yZHMuYXBwZW5kKHBhZ2luYXRpb24pO1xuICBjb25zdCByZWNvcmRzSGVhZGVyID0gYXdhaXQgcmVuZGVyV2lubmVySGVhZGVyKCk7XG4gIHJlY29yZHMuYXBwZW5kKHJlY29yZHNIZWFkZXIpO1xuICByZW5kZXJUYWJsZSgpO1xuICBib2R5Py5hcHBlbmQocmVjb3Jkcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclJlY29yZHNQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVyR2FyYWdlUGFnZSBmcm9tICcuL3NjcmlwdHMvcGFnZXMvZ2FyYWdlL2dhcmFnZSc7XG5pbXBvcnQgcmVuZGVyUmVjb3Jkc1BhZ2UgZnJvbSAnLi9zY3JpcHRzL3BhZ2VzL3JlY29yZHMvcmVjb3Jkcyc7XG5pbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gJy4vc2NyaXB0cy9wYWdlcy9oZWFkZXInO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJBcHAoKSB7XG4gIHJlbmRlckhlYWRlcigpO1xuICByZW5kZXJHYXJhZ2VQYWdlKCk7XG4gIGF3YWl0IHJlbmRlclJlY29yZHNQYWdlKCk7XG4gIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb3JkcycpIGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5yZW5kZXJBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==