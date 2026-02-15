import { motion } from 'framer-motion'

type AnimatedHeadlineProps = {
  text: string
  className?: string
  delay?: number
}

function AnimatedHeadline({ text, className = '', delay = 0 }: AnimatedHeadlineProps) {
  const chars = Array.from(text)

  return (
    <h2 className={`relative inline-block overflow-hidden ${className}`.trim()}>
      <motion.span
        aria-label={text}
        role="text"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              delayChildren: delay,
              staggerChildren: 0.03,
            },
          },
        }}
        className="relative z-10"
      >
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={{
              hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.34, ease: 'easeOut' }}
            className="inline-block whitespace-pre"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>

      <motion.span
        aria-hidden
        initial={{ x: '-140%' }}
        animate={{ x: '140%' }}
        transition={{ duration: 1.2, delay: delay + 0.8, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-cyan-200/65 to-transparent"
      />
    </h2>
  )
}

export default AnimatedHeadline
