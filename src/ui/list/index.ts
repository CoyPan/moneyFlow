/**
 * @file 处理 listBar 和 list 之间的交互;
 */
import { Composite, CollectionView } from 'tabris';
import List from './list';
import ListBar from './listBar';
import { flowData } from '../../data/data';

class flowList {

    listBar: Composite;
    list: CollectionView;

    constructor() {
        this.listBar = new ListBar(flowData);
        this.list = new List(flowData);
        this.bindEvent();
        this.exportUI();
    }

    bindEvent() {

    }

    exportUI() {
        return [this.listBar, this.list];
    }
}

export default flowList;