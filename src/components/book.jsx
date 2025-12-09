export default function Book({ book, deleteBook, sellBook, editBook }) {
  return (
    <div className="book">
      <img src={book.image} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Autor: {book.author}</p>
        <p>Faqe: {book.pages}</p>
        <p>
          Stok:{" "}
          {book.stock > 0 ? book.stock : <span className="highlight">Nuk ka stok</span>}
        </p>
        <p>{book.description}</p>
      </div>
      <div className="book-actions">
        <button onClick={() => sellBook(book.id)} disabled={book.stock === 0}>Shit</button>
        <button onClick={() => editBook(book)}>Ndrysho</button>
        <button onClick={() => deleteBook(book.id)}>Fshij</button>
      </div>
    </div>
  );
}
