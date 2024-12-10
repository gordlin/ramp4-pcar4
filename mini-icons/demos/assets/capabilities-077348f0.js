import { aX as e, aY as y, f$ as d, f6 as c, g0 as l, aZ as c$1, g1 as g } from './main-13aeab07.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=m=>{let a=class extends m{get timeInfo(){const e=this.associatedLayer?.timeInfo;if(null==e)return e;const t=e.clone();return g(t,this.fieldsIndex),t}set timeInfo(e){g(e,this.fieldsIndex),this._override("timeInfo",e);}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(e){this._override("timeExtent",e);}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(e){this._override("timeOffset",e);}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e);}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(e){this._override("datesInUnknownTimezone",e);}};return e([y({type:d})],a.prototype,"timeInfo",null),e([y({type:c})],a.prototype,"timeExtent",null),e([y({type:l})],a.prototype,"timeOffset",null),e([y({type:Boolean,nonNullable:!0})],a.prototype,"useViewTime",null),e([y({type:Boolean,nonNullable:!0})],a.prototype,"datesInUnknownTimezone",null),a=e([c$1("esri.layers.mixins.TemporalSceneLayer")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const s={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};

export { m, s };
