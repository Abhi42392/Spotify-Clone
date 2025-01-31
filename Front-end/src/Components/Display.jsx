import React, { useRef, useEffect, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { PlayerContext } from "../Context/PlayerContext";
const Display = () => {
  const { albumsData } = useContext(PlayerContext);
  const displayref = useRef();
  const location = useLocation();
  const path = location.pathname;
  const isAlbum = path.includes("albums");
  const id = isAlbum ? path.split("/").pop() : "";
  const bgColor =
    isAlbum && albumsData.length > 0
      ? albumsData.find((x) => x._id === id).bgColor
      : "#121212";
  useEffect(() => {
    if (isAlbum) {
      displayref.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayref.current.style.background = `#121212`;
    }
  });
  return (
    <div
      ref={displayref}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto h-full lg:ml-0 lg:w-[75%]"
    >
      {albumsData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route
            path="/albums/:id"
            element={
              <DisplayAlbum album={albumsData.find((x) => x._id === id)} />
            }
          />
          <Route path="/songs/:id" element={<DisplayHome />} />
        </Routes>
      ) : null}
    </div>
  );
};

export default Display;
