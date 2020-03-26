import React from "react";
// import helpers
import { animateFavorite, wishAddLocalStorage } from "./helpers";
// import icons
import { MdFavorite } from "react-icons/md";

const FrameItem = props => {
  const [item, setItem] = React.useState();
  // populate state from Link
  React.useEffect(() => {
    setItem(props.location.state);
  }, [props.location.state]);

  // animate on click and add to ls wishlist
  const addToLS = (item, e) => {
    animateFavorite(e);
    wishAddLocalStorage(item);
  };

  return (
    <div className="container">
      {item !== undefined && (
        <div className="row">
          <div className="col s12 m6 l6">
            <img className="frameitem_image" src={item.image} alt="" />
          </div>
          <div className="col s12 m6 l6 center-align">
            <div className="frameitem_textbox">
              <div className="frameitem_textbox__title">{item.title}</div>
              <div className="frameitem_textbox__description">
                {item.description}
              </div>
              <div className="frameitem_textbox__price">&euro;{item.price}</div>
            </div>
            <div className="frameitem_addtobox">
              <div className="frameitem_addtobox__wishlist">
                <span
                  className="carousel_wishlistAdd"
                  style={{ position: "relative", top: 0, left: 0 }}
                >
                  <MdFavorite
                    onClick={e => addToLS(item, e)}
                    className="favorite_add"
                    style={{ fontSize: "52px", color: "#a31b16" }}
                  />
                </span>
              </div>
              <div className="frameitem_addtobox__facebook">
                <span
                  className="carousel_wishlistAdd"
                  style={{ position: "relative", top: 0, left: 0 }}
                >
                  <MdFavorite
                    onClick={e => addToLS(item, e)}
                    className="favorite_add"
                    style={{ fontSize: "52px", color: "#a31b16" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrameItem;
