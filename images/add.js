// ����Ϊ��ҳ 
function SetHome(obj,vrl){ 
try{ 
obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl); 
} 
catch(e){ 
if(window.netscape) { 
try { 
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
} 
catch (e) { 
alert("�˲�����������ܾ�������Ҫ�ֶ��� [ http://www.zjrenzhi.com ] ��Ϊ��ҳ"); 
} 
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
prefs.setCharPref('browser.startup.homepage',vrl); 
}else{ 
alert("�˲�����������ܾ�������Ҫ�ֶ��� [ http://www.zjrenzhi.com ] ��Ϊ��ҳ"); 
} 
} 
} 
// �����ղ� ����360��IE6 
function shoucang(sTitle,sURL) 
{ 
try 
{ 
window.external.addFavorite(sURL, sTitle); 
} 
catch (e) 
{ 
try 
{ 
window.sidebar.addPanel(sTitle, sURL, ""); 
} 
catch (e) 
{ 
alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������"); 
} 
} 
} 