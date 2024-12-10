import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper-DFZxPxc3.js';
import { z as geo, A as createInstance } from './main-CI1sR_n3.js';

var SAMPLE_KEY = 'sample';
            var currentUrl = new URL(window.location.href);

            document.getElementById('selectConfig').addEventListener('change', onConfigSelect);
            initialLoad();

            async function loadScript(scriptName) {
                // generic configuration with no layers. code starts again around line 740
                const config = {
                    startingFixtures: [
                        'appbar',
                        'basemap',
                        'crosshairs',
                        'details',
                        'geosearch',
                        'grid',
                        'help',
                        'hilight',
                        'layer-reorder',
                        'legend',
                        'mapnav',
                        'northarrow',
                        'overviewmap',
                        'scrollguard',
                        'panguard',
                        'settings',
                        'wizard',
                        'export' // export is not default, but usually want for tests
                    ],
                    configs: {
                        en: {
                            map: {
                                extentSets: [
                                    {
                                        id: 'EXT_ESRI_World_AuxMerc_3857',
                                        default: {
                                            xmax: -5007771.626060756,
                                            xmin: -16632697.354854,
                                            ymax: 10015875.184845109,
                                            ymin: 5022907.964742964,
                                            spatialReference: {
                                                wkid: 102100,
                                                latestWkid: 3857
                                            }
                                        }
                                    },
                                    {
                                        id: 'EXT_NRCAN_Lambert_3978',
                                        default: {
                                            xmax: 3549492,
                                            xmin: -2681457,
                                            ymax: 3482193,
                                            ymin: -883440,
                                            spatialReference: {
                                                wkid: 3978
                                            }
                                        }
                                    }
                                ],
                                caption: {
                                    mapCoords: {
                                        formatter: 'CANADA_ATLAS_LAMBERT'
                                    },
                                    scaleBar: {
                                        imperialScale: false
                                    }
                                },
                                mapMouseThrottle: 50,
                                lodSets: [
                                    {
                                        id: 'LOD_NRCAN_Lambert_3978',
                                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                                    },
                                    {
                                        id: 'LOD_ESRI_World_AuxMerc_3857',
                                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
                                    }
                                ],
                                tileSchemas: [
                                    {
                                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                                        name: 'Lambert Maps',
                                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                                        thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                                        hasNorthPole: true,
                                        recoveryBasemap: {
                                            basemapId: 'baseProvinces_3978'
                                        }
                                    },
                                    {
                                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                                        name: 'Web Mercator Maps',
                                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75'],
                                        recoveryBasemap: {
                                            basemapId: 'baseOpenStreetMap'
                                        }
                                    }
                                ],
                                basemaps: [
                                    {
                                        id: 'baseNrCan',
                                        name: 'Canada Base Map - Transportation (CBMT)',
                                        description:
                                            'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                                        altText: 'The Canada Base Map - Transportation (CBMT)',
                                        layers: [
                                            {
                                                id: 'CBMT',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseSimple',
                                        name: 'Canada Base Map - Simple',
                                        description: 'Canada Base Map - Simple',
                                        altText: 'Canada base map - Simple',
                                        layers: [
                                            {
                                                id: 'SMR',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseCBME_CBCE_HS_RO_3978',
                                        name: 'Canada Base Map - Elevation (CBME)',
                                        description:
                                            'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                                        altText: 'Canada Base Map - Elevation (CBME)',
                                        layers: [
                                            {
                                                id: 'CBME_CBCE_HS_RO_3978',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseCBMT_CBCT_GEOM_3978',
                                        name: 'Canada Base Map - Transportation (CBMT)',
                                        description:
                                            ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                                        altText: 'Canada Base Map - Transportation (CBMT)',
                                        layers: [
                                            {
                                                id: 'CBMT_CBCT_GEOM_3978',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseProvinces_3978',
                                        name: 'Provincial and Territorial Boundaries',
                                        description:
                                            "A basic outline of Canada's provincial and territorial boundaries.",
                                        altText: 'Canada Base Map - Provincial and Territorial outlines',
                                        hideThumbnail: true,
                                        layers: [
                                            {
                                                id: 'provinces_3978',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/Overlays/Provinces/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseEsriWorld',
                                        name: 'World Imagery',
                                        description:
                                            'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                                        altText: 'World Imagery',
                                        layers: [
                                            {
                                                id: 'World_Imagery',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriPhysical',
                                        name: 'World Physical Map',
                                        description:
                                            'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                                        altText: 'World Physical Map',
                                        layers: [
                                            {
                                                id: 'World_Physical_Map',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriRelief',
                                        name: 'World Shaded Relief',
                                        description:
                                            'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                                        altText: 'World Shaded Relief',
                                        layers: [
                                            {
                                                id: 'World_Shaded_Relief',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriStreet',
                                        name: 'World Street Map',
                                        description:
                                            'This worldwide street map presents highway-level data for the world.',
                                        altText: 'ESWorld Street Map',
                                        layers: [
                                            {
                                                id: 'World_Street_Map',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriTerrain',
                                        name: 'World Terrain Base',
                                        description:
                                            'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                                        altText: 'World Terrain Base',
                                        layers: [
                                            {
                                                id: 'World_Terrain_Base',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriTopo',
                                        name: 'World Topographic Map',
                                        description:
                                            'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                                        altText: 'World Topographic Map',
                                        layers: [
                                            {
                                                id: 'World_Topo_Map',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseOpenStreetMap',
                                        name: 'OpenStreetMap',
                                        description: 'Open sourced topographical map.',
                                        altText: 'OpenStreetMap',
                                        layers: [
                                            {
                                                id: 'Open_Street_Map',
                                                layerType: 'osm-tile'
                                            }
                                        ],
                                        thumbnailUrl:
                                            'https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png',
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    }
                                ],
                                initialBasemapId: 'baseNrCan'
                            },
                            layers: [],
                            fixtures: {
                                legend: {
                                    root: {
                                        children: []
                                    }
                                },
                                appbar: {
                                    items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder']
                                },
                                mapnav: {
                                    items: [
                                        'fullscreen',
                                        'geolocator',
                                        'help',
                                        'home',
                                        'basemap',
                                        'legend',
                                        'geosearch'
                                    ]
                                },
                                export: {
                                    fileName: 'ramp-pcar-4-map-carte'
                                },
                                help: {
                                    location: '../help'
                                }
                            },
                            panels: {
                                open: [{ id: 'legend', pin: true }]
                            },
                            system: { animate: true }
                        },
                        fr: {
                            map: {
                                extentSets: [
                                    {
                                        id: 'EXT_ESRI_World_AuxMerc_3857',
                                        default: {
                                            xmax: -5007771.626060756,
                                            xmin: -16632697.354854,
                                            ymax: 10015875.184845109,
                                            ymin: 5022907.964742964,
                                            spatialReference: {
                                                wkid: 102100,
                                                latestWkid: 3857
                                            }
                                        }
                                    },
                                    {
                                        id: 'EXT_NRCAN_Lambert_3978',
                                        default: {
                                            xmax: 3549492,
                                            xmin: -2681457,
                                            ymax: 3482193,
                                            ymin: -883440,
                                            spatialReference: {
                                                wkid: 3978
                                            }
                                        }
                                    }
                                ],
                                caption: {
                                    mapCoords: {
                                        formatter: 'CANADA_ATLAS_LAMBERT'
                                    },
                                    scaleBar: {
                                        imperialScale: false
                                    }
                                },
                                mapMouseThrottle: 200,
                                lodSets: [
                                    {
                                        id: 'LOD_NRCAN_Lambert_3978',
                                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                                    },
                                    {
                                        id: 'LOD_ESRI_World_AuxMerc_3857',
                                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
                                    }
                                ],
                                tileSchemas: [
                                    {
                                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                                        name: 'Lambert Maps',
                                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                                        thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                                        hasNorthPole: true
                                    },
                                    {
                                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                                        name: 'Web Mercator Maps',
                                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                                    }
                                ],
                                basemaps: [
                                    {
                                        id: 'baseNrCan',
                                        name: 'Carte de base du Canada - transport (CBCT) avec étiquettes',
                                        description:
                                            "La carte de base du Canada - transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                                        altText: 'La carte de base du Canada - transport (CBCT)',
                                        layers: [
                                            {
                                                id: 'CBCT',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseSimple',
                                        name: 'Carte de base du Canada - simple',
                                        description: 'La carte de base du Canada - simple',
                                        altText: 'La carte de base du Canada - simple',
                                        layers: [
                                            {
                                                id: 'SMR',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseCBME_CBCE_HS_RO_3978',
                                        name: 'Carte de base du Canada - élevation (CBCE)',
                                        description:
                                            "La carte de base du Canada - élevation (CBCE) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                                        altText: 'La carte de base du Canada - élevation (CBCE)',
                                        layers: [
                                            {
                                                id: 'CBME_CBCE_HS_RO_3978',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseCBMT_CBCT_GEOM_3978',
                                        name: 'Carte de base du Canada - transport (CBCT)',
                                        description:
                                            "La carte de base du Canada - transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                                        altText: 'La carte de base du Canada - transport (CBCT)',
                                        layers: [
                                            {
                                                id: 'CBMT_CBCT_GEOM_3978',
                                                layerType: 'esri-tile',
                                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                                    },
                                    {
                                        id: 'baseEsriWorld',
                                        name: 'Imagerie mondiale',
                                        description:
                                            "L'imagerie mondiale fournit une imagerie satellitaire et aérienne dans de nombreuses régions du monde avec une résolution de 1 mètres et moins et des images satellitaires de résolution inférieure dans le monde entier.",
                                        altText: "L'imagerie mondiale",
                                        layers: [
                                            {
                                                id: 'World_Imagery',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriPhysical',
                                        name: 'Monde physique',
                                        description:
                                            "La carte du monde physique représente l'aspect physique naturel de la Terre à 1.24 kilomètres par pixel pour le monde et à 500 mètres pour les États- Unis.",
                                        altText: 'La carte du monde physique',
                                        layers: [
                                            {
                                                id: 'World_Physical_Map',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriRelief',
                                        name: 'Monde en relief ombragé',
                                        description:
                                            "La carte du monde en relief ombragé représente l'élévation de la surface de la terre comme un relief ombragé.Cette carte est utilisée comme couche de fond afin d'ajouter un relief ombragé à d'autres cartes SIG, comme la carte ArcGIS Online World Street Map.",
                                        altText: 'La carte du monde en relief ombragé',
                                        layers: [
                                            {
                                                id: 'World_Shaded_Relief',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriStreet',
                                        name: 'Monde routier',
                                        description:
                                            'La carte du monde routier présente des données au niveau des autoroutes pour le monde.',
                                        altText: 'La carte du monde routier',
                                        layers: [
                                            {
                                                id: 'World_Street_Map',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriTerrain',
                                        name: 'Monde terrain',
                                        description:
                                            "La carte du monde terrain est conçue pour être utilisée comme une carte de base par les professionnels du SIG pour superposer d'autres couches thématiques comme la démographie ou la couverture terrestre.",
                                        altText: 'La carte du monde terrain',
                                        layers: [
                                            {
                                                id: 'World_Terrain_Base',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseEsriTopo',
                                        name: 'Monde topographique',
                                        description:
                                            'La carte du monde topographique est conçue pour être utilisé comme une carte de base par les professionnels du SIG et comme une carte de référence par quiconque.',
                                        altText: 'La carte du monde topographique',
                                        layers: [
                                            {
                                                id: 'World_Topo_Map',
                                                layerType: 'esri-tile',
                                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                                            }
                                        ],
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    },
                                    {
                                        id: 'baseOpenStreetMap',
                                        name: 'OpenStreetMap',
                                        description: 'Carte topographique open source.',
                                        altText: 'OpenStreetMap',
                                        layers: [
                                            {
                                                id: 'Open_Street_Map',
                                                layerType: 'osm-tile'
                                            }
                                        ],
                                        thumbnailUrl:
                                            'https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png',
                                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                    }
                                ],
                                initialBasemapId: 'baseNrCan'
                            },
                            layers: [],
                            fixtures: {
                                legend: {
                                    root: {
                                        children: []
                                    }
                                },
                                appbar: {
                                    items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder']
                                },
                                mapnav: {
                                    items: [
                                        'fullscreen',
                                        'geolocator',
                                        'help',
                                        'home',
                                        'basemap',
                                        'legend',
                                        'geosearch'
                                    ]
                                },
                                export: {
                                    fileName: 'ramp-pcar-4-map-carte'
                                },
                                help: {
                                    location: '../help'
                                }
                            },
                            panels: {
                                open: [{ id: 'legend', pin: true }]
                            },
                            system: { animate: true }
                        }
                    }
                }; // config ends!

                // ramp instance options.
                const options = {};

                // scoping trickery for utils methods
                const langConfigs = [config.configs.en, config.configs.fr];

                // test script common utils.
                // update the header comment in `a-sample.js` script when new methods are added.
                const utils = {
                    // adds a layer to both languages
                    addLayer: layerConfig => {
                        langConfigs.forEach(lang => {
                            lang.layers.push(structuredClone(layerConfig));
                        });
                    },

                    // adds a layer to the config of the given language key (en, fr)
                    addLayerLang: (layerConfig, langKey) => {
                        const langConfig = config.configs[langKey];

                        langConfig.layers.push(structuredClone(layerConfig));
                        langConfig.fixtures.legend.root.children.push(structuredClone({ layerId: layerConfig.id }));
                    },

                    // adds a layer and makes a basic root level legend entry.
                    // same layer is added to both languages
                    addLayerLegend: layerConfig => {
                        const legendConfig = { layerId: layerConfig.id };
                        langConfigs.forEach(lang => {
                            lang.layers.push(structuredClone(layerConfig));
                            lang.fixtures.legend.root.children.push(structuredClone(legendConfig));
                        });
                    },

                    // adds a layer and makes a basic root level legend entry.
                    // its only applied to the config of the given language key (en, fr)
                    addLayerLegendLang: (layerConfig, langKey) => {
                        const langConfig = config.configs[langKey];

                        langConfig.layers.push(structuredClone(layerConfig));
                        langConfig.fixtures.legend.root.children.push(structuredClone({ layerId: layerConfig.id }));
                    },

                    // adds a legend config to the root level legend entry.
                    // same entry is added to both languages
                    addLegend: legendConfig => {
                        langConfigs.forEach(lang => {
                            lang.fixtures.legend.root.children.push(structuredClone(legendConfig));
                        });
                    },

                    // adds a legend config to the root level legend entry.
                    // its only applied to the config of the given language key (en, fr)
                    addLegendLang: (legendConfig, langKey) => {
                        config.configs[langKey].fixtures.legend.root.children.push(structuredClone(legendConfig));
                    }
                };

                // get test instructions from selected script
                const testRunner = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"./qa-scripts/001-simple-empty.js": () => __vitePreload(() => import('./001-simple-empty-46aznpX7.js'),true?[]:void 0,import.meta.url),"./qa-scripts/002-custom-renderer.js": () => __vitePreload(() => import('./002-custom-renderer-D3C6xYTJ.js'),true?[]:void 0,import.meta.url)})), `./qa-scripts/${scriptName}.js`, 3);

                // do any test modifications for instance creation
                const setupData = testRunner.runPreTest(config, options, utils);

                // make the RAMP
                const rInstance = createInstance(document.getElementById('app'), setupData.config, setupData.options);

                window.debugInstance = rInstance;

                // do any test modifications on the instance
                testRunner.runPostTest(rInstance, utils);
            }

            function onConfigSelect(event) {
                // refresh page with new selection in URL
                currentUrl.searchParams.set(SAMPLE_KEY, document.getElementById('selectConfig').selectedIndex + 1);
                window.location.href = currentUrl;
            }

            function initialLoad() {
                var params = new URLSearchParams(currentUrl.search);
                var sampleIndex = params.get(SAMPLE_KEY) - 1;
                var selectElem = document.getElementById('selectConfig');
                if (params.has(SAMPLE_KEY) && sampleIndex >= 1 && selectElem.item(sampleIndex)) {
                    selectElem.options[sampleIndex].selected = 'selected';
                    loadScript(selectElem.options[sampleIndex].value);
                } else {
                    loadScript(selectElem.options[0].value);
                }
            }
