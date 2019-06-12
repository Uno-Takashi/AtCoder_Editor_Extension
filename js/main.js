var div = document.createElement('div');
div.setAttribute("style", "display : block; min-height: 300px;");
div.id = "ace_editor";
var textarea = document.getElementsByClassName("form-control plain-textarea")[0];
textarea.setAttribute("style","display: none;");


textarea.parentNode.insertBefore(div, textarea.nextSibling);

var editor = ace.edit("ace_editor");

editor.getSession().setValue(textarea.value);
editor.getSession().on('change', function () {
    textarea.value=(editor.getSession().getValue());
});