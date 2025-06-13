"use client";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTransitionRouter } from "next-view-transitions";

import "./style.scss";

const navItems = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "INFO",
    href: "/info",
  },
];

const slideUp = {
  initial: {
    y: "100%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.5, delay: 0.7 },
  },
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const Header = () => {
  const router = useTransitionRouter();

  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [navScope, navAnimate] = useAnimate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isActive) {
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
          ease: "easeInOut",
        }
      );
    } else {
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [navAnimate, navScope, isActive]);

  const description = useRef(null);
  const isInView = useInView(description, { once: false });
  const shouldAnimate = isActive && isInView;

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden"; // يمنع التمرير
    } else {
      document.body.style.overflow = ""; // يعيد الوضع الطبيعي
    }

    // تأكد من تنظيف التأثير إذا خرجت من المكون
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className=" sticky top-0 z-50"
    >
      <div
        ref={navScope}
        className=" fixed top-0 left-0 right-0 w-full h-0 bg-black z-10 overflow-hidden"
      >
        {" "}
        <div className="container relative h-full py-2 flex flex-col justify-between items-start">
          <div></div>
          <nav ref={description} className="flex justify-center flex-col">
            {navItems.map(({ label, href }) => (
              <Link
                href={href}
                key={label}
                onClick={(e) => {
                  setIsActive(false);
                  e.preventDefault();
                  router.push(href, {
                    onTransitionReady: pageAnimation,
                  });
                }}
                className="menu text-white relative flex flex-col overflow-hidden"
              >
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  animate={shouldAnimate ? "open" : "closed"}
                >
                  {label}
                </motion.span>
              </Link>
            ))}
          </nav>
          <div className=" uppercase text-sm text-white flex flex-col gap-8">
            <div className=" uppercase text-sm text-white flex relative overflow-hidden">
              <motion.span
                variants={slideUp}
                initial="initial"
                animate={shouldAnimate ? "open" : "closed"}
              >
                Instgram
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-[100%] h-10 flex items-center justify-between">
        {isActive ? (
          <Link
            href="/"
            className=" text-white z-10 text-sm uppercase font-bold"
          >
            André Étienne
          </Link>
        ) : (
          <Link
            onClick={(e) => {
              e.preventDefault();
              router.push("/", {
                onTransitionReady: pageAnimation,
              });
            }}
            href="/"
            className=" text-sm uppercase font-bold"
          >
            André Étienne
          </Link>
        )}

        {pathname === "/" ? (
          <div
            className="text-sm uppercase font-bold z-10 cursor-pointer "
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            {isActive ? (
              <div className=" text-white">CLOSE</div>
            ) : (
              <div>MENU</div>
            )}
          </div>
        ) : (
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push("/", {
                onTransitionReady: pageAnimation,
              });
            }}
            className="text-sm uppercase font-bold"
          >
            CLose
          </Link>
        )}
      </div>
    </motion.header>
  );
};

export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.2,
        transform: "translateY(-35%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};
