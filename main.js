let style;

let head = window.document.getElementsByTagName('head')[0];
let themeRadios = document.getElementsByName('theme');

if(!localStorage.getItem('theme')) {
    style = 'ligthStyle';
    localStorage.setItem('theme', style);
}
else {
    style = localStorage.getItem('theme');
}

if (style == 'ligthStyle') themeRadios[0].checked = true;
else themeRadios[1].checked = true;

includeCSS(style+'.css');

for (radio of themeRadios) {
    radio.addEventListener('click', function () {
        style = this.id;
        localStorage.setItem('theme', style);
        includeCSS(style + '.css');
    })
}


function includeCSS(aFile, aRel){
  let style = window.document.createElement('link');
  style.href = aFile;
  style.rel = aRel || 'stylesheet';
  head.appendChild(style);
}
