import { SelectedPage } from '@/shared/types';
import logo_castanho from "@/assets/logo_castanho.png";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    selectedPage: SelectedPage;
}

const Footer = ({setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
  return (
    <section id='entreemcontato' className={`${flexBetween} gap-8 bg-beige-20 h-1/5 md:pb-0`}>
        <motion.div
        className={`${flexBetween} mx-auto w-5/6 gap-16 h-5/6 flex-col md:flex-row`}
        onViewportEnter={() => setSelectedPage(SelectedPage.EntreemContato)}
        >
            {/*  LEFT SIDE  */}
            <img alt='logo_castanho' src={logo_castanho}></img>

            {/*  RIGHT SIDE  */}
            <div className={`flex items-center justify-end gap-4 w-full`}>
                <div className={`${flexBetween}  gap-4 text-3xl`}>
                <h1>Facebook</h1>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Footer