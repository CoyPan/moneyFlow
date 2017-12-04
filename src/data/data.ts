import {ui, Button, TextView} from 'tabris';
import flowList from '../ui/list/index';


const flowData = {};
flowData['2017年08月'] = {
    '9':[
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
};

flowData['2017年09月'] = {
    '10': [
        {   // 分类
            category: '吃',
            // 备注
            ext: '火锅',
            // 金额
            cost: '1000'
        }, {
            category: '玩',
            ext: '火锅',
            cost: '30'
        }, {
            category: '电影',
            ext: '火锅',
            cost: '100'
        }, {
            category: '吃',
            ext: '火锅',
            cost: '100'
        }
    ],
    '11':
    [
        {   // 分类
            category: '吃',
            // 备注
            ext: '火锅',
            // 金额
            cost: '1000'
        }, {
            category: '玩',
            ext: '火锅',
            cost: '30'
        }, {
            category: '电影',
            ext: '火锅',
            cost: '100'
        }, {
            category: '吃',
            ext: '火锅',
            cost: '100'
        }
    ]
}


let footerOption = {
    uiOption: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        paging: false
    },
    dataOption: [
        {
            title: '明细',
            image: {
                src: '/images/list.png',
                scale: 5
            },
            tabPage: new flowList().exportUI()
        },
        {
            title: '',
            image: {
                src: '/images/add.png',
                scale: 3
            },
            tabPage: new TextView({
                centerX: 0, centerY: 0,
                text: 'Content of 222 '
            })
        },
        {
            title: '历史',
            image: {
                src: '/images/history.png',
                scale: 5
            },
            tabPage: new TextView({
                centerX: 0, centerY: 0,
                text: 'Content of 333 '
            })
        }
    ]
};




export {
    flowData,
    footerOption
}