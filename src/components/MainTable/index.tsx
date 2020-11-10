import React from 'react'
import Table from '@material-ui/core/Table'

import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import { TableProps } from '../../types'

function MainTable({ countries, handleClick }: TableProps) {
  return (
    <Table>
      <TableHeader handleClick={handleClick} />
      <TableBody countries={countries} />
    </Table>
  )
}

MainTable.displayName = 'MainTable'

export default MainTable
