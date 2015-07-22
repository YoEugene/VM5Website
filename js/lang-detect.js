(function(){
  var lang = window.navigator.userLanguage || window.navigator.language ;
  var pathname = window.location.pathname.slice(1).split('.')[0];
  console.log(pathname);
  // console.log(lang, pathname.split("_"));

  // switch (lang.toLowerCase()) {
  //   case "ja":
  //     if(window.location.pathname != "/home_japanese.html")
  //       window.location.href = "home_japanese.html";
  //     break;
  //   default:
  //     if(window.location.pathname != "/home.html" && window.location.pathname != "/")
  //       window.location.href = "home.html";
  //     break;
  // }
}());
