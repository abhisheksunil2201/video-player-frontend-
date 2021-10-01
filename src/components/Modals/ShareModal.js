import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import { FileCopy, Share } from "@material-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

ReactModal.setAppElement("#root");

export const ShareModal = ({ openShareModal, setOpenShareModal, location }) => {
  const [locationUrl, setLocationUrl] = useState("");

  useEffect(() => {
    setLocationUrl(`https:/phoenixplayer.netlify.app${location}`);
  }, [location]);

  return (
    <div>
      <ReactModal
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
        className="border border-white-1 max-w-md bg-white font-poppins rounded-lg relative inset-1/2 transform -translate-x-2/4 -translate-y-1/2 w-3/4"
        isOpen={openShareModal}
        onRequestClose={() => setOpenShareModal(false)}
      >
        <div className="py-2">
          <div className="flex items-center px-2.5 pb-2 border-b border-white-1">
            <Share className="text-2xl text-primary-red mr-2" />
            <p className="text-black-1 text-lg">Share via URL</p>
          </div>
          <CopyToClipboard text={locationUrl}>
            <div
              onClick={() => toast.success("Copied to clipboard")}
              className="flex items-center px-3 py-1 m-2.5 bg-gray-200 rounded cursor-pointer hover:opacity-80"
            >
              <div>
                <FileCopy className="text-2xl text-gray-1 mr-2.5" />
              </div>
              <p className="text-xs xs:text-sm text-blue-800 border-l border-white-2 p-2">
                https://phoenixplayer.netlify.app
                <br />
                {location}
              </p>
            </div>
          </CopyToClipboard>
        </div>
      </ReactModal>
    </div>
  );
};
