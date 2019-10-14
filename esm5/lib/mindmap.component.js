/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, ElementRef, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import cytoscape from 'cytoscape';
import contextMenus from 'cytoscape-context-menus';
import popper from 'cytoscape-popper';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ColorPickerService } from 'ngx-color-picker';
import { ColorService } from './services/color.service';
import { ToolbarService } from './services/toolbar.service';
import { NodeService } from './services/node.service';
import { MutualService } from './services/mutual.service';
import $ from 'jquery';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
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
export { MindmapComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZG1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5kbWFwLyIsInNvdXJjZXMiOlsibGliL21pbmRtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SCxPQUFPLFNBQVMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxZQUFZLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQWMsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUcvQjtJQTBERSwwQkFBb0IsV0FBd0IsRUFBVSxTQUE2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QUN0RSw4QkFBc0I7Ozs7O0lBQUUsb0NBQTJCOzs7OztJQUNuRCx3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBjeXRvc2NhcGUgZnJvbSAnY3l0b3NjYXBlJztcbmltcG9ydCBjb250ZXh0TWVudXMgZnJvbSAnY3l0b3NjYXBlLWNvbnRleHQtbWVudXMnO1xuaW1wb3J0IHBvcHBlciBmcm9tICdjeXRvc2NhcGUtcG9wcGVyJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlLCBDbXlrIH0gZnJvbSAnbmd4LWNvbG9yLXBpY2tlcic7XG5pbXBvcnQgeyBDb2xvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9vbGJhclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Rvb2xiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBOb2RlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm9kZS5zZXJ2aWNlJztcbmltcG9ydCB7IE11dHVhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL211dHVhbC5zZXJ2aWNlJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBzZXRUaGVtZSB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UsIEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuc2V0VGhlbWUoJ2JzNCcpO1xuY3l0b3NjYXBlLnVzZShwb3BwZXIpO1xuY3l0b3NjYXBlLnVzZShjb250ZXh0TWVudXMsICQpO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1taW5kbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmRtYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9taW5kbWFwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWluZG1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBhcnJheUNvbG9yVXNlZDogQXJyYXk8YW55PiA9IFsnIzAwMDAwMCddO1xuICB0aW1lc3RhbXBMYXN0Q2xpY2sgPSAwO1xuICBmb3JtTm9kZTogRm9ybUdyb3VwO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICBjb2xvcjogU3RyaW5nO1xuICBzdGF0dXNNb2RhbDogYm9vbGVhbjtcbiAgb3B0aW9uTWVudTogYW55O1xuICBtb2RhbFJlZjogQnNNb2RhbFJlZjtcblxuICBAVmlld0NoaWxkKCdtb2RhbE5vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIG1vZGFsTm9kZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBlbGVtZW50czogYW55ID0ge1xuICAgIG5vZGVzOiBbXG4gICAgICB7IGRhdGE6IHsgaWQ6ICduJywgbGFiZWw6ICdSb290JyB9IH0sXG4gICAgXVxuICB9O1xuXG4gIGN5ID0gbnVsbDtcbiAgY29uZmlnID0ge1xuICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICBlbGVtZW50czogdGhpcy5lbGVtZW50cyxcbiAgICBsYXlvdXQ6IHtcbiAgICAgIG5hbWU6ICdjb3NlJyxcbiAgICB9LFxuICAgIG1heFpvb206IDIuNSxcbiAgICBtaW5ab29tOiAwLjUsXG4gICAgc3R5bGU6IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdub2RlJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAnbGFiZWwnOiAnZGF0YShpZCknLCAvLyBSZW1wbGFjZXIgcGFyIGRhdGEobGFiZWwpIHVuZSBmb2lzIHRlcm1pbsOpXG4gICAgICAgICAgJ3NoYXBlJzogJ3JvdW5kLXJlY3RhbmdsZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzAwMDAwMCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdlZGdlJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAnbGluZS1jb2xvcic6ICcjRUVFJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgY3BTZXJ2aWNlOiBDb2xvclBpY2tlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b29sYmFyU2VydmljZTogVG9vbGJhclNlcnZpY2UsIHByaXZhdGUgY29sb3JTZXJ2aWNlOiBDb2xvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBub2RlU2VydmljZTogTm9kZVNlcnZpY2UsIHByaXZhdGUgbXV0dWFsU2VydmljZTogTXV0dWFsU2VydmljZSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlXG5cbiAgKSB7XG4gICAgY3BTZXJ2aWNlID0gdGhpcy5jcFNlcnZpY2U7XG4gICAgdG9vbGJhclNlcnZpY2UgPSB0aGlzLnRvb2xiYXJTZXJ2aWNlO1xuICAgIGNvbG9yU2VydmljZSA9IHRoaXMuY29sb3JTZXJ2aWNlO1xuICAgIG5vZGVTZXJ2aWNlID0gdGhpcy5ub2RlU2VydmljZTtcbiAgICBtdXR1YWxTZXJ2aWNlID0gdGhpcy5tdXR1YWxTZXJ2aWNlO1xuICB9XG5cblxuICBwdWJsaWMgZXZlbnRDaGFuZ2VDb2xvcihldmVudDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1Ob2RlLmdldCgnY29sb3InKS5zZXRWYWx1ZShkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuY29uZmlnLmNvbnRhaW5lciA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLmN5ID0gY3l0b3NjYXBlKHRoaXMuY29uZmlnKTtcbiAgICAvLyB0aGlzLmN5LmNvbnRleHRNZW51cygkKTtcbiAgICB0aGlzLmN5Lm9uKCd0YXAnLCAnbm9kZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgdGltZXN0YW1wQ2xpY2sgPSBldmVudC50aW1lU3RhbXA7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aW1lc3RhbXBDbGljayAtIHRoaXMudGltZXN0YW1wTGFzdENsaWNrO1xuXG4gICAgICBpZiAocmVzdWx0IDwgNTAwKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC50cmlnZ2VyKCdkb3VibGV0YXAnLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGltZXN0YW1wTGFzdENsaWNrID0gdGltZXN0YW1wQ2xpY2s7XG4gICAgfSk7XG5cbiAgICB0aGlzLmN5Lm9uKCdkb3VibGV0YXAnLCBmdW5jdGlvbiAoZXZlbnQsIG9yaWdpbmFsVGFwRXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdldmVuZW1lbnQnLCBldmVudCk7XG4gICAgICAvLyBjb25zdCBub2RlSWQgPSBldmVudC50YXJnZXQuZGF0YSgnaWQnKTtcbiAgICAgIHRoYXQubm9kZVNlcnZpY2Uub3Blbk1vZGFsVXBkYXRlTm9kZShldmVudC50YXJnZXQsIHRoYXQpO1xuXG4gICAgfSk7XG5cbiAgICB0aGlzLmN5Lm9uKCdtb3VzZW91dCcsICdub2RlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBub2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgdGhhdC50b29sYmFyU2VydmljZS5oaWRlVG9vbGJhck5vZGUobm9kZSk7XG4gICAgfSk7XG4gICAgdGhpcy5jeS5vbignbW91c2VvdmVyJywgJ25vZGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBldmVudC50YXJnZXQ7XG4gICAgICB0aGF0LnRvb2xiYXJTZXJ2aWNlLnNob3dUb29sYmFyTm9kZShub2RlKTtcbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBvcHRpb25zTWVudSA9IHtcbiAgICAgIG1lbnVJdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdhZGQtbm9kZScsXG4gICAgICAgICAgY29udGVudDogJ0Fqb3V0ZXIgdW4gbm9ldWQgZW5mYW50JyxcbiAgICAgICAgICBzZWxlY3RvcjogJ25vZGUnLFxuICAgICAgICAgIG9uQ2xpY2tGdW5jdGlvbjogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5ub2RlU2VydmljZS5vcGVuTW9kYWxBZGROb2RlKG5vZGUsIHRoYXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAncmVuYW1lLW5vZGUnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdNb2RpZmllcicsXG4gICAgICAgICAgc2VsZWN0b3I6ICdub2RlJyxcbiAgICAgICAgICBvbkNsaWNrRnVuY3Rpb246IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHRoaXMubm9kZVNlcnZpY2Uub3Blbk1vZGFsVXBkYXRlTm9kZShub2RlLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2NvbGxhcHNlLW5vZGUnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdSZXBsaWVyJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ25vZGUnLFxuICAgICAgICAgIG9uQ2xpY2tGdW5jdGlvbjogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZU5vZGUobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdleHBhbmQtbm9kZScsXG4gICAgICAgICAgY29udGVudDogJ0TDqXBsaWVyJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ25vZGUnLFxuICAgICAgICAgIG9uQ2xpY2tGdW5jdGlvbjogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5leHBhbmROb2RlKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAncmVtb3ZlLW5vZGUnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgIHNlbGVjdG9yOiAnbm9kZVtpZCE9XCJuXCJdJyxcbiAgICAgICAgICBvbkNsaWNrRnVuY3Rpb246IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHRoaXMubXV0dWFsU2VydmljZS5yZW1vdmVOb2RlKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICB0aGlzLm9wdGlvbk1lbnUgPSB0aGlzLmN5LmNvbnRleHRNZW51cyhvcHRpb25zTWVudSk7XG4gICAgdGhpcy5vcHRpb25NZW51LmlzQWN0aXZlKCk7XG4gICAgdGhpcy5tdXR1YWxTZXJ2aWNlLmFkZFRvb2xiYXJOb2RlKCduJywgdGhpcyk7XG5cbiAgICB0aGlzLmN5Lm9uKCdjeHR0YXBzdGFydCcsICdub2RlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBub2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc29sZS53YXJuKG5vZGUpO1xuICAgICAgaWYgKCFub2RlLmRhdGEoJ2NvbGxhcHNlZCcpICYmIHRoYXQubm9kZVNlcnZpY2UuZ2V0Tm9kZUNvbm5lY3RlZChub2RlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoYXQub3B0aW9uTWVudS5oaWRlTWVudUl0ZW0oJ2V4cGFuZC1ub2RlJyk7XG4gICAgICAgIHRoYXQub3B0aW9uTWVudS5zaG93TWVudUl0ZW0oJ2NvbGxhcHNlLW5vZGUnKTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmRhdGEoJ2NvbGxhcHNlZCcpKSB7XG5cbiAgICAgICAgdGhhdC5vcHRpb25NZW51LmhpZGVNZW51SXRlbSgnY29sbGFwc2Utbm9kZScpO1xuICAgICAgICB0aGF0Lm9wdGlvbk1lbnUuc2hvd01lbnVJdGVtKCdleHBhbmQtbm9kZScpO1xuICAgICAgfVxuICAgICAgaWYgKCFub2RlLmRhdGEoJ2NvbGxhcHNlZCcpICYmIHRoYXQubm9kZVNlcnZpY2UuZ2V0Tm9kZUNvbm5lY3RlZChub2RlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhhdC5vcHRpb25NZW51LmhpZGVNZW51SXRlbSgnZXhwYW5kLW5vZGUnKTtcbiAgICAgICAgdGhhdC5vcHRpb25NZW51LmhpZGVNZW51SXRlbSgnY29sbGFwc2Utbm9kZScpO1xuICAgICAgfVxuICAgICAgdGhhdC5tdXR1YWxTZXJ2aWNlLnJlZnJlc2hUb29sYmFyTm9kZShub2RlLCB0aGF0KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrZWRDb2xvcihjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICAgICAgY29uc3QgY29sb3IgPSBjb250cm9sLnZhbHVlO1xuICAgICAgaWYgKHRoYXQuYXJyYXlDb2xvclVzZWQuaW5jbHVkZXMoY29sb3IpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsaWRhdGVDb2xvcjoge1xuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLy8gaW5pdGlhbGlzYXRpb25cbiAgICB0aGlzLmZvcm1Ob2RlID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBpZDogbmV3IEZvcm1Db250cm9sKG51bGwpLFxuICAgICAgbmFtZTogbmV3IEZvcm1Db250cm9sKCdOb3V2ZWF1IG5vZGUnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNDApXSksXG4gICAgICBjb2xvcjogbmV3IEZvcm1Db250cm9sKHRoaXMuY29sb3JTZXJ2aWNlLmNoZWNrZWRDb2xvcih0aGF0LmFycmF5Q29sb3JVc2VkKSwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIGNoZWNrZWRDb2xvcl0pXG4gICAgfSk7XG5cbiAgfVxuICBnZXQgZigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtTm9kZS5jb250cm9scztcbiAgfVxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLnNob3codGhpcy5tb2RhbE5vZGUpO1xuICB9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbFJlZi5oaWRlKCk7XG4gIH1cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuXG4gICAgLy8gc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZFxuICAgIGlmICh0aGlzLmZvcm1Ob2RlLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3Qgbm9kZUlkID0gdGhpcy5mb3JtTm9kZS52YWx1ZS5pZDtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlU2VydmljZS5nZXROb2RlQnlJZChub2RlSWQsIHRoaXMpO1xuXG4gICAgaWYgKCF0aGlzLnN0YXR1c01vZGFsKSB7XG4gICAgICB0aGlzLm11dHVhbFNlcnZpY2UuYWRkQ2hpbGROb2RlKG5vZGUsIHRoaXMuZm9ybU5vZGUudmFsdWUubmFtZSwgdGhpcy5mb3JtTm9kZS52YWx1ZS5jb2xvciwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZVNlcnZpY2UudXBkYXRlSW5mb3JtYXRpb25Ob2RlKG5vZGUsIHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybU5vZGUucmVzZXQoKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB0aGlzLmZvcm1Ob2RlLmdldCgnbmFtZScpLnNldFZhbHVlKCdOT3V2ZWF1IG5vZGUnKTtcblxuXG5cbiAgfVxuXG4gIHJlbmRlckdyYXBoKCkge1xuXG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy5jeS5sYXlvdXQoe1xuICAgICAgbmFtZTogJ2Nvc2UnLFxuICAgIH0pO1xuXG4gICAgbGF5b3V0LnJ1bigpO1xuICB9XG5cblxuXG4gIGVtaXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuY3kuanNvbigpKTtcbiAgfVxuXG4gIC8vIGdldFRlc3ROb2RlKCkge1xuICAvLyAgIHJldHVybiB0aGlzLm5vZGVTZXJ2aWNlLmdldFRlc3ROb2RlKHRoaXMpO1xuICAvLyB9XG4gIGNvbGxhcHNlTm9kZShub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbGJhclNlcnZpY2UuY29sbGFwc2VOb2RlKG5vZGUpO1xuXG4gIH1cbiAgZXhwYW5kTm9kZShub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbGJhclNlcnZpY2UuZXhwYW5kTm9kZShub2RlKTtcblxuICB9XG5cblxufVxuXG4iXX0=