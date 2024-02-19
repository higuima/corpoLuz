import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className="bg-beige-20 text-2xl lg:text-3xl px-5 py-2 hover:bg-brown-10 hover:text-white"
        onClick={() => setSelectedPage(SelectedPage.EntreemContato)}
        href={`#${SelectedPage.EntreemContato}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton