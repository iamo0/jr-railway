"use client";

import styles from "./burger-menu.module.css";
import "./burger-menu.css";

import { PropsWithChildren, ReactNode } from "react";

interface BurgerMenuProps extends PropsWithChildren {
  caption?: ReactNode,
};

export default function BurgerMenu({children}: BurgerMenuProps) {
  return <details className={`${styles.burgerContainer} burger-menu`}>
    <summary style={{
      listStyle: "none",
    }}>Details...</summary>
    {children}
  </details>;
}
