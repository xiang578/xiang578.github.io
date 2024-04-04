;(function(){'use strict';if(window.goatcounter&&window.goatcounter.vars)
window.goatcounter=window.goatcounter.vars
else
window.goatcounter=window.goatcounter||{}
var s=document.querySelector('script[data-goatcounter]')
if(s&&s.dataset.goatcounterSettings){try{var set=JSON.parse(s.dataset.goatcounterSettings)}
catch(err){console.error('invalid JSON in data-goatcounter-settings: '+err)}
for(var k in set)
if(['no_onload','no_events','allow_local','allow_frame','path','title','referrer','event'].indexOf(k)>-1)
window.goatcounter[k]=set[k]}
var enc=encodeURIComponent
var get_data=function(vars){var data={p:(vars.path===undefined?goatcounter.path:vars.path),r:(vars.referrer===undefined?goatcounter.referrer:vars.referrer),t:(vars.title===undefined?goatcounter.title:vars.title),e:!!(vars.event||goatcounter.event),s:[window.screen.width,window.screen.height,(window.devicePixelRatio||1)],b:is_bot(),q:location.search,}
var rcb,pcb,tcb
if(typeof(data.r)==='function')rcb=data.r
if(typeof(data.t)==='function')tcb=data.t
if(typeof(data.p)==='function')pcb=data.p
if(is_empty(data.r))data.r=document.referrer
if(is_empty(data.t))data.t=document.title
if(is_empty(data.p))data.p=get_path()
if(rcb)data.r=rcb(data.r)
if(tcb)data.t=tcb(data.t)
if(pcb)data.p=pcb(data.p)
return data}
var is_empty=function(v){return v===null||v===undefined||typeof(v)==='function'}
var is_bot=function(){var w=window,d=document
if(w.callPhantom||w._phantom||w.phantom)
return 150
if(w.__nightmare)
return 151
if(d.__selenium_unwrapped||d.__webdriver_evaluate||d.__driver_evaluate)
return 152
if(navigator.webdriver)
return 153
return 0}
var urlencode=function(obj){var p=[]
for(var k in obj)
if(obj[k]!==''&&obj[k]!==null&&obj[k]!==undefined&&obj[k]!==false)
p.push(enc(k)+'='+enc(obj[k]))
return '?'+p.join('&')}
var warn=function(msg){if(console&&'warn'in console)
console.warn('goatcounter: '+msg)}
var get_endpoint=function(){var s=document.querySelector('script[data-goatcounter]')
if(s&&s.dataset.goatcounter)
return s.dataset.goatcounter
return(goatcounter.endpoint||window.counter)}
var get_path=function(){var loc=location,c=document.querySelector('link[rel="canonical"][href]')
if(c){var a=document.createElement('a')
a.href=c.href
if(a.hostname.replace(/^www\./,'')===location.hostname.replace(/^www\./,''))
loc=a}
return(loc.pathname+loc.search)||'/'}
var on_load=function(f){if(document.body===null)
document.addEventListener('DOMContentLoaded',function(){f()},false)
else
f()}
goatcounter.filter=function(){if('visibilityState'in document&&document.visibilityState==='prerender')
return 'visibilityState'
if(!goatcounter.allow_frame&&location!==parent.location)
return 'frame'
if(!goatcounter.allow_local&&location.hostname.match(/(localhost$|^127\.|^10\.|^172\.(1[6-9]|2[0-9]|3[0-1])\.|^192\.168\.|^0\.0\.0\.0$)/))
return 'localhost'
if(!goatcounter.allow_local&&location.protocol==='file:')
return 'localfile'
if(localStorage&&localStorage.getItem('skipgc')==='t')
return 'disabled with #toggle-goatcounter'
return false}
window.goatcounter.url=function(vars){var data=get_data(vars||{})
if(data.p===null)
return
data.rnd=Math.random().toString(36).substr(2,5)
var endpoint=get_endpoint()
if(!endpoint)
return warn('no endpoint found')
return endpoint+urlencode(data)}
window.goatcounter.count=function(vars){var f=goatcounter.filter()
if(f)
return warn('not counting because of: '+f)
var url=goatcounter.url(vars)
if(!url)
return warn('not counting because path callback returned null')
if(navigator.sendBeacon)
navigator.sendBeacon(url)
else{var img=document.createElement('img')
img.src=url
img.style.position='absolute'
img.style.bottom='0px'
img.style.width='1px'
img.style.height='1px'
img.loading='eager'
img.setAttribute('alt','')
img.setAttribute('aria-hidden','true')
var rm=function(){if(img&&img.parentNode)img.parentNode.removeChild(img)}
img.addEventListener('load',rm,false)
document.body.appendChild(img)}}
window.goatcounter.get_query=function(name){var s=location.search.substr(1).split('&')
for(var i=0;i<s.length;i++)
if(s[i].toLowerCase().indexOf(name.toLowerCase()+'=')===0)
return s[i].substr(name.length+1)}
window.goatcounter.bind_events=function(){if(!document.querySelectorAll)
return
var send=function(elem){return function(){goatcounter.count({event:true,path:(elem.dataset.goatcounterClick||elem.name||elem.id||''),title:(elem.dataset.goatcounterTitle||elem.title||(elem.innerHTML||'').substr(0,200)||''),referrer:(elem.dataset.goatcounterReferrer||elem.dataset.goatcounterReferral||''),})}}
Array.prototype.slice.call(document.querySelectorAll("*[data-goatcounter-click]")).forEach(function(elem){if(elem.dataset.goatcounterBound)
return
var f=send(elem)
elem.addEventListener('click',f,false)
elem.addEventListener('auxclick',f,false)
elem.dataset.goatcounterBound='true'})}
window.goatcounter.visit_count=function(opt){on_load(function(){opt=opt||{}
opt.type=opt.type||'html'
opt.append=opt.append||'body'
opt.path=opt.path||get_path()
opt.attr=opt.attr||{width:'200',height:(opt.no_branding?'60':'80')}
opt.attr['src']=get_endpoint()+'er/'+enc(opt.path)+'.'+enc(opt.type)+'?'
if(opt.no_branding)opt.attr['src']+='&no_branding=1'
if(opt.style)opt.attr['src']+='&style='+enc(opt.style)
if(opt.start)opt.attr['src']+='&start='+enc(opt.start)
if(opt.end)opt.attr['src']+='&end='+enc(opt.end)
var tag={png:'img',svg:'img',html:'iframe'}[opt.type]
if(!tag)
return warn('visit_count: unknown type: '+opt.type)
if(opt.type==='html'){opt.attr['frameborder']='0'
opt.attr['scrolling']='no'}
var d=document.createElement(tag)
for(var k in opt.attr)
d.setAttribute(k,opt.attr[k])
var p=document.querySelector(opt.append)
if(!p)
return warn('visit_count: append not found: '+opt.append)
p.appendChild(d)})}
if(location.hash==='#toggle-goatcounter'){if(localStorage.getItem('skipgc')==='t'){localStorage.removeItem('skipgc','t')
alert('GoatCounter tracking is now ENABLED in this browser.')}
else{localStorage.setItem('skipgc','t')
alert('GoatCounter tracking is now DISABLED in this browser until '+location+' is loaded again.')}}
if(!goatcounter.no_onload)
on_load(function(){if(!('visibilityState'in document)||document.visibilityState==='visible')
goatcounter.count()
else{var f=function(e){if(document.visibilityState!=='visible')
return
document.removeEventListener('visibilitychange',f)
goatcounter.count()}
document.addEventListener('visibilitychange',f)}
if(!goatcounter.no_events)
goatcounter.bind_events()})})();