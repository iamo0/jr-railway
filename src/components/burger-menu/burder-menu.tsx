"use client";

import { PropsWithChildren, ReactNode } from "react";
import Image from "next/image";

interface BurgerMenuProps extends PropsWithChildren {
  caption?: ReactNode,
};

export default function BurgerMenu({children}: BurgerMenuProps) {
  return <details>
    <summary style={{
      listStyle: "none",
    }}><Image src="icon-burger.svg" alt="Show details" width={30} height={24} /></summary>
    {children}
  </details>;
}
