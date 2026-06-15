import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

export default function Swiper({ images = [], setShowSwiper }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperContainer = swiperRef.current;

    const params = {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: true,
      pagination: {
        clickable: true,
        type: "fraction",
      },
      keyboard: {
        enabled: true,
      },
      loop: images.length > 1,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, [images]);

  return (
    <div style={overlayStyles}>
      <button
        onClick={() => setShowSwiper(false)}
        style={closeButtonStyles}
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Swiper Custom Element */}
      <swiper-container
        ref={swiperRef}
        init="false"
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((src, index) => (
          <swiper-slide key={index} style={slideStyles}>
            <img src={src} alt={`Slide ${index + 1}`} style={imageStyles} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const closeButtonStyles = {
  position: "absolute",
  top: "24px",
  right: "24px",
  zIndex: 10000,
  background: "rgba(0, 0, 0, 0.15)",
  border: "none",
  borderRadius: "50%",
  color: "#ffffff",
  width: "48px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const slideStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const imageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
