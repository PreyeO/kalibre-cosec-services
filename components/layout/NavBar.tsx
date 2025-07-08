"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/data";
import Logo from "../ui/logo";
import { Button } from "../ui/button";
import { Menu, ArrowRight, ChevronRight, MoveLeft } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import DiscoveryButton from "../ui/discovery-button";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setShowServices(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-[#F7F7F7] lg:bg-transparent absolute md:pt-[54px] pt-0 h-[50px] md:h-0 flex items-center justify-between  w-full z-50 font-primary  px-5 lg:px-[50px] ">
      <Logo />

      {/* Desktop Menu */}
      <div className=" text-[#122847] hidden lg:flex px-[10px] md:px-2 font-normal text-lg h-[56px] rounded-[50px]  lg:w-[569px] md:w-[500px] justify-center items-center border border-[#E3E5E8] backdrop-blur-[10px] bg-white/60">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link) =>
              link.children ? (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-[#122847] text-base font-medium rounded-[30px] my-2 w-full">
                    <div className="grid grid-cols-2 gap-3 p-6 w-[750px]">
                      {link.children.map((sublink) => (
                        <NavigationMenuLink
                          key={sublink.name}
                          asChild
                          className="text-sm transition-colors text-white/70 "
                        >
                          <Link href={sublink.href} className="">
                            {sublink.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    asChild
                    className=" hover:bg-[#FF914D] hover:text-white"
                  >
                    <Link
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "text-[#F67D30]"
                          : " hover:text-[#F67D30]  "
                      }`}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <DiscoveryButton />
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet
          open={open}
          onOpenChange={(val) => {
            setOpen(val);
            if (!val) setShowServices(false);
          }}
        >
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu size={24} color="#3A3A3A" />
            </Button>
          </SheetTrigger>

          <SheetContent side="top" className="w-full h-full p-0">
            <div className="flex gap-[6px] items-center px-4 pt-6">
              {showServices ? (
                <button
                  onClick={() => setShowServices(false)}
                  className=" cursor-pointer flex items-center gap-1 text-[22px] text-[#F67D30] font-semibold"
                >
                  <MoveLeft size={24} /> Services
                </button>
              ) : (
                <span className="text-lg font-bold"></span>
              )}
            </div>

            <div className="relative w-full h-full overflow-hidden">
              {/* Main Nav View */}
              <div
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                  showServices ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <div className="flex flex-col gap-6 px-5 pt-6 text-lg font-medium">
                  {navLinks.map((link) =>
                    link.children ? (
                      <button
                        key={link.name}
                        onClick={() => setShowServices(true)}
                        className="hover:text-[#F67D30] cursor-pointer text-[#122847]  text-lg flex justify-start font-medium items-center  gap-[6px] "
                      >
                        {link.name}
                        <ChevronRight size={24} />
                      </button>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={` ${
                          pathname === link.href
                            ? "text-[#F67D30] "
                            : "text-[#122847] hover:text-[#F67D30]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Services View */}
              <div
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                  showServices ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex flex-col gap-[18px] px-6 pt-4 text-[14px]  font-medium ">
                  {navLinks
                    .find((link) => link.name === "Services")
                    ?.children?.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className={`transition-colors ${
                          pathname === sublink.href
                            ? "text-[#F67D30]"
                            : "text-[#122847] hover:text-[#F67D30]"
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {!showServices && (
              <SheetFooter>
                <Button className="text-sm font-primary font-medium flex items-center justify-center gap-[5px] bg-[#F67D30] px-[5px] h-10 py-4 cursor-pointer rounded-[30px]  mt-6 mx-auto">
                  <span className="pl-[15px]">Book a Discovery Call</span>
                  <span className="w-[30px] h-[30px] bg-white rounded-full mx-auto flex items-center justify-center">
                    <ArrowRight size={20} color="#3A3A3A" />
                  </span>
                </Button>
              </SheetFooter>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
