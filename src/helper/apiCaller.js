import {
  cleanCrawl, 
  cleanPeople, 
  cleanPlanets,
  cleanVehicles
} from './cleaner';

const generateNumber = () => {
  return Math.floor(Math.random() * 8)
}

const fetchCrawl = async () => {
  const number = generateNumber()
  const url = `https://swapi.co/api/films/${number}/?format=json`
  const response = await fetch(url)
  const rawFilm = await response.json()
  const filmData = await Promise.resolve(rawFilm)
  const crawlData = cleanCrawl(filmData)
  return crawlData
}

const fetchData = async (request) => {
  const url = `https://swapi.co/api/${request}/?format=json`
  const response = await fetch(url)
  const rawData = await response.json()
  const allData = rawData.results
  const cleanData = cleanPeople(allData)
  const fullData = await checkForNested(cleanData)
  // return cleanPeople(fullData)
}

const checkForNested = (data) => {
  data.forEach(object => {
    const dataKeys = Object.keys(object)
    dataKeys.forEach(async key => {
      if (Array.isArray(object[key])) {
        const resolvedArray = await nestedArrayFetch(object[key])
        return {...object, resolvedArray}
      } else if (object[key].length > 20) {
        await nestedFetch(object[key])
      }
    })
  })
}

  const nestedArrayFetch = (array) => {
    const retrieveNested = array.map(async url => {
      const response = await fetch(url)
      const result = await response.json()
      return result.name
    })
    return Promise.all(retrieveNested)
  }

  const nestedFetch = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
  }
//   const peoplePromise = people.map(async person => {
//     const response = await fetch(person.homeworld)
//     const homeworld = await response.json()
//     const fullGuy = {...person, homeworld}
//     return fullGuy
//   })
//   return Promise.all(peoplePromise)
// }

const findSpecies = (people) => {
  const peoplePromise = people.map(async person => {
    const response = await fetch(person.species)
    const species = await response.json()
    const fullGuy = { ...person, species }
    return fullGuy
  })
  return Promise.all(peoplePromise)
}

const fetchPlanets = async () => {
  const url = `https://swapi.co/api/planets/?format=json`
  const response = await fetch(url)
  const rawPlanets = await response.json()
  const allPlanets = rawPlanets.results
  const resolvedResidents = await findResidents(allPlanets)
  return cleanPlanets(resolvedResidents)
}

const findResidents = (planets) => {
  const resolvedPlanets = planets.map(async planet => {
    const residents = await resolveResidents(planet.residents)
    return {...planet, residents}
  })
  return Promise.all(resolvedPlanets)
}

const resolveResidents = (residentsArray) => {
  const fullPlanet = residentsArray.map(async url => {
    const response = await fetch(url)
    const residents = await response.json()
    return residents
  })
  return Promise.all(fullPlanet)
}

const fetchVehicles = async () => {
  const url = `https://swapi.co/api/vehicles/?format=json`
  const response = await fetch(url)
  const resolved = await response.json()
  const vehicles = resolved.results
  return cleanVehicles(vehicles)
}


export {
  fetchCrawl,
  fetchData
}