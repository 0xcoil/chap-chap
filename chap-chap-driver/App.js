import React from "react";
import DriverBottomContainer from "./driverBottom";
import LeftSide from "./components/left-side/leftSide";
import RightSide from "./components/right-side/rightSide";
import MidTop from "./components/middle-side/midTop";
import MidBottom from "./components/middle-side/midBottom";

export default function App() {
  return (
    <DriverBottomContainer>
      <LeftSide plateNum="10 209 AC" />
      <MidTop />
      <MidBottom />
      <RightSide amountReceived="3 000 ₣" />
    </DriverBottomContainer>
  );
}
