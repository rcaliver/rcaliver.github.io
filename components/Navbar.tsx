"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import Link from "next/link";
import { useState } from "react";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      label: "home",
      displayName: "Home",
      href: "/",
    },
    {
      label: "about",
      displayName: "About",
      href: "/about",
    },
    {
      label: "work",
      displayName: "Work",
      href: "/work",
    },
    {
      label: "contact",
      displayName: "Contact",
      href: "/contact",
    },
  ];

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <p className="text-2xl text-primary font-bold">caliver</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full uppercase"
              color="primary"
              href={item.href}
            >
              {item.displayName}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
