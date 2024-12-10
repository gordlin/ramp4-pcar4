import { bx as n, ha as l, hb as r } from "./main-BLBMGEjI.js";
import o from "./screen-Bhrea4K3.js";
class g extends n {
  /**
   * Opens the settings panel. Passes the provided LayerInstance object to the panel.
   *
   * @param {LayerInstance} layer controlled layer
   * @param {boolean} open force panel open or closed
   */
  toggleSettings(e, s) {
    const t = this.$iApi.panel.get("settings");
    if (!t.isOpen && s !== !1)
      this.$iApi.panel.open({
        id: "settings",
        props: { layer: e }
      });
    else {
      const a = t.route.props.layer.uid;
      s !== !0 && t.close(), a !== e.uid && setTimeout(() => {
        this.$iApi.panel.open({
          id: "settings",
          props: { layer: e }
        });
      }, 100);
    }
  }
}
const c = { en: { "settings.title": "Settings", "settings.layer.loading": "The layer is loading...", "settings.label.display": "Display", "settings.label.visibility": "Show layer", "settings.label.opacity": "Opacity", "settings.label.boundingBox": "Bounding box", "settings.label.data": "Data", "settings.label.identify": "Toggle identify", "settings.label.interval": "Refresh interval", "settings.label.refreshHint": "Refresh interval in minutes", "settings.label.refreshOff": " Leave blank or 0 to turn off automatic refresh", "settings.label.no.layer": "The layer has been removed" }, fr: { "settings.title": "Paramètres", "settings.layer.loading": "La couche est en cours de chargement...", "settings.label.display": "Affichage", "settings.label.visibility": "Afficher la couche", "settings.label.opacity": "Opacité", "settings.label.boundingBox": "Zone de délimitation", "settings.label.data": "Données", "settings.label.identify": "Basculer vers la désignation", "settings.label.interval": "Intervalle d'actualisation", "settings.label.refreshHint": "Intervalle d'actualisation en minutes", "settings.label.refreshOff": "Laisser le champ vide ou y inscrire 0 pour désactiver l'actualisation automatique", "settings.label.no.layer": "La couche a été supprimée." } };
class h extends g {
  async added() {
    this.$iApi.panel.register(
      {
        settings: {
          screens: {
            "settings-screen-content": l(o)
          },
          style: {
            width: "350px"
          },
          button: {
            tooltip: "settings.title",
            // https://fonts.google.com/icons?selected=Material%20Icons%3Asettings
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none" /><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" /></g></svg>'
          },
          alertName: "settings.title"
        }
      },
      { i18n: { messages: c } }
    ), this.handlePanelTeleports(["settings"]);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && r(this.$vApp.$pinia).removeButton("settings"), this.$iApi.panel.remove("settings");
  }
}
export {
  h as default
};
//# sourceMappingURL=index-CakZGowB.js.map
