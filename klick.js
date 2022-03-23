<a class='bundle' href=''>Ссылка для примера</a>
<script language="JavaScript">
var MMNav = {
    init: function() {
	document.onclick = function(e) {
	    var target = getEventTarget(e);
	    if (target && target.className == 'bundle' ) {
		target.href += '?name=value';
	    }
	    return true;
	};
    }
}
function getEventTarget(e) { // мультибраузерная функция
    var e = e || window.event;
    var targ = e.target || e.srcElement;
    while (targ && (!targ.href || targ.nodeType == 3)) { // боремся с Safari и вложенностью
	targ = targ.parentNode;
    }
    return targ;
}
window.onload=MMNav.init;
</script>
