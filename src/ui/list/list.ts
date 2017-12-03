import { Composite, ImageView, Tab, TabFolder, TextView, CollectionView } from 'tabris';

let people = [
  ['Holger', 'Staudacher', 'holger.jpg'],
  ['Ian', 'Bull', 'ian.jpg'],
  ['Jochen', 'Krause', 'jochen.jpg'],
  ['Jordi', 'Böhme López', 'jordi.jpg'],
  ['Markus', 'Knauer', 'markus.jpg'],
  ['Moritz', 'Post', 'moritz.jpg'],
  ['Ralf', 'Sternberg', 'ralf.jpg'],
  ['Tim', 'Buschtöns', 'tim.jpg']
].map(([firstName, lastName, image]) => ({firstName, lastName}));

let styles: Object = {
  cellHeight: 100,
  left: 0,
  top: 50,
  right: 0,
  bottom: 0,
  itemCount: people.length,
}

class List extends CollectionView {

    listData: any

    constructor(props:any) {
        super(Object.assign({},styles));
        this.listData = props;
        console.log(this.listData);
    }

    cellType = () => {
      return 'test';
    }

    createCell = (type:any) => {
      console.log('createCell', type);
      let cell = new Composite();
      new TextView({
        left: 30, top: '16', right: 30,
        alignment: 'center'
      }).appendTo(cell);
      return cell;
    }

    updateCell = (cell, index) => {
      console.log('updateCell');
      let person = people[index];
      cell.apply({
        TextView: {text: person.firstName}
      });
    }

}

class summaryCell extends Composite {

}

class detailCell extends Composite {

}

export default List;