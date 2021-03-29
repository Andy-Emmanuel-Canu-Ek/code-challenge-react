import React from "react";
import { NavbarScreen } from "../ui/NavbarScreen";
import { ListUserScreen } from "./ListUserScreen";

export const UserScreen = () => {
  return (
    <div>
      <NavbarScreen />

      <div className="card">
        <div className="card-body">
            <ListUserScreen />
        </div>
      </div>
    </div>
  );
};
