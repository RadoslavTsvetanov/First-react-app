import './App.css';
import data from './data.js';
import Card from './Card.js';
import Navbar from './navbar';
export default function App() {
  const cards = data.map(item =>{// map returns whatever we pass it modified by the code for every element in the array by which is called, so esentially rader than return something we just use the function to create a new array of cards(objects) which we will use later 
    return(
    <Card
    key={item.id}
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
    openSpots={item.openSpots}
    />
    )
  })
  return ( // this is the ACTUAL return of the function
    <div>
        <Navbar />
        <section className="cards-list">
            {cards}
        </section>
    </div>
)
}