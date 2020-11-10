import React, { useState, useCallback } from 'react'
import Paper from '@material-ui/core/Paper'

import Navigation from '../components/Navigation'
import MainTable from '../components/MainTable'
import useCountries from '../hooks/useCountries'
import { CountryHook } from '../types'

export default function TablePage() {
  const [userInput, setUserInput] = useState<string>('')
  const [sortDirection, setSortDirection] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('')
  const { sortedCountries }: CountryHook = useCountries(
    userInput,
    sortDirection,
    sortColumn
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserInput(e.target.value)
    },
    []
  )

  const handleClick = useCallback(
    (column: string, direction: string): void => {
      if (column === sortColumn && sortDirection === 'asc') {
        setSortDirection('desc')
      } else {
        setSortDirection(direction)
        setSortColumn(column)
      }
    },
    [sortColumn, sortDirection]
  )

  return (
    <Paper>
      <Navigation userInput={userInput} handleInputChange={handleInputChange} />
      <MainTable countries={sortedCountries} handleClick={handleClick} />
    </Paper>
  )
}
