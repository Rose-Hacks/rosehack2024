import Title from "@/components/static/live/Title";
import { TRACKS } from "@/data/static/Tracks";

const Tracks = () => {
  return (
    <div className="flex-col lg:w-1/2 md:w-2/3">
      <Title label="Tracks" />
      <div className="lg:grid lg:grid-cols-2">
        {TRACKS.map((track, index) => {
          return (
            <div key={index} className="p-6">
              {index % 2 === 0 && (
                <div className="border-l-2 text-left pl-4">
                  <div
                    className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${track.color} mb-3`}
                  >
                    {track.name}
                  </div>
                  <div className="text-white lg:w-full md:w-1/3">
                    {track.description}
                  </div>
                </div>
              )}
              {index % 2 !== 0 && (
                <div className="border-r-2 pr-4 flex flex-col">
                  <div
                    className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${track.color} mb-3 self-end`}
                  >
                    {track.name}
                  </div>
                  <div className="text-white self-end text-right lg:w-full md:w-1/3">
                    {track.description}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracks;
