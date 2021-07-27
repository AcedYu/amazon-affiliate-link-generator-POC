import React from "react";

import Nav from "../components/Nav.js";
import ProductForm from "../components/ProductForm.js";

const Search = () => {
  var affiliate = document.location.pathname.split('=')[1];
  if (affiliate.includes('%20')) {
    affiliate = affiliate.split('%20').join(' ');
  }
  affiliate = affiliate.charAt(0).toUpperCase() + affiliate.slice(1);
  return (
    <div>
      <Nav />
      <div className="container">
        <h5 className="my-3 text-center">{affiliate}'s Community</h5>
        <ProductForm />
        <h5 className="my-3 text-center">{affiliate}'s Favorites</h5>
        <div className="container text-center">
          <iframe style={{ width: 120, height: 240 }} scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=homeboys-20&marketplace=amazon&amp;region=US&placement=B08VS3TSC2&asins=B08VS3TSC2&linkId=527c654341d34d71dbb60ff50ecf5ee8&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
          <iframe style={{ width: 120, height: 240 }} scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=lgbtchannel-20&language=en_US&marketplace=amazon&region=US&placement=B07PKNGGS5&asins=B07PKNGGS5&linkId=3e9a926624df4994224006a07596040b&show_border=true&link_opens_in_new_window=true"></iframe>
          <iframe style={{ width: 120, height: 240 }} scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=lgbtchannel-20&language=en_US&marketplace=amazon&region=US&placement=B075LC9WMM&asins=B075LC9WMM&linkId=7eded56c81b3b3543621971eb35af75c&show_border=true&link_opens_in_new_window=true"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Search;