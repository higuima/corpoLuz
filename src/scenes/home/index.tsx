import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import clinica_frente from "@/assets/clinica_frente.png";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

  return <section id='home' className='bg-gray-20 h-fit py-10 w-full flex items-start justify-center'>
    {/* IMAGE AND MAIN HEADER */}
    <motion.div 
        className="w-5/6 h-fit items-center flex justify-between gap-4 flex-col md:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        {/* IMAGE */}
        <motion.div 
            className='md:basis-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ delay:0.1,  duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
            }}
        >
            <img className='w-full'alt="clinica-frente" src={clinica_frente}/>
        </motion.div>
        

        {/* HEADINGS */}
        <motion.div 
            className="md:basis-1/2 flex items-start justify-start flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <div className='text-6xl text-brown-20 font-extrabold'> 
                <h1 className='text-balance'>Espaço corpo de luz.</h1>
            </div>

            <p className='font-ysabeau font-semibold text-4xl'>
            Um lugar para cuidar da mente e do corpo.
            </p>
        
            {/* ACTIONS */}
            <motion.div 
                className='justify-start'
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
        </motion.div>

    </motion.div>


  </section>
}

export default Home