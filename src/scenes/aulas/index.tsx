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
    <section id='aulas' className='gap-16 items-center h-full md:h-5/6 bg-brown-10 py-10 z-10'>
        <motion.div
        className='mx-auto w-5/6 items-center flex flex-col md:flex md:flex-row md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Aulas)}
        >
            {/* CLASSES TEXT */}
            <div className="z-10 md:basis-1/2 md:pl-20">
                {/* HEADINGS */}
                <motion.div 
                    className="md:mt-20"
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
                        <div className='text-3xl md:text-4x lg:text-6xl text-beige-10 font-extrabold'> 
                            <h1>Experiências incríveis com excelentes profissionais</h1>
                        </div>
                    </div>

                    <p className='mt-4 font-ysabeau text-xl md:text-2xl lg:text-3xl md:mt-8 text-beige-10'>
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
                    <div className={`${flexBetween} mt-8 gap-8`}>
                        <ActionButton setSelectedPage={setSelectedPage}>Entre em contato</ActionButton>
                    </div>
                ) : (<div></div>)}
            </div>
            
            {/* IMAGE */}
            <motion.div 
                className='flex justify-center mt-8 md:z-10 md:ml-40 md:mt-16'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ delay:0.1,  duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <img className='w-5/6 basis-full md:basis-1/2 rounded-full'alt="yoga" src={useChangeIamge()}/>
            </motion.div>
        </motion.div>       
    </section>
  )
}

export default Aulas