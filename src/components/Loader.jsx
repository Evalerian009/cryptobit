import CircleLoader from "react-spinners/CircleLoader";

import { motion, AnimatePresence } from "framer-motion"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

function Loader() {

  return (
    <AnimatePresence>
      <motion.div 
        className="w-screen h-screen flex justify-center items-center"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.5}}
      >
        <CircleLoader
            color="#fbbf24"
            loading
            size={100}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader