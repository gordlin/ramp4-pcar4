import{ga as g,gb as _,gc as u,gd as P,ge as s,a6 as S,gf as N,gg as l,gh as O,gi as M,ap as i}from"./main-Bd3SZcXj.js";function f(a,o,t){const c=Math.sin(a),r=Math.cos(a),E=Math.sin(o),C=Math.cos(o),n=t;return n[0]=-c,n[4]=-E*r,n[8]=C*r,n[12]=0,n[1]=r,n[5]=-E*c,n[9]=C*c,n[13]=0,n[2]=0,n[6]=C,n[10]=E,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function T(a,o,t){return f(a,o,t),g(t,t),t}function F(a,o,t,c){if(a==null||c==null)return!1;const r=_(a,u),E=_(c,P);if(r===E&&!e(E)&&(r!==s.UNKNOWN||S(a,c)))return N(t,o),!0;if(e(E)){const C=l[r][s.LON_LAT],n=l[s.LON_LAT][E];return C!=null&&n!=null&&(C(o,0,L,0),n(L,0,A,0),f(R*L[0],R*L[1],t),t[12]=A[0],t[13]=A[1],t[14]=A[2],!0)}if(!(E!==s.WEB_MERCATOR&&E!==s.PLATE_CARREE&&E!==s.WGS84&&E!==s.CGCS2000||r!==s.WGS84&&r!==s.SPHERICAL_ECEF&&r!==s.WEB_MERCATOR&&r!==s.CGCS2000)){const C=l[r][s.LON_LAT],n=l[s.LON_LAT][E];return C!=null&&n!=null&&(C(o,0,L,0),n(L,0,A,0),r===s.SPHERICAL_ECEF?T(R*L[0],R*L[1],t):O(t),t[12]=A[0],t[13]=A[1],t[14]=A[2],!0)}return!1}function e(a){return a===s.SPHERICAL_ECEF||a===s.SPHERICAL_MARS_PCPF||a===s.SPHERICAL_MOON_PCPF}const R=M(1),L=i(),A=i();export{F as u};
