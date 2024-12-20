class MusicPlayer{constructor(){this.init()}init(){document.documentElement.style.setProperty("--vh",`${window.innerHeight}px`),this.getCustomPlayList(),this.addEventListeners()}getCustomPlayList(){this.changeMusicBg(!1)}addEventListeners(){document.addEventListener("keydown",this.handleKeydown.bind(this));const e=document.querySelector(".aplayer-list"),t=document.querySelector(".aplayer-lrc");t&&!t.dataset.clickBound&&(t.addEventListener("click",(()=>{e.classList.toggle("aplayer-list-hide")})),t.dataset.clickBound=!0)}changeMusicBg(e=!0){const t=document.getElementById("Music-bg"),n=document.getElementsByClassName("Music-loading")[0];e?this.updateBackgroundImage(t):this.setLoadingScreen(n,t)}updateBackgroundImage(e){const t=document.querySelector("#Music-page .aplayer-pic"),n=new Image;n.src=this.extractValue(t.style.backgroundImage),n.onload=()=>{e.style.backgroundImage=t.style.backgroundImage,e.className="show"}}setLoadingScreen(e,t){const n=setInterval((()=>{this.addEventListeners();document.querySelector("#Music-page .aplayer-pic")&&(e.style.display="none",clearInterval(n),this.addEventListenerChangeMusicBg(),t.style.display="block")}),100)}extractValue(e){const t=/url\("([^"]+)"\)/.exec(e);return t?t[1]:""}addEventListenerChangeMusicBg(){const e=document.querySelector("#Music-page meting-js").aplayer;e.on("loadeddata",(()=>this.changeMusicBg(!0))),e.on("timeupdate",this.lrcUpdate.bind(this))}lrcUpdate(){const e=document.querySelector(".aplayer-lrc-contents"),t=e.querySelector("p.aplayer-lrc-current");if(t){const n=Array.from(e.children).indexOf(t);e.style.transform=`translateY(${80*-n}px)`}}handleKeydown(e){const t=document.querySelector("meting-js").aplayer,n={Space:()=>t.toggle(),ArrowRight:()=>t.skipForward(),ArrowLeft:()=>t.skipBack(),ArrowUp:()=>{t.volume<1&&t.volume(t.volume+.1)},ArrowDown:()=>{t.volume>0&&t.volume(t.volume-.1)}};n[e.code]&&(e.preventDefault(),n[e.code]())}destroy(){document.removeEventListener("keydown",this.handleKeydown)}}function initializeMusicPlayer(){const e=window.scoMusic;e&&e.destroy(),window.scoMusic=new MusicPlayer}