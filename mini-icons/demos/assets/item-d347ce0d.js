import { bG as defineComponent, bH as useI18n, bJ as ref, bK as onMounted, bO as resolveDirective, bP as openBlock, bX as createElementBlock, bW as withDirectives, fH as createBaseVNode, bU as unref, ip as withModifiers, iq as withKeys, fG as normalizeClass, iF as LegendItem, iE as LayerItem, lS as CoreFilter, bI as inject, fE as usePanelStore, bM as computed, lT as LayerControl, kU as toRaw, bN as resolveComponent, bV as createVNode, bR as withCtx, bS as createTextVNode, bT as toDisplayString, fO as GlobalEvents, i8 as pushScopeId, i9 as popScopeId, ia as _export_sfc, bY as Fragment, bZ as renderList, iM as normalizeStyle, fL as createCommentVNode, it as renderSlot, iH as LayerType, bQ as createBlock, lU as useLayerStore, fK as watch, lV as LegendType, lW as LegendControl, iD as SectionItem, lX as InfoType, kN as resolveDynamicComponent, lY as to, lZ as InitiationState, l_ as createStaticVNode } from './main-13aeab07.js';
import { m as marked } from './marked.esm-4889c960.js';
import './preload-helper-a4975f27.js';

const _hoisted_1$5 = ["type", "aria-label", "checked", "disabled", "content"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "checkbox",
  props: {
    value: {
      type: Object,
      required: true
    },
    legendItem: {
      type: Object,
      required: true
    },
    checked: { type: Boolean },
    label: { type: String },
    isRadio: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const initialChecked = ref(props.legendItem.visibility);
    onMounted(() => {
      props.legendItem.checkVisibilityRules();
      initialChecked.value = props.legendItem.visibility === props.checked;
    });
    const _noSymbolsVisible = (item) => {
      return !item.symbologyStack.some(
        (item2) => item2.visibility
      );
    };
    const toggleVisibility = () => {
      if (props.value instanceof LegendItem) {
        props.legendItem.toggleVisibility();
      } else if (props.legendItem instanceof LayerItem) {
        if (_noSymbolsVisible(props.legendItem)) {
          props.legendItem.setSymbologyVisibility(void 0, false);
          props.legendItem.setSymbologyVisibility(props.value.uid, true);
          props.legendItem.toggleVisibility(true);
        } else {
          props.legendItem.setSymbologyVisibility(
            props.value.uid,
            !props.value.lastVisbility
          );
        }
        if (_noSymbolsVisible(props.legendItem)) {
          props.legendItem.toggleVisibility(false);
        }
        if (props.legendItem.layer?.supportsFeatures) {
          const filterGuts = props.legendItem.symbologyStack.filter((item) => item.lastVisbility === true).map((item) => item.definitionClause || "");
          let sql = "";
          if (filterGuts.length === 0) {
            sql = "1=2";
          } else if (filterGuts.length < props.legendItem.symbologyStack.length) {
            sql = filterGuts.join(" OR ");
          }
          props.legendItem.layer?.setSqlFilter(CoreFilter.SYMBOL, sql);
        }
        initialChecked.value = true;
      }
    };
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", {
        class: "relative",
        onMouseover: _cache[3] || (_cache[3] = withModifiers(() => {
        }, ["stop"]))
      }, [
        withDirectives(createBaseVNode("input", {
          type: __props.isRadio ? "radio" : "checkbox",
          "aria-label": unref(t)(
            __props.checked ? `legend.visibility.hide${__props.label}` : `legend.visibility.show${__props.label}`
          ),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => toggleVisibility(), ["stop"])),
          checked: __props.checked && initialChecked.value,
          onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => toggleVisibility(), ["stop"]), ["enter"])),
          class: normalizeClass([[
            __props.disabled ? "text-gray-400 border-gray-300" : "text-black cursor-pointer border-gray-500 hover:border-black"
          ], "mx-5 h-15 w-15"]),
          tabindex: "-1",
          disabled: __props.disabled,
          content: unref(t)(
            __props.checked ? `legend.visibility.hide${__props.label}` : `legend.visibility.show${__props.label}`
          )
        }, null, 42, _hoisted_1$5), [
          [_directive_tippy, { placement: "top-end", hideOnClick: false }]
        ])
      ], 32);
    };
  }
});

const _withScopeId$2 = (n) => (pushScopeId("data-v-37c5e371"), n = n(), popScopeId(), n);
const _hoisted_1$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex p-4 justify-center items-center" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "inline-block fill-current w-18 h-18 mx-4",
    viewBox: "0 0 23 21"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
  ])
], -1));
const _hoisted_2$3 = ["aria-label"];
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline-block fill-current w-18 h-18 mr-10",
  viewBox: "0 0 23 21"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" })
], -1));
const _hoisted_4$2 = ["aria-label"];
const _hoisted_5$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline-block fill-current w-18 h-18 mr-10",
  viewBox: "0 0 23 21"
}, [
  /* @__PURE__ */ createBaseVNode("g", null, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z " })
  ])
], -1));
const _hoisted_6$1 = ["aria-label"];
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline-block fill-current w-18 h-18 mr-10",
  viewBox: "0 0 23 21"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z " })
], -1));
const _hoisted_8$1 = ["aria-label"];
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline-block fill-current w-18 h-18 mr-10",
  viewBox: "0 0 23 21"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" })
], -1));
const _hoisted_10$1 = ["aria-label"];
const _hoisted_11 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline-block fill-current w-18 h-18 mr-10",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
], -1));
const _hoisted_12$1 = ["aria-label"];
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline-block fill-current w-18 h-18 mr-10",
  viewBox: "0 0 23 21"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
], -1));
const _hoisted_14$1 = ["content", "aria-label"];
const _hoisted_15 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline-block fill-current w-18 h-18 mr-10",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
], -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "legend-options",
  props: {
    legendItem: LayerItem
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const iApi = inject("iApi");
    const dropdown = ref();
    const hovered = ref(false);
    const panelStore = usePanelStore();
    const mobileMode = ref(panelStore.mobileView);
    const toggleSymbology = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Symbology)) {
        props.legendItem.toggleSymbology();
      }
    };
    const toggleGrid = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Datatable) && getFixtureExists("grid")) {
        iApi.event.emit(GlobalEvents.GRID_TOGGLE, props.legendItem.layer);
      }
    };
    const toggleSettings = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Settings) && getFixtureExists("settings")) {
        iApi.event.emit(GlobalEvents.SETTINGS_TOGGLE, props.legendItem.layer);
      }
    };
    const toggleMetadata = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Metadata) && getFixtureExists("metadata")) {
        const metaConfig = props.legendItem?.layer?.config.metadata || props.legendItem?.layer?.parentLayer?.config?.metadata || {};
        const name = metaConfig?.name || props.legendItem?.layer?.name || "";
        const catalogueUrl = props.legendItem?.layer?.config?.catalogueUrl || props.legendItem?.layer?.layerType === "sublayer" && props.legendItem?.layer?.parentLayer?.config?.catalogueUrl || void 0;
        if (metaConfig.url) {
          const parseUrl = metaConfig.url.split(".");
          const metadataExtension = parseUrl[parseUrl.length - 1];
          const metadataType = metadataExtension === "xml" || metadataExtension === "md" ? metadataExtension : "html";
          iApi.event.emit(GlobalEvents.METADATA_TOGGLE, {
            type: metadataType,
            layerName: name,
            url: metaConfig.url,
            catalogueUrl,
            layer: props.legendItem.layer
          });
        } else {
          console.warn("Layer does not have a metadata url defined");
        }
      }
    };
    const zoomToLayerBoundary = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.BoundaryZoom)) {
        props.legendItem?.layer?.zoomToLayerBoundary();
      }
    };
    const removeLayer = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Remove)) {
        iApi.geo.map.removeLayer(props.legendItem.layerUid);
      }
    };
    const reloadLayer = () => {
      if (reloadableLayer.value) {
        toRaw(props.legendItem.layer).reload();
        dropdown.value.open = false;
      }
    };
    const reloadableLayer = computed(() => {
      return props.legendItem.layerControlAvailable(LayerControl.Reload) && props.legendItem instanceof LayerItem && toRaw(props.legendItem.layer)?.canReload;
    });
    const hover = (t2) => {
      hovered.value = true;
      setTimeout(() => {
        if (hovered.value)
          mobileMode.value ? null : t2._tippy?.show();
      }, 300);
    };
    const getFixtureExists = (fixtureName) => {
      try {
        return iApi.fixture.exists(fixtureName);
      } catch (e) {
        return false;
      }
    };
    return (_ctx, _cache) => {
      const _component_dropdown_menu = resolveComponent("dropdown-menu");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", {
        onClick: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["stop"])),
        onMouseover: _cache[3] || (_cache[3] = withModifiers(() => {
        }, ["stop"])),
        class: "options display-block cursor-auto"
      }, [
        createVNode(_component_dropdown_menu, {
          class: "flex-shrink-0",
          position: "bottom-end",
          tooltip: unref(t)("legend.layer.options"),
          tooltipPlacement: "left",
          tooltipPlacementAlt: "left",
          ref_key: "dropdown",
          ref: dropdown
        }, {
          header: withCtx(() => [
            _hoisted_1$4
          ]),
          default: withCtx(() => [
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(
                  unref(LayerControl).Metadata
                ) || !getFixtureExists("metadata")
              }]),
              onClick: toggleMetadata,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.metadata")
            }, [
              _hoisted_3$2,
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.metadata")), 1)
            ], 10, _hoisted_2$3),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(
                  unref(LayerControl).Settings
                ) || !getFixtureExists("settings")
              }]),
              onClick: toggleSettings,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.settings")
            }, [
              _hoisted_5$2,
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.settings")), 1)
            ], 10, _hoisted_4$2),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(
                  unref(LayerControl).Datatable
                ) || !getFixtureExists("grid")
              }]),
              onClick: toggleGrid,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.datatable")
            }, [
              _hoisted_7$1,
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.datatable")), 1)
            ], 10, _hoisted_6$1),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(
                  unref(LayerControl).Symbology
                )
              }]),
              onClick: toggleSymbology,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.symbology")
            }, [
              _hoisted_9$1,
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.symbology")), 1)
            ], 10, _hoisted_8$1),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(
                  unref(LayerControl).BoundaryZoom
                )
              }]),
              onClick: zoomToLayerBoundary,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.boundaryzoom")
            }, [
              _hoisted_11,
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.boundaryzoom")), 1)
            ], 10, _hoisted_10$1),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(
                  unref(LayerControl).Remove
                )
              }]),
              onClick: removeLayer,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.remove")
            }, [
              _hoisted_13$1,
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.remove")), 1)
            ], 10, _hoisted_12$1),
            withDirectives((openBlock(), createElementBlock("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !reloadableLayer.value
              }]),
              content: !reloadableLayer.value ? unref(t)("legend.layer.controls.reloadDisabled") : "",
              onMouseover: _cache[0] || (_cache[0] = withModifiers(($event) => hover($event.currentTarget), ["stop"])),
              onMouseout: _cache[1] || (_cache[1] = ($event) => (
                //@ts-ignore
                (mobileMode.value ? null : $event.currentTarget?._tippy?.hide(), hovered.value = false)
              )),
              onClick: reloadLayer,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.reload")
            }, [
              _hoisted_15,
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.reload")), 1)
            ], 42, _hoisted_14$1)), [
              [_directive_tippy, {
                placement: "top-start",
                trigger: "manual focus",
                aria: "describedby"
              }]
            ])
          ]),
          _: 1
        }, 8, ["tooltip"])
      ], 32);
    };
  }
});

const legendOptions_vue_vue_type_style_index_0_scoped_37c5e371_lang = '';

const LegendOptions = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-37c5e371"]]);

const _withScopeId$1 = (n) => (pushScopeId("data-v-7bc13719"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = {
  key: 0,
  class: "relative left-3"
};
const _hoisted_3$1 = ["innerHTML"];
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = {
  key: 1,
  class: "symbologyIcon w-32 h-32"
};
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = ["src"];
const _hoisted_8 = {
  key: 1,
  class: "h-32 w-32 inline-flex justify-center items-center"
};
const _hoisted_9 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "fill-current w-16 h-16",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 352 512"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })
], -1));
const _hoisted_10 = [
  _hoisted_9
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "symbology-stack",
  props: {
    visible: { type: Boolean, required: true },
    legendItem: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const stack = ref([]);
    onMounted(() => {
      props.legendItem.loadPromise.then(() => {
        if (props.legendItem.layerUid !== void 0) {
          Promise.all(
            toRaw(props.legendItem.symbologyStack).map(
              (l) => l.drawPromise
            )
          ).then(() => {
            stack.value = toRaw(props.legendItem).symbologyStack;
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return !__props.visible ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        stack.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(stack.value.slice(0, 3).reverse(), (item, idx) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["absolute", [
                idx == 0 ? "symbol-0" : idx == 1 ? "left-3 symbol-1" : "left-6 symbol-2"
              ]]),
              style: normalizeStyle({ "z-index": 3 - idx }),
              key: idx
            }, [
              stack.value[idx].svgcode ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "symbologyIcon w-28 h-28",
                innerHTML: stack.value[idx].svgcode
              }, null, 8, _hoisted_3$1)) : stack.value[idx].imgUrl ? (openBlock(), createElementBlock("img", {
                key: 1,
                class: "symbologyIcon w-28 h-28",
                src: stack.value[idx].imgUrl
              }, null, 8, _hoisted_4$1)) : createCommentVNode("", true)
            ], 6);
          }), 128))
        ])) : stack.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          stack.value[0].svgcode ? (openBlock(), createElementBlock("span", {
            key: 0,
            innerHTML: stack.value[0].svgcode
          }, null, 8, _hoisted_6)) : stack.value[0].imgUrl ? (openBlock(), createElementBlock("img", {
            key: 1,
            class: "symbologyIcon w-full h-full",
            src: stack.value[0].imgUrl
          }, null, 8, _hoisted_7)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_8, _hoisted_10));
    };
  }
});

const symbologyStack_vue_vue_type_style_index_0_scoped_7bc13719_lang = '';

const SymbologyStack = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7bc13719"]]);

const _hoisted_1$2 = { class: "default-focus-style break-words text-ellipsis text-[10px] border rounded-md px-3 min-h-[18px] w-max hover:border-gray-600 focus:border-gray-600 border-gray-400 hover:bg-gray-300 focus:bg-gray-300 bg-gray-100 flex items-center gap-2" };
const _hoisted_2$1 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "mini-icon",
  props: {
    label: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "default"),
        __props.label ? (openBlock(), createElementBlock("label", _hoisted_2$1, toDisplayString(__props.label), 1)) : createCommentVNode("", true)
      ])), [
        [_directive_tippy, { placement: "bottom-start" }]
      ]);
    };
  }
});

const _hoisted_1$1 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "layertype-icon",
  props: {
    layerType: { type: String, required: true },
    featureCount: { type: Number }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const featCountText = computed(
      () => props.featureCount ? ` (${t("legend.layer.features.count", props.featureCount)})` : ""
    );
    const layerData = computed(() => {
      switch (props.layerType) {
        case LayerType.FEATURE:
          return [
            t("legend.layer.type.ESRIFeature"),
            `<svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="12px"
                    height="12px"
                    viewBox="0 0 92.25 122.88"
                    style="enable-background: new 0 0 92.25 122.88"
                    xml:space="preserve"
                >
                    <g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            class="st0"
                            d="M68.51,106.28c-5.59,6.13-12.1,11.62-19.41,16.06c-0.9,0.66-2.12,0.74-3.12,0.1 c-10.8-6.87-19.87-15.12-27-24.09C9.14,86.01,2.95,72.33,0.83,59.15c-2.16-13.36-0.14-26.22,6.51-36.67 c2.62-4.13,5.97-7.89,10.05-11.14C26.77,3.87,37.48-0.08,48.16,0c10.28,0.08,20.43,3.91,29.2,11.92c3.08,2.8,5.67,6.01,7.79,9.49 c7.15,11.78,8.69,26.8,5.55,42.02c-3.1,15.04-10.8,30.32-22.19,42.82V106.28L68.51,106.28z M46.12,23.76 c12.68,0,22.95,10.28,22.95,22.95c0,12.68-10.28,22.95-22.95,22.95c-12.68,0-22.95-10.27-22.95-22.95 C23.16,34.03,33.44,23.76,46.12,23.76L46.12,23.76z"
                        />
                    </g>
                </svg>`
          ];
        case LayerType.MAPIMAGE:
          return [
            t("legend.layer.type.ESRIMapImage"),
            `<svg 
                    version="1.1" 
                    width="12px" 
                    height="12px" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 122.88 122.151" 
                    enable-background="new 0 0 122.88 122.151" 
                    xml:space="preserve"
                >
                    <g>
                        <path d="M8.676,0h105.529c2.405,0,4.557,0.984,6.124,2.552c1.567,1.567,2.551,3.754,2.551,6.124v104.8 c0,2.405-0.983,4.557-2.551,6.124c-1.568,1.567-3.755,2.552-6.124,2.552H8.676c-2.406,0-4.557-0.984-6.124-2.553 C0.984,118.032,0,115.845,0,113.476V8.675C0,6.27,0.984,4.119,2.552,2.552C4.12,0.984,6.307,0,8.676,0L8.676,0z M9.097,88.323 l35.411-33.9c1.421-1.313,3.645-1.167,4.921,0.255c0.037,0.036,0.037,0.073,0.073,0.073l31.459,37.218l4.812-29.6 c0.328-1.896,2.114-3.208,4.01-2.879c0.729,0.109,1.385,0.474,1.895,0.948l22.07,23.184V10.773c0-0.474-0.183-0.875-0.511-1.166 c-0.291-0.292-0.729-0.511-1.166-0.511H10.737c-0.474,0-0.875,0.182-1.166,0.511c-0.292,0.291-0.511,0.729-0.511,1.166v77.55H9.097 L9.097,88.323z M90.526,19.866c3.464,0,6.635,1.422,8.895,3.682c2.297,2.296,3.682,5.431,3.682,8.895 c0,3.463-1.421,6.634-3.682,8.894c-2.296,2.297-5.431,3.682-8.895,3.682c-3.462,0-6.634-1.421-8.894-3.682 c-2.297-2.296-3.682-5.431-3.682-8.894c0-3.463,1.421-6.634,3.682-8.895C83.929,21.251,87.064,19.866,90.526,19.866L90.526,19.866z"/>
                    </g>
                </svg>`
          ];
        case LayerType.TILE:
          return [
            t("legend.layer.type.ESRITile"),
            `<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="12px"
                    height="12px"
                    shape-rendering="geometricPrecision" 
                    text-rendering="geometricPrecision" 
                    image-rendering="optimizeQuality" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    viewBox="0 0 512 481.157"
                >
                    <path d="M35.64 0h159.702c19.604 0 35.641 16.037 35.641 35.64v145.308c0 19.604-16.037 35.64-35.641 35.64H35.64c-19.603 0-35.64-16.036-35.64-35.64V35.64C0 16.037 16.037 0 35.64 0zm281.017 264.569h159.702c19.604 0 35.641 16.036 35.641 35.64v145.307c0 19.604-16.037 35.641-35.641 35.641H316.657c-19.603 0-35.64-16.037-35.64-35.641V300.209c0-19.604 16.037-35.64 35.64-35.64zm-281.017 0h159.702c19.604 0 35.641 16.036 35.641 35.64v145.307c0 19.604-16.037 35.641-35.641 35.641H35.64C16.037 481.157 0 465.12 0 445.516V300.209c0-19.604 16.037-35.64 35.64-35.64zM316.657 0h159.702C495.963 0 512 16.037 512 35.64v145.308c0 19.604-16.037 35.64-35.641 35.64H316.657c-19.603 0-35.64-16.036-35.64-35.64V35.64c0-19.603 16.037-35.64 35.64-35.64z"/>
                </svg>`
          ];
        case LayerType.IMAGERY:
          return [
            t("legend.layer.type.ESRIImagery"),
            `<svg 
                    version="1.1" 
                    width="12px" 
                    height="12px" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 122.88 122.151" 
                    enable-background="new 0 0 122.88 122.151" 
                    xml:space="preserve"
                >
                    <g>
                        <path d="M8.676,0h105.529c2.405,0,4.557,0.984,6.124,2.552c1.567,1.567,2.551,3.754,2.551,6.124v104.8 c0,2.405-0.983,4.557-2.551,6.124c-1.568,1.567-3.755,2.552-6.124,2.552H8.676c-2.406,0-4.557-0.984-6.124-2.553 C0.984,118.032,0,115.845,0,113.476V8.675C0,6.27,0.984,4.119,2.552,2.552C4.12,0.984,6.307,0,8.676,0L8.676,0z M9.097,88.323 l35.411-33.9c1.421-1.313,3.645-1.167,4.921,0.255c0.037,0.036,0.037,0.073,0.073,0.073l31.459,37.218l4.812-29.6 c0.328-1.896,2.114-3.208,4.01-2.879c0.729,0.109,1.385,0.474,1.895,0.948l22.07,23.184V10.773c0-0.474-0.183-0.875-0.511-1.166 c-0.291-0.292-0.729-0.511-1.166-0.511H10.737c-0.474,0-0.875,0.182-1.166,0.511c-0.292,0.291-0.511,0.729-0.511,1.166v77.55H9.097 L9.097,88.323z M90.526,19.866c3.464,0,6.635,1.422,8.895,3.682c2.297,2.296,3.682,5.431,3.682,8.895 c0,3.463-1.421,6.634-3.682,8.894c-2.296,2.297-5.431,3.682-8.895,3.682c-3.462,0-6.634-1.421-8.894-3.682 c-2.297-2.296-3.682-5.431-3.682-8.894c0-3.463,1.421-6.634,3.682-8.895C83.929,21.251,87.064,19.866,90.526,19.866L90.526,19.866z"/>
                    </g>
                </svg>`
          ];
        case LayerType.GRAPHIC:
          return [
            t("legend.layer.type.ESRIGraphic"),
            `<svg 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 122.88 122.88" 
                    style="enable-background:new 0 0 122.88 122.88" 
                    xml:space="preserve"
                >
                    <g>
                        <path 
                            class="st0" 
                            fill-rule="evenodd" 
                            clip-rule="evenodd"
                            d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44S0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z M52.56,84c-1.82,0.61-3.68,1.17-5.5,1.77c-1.82,0.61-3.64,1.21-5.5,1.82 c-4.34,1.4-6.71,2.19-7.23,2.33c-0.51,0.14-0.19-1.86,0.89-6.06l3.45-13.19l26.01-27.04l13.85,13.33L52.56,84L52.56,84L52.56,84z M78.48,33.84c-0.65-0.61-1.4-0.93-2.24-0.89c-0.84,0-1.59,0.33-2.19,0.98l-4.94,5.13l13.85,13.38l4.99-5.22 c0.61-0.61,0.84-1.4,0.84-2.24c0-0.84-0.33-1.63-0.93-2.19L78.48,33.84L78.48,33.84L78.48,33.84z"
                        />
                    </g>
                </svg>`
          ];
        case LayerType.WFS:
          return [
            t("legend.layer.type.wfs"),
            `<svg 
                    version="1.1" 
                    width="12px" 
                    height="12px" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 122.88 122.151" 
                    enable-background="new 0 0 122.88 122.151" 
                    xml:space="preserve"
                >
                    <g>
                        <path d="M8.676,0h105.529c2.405,0,4.557,0.984,6.124,2.552c1.567,1.567,2.551,3.754,2.551,6.124v104.8 c0,2.405-0.983,4.557-2.551,6.124c-1.568,1.567-3.755,2.552-6.124,2.552H8.676c-2.406,0-4.557-0.984-6.124-2.553 C0.984,118.032,0,115.845,0,113.476V8.675C0,6.27,0.984,4.119,2.552,2.552C4.12,0.984,6.307,0,8.676,0L8.676,0z M9.097,88.323 l35.411-33.9c1.421-1.313,3.645-1.167,4.921,0.255c0.037,0.036,0.037,0.073,0.073,0.073l31.459,37.218l4.812-29.6 c0.328-1.896,2.114-3.208,4.01-2.879c0.729,0.109,1.385,0.474,1.895,0.948l22.07,23.184V10.773c0-0.474-0.183-0.875-0.511-1.166 c-0.291-0.292-0.729-0.511-1.166-0.511H10.737c-0.474,0-0.875,0.182-1.166,0.511c-0.292,0.291-0.511,0.729-0.511,1.166v77.55H9.097 L9.097,88.323z M90.526,19.866c3.464,0,6.635,1.422,8.895,3.682c2.297,2.296,3.682,5.431,3.682,8.895 c0,3.463-1.421,6.634-3.682,8.894c-2.296,2.297-5.431,3.682-8.895,3.682c-3.462,0-6.634-1.421-8.894-3.682 c-2.297-2.296-3.682-5.431-3.682-8.894c0-3.463,1.421-6.634,3.682-8.895C83.929,21.251,87.064,19.866,90.526,19.866L90.526,19.866z"/>
                    </g>
                </svg>`
          ];
        case LayerType.WMS:
          return [
            t("legend.layer.type.wms"),
            `<svg 
                    version="1.1" 
                    width="12px" 
                    height="12px" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 122.88 122.151" 
                    enable-background="new 0 0 122.88 122.151" 
                    xml:space="preserve"
                >
                    <g>
                        <path d="M8.676,0h105.529c2.405,0,4.557,0.984,6.124,2.552c1.567,1.567,2.551,3.754,2.551,6.124v104.8 c0,2.405-0.983,4.557-2.551,6.124c-1.568,1.567-3.755,2.552-6.124,2.552H8.676c-2.406,0-4.557-0.984-6.124-2.553 C0.984,118.032,0,115.845,0,113.476V8.675C0,6.27,0.984,4.119,2.552,2.552C4.12,0.984,6.307,0,8.676,0L8.676,0z M9.097,88.323 l35.411-33.9c1.421-1.313,3.645-1.167,4.921,0.255c0.037,0.036,0.037,0.073,0.073,0.073l31.459,37.218l4.812-29.6 c0.328-1.896,2.114-3.208,4.01-2.879c0.729,0.109,1.385,0.474,1.895,0.948l22.07,23.184V10.773c0-0.474-0.183-0.875-0.511-1.166 c-0.291-0.292-0.729-0.511-1.166-0.511H10.737c-0.474,0-0.875,0.182-1.166,0.511c-0.292,0.291-0.511,0.729-0.511,1.166v77.55H9.097 L9.097,88.323z M90.526,19.866c3.464,0,6.635,1.422,8.895,3.682c2.297,2.296,3.682,5.431,3.682,8.895 c0,3.463-1.421,6.634-3.682,8.894c-2.296,2.297-5.431,3.682-8.895,3.682c-3.462,0-6.634-1.421-8.894-3.682 c-2.297-2.296-3.682-5.431-3.682-8.894c0-3.463,1.421-6.634,3.682-8.895C83.929,21.251,87.064,19.866,90.526,19.866L90.526,19.866z"/>
                    </g>
                </svg>`
          ];
        case LayerType.GEOJSON:
          return [
            t("legend.layer.type.geoJson"),
            `<svg 
                    version="1.1" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 115.16 122.88" 
                    style="enable-background:new 0 0 115.16 122.88" 
                    xml:space="preserve"
                    width="12px"
                    height="12px"
                >
                    <g>
                        <path d="M0,69.1V53.79c4.65-0.04,8.13-1.42,10.49-4.12C12.82,46.96,14,40.87,14,31.41c0-7.22,0.26-12.56,0.81-16.03 c0.52-3.47,1.81-6.39,3.86-8.73c2.05-2.35,4.69-4.03,7.92-5.08C29.81,0.52,34.4,0,40.33,0h3.38v15.31c-6.2,0-9.9,0.63-11.12,1.92 c-1.22,1.27-1.88,3.77-1.96,7.48c-0.26,10.21-0.59,16.86-0.98,19.93c-0.41,3.05-1.35,5.98-2.81,8.77 c-1.46,2.79-4.19,5.47-8.18,8.03c3.8,2.31,6.54,5.06,8.24,8.24c1.72,3.21,2.75,7.81,3.03,13.83l0.96,18.63 c0.39,1.79,1.31,3.14,2.77,4.06c1.46,0.92,4.82,1.37,10.06,1.37v15.31h-3.34c-6.83,0-12.08-0.78-15.81-2.33 c-3.71-1.55-6.39-4.1-8.07-7.63c-1.66-3.55-2.49-9.27-2.49-17.14c0-8.7-0.31-14.26-0.89-16.71c-0.59-2.42-1.74-4.65-3.45-6.67 C7.94,70.36,4.73,69.27,0,69.1L0,69.1z M115.16,69.1c-4.65,0.04-8.14,1.42-10.49,4.17c-2.33,2.73-3.51,8.77-3.51,18.15 c0,7.26-0.26,12.61-0.76,16.1c-0.52,3.47-1.79,6.39-3.84,8.72c-2.05,2.36-4.71,4.03-7.94,5.08c-3.25,1.05-7.83,1.57-13.76,1.57 h-3.4v-15.31c5.95,0,9.6-0.61,10.93-1.85c1.35-1.24,2.07-3.75,2.16-7.55c0.26-10.93,0.65-17.93,1.18-21.03 c0.55-3.1,1.59-5.98,3.21-8.66c1.59-2.7,4.12-5.04,7.57-7.05c-3.64-2.38-6.19-4.73-7.63-7.02c-1.44-2.31-2.42-4.8-2.92-7.5 c-0.5-2.7-0.89-7.74-1.16-15.09c-0.24-7.35-0.55-11.56-0.9-12.61c-0.33-1.07-1.16-1.98-2.46-2.75c-1.31-0.76-4.62-1.16-9.97-1.16V0 h3.38c6.83,0,12.08,0.79,15.79,2.33c3.71,1.55,6.39,4.1,8.05,7.63c1.66,3.56,2.49,9.27,2.49,17.14c0,9.05,0.33,14.74,0.98,17.08 c0.68,2.36,1.83,4.49,3.53,6.43c1.68,1.94,4.84,2.99,9.49,3.16V69.1L115.16,69.1z"/>
                    </g>
                </svg>`
          ];
        case LayerType.CSV:
          return [
            t("legend.layer.type.csv"),
            `<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    shape-rendering="geometricPrecision" 
                    text-rendering="geometricPrecision" 
                    image-rendering="optimizeQuality" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    viewBox="0 0 392 512.309"
                    width="12px"
                    height="12px"
                >
                    <path d="M58.883 0h186.242v93.425l.099 1.406c1.618 22.2 9.835 40.061 24.454 52.552 14.088 12.047 33.864 18.745 59.129 19.14l63.193.036v286.86c0 32.331-26.552 58.89-58.883 58.89H58.883C26.545 512.309 0 485.814 0 453.419V58.883C0 26.495 26.495 0 58.883 0zm48.892 412.172c-5.673 0-10.28-4.607-10.28-10.28 0-5.674 4.607-10.28 10.28-10.28h141.71c5.673 0 10.28 4.606 10.28 10.28 0 5.673-4.607 10.28-10.28 10.28h-141.71zm0-175.532c-5.673 0-10.28-4.607-10.28-10.28 0-5.674 4.607-10.28 10.28-10.28h176.45c5.673 0 10.28 4.606 10.28 10.28 0 5.673-4.607 10.28-10.28 10.28h-176.45zm0 84.77c-5.673 0-10.28-4.607-10.28-10.28 0-5.674 4.607-10.28 10.28-10.28h167.102c5.674 0 10.281 4.606 10.281 10.28 0 5.673-4.607 10.28-10.281 10.28H107.775zM265.685 3.159L392 139.816v6.197l-63.03.035c-20.179-.346-35.532-5.327-45.967-14.251-10.288-8.796-16.109-21.853-17.318-38.414V3.159z"/>
                </svg>`
          ];
        case LayerType.SHAPEFILE:
          return [
            t("legend.layer.type.shapefile"),
            `<svg 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 106.42 122.88" 
                    style="enable-background:new 0 0 106.42 122.88" 
                    xml:space="preserve"
                    width="12px"
                    height="12px"
                >
                    <g>
                        <polygon file-rule="evenodd" clip-rule="evenodd" class="st0" points="53.21,0 79.81,15.36 106.42,30.72 106.42,61.44 106.42,92.16 79.81,107.52 53.21,122.88 26.6,107.52 0,92.16 0,61.44 0,30.72 26.6,15.36 53.21,0"/>
                    </g>
                </svg>`
          ];
        case LayerType.OSM:
          return [
            t("legend.layer.type.osm"),
            `<svg 
                    version="1.1" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    width="12px" 
                    height="12px" 
                    viewBox="0 0 122.88 122.88" 
                    enable-background="new 0 0 122.88 122.88" 
                    xml:space="preserve"
                >
                    <g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M61.439,0c33.928,0,61.44,27.513,61.44,61.439c0,33.929-27.513,61.44-61.44,61.44 C27.512,122.88,0,95.368,0,61.439C0,27.513,27.512,0,61.439,0L61.439,0z M78.314,6.495c20.618,6.853,36.088,24.997,39.068,47.101 l-1.953-0.209c-0.347,1.495-0.666,1.533-0.666,3.333c0,1.588,2,2.651,2,6.003c0,0.898-2.109,2.694-2.202,3.007l-3.132-3.674v4.669 l-0.476-0.018l-0.844-8.615l-1.749,0.551l-2.081-6.409l-6.855,7.155l-0.082,5.239l-2.238,1.501l-2.377-13.438l-1.422,1.039 l-3.22-4.345l-4.813,0.143l-1.844-2.107l-1.887,0.519l-3.712-4.254l-0.717,0.488l2.3,5.878h2.669v-1.334h1.333 c0.962,2.658,2.001,1.084,2.001,2.669c0,5.547-6.851,9.625-11.339,10.669c0.24,1.003,0.147,2.003,1.333,2.003 c2.513,0,1.264-0.44,4.003-0.667c-0.127,5.667-6.5,12.435-9.221,16.654l1.218,8.69c0.321,1.887-3.919,3.884-5.361,6.009 l0.692,3.329l-1.953,0.789c-0.342,3.42-3.662,7.214-7.386,7.214h-4c0-4.683-3.336-11.366-3.336-14.675 c0-2.81,1.333-3.188,1.333-6.669c0-3.216-3.333-7.828-3.333-8.67v-5.336h-2.669c-0.396-1.487-0.154-2-2-2h-0.667 c-2.914,0-2.422,1.333-5.336,1.333h-2.669c-2.406,0-6.669-7.721-6.669-8.671v-8.003c0-3.454,3.161-7.214,5.336-8.672v-3.333 l3.002-3.052l1.667-0.284c3.579,0,3.154-2,5.336-2H49.4v4.669L56,43.532l0.622-2.848c2.991,0.701,3.769,2.032,7.454,2.032h1.333 c2.531,0,2.667-3.358,2.667-6.002l-5.343,0.528l-2.324-5.064l-2.311,0.615c0.415,1.812,0.642,1.059,0.642,2.587 c0,0.9-0.741,1-1.335,1.334l-2.311-5.865l-4.969-3.549l-0.66,0.648l4.231,4.452c-0.562,1.597-0.628,6.209-2.961,2.979l2.182-1.05 l-5.438-5.699l-3.258,1.274l-3.216,3.08c-0.336,2.481-1.012,3.729-3.608,3.729c-1.728,0-0.685-0.447-3.336-0.667v-6.669h6.002 l-1.945-4.442l-0.721,0.44V24.04l9.747-4.494c-0.184-1.399-0.408-0.649-0.408-2.175c0-0.091,0.655-1.322,0.667-1.336l2.521,1.565 l-0.603-2.871l-3.889,0.8l-0.722-3.49c3.084-1.624,9.87-7.34,12.028-7.34h2.002c2.107,0,7.751,2.079,8.669,3.333L62.057,7.49 l3.971,3.271l0.381-1.395l2.964-0.812l0.036-1.855h1.336v2L78.314,6.495L78.314,6.495z M116.963,71.835 c-0.154,0.842-0.324,1.676-0.512,2.504l-0.307-2.152L116.963,71.835L116.963,71.835z M115.042,79.398 c-0.147,0.446-0.297,0.894-0.455,1.336h-0.49v-1.336H115.042L115.042,79.398z M11.758,93.18 c-3.624-5.493-6.331-11.641-7.916-18.226l10.821,5.218l0.055,3.229c0,1.186-2.025,3.71-2.667,4.669L11.758,93.18L11.758,93.18z"/>
                    </g>
                </svg>`
          ];
        case LayerType.DATATABLE:
          return [
            t("legend.layer.type.datatable"),
            `<svg 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 122.88 108.01" 
                    style="enable-background:new 0 0 122.88 108.01" 
                    xml:space="preserve"
                    width="12px"
                    height="12px"
                >
                    <g>
                        <path fill-rule="evenodd" clip-rule="evenodd" class="st0" d="M16.35,0h90.19c8.99,0,16.35,7.36,16.35,16.35v75.32c0,8.99-7.36,16.35-16.35,16.35H16.35 C7.36,108.01,0,100.66,0,91.67V16.35C0,7.36,7.36,0,16.35,0L16.35,0z M64.64,77.54h49.62v21.2H64.64V77.54L64.64,77.54z M8.02,77.54h49.62v21.2H8.02V77.54L8.02,77.54z M8.02,21.13h49.62v21.2H8.02V21.13L8.02,21.13z M8.02,49.34h49.62v21.2H8.02V49.34 L8.02,49.34z M64.64,21.13h49.62v21.2H64.64V21.13L64.64,21.13z M64.64,49.34h49.62v21.2H64.64V49.34L64.64,49.34z"/>
                    </g>
                </svg>`
          ];
        case LayerType.DATACSV:
          return [
            t("legend.layer.type.dataCsv"),
            `<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 122.88 97.05"
                    height="12px"
                    width="12px"
                >
                    <path d="M37.11,6.51A48.54,48.54,0,0,1,93,11.68l.27-.08c7-1.78,13.15-2.53,17.89-2.16,5.17.4,8.9,2.15,10.7,5.37,3.25,5.79-1.07,14.76-10.66,24.58-.58.59-1.19,1.19-1.81,1.8A48.53,48.53,0,0,1,30.12,85.64c-.85.22-1.69.42-2.51.61-13.36,3.07-23.25,2.07-26.5-3.72l0,0c-1.81-3.25-1.32-7.39,1.1-12.07,2.17-4.2,6-9,11.07-14l.21-.2A48.56,48.56,0,0,1,37.11,6.51Zm67.72,38.83A195.18,195.18,0,0,1,72.24,67.91l-.06,0A195.65,195.65,0,0,1,36,84a43.59,43.59,0,0,0,68.82-38.62Zm-80.59,26c3.39-.43,11.31-3.54,20.77-7.86,6.22-2.83,13-6.28,19.61-10s13-7.61,18.67-11.44c8.34-5.69,14.77-10.83,16.59-13.9q-.37-.7-.78-1.41A43.57,43.57,0,0,0,23.64,70.31l.6,1Z"/></svg>`
          ];
        case LayerType.DATAJSON:
          return [
            t("legend.layer.type.dataJson"),
            `<svg 
                    version="1.1" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    viewBox="0 0 115.16 122.88" 
                    style="enable-background:new 0 0 115.16 122.88" 
                    xml:space="preserve"
                    width="12px"
                    height="12px"
                >
                    <g>
                        <path d="M0,69.1V53.79c4.65-0.04,8.13-1.42,10.49-4.12C12.82,46.96,14,40.87,14,31.41c0-7.22,0.26-12.56,0.81-16.03 c0.52-3.47,1.81-6.39,3.86-8.73c2.05-2.35,4.69-4.03,7.92-5.08C29.81,0.52,34.4,0,40.33,0h3.38v15.31c-6.2,0-9.9,0.63-11.12,1.92 c-1.22,1.27-1.88,3.77-1.96,7.48c-0.26,10.21-0.59,16.86-0.98,19.93c-0.41,3.05-1.35,5.98-2.81,8.77 c-1.46,2.79-4.19,5.47-8.18,8.03c3.8,2.31,6.54,5.06,8.24,8.24c1.72,3.21,2.75,7.81,3.03,13.83l0.96,18.63 c0.39,1.79,1.31,3.14,2.77,4.06c1.46,0.92,4.82,1.37,10.06,1.37v15.31h-3.34c-6.83,0-12.08-0.78-15.81-2.33 c-3.71-1.55-6.39-4.1-8.07-7.63c-1.66-3.55-2.49-9.27-2.49-17.14c0-8.7-0.31-14.26-0.89-16.71c-0.59-2.42-1.74-4.65-3.45-6.67 C7.94,70.36,4.73,69.27,0,69.1L0,69.1z M115.16,69.1c-4.65,0.04-8.14,1.42-10.49,4.17c-2.33,2.73-3.51,8.77-3.51,18.15 c0,7.26-0.26,12.61-0.76,16.1c-0.52,3.47-1.79,6.39-3.84,8.72c-2.05,2.36-4.71,4.03-7.94,5.08c-3.25,1.05-7.83,1.57-13.76,1.57 h-3.4v-15.31c5.95,0,9.6-0.61,10.93-1.85c1.35-1.24,2.07-3.75,2.16-7.55c0.26-10.93,0.65-17.93,1.18-21.03 c0.55-3.1,1.59-5.98,3.21-8.66c1.59-2.7,4.12-5.04,7.57-7.05c-3.64-2.38-6.19-4.73-7.63-7.02c-1.44-2.31-2.42-4.8-2.92-7.5 c-0.5-2.7-0.89-7.74-1.16-15.09c-0.24-7.35-0.55-11.56-0.9-12.61c-0.33-1.07-1.16-1.98-2.46-2.75c-1.31-0.76-4.62-1.16-9.97-1.16V0 h3.38c6.83,0,12.08,0.79,15.79,2.33c3.71,1.55,6.39,4.1,8.05,7.63c1.66,3.56,2.49,9.27,2.49,17.14c0,9.05,0.33,14.74,0.98,17.08 c0.68,2.36,1.83,4.49,3.53,6.43c1.68,1.94,4.84,2.99,9.49,3.16V69.1L115.16,69.1z"/>
                    </g>
                </svg>`
          ];
        case LayerType.SUBLAYER:
          return [
            t("legend.layer.type.sublayer"),
            `<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 122.88 112.99"
                    width="12px"
                    height="12px"
                >
                    <path d="M120.62,39.52,63.1,68.12a3.75,3.75,0,0,1-3.33,0L2.1,39.45a3.78,3.78,0,0,1-.18-6.67L59.59.48a3.78,3.78,0,0,1,3.73,0L121,32.78a3.77,3.77,0,0,1-.33,6.74Zm-9.77,40.93a3.76,3.76,0,0,1,3.6-6.61l6.41,3.38a3.77,3.77,0,0,1,1.58,5.09A3.82,3.82,0,0,1,120.7,84L63.1,112.6a3.75,3.75,0,0,1-3.33,0L2.1,83.93a3.77,3.77,0,0,1-1.71-5A3.69,3.69,0,0,1,2,77.22l6-3.14a3.76,3.76,0,0,1,4,6.35L61.44,105l49.41-24.57ZM111,57.69a3.76,3.76,0,0,1,4.36-6l5.49,2.89a3.76,3.76,0,0,1-.16,6.74L63.1,89.92a3.75,3.75,0,0,1-3.33,0L2.1,61.25a3.78,3.78,0,0,1-1.71-5A3.72,3.72,0,0,1,2,54.54L7.9,51.43A3.77,3.77,0,0,1,12,57.74l49.47,24.6L111,57.69ZM61.44,60.54,111,35.87,61.44,8.09,11.83,35.87,61.44,60.54Z"/>
                </svg>`
          ];
        default:
          return [
            t("legend.layer.type.unknown"),
            `<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    shape-rendering="geometricPrecision" 
                    text-rendering="geometricPrecision" 
                    image-rendering="optimizeQuality" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    viewBox="0 0 512 512"
                    width="12px"
                    height="12px"
                >
                    <path d="M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"/>
                </svg>`
          ];
      }
    });
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return withDirectives((openBlock(), createBlock(_sfc_main$2, {
        label: __props.featureCount ? __props.featureCount.toString() : "",
        content: layerData.value[0] + featCountText.value
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            innerHTML: layerData.value[1]
          }, null, 8, _hoisted_1$1)
        ]),
        _: 1
      }, 8, ["label", "content"])), [
        [_directive_tippy, { placement: "bottom-start" }]
      ]);
    };
  }
});

const _withScopeId = (n) => (pushScopeId("data-v-864159da"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = ["content"];
const _hoisted_3 = {
  key: 0,
  class: "flex p-5"
};
const _hoisted_4 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
};
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<path d="M0 0h24v24H0V0z" fill="none" data-v-864159da></path><path d="M0 0h24v24H0V0z" fill="none" data-v-864159da></path><circle cx="15.5" cy="9.5" r="1.5" data-v-864159da></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-864159da></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-864159da></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-864159da></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-864159da></path>', 7);
const _hoisted_12 = [
  _hoisted_5
];
const _hoisted_13 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
};
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<path d="M0 0h24v24H0V0z" fill="none" data-v-864159da></path><path d="M0 0h24v24H0V0z" fill="none" data-v-864159da></path><circle cx="15.5" cy="9.5" r="1.5" data-v-864159da></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-864159da></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-864159da></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-864159da></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-864159da></path>', 7);
const _hoisted_21 = [
  _hoisted_14
];
const _hoisted_22 = ["onClick", "disabled", "content", "aria-label"];
const _hoisted_23 = ["src"];
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
], -1));
const _hoisted_25 = [
  _hoisted_24
];
const _hoisted_26 = {
  key: 3,
  class: "flex flex-1 flex-col p-5"
};
const _hoisted_27 = { class: "pointer-events-none" };
const _hoisted_28 = { class: "flex-auto pointer-events-none p-5 truncate" };
const _hoisted_29 = {
  class: "fill-gray-800",
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 122.88 108.01",
  height: "13px",
  width: "13px",
  style: { "enable-background": "new 0 0 122.88 108.01" },
  "xml:space": "preserve"
};
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("g", null, [
  /* @__PURE__ */ createBaseVNode("path", {
    class: "st0",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16.35,0h90.19c8.99,0,16.35,7.36,16.35,16.35v75.32c0,8.99-7.36,16.35-16.35,16.35H16.35 C7.36,108.01,0,100.66,0,91.67V16.35C0,7.36,7.36,0,16.35,0L16.35,0z M64.64,77.54h49.62v21.2H64.64V77.54L64.64,77.54z M8.02,77.54h49.62v21.2H8.02V77.54L8.02,77.54z M8.02,21.13h49.62v21.2H8.02V21.13L8.02,21.13z M8.02,49.34h49.62v21.2H8.02V49.34 L8.02,49.34z M64.64,21.13h49.62v21.2H64.64V21.13L64.64,21.13z M64.64,49.34h49.62v21.2H64.64V49.34L64.64,49.34z"
  })
], -1));
const _hoisted_31 = [
  _hoisted_30
];
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("g", null, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z" })
], -1));
const _hoisted_33 = [
  _hoisted_32
];
const _hoisted_34 = {
  key: 0,
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  width: "12px",
  height: "12px",
  viewBox: "0 0 122.879 122.879",
  "enable-background": "new 0 0 122.879 122.879",
  "xml:space": "preserve"
};
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("g", null, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#FF4141",
    d: "M61.44,0c16.96,0,32.328,6.882,43.453,17.986c11.104,11.125,17.986,26.494,17.986,43.453 c0,16.961-6.883,32.328-17.986,43.453C93.769,115.998,78.4,122.879,61.44,122.879c-16.96,0-32.329-6.881-43.454-17.986 C6.882,93.768,0,78.4,0,61.439C0,44.48,6.882,29.111,17.986,17.986C29.112,6.882,44.48,0,61.44,0L61.44,0z M73.452,39.152 c2.75-2.792,7.221-2.805,9.986-0.026c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.077,12.25 c2.728,2.77,2.689,7.256-0.081,10.021c-2.772,2.766-7.229,2.758-9.954-0.012L61.445,71.541L49.428,83.729 c-2.75,2.793-7.22,2.805-9.985,0.025c-2.763-2.775-2.776-7.291-0.026-10.082L51.48,61.435l-12.078-12.25 c-2.726-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.954,0.013L61.435,51.34L73.452,39.152L73.452,39.152z M96.899,25.98C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685 c-9.073,9.073-14.684,21.609-14.684,35.459s5.611,26.387,14.684,35.459c9.073,9.074,21.609,14.686,35.46,14.686 c13.85,0,26.386-5.611,35.459-14.686c9.073-9.072,14.684-21.609,14.684-35.459S105.973,35.054,96.899,25.98L96.899,25.98z"
  })
], -1));
const _hoisted_36 = [
  _hoisted_35
];
const _hoisted_37 = {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  height: "12px",
  width: "12px",
  class: "fill-green-600",
  viewBox: "0 0 122.88 121.42",
  style: { "enable-background": "new 0 0 122.88 121.42" },
  "xml:space": "preserve"
};
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("g", null, [
  /* @__PURE__ */ createBaseVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    class: "st0",
    d: "M0,121.42l0-19.63c10.5-4.67,42.65-13.56,44.16-26.41c0.34-2.9-6.5-13.96-8.07-19.26 c-3.36-5.35-4.56-13.85-0.89-19.5c1.46-2.25,0.84-10.44,0.84-13.53c0-30.77,53.92-30.78,53.92,0c0,3.89-0.9,11.04,1.22,14.1 c3.54,5.12,1.71,14.19-1.27,18.93c-1.91,5.57-9.18,16.11-8.56,19.26c2.31,11.74,32.13,19.63,41.52,23.8l0,22.23L0,121.42L0,121.42z"
  })
], -1));
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "shape-rendering": "geometricPrecision",
  "text-rendering": "geometricPrecision",
  "image-rendering": "optimizeQuality",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  viewBox: "0 0 512 511.99",
  width: "12px",
  height: "12px",
  class: "fill-green-600"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#00AB42",
    "fill-rule": "nonzero",
    d: "M256 0c70.68 0 134.68 28.67 181.01 74.99 46.32 46.32 74.99 110.32 74.99 181S483.33 390.68 437.01 437c-46.33 46.33-110.33 74.99-181.01 74.99-70.68 0-134.68-28.66-181.01-74.99C28.67 390.68 0 326.67 0 255.99c0-70.68 28.67-134.68 74.99-181C121.32 28.67 185.32 0 256 0z"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#fff",
    d: "M234.68 130.59h42.64c10.11 0 18.38 8.29 18.38 18.39v67.32h67.32c10.11 0 18.38 8.33 18.38 18.38v42.63c0 10.09-8.3 18.38-18.38 18.38H295.7v67.32c0 10.1-8.28 18.39-18.38 18.39h-42.64c-10.1 0-18.38-8.27-18.38-18.39v-67.32h-67.32c-10.08 0-18.38-8.26-18.38-18.38v-42.63c0-10.12 8.27-18.38 18.38-18.38h67.32v-67.32c0-10.12 8.27-18.39 18.38-18.39z"
  })
], -1));
const _hoisted_41 = {
  key: 4,
  class: "flex-1"
};
const _hoisted_42 = {
  key: 0,
  class: "text-lg font-bold"
};
const _hoisted_43 = { key: 1 };
const _hoisted_44 = { key: 2 };
const _hoisted_45 = ["src"];
const _hoisted_46 = ["innerHTML"];
const _hoisted_47 = {
  key: 5,
  class: "relative"
};
const _hoisted_48 = ["content", "onClick", "aria-label"];
const _hoisted_49 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex p-8" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "inline-block fill-current w-18 h-18",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
  ])
], -1));
const _hoisted_50 = [
  _hoisted_49
];
const _hoisted_51 = {
  key: 6,
  class: "relative"
};
const _hoisted_52 = ["content", "onClick", "aria-label"];
const _hoisted_53 = { class: "flex p-8" };
const _hoisted_54 = {
  key: 0,
  class: "fill-current w-18 h-18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 352 512"
};
const _hoisted_55 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, null, -1));
const _hoisted_56 = [
  _hoisted_55
];
const _hoisted_57 = {
  key: 1,
  class: "inline-block fill-current w-18 h-18 mr-1",
  viewBox: "0 1 23 22"
};
const _hoisted_58 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }, null, -1));
const _hoisted_59 = [
  _hoisted_58
];
const _hoisted_60 = ["content"];
const _hoisted_61 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline-block fill-gray-400 w-18 h-18",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z" })
], -1));
const _hoisted_62 = [
  _hoisted_61
];
const _hoisted_63 = ["content"];
const _hoisted_64 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "18",
  viewBox: "0 -960 960 960",
  width: "18",
  class: "inline-block fill-gray-400"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "m776.109-63.565-73.435-69.196q-51.302 32.573-106.091 59.145-54.788 26.572-116.255 26.572-88.94 0-167.803-33.893-78.862-33.894-138.052-93.239-59.19-59.346-93.19-138.205-34-78.86-34-167.619 0-64.607 19.12-125.521Q85.521-666.435 120-719.674l-50.848-50.848 68.761-68.761L844.87-132.326l-68.761 68.76Zm-345.392-92.653v-72.5l-52.25-52.086v-50.009l-219.01-218.752q-3 17.015-5 34.031-2 17.015-2 35.136 0 124.449 78.826 214.674 78.826 90.224 199.434 109.506Zm410.392-85.412-76.739-77.74q21.288-37.275 32.35-77.847 11.062-40.572 11.062-84.059 0-95.003-56.304-169.853-56.304-74.849-145.391-108.893v.522l-174.413 76.087v31.348L241.87-842.109q52.483-34.989 113.387-52.918 60.903-17.93 125.159-17.93 89.709 0 168.127 33.869 78.418 33.868 137.435 93.28 59.016 59.413 92.997 137.683 33.982 78.269 33.982 167.993 0 64.203-18.43 125.111-18.429 60.907-53.418 113.391Z" })
], -1));
const _hoisted_65 = [
  _hoisted_64
];
const _hoisted_66 = {
  key: 10,
  class: "relative top-1"
};
const _hoisted_67 = ["content"];
const _hoisted_68 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "m-auto",
  xmlns: "http://www.w3.org/2000/svg",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
], -1));
const _hoisted_69 = [
  _hoisted_68
];
const _hoisted_70 = {
  key: 0,
  class: "h-3 w-full absolute bottom-0"
};
const _hoisted_71 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "progress-line" }, null, -1));
const _hoisted_72 = [
  _hoisted_71
];
const _hoisted_73 = {
  key: 0,
  class: "symbology-stack default-focus-style"
};
const _hoisted_74 = { key: 0 };
const _hoisted_75 = {
  key: 0,
  class: "m-5"
};
const _hoisted_76 = {
  key: 0,
  class: "items-center grid-cols-1"
};
const _hoisted_77 = {
  key: 0,
  class: "symbologyIcon w-full p-5"
};
const _hoisted_78 = ["src"];
const _hoisted_79 = ["innerHTML"];
const _hoisted_80 = {
  key: 2,
  class: "flex-1 p-5 bg-black-75 text-white"
};
const _hoisted_81 = {
  key: 1,
  class: "flex items-center"
};
const _hoisted_82 = {
  key: 0,
  class: "symbologyIcon"
};
const _hoisted_83 = ["src"];
const _hoisted_84 = {
  key: 1,
  class: "symbologyIcon"
};
const _hoisted_85 = ["innerHTML"];
const _hoisted_86 = { class: "flex-1 ml-15" };
const _hoisted_87 = { key: 1 };
const _hoisted_88 = { class: "flex p-5 ml-48" };
const _hoisted_89 = {
  key: 0,
  class: "relative animate-spin spinner h-20 w-20 mr-10 pt-2"
};
const _hoisted_90 = { class: "flex-1 text-gray-500" };
const _hoisted_91 = {
  key: 1,
  class: "legend-group border-l-2 ml-4 pl-4"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "item",
  props: {
    legendItem: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const layerStore = useLayerStore();
    const panelStore = usePanelStore();
    const { t } = useI18n();
    const iApi = inject("iApi");
    const el = ref();
    const mobileMode = ref(panelStore.mobileView);
    const layerConfigs = computed(() => layerStore.layerConfigs);
    const symbologyStack = ref([]);
    const symbologyStackLoaded = ref(false);
    const hovered = ref(false);
    const layerType = computed(() => {
      return props.legendItem instanceof LayerItem ? toRaw(props.legendItem.layer)?.layerType : "";
    });
    const modifiableLayer = computed(() => {
      return props.legendItem instanceof LayerItem && toRaw(props.legendItem.layer)?.canModifyLayer;
    });
    const reloadableLayer = computed(() => {
      if (props.legendItem instanceof LayerItem) {
        const rawLayer = toRaw(props.legendItem.layer);
        if (rawLayer) {
          return rawLayer.canReload;
        } else {
          return true;
        }
      } else {
        return false;
      }
    });
    const isAnimationEnabled = computed(() => {
      return iApi.animate;
    });
    const isGroup = computed(() => {
      return props.legendItem.children.length > 0 || // TODO: Determine why Vue reactivity isn't picking updates to the children property of the parent.
      // isGroup is being called on the parent before the children are mapped in legend.ts. After they're mapped, isGroup isn't called again.
      props.legendItem instanceof LayerItem && toRaw(props.legendItem.layer)?.sublayers.length > 0;
    });
    const controlAvailable = (control) => {
      if (control === LegendControl.Expand || control === LegendControl.Visibility)
        return props.legendItem.controlAvailable(control);
      else
        return props.legendItem.layerControlAvailable(
          control
        );
    };
    const markdownToHtml = (md) => {
      return marked(md);
    };
    const toggleExpand = () => {
      if (props.legendItem.children.length === 0 || !controlAvailable(LegendControl.Expand)) {
        return;
      }
      props.legendItem.toggleExpanded();
      iApi.updateAlert(
        t(
          `legend.alert.group${props.legendItem.expanded ? "Expanded" : "Collapsed"}`
        )
      );
    };
    const toggleSymbology = () => {
      if (controlAvailable(LayerControl.Symbology)) {
        const expanded = props.legendItem.toggleSymbology();
        iApi.updateAlert(
          t(`legend.alert.symbology${expanded ? "Expanded" : "Collapsed"}`)
        );
      }
    };
    const toggleGrid = () => {
      if (controlAvailable(LayerControl.Datatable) && getDatagridExists()) {
        iApi.event.emit(
          GlobalEvents.GRID_TOGGLE,
          props.legendItem.layer
        );
      }
    };
    const getLegendGraphic = (item) => {
      const span = document.createElement("span");
      span.innerHTML = item.svgcode;
      const svg = span.firstElementChild;
      svg?.classList.add("max-w-full");
      svg?.classList.add("h-full");
      svg?.setAttribute("height", item.imgHeight);
      svg?.setAttribute("width", item.imgWidth);
      return span.outerHTML;
    };
    const getDatagridExists = () => {
      try {
        return iApi.fixture.exists("grid");
      } catch (e) {
        return false;
      }
    };
    const reloadLayer = () => {
      props.legendItem.reload();
      setTimeout(() => {
        const layerItemProp = props.legendItem;
        let recreateFromConfig = true;
        if (layerItemProp.layer) {
          toRaw(layerItemProp.layer).reload();
          recreateFromConfig = false;
        } else if (layerItemProp.isSublayer && layerItemProp.parentLayerId) {
          const testParent = iApi.geo.layer.getLayer(
            layerItemProp.parentLayerId
          );
          if (testParent) {
            toRaw(testParent).reload();
            recreateFromConfig = false;
          }
        }
        if (recreateFromConfig) {
          const targetId = layerItemProp.isSublayer ? layerItemProp.parentLayerId : layerItemProp.layerId;
          const layerConfig = layerConfigs.value.find(
            (lc) => lc.id === targetId
          );
          if (layerConfig !== void 0) {
            recreateLayer(layerConfig);
          }
        }
        props.legendItem.loadPromise.catch(() => {
        });
      }, 400);
    };
    const recreateLayer = async (layerConfig) => {
      try {
        const checkLayer = iApi.geo.layer.getLayer(layerConfig.id);
        if (checkLayer) {
          const [reloadErr] = await to(toRaw(checkLayer).reload());
          if (reloadErr) {
            throw new Error();
          } else {
            return checkLayer;
          }
        } else {
          const layer = iApi.geo.layer.createLayer(layerConfig);
          await iApi.geo.map.addLayer(layer).catch(() => {
            throw new Error();
          });
          return layer;
        }
      } catch {
        return;
      }
    };
    const cancelOrRemoveLayer = () => {
      const layerItem = toRaw(props.legendItem);
      let safetyCount = 0;
      if (layerItem.type === LegendType.Error) {
        props.legendItem.toggleHidden(true);
        const removalWatcher = setInterval(() => {
          const rampL = layerItem.layer;
          if (rampL && (rampL.layerExists || rampL.initiationState === InitiationState.NEW || rampL.initiationState === InitiationState.TERMINATING || rampL.initiationState === InitiationState.TERMINATED) || safetyCount > 1200) {
            clearInterval(removalWatcher);
            if (rampL) {
              iApi.geo.map.removeLayer(rampL);
            }
            layerStore.removeLayerConfig(layerItem.layerId);
            iApi.fixture.get("legend")?.removeLayerItem(layerItem.layerId);
          }
          safetyCount++;
        }, 250);
      } else {
        props.legendItem.error();
        const cancelWatcher = setInterval(() => {
          const parentmostId = layerItem.parentLayerId || layerItem.layerId;
          const parentLayer = iApi.geo.layer.getLayer(parentmostId);
          if (parentLayer) {
            clearInterval(cancelWatcher);
            parentLayer.cancelLoad();
            const affectedBlocks = iApi.fixture.get("legend")?.getLayerBoundItems(parentLayer) || [];
            affectedBlocks.forEach((block) => block.error());
          }
          if (safetyCount > 1200) {
            clearInterval(cancelWatcher);
          }
          safetyCount++;
        }, 50);
      }
    };
    const loadSymbologyStack = () => {
      props.legendItem.loadPromise.then(() => {
        symbologyStack.value = [];
        if (!props.legendItem.layer) {
          console.warn(
            "Attempted to mount legend item component with undefined layer"
          );
          return;
        }
        Promise.all(
          toRaw(
            props.legendItem.symbologyStack.map(
              (item) => item.drawPromise
            )
          )
        ).then(() => {
          symbologyStack.value = props.legendItem.symbologyStack;
          symbologyStackLoaded.value = true;
        });
      }).catch(() => {
      });
    };
    const hover = (t2) => {
      hovered.value = true;
      setTimeout(() => {
        if (hovered.value)
          mobileMode.value ? null : t2._tippy?.show();
      }, 300);
    };
    if (props.legendItem instanceof LayerItem) {
      loadSymbologyStack();
      watch(
        () => props.legendItem.symbologyStack,
        () => {
          loadSymbologyStack();
        }
      );
    }
    return (_ctx, _cache) => {
      const _component_item = resolveComponent("item", true);
      const _directive_tippy = resolveDirective("tippy");
      const _directive_truncate = resolveDirective("truncate");
      const _directive_focus_item = resolveDirective("focus-item");
      const _directive_focus_list = resolveDirective("focus-list");
      return !__props.legendItem.hidden ? (openBlock(), createElementBlock("div", {
        key: `${__props.legendItem.uid}-${__props.legendItem.visibility}`,
        ref_key: "el",
        ref: el
      }, [
        createBaseVNode("div", _hoisted_1, [
          withDirectives((openBlock(), createElementBlock("div", {
            class: normalizeClass(["flex items-center hover:bg-gray-200 default-focus-style !p-5", [
              __props.legendItem.type === unref(LegendType).Item ? "loaded-item" : __props.legendItem.type === unref(LegendType).Error ? "non-loaded-item bg-red-200" : "non-loaded-item",
              isGroup.value && controlAvailable(unref(LegendControl).Expand) || !isGroup.value && __props.legendItem instanceof unref(LayerItem) && controlAvailable(unref(LayerControl).Datatable) && getDatagridExists() && __props.legendItem.type === unref(LegendType).Item ? "cursor-pointer" : "cursor-default"
            ]]),
            onMouseover: _cache[16] || (_cache[16] = withModifiers(($event) => hover($event.currentTarget), ["stop"])),
            onMouseout: _cache[17] || (_cache[17] = ($event) => (
              //@ts-ignore
              (mobileMode.value ? null : $event.currentTarget?._tippy?.hide(), hovered.value = false)
            )),
            onClick: _cache[18] || (_cache[18] = () => {
              if (!isGroup.value && __props.legendItem instanceof unref(LayerItem) && controlAvailable(unref(LayerControl).Datatable) && getDatagridExists() && __props.legendItem.type === unref(LegendType).Item) {
                toggleGrid();
              } else if (isGroup.value) {
                toggleExpand();
              }
            }),
            content: isGroup.value && controlAvailable(unref(LegendControl).Expand) ? unref(t)(
              __props.legendItem.expanded ? "legend.group.collapse" : "legend.group.expand"
            ) : __props.legendItem instanceof unref(LayerItem) && __props.legendItem.type === unref(LegendType).Item && controlAvailable(unref(LayerControl).Datatable) && getDatagridExists() ? unref(t)("legend.layer.data") : "",
            "truncate-trigger": ""
          }, [
            __props.legendItem.type !== unref(LegendType).Item ? (openBlock(), createElementBlock("div", _hoisted_3, [
              __props.legendItem.type === unref(LegendType).Placeholder ? (openBlock(), createElementBlock("svg", _hoisted_4, _hoisted_12)) : (openBlock(), createElementBlock("svg", _hoisted_13, _hoisted_21))
            ])) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) && __props.legendItem.layer.legend.length > 0 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "relative w-32 h-32 mr-15",
              onMouseover: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                onClick: withModifiers(toggleSymbology, ["stop"]),
                class: normalizeClass([
                  controlAvailable(unref(LayerControl).Symbology) ? "cursor-pointer" : "cursor-default"
                ]),
                disabled: !controlAvailable(unref(LayerControl).Symbology),
                content: __props.legendItem instanceof unref(LayerItem) && __props.legendItem.symbologyExpanded ? unref(t)("legend.symbology.hide") : unref(t)("legend.symbology.expand"),
                "aria-label": __props.legendItem instanceof unref(LayerItem) && __props.legendItem.symbologyExpanded ? unref(t)("legend.symbology.hide") : unref(t)("legend.symbology.expand")
              }, [
                !__props.legendItem.coverIcon ? (openBlock(), createBlock(SymbologyStack, {
                  key: 0,
                  class: normalizeClass([{
                    "pointer-events-none": !controlAvailable(
                      unref(LayerControl).Symbology
                    )
                  }, "w-32 h-32"]),
                  visible: __props.legendItem instanceof unref(LayerItem) && __props.legendItem.symbologyExpanded,
                  legendItem: __props.legendItem
                }, null, 8, ["class", "visible", "legendItem"])) : (openBlock(), createElementBlock("img", {
                  key: 1,
                  class: normalizeClass([{
                    "pointer-events-none": !controlAvailable(
                      unref(LayerControl).Symbology
                    )
                  }, "w-32 h-32 hover:scale-105"]),
                  src: __props.legendItem.coverIcon,
                  alt: "Cover icon not found :("
                }, null, 10, _hoisted_23))
              ], 10, _hoisted_22)), [
                [_directive_tippy, {
                  placement: "bottom-start"
                }]
              ])
            ], 32)) : createCommentVNode("", true),
            isGroup.value && controlAvailable(unref(LegendControl).Expand) ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(["expand-toggle p-8 pointer-events-none", { "rotate-180": __props.legendItem.expanded }])
            }, _hoisted_25, 2)) : createCommentVNode("", true),
            __props.legendItem instanceof unref(LayerItem) ? withDirectives((openBlock(), createElementBlock("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                withDirectives((openBlock(), createElementBlock("div", _hoisted_28, [
                  createBaseVNode("span", null, toDisplayString(__props.legendItem.name ?? (!__props.legendItem.layer || __props.legendItem?.layer?.name === "" ? __props.legendItem.layerId : __props.legendItem.layer?.name)), 1)
                ])), [
                  [_directive_truncate, {
                    externalTrigger: true,
                    noTruncateClass: true
                  }]
                ])
              ]),
              __props.legendItem.type !== unref(LegendType).Placeholder ? withDirectives((openBlock(), createElementBlock("div", {
                key: 0,
                class: "ml-5 flex-none text-[11px] flex flex-row gap-2 mt-[-5px] flex-wrap w-fit",
                onMouseover: _cache[7] || (_cache[7] = withModifiers(() => {
                }, ["stop"]))
              }, [
                withDirectives(createVNode(_sfc_main$1, {
                  layerType: __props.legendItem.layer?.layerType,
                  featureCount: __props.legendItem.layer?.featureCount,
                  onKeypress: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"])),
                  onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                  }, ["stop"]))
                }, null, 8, ["layerType", "featureCount"]), [
                  [_directive_focus_item]
                ]),
                __props.legendItem instanceof unref(LayerItem) && controlAvailable(unref(LayerControl).Datatable) && getDatagridExists() && __props.legendItem.type === unref(LegendType).Item ? withDirectives((openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  label: "",
                  content: "Datatable available (click to view)"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock("svg", _hoisted_29, _hoisted_31))
                  ]),
                  _: 1
                })), [
                  [_directive_focus_item]
                ]) : createCommentVNode("", true),
                __props.legendItem._visibility ? withDirectives((openBlock(), createBlock(_sfc_main$2, {
                  key: 1,
                  label: "",
                  content: __props.legendItem.layer?.canIdentify() ? "Identify available (click map)" : "Identify disabled or unavailable",
                  onKeypress: _cache[3] || (_cache[3] = withModifiers(() => {
                  }, ["stop"])),
                  onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                  }, ["stop"]))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock("svg", {
                      class: normalizeClass([
                        __props.legendItem.layer?.canIdentify() ? "fill-gray-800" : "fill-red-500"
                      ]),
                      version: "1.1",
                      id: "Layer_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      width: "12px",
                      height: "12px",
                      viewBox: "0 0 122.879 119.799",
                      "enable-background": "new 0 0 122.879 119.799",
                      "xml:space": "preserve"
                    }, _hoisted_33, 2)),
                    !__props.legendItem.layer?.canIdentify() ? (openBlock(), createElementBlock("svg", _hoisted_34, _hoisted_36)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["content"])), [
                  [_directive_focus_item]
                ]) : createCommentVNode("", true),
                __props.legendItem.layer?.userAdded ? withDirectives((openBlock(), createBlock(_sfc_main$2, {
                  key: 2,
                  label: "User",
                  content: "User-added layer (will not save across sessions)",
                  onKeypress: _cache[5] || (_cache[5] = withModifiers(() => {
                  }, ["stop"])),
                  onClick: _cache[6] || (_cache[6] = withModifiers(() => {
                  }, ["stop"]))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock("svg", _hoisted_37, _hoisted_39)),
                    _hoisted_40
                  ]),
                  _: 1
                })), [
                  [_directive_focus_item]
                ]) : createCommentVNode("", true)
              ], 32)), [
                [_directive_focus_list, "horizontal"]
              ]) : createCommentVNode("", true)
            ])), [
              [_directive_truncate]
            ]) : __props.legendItem instanceof unref(SectionItem) ? (openBlock(), createElementBlock("div", _hoisted_41, [
              __props.legendItem.infoType === unref(InfoType).Title && __props.legendItem.content ? (openBlock(), createElementBlock("h3", _hoisted_42, toDisplayString(__props.legendItem.content), 1)) : __props.legendItem.infoType === unref(InfoType).Title ? (openBlock(), createElementBlock("h3", _hoisted_43, toDisplayString(__props.legendItem.name), 1)) : __props.legendItem.infoType === unref(InfoType).Text ? (openBlock(), createElementBlock("p", _hoisted_44, toDisplayString(__props.legendItem.content), 1)) : __props.legendItem.infoType === unref(InfoType).Image ? (openBlock(), createElementBlock("img", {
                key: 3,
                src: __props.legendItem.content,
                alt: "InfoType image not found :("
              }, null, 8, _hoisted_45)) : __props.legendItem.infoType === unref(InfoType).Markdown ? (openBlock(), createElementBlock("div", {
                key: 4,
                class: "ramp-markdown",
                innerHTML: markdownToHtml(__props.legendItem.content)
              }, null, 8, _hoisted_46)) : (openBlock(), createBlock(resolveDynamicComponent(`${__props.legendItem.uid}-info-section`), { key: 5 }))
            ])) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Error && reloadableLayer.value ? (openBlock(), createElementBlock("div", _hoisted_47, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: unref(t)("legend.layer.controls.reload"),
                onMouseover: _cache[8] || (_cache[8] = withModifiers(() => {
                }, ["stop"])),
                onClick: withModifiers(reloadLayer, ["stop"]),
                "aria-label": unref(t)("legend.layer.controls.reload")
              }, _hoisted_50, 40, _hoisted_48)), [
                [_directive_tippy, {
                  placement: "top-start"
                }]
              ])
            ])) : createCommentVNode("", true),
            __props.legendItem.type !== unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) ? (openBlock(), createElementBlock("div", _hoisted_51, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: __props.legendItem.type === unref(LegendType).Error ? unref(t)("legend.layer.controls.remove") : unref(t)("legend.layer.controls.cancel"),
                onMouseover: _cache[9] || (_cache[9] = withModifiers(() => {
                }, ["stop"])),
                onClick: withModifiers(cancelOrRemoveLayer, ["stop"]),
                "aria-label": __props.legendItem.type === unref(LegendType).Error ? unref(t)("legend.layer.controls.remove") : unref(t)("legend.layer.controls.cancel")
              }, [
                createBaseVNode("div", _hoisted_53, [
                  __props.legendItem.type === unref(LegendType).Placeholder ? (openBlock(), createElementBlock("svg", _hoisted_54, _hoisted_56)) : (openBlock(), createElementBlock("svg", _hoisted_57, _hoisted_59))
                ])
              ], 40, _hoisted_52)), [
                [_directive_tippy, {
                  placement: "top-start"
                }]
              ])
            ])) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) ? (openBlock(), createBlock(LegendOptions, {
              key: 7,
              legendItem: __props.legendItem
            }, null, 8, ["legendItem"])) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) && __props.legendItem.layerOffscale ? withDirectives((openBlock(), createElementBlock("div", {
              key: 8,
              class: "relative p-4 cursor-default",
              content: unref(t)("legend.layer.offscale"),
              onMouseover: _cache[10] || (_cache[10] = withModifiers(() => {
              }, ["stop"])),
              onClick: _cache[11] || (_cache[11] = withModifiers(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, _hoisted_62, 40, _hoisted_60)), [
              [_directive_tippy, {
                placement: "top-start"
              }]
            ]) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) && !__props.legendItem.layer?.mapLayer ? withDirectives((openBlock(), createElementBlock("div", {
              key: 9,
              class: "relative p-4 cursor-default",
              content: unref(t)("legend.layer.data.only"),
              onMouseover: _cache[12] || (_cache[12] = withModifiers(() => {
              }, ["stop"])),
              onClick: _cache[13] || (_cache[13] = withModifiers(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, _hoisted_65, 40, _hoisted_63)), [
              [_directive_tippy, {
                placement: "top-end"
              }]
            ]) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) && __props.legendItem.layerOffscale ? (openBlock(), createElementBlock("div", _hoisted_66, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                class: "p-4",
                content: unref(t)("legend.layer.zoomToVisible"),
                onMouseover: _cache[14] || (_cache[14] = withModifiers(() => {
                }, ["stop"])),
                onClick: _cache[15] || (_cache[15] = withModifiers(($event) => __props.legendItem.layer.zoomToVisibleScale(), ["stop"]))
              }, _hoisted_69, 40, _hoisted_67)), [
                [_directive_tippy, {
                  placement: "top-start"
                }]
              ])
            ])) : __props.legendItem.type === unref(LegendType).Item && controlAvailable(unref(LegendControl).Visibility) ? (openBlock(), createBlock(_sfc_main$5, {
              key: 11,
              checked: __props.legendItem.visibility,
              value: __props.legendItem,
              isRadio: __props.legendItem.parent && __props.legendItem.parent.exclusive,
              legendItem: __props.legendItem,
              disabled: __props.legendItem instanceof unref(LayerItem) && !__props.legendItem.layerControlAvailable(
                unref(LayerControl).Visibility
              ),
              label: isGroup.value ? "Group" : "Layer"
            }, null, 8, ["checked", "value", "isRadio", "legendItem", "disabled", "label"])) : createCommentVNode("", true)
          ], 42, _hoisted_2)), [
            [_directive_focus_item, "show-truncate"],
            [_directive_tippy, {
              placement: "bottom-start",
              trigger: "manual focus",
              aria: "describedby"
            }]
          ]),
          __props.legendItem.type === unref(LegendType).Placeholder || __props.legendItem instanceof unref(LayerItem) && __props.legendItem.layerRedrawing && __props.legendItem.visibility ? (openBlock(), createElementBlock("div", _hoisted_70, _hoisted_72)) : createCommentVNode("", true)
        ]),
        __props.legendItem instanceof unref(LayerItem) && __props.legendItem.symbologyExpanded ? withDirectives((openBlock(), createElementBlock("div", _hoisted_73, [
          symbologyStack.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_74, [
            __props.legendItem instanceof unref(LayerItem) && __props.legendItem.description ? (openBlock(), createElementBlock("p", _hoisted_75, toDisplayString(__props.legendItem.description), 1)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(symbologyStack.value, (item) => {
              return openBlock(), createElementBlock("div", {
                class: "m-5",
                key: item.uid
              }, [
                item.imgUrl && __props.legendItem.symbologyRenderStyle === "images" || !item.imgUrl && layerType.value === "ogc-wms" ? (openBlock(), createElementBlock("div", _hoisted_76, [
                  item.imgUrl ? (openBlock(), createElementBlock("div", _hoisted_77, [
                    createBaseVNode("img", {
                      class: "max-w-full",
                      src: item.imgUrl
                    }, null, 8, _hoisted_78)
                  ])) : item.imgHeight ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: "symbologyIcon w-full p-5",
                    innerHTML: getLegendGraphic(item)
                  }, null, 8, _hoisted_79)) : createCommentVNode("", true),
                  item.label ? withDirectives((openBlock(), createElementBlock("div", _hoisted_80, [
                    createBaseVNode("span", null, toDisplayString(item.label), 1),
                    !item.imgUrl && symbologyStack.value.length > 1 || item.imgUrl && item.definitionClause ? (openBlock(), createBlock(_sfc_main$5, {
                      key: 0,
                      class: "float-right",
                      value: item,
                      legendItem: __props.legendItem,
                      checked: item.visibility,
                      disabled: !controlAvailable(unref(LayerControl).Visibility),
                      label: "Symbol"
                    }, null, 8, ["value", "legendItem", "checked", "disabled"])) : createCommentVNode("", true)
                  ])), [
                    [_directive_truncate]
                  ]) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_81, [
                  item.imgUrl ? (openBlock(), createElementBlock("div", _hoisted_82, [
                    createBaseVNode("img", {
                      class: "w-32 h-32",
                      src: item.imgUrl
                    }, null, 8, _hoisted_83)
                  ])) : item.svgcode ? (openBlock(), createElementBlock("div", _hoisted_84, [
                    createBaseVNode("span", {
                      innerHTML: item.svgcode
                    }, null, 8, _hoisted_85)
                  ])) : createCommentVNode("", true),
                  withDirectives((openBlock(), createElementBlock("div", _hoisted_86, [
                    createTextVNode(toDisplayString(item.label), 1)
                  ])), [
                    [_directive_truncate]
                  ]),
                  modifiableLayer.value && __props.legendItem.layer.supportsFeatures && (!item.imgUrl && symbologyStack.value.length > 1 || item.imgUrl && item.definitionClause) ? (openBlock(), createBlock(_sfc_main$5, {
                    key: 2,
                    value: item,
                    legendItem: __props.legendItem,
                    checked: item.visibility,
                    disabled: !controlAvailable(unref(LayerControl).Visibility),
                    label: "Symbol"
                  }, null, 8, ["value", "legendItem", "checked", "disabled"])) : createCommentVNode("", true)
                ]))
              ]);
            }), 128))
          ])) : createCommentVNode("", true),
          !symbologyStackLoaded.value ? (openBlock(), createElementBlock("div", _hoisted_87, [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_88, [
              isAnimationEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_89)) : createCommentVNode("", true),
              withDirectives((openBlock(), createElementBlock("div", _hoisted_90, [
                createBaseVNode("span", null, toDisplayString(unref(t)("legend.symbology.loading")), 1)
              ])), [
                [_directive_truncate]
              ])
            ])), [
              [_directive_truncate]
            ])
          ])) : createCommentVNode("", true)
        ])), [
          [_directive_focus_item]
        ]) : createCommentVNode("", true),
        __props.legendItem.expanded ? (openBlock(), createElementBlock("div", _hoisted_91, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.legendItem.children, (item) => {
            return openBlock(), createBlock(_component_item, {
              legendItem: item,
              key: item.uid
            }, null, 8, ["legendItem"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});

const item_vue_vue_type_style_index_0_scoped_864159da_lang = '';

const item = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-864159da"]]);

export { item as default };
