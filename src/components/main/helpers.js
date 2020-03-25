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
      if (product._id === id) return wishlist.splice(i, 1);

      return undefined;
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
  next();
};
