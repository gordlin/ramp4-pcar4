import { b_ as f, cC as S } from './main-B9uF9icM.js';
import { a } from './queryTopFeatures-DdKnZoNw.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=f(s);return (await a(u,S.from(e),{...p})).data.count}

export { s as executeForTopCount };
