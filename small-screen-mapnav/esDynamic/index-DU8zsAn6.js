import { i4 as S, bN as t, bT as i, bC as H, bD as N, bE as D, kE as M, bJ as V, bR as w, bM as y, fC as c, bQ as v, hc as C, bF as k, bG as P, bH as T, bI as Z, bK as E, bS as F, bL as d, fI as h, bU as _, bV as L, fD as A, kF as O, bx as j, fK as G } from "./main-awKEFivJ.js";
const K = {}, Q = { class: "border-b p-0 self-center w-2/3" };
function U(g, a) {
  return t(), i("span", Q);
}
const z = /* @__PURE__ */ S(K, [["render", U]]), W = /* @__PURE__ */ H({
  __name: "zoom-nav",
  setup(g) {
    const { t: a } = N(), n = D("iApi"), e = M(400, !0, () => n.geo.map.zoomIn()), s = M(400, !0, () => n.geo.map.zoomOut());
    return (r, o) => {
      const p = V("mapnav-button");
      return t(), i("div", null, [
        w(p, {
          onClickFunction: v(e),
          tooltip: v(a)("mapnav.zoomIn")
        }, {
          default: y(() => o[0] || (o[0] = [
            c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              c("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              c("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        w(z),
        w(p, {
          onClickFunction: v(s),
          tooltip: v(a)("mapnav.zoomOut")
        }, {
          default: y(() => o[1] || (o[1] = [
            c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              c("path", { d: "M19 13H5v-2h14v2z" }),
              c("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"])
      ]);
    };
  }
}), Y = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, q = ["content"], J = {
  key: 1,
  class: "mapnav-section bg-white-75 hover:bg-white"
}, R = ["content"], X = /* @__PURE__ */ H({
  __name: "mapnav",
  setup(g) {
    const a = C(), { t: n } = N(), e = k(), s = k(window.innerHeight), r = k(!1), o = () => {
      s.value = window.innerHeight;
    }, p = () => {
      e.value._tippy.hide();
    }, f = (l) => {
      l.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    P(() => {
      e.value?.addEventListener("blur", p), e.value?.addEventListener("keyup", f), window.addEventListener("resize", o);
    }), T(() => {
      e.value?.removeEventListener("blur", p), e.value?.removeEventListener("keyup", f), window.removeEventListener("resize", o);
    });
    const b = Z(() => a.order.map((l) => a.items[l]).filter((l) => l.componentId));
    return (l, m) => {
      const B = V("mapnav-button"), $ = E("focus-list"), I = E("tippy");
      return t(), i("div", Y, [
        F((t(), i("div", {
          class: "flex flex-col",
          content: v(n)("panels.controls.items"),
          ref_key: "el",
          ref: e
        }, [
          w(W, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          m[1] || (m[1] = c("span", { class: "py-1" }, null, -1)),
          s.value <= 460 ? (t(), d(B, {
            key: 0,
            class: "mapnav-section bg-white-75 hover:bg-white self-center",
            onClickFunction: () => {
              r.value = !r.value;
            },
            tooltip: r.value ? l.$t("mapnav.closeMenu") : l.$t("mapnav.openMenu")
          }, {
            default: y(() => [
              (t(), i("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "shape-rendering": "geometricPrecision",
                "text-rendering": "geometricPrecision",
                "image-rendering": "optimizeQuality",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                viewBox: "0 0 319 511.61",
                class: A(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": r.value }])
              }, m[0] || (m[0] = [
                c("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)
              ]), 2))
            ]),
            _: 1
          }, 8, ["onClickFunction", "tooltip"])) : h("", !0),
          s.value > 460 ? (t(), i("div", J, [
            (t(!0), i(_, null, L(b.value, (u, x) => (t(), i(_, {
              key: u.id + "button"
            }, [
              (t(), d(O(u.id + "-nav-button"))),
              x !== b.value.length - 1 ? (t(), d(z, {
                key: 0,
                class: "mapnav-divider"
              })) : h("", !0)
            ], 64))), 128))
          ])) : h("", !0)
        ], 8, q)), [
          [$],
          [I, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]),
        s.value <= 460 && r.value ? F((t(), i("div", {
          key: 0,
          class: A(["absolute right-56 bottom-36 sm:bottom-48 mapnav-section flex flex-col flex-wrap gap-x-1 items-start", { "h-[165px]": s.value <= 400, "h-[99px]": s.value <= 340 }]),
          content: v(n)("panels.controls.items")
        }, [
          (t(!0), i(_, null, L(b.value, (u, x) => (t(), i(_, {
            key: u.id + "button"
          }, [
            (t(), d(O(u.id + "-nav-button"), { class: "mapnav-section bg-white-75 hover:bg-white" })),
            x !== b.value.length - 1 ? (t(), d(z, {
              key: 0,
              class: "mapnav-divider"
            })) : h("", !0)
          ], 64))), 128))
        ], 10, R)), [
          [$],
          [I, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]) : h("", !0)
      ]);
    };
  }
}), ee = /* @__PURE__ */ S(X, [["__scopeId", "data-v-5379aa94"]]);
class te extends j {
  mapnavStore = C(this.$vApp.$pinia);
  /**
   * Returns `MapnavFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {MapnavFixtureConfig}
   * @memberof MapnavFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {MapnavFixtureConfig} [mapnavConfig]
   * @returns
   * @memberof MapnavAPI
   */
  _parseConfig(a) {
    if (!a)
      return;
    const n = a.items.map((e) => ({
      id: e
    }));
    this.mapnavStore.items = n.reduce((e, s) => (e[s.id] = s, e), {}), this.mapnavStore.order = n.map((e) => e.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const a = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((n) => {
      (this.$iApi.fixture.exists(n) || a.includes(n)) && (this.mapnavStore.items[n].componentId = `${n}-nav-button`);
    });
  }
}
const ne = { en: { "mapnav.openMenu": "Open navigation", "mapnav.closeMenu": "Close navigation", "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.openMenu": "Ouvrir la navigation", "mapnav.closeMenu": "Fermer la navigation", "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class ae extends te {
  async added() {
    Object.entries(ne).forEach((o) => this.$iApi.$i18n.mergeLocaleMessage(...o));
    const { destroy: a, el: n } = this.mount(ee, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(n.childNodes[0]), this._parseConfig(this.config);
    const s = this.$vApp.$watch(
      () => this.config,
      (o) => this._parseConfig(o)
    ), r = this.$iApi.event.on(G.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      s(), this.$iApi.event.off(r);
      const o = C(this.$vApp.$pinia), p = { ...o.items };
      Object.keys(p).forEach((f) => o.removeItem(f)), o.$reset(), a();
    };
  }
}
export {
  ae as default
};
//# sourceMappingURL=index-DU8zsAn6.js.map
