(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6370ab1e"],{6786:function(t,e,a){"use strict";var s=a("f197"),i=a.n(s);i.a},eea6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-w"},[a("fixed-top",{attrs:{title:t.title}},[a("div",{staticClass:"goback",on:{click:t.goback}},[t._v("返回")])]),"斗破苍穹"===t.$route.query.name?a("div",[a("div",{staticClass:"banner-w"},[a("div",{staticClass:"banner-img"}),a("div",{staticClass:"banner"},[t._m(0),a("div",{staticClass:"right"},[a("p",[t._v("更新至：第"+t._s(t.totalPage)+"话")]),a("p",[t._v("作者：天蚕土豆")]),a("p",[t._v("类别：热血、神魔、玄幻")]),a("div",{staticClass:"rading",on:{click:function(e){return t.gotoRead(0)}}},[t._v("开始阅读")])])])]),a("div",{staticClass:"desc"},[t._v("简介：斗破苍穹漫画是根据著名作家天蚕土豆作品斗破苍穹改编的漫画，这是一个属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！在斗气大陆上，真正的强者都是用实力说话的！")])]):t._e(),"星辰变"===t.$route.query.name?a("div",[a("div",{staticClass:"banner-w"},[a("div",{staticClass:"banner-img"}),a("div",{staticClass:"banner"},[t._m(1),a("div",{staticClass:"right"},[a("p",[t._v("更新至：第"+t._s(t.totalPage)+"话")]),a("p",[t._v("作者：我吃西红柿")]),a("p",[t._v("类别：少年漫画")]),a("div",{staticClass:"rading",on:{click:function(e){return t.gotoRead(0)}}},[t._v("开始阅读")])])])]),a("div",{staticClass:"desc"},[t._v("简介：一名孩童，天生无法修炼内功。为了得到父亲的重视关注，他毅然选择了修炼痛苦艰难的外功。春去秋来，时光如梭，这个孩童长大了……变成了一名青年，真正改变他的命运，是一颗流星化作的神秘晶石——流星泪。这颗流星泪在青年无所觉中，融入了青年的体内，青年他也仿佛破茧化蝶一般蜕变……而随之而来的，一切都发生了变化。而他的父亲也终于知道了他从来没有真正倾注心力的儿子的惊人实力……")])]):t._e(),"斗罗大陆"===t.$route.query.name?a("div",[a("div",{staticClass:"banner-w"},[a("div",{staticClass:"banner-img"}),a("div",{staticClass:"banner"},[t._m(2),a("div",{staticClass:"right"},[a("p",[t._v("更新至：第"+t._s(t.totalPage)+"话")]),a("p",[t._v("作者：我吃西红柿")]),a("p",[t._v("类别：少年漫画")]),a("div",{staticClass:"rading",on:{click:function(e){return t.gotoRead(0)}}},[t._v("开始阅读")])])])]),a("div",{staticClass:"desc"},[t._v("简介：偷学一身绝世功夫，最后却选择了跳崖明志，造化弄人，转世后却依然是令人艳羡的正太一枚；两世生涯中，唐三经历了怎样的人生？第二世中，他天生双武魂，先天满魂力，却一度被人认为是废武魂……在诺丁学院，遇到了野蛮可爱的萝莉小舞，血雨腥风儿女情更长。")])]):t._e(),a("p",{directives:[{name:"show",rawName:"v-show",value:t.prePage,expression:"prePage"}],staticClass:"desc-w",on:{click:function(e){return t.gotoRead(t.prePage-1)}}},[a("span",[t._v("上次阅读到第"),a("span",{staticClass:"light"},[t._v(t._s(t.prePage))]),t._v("话")]),a("span",{staticClass:"light"},[t._v("继续阅读")])]),a("div",{staticClass:"catalogue-w"},[a("h3",{staticClass:"menu-title"},[t._v("章节目录")]),a("div",{staticClass:"sequence-w"},[a("span",{staticClass:"sequence",class:{active:t.activeShow},on:{click:function(e){return t.checkFn(!0)}}},[t._v("正序↓")]),a("span",{staticClass:"sequence",class:{active:!t.activeShow},on:{click:function(e){return t.checkFn(!1)}}},[t._v("倒序↑")])])]),a("div",{staticClass:"page-w"},[a("ul",{staticClass:"uls"},t._l(t.totalPage,function(e,s){return a("li",{key:s,staticClass:"list",on:{click:function(e){return t.gotoPage(s)}}},[t._v("第"+t._s(t.indexM(e))+"话")])}),0)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("img",{attrs:{src:"https://img001.yayxcc.com/images/cover/201806/1529455715_1tHF6zSxFrqvJg6.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("img",{attrs:{src:"https://img001.yayxcc.com/images/cover/201804/1524124441EQr13r3zSnKgA4hP.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("img",{attrs:{src:"https://image.mhxk.com/mh/25933.jpg-480x640.webp",alt:""}})])}],n=(a("d4d5"),a("7364"),{data:function(){return{activeShow:!0,totalPage:0,title:"星辰变",prePage:""}},mounted:function(){"斗破苍穹"===this.$route.query.name&&localStorage.getItem("__doupoPage__")&&"undefined"!==localStorage.getItem("__doupoPage__")?this.prePage=Number(localStorage.getItem("__doupoPage__"))+1:"星辰变"===this.$route.query.name&&localStorage.getItem("__xPage__")&&"undefined"!==localStorage.getItem("__xPage__")?this.prePage=Number(localStorage.getItem("__xPage__"))+1:"斗罗大陆"===this.$route.query.name&&localStorage.getItem("__douluoPage__")&&"undefined"!==localStorage.getItem("__douluoPage__")&&(this.prePage=Number(localStorage.getItem("__douluoPage__"))+1),this.title=this.$route.query.name,"星辰变"===this.$route.query.name?this.totalPage=453:"斗破苍穹"===this.$route.query.name?this.totalPage=776:"斗罗大陆"===this.$route.query.name&&(this.totalPage=647)},methods:{goback:function(){this.$router.push("/")},indexM:function(t){return!0===this.activeShow?t:!1===this.activeShow?this.totalPage-t+1:void 0},checkFn:function(t){this.activeShow=t},gotoRead:function(t){this.$router.push({path:"/pages/"+t,query:{name:this.$route.query.name}})},gotoPage:function(t){var e=0;!0===this.activeShow&&(e=t),!1===this.activeShow&&(e=this.totalPage-t-1),this.$router.push({path:"/pages/".concat(e),query:{name:this.$route.query.name}})}},components:{fixedTop:function(t){return a.e("chunk-34c33e09").then(function(){var e=[a("e7d3")];t.apply(null,e)}.bind(this)).catch(a.oe)}}}),c=n,o=(a("6786"),a("17cc")),r=Object(o["a"])(c,s,i,!1,null,"d7f2ae40",null);e["default"]=r.exports},f197:function(t,e,a){}}]);