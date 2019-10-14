/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColorService } from './color.service';
import * as i0 from "@angular/core";
import * as i1 from "./color.service";
export class NodeService {
    /**
     * @param {?} colorService
     */
    constructor(colorService) {
        this.colorService = colorService;
        colorService = this.colorService;
    }
    /**
     * @param {?} id
     * @param {?} that
     * @return {?}
     */
    getNodeById(id, that) {
        return that.cy.nodes('[id="' + id + '"]');
    }
    /**
     * @param {?} node
     * @param {?} that
     * @return {?}
     */
    renameNode(node, that) {
        /** @type {?} */
        const currentLabel = node.data('label');
        /** @type {?} */
        const newLabel = prompt('Quel nom pour ce noeud ?', currentLabel);
        if (newLabel !== currentLabel) {
            node.data('label', newLabel);
        }
        that.emitChange();
    }
    /**
     * @param {?} that
     * @return {?}
     */
    getUniqueNodeId(that) {
        /** @type {?} */
        const usedId = that.cy.nodes().map((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            return el.data('id');
        }));
        /** @type {?} */
        const id = Math.round(100000 * Math.random()).toString(10);
        /** @type {?} */
        const idAlreadyExist = usedId.indexOf(id) !== -1;
        if (idAlreadyExist) {
            return this.getUniqueNodeId(that);
        }
        return id;
    }
    /**
     * @param {?} that
     * @return {?}
     */
    getLastNodeId(that) {
        /** @type {?} */
        const nodes = that.cy.nodes();
        // console.log(nodes[nodes.length - 1].data('id'));
    }
    /**
     * @param {?} node
     * @param {?} that
     * @return {?}
     */
    getParentNode(node, that) {
        /** @type {?} */
        const nodeId = node.data('id');
        /** @type {?} */
        const parentNodeId = node.connectedEdges('[target="' + nodeId + '"]').data('source');
        return that.cy.nodes('[id="' + parentNodeId + '"]');
    }
    // getTestNode(that) {
    //   return that.cy.nodes('[id="n"]');
    // }
    /**
     * @param {?} node
     * @param {?} that
     * @return {?}
     */
    updateInformationNode(node, that) {
        node.data('label', that.formNode.value.name);
        node.style('background-color', that.formNode.value.color);
        this.updateColorBranchNode(node, that.formNode.value.color, that);
    }
    /**
     * @param {?} array1
     * @param {?} array2
     * @return {?}
     */
    merge_array(array1, array2) {
        /** @type {?} */
        const result_array = [];
        /** @type {?} */
        const arr = array1.concat(array2);
        /** @type {?} */
        let len = arr.length;
        /** @type {?} */
        const assoc = {};
        while (len--) {
            /** @type {?} */
            const item = arr[len];
            if (!assoc[item]) {
                result_array.unshift(item);
                assoc[item] = true;
            }
        }
        return result_array;
    }
    /**
     * @param {?} node
     * @param {?} result
     * @param {?} used
     * @param {?} that
     * @return {?}
     */
    getBranchConnected(node, result, used, that) {
        // init variable
        /** @type {?} */
        let arrayResult = [];
        /** @type {?} */
        let arrayIdTested = [];
        /** @type {?} */
        const idNode = node.data('id');
        // on merge avce les paramètres
        arrayResult = this.merge_array(arrayResult, result);
        arrayIdTested = this.merge_array(used, arrayIdTested);
        if (idNode !== 'n') {
            arrayIdTested.push(idNode);
            /** @type {?} */
            const allNodesConnected = this.getNodeConnected(this.getNodeById(idNode, that));
            arrayResult = this.merge_array(arrayResult, allNodesConnected);
            if (allNodesConnected.length > 0) {
                for (let id in allNodesConnected) {
                    id = allNodesConnected[id];
                    if (id !== 'n' && !arrayIdTested.includes(id)) {
                        arrayResult.push(id);
                        arrayIdTested.push(id);
                        /** @type {?} */
                        const test = this.getBranchConnected(this.getNodeById(id, that), arrayResult, arrayIdTested, that);
                        arrayResult = this.merge_array(arrayResult, test);
                    }
                }
            }
        }
        // retorune un tableau d'id de node
        return arrayResult;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getNodeConnected(node) {
        /** @type {?} */
        const idNode = node.data('id');
        /** @type {?} */
        const result = [];
        /** @type {?} */
        let objectToArray;
        /** @type {?} */
        const allNodesConnected = node.connectedEdges();
        delete allNodesConnected['_private'];
        delete allNodesConnected['length'];
        objectToArray = Object.values(allNodesConnected);
        if (objectToArray.length > 0 && !result.includes(idNode)) {
            for (const n in objectToArray) {
                /** @type {?} */
                const targetIdNode = objectToArray[n].data('target');
                /** @type {?} */
                const sourceIdNode = objectToArray[n].data('source');
                if (targetIdNode !== 'n' && !result.includes(targetIdNode) && targetIdNode !== idNode) {
                    result.push(targetIdNode);
                }
                if (sourceIdNode !== 'n' && !result.includes(sourceIdNode) && sourceIdNode !== idNode) {
                    result.push(sourceIdNode);
                }
            }
        }
        return result;
    }
    /**
     * @param {?} node
     * @param {?} that
     * @return {?}
     */
    openModalUpdateNode(node, that) {
        /** @type {?} */
        const nodeId = node.data('id');
        if (nodeId !== 'n') {
            that.statusModal = true;
            that.formNode.get('id').setValue(nodeId);
            that.openModal();
            that.formNode.get('name').setValue(node.data('label'));
            that.color = node.style('background-color');
            that.formNode.get('color').setValue(node.style('background-color'));
        }
    }
    /**
     * @param {?} node
     * @param {?} that
     * @return {?}
     */
    openModalAddNode(node, that) {
        console.log('on atteind la fonction');
        that.statusModal = false;
        that.formNode.get('id').setValue(node.data('id'));
        /** @type {?} */
        let color = this.colorService.checkedColor(that.arrayColorUsed);
        if (node.data('id') !== 'n') {
            color = node.style('background-color');
        }
        that.color = color;
        that.formNode.get('color').setValue(color);
        that.openModal();
    }
    // PARTIE COULEUR
    /**
     * @param {?} node
     * @param {?} color
     * @param {?} that
     * @return {?}
     */
    updateColorBranchNode(node, color, that) {
        /** @type {?} */
        const nodeConnected = this.getBranchConnected(node, [], [], that);
        for (let id in nodeConnected) {
            id = nodeConnected[id];
            this.getNodeById(id, that).style('background-color', color);
        }
    }
}
NodeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NodeService.ctorParameters = () => [
    { type: ColorService }
];
/** @nocollapse */ NodeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NodeService_Factory() { return new NodeService(i0.ɵɵinject(i1.ColorService)); }, token: NodeService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NodeService.prototype.colorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWluZG1hcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub2RlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLL0MsTUFBTSxPQUFPLFdBQVc7Ozs7SUFFdEIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBSUQsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUk7O2NBQ2IsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOztjQUNqQyxRQUFRLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixFQUFFLFlBQVksQ0FBQztRQUNqRSxJQUFJLFFBQVEsS0FBSyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBSTs7Y0FDWixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUN4QyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDOztjQUVJLEVBQUUs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RUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7WUF0TEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsWUFBWTs7Ozs7Ozs7SUFPUCxtQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvclNlcnZpY2UgfSBmcm9tICcuL2NvbG9yLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOb2RlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2xvclNlcnZpY2U6IENvbG9yU2VydmljZSkge1xuICAgIGNvbG9yU2VydmljZSA9IHRoaXMuY29sb3JTZXJ2aWNlO1xuICB9XG5cblxuXG4gIGdldE5vZGVCeUlkKGlkLCB0aGF0KSB7XG4gICAgcmV0dXJuIHRoYXQuY3kubm9kZXMoJ1tpZD1cIicgKyBpZCArICdcIl0nKTtcbiAgfVxuXG4gIHJlbmFtZU5vZGUobm9kZSwgdGhhdCkge1xuICAgIGNvbnN0IGN1cnJlbnRMYWJlbCA9IG5vZGUuZGF0YSgnbGFiZWwnKTtcbiAgICBjb25zdCBuZXdMYWJlbCA9IHByb21wdCgnUXVlbCBub20gcG91ciBjZSBub2V1ZCA/JywgY3VycmVudExhYmVsKTtcbiAgICBpZiAobmV3TGFiZWwgIT09IGN1cnJlbnRMYWJlbCkge1xuICAgICAgbm9kZS5kYXRhKCdsYWJlbCcsIG5ld0xhYmVsKTtcbiAgICB9XG4gICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gIH1cblxuICBnZXRVbmlxdWVOb2RlSWQodGhhdCkge1xuICAgIGNvbnN0IHVzZWRJZCA9IHRoYXQuY3kubm9kZXMoKS5tYXAoKGVsKSA9PiB7XG4gICAgICByZXR1cm4gZWwuZGF0YSgnaWQnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGlkID0gTWF0aC5yb3VuZCgxMDAwMDAgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygxMCk7XG4gICAgY29uc3QgaWRBbHJlYWR5RXhpc3QgPSB1c2VkSWQuaW5kZXhPZihpZCkgIT09IC0xO1xuXG4gICAgaWYgKGlkQWxyZWFkeUV4aXN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRVbmlxdWVOb2RlSWQodGhhdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgZ2V0TGFzdE5vZGVJZCh0aGF0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGF0LmN5Lm5vZGVzKCk7XG4gICAgLy8gY29uc29sZS5sb2cobm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0uZGF0YSgnaWQnKSk7XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKG5vZGUsIHRoYXQpIHtcbiAgICBjb25zdCBub2RlSWQgPSBub2RlLmRhdGEoJ2lkJyk7XG4gICAgY29uc3QgcGFyZW50Tm9kZUlkID0gbm9kZS5jb25uZWN0ZWRFZGdlcygnW3RhcmdldD1cIicgKyBub2RlSWQgKyAnXCJdJykuZGF0YSgnc291cmNlJyk7XG4gICAgcmV0dXJuIHRoYXQuY3kubm9kZXMoJ1tpZD1cIicgKyBwYXJlbnROb2RlSWQgKyAnXCJdJyk7XG4gIH1cblxuXG5cbiAgLy8gZ2V0VGVzdE5vZGUodGhhdCkge1xuICAvLyAgIHJldHVybiB0aGF0LmN5Lm5vZGVzKCdbaWQ9XCJuXCJdJyk7XG4gIC8vIH1cblxuICB1cGRhdGVJbmZvcm1hdGlvbk5vZGUobm9kZSwgdGhhdCkge1xuICAgIG5vZGUuZGF0YSgnbGFiZWwnLCB0aGF0LmZvcm1Ob2RlLnZhbHVlLm5hbWUpO1xuICAgIG5vZGUuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCB0aGF0LmZvcm1Ob2RlLnZhbHVlLmNvbG9yKTtcbiAgICB0aGlzLnVwZGF0ZUNvbG9yQnJhbmNoTm9kZShub2RlLCB0aGF0LmZvcm1Ob2RlLnZhbHVlLmNvbG9yLCB0aGF0KTtcblxuICB9XG5cblxuXG4gIG1lcmdlX2FycmF5KGFycmF5MSwgYXJyYXkyKSB7XG4gICAgY29uc3QgcmVzdWx0X2FycmF5ID0gW107XG4gICAgY29uc3QgYXJyID0gYXJyYXkxLmNvbmNhdChhcnJheTIpO1xuICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIGNvbnN0IGFzc29jID0ge307XG5cbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBhcnJbbGVuXTtcblxuICAgICAgaWYgKCFhc3NvY1tpdGVtXSkge1xuICAgICAgICByZXN1bHRfYXJyYXkudW5zaGlmdChpdGVtKTtcbiAgICAgICAgYXNzb2NbaXRlbV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRfYXJyYXk7XG4gIH1cblxuICBnZXRCcmFuY2hDb25uZWN0ZWQobm9kZSwgcmVzdWx0LCB1c2VkLCB0aGF0KSB7XG4gICAgLy8gaW5pdCB2YXJpYWJsZVxuICAgIGxldCBhcnJheVJlc3VsdCA9IFtdO1xuICAgIGxldCBhcnJheUlkVGVzdGVkID0gW107XG4gICAgY29uc3QgaWROb2RlID0gbm9kZS5kYXRhKCdpZCcpO1xuXG4gICAgLy8gb24gbWVyZ2UgYXZjZSBsZXMgcGFyYW3DqHRyZXNcblxuICAgIGFycmF5UmVzdWx0ID0gdGhpcy5tZXJnZV9hcnJheShhcnJheVJlc3VsdCwgcmVzdWx0KTtcbiAgICBhcnJheUlkVGVzdGVkID0gdGhpcy5tZXJnZV9hcnJheSh1c2VkLCBhcnJheUlkVGVzdGVkKTtcblxuXG5cbiAgICBpZiAoaWROb2RlICE9PSAnbicpIHtcbiAgICAgIGFycmF5SWRUZXN0ZWQucHVzaChpZE5vZGUpO1xuICAgICAgY29uc3QgYWxsTm9kZXNDb25uZWN0ZWQgPSB0aGlzLmdldE5vZGVDb25uZWN0ZWQodGhpcy5nZXROb2RlQnlJZChpZE5vZGUsIHRoYXQpKTtcbiAgICAgIGFycmF5UmVzdWx0ID0gdGhpcy5tZXJnZV9hcnJheShhcnJheVJlc3VsdCwgYWxsTm9kZXNDb25uZWN0ZWQpO1xuICAgICAgaWYgKGFsbE5vZGVzQ29ubmVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gYWxsTm9kZXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICBpZCA9IGFsbE5vZGVzQ29ubmVjdGVkW2lkXTtcbiAgICAgICAgICBpZiAoaWQgIT09ICduJyAmJiAhYXJyYXlJZFRlc3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIGFycmF5UmVzdWx0LnB1c2goaWQpO1xuICAgICAgICAgICAgYXJyYXlJZFRlc3RlZC5wdXNoKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSB0aGlzLmdldEJyYW5jaENvbm5lY3RlZCh0aGlzLmdldE5vZGVCeUlkKGlkLCB0aGF0KSwgYXJyYXlSZXN1bHQsIGFycmF5SWRUZXN0ZWQsIHRoYXQpO1xuICAgICAgICAgICAgYXJyYXlSZXN1bHQgPSB0aGlzLm1lcmdlX2FycmF5KGFycmF5UmVzdWx0LCB0ZXN0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXRvcnVuZSB1biB0YWJsZWF1IGQnaWQgZGUgbm9kZVxuICAgIHJldHVybiBhcnJheVJlc3VsdDtcbiAgfVxuXG5cbiAgZ2V0Tm9kZUNvbm5lY3RlZChub2RlKSB7XG4gICAgY29uc3QgaWROb2RlID0gbm9kZS5kYXRhKCdpZCcpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBvYmplY3RUb0FycmF5O1xuICAgIGNvbnN0IGFsbE5vZGVzQ29ubmVjdGVkID0gbm9kZS5jb25uZWN0ZWRFZGdlcygpO1xuICAgIGRlbGV0ZSBhbGxOb2Rlc0Nvbm5lY3RlZFsnX3ByaXZhdGUnXTtcbiAgICBkZWxldGUgYWxsTm9kZXNDb25uZWN0ZWRbJ2xlbmd0aCddO1xuXG4gICAgb2JqZWN0VG9BcnJheSA9IE9iamVjdC52YWx1ZXMoYWxsTm9kZXNDb25uZWN0ZWQpO1xuXG4gICAgaWYgKG9iamVjdFRvQXJyYXkubGVuZ3RoID4gMCAmJiAhcmVzdWx0LmluY2x1ZGVzKGlkTm9kZSkpIHtcbiAgICAgIGZvciAoY29uc3QgbiBpbiBvYmplY3RUb0FycmF5KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkTm9kZSA9IG9iamVjdFRvQXJyYXlbbl0uZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgIGNvbnN0IHNvdXJjZUlkTm9kZSA9IG9iamVjdFRvQXJyYXlbbl0uZGF0YSgnc291cmNlJyk7XG4gICAgICAgIGlmICh0YXJnZXRJZE5vZGUgIT09ICduJyAmJiAhcmVzdWx0LmluY2x1ZGVzKHRhcmdldElkTm9kZSkgJiYgdGFyZ2V0SWROb2RlICE9PSBpZE5vZGUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh0YXJnZXRJZE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2VJZE5vZGUgIT09ICduJyAmJiAhcmVzdWx0LmluY2x1ZGVzKHNvdXJjZUlkTm9kZSkgJiYgc291cmNlSWROb2RlICE9PSBpZE5vZGUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChzb3VyY2VJZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBvcGVuTW9kYWxVcGRhdGVOb2RlKG5vZGUsIHRoYXQpIHtcbiAgICBjb25zdCBub2RlSWQgPSBub2RlLmRhdGEoJ2lkJyk7XG4gICAgaWYgKG5vZGVJZCAhPT0gJ24nKSB7XG4gICAgICB0aGF0LnN0YXR1c01vZGFsID0gdHJ1ZTtcbiAgICAgIHRoYXQuZm9ybU5vZGUuZ2V0KCdpZCcpLnNldFZhbHVlKG5vZGVJZCk7XG4gICAgICB0aGF0Lm9wZW5Nb2RhbCgpO1xuICAgICAgdGhhdC5mb3JtTm9kZS5nZXQoJ25hbWUnKS5zZXRWYWx1ZShub2RlLmRhdGEoJ2xhYmVsJykpO1xuICAgICAgdGhhdC5jb2xvciA9IG5vZGUuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICAgIHRoYXQuZm9ybU5vZGUuZ2V0KCdjb2xvcicpLnNldFZhbHVlKG5vZGUuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InKSk7XG4gICAgfVxuICB9XG4gIG9wZW5Nb2RhbEFkZE5vZGUobm9kZSwgdGhhdCkge1xuICAgIGNvbnNvbGUubG9nKCdvbiBhdHRlaW5kIGxhIGZvbmN0aW9uJyk7XG4gICAgdGhhdC5zdGF0dXNNb2RhbCA9IGZhbHNlO1xuXG4gICAgdGhhdC5mb3JtTm9kZS5nZXQoJ2lkJykuc2V0VmFsdWUobm9kZS5kYXRhKCdpZCcpKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMuY29sb3JTZXJ2aWNlLmNoZWNrZWRDb2xvcih0aGF0LmFycmF5Q29sb3JVc2VkKTtcblxuICAgIGlmIChub2RlLmRhdGEoJ2lkJykgIT09ICduJykge1xuICAgICAgY29sb3IgPSBub2RlLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgfVxuICAgIHRoYXQuY29sb3IgPSBjb2xvcjtcbiAgICB0aGF0LmZvcm1Ob2RlLmdldCgnY29sb3InKS5zZXRWYWx1ZShjb2xvcik7XG5cbiAgICB0aGF0Lm9wZW5Nb2RhbCgpO1xuICB9XG5cblxuICAvLyBQQVJUSUUgQ09VTEVVUlxuICB1cGRhdGVDb2xvckJyYW5jaE5vZGUobm9kZSwgY29sb3IsIHRoYXQpIHtcbiAgICBjb25zdCBub2RlQ29ubmVjdGVkID0gdGhpcy5nZXRCcmFuY2hDb25uZWN0ZWQobm9kZSwgW10sIFtdLCB0aGF0KTtcbiAgICBmb3IgKGxldCBpZCBpbiBub2RlQ29ubmVjdGVkKSB7XG4gICAgICBpZCA9IG5vZGVDb25uZWN0ZWRbaWRdO1xuICAgICAgdGhpcy5nZXROb2RlQnlJZChpZCwgdGhhdCkuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XG4gICAgfVxuICB9XG4gIC8vIEZJTiBQQVJUSUUgQ09VTEVVUlxuXG59XG4iXX0=