(this["webpackJsonpHonest-frontend"]=this["webpackJsonpHonest-frontend"]||[]).push([[10],{665:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(60),c=t(12),a=t(0),o=t.n(a),i=t(3);function s(){var e=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return e},e}var u=i.e.div(s(),(function(e){return e.size}),(function(e){return e.size})),b=function(e){var n,t=e.size,r=void 0===t?"md":t,o=Object(a.useContext)(i.a).spacing;switch(r){case"lg":n=o[6];break;case"sm":n=o[2];break;case"md":default:n=o[4]}return Object(c.jsx)(u,{size:n})};function l(){var e=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return l=function(){return e},e}function j(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return j=function(){return e},e}var d=i.e.div(j(),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),f=i.e.div(l()),p=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(c.jsx)(d,{children:o.a.Children.map(n,(function(e,n){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{children:e}),n<t-1&&Object(c.jsx)(b,{})]})}))})}},666:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r=t(60),c=t(12),a=(t(0),t(3)),o=t(668),i=t(46),s=t(661);function u(){var e=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return u=function(){return e},e}function b(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return b=function(){return e},e}var l=a.e.div(b(),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),j=a.e.input(u(),(function(e){return e.theme.colors.primary})),d=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,a=e.startAdornment,o=e.value;return Object(c.jsxs)(l,{children:[!!a&&a,Object(c.jsx)(j,{placeholder:r,value:o,onChange:t}),!!n&&n]})};function f(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return p=function(){return e},e}function O(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return O=function(){return e},e}function x(){var e=Object(r.a)(["\n  width: ","px;\n"]);return x=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}var h=a.e.div(m()),v=a.e.div(x(),(function(e){return e.theme.spacing[3]})),g=a.e.div(O()),k=a.e.div(p(),(function(e){return e.theme.colors.primary})),y=a.e.span(f(),(function(e){return e.theme.colors.primary})),w=function(e){var n=e.max,t=e.symbol,r=e.onChange,a=e.onSelectMax,u=e.value,b=e.depositFeeBP,l=void 0===b?0:b,j=Object(s.a)();return Object(c.jsxs)(h,{children:[Object(c.jsxs)(k,{children:[n.toLocaleString()," ",t," ",j(526,"Available")]}),Object(c.jsx)(d,{endAdornment:Object(c.jsxs)(g,{children:[Object(c.jsx)(y,{children:t}),Object(c.jsx)(v,{}),Object(c.jsx)("div",{children:Object(c.jsx)(i.d,{size:"sm",onClick:a,children:j(452,"Max")})})]}),onChange:r,placeholder:"0",value:u}),l>0?Object(c.jsxs)(k,{children:[j(10001,"Deposit Fee"),": ",new o.a(u||0).times(l/1e4).toString()," ",t]}):null]})}},667:function(e,n,t){"use strict";t.d(n,"b",(function(){return j}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(66),s=t(53),u=t(128),b=t(664),l=t(663),j=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(i.m)(),j=r.account,d=Object(l.f)(e),f=Object(o.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a){var o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=n?b.g:b.f,r.next=3,o(d,a,j);case 3:t(Object(u.g)(String(e),j)),t(Object(u.e)(String(e),j));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[j,t,n,d,e]);return{onStake:f}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.e)();return{onStake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.h)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},669:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return a}));var r=t(12),c=(t(0),t(46)),a=function(){return Object(r.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},o=function(){return Object(r.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},i=function(){return Object(r.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},670:function(e,n,t){"use strict";n.a=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,c="BNB"===t?"ETH":n[137],a=r[137];return"".concat(c,"/").concat(a)}},671:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(4),c=t.n(r),a=t(15),o=t(110),i=t.n(o),s=t(61),u=function(e,n){return new(new i.a(e).eth.Contract)(s,n)},b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(n,t),e.prev=1,e.next=4,a.methods.balanceOf(r).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},672:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(668);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(.5);var c=new r.a(15768e3)},673:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(66),s=(t(676),t(53)),u=t(128),b=t(664),l=t(663),j=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.e)();return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,r,t);case 3:return o=c.sent,n(Object(u.a)(t)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,n,e,r])}},d=function(e,n){var t=Object(s.b)(),r=Object(i.m)().account,j=Object(l.f)(n);return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,j,r);case 3:return o=c.sent,t(Object(u.d)(String(n),r)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,t,e,j,n])}}},674:function(e,n,t){"use strict";t.d(n,"b",(function(){return j}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(66),s=t(53),u=t(128),b=t(664),l=t(663),j=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.f)(e);return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.c)(r,o,t);case 2:n(Object(u.g)(String(e),t)),n(Object(u.e)(String(e),t)),n(Object(u.f)(String(e),t));case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.e)();return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.i)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},677:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return c}));var r=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+r/365,365*c);return n=o-a,Math.round(100*n)/100},c=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)}},681:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(12),c=t(60),a=(t(0),t(3)),o=t(46);function i(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return i=function(){return e},e}var s=a.e.div(i(),(function(e){return e.theme.colors.primary})),u=function(e){var n=e.onClick,t=e.expanded;return Object(r.jsxs)(s,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(r.jsx)(o.B,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(r.jsx)(o.k,{}):Object(r.jsx)(o.j,{})]})};u.defaultProps={expanded:!1};var b=u},789:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Ce}));var r=t(12),c=t(16),a=t(60),o=t(25),i=t(0),s=t(3),u=t(27),b=t(53),l=t(13),j=t.n(l),d=t(66),f=t(46),p=t(672),O=t(171),x=t(106),m=t(131),h=t(128),v=t(30),g=t(661),k=t(681),y=t(670);function w(){var e=Object(a.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return w=function(){return e},e}function C(){var e=Object(a.a)(["\n  margin-top: 24px;\n"]);return C=function(){return e},e}var S=s.e.div(C()),T=Object(s.e)(f.r)(w(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),B=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,a=e.totalValueFormated,o=e.lpLabel,i=e.quoteTokenAdresses,s=e.quoteTokenSymbol,u=e.tokenAddresses,b=Object(g.a)(),l=Object(y.a)({quoteTokenAdresses:i,quoteTokenSymbol:s,tokenAddresses:u});return Object(r.jsxs)(S,{children:[Object(r.jsxs)(f.m,{justifyContent:"space-between",children:[Object(r.jsxs)(f.B,{children:[b(316,"Stake"),":"]}),Object(r.jsx)(T,{href:n?"https://quickswap.exchange/#/swap/".concat(u[137]):"https://quickswap.exchange/#/add/".concat(l),children:o})]}),!c&&Object(r.jsxs)(f.m,{justifyContent:"space-between",children:[Object(r.jsxs)(f.B,{children:[b(23,"Total Liquidity"),":"]}),Object(r.jsx)(f.B,{children:a})]}),Object(r.jsx)(f.m,{justifyContent:"flex-start",children:Object(r.jsx)(f.q,{external:!0,href:t,bold:!1,children:"View on Matic Explorer"})})]})},A=t(669);function P(){var e=Object(a.a)(["\n  margin-left: 4px;\n"]);return P=function(){return e},e}function q(){var e=Object(a.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return q=function(){return e},e}var D=Object(s.e)(f.m)(q()),I=Object(s.e)(f.A)(P()),F=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),a=e.tokenSymbol,o=e.depositFee;return Object(r.jsxs)(D,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(r.jsx)(f.p,{src:"/images/farms/".concat(c,".png"),alt:a,width:64,height:64}),Object(r.jsxs)(f.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(r.jsx)(f.n,{mb:"4px",children:n}),Object(r.jsxs)(f.m,{justifyContent:"center",children:[Object(r.jsx)(I,{variant:"secondary",children:t}),0===o?Object(r.jsx)(A.d,{}):null]})]})]})},z=t(4),L=t.n(z),N=t(15),E=t(671),M=t(678),H=t(673),Q=t(667),G=t(674),R=t(662),U=t(665),W=t(666),V=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,a=e.tokenName,s=void 0===a?"":a,u=e.depositFeeBP,b=void 0===u?0:u,l=Object(i.useState)(""),j=Object(o.a)(l,2),d=j[0],p=j[1],O=Object(i.useState)(!1),x=Object(o.a)(O,2),m=x[0],h=x[1],v=Object(g.a)(),k=Object(i.useMemo)((function(){return Object(R.b)(n)}),[n]),y=Object(i.useCallback)((function(e){p(e.currentTarget.value)}),[p]),w=Object(i.useCallback)((function(){p(k)}),[k,p]);return Object(r.jsxs)(f.v,{title:"".concat(v(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(r.jsx)(W.a,{value:d,onSelectMax:w,onChange:y,max:k,symbol:s,depositFeeBP:b}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(f.d,{variant:"secondary",onClick:c,children:v(462,"Cancel")}),Object(r.jsx)(f.d,{disabled:m,onClick:Object(N.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,t(d);case 3:h(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:m?v(488,"Pending Confirmation"):v(464,"Confirm")})]})]})},X=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,a=e.tokenName,s=void 0===a?"":a,u=Object(i.useState)(""),b=Object(o.a)(u,2),l=b[0],j=b[1],d=Object(i.useState)(!1),p=Object(o.a)(d,2),O=p[0],x=p[1],m=Object(g.a)(),h=Object(i.useMemo)((function(){return Object(R.b)(c)}),[c]),v=Object(i.useCallback)((function(e){j(e.currentTarget.value)}),[j]),k=Object(i.useCallback)((function(){j(h)}),[h,j]);return Object(r.jsxs)(f.v,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(r.jsx)(W.a,{onSelectMax:k,onChange:v,value:l,max:h,symbol:s}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(f.d,{variant:"secondary",onClick:t,children:m(462,"Cancel")}),Object(r.jsx)(f.d,{disabled:O,onClick:Object(N.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(l);case 3:x(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:O?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})};function J(){var e=Object(a.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return J=function(){return e},e}var $=s.e.div(J()),_=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,a=e.pid,i=e.depositFeeBP,s=Object(g.a)(),u=Object(Q.a)(a).onStake,b=Object(G.a)(a).onUnstake,l=Object(R.a)(n),j=l.toLocaleString(),d=Object(f.G)(Object(r.jsx)(V,{max:t,onConfirm:u,tokenName:c,depositFeeBP:i})),p=Object(o.a)(d,1)[0],O=Object(f.G)(Object(r.jsx)(X,{max:n,onConfirm:b,tokenName:c})),x=Object(o.a)(O,1)[0];return Object(r.jsxs)(f.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(f.n,{color:0===l?"textDisabled":"text",children:j}),0===l?Object(r.jsx)(f.d,{onClick:p,children:s(999,"Stake")}):Object(r.jsxs)($,{children:[Object(r.jsx)(f.o,{variant:"tertiary",onClick:x,mr:"6px",children:Object(r.jsx)(f.u,{color:"primary"})}),Object(r.jsx)(f.o,{variant:"tertiary",onClick:p,children:Object(r.jsx)(f.a,{color:"primary"})})]})]})},K=t(675);function Y(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return Y=function(){return e},e}var Z=s.e.div(Y()),ee=function(e){var n=e.earnings,t=e.pid,c=Object(g.a)(),a=Object(i.useState)(!1),s=Object(o.a)(a,2),u=s[0],b=s[1],l=Object(K.b)(t).onReward,j=Object(Q.a)(t).onStake,d=Object(R.a)(n),p=d.toLocaleString();return Object(r.jsxs)(f.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(f.n,{color:0===d?"textDisabled":"text",children:p}),Object(r.jsxs)(Z,{children:[2===t?Object(r.jsx)(f.d,{disabled:0===d||u,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(N.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,j(d.toString());case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(r.jsx)(f.d,{disabled:0===d||u,onClick:Object(N.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,l();case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})};function ne(){var e=Object(a.a)(["\n  padding-top: 16px;\n"]);return ne=function(){return e},e}var te=s.e.div(ne()),re=function(e){var n=e.farm,t=e.ethereum,c=e.account,a=Object(g.a)(),s=Object(i.useState)(!1),u=Object(o.a)(s,2),b=u[0],l=u[1],j=Object(x.a)(n.pid),d=j.pid,p=j.lpAddresses,O=j.tokenAddresses,m=j.isTokenOnly,h=j.depositFeeBP,v=Object(x.b)(d),k=v.allowance,y=v.tokenBalance,w=v.stakedBalance,C=v.earnings,S=p[137],T=O[137],B=n.lpSymbol.toUpperCase(),A=c&&k&&k.isGreaterThan(0),P=Object(i.useMemo)((function(){return m?Object(E.a)(t,T):Object(E.a)(t,S)}),[t,S,T,m]),q=Object(H.a)(P).onApprove,D=Object(i.useCallback)(Object(N.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,q();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[q]);return Object(r.jsxs)(te,{children:[Object(r.jsxs)(f.m,{children:[Object(r.jsx)(f.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"Honest"}),Object(r.jsx)(f.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Earned")})]}),Object(r.jsx)(ee,{earnings:C,pid:d}),Object(r.jsxs)(f.m,{children:[Object(r.jsx)(f.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:B}),Object(r.jsx)(f.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Staked")})]}),c?A?Object(r.jsx)(_,{stakedBalance:w,tokenBalance:y,tokenName:B,pid:d,depositFeeBP:h}):Object(r.jsx)(f.d,{mt:"8px",fullWidth:!0,disabled:b,onClick:D,children:a(999,"Approve Contract")}):Object(r.jsx)(M.a,{mt:"8px",fullWidth:!0})]})},ce=t(677);function ae(){var e=Object(a.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return ae=function(){return e},e}function oe(){var e=Object(a.a)(["\n  margin-bottom: '10px';\n"]);return oe=function(){return e},e}function ie(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return ie=function(){return e},e}var se=s.e.div(ie()),ue=s.e.div(oe()),be=Object(s.e)(f.B)(ae()),le=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(g.a)(),b=Object(y.a)({quoteTokenAdresses:c,quoteTokenSymbol:a,tokenAddresses:o}),l=s.times(new j.a(100)).toNumber(),d=1e3/i.toNumber(),p=Object(ce.b)({numberOfDays:1,farmApy:l,cakePrice:i}),O=Object(ce.b)({numberOfDays:7,farmApy:l,cakePrice:i}),x=Object(ce.b)({numberOfDays:30,farmApy:l,cakePrice:i}),m=Object(ce.b)({numberOfDays:365,farmApy:l,cakePrice:i});return Object(r.jsxs)(f.v,{title:"ROI",onDismiss:n,children:[Object(r.jsxs)(se,{children:[Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"Timeframe")})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"ROI")})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"Honest per $1000")})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{children:"1d"})}),Object(r.jsx)(ue,{children:Object(r.jsxs)(f.B,{children:[Object(ce.a)({amountEarned:p,amountInvested:d}),"%"]})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{children:p})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{children:"7d"})}),Object(r.jsx)(ue,{children:Object(r.jsxs)(f.B,{children:[Object(ce.a)({amountEarned:O,amountInvested:d}),"%"]})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{children:O})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{children:"30d"})}),Object(r.jsx)(ue,{children:Object(r.jsxs)(f.B,{children:[Object(ce.a)({amountEarned:x,amountInvested:d}),"%"]})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{children:x})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{children:"365d(APY)"})}),Object(r.jsx)(ue,{children:Object(r.jsxs)(f.B,{children:[Object(ce.a)({amountEarned:m,amountInvested:d}),"%"]})}),Object(r.jsx)(ue,{children:Object(r.jsx)(f.B,{children:m})})]}),Object(r.jsx)(be,{fontSize:"12px",color:"textSubtle",children:u(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(r.jsx)(f.m,{justifyContent:"center",children:Object(r.jsxs)(f.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[u(999,"Get")," ",t]})})]})},je=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,a=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(f.G)(Object(r.jsx)(le,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:a,cakePrice:i,apy:s})),b=Object(o.a)(u,1)[0];return Object(r.jsx)(f.o,{onClick:b,variant:"text",size:"sm",ml:"4px",children:Object(r.jsx)(f.g,{})})};function de(){var e=Object(a.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return de=function(){return e},e}function fe(){var e=Object(a.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return fe=function(){return e},e}function pe(){var e=Object(a.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return pe=function(){return e},e}function Oe(){var e=Object(a.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return Oe=function(){return e},e}function xe(){var e=Object(a.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return xe=function(){return e},e}var me=Object(s.f)(xe()),he=s.e.div(Oe(),me),ve=s.e.div(pe(),(function(e){return e.theme.card.background})),ge=s.e.div(fe(),(function(e){return e.theme.colors.borderColor})),ke=s.e.div(de(),(function(e){return e.expanded?"100%":"0px"})),ye=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,a=e.bnbPrice,s=e.ethereum,u=e.account,b=Object(g.a)(),l=Object(i.useState)(!1),d=Object(o.a)(l,2),p=d[0],O=d[1],x=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),m=Object(i.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===v.b.BNB?a.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===v.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[a,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),h=m?"$".concat(Number(m).toLocaleString(void 0,{maximumFractionDigits:0})):"-",y=n.lpSymbol,w=n.apy&&n.apy.times(new j.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),C=n.quoteTokenAdresses,S=n.quoteTokenSymbol,T=n.tokenAddresses,A=n.risk;return Object(r.jsxs)(ve,{children:["Honest"===n.tokenSymbol&&Object(r.jsx)(he,{}),Object(r.jsx)(F,{lpLabel:y,multiplier:n.multiplier,risk:A,depositFee:n.depositFeeBP,farmImage:x,tokenSymbol:n.tokenSymbol}),!t&&Object(r.jsxs)(f.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsxs)(f.B,{children:[b(352,"APR"),":"]}),Object(r.jsx)(f.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(je,{lpLabel:y,quoteTokenAdresses:C,quoteTokenSymbol:S,tokenAddresses:T,cakePrice:c,apy:n.apy}),w,"%"]}):Object(r.jsx)(f.y,{height:24,width:80})})]}),Object(r.jsxs)(f.m,{justifyContent:"space-between",children:[Object(r.jsxs)(f.B,{children:[b(318,"Earn"),":"]}),Object(r.jsx)(f.B,{bold:!0,children:"Honest"})]}),Object(r.jsxs)(f.m,{justifyContent:"space-between",children:[Object(r.jsxs)(f.B,{style:{fontSize:"24px"},children:[b(10001,"Deposit Fee"),":"]}),Object(r.jsxs)(f.B,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(r.jsx)(re,{farm:n,ethereum:s,account:u}),Object(r.jsx)(ge,{}),Object(r.jsx)(k.a,{onClick:function(){return O(!p)},expanded:p}),Object(r.jsx)(ke,{expanded:p,children:Object(r.jsx)(B,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://explorer-mainnet.maticvigil.com/tokens/".concat(n.tokenAddresses[137]):"https://explorer-mainnet.maticvigil.com/tokens/".concat(n.lpAddresses[137]),totalValueFormated:h,lpLabel:y,quoteTokenAdresses:C,quoteTokenSymbol:S,tokenAddresses:T})})]})};function we(){var e=Object(a.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3ba.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/9.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n  "]);return we=function(){return e},e}var Ce=function(e){Object(u.g)().path,Object(g.a)();var n=Object(x.c)(),t=Object(x.g)(),a=Object(x.f)(),l=Object(d.m)(),k=l.account,y=l.ethereum,w=e.tokenMode,C=Object(b.b)(),S=Object(m.a)().fastRefresh;Object(i.useEffect)((function(){k&&C(Object(h.a)(k))}),[k,C,S]);var T=Object(i.useState)(!1),B=Object(o.a)(T,2),A=(B[0],B[1],n.filter((function(e){return!!e.isTokenOnly===!!w&&"0X"!==e.multiplier&&8!==e.pid}))),P=(n.filter((function(e){return!!e.isTokenOnly===!!w&&"0X"===e.multiplier&&8!==e.pid})),A.filter((function(e){return e.userData&&new j.a(e.userData.stakedBalance).isGreaterThan(0)})),s.e.div(we(),(function(e){return e.theme.mediaQueries.lg})));Object(i.useCallback)((function(e,n){return e.map((function(e){var n=new j.a(e.honestPerBlock||1).times(new j.a(e.poolWeight)).div(new j.a(10).pow(18)).times(p.a),r=t.times(n),o=new j.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===v.b.BNB&&(o=o.times(a)),o.comparedTo(0)>0&&(r=r.div(o)),Object(c.a)(Object(c.a)({},e),{},{apy:r})})).map((function(e){return Object(r.jsx)(ye,{farm:e,removed:n,bnbPrice:a,cakePrice:t,ethereum:y,account:k},e.pid)}))}),[a,k,t,y]);return Object(r.jsx)(O.a,{children:Object(r.jsx)(P,{children:Object(r.jsx)(f.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:"\ud83d\ude9c Cabbage Carrot and other veggie NFTs Coming Soon... \ud83d\ude9c"})})})}}}]);
//# sourceMappingURL=10.8425f881.chunk.js.map