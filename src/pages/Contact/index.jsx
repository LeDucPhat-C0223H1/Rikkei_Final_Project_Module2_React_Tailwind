import React, { useEffect } from "react";
import PageLayout from "../../components/Layout/PageLayout";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const Contact = () => {
  
  async function reloadSdkFb() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  useEffect(() => {
    reloadSdkFb();
  }, []);

  return (
    <PageLayout>
      <div
        className ="fb-comments px-[120px] py-6"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width="100%"
        data-numposts="5"
      ></div>
    </PageLayout>
  );
};

export default Contact;
