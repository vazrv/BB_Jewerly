export const importAll = (r) => {
    return Object.keys(r).map((key) => r[key].default);
  };
  
  // const images = importAll(
  //   import.meta.glob("./*.{png,jpg,jpeg,svg}", { eager: true }),
  // );
  