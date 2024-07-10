import { ParsedUrlQuery } from "querystring";
import { Course, Tag } from "../models";

export interface MetaInfo {
  title: string;
  description: string;
  image?: string;
  url?: string;
  author?: string;
}

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
  courseurltitle: string;
}

interface CoursePageProps {
  course: JSON;
  lessons: JSON;
  tags: JSON;
  contributors: JSON;
  cardLayoutData: string;
}

