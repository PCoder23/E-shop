import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 7px 7px 20px #ffffff5c;
  color: black;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.04);
    background-color: black;
    color: #ff5a36;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;

  justify-content: center;
`;

const CardImg = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 20px;
`;

const DetailContainer = styled.div``;

const ProductTitle = styled.h4``;
const ProductDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const ProductPrice = styled.p`
  font-weight: 700;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ImgContainer>
        <CardImg src={product?.image} alt="" />
      </ImgContainer>
      <DetailContainer>
        <ProductTitle>{product?.title}</ProductTitle>
        <ProductDescription>{product?.description}</ProductDescription>
        <ProductPrice>Rs {product?.price}</ProductPrice>
      </DetailContainer>
    </Card>
  );
};

export default ProductCard;
