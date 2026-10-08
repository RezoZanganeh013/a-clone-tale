const{app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{const w=new BrowserWindow({width:1024,height:768,autoHideMenuBar:true,backgroundColor:'#0d0a14'});w.loadFile('www/index.html')});
app.on('window-all-closed',()=>app.quit());
