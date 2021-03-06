let easing = "backInOut";

export const aboutVariants = {
    initial: {
        x: -100,
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: easing,
          type: "spring", 
          stiffness: 300, 
          damping: 200
        }
      },
    exit: {
        x: 100,
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: easing
        }
      },
      enter: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 0,
          duration: 0.5,
          ease: easing,
          type: "spring", 
          stiffness: 300, 
          damping: 200
        }
      }
}

export const imageVariants = {
  exit: { 
      y: 150, 
      opacity: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeInOut" 
        } 
    },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const textVariants = {
  exit: { 
    y: 100, 
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
        ease: easing 
    }
  }
};

export const fadeVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
      type: "spring", 
      stiffness: 300, 
      damping: 200
    }
  },
  enter: {
    opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
        type: "spring", 
        stiffness: 300, 
        damping: 200
      }
  }
}

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
        duration: 0.5,
        staggerChildren: 0.5,
        ease: easing,
        type: "spring", 
        stiffness: 300, 
        damping: 200
      }
    }
  };


export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}