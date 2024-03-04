"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { PoAddLogo } from "../icons/PoAdd.js";

import { ChevronDown } from "../icons/Chevron.js";
import ModalSearch from "./ModalSearch.js";
import useStoreAuth from "../middleware/zustand-state/store/index.js";
import { useRouter } from "next/navigation.js";
import AvatarUser from "./AvatarUser.js";
import Alert from "./Alert.js";

export default function MenuNav({ children }) {
  const router = useRouter();
  const { token, userInfo, isTokenValid, logout } = useStoreAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Agregar anuncio", href: "/add-ad" },
    { name: "Categorías", dropdown: ["Asiatica", "Latina", "Morena"] },
    !token ? { name: "Registrate", href: "/signUp" } : null,
    { name: token ? userInfo.nameUser : "Iniciar sesion", href: "/login" },
  ];
  if (!isTokenValid) {
    return logout();
  }

  return (
    <>
      <Alert />
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <PoAddLogo />
            <a className="font-bold text-inherit" href="/">
              OADD
            </a>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarBrand>
            <PoAddLogo />
            <a className="font-bold text-inherit" href="/">
              OADD
            </a>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link href="/" color="foreground">
                Inicio
              </Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ChevronDown size={16} fill="currentColor" />}
                    radius="sm"
                    variant="light"
                  >
                    Categorias
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu>
                <DropdownItem key="autoscaling">Asiatica</DropdownItem>
                <DropdownItem key="autoscaling">Latina</DropdownItem>
                <DropdownItem key="autoscaling">Morena</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavbarItem>
              <Link href="/add-ad" aria-current="page" color="foreground">
                Agregar anuncio
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <ModalSearch />
          {token && isTokenValid ? (
            <NavbarItem className="hidden lg:flex">
              <AvatarUser />
            </NavbarItem>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Link href="/login">Inicia sesion</Link>
              </NavbarItem>
              <NavbarItem className="hidden sm:flex gap-4">
                <Button as={Link} color="primary" href="/signUp" variant="flat">
                  Registrate
                </Button>
              </NavbarItem>{" "}
            </>
          )}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item && item.dropdown ? (
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      size="lg"
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                      variant="light"
                      endContent={<ChevronDown size={16} fill="currentColor" />}
                    >
                      {item.name}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    {item.dropdown.map((categoria, idx) => {
                      return <DropdownItem key={idx}>{categoria}</DropdownItem>;
                    })}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                      ? "secundary"
                      : "foreground"
                  }
                  href={item && item.href}
                  size="lg"
                >
                  {item && item.name}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {children}
    </>
  );
}
