(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),a=c(2),s=c.n(a),l=c(5),r=c(3),d=c(4),u=c(7),i=c(6),m=(c(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic","Milk","Bear"]),p=function(e){Object(u.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.addToSelected=function(t){e.state.selectedGoods.includes(t)?e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}})):e.setState((function(e){return{selectedGoods:[].concat(Object(l.a)(e.selectedGoods),[t])}}))},e.clearSelectedGoods=function(){e.setState({selectedGoods:[]})},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"SelectedGoods"},"Selected goods:"," ",this.state.selectedGoods.map((function(e,t,c){return c.length>1&&t===c.length-2?"".concat(e," and "):"".concat(e," ")})),o.a.createElement("button",{type:"button",onClick:this.clearSelectedGoods},"X")),"Length of all goods: ".concat(m.length),o.a.createElement("ul",{className:"ProductList"},m.map((function(t){var c=e.state.selectedGoods.includes(t);return o.a.createElement("li",{className:"Product",key:t},o.a.createElement("button",{className:"".concat(c?"Active":"NoneActive"," Button"),type:"button",onClick:function(){e.addToSelected(t)}},t))}))))}}]),c}(o.a.Component);s.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,c){e.exports=c(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.be654d7f.chunk.js.map