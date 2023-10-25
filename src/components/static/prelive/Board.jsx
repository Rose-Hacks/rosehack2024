import Image from "next/image";

const Board = ({position, name,image}) => {
  return (
		<div className="font-montserrat text-center text-hackathon-tags-white flex-col">
			<Image className="rounded-full mb-1" src={image} />
			<div>{position}</div>
			<div>{name}</div>
		</div>
	);
};

export default Board;
