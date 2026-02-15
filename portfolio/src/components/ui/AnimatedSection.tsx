import { motion, type HTMLMotionProps } from 'framer-motion'

type AnimatedSectionProps = HTMLMotionProps<'section'> & {
  reveal?: 'on-load' | 'on-view'
}

function AnimatedSection({ className = '', reveal = 'on-view', transition, ...props }: AnimatedSectionProps) {
  const animationProps =
    reveal === 'on-load'
      ? {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: transition ?? { duration: 0.6, ease: 'easeOut' },
        }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: transition ?? { duration: 0.5 },
        }

  return (
    <motion.section
      {...animationProps}
      {...props}
      className={`scroll-mt-24 ${className}`.trim()}
    />
  )
}

export default AnimatedSection
