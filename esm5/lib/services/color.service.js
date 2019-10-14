/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ ColorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ColorService_Factory() { return new ColorService(); }, token: ColorService, providedIn: "root" });
    return ColorService;
}());
export { ColorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pbmRtYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29sb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFLRTtJQUFnQixDQUFDOzs7O0lBQ2pCLHFDQUFjOzs7SUFBZDs7WUFDTSxPQUFPLEdBQUcsa0JBQWtCOztZQUM1QixLQUFLLEdBQUcsR0FBRztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsS0FBSyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELG1DQUFZOzs7O0lBQVosVUFBYSxjQUFjOztZQUNyQixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUVqQyxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBR2YsQ0FBQzs7Z0JBMUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3VCQUpEO0NBNkJDLEFBM0JELElBMkJDO1NBeEJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgZ2V0UmFuZG9tQ29sb3IoKSB7XG4gICAgbGV0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4gICAgbGV0IGNvbG9yID0gJyMnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgY2hlY2tlZENvbG9yKGFycmF5Q29sb3JVc2VkKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5nZXRSYW5kb21Db2xvcigpO1xuXG4gICAgaWYgKGFycmF5Q29sb3JVc2VkLmluY2x1ZGVzKGNvbG9yKSkge1xuICAgICAgdGhpcy5jaGVja2VkQ29sb3IoYXJyYXlDb2xvclVzZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcblxuXG4gIH1cbn1cbiJdfQ==