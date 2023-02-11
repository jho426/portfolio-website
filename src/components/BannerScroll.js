import React from "react";
import Ticker from "react-ticker";

const BannerScroll = () => (
  <Ticker speed="5" direction="toLeft" mode="smooth">
      {({ index }) => (
          <h1 className = "scrolling-banner" style={{fontweight: "100", whiteSpace: "nowrap", fontSize: "100px", fontFamily: "font2", mode: "smooth"}}>
            MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS —
          </h1>
      )}
  </Ticker>
)

export default BannerScroll