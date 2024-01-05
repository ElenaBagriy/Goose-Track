"use strict";(self.webpackChunkgoose_track=self.webpackChunkgoose_track||[]).push([[543],{9543:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r=t(7689),a=t(3433),i=t(2122),o=t(8527),u=t(4522);var d,c,s,f,h=t(6114),l=t(5719),p=t(4888),m=t(467),x=t(1951),y=t(168),v=t(6487),g=v.ZP.table(d||(d=(0,y.Z)(["\n    margin-top: 14px;\n    border: 1px solid ",";\n    border-radius: 8px;\n    border-collapse: separate;\n    background-color: ",";\n    width: 100%;\n    color: #343434;\n    font-family: Inter;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.17; \n\n  @media screen and (min-width: 768px) {\n      margin-top: 18px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 15px;\n  }\n\n"])),(function(n){return n.theme.table.border}),(function(n){return n.theme.colors.page})),w=v.ZP.tr(c||(c=(0,y.Z)(["\n    height: 94px;\n\n    @media screen and (min-width: 768px) {\n        height: 144px;\n    }\n\n    @media screen and (min-width: 1440px) {\n        height: 125px;\n    }\n"]))),Z=t(184),M=function(n){var e=n.currentDate,t=[],r=function(n){var e=(0,l.default)(new Date(n)),t=(0,p.default)(new Date(n)),r=(0,m.default)(e),a=(0,i.Z)(new Date(n)),d=function(n,e){var t;(0,u.Z)(1,arguments);var r=n||{},a=(0,o.default)(r.start),i=(0,o.default)(r.end).getTime();if(!(a.getTime()<=i))throw new RangeError("Invalid interval");var d=[],c=a;c.setHours(0,0,0,0);var s=Number(null!==(t=null===e||void 0===e?void 0:e.step)&&void 0!==t?t:1);if(s<1||isNaN(s))throw new RangeError("`options.step` must be a number greater than 1");for(;c.getTime()<=i;)d.push((0,o.default)(c)),c.setDate(c.getDate()+s),c.setHours(0,0,0,0);return d}({start:e,end:t});return{startMonth:e,endMonth:t,firstDayOfMonth:r,daysOfMonth:d,daysAmmount:a}}(e),d=r.firstDayOfMonth,c=r.daysOfMonth.map((function(n){return{date:(0,x.default)(n,"yyyy-MM-dd"),tasks:t.filter((function(e){return e.date===(0,x.default)(n,"yyyy-MM-dd")}))}})),s=[],f=function(n){var e=n;return 0===n&&(e=7),Array.from({length:e-1},(function(n,e){return(0,Z.jsx)("td",{},"empty-".concat(e))}))}(d);if(c.forEach((function(n,e){f.push((0,Z.jsxs)("td",{children:[(0,h.default)(new Date(n.date))," "]},e)),7!==f.length&&e!==c.length-1||(s.push(f),f=[])})),7!==s[s.length-1].length){var y,v=7-s[s.length-1].length,M=(0,a.Z)(Array(v)).map((function(n,e){return(0,Z.jsx)("td",{},"empty-".concat(e))}));(y=s[s.length-1]).push.apply(y,(0,a.Z)(M))}return(0,Z.jsx)(g,{children:(0,Z.jsx)("tbody",{children:s.map((function(n,e){return(0,Z.jsx)(w,{children:n},e)}))})})},b=t(5193),j=v.ZP.ul(s||(s=(0,y.Z)(["\n    display: flex;\n    justify-content: space-around;\n    width: 335px;\n    border-radius: 8px;\n    border: 1px solid ",";\n    background-color: ",";\n    color: ",";\n    text-align: center;\n    font-family: Inter;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 1.13;\n    text-transform: uppercase;\n    \n    @media screen and (min-width: 768px) {\n        width: 704px;\n    }\n\n    @media screen and (min-width: 1440px) {\n        width: 1087px;\n    }\n    \n"])),(function(n){return n.theme.button.border}),(function(n){return n.theme.colors.weekDays}),(function(n){return n.theme.text.header})),k=v.ZP.li(f||(f=(0,y.Z)(["\n    display: flex;\n    width: 48px;\n    height: 50px;\n    align-items: center;\n    justify-content: center;\n\n    &:nth-last-child(-n+2) {\n        color: ",";\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 155px;\n        height: 46px;\n    }\n"])),(function(n){return n.theme.colors.mainBlue})),D=function(){var n=(0,b.Z)("(max-width: 767px)")?1:3;return(0,Z.jsx)(j,{children:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].map((function(e){return(0,Z.jsx)(k,{children:e.toUpperCase().substring(0,n)},e)}))})},E=function(){var n=(0,r.UO)().currentMonth;return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(D,{}),(0,Z.jsx)(M,{currentDate:n})]})}},5193:function(n,e,t){var r;t.d(e,{Z:function(){return h}});var a=t(9439),i=t(2791),o=t(9120),u=t(1778),d=t(162);function c(n,e,t,r,o){var u=i.useState((function(){return o&&t?t(n).matches:r?r(n).matches:e})),c=(0,a.Z)(u,2),s=c[0],f=c[1];return(0,d.Z)((function(){var e=!0;if(t){var r=t(n),a=function(){e&&f(r.matches)};return a(),r.addListener(a),function(){e=!1,r.removeListener(a)}}}),[n,t]),s}var s=(r||(r=t.t(i,2))).useSyncExternalStore;function f(n,e,t,r,o){var u=i.useCallback((function(){return e}),[e]),d=i.useMemo((function(){if(o&&t)return function(){return t(n).matches};if(null!==r){var e=r(n).matches;return function(){return e}}return u}),[u,n,r,o,t]),c=i.useMemo((function(){if(null===t)return[u,function(){return function(){}}];var e=t(n);return[function(){return e.matches},function(n){return e.addListener(n),function(){e.removeListener(n)}}]}),[u,t,n]),f=(0,a.Z)(c,2),h=f[0],l=f[1];return s(l,h,d)}function h(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,o.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=(0,u.Z)({name:"MuiUseMediaQuery",props:e,theme:t}),i=a.defaultMatches,d=void 0!==i&&i,h=a.matchMedia,l=void 0===h?r?window.matchMedia:null:h,p=a.ssrMatchMedia,m=void 0===p?null:p,x=a.noSsr,y=void 0!==x&&x;var v="function"===typeof n?n(t):n;v=v.replace(/^@media( ?)/m,"");var g=void 0!==s?f:c,w=g(v,d,l,m,y);return w}},162:function(n,e,t){var r=t(2876);e.Z=r.Z},2876:function(n,e,t){var r=t(2791),a="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;e.Z=a}}]);
//# sourceMappingURL=543.fcc12b08.chunk.js.map