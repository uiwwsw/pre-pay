import { motion, AnimatePresence } from "framer-motion";
import { ReactElement, useMemo } from "react";
interface SequentialAnimationProps {
  children: ReactElement | ReactElement[];
  initialDelay?: number;
  isLoading?: boolean;
}
const delay = 0.08;
export const SequentialAnimation = ({
  children,
  isLoading,
  initialDelay = 0,
}: SequentialAnimationProps) => {
  const items = useMemo(() => {
    if (children instanceof Array) return children;
    return [children];
  }, [children]);
  return (
    !isLoading && (
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={index}
            transition={{
              delay: initialDelay + index * delay,
            }}
            initial={{
              transform: "translateY(80px)",
              opacity: 0,
            }}
            animate={{
              transform: "translateY(0%)",
              opacity: 1,
            }}
            className="flex flex-col [&+&]:mt-2 [&>*]:w-full"
          >
            {item}
          </motion.div>
        ))}
      </AnimatePresence>
    )
  );
};
