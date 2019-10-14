import { ColorService } from './color.service';
export declare class NodeService {
    private colorService;
    constructor(colorService: ColorService);
    getNodeById(id: any, that: any): any;
    renameNode(node: any, that: any): void;
    getUniqueNodeId(that: any): any;
    getLastNodeId(that: any): void;
    getParentNode(node: any, that: any): any;
    updateInformationNode(node: any, that: any): void;
    merge_array(array1: any, array2: any): any[];
    getBranchConnected(node: any, result: any, used: any, that: any): any[];
    getNodeConnected(node: any): any[];
    openModalUpdateNode(node: any, that: any): void;
    openModalAddNode(node: any, that: any): void;
    updateColorBranchNode(node: any, color: any, that: any): void;
}
