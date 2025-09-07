import React from "react";

interface ItemCardProps {
  text: string;
  onDelete: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ text, onDelete }) => {
  return (
    <li>
      <span>{text}</span>
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
};