(function(){
if(document.getElementById('kfBtn'))return;
var st=document.createElement('style');
st.textContent=".kf-btn{position:fixed;right:14px;top:50%;z-index:9999;width:62px;height:62px;border-radius:50%;background:linear-gradient(135deg,#2AABEE,#2980f0);color:#fff;border:none;box-shadow:0 8px 24px rgba(41,128,240,.5),0 0 0 4px rgba(42,171,238,.12);cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;transform:translateY(-50%);animation:kf-float 3s ease-in-out infinite}\n.kf-btn::after{content:\"\";position:absolute;inset:0;border-radius:50%;border:2px solid rgba(42,171,238,.55);animation:kf-pulse 2.2s ease-out infinite;pointer-events:none}\n@keyframes kf-pulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.65);opacity:0}}\n@keyframes kf-float{0%,100%{transform:translateY(-50%)}50%{transform:translateY(calc(-50% - 7px))}}\n.kf-btn .kf-label{font-size:11px;font-weight:700;line-height:1;color:#fff}\n.kf-dot{position:absolute;top:3px;right:3px;width:12px;height:12px;border-radius:50%;background:#22c55e;border:2px solid #fff}\n.kf-panel{position:fixed;right:12px;top:50%;bottom:auto;transform:translateY(-50%);z-index:9999;width:min(360px,calc(100vw - 24px));height:min(520px,80vh);background:#fff;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.28);display:none;flex-direction:column;overflow:hidden;font-family:inherit}\n.kf-panel.open{display:flex}\n.kf-head{background:linear-gradient(135deg,#2AABEE,#2980f0);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}\n.kf-head .kf-title{font-size:16px;font-weight:700;line-height:1.2}\n.kf-head .kf-sub{font-size:12px;opacity:.9;line-height:1.3}\n.kf-head .kf-x{order:-1;flex-shrink:0;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.25);border:none;color:#fff;font-size:22px;cursor:pointer;line-height:1;display:flex;align-items:center;justify-content:center;padding:0}\n.kf-body{flex:1;overflow-y:auto;padding:12px;background:#f4f7fc;display:flex;flex-direction:column;gap:8px}\n.kf-msg{max-width:85%;padding:9px 12px;border-radius:14px;font-size:14px;line-height:1.55;word-break:break-word}\n.kf-msg.bot{background:#fff;color:#1f2937;border:1px solid #e5e7eb;align-self:flex-start;border-bottom-left-radius:4px}\n.kf-msg.user{background:#2980f0;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}\n.kf-msg a{color:#1d69d8;text-decoration:underline}\n.kf-msg.user a{color:#fff}\n.kf-typing{color:#6b7280;font-size:13px;padding:2px 4px}\n.kf-chips{display:flex;flex-wrap:wrap;gap:6px;padding:8px 12px;background:#fff;border-top:1px solid #eef2f7}\n.kf-chip{border:1px solid #2980f0;color:#2980f0;background:#fff;border-radius:999px;padding:6px 12px;font-size:13px;cursor:pointer;font-family:inherit}\n.kf-input{display:flex;gap:8px;padding:10px 12px;background:#fff;border-top:1px solid #eef2f7}\n.kf-input input{flex:1;border:1px solid #d1d5db;border-radius:999px;padding:9px 14px;font-size:14px;outline:none;font-family:inherit}\n.kf-input input:focus{border-color:#2980f0}\n.kf-input button{border:none;background:#2980f0;color:#fff;border-radius:999px;padding:9px 16px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit}";
document.head.appendChild(st);
document.body.insertAdjacentHTML('beforeend',"\n<button class=\"kf-btn\" id=\"kfBtn\" aria-label=\"\u5728\u7ebf\u5ba2\u670d\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"/></svg>\n<span class=\"kf-label\">\u5ba2\u670d</span><span class=\"kf-dot\"></span>\n</button>\n<div class=\"kf-panel\" id=\"kfPanel\">\n<div class=\"kf-head\">\n<div><div class=\"kf-title\">\u5728\u7ebf\u5ba2\u670d</div><div class=\"kf-sub\">\u81ea\u52a8\u56de\u590d \u00b7 \u7b54\u4e0d\u4e0a\u6765\u8f6c\u4eba\u5de5</div></div>\n<button class=\"kf-x\" id=\"kfClose\" aria-label=\"\u5173\u95ed\">\u00d7</button>\n</div>\n<div class=\"kf-body\" id=\"kfBody\"></div>\n<div class=\"kf-chips\" id=\"kfChips\"></div>\n<div class=\"kf-input\">\n<input id=\"kfText\" type=\"text\" placeholder=\"\u8f93\u5165\u95ee\u9898\uff0c\u6bd4\u5982\uff1a\u61c2\u4f60\u4e0b\u8f7d\" autocomplete=\"off\">\n<button id=\"kfSend\">\u53d1\u9001</button>\n</div>\n</div>\n");
(function(){
var SHOP='https://shop.yzdj66.com/shop/box226';
var FAKA_BTN='<a href="'+SHOP+'" target="_blank" style="display:inline-block;background:linear-gradient(135deg,#ff7a18,#ff3d00);color:#fff;font-weight:700;padding:8px 18px;border-radius:999px;text-decoration:none;">👉 24小时自助发卡</a>';
var ORDER='https://shop.yzdj66.com/order';
function appMsg(name, dl, code, extra){
var s=name+'下载地址：<br><a href="'+dl+'" target="_blank">'+dl+'</a>';
if(code){ s+='<br>注册邀请码：'+code+'（复制这个填进去）';}
if(extra){ s+='<br>'+extra;}
s+='<br><br>'+FAKA_BTN;
return s;
}
var APPS=[
{k:['懂你','dongni'], m:function(){return appMsg('懂你','https://dn1.live/?promo_code=226226','226226','苹果安卓都能装');}},
{k:['鲍鱼','baoyu','鲍鱼盒子'], m:function(){return appMsg('鲍鱼','https://13y99.com/#/?&uid=50187039','50187039','');}},
{k:['污贼','乌贼','wuzei'], m:function(){return appMsg('污贼','https://www.wz12.xyz/#/?code=180000','180000','备用地址：<a href="https://www.wz25.xyz/#/?code=180000" target="_blank">wz25.xyz</a>');}},
{k:['橙果','chengguo'], m:function(){return appMsg('橙果TV','https://wwbao.lanzn.com/b01bjfrpmh','226226','里面有安卓和苹果两个安装包；在线看剧不用装：<a href="https://cgsp5.com" target="_blank">cgsp5.com</a>');}},
{k:['小红帽','xiaohongmao'], m:function(){return appMsg('小红帽','https://xhma.club/96085681','','这个不用邀请码');}},
{k:['多彩','duocai'], m:function(){return appMsg('多彩','https://dptqna9hq550m.cloudfront.net?parent_icode=923961419','','这个不用邀请码');}}
];
function reply(q){
q=(q||'').toLowerCase();
if(/人工|真人|客服|转人工|找人/.test(q)) return '我去叫人工客服，你稍等一下，他一会就回你。也可以直接点这里转人工：<a href="https://t.me/box2262" target="_blank">@box2262</a>';
for(var i=0;i<APPS.length;i++){ for(var j=0;j<APPS[i].k.length;j++){ if(q.indexOf(APPS[i].k[j].toLowerCase())>=0) return APPS[i].m();}}
if(/下载|安装包|怎么下|在哪下/.test(q)) return '你要下载哪个应用？直接说名字就行：懂你、鲍鱼、污贼、橙果、小红帽、多彩。';
if(/买卡|卡密|购买|充值|多少钱|价格|月卡|季卡|年卡|怎么买/.test(q)) return FAKA_BTN+'<br>月卡、季卡、年卡都有，价钱点开就能看到。付完款卡密直接显示出来。';
if(/查单|订单|查订单|找不到卡|付了款|没收到|付款/.test(q)) return '查单点这里：<a href="'+ORDER+'" target="_blank">订单查询</a>，输入下单时留的联系方式，就能查到卡密。查不到就说一声，我转人工。';
if(/安装|怎么装|打不开|闪退|进不去|安装失败/.test(q)) return '先点下载地址把安装包装好，打开注册填邀请码。安卓装不上，先在手机设置里允许安装未知应用；苹果按提示装描述文件。还不行就说一声，我转人工。';
if(/邀请码|邀请|码/.test(q)) return '注册时填的邀请码：懂你 226226，鲍鱼 50187039，污贼 180000，橙果 226226。多彩和小红帽不用邀请码。';
if(/续费|到期|续期|过期/.test(q)) return '没有单独的续期卡，到期了再买一张月卡就行。<br><br>'+FAKA_BTN;
if(/你好|在吗|^hi$|hello|在不在/.test(q)) return '你好，我是盒子客服。想下载哪个应用，直接说名字就行；买卡、查单也可以问我。';
return '这个问题我答不上来，我转给人工客服，你稍等一下。也可以直接点这里转人工：<a href="https://t.me/box2262" target="_blank">@box2262</a>';
}
var body=document.getElementById('kfBody');
var panel=document.getElementById('kfPanel');
var input=document.getElementById('kfText');
var chipsBox=document.getElementById('kfChips');
var opened=false;
var RELAY='https://dongnilive1.com/kf';
var SID='s'+Math.random().toString(36).slice(2,12);
var lastPoll=0, pollTimer=null; var escalated=false;
function linkify(t){
t=t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
return t.replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank">$1</a>');
}
function relayPost(path, data, ok, fail){
try{
var c=new AbortController(); var to=setTimeout(function(){c.abort();}, 6000);
fetch(RELAY+path, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data), signal:c.signal})
.then(function(r){ clearTimeout(to); return r.json(); })
.then(function(j){ if(j && !j.error) ok(j); else fail(); })
.catch(function(){ clearTimeout(to); fail(); });
}catch(e){ fail(); }
}
function startPoll(){
if(pollTimer) return;
pollTimer=setInterval(function(){
if(!panel.classList.contains('open')) return;
fetch(RELAY+'/poll?session='+SID+'&after='+lastPoll)
.then(function(r){ return r.json(); })
.then(function(j){
(j.messages||[]).forEach(function(m){ lastPoll=Math.max(lastPoll, m.id); addMsg(linkify(m.text),'bot'); });
}).catch(function(){});
}, 4000);
}
function addMsg(html, who){
var d=document.createElement('div');
d.className='kf-msg '+who; d.innerHTML=html;
body.appendChild(d); body.scrollTop=body.scrollHeight;
}
function botSay(html){
var t=document.createElement('div');
t.className='kf-typing'; t.textContent='对方正在输入...';
body.appendChild(t); body.scrollTop=body.scrollHeight;
setTimeout(function(){ body.removeChild(t); addMsg(html,'bot');}, 600);
}
function send(text, isChip){
text=(text||'').trim(); if(!text) return;
addMsg(text.replace(/</g,'&lt;'),'user');
input.value='';
startPoll();
relayPost('/message', {session:SID, text:text, chip:!!isChip},
function(j){ if(j.escalated) escalated=true; if(j.reply) botSay(j.reply); },
function(){ if(!escalated||isChip) botSay(reply(text)); });
}
var CHIPS=['懂你下载','鲍鱼下载','污贼下载','橙果TV下载','买卡密','查订单','转人工'];
CHIPS.forEach(function(c){
var b=document.createElement('button');
b.className='kf-chip'; b.textContent=c;
b.onclick=function(){ send(c, true);};
chipsBox.appendChild(b);
});
document.getElementById('kfBtn').onclick=function(){
panel.classList.toggle('open');
if(panel.classList.contains('open') &&!opened){
opened=true;
botSay('你好，我是盒子客服。想下载哪个应用，直接说名字就行；买卡、查单也可以问我。');
}
};
document.getElementById('kfClose').onclick=function(){ panel.classList.remove('open');};
document.getElementById('kfSend').onclick=function(){ send(input.value);};
input.addEventListener('keydown', function(e){ if(e.key==='Enter') send(input.value);});
if(location.hash==='#kf'||/[?&]kf=1/.test(location.search)){document.getElementById('kfBtn').click();}
})();
})();
