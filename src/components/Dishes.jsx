import React from 'react'
import { DISHES } from "../constants"
import DishCard from "./DishCard"

const Dishes = () => (
  <section className="container mx-auto py-16" id="dishes">
    <h2 className="mb-8 text-center text-3xl lg:text-4xl">Our Dishes</h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
      {DISHES.map((dish, i) => <DishCard key={i} project={dish} />)}
    </div>
  </section>
)

export default Dishes