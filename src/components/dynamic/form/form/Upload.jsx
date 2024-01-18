import { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { FaFilePdf, FaImage, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { BYTES } from "@/data/dynamic/Bytes";
import { readFileAsBase64, compress } from "@/utils/convert";

const getSize = (maxSize) => BYTES[maxSize[1]] * maxSize[0];
const getType = (types) => "." + types.join(",.");

const Upload = ({ field, user, setUser, text, maxSize, types, required }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleInput = async (e) => {
    setUploading(true);
    const blob = await compress(e.target.files[0]);
    if (blob.size > getSize(maxSize)) {
      toast(`❌ File too big, exceeds ${maxSize[0]} ${maxSize[1]}!`);
      return;
    }
    setFile(blob);
    const base64 = await readFileAsBase64(blob);
    setUser({ ...user, [field]: base64 });
    setUploading(false);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-0 font-semibold">
        {text}
        {required && <span className="text-rosehack-pink-200">*</span>}
      </p>
      <div className="flex items-center w-full flex-col" data-cy="upload">
        {!file && (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 rounded-lg cursor-pointer bg-white/20 text-white hover:bg-white/30 duration-200"
          >
            <div className="flex flex-col items-center justify-center pt-4">
              <BsUpload className=" text-3xl mb-2 text-rosehack-teal" />
              <p className="text-sm text-white">Upload from my computer</p>
            </div>
            <div className="w-full" data-cy="upload-input">
              <input
                id="dropzone-file"
                onChange={handleInput}
                type="file"
                className="hidden"
                accept={getType(types)}
              />
            </div>
          </label>
        )}
        {file && (
          <div
            className="flex items-center justify-between w-full my-2 bg-white/30 px-2 py-2 text-white"
            data-cy="upload-success"
          >
            <div className="flex items-center">
              {file.type.split("/")[0] === "image" ? (
                <FaImage className="text-xl mr-2" />
              ) : (
                <FaFilePdf className="text-xl mr-2" />
              )}
              {file.name}
            </div>
            <FaTimes
              className="text-white hover:cursor-pointer hover:text-red-600"
              onClick={() => setFile(null)}
              data-cy="upload-cancel"
            />
          </div>
        )}
      </div>
      {uploading && "UPLOADING ..."}
    </div>
  );
};

export default Upload;
