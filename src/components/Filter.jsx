import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const FilterTitle = styled.h2`
  text-decoration: underline;
  text-underline-offset: 10px;
  color: white;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryLabel = styled.label`
  margin-bottom: 5px;
`;

const CategoryInput = styled.input`
  margin-right: 5px;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px;
  position: relative;
  z-index: 1;
  justify-self: flex-end;
  right: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
  &:nth-child(2) {
    width: 20px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;
  }
`;

const Filter = ({ categories, selectedCategories, setSelectedCategories }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((selectedCategory) => {
          return selectedCategory !== category;
        })
      );
    }
  };

  return (
    <Container>
      <FilterTitle>Filter</FilterTitle>
      <Hamburger onClick={() => setShowMenu(!showMenu)}>
        <HamburgerLine
          style={showMenu ? { transform: "rotate(-45deg)" } : {}}
        />
        <HamburgerLine style={showMenu ? { opacity: 0 } : {}} />
        <HamburgerLine style={showMenu ? { transform: "rotate(45deg)" } : {}} />
      </Hamburger>
      <Menu style={showMenu ? { display: "flex" } : {}}>
        <CategoryContainer>
          {categories &&
            categories.map((category) => {
              return (
                <CategoryLabel key={category}>
                  <CategoryInput
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCategoryChange}
                  />
                  {category}
                </CategoryLabel>
              );
            })}
        </CategoryContainer>
      </Menu>
    </Container>
  );
};

export default Filter;
