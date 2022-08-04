import { Course, Tag } from "../models";

/**
 * Type for CardLayout component to render
 * course info and tags
 */
export type CardLayoutData = {
  course: Course;
  tags: Tag[];
};
