import { F as s$1, G as c, s } from './main-b051658a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function i(i){if(s$1.apiKey&&c(i.portal.url))throw new s("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${i.portal.url} when using an api key`)}

export { i };
