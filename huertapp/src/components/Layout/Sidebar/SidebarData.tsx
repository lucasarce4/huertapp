import React from "react";
import { FaTasks, FaTh } from "react-icons/fa";
import { GrGrow } from "react-icons/gr";
import { BsFillInfoCircleFill } from "react-icons/bs";
import styles from "./Sidebar.module.scss";

type SidebarDataType = {
  title: string;
  path: string;
  // eslint-disable-next-line no-undef
  icon: JSX.Element;
  cName: string;
};

export const SidebarData: SidebarDataType[] = [
  {
    title: "Orchards",
    path: "/",
    icon: <GrGrow size={40} />,
    cName: styles.navText,
  },
  {
    title: "Tasks",
    path: "/task",
    icon: <FaTasks size={40} />,
    cName: styles.navText,
  },
  {
    title: "Info",
    path: "/info",
    icon: <BsFillInfoCircleFill size={40} />,
    cName: styles.navText,
  },
  {
    title: "Planner",
    path: "/planner",
    icon: <FaTh size={40} />,
    cName: styles.navText,
  }
];
