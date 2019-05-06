// JavaScript Document

//ActiveX
function printFlash(src, w, h, id, vars) {
	var Flash_html = "";
	Flash_html += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10.0.12.36" id="'+id+'" width="'+w+'" height="'+h+'">';
	Flash_html += '<param name="movie" value="'+src+'">';
	Flash_html += '<param name="quality" value="high">';
	Flash_html += '<param name="allowScriptAccess" value="always">';
	Flash_html += '<param name="wmode" value="transparent">';
	Flash_html += '<param name="FlashVars" value="'+vars+'">';
	Flash_html += '<param name="swliveconnect" value="true">';
	Flash_html += '<embed src="'+src+'" quality=high wmode="transparent" FlashVars="'+vars+'" width="'+w+'" height="'+h+'" swliveconnect="true" allowScriptAccess="always" id="'+id+'" name="param" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"><\/embed>';
	Flash_html += '</object>';
	document.write(Flash_html);
}


