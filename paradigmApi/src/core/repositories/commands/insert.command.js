"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.InsertDbCommand = void 0;
var db_command_1 = require("./db.command");
var InsertDbCommand = /** @class */ (function (_super) {
    __extends(InsertDbCommand, _super);
    function InsertDbCommand(connection, tableName, entities) {
        var _this = _super.call(this, connection) || this;
        _this.prepareStatement(tableName, entities);
        return _this;
    }
    InsertDbCommand.prototype.prepareStatement = function (tableName, entities) {
        if (!entities || !entities.length)
            throw new Error("The array of entities can not be null or empty.");
        this._query = "INSERT INTO ".concat(tableName, " (").concat(this.getColumnNames(entities), ") VALUES ").concat(this.getValues(entities), " ON DUPLICATE KEY UPDATE ").concat(this.getUpdateStatement(entities));
        this._parameters = this.getValueArray(entities);
    };
    InsertDbCommand.prototype.getColumnNames = function (entities) {
        var keys = Object.keys(entities[0]).map(function (x) { return "`".concat(x, "`"); });
        return keys.join(",");
    };
    InsertDbCommand.prototype.getValues = function (entities) {
        var questionMarks = Object.keys(entities[0])
            .map(function () { return "?"; })
            .join(",");
        return entities.map(function () { return "(".concat(questionMarks, ")"); }).join(",");
    };
    InsertDbCommand.prototype.getUpdateStatement = function (entities) {
        var keys = Object.keys(entities[0]).map(function (x) { return (x !== "id" ? "`".concat(x, "` = VALUES(").concat(x, ")") : "id=id"); });
        return keys.join(",");
    };
    InsertDbCommand.prototype.getValueArray = function (entities) {
        var keys = Object.keys(entities[0]);
        var parameters = [];
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                var key = keys_1[_a];
                parameters.push(Object.prototype.hasOwnProperty.call(entity, key) ? entity[key] : null);
            }
        }
        return parameters;
    };
    return InsertDbCommand;
}(db_command_1.DbCommand));
exports.InsertDbCommand = InsertDbCommand;
