import React from 'react'
import { useSelector } from 'react-redux'
import { Fab, Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { AppState } from '../../types'

function CartButton() {
  const countriesInCart = useSelector((state: AppState) => state.country.inCart)

  return (
    <Badge badgeContent={countriesInCart.length} color="error">
      <Fab size="large" color="secondary" aria-label="cart">
        <ShoppingCartIcon />
      </Fab>
    </Badge>
  )
}

CartButton.displayName = 'CartButton'
export default CartButton
