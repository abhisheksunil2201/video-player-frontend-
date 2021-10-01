import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createPlaylist, addToPlaylist } from "../../api";
import { usePlaylist } from "../../context/playlistContext";
import toast from "react-hot-toast";
import { useRef } from "react";
import {
  Add,
  CheckBox,
  CheckBoxOutlineBlank,
  Close,
  PlaylistAdd,
} from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";

ReactModal.setAppElement("#root");

export const PlaylistModal = ({ openModal, setOpenModal, videoID }) => {
  const { register, handleSubmit, reset } = useForm();
  const { state, playlistDispatch } = usePlaylist();

  const playlistEndRef = useRef(null);

  const scrollToBottom = () => {
    playlistEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { isLoading: createPlaylistLoading, mutate: createMutate } =
    useMutation(createPlaylist, {
      onSuccess: (data) => {
        playlistDispatch({
          type: "CREATE_PLAYLIST",
          payload: data.newPlaylist,
        });
        toast.success("Playlist created");
        scrollToBottom();
      },
    });

  const { isLoading: addToPlaylistLoading, mutate: addMutate } = useMutation(
    addToPlaylist,
    {
      onSuccess: (data) => {
        playlistDispatch({
          type: "FETCH_PLAYLISTS",
          payload: data.playlists,
        });
        toast.success("Playlist updated");
      },
    }
  );

  const handlePlaylist = (playlistId) => {
    const data = { playlistId, videoID };
    addMutate(data);
  };

  const submitForm = (data, e) => {
    e.preventDefault();
    reset("", {
      keepValues: false,
    });
    createMutate(data);
  };

  const isVideosPresent = (playlistVideos) => {
    const found = playlistVideos.find((item) => item._id === videoID);
    if (found) {
      return <CheckBox className="text-xl" />;
    } else {
      return <CheckBoxOutlineBlank className="text-xl" />;
    }
  };

  return (
    <div>
      <ReactModal
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
        className="border border-white-1 max-w-sm bg-white font-poppins rounded-lg relative inset-1/2 transform -translate-x-2/4 -translate-y-1/2 w-3/4"
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        {(addToPlaylistLoading || createPlaylistLoading) && (
          <div>
            <div className="absolute bg-white bg-opacity-50 inset-0"></div>
            <CircularProgress
              height={50}
              width={50}
              className="text-black absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
            />
          </div>
        )}
        <div className="flex justify-between items-center text-black-1 py-2 px-2 border-b border-white-1">
          <p className="text-lg flex items-center">
            <PlaylistAdd className="text-primary-red text-3xl mr-1.5" />
            Playlists
          </p>
          <Close
            onClick={() => setOpenModal(false)}
            className="text-2xl cursor-pointer"
          />
        </div>

        <div className="px-2 py-2 border-b border-white-1 max-h-40 lg:max-h-64 overflow-scroll overflow-x-hidden">
          {state.playlists?.map((item) => {
            return (
              <button
                onClick={() => handlePlaylist(item._id)}
                className={
                  "flex justify-between items-center py-1.5 px-2 mb-2 w-full rounded-sm bg-gray-200 cursor-pointer"
                }
                key={item._id}
                disabled={addToPlaylistLoading && true}
              >
                <p>{item.name}</p>
                {isVideosPresent(item.videos)}
              </button>
            );
          })}
          <div ref={playlistEndRef}></div>
        </div>

        <div className="border-b border-white-1 flex justify-between items-center text-black-1 px-2 py-2">
          <p className="text-lg flex items-center">
            <Add className="text-2xl text-primary-red mr-1.5" />
            Create new playlist
          </p>
        </div>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="px-2 py-2.5"
          action=""
        >
          <input
            name="name"
            className="w-full px-2 py-1 border-b border-black-1 rounded-sm mb-3 outline-none"
            type="text"
            placeholder="Create a new playlist"
            {...register("name", { required: true })}
            autoComplete="off"
          />
          <input
            value="Create"
            className="w-full py-2 bg-primary-red text-white rounded cursor-pointer hover:opacity-90"
            type="submit"
          />
        </form>
      </ReactModal>
    </div>
  );
};

export default PlaylistModal;
