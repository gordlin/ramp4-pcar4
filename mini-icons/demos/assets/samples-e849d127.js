import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper-f8bb4967.js';

var SAMPLE_KEY = 'sample';
            var currentUrl = new URL(window.location.href);

            document
                .getElementById('selectConfig')
                .addEventListener('change', onConfigSelect);
            initialLoad();

            async function loadScript(scriptName) {
                // vite dynamic import. requires assigning to a variable to be recognized.
                await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"./starter-scripts/alternate.js": () => __vitePreload(() => import('./alternate-4c254994.js'),true?[]:void 0,import.meta.url),"./starter-scripts/basemap-fail.js": () => __vitePreload(() => import('./basemap-fail-a72e5441.js'),true?["./basemap-fail-a72e5441.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/basemap-only.js": () => __vitePreload(() => import('./basemap-only-52c91fda.js'),true?["./basemap-only-52c91fda.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/basemaps.js": () => __vitePreload(() => import('./basemaps-1fea605e.js'),true?["./basemaps-1fea605e.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/cam.js": () => __vitePreload(() => import('./cam-78f33bec.js'),true?["./cam-78f33bec.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/cccs.js": () => __vitePreload(() => import('./cccs-ffa5adaa.js'),true?["./cccs-ffa5adaa.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/cesi.js": () => __vitePreload(() => import('./cesi-ec137fa7.js'),true?["./cesi-ec137fa7.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/cumulative-effects.js": () => __vitePreload(() => import('./cumulative-effects-14120184.js'),true?["./cumulative-effects-14120184.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/custom-appbar-button.js": () => __vitePreload(() => import('./custom-appbar-button-ce46109b.js'),true?["./custom-appbar-button-ce46109b.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/custom-arrow.js": () => __vitePreload(() => import('./custom-arrow-85e4b46e.js'),true?["./custom-arrow-85e4b46e.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/custom-grid-buttons.js": () => __vitePreload(() => import('./custom-grid-buttons-57ddd1e0.js'),true?["./custom-grid-buttons-57ddd1e0.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/custom-overviewmap.js": () => __vitePreload(() => import('./custom-overviewmap-e017db63.js'),true?["./custom-overviewmap-e017db63.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/custom-renderer.js": () => __vitePreload(() => import('./custom-renderer-04ca3217.js'),true?["./custom-renderer-04ca3217.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/custom-store.js": () => __vitePreload(() => import('./custom-store-600a3fce.js'),true?["./custom-store-600a3fce.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css","./custom-store-6f829547.css"]:void 0,import.meta.url),"./starter-scripts/custom-symbology.js": () => __vitePreload(() => import('./custom-symbology-0a4cf2b9.js'),true?["./custom-symbology-0a4cf2b9.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/delayed-start.js": () => __vitePreload(() => import('./delayed-start-d5a24135.js'),true?["./delayed-start-d5a24135.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/disabled-options.js": () => __vitePreload(() => import('./disabled-options-57411820.js'),true?["./disabled-options-57411820.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/error-layers.js": () => __vitePreload(() => import('./error-layers-b93fd3f5.js'),true?["./error-layers-b93fd3f5.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/exclusive-fields.js": () => __vitePreload(() => import('./exclusive-fields-5ba2f86d.js'),true?["./exclusive-fields-5ba2f86d.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/export-custom-renderer.js": () => __vitePreload(() => import('./export-custom-renderer-9f356675.js'),true?["./export-custom-renderer-9f356675.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/fog-hilight.js": () => __vitePreload(() => import('./fog-hilight-458ee97b.js'),true?["./fog-hilight-458ee97b.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/form.js": () => __vitePreload(() => import('./form-332db77c.js'),true?["./form-332db77c.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/geosearch-filtered.js": () => __vitePreload(() => import('./geosearch-filtered-2f555c73.js'),true?["./geosearch-filtered-2f555c73.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/geosearch.js": () => __vitePreload(() => import('./geosearch-0b357ea7.js'),true?["./geosearch-0b357ea7.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/grid-config.js": () => __vitePreload(() => import('./grid-config-55594963.js'),true?["./grid-config-55594963.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/grid-custom-template.js": () => __vitePreload(() => import('./grid-custom-template-3cdeb3c7.js'),true?["./grid-custom-template-3cdeb3c7.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/grid.js": () => __vitePreload(() => import('./grid-225ca6fb.js'),true?["./grid-225ca6fb.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/help.js": () => __vitePreload(() => import('./help-0f78714c.js'),true?["./help-0f78714c.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/info-section.js": () => __vitePreload(() => import('./info-section-acf9f80c.js'),true?["./info-section-acf9f80c.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/lambert.js": () => __vitePreload(() => import('./lambert-7fc27a54.js'),true?["./lambert-7fc27a54.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/layer-metadata.js": () => __vitePreload(() => import('./layer-metadata-89283f91.js'),true?["./layer-metadata-89283f91.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/legend.js": () => __vitePreload(() => import('./legend-7ef3e9fa.js'),true?["./legend-7ef3e9fa.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/main.js": () => __vitePreload(() => import('./main-1ad6a61b.js'),true?["./main-1ad6a61b.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/map-image-layer.js": () => __vitePreload(() => import('./map-image-layer-313812ca.js'),true?["./map-image-layer-313812ca.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/mapnav.js": () => __vitePreload(() => import('./mapnav-ca57db95.js'),true?["./mapnav-ca57db95.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/merge-grid.js": () => __vitePreload(() => import('./merge-grid-fdfe1b4c.js'),true?["./merge-grid-fdfe1b4c.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/multi-instances.js": () => __vitePreload(() => import('./multi-instances-dd45a3a4.js'),true?["./multi-instances-dd45a3a4.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/multi-ramp.js": () => __vitePreload(() => import('./multi-ramp-791c812f.js'),true?["./multi-ramp-791c812f.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/no-layers.js": () => __vitePreload(() => import('./no-layers-25474ba1.js'),true?["./no-layers-25474ba1.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/offscale-layer.js": () => __vitePreload(() => import('./offscale-layer-2ede3452.js'),true?["./offscale-layer-2ede3452.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/old-main.js": () => __vitePreload(() => import('./old-main-29c08d3b.js'),true?["./old-main-29c08d3b.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/panel-party.js": () => __vitePreload(() => import('./panel-party-46937472.js'),true?["./panel-party-46937472.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/perm-filter.js": () => __vitePreload(() => import('./perm-filter-437e89ec.js'),true?["./perm-filter-437e89ec.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/r2-config-upgraded.js": () => __vitePreload(() => import('./r2-config-upgraded-c9ba00df.js'),true?["./r2-config-upgraded-c9ba00df.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/ramp-basic.js": () => __vitePreload(() => import('./ramp-basic-055cc73e.js'),true?["./ramp-basic-055cc73e.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/section-item.js": () => __vitePreload(() => import('./section-item-2c1e5bef.js'),true?["./section-item-2c1e5bef.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/simple-data.js": () => __vitePreload(() => import('./simple-data-8f980bff.js'),true?["./simple-data-8f980bff.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/simple-feature.js": () => __vitePreload(() => import('./simple-feature-e634da1a.js'),true?["./simple-feature-e634da1a.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/simple-file.js": () => __vitePreload(() => import('./simple-file-9435334f.js'),true?["./simple-file-9435334f.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/simple-mil.js": () => __vitePreload(() => import('./simple-mil-86b4b10a.js'),true?["./simple-mil-86b4b10a.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/teleport-details.js": () => __vitePreload(() => import('./teleport-details-457ca799.js'),true?["./teleport-details-457ca799.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/teleport-wet.js": () => __vitePreload(() => import('./teleport-wet-f20d76c8.js'),true?["./teleport-wet-f20d76c8.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/teleport.js": () => __vitePreload(() => import('./teleport-b58c9301.js'),true?["./teleport-b58c9301.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/tree-grow.js": () => __vitePreload(() => import('./tree-grow-5c47e7d7.js'),true?["./tree-grow-5c47e7d7.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/wet.js": () => __vitePreload(() => import('./wet-d5fbe44a.js'),true?["./wet-d5fbe44a.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url),"./starter-scripts/wms-layer.js": () => __vitePreload(() => import('./wms-layer-5958bc3e.js'),true?["./wms-layer-5958bc3e.js","./main-13aeab07.js","./preload-helper-a4975f27.js","./main-7434a0ee.css"]:void 0,import.meta.url)})), `./starter-scripts/${scriptName}.js`);
            }

            function onConfigSelect(event) {
                // refresh page with new selection in URL
                currentUrl.searchParams.set(
                    SAMPLE_KEY,
                    document.getElementById('selectConfig').selectedIndex + 1
                );
                window.location.href = currentUrl;
            }

            function initialLoad() {
                var params = new URLSearchParams(currentUrl.search);
                var sampleIndex = params.get(SAMPLE_KEY) - 1;
                var selectElem = document.getElementById('selectConfig');
                if (
                    params.has(SAMPLE_KEY) &&
                    sampleIndex >= 1 &&
                    selectElem.item(sampleIndex)
                ) {
                    selectElem.options[sampleIndex].selected = 'selected';
                    loadScript(selectElem.options[sampleIndex].value);
                } else {
                    loadScript(selectElem.options[0].value);
                }
            }
