import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding: 20px;
`;

const ProductGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductContainer = styled.div`
  grid-column: span 1;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SortByContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SortByLabel = styled.label`
  margin-right: 10px;
`;

const SortBySelect = styled.select`
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#333" : "#ccc")};
  color: ${(props) => (props.active ? "#ff5a36" : "#000")};
  cursor: pointer;
`;

const Products = ({ data }) => {
  const [sortBy, setSortBy] = useState("random");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedData = data.slice().sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else {
      return Math.random() - 0.5;
    }
  });

  const productsPerPage = 6;
  const totalPages = Math.ceil(sortedData.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <SortByContainer>
        <SortByLabel>Sort by:</SortByLabel>
        <SortBySelect value={sortBy} onChange={handleSortByChange}>
          <option value="random">Random</option>
          <option value="price">Price</option>
        </SortBySelect>
      </SortByContainer>
      {!data ? (
        <h3>Loading</h3>
      ) : (
        <>
          <ProductGrid>
            {currentProducts.map((product) => {
              return (
                <ProductContainer key={product.id}>
                  <ProductCard product={product} />
                </ProductContainer>
              );
            })}
          </ProductGrid>
          <PaginationContainer>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <PaginationButton
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => handlePageClick(pageNumber)}
                >
                  {pageNumber}
                </PaginationButton>
              )
            )}
          </PaginationContainer>
        </>
      )}
    </Container>
  );
};

export default Products;
