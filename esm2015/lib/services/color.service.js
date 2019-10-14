/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ColorService {
    constructor() { }
    /**
     * @return {?}
     */
    getRandomColor() {
        /** @type {?} */
        let letters = '0123456789ABCDEF';
        /** @type {?} */
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    /**
     * @param {?} arrayColorUsed
     * @return {?}
     */
    checkedColor(arrayColorUsed) {
        /** @type {?} */
        let color = this.getRandomColor();
        if (arrayColorUsed.includes(color)) {
            this.checkedColor(arrayColorUsed);
        }
        return color;
    }
}
ColorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ColorService.ctorParameters = () => [];
/** @nocollapse */ ColorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ColorService_Factory() { return new ColorService(); }, token: ColorService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pbmRtYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29sb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7SUFFdkIsZ0JBQWdCLENBQUM7Ozs7SUFDakIsY0FBYzs7WUFDUixPQUFPLEdBQUcsa0JBQWtCOztZQUM1QixLQUFLLEdBQUcsR0FBRztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsS0FBSyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxjQUFjOztZQUNyQixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUVqQyxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBR2YsQ0FBQzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBnZXRSYW5kb21Db2xvcigpIHtcbiAgICBsZXQgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgICBsZXQgY29sb3IgPSAnIyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBjaGVja2VkQ29sb3IoYXJyYXlDb2xvclVzZWQpIHtcbiAgICBsZXQgY29sb3IgPSB0aGlzLmdldFJhbmRvbUNvbG9yKCk7XG5cbiAgICBpZiAoYXJyYXlDb2xvclVzZWQuaW5jbHVkZXMoY29sb3IpKSB7XG4gICAgICB0aGlzLmNoZWNrZWRDb2xvcihhcnJheUNvbG9yVXNlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuXG5cbiAgfVxufVxuIl19