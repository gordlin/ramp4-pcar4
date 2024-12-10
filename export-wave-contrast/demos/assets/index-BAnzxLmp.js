import { a as fabric } from './fabric-B0RbPy7H.js';
import { bA as FixtureInstance, bC as Point, bB as merge } from './main-CLKD9wBG.js';
import './preload-helper-dJJaZANz.js';

class ExportNorthArrowFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.mapElements;
  }
  async make(options) {
    let calculateNorthArrowAngle = (normalizedPositionX2) => {
      return 0;
    };
    let normalizedPositionX = 0;
    const arrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.06 96.62"><g transform="translate(-1.438 30.744)"><g fill="none" stroke="#000"><path d="m61 35c0 16.02-12.984 29-29 29-16.02 0-29-12.984-29-29 0-16.02 12.984-29 29-29 16.02 0 29 12.984 29 29z" stroke-width="3"/><path d="m55 35c0 12.979-10.521 23.5-23.5 23.5-12.979 0-23.5-10.521-23.5-23.5 0-12.979 10.521-23.5 23.5-23.5 12.979 0 23.5 10.521 23.5 23.5z" transform="matrix(1.01148 0 0 .99988-.089.004)" stroke-width=".497"/><path d="m32 35v-32" stroke-width=".25"/></g><path d="m32-9.453l28.938 73.826-29-29-29 29z" fill="#fff" stroke="#fff" stroke-width="3"/><path d="m32-9.453l29 73.45-29-29-29 29z" fill="none" stroke="#000" stroke-linecap="square"/><text x="22.71" y="-10.854" font-family="OPEN SANS" word-spacing="0" line-height="125%" letter-spacing="0" font-size="40"><tspan x="22.71" y="-10.854" font-family="Adobe Heiti Std R" font-size="26">N</tspan></text></g><g transform="translate(0-3.829)" fill="none" stroke="#000" stroke-width=".25"><path d="m4 92.82l6.74-3.891"/><path d="m4.603 90.7l10.397-6"/><path d="m3 95.17l4-2.309"/><path d="m5.442 88.45l13.856-8"/><path d="m12 72.26l18.686-10.812"/><path d="m14.593 65.45l16.09-9.291"/><path d="m15.343 63.24l15.343-8.858"/><path d="m16.877 60.58l13.809-7.972"/><path d="m17.511 58.45l13.174-7.606"/><path d="m18.412 56.15l12.274-7.087"/><path d="m19 54.04l11.427-6.597"/><path d="m20 51.757l10.822-6.311"/><path d="m20.826 49.45l9.86-5.693"/><path d="m21.48 47.3l9.206-5.315"/><path d="m23 44.647l7.686-4.437"/><path d="m23.744 42.45l6.928-4"/><path d="m24.549 40.21l6.137-3.543"/><path d="m25 38.18l5.686-3.283"/><path d="m26.663 35.446l4.02-2.323"/><path d="m27.617 33.12l3.069-1.772"/><path d="m28 31.13l2.686-1.551"/><path d="m29.15 28.694l1.534-.886"/><path d="m13 69.909l17.686-10.211"/><path d="m9.206 79.19l21.48-12.402"/><path d="m8.36 81.45l22.326-12.89"/><path d="m7.671 83.62l19.946-11.516"/><path d="m6.137 86.27l17.02-9.827"/><path d="m10 76.956l20.686-11.943"/><path d="m11.279 74.45l19.407-11.205"/><path d="m14 67.56l16.686-9.634"/><path d="m30.562 65.744v-43.566" transform="translate(0 3.829)"/></g></svg>';
    const innerShell = document.querySelector(".inner-shell");
    const sr = this.$iApi.geo.map.getSR();
    let angle = 0;
    if (sr.isWebMercator()) {
      angle = 0;
    } else {
      const arrowWidth = 50;
      const pole = new Point("pole", { x: -96, y: 90 });
      const projPole = await this.$iApi.geo.proj.projectGeometry(sr, pole);
      const poleScreenPos = this.$iApi.geo.map.mapPointToScreenPoint(projPole);
      const bcScreenPos = {
        screenX: innerShell.clientWidth / 2,
        screenY: innerShell.clientHeight
      };
      angle = Math.atan(
        (poleScreenPos.screenX - bcScreenPos.screenX) / (bcScreenPos.screenY - poleScreenPos.screenY)
      ) * 180 / Math.PI;
      const arrowLeft = innerShell.clientWidth / 2 + innerShell.clientHeight * Math.tan(angle * Math.PI / 180) - arrowWidth / 2;
      const positionX = Math.round(arrowLeft / innerShell.clientWidth * 100);
      normalizedPositionX = Math.min(Math.max(positionX, 0), 100);
      calculateNorthArrowAngle = (normalizedPositionX2) => {
        if (normalizedPositionX2 < 0 || normalizedPositionX2 > 100) {
          throw new Error("Normalized position must be between 0 and 100");
        }
        const screenPosX = innerShell.clientWidth * normalizedPositionX2 / 100;
        return Math.atan((poleScreenPos.screenX - screenPosX) / (arrowWidth / 2 - poleScreenPos.screenY)) * (180 / Math.PI);
      };
    }
    const fbImgConfig = {
      top: 0,
      left: 0,
      originX: "center",
      originY: "center",
      angle
    };
    const group = [];
    let loadedObjects = new fabric.fabric.Group();
    fabric.fabric.loadSVGFromString(
      arrowSVG,
      () => {
        loadedObjects = new fabric.fabric.Group(group);
        loadedObjects.positionX = normalizedPositionX;
        loadedObjects.getAngleFromPosition = calculateNorthArrowAngle;
      },
      (_, object) => {
        group.push(object);
      }
    );
    loadedObjects.set(merge(fbImgConfig, options || {}));
    return Promise.resolve(loadedObjects);
  }
}

export { ExportNorthArrowFixture as default };