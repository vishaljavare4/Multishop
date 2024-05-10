import './App.css'
import Categories from './components/Categories'
import Deliverable from './components/Deliverable'
import FeaturedProducts from './components/FeaturedProducts'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
 

  return (
    <>
      <div className='w-full flex flex-col  gap-2 items-center justify-center mt-4'>
        <Header/>
        <HeroSection/>
        <Deliverable/>
        <Categories/>
        <FeaturedProducts/>
      </div>
    </>
  )
}

export default App