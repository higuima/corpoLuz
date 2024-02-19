import { useState } from "react";
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import logo_marrom from "@/assets/logo_marrom.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
};

const Navbar = ( {isTopOfPage, selectedPage,setSelectedPage} : Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setMenuToggled ] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-beige-10 "

  return <nav>
    <div className={`${navbarBackground} ${flexBetween} sticky top-0 z-40 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
               
                {isAboveMediumScreens ? (
                <div className={`flex items-center justify-center gap-16 w-full`}> 
                    {/*  LEFT SIDE  */}
                    <motion.div className="w-full flex items-start">
                    <img alt='logo_marrom_marrom' src={logo_marrom}></img>
                    </motion.div>

                    {/*  RIGHT SIDE  */}      
                    <div className={`${flexBetween} w-full gap-16 text-2xl lg:text-3xl`}>
                        <Link 
                            page="Aulas"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Aluguel de Salas"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <div className={`${flexBetween} gap-8`}>
                            <ActionButton setSelectedPage={setSelectedPage}>Entre em contato</ActionButton>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="flex flex-row items-center justify-center">
                    <img alt='logo_marrom_marrom' src={logo_marrom}></img>
                    <button
                        className="rounded-full bg-brown-10 p-2 right-0 top-0"
                        onClick={() => setMenuToggled(!isMenuToggled)}
                    >
                        <Bars3Icon className="h-6 w-6 text-white" />
                    </button>
                    </div>
                )}
            </div>
        </div>
    </div>

    {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreens && isMenuToggled && (
        // if you want menu on the left, it should be left-0
        <div className="fixed right-0 bottom-0 z-50 h-full w-[200px] bg-beige-20 drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
                <button onClick={() => setMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-7 w-7 text-brown-20"/>
                </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-xl">
                <Link 
                    page="Aulas"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link 
                    page="Aluguel de Salas"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link 
                    page="Entre em Contato"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
        </div>
    )}

  </nav>;
}

export default Navbar