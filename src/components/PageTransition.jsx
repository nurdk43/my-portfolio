// Sayfa geçiş animasyonu - Parıltılı/Shimmer efekti
import { motion } from 'framer-motion'

// Parıltılı geçiş efekti
const shimmerVariants = {
    initial: {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(10px)'
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)'
    },
    exit: {
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)'
    }
}

const shimmerTransition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96]
}

// Parıltı overlay efekti
const sparkleOverlayVariants = {
    initial: {
        opacity: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
    },
    animate: {
        opacity: [0, 1, 0],
        background: [
            'radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(244, 114, 182, 0.5) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
        ]
    },
    exit: {
        opacity: 0
    }
}

// Sayfa geçiş animasyonunu saran bileşen
export const PageTransition = ({ children }) => {
    return (
        <motion.div
            style={{
                width: '100%',
                minHeight: '100%',
                position: 'relative'
            }}
        >
            {/* Parıltı overlay */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    zIndex: 100
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={sparkleOverlayVariants}
                transition={{ duration: 0.6, times: [0, 0.5, 1] }}
            />

            {/* Ana içerik */}
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={shimmerVariants}
                transition={shimmerTransition}
                style={{
                    width: '100%',
                    minHeight: '100%'
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}
