"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "Our Story", href: "#story" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

function NavHeader() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit items-center rounded-full border border-[#2b2b2b]/30 bg-transparent p-1 gap-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {navLinks.map((link) => (
        <Tab key={link.label} setPosition={setPosition} href={link.href}>
          {link.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.8px]"
    >
      <a href={href} className="text-[#2b2b2b] mix-blend-difference">{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-10 rounded-full bg-[#1a1a1a]"
    />
  );
};

export default NavHeader;
