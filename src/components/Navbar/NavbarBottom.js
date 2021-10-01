import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  History,
  WatchLaterOutlined,
  HomeOutlined,
  ThumbUpOutlined,
  MovieCreationOutlined,
} from "@material-ui/icons";
import { useTheme } from "../../context/themeContext";

export const NavbarBottom = () => {
  const location = useLocation();
  const { theme } = useTheme();
  return (
    <div
      className={`py-1 px-5 font-poppins flex border-t justify-between ${
        theme
          ? "text-white-1 border-dark-bor bg-dark-nav"
          : "text-black-2 border-white-1 bg-white-3"
      } fixed bottom-0 z-20 w-full flex lg:hidden`}
    >
      <Link
        className={`px-1 flex flex-col justify-center items-center ${
          location.pathname === "/" && "text-primary-red"
        } `}
        to="/"
      >
        <div>
          <HomeOutlined className="text-3xl" />
        </div>
        <p className="font-semibold text-xs">Home</p>
      </Link>

      <Link
        className={`px-1 flex flex-col justify-center items-center ${
          location.pathname === "/likedvideos" && "text-primary-red"
        } `}
        to="/likedvideos"
      >
        <div>
          <ThumbUpOutlined className="text-3xl" />
        </div>
        <p className="font-semibold text-xs">Liked</p>
      </Link>

      <Link
        className={`px-1 flex flex-col justify-center items-center ${
          location.pathname === "/library" && "text-primary-red"
        } `}
        to="/library"
      >
        <div>
          <MovieCreationOutlined className="text-3xl" />
        </div>
        <p className="font-semibold text-xs">Library</p>
      </Link>

      <Link
        className={`px-1 flex flex-col justify-center items-center ${
          location.pathname === "/history" && "text-primary-red"
        } `}
        to="/history"
      >
        <div>
          <History className="text-3xl" />
        </div>
        <p className="font-semibold text-xs">History</p>
      </Link>

      <Link
        className={`px-1 flex flex-col justify-center items-center ${
          location.pathname === "/watchlater" && "text-primary-red"
        } `}
        to="/watchlater"
      >
        <div className="mt-2">
          <WatchLaterOutlined className="text-3xl" />
        </div>
        <p className="font-semibold text-center leading-3 text-xs">
          Watch <br /> Later
        </p>
      </Link>
    </div>
  );
};
