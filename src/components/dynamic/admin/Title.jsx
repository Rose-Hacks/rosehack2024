const Title = ({ title }) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="text-2xl font-montserrat font-thin text-white pr-5 hidden lg:block"
    >
      {title}
    </div>
  );
};

export default Title;
