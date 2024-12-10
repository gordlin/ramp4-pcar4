import { ic as DateTime, id as t, ie as Zone, ig as FixedOffsetZone, ih as IANAZone, aa as r$1, aC as c$2, aH as M } from './main-CLKD9wBG.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var o$1;!function(e){e.TimeZoneNotRecognized="TimeZoneNotRecognized";}(o$1||(o$1={}));const a$1={[o$1.TimeZoneNotRecognized]:"Timezone identifier has not been recognized."};class d extends Error{constructor(t,n){super(r$1(a$1[t],n)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,d);}}function u(e,t,n){return e<t?e-t:e>n?e-n:0}function c$1(e,t,n){return e<t?t:e>n?n:e}class m{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate";}static fromParts(e=0,t=1,r=1,s=0,i=0,o=0,a=0,d){if(isNaN(e)||isNaN(t)||isNaN(r)||isNaN(s)||isNaN(i)||isNaN(o)||isNaN(a))return null;const l=DateTime.local(e,t).daysInMonth;let f=DateTime.fromObject({day:c$1(r,1,l),year:e,month:c$1(t,1,12),hour:c$1(s,0,23),minute:c$1(i,0,59),second:c$1(o,0,59),millisecond:c$1(a,0,999)},{zone:h(d)});return f=f.plus({months:u(t,1,12),days:u(r,1,l),hours:u(s,0,23),minutes:u(i,0,59),seconds:u(o,0,59),milliseconds:u(a,0,999)}),new m(f)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,n){const r=h(n);return e.isUnknownTimeZone||r===t.instance?m.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,r):new m(e._date.setZone(r))}static dateJSToArcadeDate(e){return new m(DateTime.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){const r=h(t);return new m(DateTime.fromJSDate(e,{zone:r}))}static unknownEpochToArcadeDate(e){return new m(DateTime.fromMillis(e,{zone:t.instance}))}static unknownDateJSToArcadeDate(e){return new m(DateTime.fromMillis(e.getTime(),{zone:t.instance}))}static epochToArcadeDate(e,t="system"){const r=h(t);return new m(DateTime.fromMillis(e,{zone:r}))}static dateTimeToArcadeDate(e){return new m(e)}clone(){return new m(this._date)}changeTimeZone(e){const t=h(e);return m.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,n){const r=h(n);return e.zone===t.instance||r===t.instance?m.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,r):new m(e.setZone(r))}static nowToArcadeDate(e){const t=h(e);return new m(DateTime.fromJSDate(new Date,{zone:t}))}static nowUTCToArcadeDate(){return new m(DateTime.utc())}get isSystem(){return "system"===this.timeZone||this.timeZone===m.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===t.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return "unknown";if("system"===this._date.zone.type)return "system";const e=this.zone;return "fixed"===e.type?0===e.fixed?"UTC":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new m(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISODate(){return this._date.toISODate()}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toISOTime(e,t){return this._date.toISOTime({suppressMilliseconds:e,includeOffset:t&&!this.isUnknownTimeZone})}toFormat(e,t){return this.isUnknownTimeZone&&(e=e.replaceAll("Z","")),this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLValue(){return this._date.toFormat("yyyy-LL-dd HH:mm:ss")}toSQLWithKeyword(){return `timestamp '${this.toSQLValue()}'`}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new m(this._date.toUTC())}toLocal(){return new m(this._date.toLocal())}toString(){return this.toISOString(!0)}static fromReaderAsTimeStampOffset(e){if(!e)return null;const t=DateTime.fromISO(e,{setZone:!0});return new m(t)}}function h(e,n=!0){if(e instanceof Zone)return e;if("system"===e.toLowerCase())return "system";if("utc"===e.toLowerCase())return "UTC";if("unknown"===e.toLowerCase())return t.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=FixedOffsetZone.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e);if(t)return t}const a=IANAZone.create(e);if(!a.isValid){if(n)throw new d(o$1.TimeZoneNotRecognized);return null}return a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o(t){t=t.replaceAll(/LTS|LT|LL?L?L?|l{1,4}/g,"[$&]");let e="";const a=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const r of t.match(a)||[])switch(r){case"D":e+="d";break;case"DD":e+="dd";break;case"DDD":e+="o";break;case"d":e+="c";break;case"ddd":e+="ccc";break;case"dddd":e+="cccc";break;case"M":e+="L";break;case"MM":e+="LL";break;case"MMM":e+="LLL";break;case"MMMM":e+="LLLL";break;case"YY":e+="yy";break;case"Y":case"YYYY":e+="yyyy";break;case"Q":e+="q";break;case"X":case"x":e+=r;break;default:r.length>=2&&"["===r.slice(0,1)&&"]"===r.slice(-1)?e+=`'${r.slice(1,-1)}'`:e+=`'${r}'`;}return e}let n$2 = class n{constructor(t,e,a){this._year=t,this._month=e,this._day=a,this.declaredRootClass="esri.core.sql.dateonly";}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(t){return t instanceof n&&t.day===this.day&&t.month===this.month&&t.year===this.year}clone(){return new n(this._year,this._month,this._day)}toDateTime(e){return DateTime.fromObject({day:this.day,month:this.month,year:this.year},{zone:h(e)})}toDateTimeLuxon(e){return DateTime.fromObject({day:this.day,month:this.month,year:this.year},{zone:h(e)})}toString(){return `${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(t=null,r=!0){if(null===t||""===t)return this.toString();if(r&&(t=o(t)),!t)return "";const s=this.toDateTime("unknown");return m.dateTimeToArcadeDate(s).toFormat(t,{locale:c$2(),numberingSystem:"latn"})}toArcadeDate(){const t=this.toDateTime("unknown");return m.dateTimeToArcadeDate(t)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return "date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(t,e){return n.fromDateTime(this.toUTCDateTime().plus({[t]:e}))}toUTCDateTime(){return DateTime.utc(this.year,this.month,this.day,0,0,0,0)}difference(t,e){switch(e.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(t.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(t.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return "M"===e?this.toUTCDateTime().diff(t.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(t.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(t.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(t.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(t.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(t.toUTCDateTime(),"years").years}}static fromMilliseconds(t){const e=DateTime.fromMillis(t,{zone:FixedOffsetZone.utcInstance});return e.isValid?n.fromParts(e.year,e.month,e.day):null}static fromSeconds(t){const e=DateTime.fromSeconds(t,{zone:FixedOffsetZone.utcInstance});return e.isValid?n.fromParts(e.year,e.month,e.day):null}static fromReader(t){if(!t)return null;const e=t.split("-");return 3!==e.length?null:new n(parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10))}static fromParts(t,e,a){const r=new n(t,e,a);return !1===r.isValid?null:r}static fromDateJS(t){return n.fromParts(t.getFullYear(),t.getMonth()+1,t.getDay())}static fromDateTime(t){return n.fromParts(t.year,t.month,t.day)}static fromSqlTimeStampOffset(t){return this.fromDateTime(t.toDateTime())}static fromString(t,e=null){if(""===t)return null;if(null===t)return null;const a=[];if(e)(e=o(e))&&a.push(e);else if(null===e||""===e){const e=DateTime.fromISO(t,{setZone:!0});return e.isValid?n.fromParts(e.year,e.month,e.day):null}for(const s of a){const a=DateTime.fromFormat(t,e??s);if(a.isValid)return new n(a.year,a.month,a.day)}return null}static fromNow(e="system"){const a=DateTime.fromJSDate(new Date).setZone(h(e));return new n(a.year,a.month,a.day)}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function r(e){if(null==e)return null;if("number"==typeof e)return e;let r=e.toLowerCase();switch(r=r.replaceAll(/\s/g,""),r=r.replaceAll("-",""),r){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109439;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function s(r){if(null==r)return null;switch(r.type){case"polygon":case"multipoint":case"polyline":return r.extent;case"point":return new M({xmin:r.x,ymin:r.y,xmax:r.x,ymax:r.y,spatialReference:r.spatialReference});case"extent":return r}return null}function a(e){if(null==e)return null;if("number"==typeof e)return e;let r=e.toLowerCase();switch(r=r.replaceAll(/\s/g,""),r=r.replaceAll("-",""),r){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9093;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function c(e){if(null==e)return null;const r=e.clone();return void 0!==e.cache._geVersion&&(r.cache._geVersion=e.cache._geVersion),r}function n$1(e){return "number"==typeof e&&isFinite(e)&&Math.floor(e)===e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function i(t){if(!t)return "";const s=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let e="";for(const i of t.match(s)||[])switch(i){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":e+=i;break;case"A":case"a":e+="a";break;default:e+=`'${i}'`;}return e}class n{constructor(t,s,e,i){this._hour=t,this._minute=s,this._second=e,this._millisecond=i,this.declaredRootClass="esri.core.sql.timeonly";}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(t){return t instanceof n&&t.hour===this.hour&&t.minute===this.minute&&t.second===this.second&&t.millisecond===this.millisecond}clone(){return new n(this.hour,this.minute,this.second,this.millisecond)}isValid(){return n$1(this.hour)&&n$1(this.minute)&&n$1(this.second)&&n$1(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return `${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return `time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return `${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(t=null){if(null===t||""===t)return this.toString();if(!(t=i(t)))return "";return DateTime.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(t,{locale:c$2(),numberingSystem:"latn"})}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(t,s,e,i){const r=new n(t,s,e,i);return r.isValid()?r:null}static fromReader(t){if(!t)return null;const s=t.split(":");return 3!==s.length?null:new n(parseInt(s[0],10),parseInt(s[1],10),parseInt(s[2],10),0)}static fromMilliseconds(t){if(t>864e5||t<0)return null;const s=Math.floor(t/1e3%60),e=Math.floor(t/6e4%60),i=Math.floor(t/36e5%24),r=Math.floor(t%1e3);return new n(i,e,s,r)}static fromDateJS(t){return new n(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}static fromDateTime(t){return new n(t.hour,t.minute,t.second,t.millisecond)}static fromSqlTimeStampOffset(t){return this.fromDateTime(t.toDateTime())}static fromString(t,s=null){if(""===t)return null;if(null===t)return null;const r=[];s?(s=i(s))&&r.push(s):null!==s&&""!==s||(r.push("HH:mm:ss"),r.push("HH:mm:ss.SSS"),r.push("hh:mm:ss a"),r.push("hh:mm:ss.SSS a"),r.push("HH:mm"),r.push("hh:mm a"),r.push("H:mm"),r.push("h:mm a"),r.push("H:mm:ss"),r.push("h:mm:ss a"),r.push("H:mm:ss.SSS"),r.push("h:mm:ss.SSS a"));for(const i of r){const s=DateTime.fromFormat(t,i);if(s.isValid)return new n(s.hour,s.minute,s.second,s.millisecond)}return null}plus(t,s){switch(t){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return n.fromDateTime(this.toUTCDateTime().plus({[t]:s}))}return null}toUTCDateTime(){return DateTime.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(t,s){switch(s.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(t.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(t.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return "M"===s?this.toUTCDateTime().diff(t.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(t.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(t.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(t.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(t.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(t.toUTCDateTime(),"years").years}}}

export { n$2 as a, a as b, c, h, m, n, r, s };
