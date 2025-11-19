import React from 'react';
import BookCard from './components/BookCard';
import './App.css';

// 1. Data: Array of book objects
const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    description: "A classic of modern American literature, this novel explores the irrationality of adult attitudes towards race and class in the Deep South of the 1930s through the eyes of a young girl."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    description: "A haunting vision of the future, where the government controls every aspect of human life. It's a powerful warning against totalitarianism."
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
    description: "The story of Holden Caulfield's experiences in New York City after being expelled from prep school. It deals with themes of angst, alienation, and identity."
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    year: 2011,
    description: "This book challenges everything we thought we knew about being human. It explores how Homo sapiens came to dominate the world and what our future might hold."
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    description: "A timeless classic about the adventures of Bilbo Baggins, a hobbit who is swept into an epic quest to reclaim a stolen treasure from a fearsome dragon."
  }
];

// Helper function to find the most common genre
function getMostCommonGenre(bookList) {
  if (bookList.length === 0) return "N/A";

  const genreCounts = bookList.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(genreCounts).reduce((a, b) =>
    genreCounts[a] > genreCounts[b] ? a : b
  );
}

function App() {
  const totalBooks = books.length;
  const mostCommonGenre = getMostCommonGenre(books);

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Book Collection</h1>
        <p>Books That Changed My Perspective</p>
      </header>

      <main>
        <section className="books-summary">
          <h2>Collection Summary</h2>
          <p>Total Books: <strong>{totalBooks}</strong></p>
          <p>Most Common Genre: <strong>{mostCommonGenre}</strong></p>
        </section>

        <section className="books-list">
          {books.map((book) => (
            <BookCard
              key={book.id} // Unique key prop
              title={book.title}
              author={book.author}
              genre={book.genre}
              year={book.year}
              description={book.description}
            />
          ))}
        </section>
      </main>

      <footer className="app-footer">
        <p>Your Name</p>
        <p>your.email@example.com</p>
        <p>&copy; {new Date().getFullYear()} Book Lover</p>
      </footer>
    </div>
  );
}

export default App;
