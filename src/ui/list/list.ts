import { Composite, ImageView, Tab, TabFolder, TextView, CollectionView } from 'tabris';
import * as tools from '../tools/tools';


interface summaryData {
  type: string;
  date: string;
  cost: string;
}

interface detailData {
  type: string;
  category: string;
  ext: string;
  cost: string;
}

// 基本的样式
const styles: Object = {
  left: 0,
  top: 50,
  right: 0,
  bottom: 0
}


class List extends CollectionView {

  listData: any;
  curMonthData: Object;
  month: string;
  listDataForUi: any[];

  constructor(props: any) {
    super(Object.assign({ id: 'flowList' }, styles));
    this.listData = props;
    this.month = '2017年09月';
    this.curMonthData = this.listData[this.month];
    this.listDataForUi = this.dataAdapter();
    this.itemCount = this.listDataForUi.length;
  }

  // 格式化数据
  dataAdapter(): any[] {
    let output: any[] = [];
    Object.keys(this.curMonthData).forEach((day: string) => {
      const dayCostList = this.curMonthData[day];
      const dayCostTotal = tools.getDayCost(dayCostList);
      output.push({
        type: 'summary',
        date: this.month + day + '日',
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

  cellType = (index: number):string => {
    return this.listDataForUi[index].type;
  }

  createCell = (type: string) => {
      return new Cell(type);
  }

  updateCell = (cell, index) => {
    const data = this.listDataForUi[index];
    const text = data.type === 'summary' ? Cell.getSummaryText(data) : Cell.getDetailText(data)
    cell.apply({
      '.cell': { text: text }
    });
  }
}


class Cell extends Composite {

  constructor(type: string) {
    super();
    this.createUI(type);
  }

  static getSummaryText(summaryData: summaryData) {
    return summaryData.date + '  总计消费:' + summaryData.cost + '元';
  }

  static getDetailText(detailData: detailData) {
    return '【' + detailData.category + '】' + detailData.ext + ' ' + detailData.cost + '元';
  }

  createUI(type: string) {
    if (type === 'summary') {
      this.append(new TextView({
        class: 'cell',
        left: 30, top: '16', right: 30, height: 40,
        alignment: 'right', background: 'gray'
      }));
    }
    else if (type === 'detail') {
      this.append(new TextView({
        class: 'cell',
        left: 30, top: '16', right: 30,
        alignment: 'right'
      }));
    }
  }
}

export default List;