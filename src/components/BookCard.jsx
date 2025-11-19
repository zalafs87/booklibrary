import React from 'react';
import './BookCard.css';

function BookCard({ title, author, genre, year, description }) {
  return (
    <div className="book-card">
      <h3 className="book-card-title">{title}</h3>
      <p className="book-card-author">by {author}</p>
      <div className="book-card-details">
        <span className="book-card-genre">{genre}</span>
        <span className="book-card-year">{year}</span>
      </div>
      <p className="book-card-description">{description}</p>
    </div>
  );
}

export default BookCard;
