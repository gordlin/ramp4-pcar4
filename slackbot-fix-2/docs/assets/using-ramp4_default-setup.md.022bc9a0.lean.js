import{_ as a,o as s,c as t,S as n}from"./chunks/framework.27b492ea.js";const m=JSON.parse('{"title":"Default Setup","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/default-setup.md","filePath":"using-ramp4/default-setup.md"}'),l={name:"using-ramp4/default-setup.md"};function o(r,e,p,d,c,i){return s(),t("div",null,e[0]||(e[0]=[n(`<h1 id="default-setup" tabindex="-1">Default Setup <a class="header-anchor" href="#default-setup" aria-label="Permalink to &quot;Default Setup&quot;">​</a></h1><p>The RAMP instance provides APIs to set up fixtures and events, allowing a high degree of customization. However, there is also a default setup that will provide stock fixtures and events. The default setup will result in a functional viewer that only requires a configuration file.</p><h2 id="default-fixtures" tabindex="-1">Default Fixtures <a class="header-anchor" href="#default-fixtures" aria-label="Permalink to &quot;Default Fixtures&quot;">​</a></h2><p>See <a href="./fixture-overview.html">Fixture Overview</a>.</p><h2 id="default-events" tabindex="-1">Default Events <a class="header-anchor" href="#default-events" aria-label="Permalink to &quot;Default Events&quot;">​</a></h2><p>All events are specific to a RAMP instance. An event on one instance says nothing about a different instance.</p><h3 id="core-events" tabindex="-1">Core Events <a class="header-anchor" href="#core-events" aria-label="Permalink to &quot;Core Events&quot;">​</a></h3><p>These events will always be present, regardless of what fixtures are active. Event names here include the <code>GlobalEvents</code> enum value first. Italics in the payload indicate a property of a general payload object.</p><p>TODO if we have API docs that expose the payload interfaces, link to those definitions. Otherwise we&#39;ll need to put the interface specs here</p><table><thead><tr><th>Event Name</th><th>Payload</th><th>Event Announces</th></tr></thead><tbody><tr><td>APPBAR_BUTTON_CLICK<br>&#39;appbar/click&#39;</td><td><em>id</em>: button component/panel id</td><td>A button in the appbar was clicked</td></tr><tr><td>COMPONENT<br>&#39;ramp/component&#39;</td><td><em>id</em>: component id</td><td>A vue component registered</td></tr><tr><td>CONFIG_CHANGE<br>&#39;config/change&#39;</td><td>RampConfig object</td><td>The config was changed</td></tr><tr><td>FILTER_CHANGE<br>&#39;filter/change&#39;</td><td>FilterEventParam object</td><td>A filter has changed</td></tr><tr><td>FIXTURE_ADDED<br>&#39;fixture/added&#39;</td><td>FixtureInstance object</td><td>A fixture has been added</td></tr><tr><td>FIXTURE_REMOVED<br>&#39;fixture/removed&#39;</td><td>FixtureInstance object</td><td>A fixture has been removed</td></tr><tr><td>LANG_CHANGE<br>&#39;lang/change&#39;</td><td><em>oldLang</em>: old language, <em>newLang</em>: new language</td><td>The language was changed</td></tr><tr><td>LAYER_DRAWSTATECHANGE<br>&#39;layer/drawstatechange&#39;</td><td><em>state</em>: new value, <em>layer</em>: LayerInstance object</td><td>The layer draw state changed</td></tr><tr><td>LAYER_INITIATIONSTATECHANGE<br>&#39;layer/initiationStatechange&#39;</td><td><em>state</em>: new value, <em>layer</em>: LayerInstance object</td><td>The layer layer state changed</td></tr><tr><td>LAYER_LAYERSTATECHANGE<br>&#39;layer/layerstatechange&#39;</td><td><em>state</em>: new value, <em>layer</em>: LayerInstance object, <em>userCancel</em>: boolean</td><td>The layer load state changed</td></tr><tr><td>LAYER_OPACITYCHANGE<br>&#39;layer/opacitychange&#39;</td><td><em>opacity</em>: new value, <em>layer</em>: LayerInstance object</td><td>The layer opacity changed</td></tr><tr><td>LAYER_REGISTERED<br>&#39;layer/registered&#39;</td><td>LayerInstance object</td><td>The layer was registered with the instance</td></tr><tr><td>LAYER_RELOAD_END<br>&#39;layer/reloadend&#39;</td><td>LayerInstance object</td><td>The layer finished reloading</td></tr><tr><td>LAYER_RELOAD_START<br>&#39;layer/reloadstart&#39;</td><td>LayerInstance object</td><td>The layer started reloading</td></tr><tr><td>LAYER_REMOVE<br>&#39;layer/remove&#39;</td><td>LayerInstance object</td><td>The layer was removed from the map</td></tr><tr><td>LAYER_VISIBILITYCHANGE<br>&#39;layer/visibilitychange&#39;</td><td><em>visibility</em>: new value, <em>layer</em>: LayerInstance object</td><td>The layer visibility changed</td></tr><tr><td>MAP_BASEMAPCHANGE<br>&#39;map/basemapchanged&#39;</td><td><em>basemapId</em>: string, <em>schemaChanged</em>: boolean</td><td>The basemap was changed</td></tr><tr><td>MAP_BLUR<br>&#39;map/blur&#39;</td><td>KeyboardEvent object</td><td>The map lost focus</td></tr><tr><td>MAP_CLICK<br>&#39;map/click&#39;</td><td>MapClick object</td><td>The map was clicked</td></tr><tr><td>MAP_CREATED<br>&#39;map/created&#39;</td><td>none</td><td>The map was created</td></tr><tr><td>MAP_DESTROYED<br>&#39;map/destroyed&#39;</td><td>none</td><td>The map was destroyed</td></tr><tr><td>MAP_DOUBLECLICK<br>&#39;map/doubleclick&#39;</td><td>MapClick object</td><td>The map was double clicked</td></tr><tr><td>MAP_EXTENTCHANGE<br>&#39;map/extentchanged&#39;</td><td>RAMP Extent object</td><td>The map extent changed</td></tr><tr><td>MAP_FOCUS<br>&#39;map/focus&#39;</td><td>KeyboardEvent object</td><td>The map gained focus</td></tr><tr><td>MAP_GRAPHICHIT<br>&#39;map/graphichit&#39;</td><td><em>layer</em>: LayerInstance object, <em>graphicHit</em>: object, <em>attributes</em>: object, <em>icon</em>: string, <em>screenPoint</em>: object</td><td>A graphic was found where the mouse/crosshair is</td></tr><tr><td>MAP_IDENTIFY<br>&#39;map/identify&#39;</td><td>MapIdentifyResult object</td><td>A map identify was requested</td></tr><tr><td>MAP_KEYDOWN<br>&#39;map/keydown&#39;</td><td>KeyboardEvent object</td><td>A key was pressed</td></tr><tr><td>MAP_KEYUP<br>&#39;map/keyup&#39;</td><td>KeyboardEvent object</td><td>A key was released</td></tr><tr><td>MAP_MOUSEDOWN<br>&#39;map/mousedown&#39;</td><td>PointerEvent object</td><td>A mouse button was depressed</td></tr><tr><td>MAP_MOUSELEAVE<br>&#39;map/mouseleave&#39;</td><td>PointerEvent object</td><td>The mouse left the map</td></tr><tr><td>MAP_MOUSEMOVE<br>&#39;map/mousemove&#39;</td><td>MapMove object</td><td>The mouse moved over the map</td></tr><tr><td>MAP_MOUSEMOVE_END<br>&#39;map/mousemoveend&#39;</td><td>MapMove object</td><td>The mouse started moving over the map</td></tr><tr><td>MAP_MOUSEMOVE_START<br>&#39;map/mousemovestart&#39;</td><td>MapMove object</td><td>The mouse stopped moving over the map</td></tr><tr><td>MAP_REFRESH_END<br>&#39;map/refreshend&#39;</td><td>none</td><td>The map view started refreshing</td></tr><tr><td>MAP_REFRESH_START<br>&#39;map/refreshstart&#39;</td><td>none</td><td>The map view finished refreshing</td></tr><tr><td>MAP_REORDER<br>&#39;map/reorder&#39;</td><td><em>newIndex</em>: z-index, <em>layer</em>: LayerInstance object</td><td>A layer was reordered</td></tr><tr><td>MAP_RESIZED<br>&#39;map/resized&#39;</td><td><em>height</em>: new height, <em>width</em>: new width</td><td>The map view changed size</td></tr><tr><td>MAP_SCALECHANGE<br>&#39;map/scalechanged&#39;</td><td>scale (denominator) number</td><td>The map scale changed</td></tr><tr><td>MAP_START<br>&#39;map/start&#39;</td><td>none</td><td>The map startup was requested</td></tr><tr><td>PANEL_CLOSED<br>&#39;panel/closed&#39;</td><td>PanelInstance object</td><td>A panel was closed</td></tr><tr><td>PANEL_MINIMIZED<br>&#39;panel/closed&#39;</td><td>PanelInstance object</td><td>A panel was minimized</td></tr><tr><td>PANEL_OPENED<br>&#39;panel/opened&#39;</td><td>PanelInstance object</td><td>A panel was opened</td></tr><tr><td>RAMP_MOBILEVIEW_CHANGE<br>&#39;ramp/mobile&#39;</td><td>mobileMode boolean</td><td>The screen changes to/from mobile resolution</td></tr><tr><td>USER_LAYER_ADDED<br>&#39;user/layeradded&#39;</td><td>LayerInstance object</td><td>A layer was added during the session</td></tr></tbody></table><h3 id="core-fixture-events" tabindex="-1">Core Fixture Events <a class="header-anchor" href="#core-fixture-events" aria-label="Permalink to &quot;Core Fixture Events&quot;">​</a></h3><p>These events will be present if the associated core fixtures are running</p><table><thead><tr><th>Event Name</th><th>Payload</th><th>Event Announces</th></tr></thead><tbody><tr><td>DETAILS_TOGGLE<br>&#39;details/toggle&#39;</td><td>{ data: any, uid: string, format: string }, boolean (optional)</td><td>A feature&#39;s details panel toggle was requested with optional force open/close</td></tr><tr><td>GRID_TOGGLE<br>&#39;grid/toggle&#39;</td><td><em>layer</em>: LayerInstance, <em>open</em>: boolean (optional)</td><td>Grid panel toggle was requested with optional force open/close</td></tr><tr><td>HELP_TOGGLE<br>&#39;help/toggle&#39;</td><td>boolean (optional)</td><td>Help panel toggle was requested with optional force open/close</td></tr><tr><td>METADATA_TOGGLE<br>&#39;metadata/toggle&#39;</td><td>{ type: string, layerName: string, url: string, <em>layer</em>: LayerInstance }, open: boolean (optional)</td><td>Metadata panel toggle was requested with optional force open/close</td></tr><tr><td>REORDER_TOGGLE<br>&#39;reorder/toggle&#39;</td><td>boolean (optional)</td><td>Layer reorder panel toggle was requested with optional force open/close</td></tr><tr><td>SETTINGS_TOGGLE<br>&#39;settings/toggle&#39;</td><td><em>layer</em>: LayerInstance, <em>open</em>: boolean (optional)</td><td>Settings panel toggle was requested for a layer with optional force open/close</td></tr><tr><td>WIZARD_TOGGLE<br>&#39;wizard/open&#39;</td><td>boolean (optional)</td><td>Wizard panel toggle was requested with optional force open/close</td></tr></tbody></table><h2 id="default-events-handlers" tabindex="-1">Default Events Handlers <a class="header-anchor" href="#default-events-handlers" aria-label="Permalink to &quot;Default Events Handlers&quot;">​</a></h2><p>Along with the default fixtures, there are default event handlers that are applied to make them react to each other and to the RAMP core. See the examples section below and the <a href="./../api-guides/events.html">Events API page</a> for details on how to work with event handlers.</p><h3 id="map-handlers" tabindex="-1">Map Handlers <a class="header-anchor" href="#map-handlers" aria-label="Permalink to &quot;Map Handlers&quot;">​</a></h3><ul><li><code>ramp_map_click_runs_identify</code> causes the identify process to start when the map is clicked</li><li><code>ramp_map_created_initializes_fixtures</code> calls the <code>initialized()</code> method for fixtures when the map is created</li><li><code>ramp_map_identify_opens_identify_results</code> causes the identify results panel to open, displaying the results</li><li><code>ramp_map_keydown_updates_key_handler</code> causes a key press to be processed on the map</li><li><code>ramp_map_keyup_updates_key_handler</code> causes a key release to be processed on the map</li><li><code>ramp_map_blur_updates_key_handler</code> causes keyboard navigation to stop when the map loses focus</li></ul><h3 id="map-component-handlers" tabindex="-1">Map Component Handlers <a class="header-anchor" href="#map-component-handlers" aria-label="Permalink to &quot;Map Component Handlers&quot;">​</a></h3><p>Updates the map attribution in the map-caption by retrieving it from the current basemap config</p><ul><li><code>ramp_config_change_updates_map_attribs</code> when a configuration file changes (e.g. new language)</li><li><code>ramp_map_basemap_updates_map_attribs</code> when the basemap changes</li><li><code>ramp_map_created_updates_map_attribs</code> when the map is created</li></ul><p>Updates the scalebar in the map-caption</p><ul><li><code>ramp_map_resize_updates_scalebar</code> when the map resizes</li><li><code>ramp_map_scale_updates_scalebar</code> when the map scale changes</li></ul><p>Updates the co-ordinates in the map-caption</p><ul><li><code>ramp_map_keydown_updates_coords</code> when panning using a keyboard</li><li><code>ramp_map_mouse_updates_coords</code> when moving the mouse</li></ul><p>Creates or updates the feature maptip</p><ul><li><code>ramp_map_extent_updates_maptip</code> check for graphics when map extent changes</li><li><code>ramp_map_graphichit_creates_maptip</code> create maptip content when a new feature is hit</li><li><code>ramp_map_mouse_updates_maptip</code> check for graphics when mouse moves</li><li><code>ramp_map_mouseleave_removes_maptip</code> remove the maptip when the mouse leaves the map</li></ul><p>Changes to the basemap causing tile layers to no longer be visible</p><ul><li><code>ramp_map_basemap_checks_proj</code> will notify the user if there is a projection mismatch</li></ul><h3 id="layer-handlers" tabindex="-1">Layer Handlers <a class="header-anchor" href="#layer-handlers" aria-label="Permalink to &quot;Layer Handlers&quot;">​</a></h3><p>Changes to layers causing changes to the legend</p><ul><li><code>ramp_layer_error_updates_legend</code> legend will reflect error state</li><li><code>ramp_layer_register_binds_legend</code> will connect a legend item to layer when it is registered (created)</li><li><code>ramp_layer_reload_end_binds_legend</code> will connect a legend item to layer when layer finishes a reload</li><li><code>ramp_layer_reload_start_updates_legend</code> legend will reflect loading state when layer reload starts</li><li><code>ramp_layer_remove_updates_legend</code> clears bound items from legend when layer is removed</li><li><code>ramp_layer_useradd_updates_legend</code> adds a legend entry when layers are added via user controls</li></ul><p>Changes to layers causing changes in other fixtures</p><ul><li><code>ramp_layer_remove_updates_details</code> clear details info for layer that has been removed</li><li><code>ramp_layer_remove_checks_grid</code> close and remove grid if all its layers have been removed</li></ul><h3 id="panel-handlers" tabindex="-1">Panel Handlers <a class="header-anchor" href="#panel-handlers" aria-label="Permalink to &quot;Panel Handlers&quot;">​</a></h3><p>Reacting to panels opening and closing</p><ul><li><code>ramp_panel_close_updates_appbar</code> causes the appbar to remove a temporary button when the respective panel is closed</li><li><code>ramp_panel_open_updates_appbar</code> causes the appbar to add a temporary button when a panel without a fixed button is opened</li></ul><p>Handling panel toggle event requests (open/close type actions)</p><ul><li><code>ramp_toggle_details</code> feature details panel</li><li><code>ramp_toggle_grid</code> grid panel</li><li><code>ramp_toggle_help</code> help panel</li><li><code>ramp_toggle_metadata</code> metadata panel</li><li><code>ramp_toggle_reorder</code> layer reorder panel</li><li><code>ramp_toggle_settings</code> layer settings panel</li><li><code>ramp_toggle_wizard</code> import wizard panel</li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="default-setup-1" tabindex="-1">Default Setup <a class="header-anchor" href="#default-setup-1" aria-label="Permalink to &quot;Default Setup&quot;">​</a></h3><p>Creating a default instance of RAMP. No special action is required.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Create a default instance the long-winded way.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultEvents</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addDefaultFixtures</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addDefaultEvents</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="replacing-default-fixtures" tabindex="-1">Replacing Default Fixtures <a class="header-anchor" href="#replacing-default-fixtures" aria-label="Permalink to &quot;Replacing Default Fixtures&quot;">​</a></h3><p>Replacing a default fixture with a custom fixture of the same name and interface. Note that we can just call <code>addDefaultFixtures()</code> without any special parameters; when it attempts to load the default <code>help</code> fixture, it will see the already loaded fixture and use that.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CustomHelpFixtureClass)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addDefaultFixtures</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Note that if the default fixture exposes any methods on its API, a replacement fixture must also implement the method signature. Otherwise runtime errors will likely occur, or some adjustments on the default event handlers will be required to remove any calls to the methods (in which case it is likely easier to just give the fixture a unique name and remove the default fixture).</p><h3 id="subsets-of-the-default-setup" tabindex="-1">Subsets of the Default Setup <a class="header-anchor" href="#subsets-of-the-default-setup" aria-label="Permalink to &quot;Subsets of the Default Setup&quot;">​</a></h3><p>Adding a subset of default fixtures. This map does very little! Note we could also suppress and then selectively add the necessary default event handlers. This would be slightly more efficient (we would not have handlers reacting and then realizing there is nothing to do), but also requires one to figure out what event handlers are still needed.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CustomHelpFixtureClass)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addDefaultFixtures</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">appbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mapnav</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="specify-starting-fixtures" tabindex="-1">Specify Starting Fixtures <a class="header-anchor" href="#specify-starting-fixtures" aria-label="Permalink to &quot;Specify Starting Fixtures&quot;">​</a></h3><p>Provide a set of fixtures in the config to be loaded by the RAMP instance. The value of <code>loadDefaultFixtures</code> is ignored and the specified fixtures will be loaded.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> configs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">startingFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">appbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mapnav</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">configs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">en</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">fr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ignored</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,54)]))}const h=a(l,[["render",o]]);export{m as __pageData,h as default};
