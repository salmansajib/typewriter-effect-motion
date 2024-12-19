/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 3;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 3500;

function TypewriteText({ examples }) {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((prevIndex) => (prevIndex + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((letter, index) => {
          return (
            // Wrap each letter in a span to animate them individually
            <motion.span
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0,
              }}
              transition={{
                duration: MAIN_FADE_DURATION,
                delay: FADE_DELAY,
                ease: "easeInOut",
              }}
              className="relative"
              key={`${exampleIndex}-${index}`}
            >
              {/* letters */}
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0,
                  delay: index * LETTER_DELAY,
                }}
              >
                {letter}
              </motion.span>
              {/* block */}
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: BOX_FADE_DURATION,
                  delay: index * LETTER_DELAY,
                  times: [0, 0.1, 1],
                  ease: "easeInOut",
                }}
                className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
              />
            </motion.span>
          );
        })}
      </span>
    </p>
  );
}

export default TypewriteText;
