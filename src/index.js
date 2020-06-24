

import 'mdn-polyfills/Node.prototype.append';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import style from './modules/styles';
import head from './modules/head';
import sladestwo from './modules/sladestwo';
import gallery from './modules/gallery';
import calccart from './modules/calc';
import headerslider from './modules/header-slider';
import elementClosest from 'element-closest';
import sendForm from './modules/sendForm';
elementClosest(window);
style();
head();
headerslider();
gallery();
sladestwo();
calccart();
sendForm();
