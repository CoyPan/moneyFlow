import {ui, Button, TextView} from 'tabris';
import Footer from './ui/footer/footer';

import * as data from './data/data';

let foot = new Footer(data.footerOption).appendTo(ui.contentView);

