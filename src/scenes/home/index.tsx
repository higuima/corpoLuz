import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import clinica_frente from "@/assets/clinica_frente.png";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

  return <section id='home' className='gap-8 bg-gray-20 h-full sm:h-5/6 w-full pb-0'>
    {/* IMAGE AND MAIN HEADER */}
    <motion.div 
        className="mx-auto w-5/6 items-center flex flex-col md:flex md:flex-row h-5/6 "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        {/* IMAGE */}
        <motion.div 
            className='flex justify-center md:basis-1/2 md:ml-40 md:mt-16 md:justify-start'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ delay:0.1,  duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
            }}
        >
            <img className='w-full basis-full md:basis-1/2'alt="clinica-frente" src={clinica_frente}/>
        </motion.div>
        

        {/* MAIN HEADER */}
        <div className="md:pl-16 my-16 md:basis-1/2 ">
            {/* HEADINGS */}
            <motion.div 
                className="md:-mt-20"
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
                    {/* This sets the EVOLVE text behind the home page image. If you want something behin, use the z-[-1] */}
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] text-6xl text-brown-20 font-extrabold'> 
                        <h1>Espaço corpo de luz <br></br>Venha nos conhecer!</h1>
                    </div>
                </div>

                <p className='mt-8 font-ysabeau font-semibold text-4xl'>
                Um lugar para cuidar da mente e do corpo.
                </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div 
                className='my-4 flex items-center gap-8'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ delay:0.25,  duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: 80 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <ActionButton setSelectedPage={setSelectedPage}>
                    Entre em contato
                </ActionButton>
            </motion.div>
        </div>

    </motion.div>


  </section>
}

export default Home