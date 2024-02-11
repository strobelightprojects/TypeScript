"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
// Import node-fetch 
Promise.resolve().then(function () { return require('node-fetch'); }).then(function (_a) {
    var fetch = _a.default;
    // An asynchronous function 
    function fetchData(url) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            // Throw an error
                            throw new Error("HTTP error! Status: ".concat(response.status));
                        }
                        return [2 /*return*/, response]; // Return response
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error fetching data:', error_1); // error 
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function displayData() {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl1, apiUrl2, response1, data1, response2, data2, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiUrl1 = 'https://strobelightprojects.github.io/wdd130/atlantis/index.html';
                        apiUrl2 = 'https://strobelightprojects.github.io/wdd130/wwr/site-plan-rafting.html';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, , 11]);
                        return [4 /*yield*/, fetchData(apiUrl1)];
                    case 2:
                        response1 = _a.sent();
                        if (!response1.ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, response1.text()];
                    case 3:
                        data1 = _a.sent();
                        console.log('Fetched data from first URL:', data1);
                        return [3 /*break*/, 5];
                    case 4:
                        console.log('Failed to fetch data from first URL:', response1.status);
                        _a.label = 5;
                    case 5: return [4 /*yield*/, fetchData(apiUrl2)];
                    case 6:
                        response2 = _a.sent();
                        if (!response2.ok) return [3 /*break*/, 8];
                        return [4 /*yield*/, response2.text()];
                    case 7:
                        data2 = _a.sent();
                        console.log('Fetched data from second URL:', data2);
                        return [3 /*break*/, 9];
                    case 8:
                        console.log('Failed to fetch data from second URL:', response2.status);
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        error_2 = _a.sent();
                        console.error('Error:', error_2);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    }
    // Run the example
    displayData();
}).catch(function (error) {
    console.error('Error loading node-fetch:', error);
});
