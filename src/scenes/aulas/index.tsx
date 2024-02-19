import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import useChangeIamge from '@/hooks/useChangeImage';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Aulas = ({setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id='aulas' className='flex items-center justify-center h-fit py-10 w-full bg-brown-10 z-10'>
        <motion.div
        className='w-5/6 flex items-center justify-center flex-col md:flex md:flex-row space-x-4'
        onViewportEnter={() => setSelectedPage(SelectedPage.Aulas)}
        >
            {/* CLASSES TEXT */}
            <div className="w-full z-10 space-y-8 md:basis-1/2">
                {/* HEADINGS */}
                <motion.div 
                    className="w-full space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>
                        <div className='text-xl md:text-3xl lg:text-4xl text-beige-10 font-extrabold text-balance text-center md:text-start'> 
                            <h1>Experiências incríveis com excelentes profissionais</h1>
                        </div>
                    </div>

                    <p className='font-ysabeau text-lg md:text-xl lg:text-2xl text-beige-10 text-balance text-center md:text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.
                    </p>
                </motion.div>

                {/* ACTIONS */}
                {isAboveMediumScreens ? (
                    <div className={`${flexBetween} gap-8`}>
                        <ActionButton setSelectedPage={setSelectedPage}>Entre em contato</ActionButton>
                    </div>
                ) : (<div></div>)}
            </div>
            
            {/* IMAGE */}
            <motion.div 
                className='flex justify-center md:z-10 md:basis-1/2'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ delay:0.1,  duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <img className='w-5/6 md:w-full rounded-full'alt="yoga" src={useChangeIamge()}/>
            </motion.div>
        </motion.div>       
    </section>
  )
}

export default Aulas