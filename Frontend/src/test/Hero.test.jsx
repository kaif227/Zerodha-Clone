// import React from 'react';
// import {render,screen} from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Hero from "../landing_page/home/Hero";

// //test suit means we can give in this multiple test cases ek sath

// describe("Hero Component",()=>{
//   test("render hero image", () => {
//   render(<Hero />);
//   const heroImg = screen.getByAltText("Main Image");
//   expect(heroImg).toBeInTheDocument();
//   expect(heroImg).toHaveAttribute("src", "media/images/homeHero.png");
//   });
// });

// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Hero from "../landing_page/home/Hero";

// describe("Hero Component", () => {
//   it("renders hero image", () => {
//     render(<Hero />);
//     const heroImg = screen.getByAltText("Main Image");
//     expect(heroImg).toBeInTheDocument();
//     expect(heroImg).toHaveAttribute("src", "media/images/homeHero.png");
//   });
// });
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  it("renders hero image", () => {
    render(<Hero />);
    const heroImg = screen.getByAltText("Main Image");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "media/images/homeHero.png");
  });
  //this is another element test mean second test 
  it("renders hero button", () => {//for which element test you want
    render(<Hero />);//in which component you want to do test
    const heroButton = screen.getByRole("button",{name:/sign up for free/i});//in this line we will get first button using getByRole then in that button inside name should be signup for free the tha will recognize
    expect(heroButton).toBeInTheDocument();//we expect that the above variable should have in document 
     expect(heroButton).toHaveClass("btn-primary");//we expect that have particular class name btn-primary
  });
});

//for testing just run npm test

