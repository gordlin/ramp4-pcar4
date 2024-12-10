import{_ as s,o as n,c as a,S as l}from"./chunks/framework.bf11d9c7.js";const b=JSON.parse('{"title":"Legend","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/legend.md","filePath":"using-ramp4/fixtures/legend.md"}'),o={name:"using-ramp4/fixtures/legend.md"};function t(i,e,p,r,c,d){return n(),a("div",null,e[0]||(e[0]=[l(`<h1 id="legend" tabindex="-1">Legend <a class="header-anchor" href="#legend" aria-label="Permalink to &quot;Legend&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The legend fixture contains a panel which displays information about the map contents. The legend panel allows for easy access to each layer&#39;s data table, settings, and metadata. The panel also allows you to refresh, add, and delete layers. Most features in the legend panel are customizable. Certain app configurations can mean features are removed or do not apply to specific scenarios.</p><p>The legend fixture is a default fixture, meaning it will be automatically loaded using a standard configuration.</p><h2 id="buttons" tabindex="-1">Buttons <a class="header-anchor" href="#buttons" aria-label="Permalink to &quot;Buttons&quot;">​</a></h2><p><strong>Add Layer</strong> Clicking this button opens the layer wizard, which allows you to add new layers to the map.</p><p><strong>Reorder Layers</strong> Clicking this button opens the layer re-order panel (if the fixture has been added to RAMP). This fixture allows you to modify the priority in which layers appear on the map.</p><p><strong>Toggle Visibility</strong> Clicking on this button opens a dropdown menu that allows you to toggle the visibility of all legend items on or off. If an item has it&#39;s visibility control disabled, its visibility will not be modified.</p><p><strong>Toggle Groups</strong> Clicking on this button opens a dropdown menu that allows you to expand or collapse all groups in the legend.</p><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><h4 id="legend-item" tabindex="-1">Legend Item <a class="header-anchor" href="#legend-item" aria-label="Permalink to &quot;Legend Item&quot;">​</a></h4><p>A legend item is a generic class that represents entries in the legend. A legend item is a recursive component that can contain and be contained within other legend items. The given options for a legend item are:</p><ul><li>Visibility (<code>visibilityButton</code>): <em>determines whether a visibility button is attached to the legend item, so that the item visibility can be controlled from the legend.</em></li><li>Expand (<code>expandButton</code>): <em>determines whether the legend item can be expanded and collapsed in the legend.</em></li></ul><p>Toggling the visibility of a legend item will toggle the visibility of all its child items. These controls can be disabled for a specific legend item through its object in the legend portion of the configuration file. There are two ways of doing this:</p><ol><li><p>Add the <code>disabledControls</code> property to the object as an array with the names for each control (in parentheses above). The following example demonstrates disabling the expand toggle for a legend item called <code>Visible Set</code>:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Visible Set&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    disabledControls: [&#39;expandButton&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [ ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>Add the <code>controls</code> property to the object as an array, and omit the names for each disabled control. The next code block provides the same configuration as the previous example:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Visible Set&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    controls: [&#39;visibilityButton&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [ ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol><p>If no control configuration for the legend item is provided, both controls are enabled by default.</p><h4 id="layer-item" tabindex="-1">Layer Item <a class="header-anchor" href="#layer-item" aria-label="Permalink to &quot;Layer Item&quot;">​</a></h4><p>A layer item is a legend item bound to a single layer (or sub-layer, in the case of Map Image Layers) on the map. Layer items allow you to interact with layers from the legend. If supported, clicking on a layer item will open the data table associated with the layer. Legend entries also contain a <code>More options</code> button, which contains more interactive options:</p><ul><li>Metadata (<code>metadata</code>): <em>if a metadata URL is provided and the metadata fixture has been added, opens a panel displaying the data.</em></li><li>Settings (<code>settings</code>): <em>opens a settings panel that allows you to control layer opacity, visibility, and more.</em></li><li>Datatable (<code>datatable</code>): <em>opens the data table for the associated layer. Same action as simply clicking on the layer item.</em></li><li>Legend (<code>symbology</code>): <em>expands or collapses the layer symbology stack.</em></li><li>Zoom to Layer Boundary (<code>boundaryZoom</code>): <em>sets the map zoom level to contain all layer features.</em></li><li>Remove (<code>remove</code>): <em>removes the layer from the legend and map.</em></li><li>Reload (<code>reload</code>): <em>reloads the layer.</em></li></ul><p>In addition to these controls, opening the settings panel provides extra options that specify how the layer is displayed on the map</p><ul><li>Show layer (<code>visibility</code>): <em>toggles the visibility of the layer on or off.</em></li><li>Opacity (<code>opacity</code>): <em>sets the opacity of the layer as a percentage.</em></li><li>Toggle identify (<code>identify</code>): <em>when toggled off, data from this layer will not appear in identify results (e.g. when clicking on the map).</em></li></ul><p>Like legend item controls, these controls can be disabled for a specific layer through its object in the legend portion of the configuration file. Again, there are two ways to do this:</p><ol><li><p>Add the <code>disabledLayerControls</code> property to the object as an array with the names for each control (in parenthesis above). The following example demonstrates disabling the boundary zoom and opacity controls for a legend item called <code>CleanAir</code>:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    layerId: &#39;CleanAir&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Clean Air&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    disabledLayerControls: [&#39;boundaryZoom&#39;, &#39;opacity&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>Add the <code>layerControls</code> property to the object as an array, and omit the names for each disabled control. The next example configures <code>CleanAir</code> with only the remove control enabled:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    layerId: &#39;CleanAir&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Clean Air in Set&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    layerControls: [&#39;remove&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol><p>Additionally, controls will be disabled if the layer item does not support them.</p><h4 id="section-item" tabindex="-1">Section Item <a class="header-anchor" href="#section-item" aria-label="Permalink to &quot;Section Item&quot;">​</a></h4><p>A section item is a legend item that is not bound to a layer. Section items can be used to group collections of legend items, as well as display information that can take the format of title, text, image, Markdown, or custom HTML template.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><blockquote><p>Note that in the following examples, the <code>layerId</code> represents the ID of the layer previously added to the map. <a href="#">See the documentation for Layers</a> to understand how to add a layer to the map through the configuration file (TODO).</p></blockquote><p>The legend, like most other fixtures, can be configured directly through the main configuration file under the <code>fixtures</code> object. A very simple configuration file below shows where the legend configuration object should be placed:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const config = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    layers: { ... },</span></span>
<span class="line"><span style="color:#A6ACCD;">    fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        legend: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            LEGEND CONFIGURATION HERE</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ... other fixture configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>The following properties exist on the legend configuration object:</p><ul><li><code>panelWidth: number</code>, if a custom legend width is required you can do this here. Otherwise if left blank the legend will use the the default fixture width.</li><li><code>multilineItems</code>, an object which determines whether legend items are allowed to wrap onto new lines if their text requires more space. Only applies to layer items. Contains two optional properties: <ul><li><code>enabled: boolean</code>, which determines whether the above setting is enabled (defaults to true; if false, text will truncate at one line).</li><li><code>maxLines: number</code>, which determines the max number of lines a legend item can take up. Beyond this number, text will truncate and show a tooltip on hover. Defaults to <code>3</code>. Only allows integers <code>1</code>-<code>6</code> as values. Only applies if the legend property <code>multilineItems.enabled</code> is true.</li></ul></li><li><code>root: Object</code>, a tree-structured object that represents the layout for the legend. Top-level items can be added to the legend as a child of this object as such:</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const config = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    layers: { ... },</span></span>
<span class="line"><span style="color:#A6ACCD;">    fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        legend: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ... put your legend items here ...</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ... other fixture configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="legend-component-objects" tabindex="-1">Legend Component Objects <a class="header-anchor" href="#legend-component-objects" aria-label="Permalink to &quot;Legend Component Objects&quot;">​</a></h3><p>There are two types of legend component objects for the legend fixture, each one representing a <a href="#components">Component</a> mentioned earlier in this documentation.</p><h4 id="legend-item-1" tabindex="-1">Legend Item <a class="header-anchor" href="#legend-item-1" aria-label="Permalink to &quot;Legend Item&quot;">​</a></h4><p>Every node in the legend tree structure is an instance of a legend item. All legend items share these properties:</p><ul><li><code>name</code>: display name for legend item</li><li><code>children</code>: list of child legend items</li><li><code>hidden</code>: indicates if item (and its children) should be hidden from the legend</li><li><code>expanded</code>: default expanded state of item</li><li><code>exclusive</code>: indicates if toggling visibility should follow &quot;exclusive&quot; behavior</li><li><code>controls:</code>: keeps track of list of enabled legend item controls</li><li><code>disabledControls:</code>: keeps track of list of disabled legend item controls</li></ul><h4 id="layer-item-1" tabindex="-1">Layer Item <a class="header-anchor" href="#layer-item-1" aria-label="Permalink to &quot;Layer Item&quot;">​</a></h4><p>A layer item is an instance of a legend item. A single layer item directly corresponds to a single layer/sublayer on the map. It inherits the properties of a legend item, as well as:</p><ul><li><code>layerId</code>: the ID of the layer this legend entry represents. The layer should already be added to the RAMP configuration under the <code>layers</code> section</li><li><code>sublayerIndex</code>: for Map Image Layers, an integer specifying the index of the sublayer</li><li><code>symbologyExpanded</code>: determines whether the symbology stack is expanded by default,</li><li><code>symbologyRenderStyle</code>: whether to render the images in the symbology stack as &#39;icons&#39; or &#39;images&#39;. Will only apply to custom symbology stacks.</li><li><code>symbologyStack</code>: an array of objects that will serve as the custom symbology stack to use instead of the layer&#39;s default. Each object in the array should have the following properties: <ul><li><code>image</code>: URL of the image to display</li><li><code>text</code>: the text to display</li><li>(optional) <code>sqlQuery</code>: an SQL where clause to apply as a layer filter when the symbol&#39;s visibility checkbox is checked.</li></ul></li><li><code>coverIcon</code>: a custom icon to be displayed on the symbology stack</li><li><code>description</code>: description text to be displayed above symbology stack when it is expanded</li><li><code>layerControls:</code>: keeps track of list of enabled layer item controls</li><li><code>disabledLayerControls:</code>: keeps track of list of disabled layer item controls</li></ul><p>The following is an example of a layer item in the configuration file:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    layerId: &#39;WasteLocations&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Waste Locations Layer&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    sublayerIndex: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    layerControls: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;datatable&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;metadata&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;opacity&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;reload&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;remove&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;settings&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;symbology&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;visibility&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    symbologyRenderStyle: &#39;icons&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    symbologyStack: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            image: &#39;https://cdn.pixabay.com/photo/2013/08/06/19/13/plane-170272_960_720.jpg&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &#39;Airports&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            sqlQuery:</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;Sector = &#39;Airports and Services to Airports&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            image: &#39;https://cdn.pixabay.com/photo/2013/11/24/11/10/lab-217043_960_720.jpg&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &#39;Chemicals&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            sqlQuery: &quot;Sector = &#39;Chemicals&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            image: &#39;https://cdn.pixabay.com/photo/2018/08/24/23/33/oil-rig-3629119__340.jpg&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &#39;Oil and Gas&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            sqlQuery:</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;Sector = &#39;Oil and Gas (Conventional and Non-Conventional)&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            image: &#39;https://cdn.pixabay.com/photo/2016/11/21/15/42/disposal-1846033__340.jpg&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &#39;Waste&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            sqlQuery:</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;Sector = &#39;Waste Treatment and Disposal&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            image: &#39;https://cdn.pixabay.com/photo/2018/03/23/22/11/knowledge-3255140__340.jpg&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &#39;Other&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            sqlQuery:</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;Sector = &#39;All Other Sectors&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h4 id="section-item-1" tabindex="-1">Section Item <a class="header-anchor" href="#section-item-1" aria-label="Permalink to &quot;Section Item&quot;">​</a></h4><p>A section item is an instance of a legend item. A section item does not correspond with any layer, but is used to group and label other legend items. It inherits the properties of a legend item, as well as:</p><ul><li><code>infoType</code>: the type of info displayed on the item, which can be title, text, an image, markdown, or HTML.</li><li><code>content</code>: the content to be displayed on the item Note that when a section item has a defined <code>content</code> property, its visibility and expand control buttons must be explicitly enabled, unlike other legend items that have those buttons enabled by default.</li></ul><p>The following is an example of a section item containing two layer items in the configuration file:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;Layer Group&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    infoType: &#39;text&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: &#39;This group contains two layer items.&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            layerId: &#39;WaterQuantity&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;Water Quantity in Layer Group&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            layerId: &#39;WaterQuality&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;Water Quality in Layer Group&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,48)]))}const h=s(o,[["render",t]]);export{b as __pageData,h as default};
