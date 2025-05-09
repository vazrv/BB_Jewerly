import { motion } from "framer-motion";


export const About = () => {
  return (
    <motion.div className="m-big text-center font-karla text-2xl font-thin"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <p>
        Компания "BB Jewelry" — это бренд украшений, созданных вручную. Большую
        часть коллекции составляют изделия с натуральными камнями, выполненные в
        единственном экземпляре.
      </p>
      <br />
      <p>
        Истинно уникальные украшения "BB Jewelry" обладают яркой
        индивидуальностью, подчеркивая неповторимость каждой владелицы. Бренд
        существует с 1994 года. Основатель компании, главный дизайнер и идеолог
        – маэстро Джампьеро Алкозер. Штаб-квартира бренда и мастерская
        расположены во Флоренции, на Via Mannelli, 15/R, где создаются
        великолепные украшения, способные удовлетворить самый взыскательный
        вкус.
      </p>
    </motion.div>
  );
};
