import { render, screen } from "@testing-library/react";
import { Course } from "../../models";
import Home from "../index.page";

const featuredCourse: Course = {
  id: "1234556",
  title: "Build your first AWS Amplify and React App",
  timeHours: 0,
  timeMinutes: 30,
  learningObjective: "learning objective",
  description: "description",
  requirements: [
    "Knowledge of React, including state, event listeners, and props.",
  ],
  image: "myimage",
  skillLevel: "BEGINNER",
  dateCreated: "2022-03-15T03:33:00.000Z",
  isFeatured: true,
  imageAltText: "Default mock image",
  trailerEmbedId: "2345123",
};

const otherCourse: Course = {
  id: "22234",
  title: "Other course",
  timeHours: 0,
  timeMinutes: 30,
  learningObjective: "learning objective",
  description: "description",
  requirements: [
    "Knowledge of React, including state, event listeners, and props.",
  ],
  image: "myimage",
  skillLevel: "BEGINNER",
  dateCreated: "2022-03-15T03:33:00.000Z",
  isFeatured: false,
  imageAltText: "Default mock image",
  trailerEmbedId: "2345123",
};

const courseTags = [
  {
    id: "12345",
    name: "beginner",
  },
  {
    id: "23456",
    name: "react",
  },
  {
    id: "34567",
    name: "javascript",
  },
];

const cardLayoutData: string = JSON.stringify([
  { course: featuredCourse, tags: courseTags },
  { course: otherCourse, tags: courseTags },
]);

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: () => ({
    asPath: "/",
  }),
}));

describe("Home", () => {
  it("should render a featured course", () => {
    const component = (
      <Home
        featuredCourse={featuredCourse}
        featuredCourseTags={courseTags}
        cardLayoutData={cardLayoutData}
      />
    );

    render(component);

    const newCourseText = screen.getByText("NEW COURSE");
    const featuredCourseTitle = screen.getByText(
      "Build your first AWS Amplify and React App"
    );

    expect(newCourseText).toBeInTheDocument();
    expect(featuredCourseTitle).toBeInTheDocument();
  });

  it("should not show featured course in the card layout collection", () => {
    const component = (
      <Home
        featuredCourse={featuredCourse}
        featuredCourseTags={courseTags}
        cardLayoutData={cardLayoutData}
      />
    );

    render(component);

    const courseTitle = screen.getAllByText(
      "Build your first AWS Amplify and React App"
    );

    expect(courseTitle.length).toEqual(1);
  });
});
