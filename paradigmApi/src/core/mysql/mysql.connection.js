"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MySqlConnection = void 0;
var paradigm_web_di_1 = require("@miracledevs/paradigm-web-di");
var MySqlConnection = /** @class */ (function () {
    function MySqlConnection() {
    }
    Object.defineProperty(MySqlConnection.prototype, "connection", {
        get: function () {
            return this._connection;
        },
        enumerable: false,
        configurable: true
    });
    MySqlConnection.prototype.initialize = function (connection) {
        if (!connection)
            throw new Error("The pooled connection cannot be null.");
        if (this._connection)
            throw new Error("Unable to initialize the connection twice.");
        this._connection = connection;
    };
    MySqlConnection = __decorate([
        (0, paradigm_web_di_1.Injectable)({ lifeTime: paradigm_web_di_1.DependencyLifeTime.Scoped })
    ], MySqlConnection);
    return MySqlConnection;
}());
exports.MySqlConnection = MySqlConnection;
