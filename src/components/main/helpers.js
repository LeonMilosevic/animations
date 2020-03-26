import { gsap, Power1 } from "gsap";
// adding to local storage
export const wishAddLocalStorage = item => {
  let wishlist = [];

  if (typeof window !== undefined) {
    if (localStorage.getItem("wishlist")) {
      wishlist = JSON.parse(localStorage.getItem("wishlist"));
    }
    wishlist.push(item);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const getWishLocalStorage = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("wishlist")) {
      return JSON.parse(localStorage.getItem("wishlist"));
    }
  }

  return [];
};

export const removeWishLocalStorage = (id, next) => {
  let wishlist = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("wishlist")) {
      wishlist = JSON.parse(localStorage.getItem("wishlist"));
    }

    wishlist.map((product, i) => {
      if (product.id === id) return wishlist.splice(i, 1);

      return undefined;
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
  next();
};

export const animateFavorite = e => {
  let tl = new gsap.timeline();
  tl.to(e.target.parentElement, {
    scale: 1.4,
    duration: 0.2,
    ease: Power1,
    filter: "drop-shadow( 20px 20px 10px rgba(0, 0, 0, .7)) blur(5px)",
    opacity: 0.85
  });
  tl.to(e.target.parentElement, {
    scale: 1,
    duration: 0.2,
    ease: Power1,
    filter: "drop-shadow(2px 5px 3px rgba(0, 0, 0, 0.7)) blur(0px)",
    opacity: 1
  });
};
