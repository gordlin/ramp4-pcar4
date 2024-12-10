import{v as l,z as r}from"./main-Bd3SZcXj.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let s={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:l.defaultLODs(l.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},layers:[{id:"WFSLayer",layerType:"ogc-wfs",url:"https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on",xyInAttribs:!0,colour:"#FF5555",state:{visibility:!0},customRenderer:{},fixtures:{grid:{title:"Datatable for WFS features",columnMetadata:{exclusiveColumns:!0},columns:[{field:"station_id__id_station",title:"Station ID",width:600,filter:{type:"number",value:6020384}},{field:"OBJECTID",title:"Object ID",filter:{type:"number",min:3,max:20,static:!0}},{field:"identifier__identifiant",visible:!1}]}}},{id:"TimeParty",layerType:"esri-feature",fixtures:{grid:{columns:[{field:"ItIsPartyTime",filter:{type:"date",min:"2005-02-22"},sort:"asc"},{field:"MyName",filter:{type:"selector"}}]}},url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/TimeParty/MapServer/0"}],fixtures:{legend:{root:{children:[{layerId:"WFSLayer",name:"WFSLayer"},{layerId:"TimeParty",name:"TimeParty"}]}},appbar:{items:["legend"]},mapnav:{items:["fullscreen","legend","home","basemap"]},details:{templates:{esri:"Details-Default-Template-Esri"}}},system:{exposeOid:!0}}}},n={loadDefaultFixtures:!1,loadDefaultEvents:!0};const a=r(document.getElementById("app"),s,n);a.fixture.addDefaultFixtures(["mapnav","legend","appbar","grid","details"]).then(()=>{a.panel.open("legend")});a.$element.component("Details-Default-Template-Esri",{props:["identifyData","fields"],template:`
        <div>
            <div
                class="p-5 pl-3 flex justify-end flex-wrap even:bg-green-100 border-2 border-black"
                v-for="(val, name, itemIdx) in itemData()"
                :key="itemIdx"
            >
                <span class="inline font-bold">{{ val.alias }}</span>
                <span class="flex-auto"></span>
                <span class="inline" v-html="val.value"></span>
            </div>
        </div>
    `,methods:{itemData(){const t={};Object.assign(t,this.identifyData.data),t.Symbol!==void 0&&delete t.Symbol;let i={};return this.fields.forEach(e=>{i[e.name]=e.alias||e.name}),Object.keys(t).map(e=>{t[e]={value:typeof t[e]=="number"?this.$iApi.$i18n.n(t[e],"number"):t[e],alias:i[e]||e}}),t}}});window.debugInstance=a;
