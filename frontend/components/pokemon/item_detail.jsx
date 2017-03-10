import React from 'react';

const ItemDetail = (props) => {
  return (
    <h1>{props.item[0].name}</h1>
  );
};

export default ItemDetail;
