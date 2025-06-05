import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="border p-4 rounded shadow-md">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;
