import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav.jsx';
import MyFooter from './MyFooter.jsx';
import Welcome from './Welcome.jsx';
import AllTheBooks from './AllTheBooks';
import booksData from './fantasy.json'

function App() {
  const [temaColore, setTemaColore] = useState("primary");


  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNav temaColore={temaColore} />

        <main className="container flex-grow-1 mt-4">
          <Welcome />

          <div>
            <h1>All The Books</h1>
            <AllTheBooks jsonData={booksData} />
          </div>


        </main>

        <MyFooter />
      </div>

    </>
  )
}

export default App
