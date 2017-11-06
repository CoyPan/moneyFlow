import { TabFolder, Composite, Tab,TextView } from 'tabris';


interface FootItem {
    title: string;
    image: any;
    tabPage: any | (any)[];
}

interface FootData {
    dataOption: Array<FootItem>,
    uiOption: any
}

class Footer extends TabFolder {

    constructor(footData: FootData) {
        super(footData.uiOption);
        footData.dataOption.forEach((i) => {
            this.createTab(i);
        })
    }

    private createTab(footItem: FootItem) {

        let tab = new Tab({
            title: footItem.title,
            image: footItem.image
        }).appendTo(this);

        let tabPage = footItem.tabPage;
        if (Array.isArray(tabPage)) {
            tabPage.forEach(item => {
                item.appendTo(tab);
            });
        } else {
            tabPage.appendTo(tab);
        }
        
    }
}

export default Footer;