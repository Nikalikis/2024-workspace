import './App.css'
import Logo from './components/logo/Logo.jsx'
import search from './components/search/search.jsx'

function App() {

  return (
    <>
      <header>
        <div className="container">
          <div className='logo'>
            <Logo />
            <div className='search'>
              <div className='input-icons'>
                <i class="bi bi-search"></i>
              </div>
            </div>

            <div className='search'>
              <search />
              <input type="text" placeholder='Search' />
            </div>
            <nav></nav>
          </div>
        </div>
      </header>


    </>
  )
}

export default App
