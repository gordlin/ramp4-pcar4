import { b, j, x } from './utils-CJ8A9ROi.js';
import { f, d as d$1, p as p$1, C, k, $, E, P, U } from './utils-DmOGOWsF.js';
import './main-BtYHawlJ.js';
import './preload-helper-dJJaZANz.js';
import './utils-BvNBIkcn.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function d(a){const{attribute:e,features:r}=a,{normalizationType:s,normalizationField:m,minValue:f$1,maxValue:u,fieldType:d}=e,p=await b({field:e.field,valueExpression:e.valueExpression,normalizationType:s,normalizationField:m,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},r),v=f({normalizationType:s,normalizationField:m,minValue:f$1,maxValue:u}),c={value:.5,fieldType:d},z="esriFieldTypeString"===d?d$1({values:p,supportsNullCount:v,percentileParams:c}):p$1({values:p,minValue:f$1,maxValue:u,useSampleStdDev:!s,supportsNullCount:v,percentileParams:c});return C(z,"esriFieldTypeDate"===d)}async function p(a){const{attribute:e,features:n}=a,o=await b({field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},n,!1),l=k(o);return $(l,e.domains,e.returnAllCodedValues,e.fieldDelimiter)}async function v(a){const{attribute:e,features:n}=a,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:r,classificationMethod:s}=e,u=await b({field:o,valueExpression:e.valueExpression,normalizationType:l,normalizationField:t,normalizationTotal:r,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},n),d=E(u,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:r,classificationMethod:s,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return P(d,s)}async function c(a){const{attribute:e,features:n}=a,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:r,classificationMethod:s}=e,m=await b({field:o,valueExpression:e.valueExpression,normalizationType:l,normalizationField:t,normalizationTotal:r,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},n);return U(m,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:r,classificationMethod:s,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function z(i){const{attribute:n,features:o}=i,{field:l,radius:t,transform:r,spatialReference:s}=n,m=n.size??[0,0],f=j(o??[],r,s,m);return x(f,t??void 0,l,m[0],m[1])}

export { v as classBreaks, z as heatmapStatistics, c as histogram, d as summaryStatistics, p as uniqueValues };
