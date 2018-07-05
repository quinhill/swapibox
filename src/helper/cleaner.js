const cleanCrawl = (data) => {
  return {
    crawlText: data.opening_crawl,
    title: data.title,
    date: data.release_date
  }
}

const cleanPeople = (data) => {
  const cleanedPeople = data.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld.name,
      species: person.species.name,
      population: person.homeworld.population,
      favorite: false
    }
  })
  return cleanedPeople
}

const cleanPlanets = (data) => {
  const cleanedPlanets = data.map(planet => {
    const residents = planet.residents.map(resident => resident.name)
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents,
      favorite: false
    }
  })
  return cleanedPlanets
}

const cleanVehicles = (data) => {
  const cleanedVehicles = data.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    }
  })
  return cleanedVehicles
}

export {
  cleanCrawl,
  cleanPeople,
  cleanPlanets,
  cleanVehicles
};