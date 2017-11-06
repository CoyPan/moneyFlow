import { Composite, ImageView, Tab, TabFolder, TextView, CollectionView } from 'tabris';
import ListBar from './listBar';

class List extends CollectionView {

    listData: any

    constructor(props:any) {
        super(props);
        this.listData = props;
        this.createUI(this.listData);
    }

    private createUI(listData) {
        

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
          
         let testList = new CollectionView({
            left: 0, top: 0, right: 0, bottom: 0,
            itemCount: people.length,
            cellHeight: 72,
            background: '#f5f5f5',
            createCell: (type) => {
                console.log(type);
              let cell = new Composite();
              new TextView({
                left: 30, top: 10, right: 30
              }).appendTo(cell);
              return cell;
            },

            updateCell: (cell, index) => {
                console.log(index);
              let person = people[index];
              cell.apply({
                TextView: {text: person.firstName}
              });
            }
          });

    }

}

export default List;