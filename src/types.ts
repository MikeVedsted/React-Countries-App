import { Theme } from '@material-ui/core/styles'

export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const FETCH_ALL_COUNTRIES = 'FETCH_ALL_COUNTRIES'

export enum DialogType {
  open = 'open',
  close = 'close',
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type NavigationProps = {
  userInput: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type SearchfieldProps = {
  userInput: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type TableProps = {
  countries: Country[]
  handleClick: (column: string, direction: string) => void
}

export type TableHeaderProps = {
  handleClick: (column: string, direction: string) => void
}

export type TableRowProps = {
  flagURL: string
  name: string
  languages: Language[]
  population: number
  region: string
}

export type FlagProps = {
  url: string
  name: string
}

export type Country = {
  nativeName: string
  flag: string
  name: string
  languages: Language[]
  population: number
  region: string
  subRegion: string
  alpha3Code: string
  id: number
  capital: string
  numericCode: string
  area: number
  borders: Border[]
}

export type Language = {
  name: string
  nativeName: string
  iso639_1: string
}

export type CountryHook = {
  sortedCountries: Country[]
}

export type LanguagesProps = {
  languages: Language[]
}

export type TableBodyProps = {
  countries: Country[]
}

export type AppState = {
  country: CountryState
  ui: UiState
}

export type CountryState = {
  countries: Country[]
  inCart: Country[]
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type CountryActions =
  | FetchAllCountriesAction
  | AddCountryAction
  | RemoveCountryAction

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type FetchAllCountriesAction = {
  type: typeof FETCH_ALL_COUNTRIES
  payload: {
    countries: Country[]
  }
}

export type RouteParams = {
  name: string
}

export type ThemesTypes = {
  [key: string]: Theme
}

export type ContextValueType = {
  currentTheme: string
  setTheme: (name: string) => void
}

export type Border = {
  border: string
}
