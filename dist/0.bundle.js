(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,s){e.exports={languageData:{plurals:function(e,s){var a=String(e).split("."),n=!a[1],o=Number(a[0])==e,r=o&&a[0].slice(-1),t=o&&a[0].slice(-2);return s?1==r&&11!=t?"one":2==r&&12!=t?"two":3==r&&13!=t?"few":"other":1==e&&n?"one":"other"}},messages:{"Crazy Nic!!":"Crazy Nic!!","Last time I had to configure webpack {0,date}":function(e){return["Last time I had to configure webpack ",e("0","date")]},"This message is translated and has a <0>link</0>":"This message is translated and has a <0>link</0>","This message will fallback to {fallbackLang} / {count}!":function(e){return["This message will fallback to ",e("fallbackLang")," / ",e("count"),"!"]},"my.custom.id":"Custom ID works","{count, plural, =0 {There're no messages} one {There's # message in your inbox} other {There're # messages in your inbox}}":function(e){return[e("count","plural",{0:"There're no messages",one:["There's ","#"," message in your inbox"],other:["There're ","#"," messages in your inbox"]})]}}}}}]);