import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Links from '@material-ui/core/Link'

import { AppState, TableBodyProps, Country } from '../../types'
import { addCountry } from '../../redux/actions/country'
import Languages from '../Languages'
import Flag from '../Flag'
import './tableBodyStyle.scss'

const TableBody = ({ countries }: TableBodyProps) => {
  const dispatch = useDispatch()
  const countriesInCart = useSelector((state: AppState) => state.country.inCart)

  const isItemAdded = (countryToCheck: Country) => {
    if (
      countriesInCart.find(
        (country: Country) => country.name === countryToCheck.name
      )
    ) {
      return true
    }
    return false
  }

  return (
    <>
      {countries.map((country) => (
        <TableRow key={country.name}>
          <TableCell>
            <Flag url={country.flag} name={country.name} />
          </TableCell>
          <TableCell>
            <div className="nameCell">
              {country.name}
              <KeyboardArrowRightIcon />
              <Link to={`/countries/${country.name}`}>
                <Links color="error">more information</Links>
              </Link>
            </div>
          </TableCell>
          <TableCell>
            <Languages languages={country.languages} />
          </TableCell>
          <TableCell>{country.population}</TableCell>
          <TableCell>{country.region}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="secondary"
              disabled={isItemAdded(country)}
              endIcon={<AddShoppingCartIcon />}
              onClick={() => dispatch(addCountry(country))}
            >
              ADD
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

TableBody.displayName = 'TableBody'

export default TableBody
