import { useEffect } from "react";

function Chat() {
  // useEffect(() => {
  //   // Your code here
  //   (function (d, m) {
  //     var kommunicateSettings = {
  //       appId: "376ffd48e47ca29122846afc9448cbe15",
  //       popupWidget: true,
  //       automaticChatOpenOnNavigation: true,
  //     };
  //     var s = document.createElement("script");
  //     s.type = "text/javascript";
  //     s.async = true;
  //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //     var h = document.getElementsByTagName("head")[0];
  //     h.appendChild(s);
  //     window.kommunicate = m;
  //     m._globals = kommunicateSettings;

  //     kommunicateSettings.onInit = function () {
  //       var css = ""; // Replace <YOUR_CSS_CODE_HERE> with the CSS you want to override.
  //       window.Kommunicate.customizeWidgetCss(css); // use window.Kommunicate for ReactJs
  //     };
  //   })(document, window.kommunicate || {});
  //   /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  // }, []);
  return (
    <>
      <df-messenger
        intent="WELCOME"
        chat-title="Turners-new-FAQ"
        agent-id="da2d28ba-00c8-4652-9431-bbf30f1c9733"
        language-code="en"
      ></df-messenger>
    </>
  );
}

export default Chat;
