import React from "react";
import { Outlet } from "react-router-dom";

interface ILayout {
  testid: string;
}

export const Layout: React.FC<ILayout> = ({ testid }: ILayout) => {
  return (
    <div data-testid={testid}>
      menu
      <Outlet />
      footer
    </div>
  )
}
