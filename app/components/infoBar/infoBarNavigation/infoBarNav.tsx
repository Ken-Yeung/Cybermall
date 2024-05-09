import React from "react";
import InfoBarNavSocial from "./infoBarNavSocial/infoBarNavSocial";
import InfoBarNavLan from "./infoBarNavLan/infoBarNavLan";
import InfoBarNavTheme from "./infoBarNavTheme/infoBarNavTheme";
import InfoBarNavOrderTracker from "./InfoBarNavOrderTracker/infoBarNavOrderTracker";
import InfoBarNavMyAccount from "./infoBarNavMyAccount/infoBarNavMyAccount";

export default function infoBarNav() {
  return (
    <div className="flex flex-row gap-2 text-xs divide-x my-2">
      <InfoBarNavSocial />
      <InfoBarNavLan />
      <InfoBarNavTheme />
      <InfoBarNavOrderTracker />
      <InfoBarNavMyAccount />
    </div>
  );
}
