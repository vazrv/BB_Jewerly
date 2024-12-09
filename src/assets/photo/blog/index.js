import { importAll } from "@modules/importAll";

const images = importAll(
  import.meta.glob("./*.{png,jpg,jpeg,svg}", { eager: true }),
);

export default images;
