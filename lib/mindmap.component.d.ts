import { OnInit, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColorPickerService } from 'ngx-color-picker';
import { ColorService } from './services/color.service';
import { ToolbarService } from './services/toolbar.service';
import { NodeService } from './services/node.service';
import { MutualService } from './services/mutual.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
export declare class MindmapComponent implements OnInit {
    private formBuilder;
    private cpService;
    private toolbarService;
    private colorService;
    private nodeService;
    private mutualService;
    private el;
    private renderer;
    private modalService;
    onChange: EventEmitter<{}>;
    arrayColorUsed: Array<any>;
    timestampLastClick: number;
    formNode: FormGroup;
    loading: boolean;
    submitted: boolean;
    color: String;
    statusModal: boolean;
    optionMenu: any;
    modalRef: BsModalRef;
    private modalNode;
    elements: any;
    cy: any;
    config: {
        container: any;
        elements: any;
        layout: {
            name: string;
        };
        maxZoom: number;
        minZoom: number;
        style: ({
            selector: string;
            style: {
                'label': string;
                'shape': string;
                'background-color': string;
                'line-color'?: undefined;
            };
        } | {
            selector: string;
            style: {
                'line-color': string;
                'label'?: undefined;
                'shape'?: undefined;
                'background-color'?: undefined;
            };
        })[];
    };
    constructor(formBuilder: FormBuilder, cpService: ColorPickerService, toolbarService: ToolbarService, colorService: ColorService, nodeService: NodeService, mutualService: MutualService, el: ElementRef, renderer: Renderer2, modalService: BsModalService);
    eventChangeColor(event: string, data: any): void;
    ngOnInit(): void;
    readonly f: {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    openModal(): void;
    closeModal(): void;
    onSubmit(): void;
    renderGraph(): void;
    emitChange(): void;
    collapseNode(node: any): void;
    expandNode(node: any): void;
}
