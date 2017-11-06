import { Picker, TextView, Composite } from 'tabris';

import * as Tools from '../tools/tools';

const flowData = {
    '2017年10月':{
        '12':[
            {   // 分类
                category:'吃',
                // 备注
                ext:'火锅',
                // 金额
                cost:'100'
            },{
                category:'玩',
                ext:'火锅',
                cost:'30'
            },{
                category:'电影',
                ext:'火锅',
                cost:'100'
            },{
                category:'吃',
                ext:'火锅',
                cost:'100'
            } 
        ]
    },
    '2017年9月':{
        '10':[
            [
                {   // 分类
                    category:'吃',
                    // 备注
                    ext:'火锅',
                    // 金额
                    cost:'100'
                },{
                    category:'玩',
                    ext:'火锅',
                    cost:'30'
                },{
                    category:'电影',
                    ext:'火锅',
                    cost:'100'
                },{
                    category:'吃',
                    ext:'火锅',
                    cost:'100'
                }      
            ]
        ]
    }
}


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
            totalCost: String(Tools.getMonthCost(this.listData[item]))
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