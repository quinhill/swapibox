import {
  cleanSort,
  cleanCrawl
} from './cleaner';

const generateNumber = () => {
  return Math.floor(Math.random() * 7) + 1
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
  const cleanData = cleanSort(request, allData)
  const fullData = await resolveNested(cleanData)
  return fullData
}

const resolveNested = (data) => {
  const foundNested = data.map(async object => {
    if (object.homeworld) {
      object.homeworld = await fetchHomeworld(object.homeworld)
      object.population = await fetchPopulation(object.population)
      object.species = await fetchSpecies(object.species)
    } else if (object.residents) {
      object.residents = await fetchResidents(object.residents)
    }
    return object
  })
  return Promise.all(foundNested)
}

const fetchHomeworld = async (url) => {
  const response = await fetch(url)
  const homeworldData = await response.json()
  return homeworldData.name
}

const fetchPopulation = async (url) => {
  const response = await fetch(url)
  const populationData = await response.json()
  return populationData.population
}

const fetchSpecies = async (url) => {
  const response = await fetch(url)
  const speciesData = await response.json()
  return speciesData.name
}

const fetchResidents = (array) => {
  const residentNames = array.map(async url => {
    const resolvedResidents = await resolveResidents(url)
    return resolvedResidents
  })
  return Promise.all(residentNames)
}

const resolveResidents = async (url) => {
  const response = await fetch(url)
  const residentData = await response.json()
  return residentData.name
}


export {
  fetchCrawl,
  fetchData
}