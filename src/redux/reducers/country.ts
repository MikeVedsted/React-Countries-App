import {
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  FETCH_ALL_COUNTRIES,
} from '../../types'

export default function Country(
  state: CountryState = { countries: [], inCart: [] },
  action: CountryActions
): CountryState {
  switch (action.type) {
  case ADD_COUNTRY: {
    const { country } = action.payload
    if (state.inCart.find((p) => p.name === country.name)) {
      return state
    }
    // Always return new state (e.g, new object) if changed
    return { ...state, inCart: [...state.inCart, country] }
  }
  case REMOVE_COUNTRY: {
    const { country } = action.payload
    const index = state.inCart.findIndex((p) => p.name === country.name)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }
  case FETCH_ALL_COUNTRIES: {
    const { countries } = action.payload
    return { ...state, countries: countries, inCart: [] }
  }
  default:
    return state
  }
}
