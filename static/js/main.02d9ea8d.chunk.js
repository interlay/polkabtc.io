(this["webpackJsonpxlcaim-ui"]=this["webpackJsonpxlcaim-ui"]||[]).push([[0],{1333:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),i=a(500),V=a.n(i),s=a(30),l=a.n(s),u=a(73),c=a(64),q=a(65),o=a(134),h=a(136),d=a(218),f=a(40),W=(a(514),a(515),a(516),a(517),a(1334)),m=a(501),p=a.n(m),v=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(q.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",{className:"jumbotron min-vh-100 text-center polkabtc-background no-margin-bottom"},n.a.createElement("div",{className:"container mt-5"},n.a.createElement(d.b,{to:"/"},n.a.createElement(W.a,{src:p.a,width:"256"})),n.a.createElement("h1",{style:{color:"white"},className:"mt-3"},"PolkaBTC: Trustless Bitcoin on Polkadot"),n.a.createElement("h4",{style:{color:"white"},className:"mt-3"},"More infos soon..."))))}}]),a}(r.Component),R=a(1335),A=a(172),I=a(504),b=a.n(I),E=a(505),F=a.n(E),Y=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(q.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"footer mt-5 flex-fill fixed-bottom"},n.a.createElement(R.a,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 float-md-left"},n.a.createElement("h3",{style:{fontSize:"1.5em",color:"white"},className:"lead mt-3"},"PolkaBTC is built and powered by   \xa0 \xa0 \xa0 \xa0",n.a.createElement("a",{href:"https://www.interlay.io/",target:"__blank"},n.a.createElement(W.a,{src:b.a,height:"30em"})),"\xa0 \xa0 \xa0 \xa0",n.a.createElement("a",{href:"https://web3.foundation/",target:"__blank"},n.a.createElement(W.a,{src:F.a,height:"40rem"}))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 float-md-left"},n.a.createElement("h4",{style:{fontSize:"1.2em",color:"white"},className:"lead"},n.a.createElement("a",{rel:"noopener noreferrer",title:"","data-placement":"bottom",href:"https://t.me/interlay",target:"_blank","data-original-title":"Join our Telegram channel"},n.a.createElement(A.c,null)),"\xa0 \xa0 \xa0",n.a.createElement("a",{rel:"noopener noreferrer",title:"","data-placement":"bottom",href:"https://medium.com/Interlay",target:"_blank","data-original-title":"Follow us on Medium"},n.a.createElement(A.b,null)),"\xa0 \xa0 \xa0",n.a.createElement("a",{rel:"noopener noreferrer",title:"","data-placement":"bottom",href:"https://github.com/interlay",target:"_blank","data-original-title":"Follow us on Github"},n.a.createElement(A.a,null)),"\xa0 \xa0 \xa0",n.a.createElement("a",{rel:"noopener noreferrer",title:"","data-placement":"bottom",href:"https://twitter.com/interlayHQ",target:"_blank","data-original-title":"Follow us on Twitter"},n.a.createElement(A.d,null))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 float-md-left"},n.a.createElement("h3",{style:{fontSize:"0.8em",color:"white"},className:"lead mt-3"},"\xa9 2020 Interlay. All Rights Reserved")))))}}]),a}(r.Component),y=a(225),K=new TypeError("Substrate API not connected. Make sure you can connect to a node."),k=function(){function e(){Object(c.a)(this,e),this.wsProvider=void 0,this.api=void 0,this.keyring=void 0,this.wsProvider=new y.WsProvider("ws://127.0.0.1:9944")}return Object(q.a)(e,[{key:"connect",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.ApiPromise.create({provider:this.wsProvider,types:{H256Le:"H256",DOT:"u128",PolkaBTC:"Balance",BTCBalance:"u128"}});case 2:this.api=e.sent,this.keyring=new y.Keyring,console.log(this.api.query);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTotalPolkaBTC",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.api){e.next=8;break}return e.next=3,this.api.query.polkaBtc.totalIssuance();case 3:return t=e.sent,console.log(t),e.abrupt("return",t.toString());case 8:throw K;case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTotalLockedDOT",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.api){e.next=7;break}return e.next=3,this.api.query.collateral.totalCollateral();case 3:return t=e.sent,e.abrupt("return",t.toString());case 7:throw K;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTotalDOT",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.api){e.next=7;break}return e.next=3,this.api.query.dot.totalIssuance();case 3:return t=e.sent,e.abrupt("return",t.toString());case 7:throw K;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBalancePolkaBTC",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.api){e.next=8;break}return e.next=3,this.api.query.system.account(t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r.free.toString());case 8:throw K;case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBalanceDOT",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.api){e.next=8;break}return e.next=3,this.api.query.system.account(t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r.free.toString());case 8:throw K;case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),w=a(506),Z=function(){function e(t){Object(c.a)(this,e),this.address="",this.issueRequests=[],this.redeemRequests=[],this.address=t;var a=this.loadRequests(),r=Object(w.a)(a,2);this.issueRequests=r[0],this.redeemRequests=r[1]}return Object(q.a)(e,[{key:"loadRequests",value:function(){var e=localStorage.getItem(this.address);if(null!=e){var t=JSON.parse(e);return[t.issueRequests,t.redeemRequests]}return[[],[]]}},{key:"getIssueRequests",value:function(){return this.issueRequests}},{key:"getRedeemRequests",value:function(){return this.redeemRequests}},{key:"appendIssueRequest",value:function(e){console.log("Storing"+e),this.issueRequests.push(e),this.writeToStorage()}},{key:"appendRedeemRequest",value:function(e){this.redeemRequests.push(e),this.writeToStorage()}},{key:"modifyIssueRequest",value:function(e){for(var t=e.id,a=0;a<this.issueRequests.length;a++)if(this.issueRequests[a].id===t){this.issueRequests[a]=e;break}this.writeToStorage()}},{key:"modifyRedeemRequest",value:function(e){for(var t=e.id,a=0;a<this.redeemRequests.length;a++)if(this.redeemRequests[a].id===t){this.redeemRequests[a]=e;break}this.writeToStorage()}},{key:"deleteIssueRequest",value:function(e){var t=this.issueRequests.find((function(t){return t.id===e}));if(t){var a=this.issueRequests.indexOf(t,0);a>-1&&this.issueRequests.splice(a,1)}this.writeToStorage()}},{key:"deleteRedeemRequest",value:function(e){var t=this.redeemRequests.find((function(t){return t.id===e}));if(t){var a=this.redeemRequests.indexOf(t,0);a>-1&&this.redeemRequests.splice(a,1)}this.writeToStorage()}},{key:"clearStorage",value:function(){localStorage.clear()}},{key:"writeToStorage",value:function(){var e=JSON.stringify({issueRequests:this.issueRequests,redeemRequests:this.redeemRequests});localStorage.setItem(this.address,e)}}]),e}(),x="tb1qmwv7aqktv5l44x65qmsk6u4z9wh66nazv9rgv3",S="tb1q4kspwcf42cqp66hrhw407djna4dgpw9lsnfx5e",g=[{id:"1",amount:"5.7",creation:"2020-06-15T19:07:00.000Z",vaultAddress:"aa269f4bd72bd...7d10a62a9cdd8d7f",btcTx:"3b4162a307fab...b588d61a9069e762",confirmations:25,completed:!0},{id:"2",amount:"1.5",creation:"2020-06-16T21:08:00.000Z",vaultAddress:"aa269f4bd72bd...7d10a62a9cdd8d7f",btcTx:"d3c6652dfa406...e4aacb4c441e030e",confirmations:9,completed:!0}],T=[{id:"1",amount:"0.5",creation:"2020-06-15T16:09:01.000Z",vaultAddress:"aa269f4bd72bd...7d10a62a9cdd8d7f",btcTx:"3b4162a307fab...b588d61a9069e762",confirmations:18,redeemAddress:x,vaultBTCAddress:S,completed:!0},{id:"2",amount:"0.2",creation:"2020-06-13T20:08:23.000Z",vaultAddress:"aa269f4bd72bd...7d10a62a9cdd8d7f",btcTx:"d3c6652dfa406...e4aacb4c441e030e",confirmations:7,redeemAddress:x,vaultBTCAddress:S,completed:!0}],O=function(){function e(){Object(c.a)(this,e)}return Object(q.a)(e,[{key:"getValue",value:function(e){var t=localStorage.getItem(e);return null!=t?t:""}},{key:"setValue",value:function(e,t){localStorage.setItem(e,t)}}]),e}(),C=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={parachain:new k,account:void 0,address:void 0,vault:!1,storage:void 0,kvstorage:new O},e}return Object(q.a)(a,[{key:"initParachain",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.state.parachain.connect();case 2:this.setState({parachain:this.state.parachain});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.parachain.keyring){e.next=3;break}return e.next=3,this.initParachain();case 3:a=null===(t=this.state.parachain.keyring)||void 0===t?void 0:t.addFromUri("//Alice"),r=null===a||void 0===a?void 0:a.address,this.setState({account:a,address:r});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getVault",value:function(){this.setState({vault:!0})}},{key:"getStorage",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.address){e.next=3;break}return e.next=3,this.getAccount();case 3:this.state.address&&(localStorage.clear(),t=new Z(this.state.address),this.mockStorage(t),this.setState({storage:t}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mockStorage",value:function(e){if(e){for(var t=0;t<g.length;t++)e.appendIssueRequest(g[t]);for(var a=0;a<T.length;a++)e.appendRedeemRequest(T[a])}this.state.kvstorage&&(this.state.kvstorage.setValue("totalPolkaBTC","12333.41"),this.state.kvstorage.setValue("totalLockedDOT","43243.98"),this.state.kvstorage.setValue("balancePolkaBTC","7.2"),this.state.kvstorage.setValue("balanceDOT","20.21"),this.state.kvstorage.setValue("balanceLockedDOT","19431.94"),this.state.kvstorage.setValue("backedPolkaBTC","109.96"),this.state.kvstorage.setValue("collateralRate","228.02"),this.state.kvstorage.setValue("feesEarned","0.34"))}},{key:"componentDidMount",value:function(){this.initParachain(),this.getAccount(),this.getVault(),this.getStorage()}},{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"main d-flex flex-column min-vh-100"},n.a.createElement("div",null,n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/"},n.a.createElement(v,this.state)))),n.a.createElement(Y,null)))}}]),a}(r.Component);V.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root"))},501:function(e,t,a){e.exports=a.p+"static/media/PolkaBTC_white.6897aab9.svg"},504:function(e,t){e.exports="data:image/png;base64,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"},505:function(e,t,a){e.exports=a.p+"static/media/web3foundation_grants_badge_black.f20a9608.png"},508:function(e,t,a){e.exports=a(1333)},514:function(e,t,a){},515:function(e,t,a){},517:function(e,t,a){},546:function(e,t){},594:function(e,t){},596:function(e,t){},627:function(e,t){},629:function(e,t){},630:function(e,t){},636:function(e,t){},638:function(e,t){},656:function(e,t){},659:function(e,t){},675:function(e,t){},678:function(e,t){},708:function(e,t){}},[[508,1,2]]]);
//# sourceMappingURL=main.02d9ea8d.chunk.js.map