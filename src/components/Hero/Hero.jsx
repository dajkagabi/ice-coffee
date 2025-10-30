import { motion } from "framer-motion";
import BackgroundSplash from '../../assets/hero.png';
import HomeCoffee from '../../assets/home-coffee.png';
import BeanImg from '../../assets/bean-img.png';
import IceImg from '../../assets/ice-img.png';
import LeafImg from '../../assets/leaf-img.png';


// Animációs változatok: láthatatlan kezdetben, rugós elemek, 
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const coffeeVariants = {
  hidden: { y: 100, opacity: 0, rotate: -5 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 80,
    },
  },
};

const floatVariants = {
    float: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

const ingredientVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden bg-white">
      
      <motion.div
        initial={{ scale: 1.2, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-80"
      >
              </motion.div>

      <motion.img
        src={IceImg}
        alt="Jégkocka"
        variants={ingredientVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute top-[10%] left-[10%] w-16 h-16 z-10 opacity-70"
      />
      <motion.img
        src={LeafImg}
        alt="Mentalevél"
        variants={ingredientVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-[20%] left-[25%] w-12 h-12 z-10 opacity-70"
      />
      <motion.img
        src={BeanImg}
        alt="Kávébab"
        variants={ingredientVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-[10%] right-[10%] w-16 h-16 z-10 opacity-70"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left md:pr-12 order-2 md:order-1"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight"
          >
            Hűs élmény minden kortyban
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-md mx-auto md:mx-0"
          >
            Kézműves módszerrel és valódi, természetes összetevőkkel készült, krémes és frissítő ICE COFFEE különlegességek.
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-6 space-y-3 md:space-y-0 md:space-x-4 md:flex md:items-center"
          >
            <a 
              href="#products" 
              className="block w-full md:w-auto text-center rounded-full bg-emerald-600 text-white px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[.99] transition-all"
            >
              Rendelje meg
            </a>
            <a 
              href="#why" 
              className="block w-full md:w-auto text-center rounded-full border border-gray-300 text-gray-700 bg-white px-6 py-3 text-lg font-medium shadow-sm hover:bg-gray-50 transition-colors"
            >
              Tudjon meg többet
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={coffeeVariants}
          initial="hidden"
          animate="visible"
          className="order-1 md:order-2 flex justify-center items-center"
        >
          <motion.img 
            src={HomeCoffee} 
            alt="Jéghideg jegeskávé krémmel" 
            className="w-full max-w-[200px] sm:max-w-[200px] h-auto object-contain drop-shadow-2xl" 
            variants={floatVariants} 
            animate="float" 
          />
        </motion.div>

      </div>
    </section>
  );
}