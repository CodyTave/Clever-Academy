interface props {
  img: string;
  title: string;
}
function CategoryCard({ img, title }: props) {
  return (
    <div className="block h-72 sm:min-w-[260px] min-w-[220px] force-width relative select-none">
      <img className=" object-cover w-full h-full select-none " src={img} />
      <h1 className="absolute bottom-5  font-semibold text-white px-4 text-left z-30 select-none ">
        {title}
      </h1>
      <div className="absolute top-0 gradient  w-full h-full transall hover:opacity-80 " />
      <div className="absolute top-0 gradient2 opacity-40 hover:opacity-0  w-full h-full transall  " />
    </div>
  );
}

export default CategoryCard;
