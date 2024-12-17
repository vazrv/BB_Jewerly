// Components
import { Button } from "@components/Button";
import { BlackButton } from "@components/Button/index black";
import { Categories } from "@components/Categories";

// Assets
import icon from "@assets/photo/catalog/Frame 17-1.png";
import mainPhoto from "@assets/photo/main/FirstFrameMain.jpg";
import imgMain from "@assets/photo/main";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const Categ = [
    {
      id: 1,
      url: imgMain[3],
      children: "Ожерелья",
    },
    {
      id: 2,
      url: imgMain[7],
      children: "Кулоны",
    },
    {
      id: 3,
      url: imgMain[8],
      children: "Серьги",
    },
    {
      id: 4,
      url: imgMain[4],
      children: "Подвески",
    },
    {
      id: 5,
      url: imgMain[2],
      children: "Кольца",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div
        className="flex h-[20rem] md:h-[40rem] flex-col justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${mainPhoto})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 md:gap-8 text-white">
            <h1 className="font-cormorantSC text-[40px] md:text-[80px] font-thin">
              Осенний каталог
            </h1>
            <p className="text-center font-karla text-[16px] md:text-[32px]">
              Новая коллекция уже в продаже, <br className="hidden md:block" /> ищите в каталоге
            </p>
            <Link to="Catalog">
              <Button>КАТАЛОГ</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-8 md:mb-big">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-2 p-4 md:p-10">
            <h2 className="thin font-cormorantSC text-[1.75rem] md:text-[2.5rem]">
              Категории
            </h2>
            <p className="font-cormorantSC text-[1.25rem] md:text-[1.75rem] italic">
              Радуйте себя нашими украшениями
            </p>
          </div>
        </div>
        <Link to="Catalog">
          <div className="mx-4 flex flex-wrap justify-center gap-4 md:mx-big md:gap-5 md:justify-between md:flex-nowrap">
            {Categ.map((item) => (
              <Categories
                key={item.id}
                url={item.url}
                children={item.children}
              />
            ))}
          </div>
        </Link>
      </div>

      {/* Blog Section */}
      <div className="mb-8 md:mb-big flex flex-col md:flex-row bg-black">
        <img
          className="h-[15rem] md:h-[39.875rem] w-full md:w-[43.75rem] object-cover"
          src={imgMain[5]}
          alt=""
        />
        <div className="container mx-auto w-full md:w-[600px] p-4 md:p-0">
          <div className="flex flex-col text-white">
            <p className="py-4 md:py-10 font-karla text-[14px] md:text-[1.1875rem]">
              СТАТЬЯ • ОКТЯБРЬ 2024
            </p>
            <p className="py-2 md:py-6 font-cormorantSC text-[1.5rem] md:text-[2.1875rem]">
              Новая коллекция
            </p>
            <p className="pb-4 md:pb-10 font-karla text-[14px] md:text-[1.375rem]">
              Ювелирные подарки часто несут в себе эмоциональную значимость,
              которая делает их особенно ценными. Подарок, выбранный с любовью
              и вниманием, показывает, что вы действительно заботитесь о
              человеке и помните о его вкусах и желаниях.
            </p>
          </div>
          <Link to="Blog">
            <Button>БЛОГ</Button>
          </Link>
        </div>
      </div>

      {/* Seasonal Gifts Section */}
      <div className="container mx-auto px-4 md:px-0">
        <div className="mb-8 md:mb-big">
          <div className="flex flex-col md:flex-row rounded-2xl bg-mainColor">
            <div className="p-4 md:p-14">
              <p className="py-4 md:py-7 font-cormorantSC text-[1.5rem] md:text-[2.1875rem] font-bold">
                Осенние подарки
              </p>
              <p className="pb-4 md:pb-10 font-karla text-[14px] md:text-[1.375rem]">
                Осенние тематические украшения, такие как изделия с мотивами
                анимализма, могут добавить уникальный и сезонный оттенок в
                подарок.
              </p>
              <Link to="Catalog">
                <BlackButton>КАТАЛОГ</BlackButton>
              </Link>
            </div>
            <img
              className="h-[200px] md:h-[448px] w-full md:w-[588px] object-cover"
              src={imgMain[6]}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8 md:mb-big flex flex-col md:flex-row bg-black">
        <img
          className="h-[15rem] md:h-auto w-full md:w-auto object-cover"
          src={imgMain[1]}
          alt=""
        />
        <div className="container mx-auto p-4 md:p-20 text-white">
          <p className="text-[1.5rem] md:text-[2.1875rem] font-extralight">
            Чем мы занимаемся?
          </p>
          <div className="py-4 md:py-10 font-karla text-[14px] md:text-[1.375rem] font-thin">
            <p>
              Ювелирный магазин бижутерии "BB Jewelry" занимается продажей
              стильных и качественных украшений, предлагая широкий ассортимент
              бижутерии.
            </p>
            <br />
            <p>
              В их коллекциях можно найти украшения на любой вкус, включая
              серьги, кольца, браслеты, ожерелья и подвески, выполненные в
              различных стилях и из разных материалов.
            </p>
          </div>
          <Link to="About">
            <Button>ПРО НАС</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

