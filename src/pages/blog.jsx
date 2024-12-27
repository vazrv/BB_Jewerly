import React from "react";
import ringImage from "@assets/photo/blog/ring.png";
import cherryImage from "@assets/photo/blog/blog_cherry.png";

export const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-karla text-base font-thin md:text-xl">
      {/* Первая статья */}
      <div className="mb-16">
        <p className="text-sm md:text-base">СТАТЬЯ • ОКТЯБРЬ 2024</p>
        <div className="flex flex-col-reverse gap-8 py-8 md:flex-row md:justify-between">
          <img
            className="h-auto w-full rounded-2xl md:h-[28.75rem] md:w-[31.25rem]"
            src={ringImage}
            alt="Ring"
          />
          <div className="md:w-[700px]">
            <p>
              Ювелирные подарки часто несут в себе эмоциональную значимость,
              которая делает их особенно ценными. Подарок, выбранный с любовью и
              вниманием, показывает, что вы действительно заботитесь о человеке
              и помните о его вкусах и желаниях. Как отмечено в исследованиях,
              большинство людей ценят подарки, сделанные с душой, больше, чем их
              стоимость.
            </p>
            <br />
            <p>
              Ношение красивых и изысканных ювелирных украшений может
              значительно улучшить самооценку и уверенность в себе. Украшения,
              такие как цепочки с медальонами или кольца с символами мощи, могут
              быть связаны с усилением чувства уверенности.
            </p>
            <br />
            <p>
              Выбирая ювелирный подарок с любовью и вниманием, вы демонстрируете,
              что действительно заботитесь о человеке и помните о его вкусах и
              желаниях. Это делает подарок не просто стоимости, но и источником
              глубоких эмоций и воспоминаний.
            </p>
          </div>
        </div>
      </div>

      {/* Вторая статья */}
      <div>
        <p className="text-sm md:text-base">СТАТЬЯ • ОКТЯБРЬ 2024</p>
        <div className="flex flex-col gap-8 py-8 md:flex-row md:justify-between">
          <div className="md:w-[600px]">
            <p>
              Подарок, выбранный с любовью и вниманием, показывает, что вы
              действительно заботитесь о человеке и помните о его вкусах и
              желаниях. Как отмечено в исследованиях, большинство людей ценят
              подарки, сделанные с душой, больше, чем их стоимость. Ювелирные
              украшения, особенно те, которые передаются по наследству или
              получены в качестве подарка от близких, могут иметь значительную
              сентиментальную ценность и эмоциональную привязанность,
              олицетворяя семейную историю и традиции.
            </p>
            <br />
            <p>
              Ношение красивых и изысканных ювелирных украшений может
              значительно улучшить самооценку и уверенность в себе. Украшения,
              такие как цепочки с медальонами или кольца с символами мощи, могут
              быть связаны с усилением чувства уверенности. Это делает подарок
              не просто стоимости, но и источником глубоких эмоций и
              воспоминаний.
            </p>
          </div>
          <img
            className="h-auto w-full rounded-2xl md:h-[28.75rem] md:w-[31.25rem]"
            src={cherryImage}
            alt="Cherry"
          />
        </div>
      </div>
    </div>
  );
};