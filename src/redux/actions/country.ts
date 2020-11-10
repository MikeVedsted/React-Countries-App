import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  FETCH_ALL_COUNTRIES,
  CountryActions,
  Country,
} from '../../types'

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}

export function fetchAllCountries(countries: Country[]): CountryActions {
  return {
    type: FETCH_ALL_COUNTRIES,
    payload: {
      countries,
    },
  }
}

export function fetchCountries() {
  return (dispatch: Dispatch) => {
    return fetch('https://restcountries.eu/rest/v2/all')
      .then((resp) => resp.json())
      .then((country) => {
        dispatch(fetchAllCountries(country))
      })
  }
}
