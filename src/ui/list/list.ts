import { Composite, ImageView, Tab, TabFolder, TextView, CollectionView } from 'tabris';
import * as tools from '../tools/tools';

let people = [
  ['Holger', 'Staudacher', 'holger.jpg'],
  ['Ian', 'Bull', 'ian.jpg'],
  ['Jochen', 'Krause', 'jochen.jpg'],
  ['Jordi', 'Böhme López', 'jordi.jpg'],
  ['Markus', 'Knauer', 'markus.jpg'],
  ['Moritz', 'Post', 'moritz.jpg'],
  ['Ralf', 'Sternberg', 'ralf.jpg'],
  ['Tim', 'Buschtöns', 'tim.jpg']
].map(([firstName, lastName, image]) => ({ firstName, lastName }));

let styles: Object = {
  cellHeight: 100,
  left: 0,
  top: 50,
  right: 0,
  bottom: 0,
  itemCount: people.length,
}

let flowData= {};
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
  ]
}

class List extends CollectionView {

  listData: any;
  curMonthData: Object;
  month: string;
  listDataForUi: any[];

  constructor(props: any) {
    super(Object.assign({}, styles));
    this.listData = props;
    this.month = '2017年09月';
    this.curMonthData = this.listData[this.month];
    this.listDataForUi = this.dataAdapter();
    // console.log(this.listData['2017年09月']);
  }

  // 格式化数据
  dataAdapter() {
    let output: any[] = [];
    Object.keys(this.curMonthData).forEach((day: string) => {
      const dayCostList = this.curMonthData[day];
      const dayCostTotal = tools.getDayCost(dayCostList);
      output.push({
        type: 'summary',
        date: day,
        cost: dayCostTotal
      });
      const newDayCostList = dayCostList.map((dayCostDetail: Object) => {
        return Object.assign(dayCostDetail, {
          type: 'detail'
        });
      });
      output = output.concat(newDayCostList);
    });
    return output;
  }

  cellType = (index: number) => {
    return this.listDataForUi[index].type;
  }

  createCell = (type: string) => {
    let cell = new Composite();
    new TextView({
      left: 30, top: '16', right: 30,
      alignment: 'center'
    }).appendTo(cell);
    return cell;
  }

  updateCell = (cell, index) => {
    let person = people[index];
    cell.apply({
      TextView: { text: person.firstName }
    });
  }

}

class summaryCell extends Composite {

}

class detailCell extends Composite {

}

export default List;