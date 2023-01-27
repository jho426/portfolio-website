import React from "react";
import Ticker from "react-ticker";

const BannerScroll = () => (
  <Ticker speed="5" direction="toLeft" mode="smooth">
      {({ index }) => (
          <h1 style={{color: "#black", fontSize: "100px", fontweight: "100", whiteSpace: "nowrap", fontFamily: "font2", mode: "smooth"}}>
            MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS —
          </h1>
      )}
  </Ticker>
)

export default BannerScroll