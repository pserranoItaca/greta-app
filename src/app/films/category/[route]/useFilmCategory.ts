import { FilmModel } from "@/infraestructure/models/Film";

const userCategory = (category: string) => {
  const getFilmsByCategory = async () => {
    try {
      const response = await fetch("http://localhost:3010/films/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });
      if (response.ok) {
        const data = (await response.json()) as FilmModel[];
        console.log(data);
        return data;
      }
    } catch (error) {}
  };
  return { getFilmsByCategory };
};
export default userCategory;
