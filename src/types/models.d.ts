import { ParsedUrlQuery } from "querystring";
import { Course, Tag } from "../models";

/**
 * Type for CardLayout component to render
 * course info and tags
 */
export type CardLayoutData = {
  course: Course;
  tags: Tag[];
};

/**
 * Type of context used for withSSRContext
 */
export declare type Context = {
  req?: any;
  modules?: any[];
};

interface CoursePageParams extends ParsedUrlQuery {
  coursetitle: string;
}

interface CoursePageProps {
  course: JSON;
  lessons: JSON;
  tags: JSON;
  contributors: JSON;
  cardLayoutData: string;
}
