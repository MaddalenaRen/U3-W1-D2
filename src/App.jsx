import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav.jsx';
import MyFooter from './MyFooter.jsx';
import Welcome from './Welcome.jsx';
import AllTheBooks from './AllTheBooks.jsx';
import SingleBook from './Component/SingleBook.jsx';
import BookList from './Component/BookList.jsx';


import fantasyBooks from "./books/fantasy.json";
import horrorBooks from "./books/horror.json";
import historyBooks from "./books/history.json";
import scifiBooks from "./books/scifi.json";
import romanceBooks from "./books/romance.json";



function App() {
  const [temaColore, setTemaColore] = useState("primary");


  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNav temaColore={temaColore} />

        <main className="container flex-grow-1 mt-4">
          <Welcome />

          <div>

            <h1 className='text-center mt-5 fs-2'>All The Books</h1>
            <div className='my-5 fs-3'>
              <h2 className="text-center">BEST SELLERS</h2>
              <div className="mx-2 d-flex justify-content-center gap-3">
                <SingleBook book={fantasyBooks[10]} />
                <SingleBook book={romanceBooks[1]} />
                <SingleBook book={scifiBooks[6]} />
              </div>

            </div>

            <h2>Fantasy Books</h2>
            <BookList books={fantasyBooks} />

            <h2>Horror Books</h2>
            <BookList books={horrorBooks} />

            <h2>History Books</h2>
            <BookList books={historyBooks} />

            <h2>Sci-Fi Books</h2>
            <BookList books={scifiBooks} />

            <h2>Romance Books</h2>
            <BookList books={romanceBooks} />

            {/* <AllTheBooks /> */}


          </div>


        </main>

        <MyFooter />
      </div>

    </>
  )
}

export default App
