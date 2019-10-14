/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CollapseService {
    constructor() { }
    /**
     * @param {?} node
     * @return {?}
     */
    isCollapsable(node) {
        /** @type {?} */
        const links = node.connectedEdges('[source="' + node.data('id') + '"]');
        return links.length !== 0;
    }
}
CollapseService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CollapseService.ctorParameters = () => [];
/** @nocollapse */ CollapseService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CollapseService_Factory() { return new CollapseService(); }, token: CollapseService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pbmRtYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29sbGFwc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7Ozs7O0lBQ2pCLGFBQWEsQ0FBQyxJQUFTOztjQUNmLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2RSxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQVRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBpc0NvbGxhcHNhYmxlKG5vZGU6IGFueSkge1xuICAgIGNvbnN0IGxpbmtzID0gbm9kZS5jb25uZWN0ZWRFZGdlcygnW3NvdXJjZT1cIicgKyBub2RlLmRhdGEoJ2lkJykgKyAnXCJdJyk7XG4gICAgcmV0dXJuIGxpbmtzLmxlbmd0aCAhPT0gMDtcbiAgfVxufVxuIl19