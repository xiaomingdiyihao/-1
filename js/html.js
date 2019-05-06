// JavaScript Document

//ActiveX
function printFlash(src, w, h, id, vars) {
	var Flash_html = "";
	Flash_html += '<object type="application/x-shockwave-flash"  id="'+id+'" width="'+w+'" height="'+h+'">';
	Flash_html += '<param name="movie" value="'+src+'">';
	Flash_html += '<param name="quality" value="high">';
	Flash_html += '<param name="allowScriptAccess" value="always">';
	Flash_html += '<param name="wmode" value="transparent">';
	Flash_html += '<param name="FlashVars" value="'+vars+'">';
	Flash_html += '<param name="swliveconnect" value="true">';
	Flash_html += '<embed src="'+src+'" quality=high wmode="transparent" FlashVars="'+vars+'" width="'+w+'" height="'+h+'" swliveconnect="true" allowScriptAccess="always" id="'+id+'" name="param" type="application/x-shockwave-flash" ><\/embed>';
	Flash_html += '</object>';
	document.write(Flash_html);
}








