import { Link } from "react-router-dom";
import chainImage from "@assets/photo/catalog/Frame 17-4.png";
import React from "react";
import trash from "@assets/icons/trash.svg";
import imgFavorite from "@assets/photo/catalog";
import { Products } from "@components/Products";
import { motion } from "framer-motion";

export const Card = () => {
  const Categ = [
    {
      id: 1,
      url: imgFavorite[3],
      children: "НАЧАЛЬНЫЙ КУЛОН",
      price: "9 000₽",
    },
    {
      id: 2,
      url: imgFavorite[4],
      children: "СЕРДЕЧНЫЙ КУЛОН",
      price: "9 000₽",
    },
    {
      id: 3,
      url: imgFavorite[5],
      children: "КУЛОН “БРИЛАНТ”",
      price: "10 000₽",
    },
    {
      id: 4,
      url: imgFavorite[1],
      children: "ПОДВЕСКА “ЛИСТ”",
      price: "8 000₽",
    },
    {
      id: 5,
      url: imgFavorite[2],
      children: "ПОДВЕСКА “ЛИСТ”",
      price: "8 000₽",
    }
  ];

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const hoverScale = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };

  const tapScale = {
    scale: 0.98
  };

  return (
    <motion.div
      className="container mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row justify-between mt-big mb-big">
        {/* Корзина */}
        <div className="w-full md:w-[37rem]">
          <motion.h1
            className="font-cormorantSC text-3xl pb-3 text-center md:text-left"
            variants={itemVariants}
          >
            Корзина
          </motion.h1>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="pt-12 space-y-12">
            {[...Array(2)].map((_, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <motion.img
                  src={chainImage}
                  alt="item"
                  className="w-[60%] md:w-auto"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                />
                <div className="ml-0 md:ml-10 mt-4 md:mt-0">
                  <span className="flex justify-between font-karla">
                    <p className="text-2xl text-[#515151] mr-4 lg:mr-28">{`Начальный кулон`}</p>
                    <motion.img
                      className="cursor-pointer"
                      src={trash}
                      alt="trash"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  </span>
                  <p className="text-xl text-[#7E7E7E]">Количество: 1</p>
                  <p className="text-xl text-[#8A8A8A] mt-4 lg:mt-40">₽9000</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Оформление заказа */}
        <motion.div
          className="mt-14 md:mt-0 w-full md:w-[25.625rem] rounded-xl border border-black p-10 font-cormorantSC text-xl h-96"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
        >
          <p className="mb-5 text-center text-2xl">Оформление заказа</p>
          <motion.hr
            className="h-0 border border-[#BFBFBF]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          />
          <div className="my-6 text-[#6B6B6B]">
            <motion.div
              className="flex justify-between pb-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>1 Начальный кулон</p>
              <p>₽9000</p>
            </motion.div>
            <motion.div
              className="flex justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p>1 Начальный кулон</p>
              <p>₽9000</p>
            </motion.div>
          </div>
          <motion.hr
            className="h-0 border border-[#BFBFBF] mb-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7 }}
          />
          <motion.div
            className="flex justify-between mb-7 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>Итог</p>
            <p>₽18000</p>
          </motion.div>
          <Link to="/complete">
            <motion.button
              className="flex h-12 w-full items-center justify-center rounded-md border border-black px-4 py-2 text-black transition duration-[500ms] hover:border-hoverColor hover:text-hoverColor"
              whileHover={hoverScale}
              whileTap={tapScale}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              ОПЛАТИТЬ
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div>
        <motion.p
          className="font-cormorantSC text-2xl my-7 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          Позвольте себе больше
        </motion.p>
        <motion.hr
          className="mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1 }}
        />
        <Link to="/Catalog">
          <div className="w-2/3 lg:w-auto mx-auto grid grid-cols-1 mb-big sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Categ.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={hoverScale}
              >
                <Products
                  url={item.url}
                  children={item.children}
                  price={item.price}
                />
              </motion.div>
            ))}
          </div>
        </Link>
      </div>
    </motion.div>
  );
};