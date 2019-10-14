/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NodeService } from './node.service';
import { ColorService } from './color.service';
import { CollapseService } from './collapse.service';
import { ToolbarService } from './toolbar.service';
import $ from 'jquery';
import * as i0 from "@angular/core";
import * as i1 from "./node.service";
import * as i2 from "./toolbar.service";
import * as i3 from "./color.service";
import * as i4 from "./collapse.service";
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
                for (var keysChildNodes_1 = tslib_1.__values(keysChildNodes), keysChildNodes_1_1 = keysChildNodes_1.next(); !keysChildNodes_1_1.done; keysChildNodes_1_1 = keysChildNodes_1.next()) {
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
    /** @nocollapse */ MutualService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MutualService_Factory() { return new MutualService(i0.ɵɵinject(i1.NodeService), i0.ɵɵinject(i2.ToolbarService), i0.ɵɵinject(i3.ColorService), i0.ɵɵinject(i4.CollapseService)); }, token: MutualService, providedIn: "root" });
    return MutualService;
}());
export { MutualService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0dWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5kbWFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL211dHVhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBUSxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFFeEI7SUFLRSx1QkFBb0IsV0FBd0IsRUFBVSxjQUE4QixFQUFVLFlBQTBCLEVBQVUsZUFBZ0M7UUFBOUksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoSyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNyQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMvQixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNqQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUJBQWlCOzs7Ozs7O0lBQ2pCLHlDQUFpQjs7Ozs7OztJQUFqQixVQUFrQixNQUFNLEVBQUUsSUFBSTs7WUFFdEIsRUFBRSxHQUFHLElBQUk7O1lBQ1QsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7O1lBRXpELFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtB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QVMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzNCO29CQUNELENBQUMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0Qjs7Ozs7Ozs7O1NBQ0Y7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkE3S0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxXQUFXO2dCQUdYLGNBQWM7Z0JBRmQsWUFBWTtnQkFDWixlQUFlOzs7d0JBSHhCO0NBc0xDLEFBL0tELElBK0tDO1NBNUtZLGFBQWE7Ozs7OztJQUVaLG9DQUFnQzs7Ozs7SUFBRSx1Q0FBc0M7Ozs7O0lBQUUscUNBQWtDOzs7OztJQUFFLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vZGVTZXJ2aWNlIH0gZnJvbSAnLi9ub2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sb3JTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbGxhcHNlU2VydmljZSB9IGZyb20gJy4vY29sbGFwc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBUb29sYmFyU2VydmljZSB9IGZyb20gJy4vdG9vbGJhci5zZXJ2aWNlJztcbmltcG9ydCAgJCBmcm9tICdqcXVlcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNdXR1YWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vZGVTZXJ2aWNlOiBOb2RlU2VydmljZSwgcHJpdmF0ZSB0b29sYmFyU2VydmljZTogVG9vbGJhclNlcnZpY2UsIHByaXZhdGUgY29sb3JTZXJ2aWNlOiBDb2xvclNlcnZpY2UsIHByaXZhdGUgY29sbGFzcGVTZXJ2aWNlOiBDb2xsYXBzZVNlcnZpY2UpIHtcbiAgICB0b29sYmFyU2VydmljZSA9IHRoaXMudG9vbGJhclNlcnZpY2U7XG4gICAgbm9kZVNlcnZpY2UgPSB0aGlzLm5vZGVTZXJ2aWNlO1xuICAgIGNvbG9yU2VydmljZSA9IHRoaXMuY29sb3JTZXJ2aWNlO1xuICAgIGNvbGxhc3BlU2VydmljZSA9IHRoaXMuY29sbGFzcGVTZXJ2aWNlO1xuICB9XG5cbiAgLy8gUEFSVElFIFRPT0xCQVJcbiAgY3JlYXRlVG9vbGJhck5vZGUoaWROb2RlLCB0aGF0KSB7XG5cbiAgICBjb25zdCBpdCA9IHRoaXM7XG4gICAgY29uc3Qgbm9kZVNlbGVjdGVkID0gdGhpcy5ub2RlU2VydmljZS5nZXROb2RlQnlJZChpZE5vZGUsIHRoYXQpO1xuXG4gICAgY29uc3QgZGl2R2xvYmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2R2xvYmFsLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcbiAgICBkaXZHbG9iYWwuaWQgPSAndG9vbGJhci0nICsgaWROb2RlO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2R2xvYmFsKTtcblxuICAgIGNvbnN0IGRpdlRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUb29sYmFyLmNsYXNzTmFtZSA9ICdtaW5kbWFwLXRvb2xiYXInO1xuICAgIGRpdkdsb2JhbC5hcHBlbmRDaGlsZChkaXZUb29sYmFyKTtcblxuICAgIGNvbnN0IGRpdk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdk9wdGlvbi5pZCA9ICdvcHRpb25zJztcbiAgICBkaXZUb29sYmFyLmFwcGVuZENoaWxkKGRpdk9wdGlvbik7XG5cbiAgICBjb25zdCBkaXZBY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZBY3Rpb24uY2xhc3NOYW1lID0gJ2FjdGlvbnMnO1xuICAgIGRpdlRvb2xiYXIuYXBwZW5kQ2hpbGQoZGl2QWN0aW9uKTtcblxuICAgIGNvbnN0IGVsbXRBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbG10QWRkLmlubmVySFRNTCA9ICcrJztcbiAgICBlbG10QWRkLnNldEF0dHJpYnV0ZSgnZGF0YS1ub2RlLWlkJywgaWROb2RlKTtcblxuICAgIGVsbXRBZGQub25jbGljayA9IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZygnb24gcGFzc2UgaWMgZnJlcnJlICcpO1xuICAgICAgY29uc3Qgbm9kZUlkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQubm9kZUlkO1xuICAgICAgY29uc3Qgbm9kZSA9IGl0Lm5vZGVTZXJ2aWNlLmdldE5vZGVCeUlkKG5vZGVJZCwgdGhhdCk7XG4gICAgICBpdC5ub2RlU2VydmljZS5vcGVuTW9kYWxBZGROb2RlKG5vZGUsIHRoYXQpO1xuXG4gICAgfTtcbiAgICBkaXZBY3Rpb24uYXBwZW5kQ2hpbGQoZWxtdEFkZCk7XG5cbiAgICBpZiAoaWROb2RlICE9PSAnbicpIHtcbiAgICAgIGNvbnN0IGVsbXRSZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGVsbXRSZW1vdmUuaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgZWxtdFJlbW92ZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpdC5yZW1vdmVOb2RlKG5vZGVTZWxlY3RlZCwgdGhhdCk7XG4gICAgICB9O1xuICAgICAgZGl2QWN0aW9uLmFwcGVuZENoaWxkKGVsbXRSZW1vdmUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbGxhc3BlU2VydmljZS5pc0NvbGxhcHNhYmxlKG5vZGVTZWxlY3RlZCkgJiYgIW5vZGVTZWxlY3RlZC5kYXRhKCdjb2xsYXBzZWQnKSkge1xuICAgICAgY29uc3QgZWxtdENvbGxhcHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBlbG10Q29sbGFwc2UuaW5uZXJIVE1MID0gJ18nO1xuICAgICAgZWxtdENvbGxhcHNlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGl0LnRvb2xiYXJTZXJ2aWNlLmNvbGxhcHNlTm9kZShub2RlU2VsZWN0ZWQpO1xuICAgICAgICBpdC5yZWZyZXNoVG9vbGJhck5vZGUobm9kZVNlbGVjdGVkLCB0aGF0KTtcbiAgICAgIH07XG4gICAgICBkaXZBY3Rpb24uYXBwZW5kQ2hpbGQoZWxtdENvbGxhcHNlKTtcbiAgICB9XG4gICAgaWYgKG5vZGVTZWxlY3RlZC5kYXRhKCdjb2xsYXBzZWQnKSkge1xuICAgICAgY29uc3QgZWxtdEV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZWxtdEV4cGFuZC5pbm5lckhUTUwgPSAnRSc7XG4gICAgICBlbG10RXhwYW5kLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGl0LnRvb2xiYXJTZXJ2aWNlLmV4cGFuZE5vZGUobm9kZVNlbGVjdGVkKTtcbiAgICAgICAgaXQucmVmcmVzaFRvb2xiYXJOb2RlKG5vZGVTZWxlY3RlZCwgdGhhdCk7XG5cbiAgICAgIH07XG4gICAgICBkaXZBY3Rpb24uYXBwZW5kQ2hpbGQoZWxtdEV4cGFuZCk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gZGl2R2xvYmFsO1xuICB9XG4gIGFkZFRvb2xiYXJOb2RlKGlkTm9kZSwgdGhhdCkge1xuICAgIGNvbnN0IGl0ID0gdGhpcztcblxuICAgIGNvbnN0IG5vZGVTZWxlY3RlZCA9IHRoYXQuY3kubm9kZXMoJ1tpZD1cIicgKyBpZE5vZGUgKyAnXCJdJyk7XG5cbiAgICBjb25zdCBub2RlUG9wcGVyID0gbm9kZVNlbGVjdGVkLnBvcHBlcih7XG5cbiAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGl0LmNyZWF0ZVRvb2xiYXJOb2RlKGlkTm9kZSwgdGhhdCk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZVBvcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGVQb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgbm9kZVNlbGVjdGVkLm9uKCdwb3NpdGlvbicsIHVwZGF0ZVBvcHBlcik7XG4gICAgdGhhdC5jeS5vbigncGFuIHpvb20gcmVzaXplJywgdXBkYXRlUG9wcGVyKTtcblxuICB9XG4gIHJlZnJlc2hUb29sYmFyTm9kZShub2RlLCB0aGF0KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1JFRlJFU0gnLCBub2RlLmRhdGEoKSlcbiAgICB0aGlzLnRvb2xiYXJTZXJ2aWNlLnJlbW92ZVRvb2xiYXJOb2RlKG5vZGUpO1xuICAgIHRoaXMuYWRkVG9vbGJhck5vZGUobm9kZS5kYXRhKCdpZCcpLCB0aGF0KTtcbiAgfVxuICAvLyBGSU4gUEFSVElFIFRPT0xCQVJcblxuXG4gIC8vIFBBUlRJRSBOT0RFXG4gIGFkZENoaWxkTm9kZShub2RlID0gbnVsbCwgbmFtZSwgY29sb3IsIHRoYXQpIHtcblxuICAgIC8vIFNpIG5vZGUgcmVwbGnDqSBvbiBsZSBkw6lwbGllXG4gICAgaWYgKG5vZGUuZGF0YSgnY29sbGFwc2VkJykgPT09IHRydWUpIHtcbiAgICAgIHRoaXMudG9vbGJhclNlcnZpY2UuZXhwYW5kTm9kZShub2RlKTtcbiAgICB9XG4gICAgY29uc3Qgbm9kZUlkID0gbm9kZS5kYXRhKCdpZCcpO1xuICAgIGNvbnN0IG5leHRJZCA9IHRoaXMubm9kZVNlcnZpY2UuZ2V0VW5pcXVlTm9kZUlkKHRoYXQpO1xuXG4gICAgY29uc3QgbmV3Tm9kZSA9IHRoYXQuY3kuYWRkKHtcbiAgICAgIGdyb3VwOiAnbm9kZXMnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogbmV4dElkLFxuICAgICAgICBsYWJlbDogbmFtZSxcbiAgICAgICAgY29sbGFwc2VkOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV3Tm9kZS5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yKTtcblxuICAgIGNvbnN0IG5ld0xpbmtJZCA9IG5vZGVJZCArICctJyArIG5leHRJZDtcbiAgICB0aGF0LmN5LmFkZCh7IGdyb3VwOiAnZWRnZXMnLCBkYXRhOiB7IGlkOiBuZXdMaW5rSWQsIHNvdXJjZTogbm9kZUlkLCB0YXJnZXQ6IG5leHRJZCB9IH0pO1xuXG4gICAgbm9kZS5kYXRhKCdjb2xsYXBzZWQnLCBmYWxzZSk7XG5cbiAgICB0aGlzLmFkZFRvb2xiYXJOb2RlKG5leHRJZCwgdGhhdCk7XG4gICAgdGhpcy5ub2RlU2VydmljZS51cGRhdGVDb2xvckJyYW5jaE5vZGUobmV3Tm9kZSwgY29sb3IsIHRoYXQpO1xuXG4gICAgdGhpcy5yZWZyZXNoVG9vbGJhck5vZGUobm9kZSwgdGhhdCk7XG4gICAgdGhpcy50b29sYmFyU2VydmljZS5oaWRlVG9vbGJhck5vZGUobmV3Tm9kZSk7XG4gICAgdGhhdC5yZW5kZXJHcmFwaCgpO1xuICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuXG4gIH1cbiAgcmVtb3ZlTm9kZShub2RlLCB0aGF0KSB7XG4gICAgY29uc3Qgbm9kZUlkID0gbm9kZS5kYXRhKCdpZCcpO1xuXG4gICAgaWYgKG5vZGVJZCAhPT0gJ24nKSB7XG4gICAgICBjb25zdCBsaXN0Q2hpbGROb2RlcyA9IHRoYXQuY3kuZWRnZXMoYFtzb3VyY2U9XCIke25vZGVJZH1cIl1gKTtcbiAgICAgIGNvbnN0IGtleXNDaGlsZE5vZGVzID0gT2JqZWN0LmtleXMobGlzdENoaWxkTm9kZXMpO1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMubm9kZVNlcnZpY2UuZ2V0UGFyZW50Tm9kZShub2RlLCB0aGF0KTtcbiAgICAgIGNvbnNvbGUubG9nKCdQQVJFTlQnLCBwYXJlbnROb2RlLmRhdGEoKSk7XG5cblxuICAgICAgdGhpcy5yZWZyZXNoVG9vbGJhck5vZGUocGFyZW50Tm9kZSwgdGhhdCk7XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXNDaGlsZE5vZGVzKSB7XG5cbiAgICAgICAgbGV0IGNoaWxkTm9kZSA9IGxpc3RDaGlsZE5vZGVzW2tleV07XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVsnX3ByaXZhdGUnXSkge1xuICAgICAgICAgIGNoaWxkTm9kZSA9IGxpc3RDaGlsZE5vZGVzW2tleV1bJ19wcml2YXRlJ11bJ3RhcmdldCddO1xuICAgICAgICAgICQoJyNidXR0b24nICsgbm9kZUlkKS5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZU5vZGUoY2hpbGROb2RlLCB0aGF0KTtcbiAgICAgICAgICB0aGF0LmN5LnJlbW92ZShjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgICQoJyN0b29sYmFyLScgKyBub2RlSWQpLnJlbW92ZSgpO1xuICAgICAgICB0aGF0LmN5LnJlbW92ZShub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRvb2xiYXJTZXJ2aWNlLnJlbW92ZVRvb2xiYXJOb2RlKG5vZGUpO1xuICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICB9XG4gIC8vIEZJTiBQQVJUSUUgTk9ERVxufVxuIl19