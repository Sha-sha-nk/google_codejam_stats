(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5432:function(e,t,n){e.exports=n(5604)},5604:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),o=n.n(s),i=n(22),c=n(23),l=n(25),u=n(24),p=n(26),d=n(31),m=n.n(d),h=n(49),f=n(19),g=n(5),w=n(131),b=n.n(w),v=n(134),E=Object(v.a)(b.a.create()),y=function(e){if(e.status<200||e.status>=300)throw new Error(e.status+": "+e.statusText);return e.data},O=function(e){return E.get("round_data/info/".concat(e,".json")).then(y)},j=function(e){return E.get("round_data/scores/".concat(e,".json")).then(y)},k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,roundInfo:void 0,roundResults:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(){var e=Object(h.a)(m.a.mark(function e(t){var n,a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props!=t){e.next=2;break}return e.abrupt("return");case 2:if(t.round){e.next=5;break}return this.setState({isLoading:!1,roundInfo:void 0,roundResults:[]}),e.abrupt("return");case 5:return this.setState({isLoading:!0}),n=t.round.id,e.next=9,O(n);case 9:return a=e.sent,e.next=12,j(n);case 12:r=e.sent,console.log(a,r),this.setState({isLoading:!1,roundInfo:a,roundResults:r});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderHelp",value:function(){return r.a.createElement(g.q,{paragraph:!0},"Please select a round from the side menu.")}},{key:"renderStats",value:function(e,t){return r.a.createElement("div",null,r.a.createElement(g.q,{paragraph:!0},e.fullScoreboardSize," people participated in this round. Here are the results of Lithuanian participants:"),r.a.createElement(g.j,{className:this.props.classes.tableRoot},r.a.createElement(g.k,null,r.a.createElement(g.n,null,r.a.createElement(g.o,null,r.a.createElement(g.m,null,"Rank"),r.a.createElement(g.m,null,"Username"),r.a.createElement(g.m,null,"Score"))),r.a.createElement(g.l,null,t.filter(function(e){return"Lithuania"==e.country}).sort(function(e,t){return e.rank-t.rank}).map(function(e,t){return r.a.createElement(g.o,{key:t},r.a.createElement(g.m,null,e.rank),r.a.createElement(g.m,null,e.displayname),r.a.createElement(g.m,null,e.score_1))})))))}},{key:"render",value:function(){return r.a.createElement("main",{className:this.props.classes.content},r.a.createElement("div",{className:this.props.classes.toolbar}),this.state.isLoading?r.a.createElement(g.b,{className:this.props.classes.progress,color:"secondary"}):this.state.roundInfo?this.renderStats(this.state.roundInfo,this.state.roundResults):this.renderHelp())}}]),t}(a.Component),x=n(74),S=function(e){return Object(f.createStyles)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:Object(x.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240},content:{flexGrow:1,padding:3*e.spacing.unit,display:"flex",flexDirection:"column",overflowX:"auto"},toolbar:e.mixins.toolbar,progress:{margin:2*e.spacing.unit,alignSelf:"center"},menuButton:Object(x.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),tableRoot:{overflowX:"auto"}})},D=n(133),N=Object(f.withStyles)(S)(function(e){var t=e.classes,n=e.onDrawerToggle;return r.a.createElement(g.a,{position:"fixed",className:t.appBar},r.a.createElement(g.p,null,r.a.createElement(g.f,{color:"inherit","aria-label":"Open drawer",onClick:n,className:t.menuButton},r.a.createElement(D.a,null)),r.a.createElement(g.q,{variant:"h6",color:"inherit",noWrap:!0},"Google Code Jam Statistics")))}),R=Object(f.withStyles)(S,{withTheme:!0})(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isDrawerOpen:!1},n.handleDrawerToggle=function(){n.setState({isDrawerOpen:!n.state.isDrawerOpen})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderDrawer",value:function(){var e=this.props,t=e.classes,n=e.isLoading,a=e.rounds,s=e.onRoundClicked;return n?r.a.createElement(g.b,{className:t.progress}):r.a.createElement(g.g,null,a.map(function(e){return r.a.createElement(g.h,{key:e.id,button:!0},r.a.createElement(g.i,{primary:"".concat(e.displayName," ").concat(e.year),onClick:function(){return s(e)}}))}))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(N,{onDrawerToggle:this.handleDrawerToggle}),r.a.createElement("nav",{className:e.drawer},r.a.createElement(g.e,{smUp:!0,implementation:"css"},r.a.createElement(g.d,{className:e.drawer,variant:"temporary",anchor:"rtl"===this.props.theme.direction?"right":"left",open:this.state.isDrawerOpen,onClose:this.handleDrawerToggle,classes:{paper:e.drawerPaper}},this.renderDrawer())),r.a.createElement(g.e,{xsDown:!0,implementation:"css"},r.a.createElement(g.d,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},open:!0},r.a.createElement("div",{className:e.toolbar}),this.renderDrawer()))))}}]),t}(a.Component)),L=Object(f.withStyles)(S)(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={rounds:[],isLoading:!0},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("config.json").then(y);case 2:return t=e.sent,e.next=5,new Promise(function(e){return setTimeout(e,1e3)});case 5:this.setState({rounds:t.rounds,isLoading:!1});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoading,a=t.rounds,s=t.selectedRound,o=this.props.classes;return r.a.createElement("div",{className:o.root},r.a.createElement(R,Object.assign({},this.props,{isLoading:n,rounds:a,onRoundClicked:function(t){return e.setState({selectedRound:t})}})),r.a.createElement(k,Object.assign({},this.props,{round:s})))}}]),t}(a.Component)),C=n(35),T=Object(f.createMuiTheme)({palette:{primary:C.indigo,secondary:C.pink,type:"light"},typography:{useNextVariants:!0}}),I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f.MuiThemeProvider,{theme:T},r.a.createElement(r.a.Fragment,null,r.a.createElement(g.c,null),r.a.createElement(L,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5432,1,2]]]);
//# sourceMappingURL=main.990002b2.chunk.js.map