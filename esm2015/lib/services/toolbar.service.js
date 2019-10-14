/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ToolbarService {
    constructor() {
    }
    /**
     * @param {?} node
     * @return {?}
     */
    removeToolbarNode(node) {
        /** @type {?} */
        const nodeId = node.data('id');
        /** @type {?} */
        const toolbar = document.querySelector('#toolbar-' + nodeId);
        if (toolbar) {
            toolbar.remove();
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    hideToolbarNode(node) {
        /** @type {?} */
        const nodeId = node.data('id');
        /** @type {?} */
        const toolbar = document.querySelector('#toolbar-' + nodeId);
        if (toolbar) {
            toolbar.style.visibility = 'hidden';
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    showToolbarNode(node) {
        /** @type {?} */
        const nodeId = node.data('id');
        /** @type {?} */
        const toolbar = document.querySelector('#toolbar-' + nodeId);
        if (toolbar) {
            toolbar.style.visibility = 'visible';
        }
    }
    // PARTIE COLLAPSE
    /**
     * @param {?} node
     * @return {?}
     */
    collapseNode(node) {
        node.data('collapsed', true);
        /** @type {?} */
        const connectedEdges = node.connectedEdges(`[source="${node.data('id')}"]`);
        if (connectedEdges.length) {
            connectedEdges.map((/**
             * @param {?} edge
             * @return {?}
             */
            (edge) => {
                if (edge.style('visibility') === 'visible') {
                    edge.style('visibility', 'hidden');
                    edge.target().map((/**
                     * @param {?} subnode
                     * @return {?}
                     */
                    (subnode) => {
                        subnode.style('visibility', 'hidden');
                        subnode.data('show', false);
                        this.hideToolbarNode(subnode);
                        this.collapseNode(subnode);
                    }));
                }
            }));
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    expandNode(node) {
        /** @type {?} */
        const connectedEdges = node.connectedEdges(`[source="${node.data('id')}"]`);
        node.data('collapsed', false);
        if (connectedEdges.length) {
            connectedEdges.map((/**
             * @param {?} edge
             * @return {?}
             */
            (edge) => {
                if (edge.style('visibility') === 'hidden') {
                    edge.style('visibility', 'visible');
                    edge.target().map((/**
                     * @param {?} subnode
                     * @return {?}
                     */
                    (subnode) => {
                        subnode.style('visibility', 'visible');
                        subnode.data('show', true);
                        this.showToolbarNode(subnode);
                        this.expandNode(subnode);
                    }));
                }
            }));
        }
        this.hideToolbarNode(node);
    }
}
ToolbarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToolbarService.ctorParameters = () => [];
/** @nocollapse */ ToolbarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToolbarService_Factory() { return new ToolbarService(); }, token: ToolbarService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluZG1hcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b29sYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBRXpCO0lBQ0EsQ0FBQzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxJQUFJOztjQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Y0FHeEIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM1RCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBSUQsZUFBZSxDQUFDLElBQUk7O2NBQ1osTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztjQUN4QixPQUFPLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ2pFLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBSTs7Y0FDWixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O2NBQ3hCLE9BQU8sR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDakUsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsSUFBSTtRQUVmLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDOztjQUN2QixjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUzRSxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsY0FBYyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUUxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTt3QkFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QixDQUFDLEVBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFJOztjQUNQLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUN6QixjQUFjLENBQUMsR0FBRzs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBRTFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRzs7OztvQkFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO3dCQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBRUgsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0IsQ0FBQzs7O1lBakZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICByZW1vdmVUb29sYmFyTm9kZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZUlkID0gbm9kZS5kYXRhKCdpZCcpO1xuXG5cbiAgICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xiYXItJyArIG5vZGVJZCk7XG4gICAgaWYgKHRvb2xiYXIpIHtcbiAgICAgIHRvb2xiYXIucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cblxuXG4gIGhpZGVUb29sYmFyTm9kZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZUlkID0gbm9kZS5kYXRhKCdpZCcpO1xuICAgIGNvbnN0IHRvb2xiYXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b29sYmFyLScgKyBub2RlSWQpO1xuICAgIGlmICh0b29sYmFyKSB7XG4gICAgICB0b29sYmFyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG4gIH1cblxuICBzaG93VG9vbGJhck5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVJZCA9IG5vZGUuZGF0YSgnaWQnKTtcbiAgICBjb25zdCB0b29sYmFyOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9vbGJhci0nICsgbm9kZUlkKTtcbiAgICBpZiAodG9vbGJhcikge1xuICAgICAgdG9vbGJhci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbiAgfVxuICAvLyBQQVJUSUUgQ09MTEFQU0VcblxuICBjb2xsYXBzZU5vZGUobm9kZSkge1xuXG4gICAgbm9kZS5kYXRhKCdjb2xsYXBzZWQnLCB0cnVlKTtcbiAgICBjb25zdCBjb25uZWN0ZWRFZGdlcyA9IG5vZGUuY29ubmVjdGVkRWRnZXMoYFtzb3VyY2U9XCIke25vZGUuZGF0YSgnaWQnKX1cIl1gKTtcblxuICAgIGlmIChjb25uZWN0ZWRFZGdlcy5sZW5ndGgpIHtcbiAgICAgIGNvbm5lY3RlZEVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuXG4gICAgICAgIGlmIChlZGdlLnN0eWxlKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgIGVkZ2Uuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgZWRnZS50YXJnZXQoKS5tYXAoKHN1Ym5vZGUpID0+IHtcbiAgICAgICAgICAgIHN1Ym5vZGUuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICBzdWJub2RlLmRhdGEoJ3Nob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVUb29sYmFyTm9kZShzdWJub2RlKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VOb2RlKHN1Ym5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBleHBhbmROb2RlKG5vZGUpIHtcbiAgICBjb25zdCBjb25uZWN0ZWRFZGdlcyA9IG5vZGUuY29ubmVjdGVkRWRnZXMoYFtzb3VyY2U9XCIke25vZGUuZGF0YSgnaWQnKX1cIl1gKTtcblxuICAgIG5vZGUuZGF0YSgnY29sbGFwc2VkJywgZmFsc2UpO1xuXG4gICAgaWYgKGNvbm5lY3RlZEVkZ2VzLmxlbmd0aCkge1xuICAgICAgY29ubmVjdGVkRWRnZXMubWFwKChlZGdlKSA9PiB7XG5cbiAgICAgICAgaWYgKGVkZ2Uuc3R5bGUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICBlZGdlLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICBlZGdlLnRhcmdldCgpLm1hcCgoc3Vibm9kZSkgPT4ge1xuICAgICAgICAgICAgc3Vibm9kZS5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICBzdWJub2RlLmRhdGEoJ3Nob3cnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2xiYXJOb2RlKHN1Ym5vZGUpO1xuICAgICAgICAgICAgdGhpcy5leHBhbmROb2RlKHN1Ym5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmhpZGVUb29sYmFyTm9kZShub2RlKTtcblxuICB9XG5cbiAgLy8gRklOIFBBUlRJRSBDT0xMQVBTRVxufVxuIl19