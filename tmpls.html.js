;(function(e){function t(e,t){return e-t}var n=e.definePartial,r=e.cloneObj,i=e.extend,s=e.strEscapes,o=new Error("Unknown error"),u=e.RangeLiteralHash,a="tmpls.html";n(function(e,n){n=r(n)||{};var i,a="",f,l;return a+="\n",f=function(){function i(e,t,n,i,o){var u,a="",f,l;return n==null?a:(t=r(t),l={value:n,key:i,index:o,even:o%2===0,odd:o%2===1,first:o===0,last:o===c-1},a+='\n<p>\n   Template Source (<span class="source_collection_id">',a+=s(l.value.collection_id,{html:!0}),a+='</span>):<br>\n   <textarea class="tsource" data-collection-id="',a+=s(l.value.collection_id,{string:!0}),a+='" rows="20">',a+=s(l.value.collection_source,{html:!0}),a+="</textarea>\n</p>\n",a)}var a,l=0,c,h="",p,d;p=e.sources;if(p==null)return"";if(Array.isArray(p)){c=p.length;for(a=0;a<c;a++)f=i(e,n,p[a],""+a,a),h+=f}else{if(typeof p!="object")return o;d=Object.keys(p),c=d.length,p instanceof u&&d.sort(t);for(a=0;a<c;a++)f=i(e,n,p[d[a]],d[a],a),h+=f}return h}(),a+=f,a+='\n<p class="source_error"></p>\n',a},"tmpls.html#td_source"),n(function(e,n){n=r(n)||{};var i,a="",f,l;return a+="\n",f=function(){function i(e,t,n,i,o){var u,a="",f,l;return n==null?a:(t=r(t),l={value:n,key:i,index:o,even:o%2===0,odd:o%2===1,first:o===0,last:o===c-1},a+='\n<p>\n   Compiled Template (<span class="compile_collection_id">',a+=s(l.value.collection_id,{html:!0}),a+='</span>):<br>\n   <textarea class="tcompiled" rows="20" readonly>',a+=s(l.value.collection_compiled,{html:!0}),a+="</textarea>\n</p>\n",a)}var a,l=0,c,h="",p,d;p=e.compiles;if(p==null)return"";if(Array.isArray(p)){c=p.length;for(a=0;a<c;a++)f=i(e,n,p[a],""+a,a),h+=f}else{if(typeof p!="object")return o;d=Object.keys(p),c=d.length,p instanceof u&&d.sort(t);for(a=0;a<c;a++)f=i(e,n,p[d[a]],d[a],a),h+=f}return h}(),a+=f,a+="\n",a},"tmpls.html#td_compiled"),n(function(e,t){t=r(t)||{};var n,i="",o,u;return i+='\n<p>\n   Render Context Data (JSON):<br>\n   <textarea rows="20">',i+=s(e.data,{html:!0}),i+='</textarea>\n</p>\n<p class="data_error"></p>\n',i},"tmpls.html#td_data"),n(function(e,t){t=r(t)||{};var n,i="",o,u;return i+='\n<p>\n   Render Output (<span id="render_collection_id">',i+=s(e.collection_id,{html:!0}),i+='</span><span id="render_partial_id">',i+=s(e.partial_id,{html:!0}),i+='</span>):<br>\n   <textarea rows="20" readonly>',i+=s(e.rendered,{html:!0}),i+='</textarea>\n</p>\n<p class="render_error"></p>\n',i},"tmpls.html#td_rendered"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_1"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_1"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$: "#main" }\n   Hello <b>{$= $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_2"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_2"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "main" }\n   Hello <b>{$insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_3"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_3"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" . }\n   Hello <b>{$insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_4"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_4"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" $}\n   Hello <b>{$insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_5"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_5"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$ insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_6"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_6"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who $}</b>!\n{$}\nfoo\n',i},"tmpls.html#sample_tmpl_7"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_7"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$inser $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_8"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_8"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who }</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_9"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_9"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who. $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_10"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_10"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who2 $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_11"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_11"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who2.me $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_12"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_12"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" |\n   who = $.who2[3]\n}\n   Hello <b>{$insert who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_13"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_13"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#who" }\n   <b>{$insert $.who $}</b>\n{$}\n\n{$define "#main" }\n   Hello {$partial "#who" $}!\n{$}\n',i},"tmpls.html#sample_tmpl_14"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_14"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#who" }\n   <b>{$insert $.who $}</b>\n{$}\n\n{$define "#main" |\n   who = $.who ? "#who"\n}\n   Hello {$partial who $}!\n{$}\n',i},"tmpls.html#sample_tmpl_15"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_15"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" |\n   checked[0..2] = $.myradio ? "checked"\n}\n   <input type="radio" name="myradio" value="0" {$insert checked[0] $}> 0\n   <input type="radio" name="myradio" value="1" {$insert checked[1] $}> 1\n   <input type="radio" name="myradio" value="2" {$insert checked[2] $}> 2\n{$}\n',i},"tmpls.html#sample_tmpl_16"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "myradio": 2\n}\n',i},"tmpls.html#sample_data_16"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$comment NOTE: this shows a little "trick" (aka "shortcut") to loop over the pre-computation hash, to avoid having to specify the values range twice. /$}\n\n\n{$define "#main" |\n   options[0..2] = $.myradio ? "checked"\n}\n   {$loop options }\n      <input type="radio" name="myradio" value="{$insert _.key $}" {$insert _.value $}> {$insert _.key $}\n   {$}\n{$}\n',i},"tmpls.html#sample_tmpl_17"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "myradio": 2\n}\n',i},"tmpls.html#sample_data_17"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   <h1>Settings</h1>\n   {$loop $.settings |\n      name = _.key |\n      options["low","high"] = _.value ? "checked"\n   }\n      <h2>{$insert name $}</h2>\n      {$loop options }\n         <input type="radio" name="{$insert name $}" value="{$insert _.key $}" {$insert _.value $}> {$insert _.key $}\n      {$}\n   {$}\n{$}\n',i},"tmpls.html#sample_tmpl_18"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n    "settings" : {\n        "foo" : "low",\n        "bar" : "high",\n        "baz" : "low"\n    }\n}\n',i},"tmpls.html#sample_data_18"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+="\n\n{$comment from: http://jsperf.com/grips-performance/3 /$}\n\n\n{$define '#main' }<div><h1 class='header'>{$insert $.header $}</h1><h2 class='header2'>{$insert $.header2 $}</h2><h3 class='header3'>{$insert $.header3 $}</h3><h4 class='header4'>{$insert $.header4 $}</h4><h5 class='header5'>{$insert $.header5 $}</h5><h6 class='header6'>{$insert $.header6 $}</h6><ul class='list'>{$loop $.list }<li class='item'>{$= _.value $}</li>{$}</ul></div>{$}\n",i},"tmpls.html#sample_tmpl_19"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "header": "Header",\n   "header2": "Header2",\n   "header3": "Header3",\n   "header4": "Header4",\n   "header5": "Header5",\n   "header6": "Header6",\n   "list": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]\n}\n',i},"tmpls.html#sample_data_19"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   <h1>A list of ({$insert $.fruits.length $}) fruits</h1>\n   <ul>\n      {$loop $.fruits }\n         <li>{$insert _.key $}: {$insert _.value $}</li>\n      {$}\n   </ul>\n{$}\n',i},"tmpls.html#sample_tmpl_20"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "fruits": [\n      "Apple",\n      "Banana",\n      "Orange",\n      "Grape"\n   ]\n}\n',i},"tmpls.html#sample_data_20"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   <h1>A list of fruits</h1>\n   <ul>\n      {$loop $.fruits }\n         <li>{$insert _.key $}: {$insert _.value $}</li>\n      {$}\n   </ul>\n{$}\n',i},"tmpls.html#sample_tmpl_21"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "fruits": {\n      "apple": "Apple",\n      "banana": "Banana",\n      "orange": "Orange",\n      "grape": "Grape"\n   }\n}\n',i},"tmpls.html#sample_data_21"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   <h1>A list of fruits</h1>\n   <ul>\n      {$loop $.fruits |\n         oddeven = _.odd ? "odd_row" : "even_row" |\n         first = _.first ? "first_row" |\n         last = _.last ? "last_row"\n      }\n         <li class="{$insert oddeven $} {$insert first $} {$insert last $}">\n            {$insert _.value $}\n         </li>\n      {$}\n   </ul>\n{$}\n',i},"tmpls.html#sample_tmpl_22"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "fruits": [\n      "Apple",\n      "Banana",\n      "Orange",\n      "Grape"\n   ]\n}\n',i},"tmpls.html#sample_data_22"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$define "#main" }\n   <h1>A list of fruits</h1>\n   <ul>\n      {$loop $.fruits | name = _.value }\n         {$partial "#fruit" | _ $}\n      {$}\n   </ul>\n{$}\n\n{$define "#fruit" |\n   oddeven = $.odd ? "odd_row" : "even_row" |\n   first = $.first ? "first_row" |\n   last = $.last ? "last_row"\n}\n   <li class="{$insert oddeven $} {$insert first $} {$insert last $}">\n      {$insert name $}\n   </li>\n{$}\n\n',i},"tmpls.html#sample_tmpl_23"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "fruits": [\n      "Apple",\n      "Banana",\n      "Orange",\n      "Grape"\n   ]\n}\n',i},"tmpls.html#sample_data_23"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$define "#main" }\n   <h1>Grocery Cart</h1>\n   <ul>\n   {$loop $.grocerycart }\n      <li>\n         <h2>{$insert _.key $}</h2>\n         <ul>\n            {$loop _.value | name = _.value }\n               {$partial "#produce" | _ $}\n            {$}\n         </ul>\n      </li>\n   {$}\n   </ul>\n{$}\n\n{$define "#produce" |\n   oddeven = $.odd ? "odd_row" : "even_row" |\n   first = $.first ? "first_row" |\n   last = $.last ? "last_row"\n}\n   <li class="{$insert oddeven $} {$insert first $} {$insert last $}">\n      {$insert name $}\n   </li>\n{$}\n\n',i},"tmpls.html#sample_tmpl_24"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "grocerycart": {\n      "Fruits": [\n         "Apple",\n         "Banana",\n         "Orange",\n         "Grape"\n      ],\n      "Veggies": [\n         "Broccoli",\n         "Carrot",\n         "Tomato"\n      ]\n   }\n}\n',i},"tmpls.html#sample_data_24"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   <h1>A list of numbers</h1>\n   <ul>\n      {$loop [3..6] }\n         <li>{$insert _.value $}</li>\n      {$}\n   </ul>\n{$}\n',i},"tmpls.html#sample_tmpl_25"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+="\n{}\n",i},"tmpls.html#sample_data_25"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   <h1>A set of strings</h1>\n   <ul>\n      {$loop ["apple","orange","banana"] }\n         <li>{$insert _.value $}</li>\n      {$}\n   </ul>\n{$}\n',i},"tmpls.html#sample_tmpl_26"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+="\n{}\n",i},"tmpls.html#sample_data_26"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$define "#who" }\n   <b>{$insert $.name $}</b>\n{$}\n\n{$define "#main" }\n   Hello {$partial "#who" | $.who $}!\n{$}\n\n',i},"tmpls.html#sample_tmpl_27"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": {\n      "name": "World"\n   }\n}\n',i},"tmpls.html#sample_data_27"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$define "#who" }\n   <b>{$insert $.name $}</b>\n{$}\n\n{$define "#main" }\n   Hello {$partial "#who" | $.who $}!\n{$}\n\n',i},"tmpls.html#sample_tmpl_28_a"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$extend "sample_tmpl_28_a" $}\n\n{$define "#who" }\n   <b><em>{$insert $.name $}</em></b>\n{$}\n\n',i},"tmpls.html#sample_tmpl_28_b"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": {\n      "name": "World"\n   }\n}\n',i},"tmpls.html#sample_data_28"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$define "#who" }\n   <b>{$insert $.name $}</b>\n{$}\n\n{$define "#main" }\n   Hello {$partial "#who" | $.who $}!\n{$}\n\n',i},"tmpls.html#sample_tmpl_29_a"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$extend "sample_tmpl_29_a" $}\n\n{$define "#main" }\n   Hello {$partial "#who" | $.who $}!!!!!\n{$}\n\n',i},"tmpls.html#sample_tmpl_29_b"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": {\n      "name": "World"\n   }\n}\n',i},"tmpls.html#sample_data_29"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$define "#who" }\n   <b>{$insert $.name $}</b>\n{$}\n\n{$define "#main" }\n   Hello {$partial "#who" | $.who $}!\n{$}\n\n',i},"tmpls.html#sample_tmpl_30_a"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n\n{$extend "sample_tmpl_30_a" $}\n\n{$define "#main" }\n   {$partial "sample_tmpl_30_a#main" $}!!!!\n{$}\n\n',i},"tmpls.html#sample_tmpl_30_b"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": {\n      "name": "World"\n   }\n}\n',i},"tmpls.html#sample_data_30"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert~h $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_31"),n(function(e,t){t=r(t)||{};var n,i="",o,u;return i+='\n{\n   "who": "',o=s(function(){var e="",t;return e+='World<script>alert("Owned");</script>',e}(),{string:!0}),i+=o,i+='"\n}\n',i},"tmpls.html#sample_data_31"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   <script>\n   var name = "{$insert~s $.who $}";\n   alert(name);\n   </script>\n{$}\n',i},"tmpls.html#sample_tmpl_32"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "Chad \'Ochocinco\' Johnson"\n}\n',i},"tmpls.html#sample_data_32"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   <a href="http://someproxy.net?u={$insert~u $.where $}">Proxied search</a>\n{$}\n',i},"tmpls.html#sample_tmpl_33"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "where": "https://www.google.com/search?q=grips"\n}\n',i},"tmpls.html#sample_data_33"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Here\'s some markup:\n   <pre>{$escape h }\n      <p>\n         This is <b>{$insert $.what $}</b>!\n      </p>\n   {$}</pre>\n{$}\n',i},"tmpls.html#sample_tmpl_34"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "what": "super <em>awesome</em> sauce"\n}\n',i},"tmpls.html#sample_data_34"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" |\n   foo = $.foo ? "foo" : "bar" |\n   baz = $.baz ? "baz"\n}\n   foo: {$insert foo $}\n   baz: {$insert baz $}\n{$}\n\n',i},"tmpls.html#sample_tmpl_35"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "foo": false,\n   "baz": false\n}\n',i},"tmpls.html#sample_data_35"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Sample grips template:\n   {$raw \n      foo: {$insert $.foo $}\n   %$}\n{$}\n',i},"tmpls.html#sample_tmpl_36"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+="\n{}\n",i},"tmpls.html#sample_data_36"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   If you want to do a template comment in\n   grips...\n\n   {$comment this is how you do it. /$}\n\n   Easy, huh?\n{$}\n\n{$comment this is a comment too! /$}\n',i},"tmpls.html#sample_tmpl_37"),n(function(e,t){t=r(t)||{};var n,i="",s,o;return i+="\n{}\n",i},"tmpls.html#sample_data_37")})(this.grips||grips);
