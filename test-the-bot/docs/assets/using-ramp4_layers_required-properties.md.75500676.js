import{_ as a,o as s,c as l,S as r}from"./chunks/framework.7bdf916f.js";const y=JSON.parse('{"title":"Required Layer Properties","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/layers/required-properties.md","filePath":"using-ramp4/layers/required-properties.md"}'),n={name:"using-ramp4/layers/required-properties.md"};function i(o,e,t,p,c,d){return s(),l("div",null,e[0]||(e[0]=[r(`<h1 id="required-layer-properties" tabindex="-1">Required Layer Properties <a class="header-anchor" href="#required-layer-properties" aria-label="Permalink to &quot;Required Layer Properties&quot;">​</a></h1><h2 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h2><p><em>string</em>, <strong>Required</strong></p><p>Serves as an identifier for the layer. Must be unique to the RAMP instance the layer is added to. Can be used to find the Layer API object via the RAMP API.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myLayer</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="layertype" tabindex="-1">layerType <a class="header-anchor" href="#layertype" aria-label="Permalink to &quot;layerType&quot;">​</a></h2><p><em>string</em>, <strong>Required</strong></p><p>Defines the type of layer data we are consuming. Will determine how the layer is instantiated in RAMP.</p><p>Valid values:</p><ul><li><code>esri-feature</code>: ESRI Feature Layer</li><li><code>esri-map-image</code>: ESRI Map Image Layer (formerly known as Dynamic Layer)</li><li><code>esri-tile</code>: ESRI Tile Layer</li><li><code>esri-imagery</code>: ESRI Image Service</li><li><code>esri-graphic</code>: ESRI Graphic Layer</li><li><code>ogc-wfs</code>: OGC WFS 3.0</li><li><code>ogc-wms</code>: OGC WMS</li><li><code>file-geojson</code>: GeoJSON</li><li><code>file-zip-geojson</code>: Zipped GeoJSON</li><li><code>file-csv</code>: CSV File</li><li><code>file-shape</code>: Shapefile (zipped)</li><li><code>file-fgb</code>: FlatGeobuf</li><li><code>file-zip-fgb</code>: Zipped FlatGeobuf</li><li><code>osm-tile</code>: OpenStreetMap Tile Layer</li><li><code>data-esri-table</code> ESRI Table Layer</li><li><code>data-csv</code> Non Spatial CSV File</li><li><code>data-json</code> <a href="/ramp4-pcar4/test-the-bot/docs/docs/api-guides/layers.html#data-layers">Compact JSON</a> File</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">layerType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esri-feature</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="url" tabindex="-1">url <a class="header-anchor" href="#url" aria-label="Permalink to &quot;url&quot;">​</a></h2><p><em>string</em>, <strong>Required</strong></p><p>The url where the layer definition and data should be loaded from.</p><ul><li>ESRI type layers will be an ArcGIS Server rest endpoint. Feature layers and Table layers must target the layer endpoint.</li><li>WMS layers will be the WMS server url.</li><li>WFS layers will be the server dataset url (i.e. something that returns GeoJSON).</li><li>File type layers will point to a web hosted file, or an empty string if the <code>rawData</code> property is provided. Relative paths are supported. Data layers in file formats also apply.</li><li>OSM layer is an empty string.</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://mydomain.ca/arcgis/rest/services/fancymap/mapserver</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,16)]))}const m=a(n,[["render",i]]);export{y as __pageData,m as default};
