const cleanCrawl = (data) => {
  return {
    crawlText: data.opening_crawl,
    title: data.title,
    date: data.release_date
  }
}

const cleanSort = (sort, data) => {
  let cleanedData;
  if (sort === 'people') {
    cleanedData = cleanPeople(data)
  } else if (sort === 'planets') {
    cleanedData = cleanPlanets(data)
  } else if (sort === 'vehicles') {
    cleanedData = cleanVehicles(data)
  }
  return cleanedData;
}

const cleanPeople = (data) => {
  const cleanedPeople = data.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld,
      species: person.species,
      population: person.homeworld,
      favorite: false
    }
  })
  return cleanedPeople
}

const cleanPlanets = (data) => {
  const cleanedPlanets = data.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents,
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
  cleanSort,
  cleanCrawl,
  cleanPeople,
  cleanPlanets,
  cleanVehicles
};