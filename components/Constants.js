let easing = "backInOut";

export const aboutVariants = {
    initial: {
        x: -100,
        opacity: 0,
        transition: {
          duration: 1,
          ease: easing
        }
      },
    exit: {
        x: 100,
        opacity: 0,
        transition: {
          duration: 1,
          ease: easing
        }
      },
      enter: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 0,
          duration: 1,
          ease: easing
        }
      }
}

export const imageVariants = {
  exit: { 
      y: 150, 
      opacity: 0, 
      transition: { 
        duration: 0.5, 
        ease: easing 
        } 
    },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      when: "beforeChildren",
      ease: easing
    }
  }
};

export const textVariants = {
  exit: { 
    y: 100, 
    opacity: 0, 
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.5,
      ease: easing 
        }
     },
  enter: {
    y: 0,
    opacity: 1,
    transition: { 
        delay: 0.1, 
        duration: 0.5, 
        ease: easing 
    }
  }
};

export const menuVariants = {
  exit: { 
    y: -100, 
    opacity: 0, 
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.5,
      ease: easing 
        }
     },
  enter: {
    y: 0,
    opacity: 1,
    transition: { 
        delay: 0.1, 
        duration: 0.5, 
        ease: easing 
    }
  }
};

export const backVariants = {
    exit: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        ease: easing,
        type: "spring", 
        stiffness: 300, 
        damping: 200
      }
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: easing
      }
    }
  };

export const container = {
  hidden: { 
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.8
    }
  }
}

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

