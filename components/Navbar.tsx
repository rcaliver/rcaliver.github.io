import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Link href="/">
          <p className="text-2xl font-bold">Caliver</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link> 
        </NavbarItem>
        <NavbarItem>
          <Link href="/work">Work</Link> 
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
