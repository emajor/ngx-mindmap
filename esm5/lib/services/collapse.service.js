/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ CollapseService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CollapseService_Factory() { return new CollapseService(); }, token: CollapseService, providedIn: "root" });
    return CollapseService;
}());
export { CollapseService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pbmRtYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29sbGFwc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFLRTtJQUFnQixDQUFDOzs7OztJQUNqQix1Q0FBYTs7OztJQUFiLFVBQWMsSUFBUzs7WUFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkUsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkFURixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzswQkFKRDtDQVlDLEFBVkQsSUFVQztTQVBZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgaXNDb2xsYXBzYWJsZShub2RlOiBhbnkpIHtcbiAgICBjb25zdCBsaW5rcyA9IG5vZGUuY29ubmVjdGVkRWRnZXMoJ1tzb3VyY2U9XCInICsgbm9kZS5kYXRhKCdpZCcpICsgJ1wiXScpO1xuICAgIHJldHVybiBsaW5rcy5sZW5ndGggIT09IDA7XG4gIH1cbn1cbiJdfQ==