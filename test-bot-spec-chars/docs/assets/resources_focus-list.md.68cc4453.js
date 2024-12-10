import{_ as a,o as e,c as n,S as l}from"./chunks/framework.3b43194e.js";const F=JSON.parse('{"title":"Focus List","description":"","frontmatter":{},"headers":[],"relativePath":"resources/focus-list.md","filePath":"resources/focus-list.md"}'),o={name:"resources/focus-list.md"};function t(p,s,c,r,i,u){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="focus-list" tabindex="-1">Focus List <a class="header-anchor" href="#focus-list" aria-label="Permalink to &quot;Focus List&quot;">​</a></h1><p>The Focus List directive handles keyboard navigation for lists of items using the arrow keys. This helps reduce the number of tabs (or key presses in general) to get to where you need to go in the app.</p><h2 id="navigating-the-lists" tabindex="-1">Navigating the lists <a class="header-anchor" href="#navigating-the-lists" aria-label="Permalink to &quot;Navigating the lists&quot;">​</a></h2><p><code>Up</code> and <code>down</code> arrow keys move the selection up and down the list respectively. (<code>Left</code> and <code>right</code> for horizontal lists)</p><p><code>Tab</code> as normal, will move focus to the next &quot;tabbable&quot; element. However, <code>focus-item</code>s are not tabbable, and sub-items are only tabbable if their parent <code>focus-item</code> is selected/focused.</p><p>So if there is not selected <code>focus-item</code> or the <code>focus-item</code> has no sub items, <code>tab</code> will move away from the list. If there is a tabbable sub-item, then <code>tab</code> will select that.</p><p><code>Enter</code> will click the currently selected <code>focus-item</code> as it would with a normally focused button.</p><p><code>Escape</code> will remove <code>focus-item</code> selection and move focus back to the main list.</p><h2 id="basics" tabindex="-1">Basics <a class="header-anchor" href="#basics" aria-label="Permalink to &quot;Basics&quot;">​</a></h2><p>To use this directive add <code>v-focus-list</code> to your &quot;list&quot; element and <code>focus-item</code> to each item within the list that you want selectable.</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-focus-list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>The directive by default, will allow navigation with the up and down arrows. To make your list horizontal, and navigable by left and right arrows, set <code>v-focus-list=&quot;&#39;horizontal&#39;&quot;</code> note the <code>&quot;</code> and <code>&#39;</code> quotes</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-focus-list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;horizontal&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-label="Permalink to &quot;Styling&quot;">​</a></h2><p>We supply a default styling for focused items using the class <code>default-focus-style</code>.</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-focus-list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default-focus-style</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default-focus-style</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default-focus-style</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default-focus-style</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>This will give the focus-item a blue outline when selected and active, and a grey outline when selected but the user is focused on another part of the app.</p><h3 id="custom" tabindex="-1">Custom <a class="header-anchor" href="#custom" aria-label="Permalink to &quot;Custom&quot;">​</a></h3><p>Here are some guidelines to make writing your own focus styling easier:</p><ul><li>The selected focus-item has the <code>focused</code> class, selectable with <code>.focused</code></li><li>Focus-lists are given the <code>focus-list</code> attribute (since directive attributes only stick around with binding), this is selectable with <code>[focus-list]</code></li><li>The selected focus-item is active if the <code>[focus-list]</code> has <code>:focus</code></li><li>There is no selected <code>[focus-item]</code> if the <code>[focus-list]</code> does not have <code>[aria-activedescendant]</code></li></ul><p>If your styles are not scoped you should use a class so that only certain <code>focus-item</code>s get the styling.</p><p>An example in plain css:</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;">].</span><span style="color:#FFCB6B;">focused</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">custom-focus-style</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">focus-list</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">focus</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">focus-item</span><span style="color:#89DDFF;">].</span><span style="color:#FFCB6B;">focused</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">custom-focus-style</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>The focus item will have text and such coloured red when focused but not active, and will be coloured blue when it is focused and active.</p><h2 id="other-things-of-note" tabindex="-1">Other things of note <a class="header-anchor" href="#other-things-of-note" aria-label="Permalink to &quot;Other things of note&quot;">​</a></h2><ul><li>The focus list directive can handle lists within lists.</li><li>Clicks are handled as well and maintains consistency between the two control schemes.</li></ul>`,26)]))}const y=a(o,[["render",t]]);export{F as __pageData,y as default};
