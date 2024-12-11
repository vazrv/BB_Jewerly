// Components
import { Button } from "@components/Button";
import { BlackButton } from "@components/Button/index black";
import { Categories } from "@components/Categories";
import { Products } from "@components/Products";

// Assets
import icon from "@assets/photo/catalog/Frame 17-1.png";
import mainPhoto from "@assets/photo/main/FirstFrameMain.jpg";
import imgMain from "@assets/photo/main";

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
      <div
        className="flex h-[40rem] flex-col justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${mainPhoto})` }}
      >
        <div className="container mx-auto"></div>
        <div className="flex flex-col items-center gap-8 text-white">
          <h1 className="font-cormorantSC text-[80px] font-thin">
            Осенний каталог
          </h1>
          <p className="font-regular text-center font-karla text-[32px]">
            Новая коллекция уже в продаже, <br /> ищите в каталоге
          </p>
          <Button>КАТАЛОГ</Button>
        </div>
      </div>
      <div className="mb-big">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-1 p-10">
            <h2 className="thin font-cormorantSC text-[2.5rem]">Категории</h2>
            <p className="font-cormorantSC text-[1.75rem] italic">
              Радуйте себя нашими украшениями
            </p>
          </div>
        </div>
        <div className="mx-big flex justify-between gap-5">
          {Categ.map((item) => (
            <Categories key={item.id} url={item.url} children={item.children} />
          ))}
        </div>
      </div>
      <div className="mb-big flex bg-black">
        <img className="h-[39.875rem] w-[43.75rem]" src={imgMain[5]} alt="" />
        <div className="container mx-auto w-[600px]">
          <div className="flex flex-col text-white">
            <p className="py-10 font-karla text-[1.1875rem]">
              СТАТЬЯ • ОКТЯБРЬ 2024
            </p>
            <p className="py-6 font-cormorantSC text-[2.1875rem]">
              Новая коллекция
            </p>
            <p className="pb-10 font-karla text-[1.375rem]">
              Ювелирные подарки часто несут в себе эмоциональную значимость,
              которая делает их особенно ценными. Подарок, выбранный с любовью и
              вниманием, показывает, что вы действительно заботитесь о человеке
              и помните о его вкусах и желаниях. Как отмечено в исследованиях,
              большинство людей ценят подарки, сделанные с душой, больше, чем их
              стоимость.
            </p>
          </div>
          <Button>БЛОГ</Button>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mb-big">
          <div className="flex rounded-2xl bg-mainColor">
            <div>
              <div className="p-14">
                <p className="py-7 font-cormorantSC text-[2.1875rem] font-bold">
                  Осенние подарки
                </p>
                <p className="pb-10 font-karla text-[1.375rem]">
                  Осенние тематические украшения, такие как изделия с мотивами
                  анимализма (белочки, лисы, мышки и другие обитатели осеннего
                  леса), могут добавить уникальный и сезонный оттенок в подарок.
                </p>
                <BlackButton>КАТАЛОГ</BlackButton>
              </div>
            </div>
            <img className="h-[448px] w-[588px]" src={imgMain[6]} alt="" />
          </div>
        </div>
      </div>
      <div className="mb-big flex bg-black">
        <img src={imgMain[1]} alt="" />
        <div className="container mx-auto">
          <div className="p-20 text-white">
            <p className="text-[2.1875rem] font-extralight">
              Чем мы занимаемся?
            </p>
            <div className="py-10 font-karla text-[1.375rem] font-thin">
              <p>
                Ювелирный магазин бижутерии "BB Jewelry" занимается продажей
                стильных и качественных украшений, предлагая широкий ассортимент
                бижутерии.
              </p>
              <br />
              <p>
                В их коллекциях можно найти украшения на любой вкус, включая
                серьги, кольца, браслеты, ожерелья и подвески, выполненные в
                различных стилях и из разных материалов. Магазин ориентирован на
                модных людей, желающих подчеркнуть свой стиль с помощью
                оригинальных и трендовых аксессуаров.
              </p>
            </div>
            <Button>ПРО НАС</Button>
          </div>
        </div>
      </div>
    </>
  );
};
