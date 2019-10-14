(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('cytoscape'), require('cytoscape-context-menus'), require('cytoscape-popper'), require('@angular/forms'), require('ngx-color-picker'), require('jquery'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/modal'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('mindmap', ['exports', '@angular/core', 'cytoscape', 'cytoscape-context-menus', 'cytoscape-popper', '@angular/forms', 'ngx-color-picker', 'jquery', 'ngx-bootstrap/utils', 'ngx-bootstrap/modal', '@angular/common'], factory) :
    (global = global || self, factory(global.mindmap = {}, global.ng.core, global.cytoscape, global.contextMenus, global.popper, global.ng.forms, global.ngxColorPicker, global.$, global.utils, global.modal, global.ng.common));
}(this, function (exports, core, cytoscape, contextMenus, popper, forms, ngxColorPicker, $, utils, modal, common) { 'use strict';

    cytoscape = cytoscape && cytoscape.hasOwnProperty('default') ? cytoscape['default'] : cytoscape;
    contextMenus = contextMenus && contextMenus.hasOwnProperty('default') ? contextMenus['default'] : contextMenus;
    popper = popper && popper.hasOwnProperty('default') ? popper['default'] : popper;
    $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MindmapService = /** @class */ (function () {
        function MindmapService() {
        }
        MindmapService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MindmapService.ctorParameters = function () { return []; };
        /** @nocollapse */ MindmapService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MindmapService_Factory() { return new MindmapService(); }, token: MindmapService, providedIn: "root" });
        return MindmapService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ColorService = /** @class */ (function () {
        function ColorService() {
        }
        /**
         * @return {?}
         */
        ColorService.prototype.getRandomColor = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var letters = '0123456789ABCDEF';
            /** @type {?} */
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        /**
         * @param {?} arrayColorUsed
         * @return {?}
         */
        ColorService.prototype.checkedColor = /**
         * @param {?} arrayColorUsed
         * @return {?}
         */
        function (arrayColorUsed) {
            /** @type {?} */
            var color = this.getRandomColor();
            if (arrayColorUsed.includes(color)) {
                this.checkedColor(arrayColorUsed);
            }
            return color;
        };
        ColorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ColorService.ctorParameters = function () { return []; };
        /** @nocollapse */ ColorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ColorService_Factory() { return new ColorService(); }, token: ColorService, providedIn: "root" });
        return ColorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToolbarService = /** @class */ (function () {
        function ToolbarService() {
        }
        /**
         * @param {?} node
         * @return {?}
         */
        ToolbarService.prototype.removeToolbarNode = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            /** @type {?} */
            var nodeId = node.data('id');
            /** @type {?} */
            var toolbar = document.querySelector('#toolbar-' + nodeId);
            if (toolbar) {
                toolbar.remove();
            }
        };
        /**
         * @param {?} node
         * @return {?}
         */
        ToolbarService.prototype.hideToolbarNode = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            /** @type {?} */
            var nodeId = node.data('id');
            /** @type {?} */
            var toolbar = document.querySelector('#toolbar-' + nodeId);
            if (toolbar) {
                toolbar.style.visibility = 'hidden';
            }
        };
        /**
         * @param {?} node
         * @return {?}
         */
        ToolbarService.prototype.showToolbarNode = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            /** @type {?} */
            var nodeId = node.data('id');
            /** @type {?} */
            var toolbar = document.querySelector('#toolbar-' + nodeId);
            if (toolbar) {
                toolbar.style.visibility = 'visible';
            }
        };
        // PARTIE COLLAPSE
        // PARTIE COLLAPSE
        /**
         * @param {?} node
         * @return {?}
         */
        ToolbarService.prototype.collapseNode = 
        // PARTIE COLLAPSE
        /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            var _this = this;
            node.data('collapsed', true);
            /** @type {?} */
            var connectedEdges = node.connectedEdges("[source=\"" + node.data('id') + "\"]");
            if (connectedEdges.length) {
                connectedEdges.map((/**
                 * @param {?} edge
                 * @return {?}
                 */
                function (edge) {
                    if (edge.style('visibility') === 'visible') {
                        edge.style('visibility', 'hidden');
                        edge.target().map((/**
                         * @param {?} subnode
                         * @return {?}
                         */
                        function (subnode) {
                            subnode.style('visibility', 'hidden');
                            subnode.data('show', false);
                            _this.hideToolbarNode(subnode);
                            _this.collapseNode(subnode);
                        }));
                    }
                }));
            }
        };
        /**
         * @param {?} node
         * @return {?}
         */
        ToolbarService.prototype.expandNode = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            var _this = this;
            /** @type {?} */
            var connectedEdges = node.connectedEdges("[source=\"" + node.data('id') + "\"]");
            node.data('collapsed', false);
            if (connectedEdges.length) {
                connectedEdges.map((/**
                 * @param {?} edge
                 * @return {?}
                 */
                function (edge) {
                    if (edge.style('visibility') === 'hidden') {
                        edge.style('visibility', 'visible');
                        edge.target().map((/**
                         * @param {?} subnode
                         * @return {?}
                         */
                        function (subnode) {
                            subnode.style('visibility', 'visible');
                            subnode.data('show', true);
                            _this.showToolbarNode(subnode);
                            _this.expandNode(subnode);
                        }));
                    }
                }));
            }
            this.hideToolbarNode(node);
        };
        ToolbarService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ToolbarService.ctorParameters = function () { return []; };
        /** @nocollapse */ ToolbarService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ToolbarService_Factory() { return new ToolbarService(); }, token: ToolbarService, providedIn: "root" });
        return ToolbarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NodeService = /** @class */ (function () {
        function NodeService(colorService) {
            this.colorService = colorService;
            colorService = this.colorService;
        }
        /**
         * @param {?} id
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.getNodeById = /**
         * @param {?} id
         * @param {?} that
         * @return {?}
         */
        function (id, that) {
            return that.cy.nodes('[id="' + id + '"]');
        };
        /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.renameNode = /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        function (node, that) {
            /** @type {?} */
            var currentLabel = node.data('label');
            /** @type {?} */
            var newLabel = prompt('Quel nom pour ce noeud ?', currentLabel);
            if (newLabel !== currentLabel) {
                node.data('label', newLabel);
            }
            that.emitChange();
        };
        /**
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.getUniqueNodeId = /**
         * @param {?} that
         * @return {?}
         */
        function (that) {
            /** @type {?} */
            var usedId = that.cy.nodes().map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                return el.data('id');
            }));
            /** @type {?} */
            var id = Math.round(100000 * Math.random()).toString(10);
            /** @type {?} */
            var idAlreadyExist = usedId.indexOf(id) !== -1;
            if (idAlreadyExist) {
                return this.getUniqueNodeId(that);
            }
            return id;
        };
        /**
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.getLastNodeId = /**
         * @param {?} that
         * @return {?}
         */
        function (that) {
            /** @type {?} */
            var nodes = that.cy.nodes();
            // console.log(nodes[nodes.length - 1].data('id'));
        };
        /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.getParentNode = /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        function (node, that) {
            /** @type {?} */
            var nodeId = node.data('id');
            /** @type {?} */
            var parentNodeId = node.connectedEdges('[target="' + nodeId + '"]').data('source');
            return that.cy.nodes('[id="' + parentNodeId + '"]');
        };
        // getTestNode(that) {
        //   return that.cy.nodes('[id="n"]');
        // }
        // getTestNode(that) {
        //   return that.cy.nodes('[id="n"]');
        // }
        /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.updateInformationNode = 
        // getTestNode(that) {
        //   return that.cy.nodes('[id="n"]');
        // }
        /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        function (node, that) {
            node.data('label', that.formNode.value.name);
            node.style('background-color', that.formNode.value.color);
            this.updateColorBranchNode(node, that.formNode.value.color, that);
        };
        /**
         * @param {?} array1
         * @param {?} array2
         * @return {?}
         */
        NodeService.prototype.merge_array = /**
         * @param {?} array1
         * @param {?} array2
         * @return {?}
         */
        function (array1, array2) {
            /** @type {?} */
            var result_array = [];
            /** @type {?} */
            var arr = array1.concat(array2);
            /** @type {?} */
            var len = arr.length;
            /** @type {?} */
            var assoc = {};
            while (len--) {
                /** @type {?} */
                var item = arr[len];
                if (!assoc[item]) {
                    result_array.unshift(item);
                    assoc[item] = true;
                }
            }
            return result_array;
        };
        /**
         * @param {?} node
         * @param {?} result
         * @param {?} used
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.getBranchConnected = /**
         * @param {?} node
         * @param {?} result
         * @param {?} used
         * @param {?} that
         * @return {?}
         */
        function (node, result, used, that) {
            // init variable
            /** @type {?} */
            var arrayResult = [];
            /** @type {?} */
            var arrayIdTested = [];
            /** @type {?} */
            var idNode = node.data('id');
            // on merge avce les paramètres
            arrayResult = this.merge_array(arrayResult, result);
            arrayIdTested = this.merge_array(used, arrayIdTested);
            if (idNode !== 'n') {
                arrayIdTested.push(idNode);
                /** @type {?} */
                var allNodesConnected = this.getNodeConnected(this.getNodeById(idNode, that));
                arrayResult = this.merge_array(arrayResult, allNodesConnected);
                if (allNodesConnected.length > 0) {
                    for (var id in allNodesConnected) {
                        id = allNodesConnected[id];
                        if (id !== 'n' && !arrayIdTested.includes(id)) {
                            arrayResult.push(id);
                            arrayIdTested.push(id);
                            /** @type {?} */
                            var test = this.getBranchConnected(this.getNodeById(id, that), arrayResult, arrayIdTested, that);
                            arrayResult = this.merge_array(arrayResult, test);
                        }
                    }
                }
            }
            // retorune un tableau d'id de node
            return arrayResult;
        };
        /**
         * @param {?} node
         * @return {?}
         */
        NodeService.prototype.getNodeConnected = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            /** @type {?} */
            var idNode = node.data('id');
            /** @type {?} */
            var result = [];
            /** @type {?} */
            var objectToArray;
            /** @type {?} */
            var allNodesConnected = node.connectedEdges();
            delete allNodesConnected['_private'];
            delete allNodesConnected['length'];
            objectToArray = Object.values(allNodesConnected);
            if (objectToArray.length > 0 && !result.includes(idNode)) {
                for (var n in objectToArray) {
                    /** @type {?} */
                    var targetIdNode = objectToArray[n].data('target');
                    /** @type {?} */
                    var sourceIdNode = objectToArray[n].data('source');
                    if (targetIdNode !== 'n' && !result.includes(targetIdNode) && targetIdNode !== idNode) {
                        result.push(targetIdNode);
                    }
                    if (sourceIdNode !== 'n' && !result.includes(sourceIdNode) && sourceIdNode !== idNode) {
                        result.push(sourceIdNode);
                    }
                }
            }
            return result;
        };
        /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.openModalUpdateNode = /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        function (node, that) {
            /** @type {?} */
            var nodeId = node.data('id');
            if (nodeId !== 'n') {
                that.statusModal = true;
                that.formNode.get('id').setValue(nodeId);
                that.openModal();
                that.formNode.get('name').setValue(node.data('label'));
                that.color = node.style('background-color');
                that.formNode.get('color').setValue(node.style('background-color'));
            }
        };
        /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.openModalAddNode = /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        function (node, that) {
            console.log('on atteind la fonction');
            that.statusModal = false;
            that.formNode.get('id').setValue(node.data('id'));
            /** @type {?} */
            var color = this.colorService.checkedColor(that.arrayColorUsed);
            if (node.data('id') !== 'n') {
                color = node.style('background-color');
            }
            that.color = color;
            that.formNode.get('color').setValue(color);
            that.openModal();
        };
        // PARTIE COULEUR
        // PARTIE COULEUR
        /**
         * @param {?} node
         * @param {?} color
         * @param {?} that
         * @return {?}
         */
        NodeService.prototype.updateColorBranchNode = 
        // PARTIE COULEUR
        /**
         * @param {?} node
         * @param {?} color
         * @param {?} that
         * @return {?}
         */
        function (node, color, that) {
            /** @type {?} */
            var nodeConnected = this.getBranchConnected(node, [], [], that);
            for (var id in nodeConnected) {
                id = nodeConnected[id];
                this.getNodeById(id, that).style('background-color', color);
            }
        };
        NodeService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NodeService.ctorParameters = function () { return [
            { type: ColorService }
        ]; };
        /** @nocollapse */ NodeService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NodeService_Factory() { return new NodeService(core.ɵɵinject(ColorService)); }, token: NodeService, providedIn: "root" });
        return NodeService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NodeService.prototype.colorService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollapseService = /** @class */ (function () {
        function CollapseService() {
        }
        /**
         * @param {?} node
         * @return {?}
         */
        CollapseService.prototype.isCollapsable = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            /** @type {?} */
            var links = node.connectedEdges('[source="' + node.data('id') + '"]');
            return links.length !== 0;
        };
        CollapseService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CollapseService.ctorParameters = function () { return []; };
        /** @nocollapse */ CollapseService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CollapseService_Factory() { return new CollapseService(); }, token: CollapseService, providedIn: "root" });
        return CollapseService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MutualService = /** @class */ (function () {
        function MutualService(nodeService, toolbarService, colorService, collaspeService) {
            this.nodeService = nodeService;
            this.toolbarService = toolbarService;
            this.colorService = colorService;
            this.collaspeService = collaspeService;
            toolbarService = this.toolbarService;
            nodeService = this.nodeService;
            colorService = this.colorService;
            collaspeService = this.collaspeService;
        }
        // PARTIE TOOLBAR
        // PARTIE TOOLBAR
        /**
         * @param {?} idNode
         * @param {?} that
         * @return {?}
         */
        MutualService.prototype.createToolbarNode = 
        // PARTIE TOOLBAR
        /**
         * @param {?} idNode
         * @param {?} that
         * @return {?}
         */
        function (idNode, that) {
            /** @type {?} */
            var it = this;
            /** @type {?} */
            var nodeSelected = this.nodeService.getNodeById(idNode, that);
            /** @type {?} */
            var divGlobal = document.createElement('div');
            divGlobal.style.border = '1px solid red';
            divGlobal.id = 'toolbar-' + idNode;
            document.body.appendChild(divGlobal);
            /** @type {?} */
            var divToolbar = document.createElement('div');
            divToolbar.className = 'mindmap-toolbar';
            divGlobal.appendChild(divToolbar);
            /** @type {?} */
            var divOption = document.createElement('div');
            divOption.id = 'options';
            divToolbar.appendChild(divOption);
            /** @type {?} */
            var divAction = document.createElement('div');
            divAction.className = 'actions';
            divToolbar.appendChild(divAction);
            /** @type {?} */
            var elmtAdd = document.createElement('button');
            elmtAdd.innerHTML = '+';
            elmtAdd.setAttribute('data-node-id', idNode);
            elmtAdd.onclick = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                console.log('on passe ic frerre ');
                /** @type {?} */
                var nodeId = event.target.dataset.nodeId;
                /** @type {?} */
                var node = it.nodeService.getNodeById(nodeId, that);
                it.nodeService.openModalAddNode(node, that);
            });
            divAction.appendChild(elmtAdd);
            if (idNode !== 'n') {
                /** @type {?} */
                var elmtRemove = document.createElement('button');
                elmtRemove.innerHTML = 'x';
                elmtRemove.onclick = (/**
                 * @return {?}
                 */
                function () {
                    it.removeNode(nodeSelected, that);
                });
                divAction.appendChild(elmtRemove);
            }
            if (this.collaspeService.isCollapsable(nodeSelected) && !nodeSelected.data('collapsed')) {
                /** @type {?} */
                var elmtCollapse = document.createElement('button');
                elmtCollapse.innerHTML = '_';
                elmtCollapse.onclick = (/**
                 * @return {?}
                 */
                function () {
                    it.toolbarService.collapseNode(nodeSelected);
                    it.refreshToolbarNode(nodeSelected, that);
                });
                divAction.appendChild(elmtCollapse);
            }
            if (nodeSelected.data('collapsed')) {
                /** @type {?} */
                var elmtExpand = document.createElement('button');
                elmtExpand.innerHTML = 'E';
                elmtExpand.onclick = (/**
                 * @return {?}
                 */
                function () {
                    it.toolbarService.expandNode(nodeSelected);
                    it.refreshToolbarNode(nodeSelected, that);
                });
                divAction.appendChild(elmtExpand);
            }
            return divGlobal;
        };
        /**
         * @param {?} idNode
         * @param {?} that
         * @return {?}
         */
        MutualService.prototype.addToolbarNode = /**
         * @param {?} idNode
         * @param {?} that
         * @return {?}
         */
        function (idNode, that) {
            /** @type {?} */
            var it = this;
            /** @type {?} */
            var nodeSelected = that.cy.nodes('[id="' + idNode + '"]');
            /** @type {?} */
            var nodePopper = nodeSelected.popper({
                content: (/**
                 * @return {?}
                 */
                function () {
                    return it.createToolbarNode(idNode, that);
                })
            });
            /** @type {?} */
            var updatePopper = (/**
             * @return {?}
             */
            function () {
                nodePopper.scheduleUpdate();
            });
            nodeSelected.on('position', updatePopper);
            that.cy.on('pan zoom resize', updatePopper);
        };
        /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        MutualService.prototype.refreshToolbarNode = /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        function (node, that) {
            // console.log('REFRESH', node.data())
            this.toolbarService.removeToolbarNode(node);
            this.addToolbarNode(node.data('id'), that);
        };
        // FIN PARTIE TOOLBAR
        // PARTIE NODE
        // FIN PARTIE TOOLBAR
        // PARTIE NODE
        /**
         * @param {?=} node
         * @param {?=} name
         * @param {?=} color
         * @param {?=} that
         * @return {?}
         */
        MutualService.prototype.addChildNode = 
        // FIN PARTIE TOOLBAR
        // PARTIE NODE
        /**
         * @param {?=} node
         * @param {?=} name
         * @param {?=} color
         * @param {?=} that
         * @return {?}
         */
        function (node, name, color, that) {
            if (node === void 0) { node = null; }
            // Si node replié on le déplie
            if (node.data('collapsed') === true) {
                this.toolbarService.expandNode(node);
            }
            /** @type {?} */
            var nodeId = node.data('id');
            /** @type {?} */
            var nextId = this.nodeService.getUniqueNodeId(that);
            /** @type {?} */
            var newNode = that.cy.add({
                group: 'nodes',
                data: {
                    id: nextId,
                    label: name,
                    collapsed: false
                }
            });
            newNode.style('background-color', color);
            /** @type {?} */
            var newLinkId = nodeId + '-' + nextId;
            that.cy.add({ group: 'edges', data: { id: newLinkId, source: nodeId, target: nextId } });
            node.data('collapsed', false);
            this.addToolbarNode(nextId, that);
            this.nodeService.updateColorBranchNode(newNode, color, that);
            this.refreshToolbarNode(node, that);
            this.toolbarService.hideToolbarNode(newNode);
            that.renderGraph();
            that.emitChange();
        };
        /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        MutualService.prototype.removeNode = /**
         * @param {?} node
         * @param {?} that
         * @return {?}
         */
        function (node, that) {
            var e_1, _a;
            /** @type {?} */
            var nodeId = node.data('id');
            if (nodeId !== 'n') {
                /** @type {?} */
                var listChildNodes = that.cy.edges("[source=\"" + nodeId + "\"]");
                /** @type {?} */
                var keysChildNodes = Object.keys(listChildNodes);
                /** @type {?} */
                var parentNode = this.nodeService.getParentNode(node, that);
                console.log('PARENT', parentNode.data());
                this.refreshToolbarNode(parentNode, that);
                try {
                    for (var keysChildNodes_1 = __values(keysChildNodes), keysChildNodes_1_1 = keysChildNodes_1.next(); !keysChildNodes_1_1.done; keysChildNodes_1_1 = keysChildNodes_1.next()) {
                        var key = keysChildNodes_1_1.value;
                        /** @type {?} */
                        var childNode = listChildNodes[key];
                        if (childNode['_private']) {
                            childNode = listChildNodes[key]['_private']['target'];
                            $('#button' + nodeId).remove();
                            this.removeNode(childNode, that);
                            that.cy.remove(childNode);
                        }
                        $('#toolbar-' + nodeId).remove();
                        that.cy.remove(node);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (keysChildNodes_1_1 && !keysChildNodes_1_1.done && (_a = keysChildNodes_1.return)) _a.call(keysChildNodes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            this.toolbarService.removeToolbarNode(node);
            that.emitChange();
        };
        MutualService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MutualService.ctorParameters = function () { return [
            { type: NodeService },
            { type: ToolbarService },
            { type: ColorService },
            { type: CollapseService }
        ]; };
        /** @nocollapse */ MutualService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MutualService_Factory() { return new MutualService(core.ɵɵinject(NodeService), core.ɵɵinject(ToolbarService), core.ɵɵinject(ColorService), core.ɵɵinject(CollapseService)); }, token: MutualService, providedIn: "root" });
        return MutualService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MutualService.prototype.nodeService;
        /**
         * @type {?}
         * @private
         */
        MutualService.prototype.toolbarService;
        /**
         * @type {?}
         * @private
         */
        MutualService.prototype.colorService;
        /**
         * @type {?}
         * @private
         */
        MutualService.prototype.collaspeService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    utils.setTheme('bs4');
    cytoscape.use(popper);
    cytoscape.use(contextMenus, $);
    var MindmapComponent = /** @class */ (function () {
        function MindmapComponent(formBuilder, cpService, toolbarService, colorService, nodeService, mutualService, el, renderer, modalService) {
            this.formBuilder = formBuilder;
            this.cpService = cpService;
            this.toolbarService = toolbarService;
            this.colorService = colorService;
            this.nodeService = nodeService;
            this.mutualService = mutualService;
            this.el = el;
            this.renderer = renderer;
            this.modalService = modalService;
            this.onChange = new core.EventEmitter();
            this.arrayColorUsed = ['#000000'];
            this.timestampLastClick = 0;
            this.loading = false;
            this.submitted = false;
            this.elements = {
                nodes: [
                    { data: { id: 'n', label: 'Root' } },
                ]
            };
            this.cy = null;
            this.config = {
                container: null,
                elements: this.elements,
                layout: {
                    name: 'cose',
                },
                maxZoom: 2.5,
                minZoom: 0.5,
                style: [
                    {
                        selector: 'node',
                        style: {
                            'label': 'data(id)',
                            // Remplacer par data(label) une fois terminé
                            'shape': 'round-rectangle',
                            'background-color': '#000000'
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'line-color': '#EEE'
                        }
                    }
                ]
            };
            cpService = this.cpService;
            toolbarService = this.toolbarService;
            colorService = this.colorService;
            nodeService = this.nodeService;
            mutualService = this.mutualService;
        }
        /**
         * @param {?} event
         * @param {?} data
         * @return {?}
         */
        MindmapComponent.prototype.eventChangeColor = /**
         * @param {?} event
         * @param {?} data
         * @return {?}
         */
        function (event, data) {
            this.formNode.get('color').setValue(data);
        };
        /**
         * @return {?}
         */
        MindmapComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var that = this;
            this.config.container = this.el.nativeElement.firstElementChild;
            this.cy = cytoscape(this.config);
            // this.cy.contextMenus($);
            this.cy.on('tap', 'node', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var timestampClick = event.timeStamp;
                /** @type {?} */
                var result = timestampClick - this.timestampLastClick;
                if (result < 500) {
                    event.target.trigger('doubletap', event);
                }
                this.timestampLastClick = timestampClick;
            }));
            this.cy.on('doubletap', (/**
             * @param {?} event
             * @param {?} originalTapEvent
             * @return {?}
             */
            function (event, originalTapEvent) {
                console.log('evenement', event);
                // const nodeId = event.target.data('id');
                that.nodeService.openModalUpdateNode(event.target, that);
            }));
            this.cy.on('mouseout', 'node', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var node = event.target;
                that.toolbarService.hideToolbarNode(node);
            }));
            this.cy.on('mouseover', 'node', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var node = event.target;
                that.toolbarService.showToolbarNode(node);
            }));
            /** @type {?} */
            var optionsMenu = {
                menuItems: [
                    {
                        id: 'add-node',
                        content: 'Ajouter un noeud enfant',
                        selector: 'node',
                        onClickFunction: (/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) {
                            /** @type {?} */
                            var node = event.target;
                            _this.nodeService.openModalAddNode(node, that);
                        })
                    },
                    {
                        id: 'rename-node',
                        content: 'Modifier',
                        selector: 'node',
                        onClickFunction: (/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) {
                            /** @type {?} */
                            var node = event.target;
                            _this.nodeService.openModalUpdateNode(node, _this);
                        })
                    },
                    {
                        id: 'collapse-node',
                        content: 'Replier',
                        selector: 'node',
                        onClickFunction: (/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) {
                            /** @type {?} */
                            var node = event.target;
                            _this.collapseNode(node);
                        })
                    },
                    {
                        id: 'expand-node',
                        content: 'Déplier',
                        selector: 'node',
                        onClickFunction: (/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) {
                            /** @type {?} */
                            var node = event.target;
                            _this.expandNode(node);
                        })
                    },
                    {
                        id: 'remove-node',
                        content: 'Supprimer',
                        selector: 'node[id!="n"]',
                        onClickFunction: (/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) {
                            /** @type {?} */
                            var node = event.target;
                            _this.mutualService.removeNode(node, _this);
                        })
                    }
                ]
            };
            this.optionMenu = this.cy.contextMenus(optionsMenu);
            this.optionMenu.isActive();
            this.mutualService.addToolbarNode('n', this);
            this.cy.on('cxttapstart', 'node', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var node = event.target;
                console.warn(node);
                if (!node.data('collapsed') && that.nodeService.getNodeConnected(node).length > 0) {
                    that.optionMenu.hideMenuItem('expand-node');
                    that.optionMenu.showMenuItem('collapse-node');
                }
                if (node.data('collapsed')) {
                    that.optionMenu.hideMenuItem('collapse-node');
                    that.optionMenu.showMenuItem('expand-node');
                }
                if (!node.data('collapsed') && that.nodeService.getNodeConnected(node).length === 0) {
                    that.optionMenu.hideMenuItem('expand-node');
                    that.optionMenu.hideMenuItem('collapse-node');
                }
                that.mutualService.refreshToolbarNode(node, that);
            }));
            /**
             * @param {?} control
             * @return {?}
             */
            function checkedColor(control) {
                /** @type {?} */
                var color = control.value;
                if (that.arrayColorUsed.includes(color)) {
                    return {
                        validateColor: {
                            valid: false
                        }
                    };
                }
                else {
                    return null;
                }
            }
            // initialisation
            this.formNode = new forms.FormGroup({
                id: new forms.FormControl(null),
                name: new forms.FormControl('Nouveau node', [forms.Validators.required, forms.Validators.maxLength(40)]),
                color: new forms.FormControl(this.colorService.checkedColor(that.arrayColorUsed), [forms.Validators.required, checkedColor])
            });
        };
        Object.defineProperty(MindmapComponent.prototype, "f", {
            get: /**
             * @return {?}
             */
            function () {
                return this.formNode.controls;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MindmapComponent.prototype.openModal = /**
         * @return {?}
         */
        function () {
            this.modalRef = this.modalService.show(this.modalNode);
        };
        /**
         * @return {?}
         */
        MindmapComponent.prototype.closeModal = /**
         * @return {?}
         */
        function () {
            this.modalRef.hide();
        };
        /**
         * @return {?}
         */
        MindmapComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            this.submitted = true;
            // stop here if form is invalid
            if (this.formNode.invalid) {
                return;
            }
            this.loading = true;
            /** @type {?} */
            var nodeId = this.formNode.value.id;
            /** @type {?} */
            var node = this.nodeService.getNodeById(nodeId, this);
            if (!this.statusModal) {
                this.mutualService.addChildNode(node, this.formNode.value.name, this.formNode.value.color, this);
            }
            else {
                this.nodeService.updateInformationNode(node, this);
            }
            this.submitted = false;
            this.loading = false;
            this.formNode.reset();
            this.closeModal();
            this.formNode.get('name').setValue('NOuveau node');
        };
        /**
         * @return {?}
         */
        MindmapComponent.prototype.renderGraph = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var layout = this.cy.layout({
                name: 'cose',
            });
            layout.run();
        };
        /**
         * @return {?}
         */
        MindmapComponent.prototype.emitChange = /**
         * @return {?}
         */
        function () {
            this.onChange.emit(this.cy.json());
        };
        // getTestNode() {
        //   return this.nodeService.getTestNode(this);
        // }
        // getTestNode() {
        //   return this.nodeService.getTestNode(this);
        // }
        /**
         * @param {?} node
         * @return {?}
         */
        MindmapComponent.prototype.collapseNode = 
        // getTestNode() {
        //   return this.nodeService.getTestNode(this);
        // }
        /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            return this.toolbarService.collapseNode(node);
        };
        /**
         * @param {?} node
         * @return {?}
         */
        MindmapComponent.prototype.expandNode = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            return this.toolbarService.expandNode(node);
        };
        MindmapComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-mindmap',
                        template: "<div class=\"mindmap\"></div>\n\n<!-- Modal edition/ajout d'un node  -->\n<ng-template #modalNode>\n\n  <div class=\"modal-header\">\n    <h5 *ngIf=\"!statusModal\" class=\"modal-title\" id=\"title\">Ajouter un node</h5>\n    <h5 *ngIf=\"statusModal\" class=\"modal-title\" id=\"title\">Modification d'un node</h5>\n    <button type=\"button\" (click)=\"modalRef.hide()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <form [formGroup]=\"formNode\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"name\">Nom</label>\n        <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.name.errors.required\">Le nom est requis</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"color\">Couleur</label>\n        <input id=\"color\" [value]=\"color\" [(colorPicker)]=\"color\"\n          (colorPickerClose)=\"eventChangeColor('colorPickerClose', $event)\" [cpToggle]=\"true\"\n          [cpDialogDisplay]=\"'popup'\" [style.background]=\"color\" formControlName=\"color\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.color.errors }\">\n        <div *ngIf=\"submitted && f.color.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.color.errors.required\">La couleur est requise</div>\n          <div *ngIf=\"f.color.errors.validateColor\">La couleur est d\u00E9j\u00E0 utilis\u00E9e</div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div class=\"form-group\">\n          <button *ngIf=\"!statusModal\" [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\">Ajouter</button>\n          <button *ngIf=\"statusModal\" [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\">Modifier</button>\n          <img *ngIf=\"loading\" class=\"pl-3\"\n            src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          <button type=\"button\" (click)=\"modalRef.hide()\" class=\"btn btn-secondary\"\n            data-dismiss=\"modal\">Annuler</button> </div>\n      </div>\n\n    </form>\n  </div>\n</ng-template>",
                        styles: [".mindmap{height:600px;float:left;position:relative;border:solid #21c0c0;width:1000px}#toolbar-n{border:10px solid green!important}"]
                    }] }
        ];
        /** @nocollapse */
        MindmapComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: ngxColorPicker.ColorPickerService },
            { type: ToolbarService },
            { type: ColorService },
            { type: NodeService },
            { type: MutualService },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: modal.BsModalService }
        ]; };
        MindmapComponent.propDecorators = {
            onChange: [{ type: core.Output }],
            modalNode: [{ type: core.ViewChild, args: ['modalNode', { static: true },] }]
        };
        return MindmapComponent;
    }());
    if (false) {
        /** @type {?} */
        MindmapComponent.prototype.onChange;
        /** @type {?} */
        MindmapComponent.prototype.arrayColorUsed;
        /** @type {?} */
        MindmapComponent.prototype.timestampLastClick;
        /** @type {?} */
        MindmapComponent.prototype.formNode;
        /** @type {?} */
        MindmapComponent.prototype.loading;
        /** @type {?} */
        MindmapComponent.prototype.submitted;
        /** @type {?} */
        MindmapComponent.prototype.color;
        /** @type {?} */
        MindmapComponent.prototype.statusModal;
        /** @type {?} */
        MindmapComponent.prototype.optionMenu;
        /** @type {?} */
        MindmapComponent.prototype.modalRef;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.modalNode;
        /** @type {?} */
        MindmapComponent.prototype.elements;
        /** @type {?} */
        MindmapComponent.prototype.cy;
        /** @type {?} */
        MindmapComponent.prototype.config;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.formBuilder;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.cpService;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.toolbarService;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.colorService;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.nodeService;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.mutualService;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        MindmapComponent.prototype.modalService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MindmapModule = /** @class */ (function () {
        function MindmapModule() {
        }
        MindmapModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MindmapComponent],
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            ngxColorPicker.ColorPickerModule,
                            modal.ModalModule.forRoot()
                        ],
                        providers: [
                            ToolbarService,
                            ColorService,
                            MutualService,
                            CollapseService,
                            NodeService
                        ],
                        bootstrap: [MindmapComponent],
                        exports: [MindmapComponent]
                    },] }
        ];
        return MindmapModule;
    }());

    exports.MindmapComponent = MindmapComponent;
    exports.MindmapModule = MindmapModule;
    exports.MindmapService = MindmapService;
    exports.ɵa = ToolbarService;
    exports.ɵb = ColorService;
    exports.ɵc = NodeService;
    exports.ɵd = MutualService;
    exports.ɵe = CollapseService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mindmap.umd.js.map
