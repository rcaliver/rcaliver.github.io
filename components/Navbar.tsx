import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/">
          <p className="text-2xl font-bold">caliver</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="/">home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">about</Link> 
        </NavbarItem>
        <NavbarItem>
          <Link href="/work">work</Link> 
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
