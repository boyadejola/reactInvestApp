import React, {useEffect} from 'react'

function Livechat () {
  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right", 
      locale: "en", 
      type: "standard" ,
      launcherTitle :"Chat with us"
    };

  
    (function(d,t) {
      var BASE_URL="https://app.chatwoot.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'cLMuRqN5M44Aaxn75pj4KbYM',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");

  
  }, []);

  return null;
};

export default Livechat;
