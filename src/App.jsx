import { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import Book from "./components/book";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    pages: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.pages || form.stock === "") {
      alert("Plotësoni fushat kryesore!");
      return;
    }

    const newBook = {
      ...form,
      stock: parseInt(form.stock),
      pages: parseInt(form.pages),
      image: form.image || "https://via.placeholder.com/150",
      id: Date.now(),
    };

    setBooks([...books, newBook]);
    setForm({ title: "", author: "", description: "", pages: "", stock: "", image: "" });
  };

  const deleteBook = (id) => setBooks(books.filter((b) => b.id !== id));
  const sellBook = (id) => setBooks(books.map((b) => b.id === id ? { ...b, stock: b.stock > 0 ? b.stock - 1 : 0 } : b));
  const editBook = (book) => {
    setForm({ ...book });
    deleteBook(book.id);
  };

  return (
    <div className="App">
      <h1>Library Manager</h1>
      <form onSubmit={handleSubmit}>
        <Input name="title" value={form.title} onChange={handleChange} label="Emri" />
        <Input name="author" value={form.author} onChange={handleChange} label="Autori" />
        <Input name="description" value={form.description} onChange={handleChange} label="Përshkrimi" type="textarea" />
        <Input name="pages" value={form.pages} onChange={handleChange} label="Numri i faqeve" type="number" />
        <Input name="stock" value={form.stock} onChange={handleChange} label="Numri në stok" type="number" />
        <Input name="image" value={form.image} onChange={handleChange} label="Image URL" />
        <Button type="submit">Shto Librin</Button>
      </form>

      <div className="book-list">
        {books.map((book) => (
          <Book key={book.id} book={book} deleteBook={deleteBook} sellBook={sellBook} editBook={editBook} />
        ))}
      </div>
    </div>
  );
}

export default App;
