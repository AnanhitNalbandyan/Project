import { useGetAllCategoriesQuery } from "../../redux/apiSlice";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { Category } from "../Category";
import { baseUrl } from "../../redux/apiSlice";


export const Categories = () => {
  const { data } = useGetAllCategoriesQuery();
  console.log(data);

  return (
    <div className={styles.wrapper}>
      <h2>Categories</h2>
      <div className={styles.categoriesWrapper}>
      {data && data.map((el) => (
        <Category key={el.id} title={el.title} image={baseUrl + el.image}/>
      ))}
      </div>

    </div>
  );
};
