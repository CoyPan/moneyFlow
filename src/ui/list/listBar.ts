import { Picker, TextView, Composite } from 'tabris';

import * as tools from '../tools/tools';

class ListBar extends Composite {

    monthList: any[]
    listData: any
    monthCostList: any[]
    picker: Picker
    text: TextView
    cost: TextView

    constructor(listData: any) {
        super();
        
        this.listData = listData;
        this.monthList = Object.keys(listData).reverse();
        this.monthCostList = this.monthList.map((item, idx) => ({
            id: item,
            month: item,
            totalCost: String(tools.getMonthCost(this.listData[item]))
        }));
        
        this.createUI();
        this.bindEvent();
    }

    private createUI() {

        this.picker = new Picker({
            left: 20,
            top: 20,
            right: 130,
            itemCount: this.monthCostList.length,
            itemText: (index: number) => this.monthCostList[index].month,
            selectionIndex: 0
        });

        this.text = new TextView({
            left: 180, 
            top: 32, 
            right: 0,
            text: '支出(元):',
            alignment: 'center'
        });

        this.cost = new TextView({
            left: 300,
            right: 0,
            top: 24,
            textColor: 'rgba(255,0,0,1)',
            font: 'bold 24px',
            markupEnabled: true,
            text: this.monthCostList[0].totalCost
        });

        this.append(this.picker,this.text,this.cost);

    }

    private bindEvent() {

        if (!this.picker || !this.cost) {
            return;
        };
        this.picker.on('select', e => {
            this.cost.text = this.monthCostList[e.index].totalCost
        });

    }

}

export default ListBar;