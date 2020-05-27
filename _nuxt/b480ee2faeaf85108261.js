(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("d879f088",content,!1,{sourceMap:!1})},379:function(t,e,n){"use strict";var r=n(378);n.n(r).a},380:function(t,e,n){(e=n(12)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Heading a{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;color:#006ca8 !important;text-decoration:none}.TextCard-Heading a:hover{text-decoration:underline}.TextCard-ExternalLinkIcon{margin-left:2px;color:#707070 !important}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}.TextCard-Body a:hover{text-decoration:underline}",""]),t.exports=e},381:function(t,e,n){"use strict";var r=n(107),o=n(111),l=n(109),c=n(108),d=n(110),h=n(11),f=n(35),w=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},m=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"isInternalLink",value:function(path){return!/^https?:\/\//.test(path)}}]),e}(f.c);w([Object(f.b)({default:"",required:!1})],m.prototype,"title",void 0),w([Object(f.b)({default:"",required:!1})],m.prototype,"link",void 0),w([Object(f.b)({default:"",required:!1})],m.prototype,"body",void 0);var x=m=w([f.a],m),y=(n(379),n(5)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextCard"},[t.title?n("h3",{staticClass:"TextCard-Heading"},[t.link?n("div",[n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.isInternalLink(t.link)?t._e():n("v-icon",{staticClass:"TextCard-ExternalLinkIcon",attrs:{size:"20"}},[t._v("\n        mdi-open-in-new\n      ")])],1):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?n("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports},383:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));var r=n(384),o=n.n(r),l=function(t){return o()(t).format("YYYY-MM-DDTHH:mm:ss")},c=function(t){return o()(t).format("YYYY-MM-DD")}},384:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",l=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},w="en",m={};m[w]=f;var x=function(t){return t instanceof v},y=function(t,e,n){var r;if(!t)return w;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return n||(w=r),r},g=function(t,e,n){if(x(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new v(r)},$=h;$.l=y,$.i=x,$.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var v=function(){function d(t){this.$L=this.$L||y(t.locale,null,!0),this.parse(t)}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return $},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return g(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<g(t)},h.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",a)},h.month=function(t){return this.$g(t,"$M",u)},h.day=function(t){return this.$g(t,"$W",i)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",r)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var l=this,c=!!$.u(o)||o,d=$.p(t),h=function(t,e){var n=$.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return c?n:n.endOf(i)},f=function(t,e){return $.w(l.toDate()[t].apply(l.toDate(),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},w=this.$W,m=this.$M,x=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case a:return c?h(1,0):h(31,11);case u:return c?h(1,m):h(0,m+1);case s:var g=this.$locale().weekStart||0,v=(w<g?w+7:w)-g;return h(c?x-v:x+(6-v),m);case i:case"date":return f(y+"Hours",0);case r:return f(y+"Minutes",1);case n:return f(y+"Seconds",2);case e:return f(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,o){var l,c=$.p(s),d="set"+(this.$u?"UTC":""),h=(l={},l[i]=d+"Date",l.date=d+"Date",l[u]=d+"Month",l[a]=d+"FullYear",l[r]=d+"Hours",l[n]=d+"Minutes",l[e]=d+"Seconds",l[t]=d+"Milliseconds",l)[c],f=c===i?this.$D+(o-this.$W):o;if(c===u||c===a){var w=this.clone().set("date",1);w.$d[h](f),w.init(),this.$d=w.set("date",Math.min(this.$D,w.daysInMonth())).toDate()}else h&&this.$d[h](f);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[$.p(t)]()},h.add=function(t,o){var l,c=this;t=Number(t);var d=$.p(o),h=function(e){var n=g(c);return $.w(n.date(n.date()+Math.round(e*t)),c)};if(d===u)return this.set(u,this.$M+t);if(d===a)return this.set(a,this.$y+t);if(d===i)return h(1);if(d===s)return h(7);var f=(l={},l[n]=6e4,l[r]=36e5,l[e]=1e3,l)[d]||1,w=this.$d.getTime()+t*f;return $.w(w,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=$.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,l=i.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},h=function(t){return $.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},w={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:d(i.monthsShort,o,l,3),MMMM:l[o]||l(this,n),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,a,2),ddd:d(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:$.s(s,2,"0"),h:h(1),hh:h(2),a:f(s,u,!0),A:f(s,u,!1),m:String(u),mm:$.s(u,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:r};return n.replace(c,(function(t,e){return e||w[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,l,c){var d,h=$.p(l),f=g(t),w=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,x=$.m(this,f);return x=(d={},d[a]=x/12,d[u]=x,d[o]=x/3,d[s]=(m-w)/6048e5,d[i]=(m-w)/864e5,d[r]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[h]||m,c?x:$.a(x)},h.daysInMonth=function(){return this.endOf(u).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return $.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}();return g.prototype=v.prototype,g.extend=function(t,e){return t(e,v,g),g},g.locale=y,g.isDayjs=x,g.unix=function(t){return g(1e3*t)},g.en=m[w],g.Ls=m,g}()},388:function(t,e,n){var content=n(434);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("99ceee9c",content,!1,{sourceMap:!1})},432:function(t){t.exports=JSON.parse('{"citiesItems":[{"date":null,"url":"https://www.pref.niigata.lg.jp/site/shingata-corona/","text":"新潟県：新型コロナウイルス感染症について"},{"date":null,"url":"https://www.pref.niigata.lg.jp/sec/kenko/covid19.html","text":"新潟県：新型コロナウイルス感染症（最新の状況）"},{"date":null,"url":"https://www.city.niigata.lg.jp/iryo/kenko/yobou_kansen/kansen/coronavirus.html","text":"新潟市：新型コロナウイルス感染症について"},{"date":null,"url":"https://www.city.nagaoka.niigata.jp/kurashi/cate96/index.html","text":"長岡市：新型コロナウイルス感染症に関する情報"},{"date":null,"url":"https://www.city.sanjo.niigata.jp/soshiki/somubu/seisakusuishin/kohokocho/12226.html","text":"三条市：新型コロナウイルス感染症について"},{"date":null,"url":"https://www.city.kashiwazaki.lg.jp/daijinaoshirase/18906.html","text":"柏崎市：新型コロナウイルス関連情報"},{"date":null,"url":"http://www.city.shibata.lg.jp/kurashi/iza/kansen/index.html","text":"新発田市：新型コロナウイルス関連情報"},{"date":null,"url":"https://www.city.ojiya.niigata.jp/soshiki/kikikanri/korona-information.html","text":"小千谷市：新型コロナウイルス感染症に関する情報"},{"date":null,"url":"http://www.city.kamo.niigata.jp/section/corona/","text":"加茂市：新型コロナウイルス感染症に関するお願い"},{"date":null,"url":"http://www.city.tokamachi.lg.jp/soshiki/sm/04/Coronavirus/index.html","text":"十日町市：新型コロナウイルス感染症対策本部"},{"date":null,"url":"http://www.city.mitsuke.niigata.jp/19346.htm","text":"見附市：新型コロナウイルス感染症に関する情報一覧"},{"date":null,"url":"http://www.city.murakami.lg.jp/site/korona/","text":"村上市：新型コロナウイルス関連情報　特設サイト"},{"date":null,"url":"http://www.city.tsubame.niigata.jp/life/041001194.html","text":"燕市：新型コロナウイルス感染症に関する情報について"},{"date":null,"url":"https://www.city.itoigawa.lg.jp/2004.htm","text":"糸魚川市：新型コロナウイルス関連情報"},{"date":null,"url":"https://www.city.myoko.niigata.jp/docs/covid-19.html","text":"妙高市：新型コロナウイルス関連情報"},{"date":null,"url":"https://www.city.gosen.lg.jp/kinkyu/6033.html","text":"五泉市：新型コロナウイルス関連情報"},{"date":null,"url":"https://www.city.joetsu.niigata.jp/site/coronavirus-info/","text":"上越市：新型コロナウイルス感染症関連情報"},{"date":null,"url":"http://www.city.agano.niigata.jp/site/corona/","text":"阿賀野市：新型コロナウイルスに関する情報（まとめ）"},{"date":null,"url":"https://www.city.sado.niigata.jp/info/data/2020/covid2019.shtmll","text":"佐渡市：新型コロナウイルス感染症に関する情報"},{"date":null,"url":"https://www.city.uonuma.niigata.jp/important-information/2020042000101/","text":"魚沼市：市民のみなさまへ（新型コロナウイルス感染症に関する総合情報）"},{"date":null,"url":"http://www.city.minamiuonuma.niigata.jp/kinkyu/index.html","text":"南魚沼市：緊急情報／コロナウイルス対策含む"},{"date":null,"url":"http://www.city.tainai.niigata.jp/gyose/koho/covid-19.html","text":"胎内市：新型コロナウイルス感染症に関連する情報"},{"date":null,"url":"http://www.town.seiro.niigata.jp/hokenfukusi/20200204coronavirus.htmll","text":"聖籠町：新型コロナウイルスに関すること"},{"date":null,"url":"http://www.vill.yahiko.niigata.jp/%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E3%81%AB%E9%96%A2%E3%82%8F%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/","text":"弥彦村：新型コロナウイルス感染症に関わるお知らせ"},{"date":null,"url":"http://www.town.tagami.niigata.jp/living/ho/2020-0131-0848-39.html","text":"田上町：新型コロナウイルス関連情報"},{"date":null,"url":"http://www.town.aga.niigata.jp/gyousei/section/agamachi/details_1284.html","text":"阿賀町：新型コロナウイルス感染症に伴う全国緊急事態宣言に関する町民の皆様へのお願い"},{"date":null,"url":"http://www.town.izumozaki.niigata.jp/topics/2020022700038/","text":"出雲崎町：新型コロナウイルス感染症について"},{"date":null,"url":"https://www.town.yuzawa.lg.jp/emergency/3430.html","text":"湯沢町：新型コロナウイルス関連情報 特設サイト"},{"date":null,"url":"https://www.town.tsunan.niigata.jp/soshiki/somu/haien.html","text":"津南町：新型コロナウイルス感染症について"},{"date":null,"url":"http://www.vill.kariwa.niigata.jp/www/info/detail.jsp?id=6112","text":"刈羽村：新型コロナウイルス関連情報"},{"date":null,"url":"http://www.vill.sekikawa.niigata.jp/life/1866/2452/index.html","text":"関川村：新型コロナウイルス感染症に関する情報"},{"date":null,"url":"http://www.vill.awashimaura.lg.jp/wp-content/uploads/2020/04/20200408-korona-jisyuku.pdf","text":"粟島浦村：粟島浦村にご来島を予定されている観光客及び帰省客等の皆様に対する旅行等の見直し・延期のお願い"}]}')},433:function(t,e,n){"use strict";var r=n(388);n.n(r).a},434:function(t,e,n){(e=n(12)(!1)).push([t.i,".Transit-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}.Transit-Corp-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.Transit-Corp-list{padding-left:0px;list-style-type:none}.Transit-Corp-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.Transit-Corp-list-item-anchor{display:flex;flex-wrap:wrap}}.Transit-Corp-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.Transit-Corp-list-item-anchor-time{flex:0 0 100%}}.Transit-Corp-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.Transit-Corp-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.Transit-Corp-list-item-anchor-link{padding-left:8px}}.Transit-item-ExternalLinkIcon{margin-left:2px;color:#707070 !important}",""]),t.exports=e},517:function(t,e,n){"use strict";n.r(e);var r=n(381),o=n(432),l=n(383),c={components:{TextCard:r.a},data:function(){return{citiesItems:o.citiesItems}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(l.a)(t)},head:function(){return{title:this.$t("新潟県内 各市町村のコロナウイルス感染症情報")}}}},d=(n(433),n(5)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Cities"},[n("h2",{staticClass:"Cities-Heading"},[t._v("\n    "+t._s(t.$t("新潟県内 各市町村のコロナウイルス感染症情報"))+"\n  ")]),t._v(" "),t._l(t.citiesItems,(function(e,i){return n("TextCard",{key:i},[n("ul",{staticClass:"Cities-Corp-list"},[n("a",{staticClass:"Cities-Corp-list-citiesItem-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("span",{staticClass:"Cities-Corp-list-citiesItem-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"Cities-citiesItem-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);