import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Products'
import HeroCard from './HeroCard'

function App() {
  return (
    <div>
      <Products />
      <HeroCard />
      <HeroCard>
        This is a long sentence, and I want to insert content into the hero card component from the outside.
      </HeroCard>
    </div>
  )
}

export default App
