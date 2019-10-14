/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MindmapComponent } from './mindmap.component';
import { ToolbarService } from './services/toolbar.service';
import { ColorService } from './services/color.service';
import { MutualService } from './services/mutual.service';
import { CollapseService } from './services/collapse.service';
import { ColorPickerModule } from 'ngx-color-picker';
import { NodeService } from './services/node.service';
import { ModalModule } from 'ngx-bootstrap/modal';
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
export { MindmapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZG1hcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5kbWFwLyIsInNvdXJjZXMiOlsibGliL21pbmRtYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUcsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJbEQ7SUFBQTtJQW1CNkIsQ0FBQzs7Z0JBbkI3QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7cUJBQ3RCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxjQUFjO3dCQUNkLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1Qjs7SUFDNEIsb0JBQUM7Q0FBQSxBQW5COUIsSUFtQjhCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7ICBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1pbmRtYXBDb21wb25lbnQgfSBmcm9tICcuL21pbmRtYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2xiYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90b29sYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb2xvci5zZXJ2aWNlJztcbmltcG9ydCB7IE11dHVhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL211dHVhbC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbGxhcHNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29sbGFwc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xvclBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1jb2xvci1waWNrZXInO1xuaW1wb3J0IHsgTm9kZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25vZGUuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWluZG1hcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb2xvclBpY2tlck1vZHVsZSxcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVG9vbGJhclNlcnZpY2UsXG4gICAgQ29sb3JTZXJ2aWNlLFxuICAgIE11dHVhbFNlcnZpY2UsXG4gICAgQ29sbGFwc2VTZXJ2aWNlLFxuICAgIE5vZGVTZXJ2aWNlXG4gIF0sXG4gIGJvb3RzdHJhcDogW01pbmRtYXBDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTWluZG1hcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWluZG1hcE1vZHVsZSB7IH1cbiJdfQ==