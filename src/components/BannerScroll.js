import React from "react";
import Ticker from "react-ticker";

const BannerScroll = () => (
  <Ticker speed="5" direction="toLeft" mode="smooth">
      {({ index }) => (
          <h1 className = "scrolling-banner" style={{fontWeight: "400", whiteSpace: "nowrap", fontSize: "80px", fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue', Arial,sans-serif", mode: "smooth"}}>
            MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS — MY SKILLS —
          </h1>
      )}
  </Ticker>
)

export default BannerScroll