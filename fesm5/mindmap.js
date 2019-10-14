import { Injectable, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Component, ElementRef, Renderer2, Output, ViewChild, NgModule } from '@angular/core';
import cytoscape from 'cytoscape';
import contextMenus from 'cytoscape-context-menus';
import popper from 'cytoscape-popper';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ColorPickerService, ColorPickerModule } from 'ngx-color-picker';
import { __values } from 'tslib';
import $ from 'jquery';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MindmapService = /** @class */ (function () {
    function MindmapService() {
    }
    MindmapService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MindmapService.ctorParameters = function () { return []; };
    /** @nocollapse */ MindmapService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MindmapService_Factory() { return new MindmapService(); }, token: MindmapService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ColorService.ctorParameters = function () { return []; };
    /** @nocollapse */ ColorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ColorService_Factory() { return new ColorService(); }, token: ColorService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToolbarService.ctorParameters = function () { return []; };
    /** @nocollapse */ ToolbarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ToolbarService_Factory() { return new ToolbarService(); }, token: ToolbarService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NodeService.ctorParameters = function () { return [
        { type: ColorService }
    ]; };
    /** @nocollapse */ NodeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NodeService_Factory() { return new NodeService(ɵɵinject(ColorService)); }, token: NodeService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CollapseService.ctorParameters = function () { return []; };
    /** @nocollapse */ CollapseService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CollapseService_Factory() { return new CollapseService(); }, token: CollapseService, providedIn: "root" });
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
        { type: Injectable, args: [{
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
    /** @nocollapse */ MutualService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MutualService_Factory() { return new MutualService(ɵɵinject(NodeService), ɵɵinject(ToolbarService), ɵɵinject(ColorService), ɵɵinject(CollapseService)); }, token: MutualService, providedIn: "root" });
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
setTheme('bs4');
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
        this.onChange = new EventEmitter();
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
        this.formNode = new FormGroup({
            id: new FormControl(null),
            name: new FormControl('Nouveau node', [Validators.required, Validators.maxLength(40)]),
            color: new FormControl(this.colorService.checkedColor(that.arrayColorUsed), [Validators.required, checkedColor])
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
        { type: Component, args: [{
                    selector: 'lib-mindmap',
                    template: "<div class=\"mindmap\"></div>\n\n<!-- Modal edition/ajout d'un node  -->\n<ng-template #modalNode>\n\n  <div class=\"modal-header\">\n    <h5 *ngIf=\"!statusModal\" class=\"modal-title\" id=\"title\">Ajouter un node</h5>\n    <h5 *ngIf=\"statusModal\" class=\"modal-title\" id=\"title\">Modification d'un node</h5>\n    <button type=\"button\" (click)=\"modalRef.hide()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <form [formGroup]=\"formNode\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"name\">Nom</label>\n        <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.name.errors.required\">Le nom est requis</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"color\">Couleur</label>\n        <input id=\"color\" [value]=\"color\" [(colorPicker)]=\"color\"\n          (colorPickerClose)=\"eventChangeColor('colorPickerClose', $event)\" [cpToggle]=\"true\"\n          [cpDialogDisplay]=\"'popup'\" [style.background]=\"color\" formControlName=\"color\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.color.errors }\">\n        <div *ngIf=\"submitted && f.color.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.color.errors.required\">La couleur est requise</div>\n          <div *ngIf=\"f.color.errors.validateColor\">La couleur est d\u00E9j\u00E0 utilis\u00E9e</div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div class=\"form-group\">\n          <button *ngIf=\"!statusModal\" [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\">Ajouter</button>\n          <button *ngIf=\"statusModal\" [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\">Modifier</button>\n          <img *ngIf=\"loading\" class=\"pl-3\"\n            src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          <button type=\"button\" (click)=\"modalRef.hide()\" class=\"btn btn-secondary\"\n            data-dismiss=\"modal\">Annuler</button> </div>\n      </div>\n\n    </form>\n  </div>\n</ng-template>",
                    styles: [".mindmap{height:600px;float:left;position:relative;border:solid #21c0c0;width:1000px}#toolbar-n{border:10px solid green!important}"]
                }] }
    ];
    /** @nocollapse */
    MindmapComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ColorPickerService },
        { type: ToolbarService },
        { type: ColorService },
        { type: NodeService },
        { type: MutualService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: BsModalService }
    ]; };
    MindmapComponent.propDecorators = {
        onChange: [{ type: Output }],
        modalNode: [{ type: ViewChild, args: ['modalNode', { static: true },] }]
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
        { type: NgModule, args: [{
                    declarations: [MindmapComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        ColorPickerModule,
                        ModalModule.forRoot()
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MindmapComponent, MindmapModule, MindmapService, ToolbarService as ɵa, ColorService as ɵb, NodeService as ɵc, MutualService as ɵd, CollapseService as ɵe };
//# sourceMappingURL=mindmap.js.map
