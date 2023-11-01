import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Filter from "./components/Filter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1f1f1f;
  color: #ff5a36;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const FilterColumn = styled.div`
  grid-column: span 1;
  border-right: 1px solid #fff;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-right: none;
  }
`;

const ProductColumn = styled.div`
  grid-column: span 4;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      setData(res?.data);
      setCategories(
        Array.from(new Set(res?.data.map((item) => item.category)))
      );
    });
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) => selectedCategories.includes(item.category))
      );
    }
  }, [selectedCategories, data]);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <FilterColumn>
          <Filter
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </FilterColumn>
        <ProductColumn>
          <Products data={filteredData} />
        </ProductColumn>
      </Wrapper>
    </Container>
  );
};

export default App;
