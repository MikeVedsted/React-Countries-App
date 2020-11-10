import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  List,
  Drawer,
  Button,
  ListItem,
  IconButton,
  ListItemText,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

import { AppState, Country } from '../../types'
import { removeCountry } from '../../redux/actions/country'
import Flag from '../Flag'
import CartButton from '../CartButton'
import './cartDrawer.scss'

function CartDrawer() {
  const countriesInCart = useSelector(state => state.country.inCart)
  const dispatch = useDispatch()
  const [drawerState, setDrawerState] = useState(false)

  const toggleDrawer = (option: boolean) => {
    setDrawerState(option)
  }

  const closeIfEmpty = () => {
    setTimeout(() => {
      setDrawerState(false)
    }, 2500)
  }

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)}>
        <CartButton />
      </Button>
      <Drawer
        anchor={'bottom'}
        open={drawerState}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          {countriesInCart.length !== 0 ? (
            countriesInCart.map((country: Country) => (
              <ListItem className="notEmpty" key={country.alpha3Code}>
                <Flag url={country.flag} name={country.name} />
                <ListItemText primary={country.name} />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(removeCountry(country))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          ) : (
            <div className="empty" key="empty">
              <br />
              <h3>Your cart is currently empty</h3>
              <br />
              {closeIfEmpty()}
            </div>
          )}
        </List>
      </Drawer>
    </div>
  )
}

CartDrawer.displayName = 'CartDrawer'

export default CartDrawer
