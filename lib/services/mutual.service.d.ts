import { NodeService } from './node.service';
import { ColorService } from './color.service';
import { CollapseService } from './collapse.service';
import { ToolbarService } from './toolbar.service';
export declare class MutualService {
    private nodeService;
    private toolbarService;
    private colorService;
    private collaspeService;
    constructor(nodeService: NodeService, toolbarService: ToolbarService, colorService: ColorService, collaspeService: CollapseService);
    createToolbarNode(idNode: any, that: any): HTMLDivElement;
    addToolbarNode(idNode: any, that: any): void;
    refreshToolbarNode(node: any, that: any): void;
    addChildNode(node: any, name: any, color: any, that: any): void;
    removeNode(node: any, that: any): void;
}
