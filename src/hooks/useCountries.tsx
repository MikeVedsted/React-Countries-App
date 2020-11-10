import { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCountries } from '../redux/actions/country'
import { Country, Language, AppState } from '../types'

function useCountries(
  userInput: string,
  sortDirection: string,
  sortColumn: string
) {
  const dispatch = useDispatch()
  const countries = useSelector((state: AppState) => state.country.countries)
  const baseURL = 'https://restcountries.eu/rest/v2/all'
  const [allCountries, setAllCountries] = useState([])
  const [foundCountries, setFoundCountries] = useState([])
  const [sortedCountries, setSortedCountries] = useState([])
  const [error, setError] = useState(null)

  if (countries.length === 0) {
    dispatch(fetchCountries())
  }

  const getCountries = async () => {
    try {
      const apiCall = await fetch(baseURL)
      const countries = await apiCall.json()
      setAllCountries(countries)
      setFoundCountries(countries)
    } catch (error) {
      setError(error)
    }
  }

  // fetch all country data
  useMemo(() => {
    getCountries()
  }, [])

  // filter countries by input
  useMemo(() => {
    let foundCountries = [...allCountries]
    if (userInput && allCountries.length > 0) {
      foundCountries = allCountries.filter(
        (country: Country) =>
          country.name.toLowerCase().includes(userInput.toLowerCase()) ||
          country.nativeName.toLowerCase().includes(userInput.toLowerCase()) ||
          country.languages.some((language: Language) =>
            language.name.toLowerCase().includes(userInput.toLowerCase())
          ) ||
          country.region.toLowerCase().includes(userInput.toLowerCase())
      )
    }
    setFoundCountries(foundCountries)
  }, [allCountries, userInput])

  // toggle sorting by clicked button
  useEffect(() => {
    let sortedCountries = [...foundCountries]
    // remove sorting
    if (sortDirection === 'x') {
      setSortedCountries(sortedCountries)
    }
    // apply sorting
    if (sortDirection === 'asc' || sortDirection === 'desc') {
      // sorting integers
      if (sortColumn === 'Population') {
        sortedCountries.sort(
          (a: Country, b: Country) => a.population - b.population
        )
        if (sortDirection === 'desc') {
          sortedCountries.reverse()
        }
        setSortedCountries(sortedCountries)
      }
      // sorting strings
      else {
        sortedCountries.sort(function (a, b) {
          let current = a[sortColumn.toLowerCase()]
          let next = b[sortColumn.toLowerCase()]
          if (current < next) {
            return -1
          }
          if (current > next) {
            return 1
          }
          return 0
        })
        if (sortDirection === 'desc') {
          sortedCountries.reverse()
        }
        setSortedCountries(sortedCountries)
      }
    }
    setSortedCountries(sortedCountries)
  }, [foundCountries, sortDirection, sortColumn])

  return { error, sortedCountries }
}

export default useCountries
