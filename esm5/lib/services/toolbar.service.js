/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ ToolbarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToolbarService_Factory() { return new ToolbarService(); }, token: ToolbarService, providedIn: "root" });
    return ToolbarService;
}());
export { ToolbarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluZG1hcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b29sYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBS0U7SUFDQSxDQUFDOzs7OztJQUdELDBDQUFpQjs7OztJQUFqQixVQUFrQixJQUFJOztZQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7WUFHeEIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM1RCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBSUQsd0NBQWU7Ozs7SUFBZixVQUFnQixJQUFJOztZQUNaLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7WUFDeEIsT0FBTyxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUNqRSxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7O0lBRUQsd0NBQWU7Ozs7SUFBZixVQUFnQixJQUFJOztZQUNaLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7WUFDeEIsT0FBTyxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUNqRSxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFDRCxrQkFBa0I7Ozs7OztJQUVsQixxQ0FBWTs7Ozs7O0lBQVosVUFBYSxJQUFJO1FBQWpCLGlCQW1CQztRQWpCQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFDdkIsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFJLENBQUM7UUFFM0UsSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQ3pCLGNBQWMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUV0QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUc7Ozs7b0JBQUMsVUFBQyxPQUFPO3dCQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQzVCLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdCLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsbUNBQVU7Ozs7SUFBVixVQUFXLElBQUk7UUFBZixpQkFzQkM7O1lBckJPLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBSSxDQUFDO1FBRTNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUN6QixjQUFjLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsSUFBSTtnQkFFdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHOzs7O29CQUFDLFVBQUMsT0FBTzt3QkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMzQixLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQixDQUFDLEVBQUMsQ0FBQztpQkFDSjtZQUVILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdCLENBQUM7O2dCQWpGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5QkFKRDtDQXNGQyxBQXBGRCxJQW9GQztTQWpGWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuXG4gIHJlbW92ZVRvb2xiYXJOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlSWQgPSBub2RlLmRhdGEoJ2lkJyk7XG5cblxuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9vbGJhci0nICsgbm9kZUlkKTtcbiAgICBpZiAodG9vbGJhcikge1xuICAgICAgdG9vbGJhci5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgaGlkZVRvb2xiYXJOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlSWQgPSBub2RlLmRhdGEoJ2lkJyk7XG4gICAgY29uc3QgdG9vbGJhcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xiYXItJyArIG5vZGVJZCk7XG4gICAgaWYgKHRvb2xiYXIpIHtcbiAgICAgIHRvb2xiYXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cbiAgfVxuXG4gIHNob3dUb29sYmFyTm9kZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZUlkID0gbm9kZS5kYXRhKCdpZCcpO1xuICAgIGNvbnN0IHRvb2xiYXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b29sYmFyLScgKyBub2RlSWQpO1xuICAgIGlmICh0b29sYmFyKSB7XG4gICAgICB0b29sYmFyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuICB9XG4gIC8vIFBBUlRJRSBDT0xMQVBTRVxuXG4gIGNvbGxhcHNlTm9kZShub2RlKSB7XG5cbiAgICBub2RlLmRhdGEoJ2NvbGxhcHNlZCcsIHRydWUpO1xuICAgIGNvbnN0IGNvbm5lY3RlZEVkZ2VzID0gbm9kZS5jb25uZWN0ZWRFZGdlcyhgW3NvdXJjZT1cIiR7bm9kZS5kYXRhKCdpZCcpfVwiXWApO1xuXG4gICAgaWYgKGNvbm5lY3RlZEVkZ2VzLmxlbmd0aCkge1xuICAgICAgY29ubmVjdGVkRWRnZXMubWFwKChlZGdlKSA9PiB7XG5cbiAgICAgICAgaWYgKGVkZ2Uuc3R5bGUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgZWRnZS5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICBlZGdlLnRhcmdldCgpLm1hcCgoc3Vibm9kZSkgPT4ge1xuICAgICAgICAgICAgc3Vibm9kZS5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIHN1Ym5vZGUuZGF0YSgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRvb2xiYXJOb2RlKHN1Ym5vZGUpO1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZU5vZGUoc3Vibm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZE5vZGUobm9kZSkge1xuICAgIGNvbnN0IGNvbm5lY3RlZEVkZ2VzID0gbm9kZS5jb25uZWN0ZWRFZGdlcyhgW3NvdXJjZT1cIiR7bm9kZS5kYXRhKCdpZCcpfVwiXWApO1xuXG4gICAgbm9kZS5kYXRhKCdjb2xsYXBzZWQnLCBmYWxzZSk7XG5cbiAgICBpZiAoY29ubmVjdGVkRWRnZXMubGVuZ3RoKSB7XG4gICAgICBjb25uZWN0ZWRFZGdlcy5tYXAoKGVkZ2UpID0+IHtcblxuICAgICAgICBpZiAoZWRnZS5zdHlsZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xuICAgICAgICAgIGVkZ2Uuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgIGVkZ2UudGFyZ2V0KCkubWFwKChzdWJub2RlKSA9PiB7XG4gICAgICAgICAgICBzdWJub2RlLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIHN1Ym5vZGUuZGF0YSgnc2hvdycsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zaG93VG9vbGJhck5vZGUoc3Vibm9kZSk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZE5vZGUoc3Vibm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaGlkZVRvb2xiYXJOb2RlKG5vZGUpO1xuXG4gIH1cblxuICAvLyBGSU4gUEFSVElFIENPTExBUFNFXG59XG4iXX0=