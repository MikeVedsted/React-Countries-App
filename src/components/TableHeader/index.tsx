import React from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { TableHeaderProps } from '../../types'
import './tableHeader.scss'

function TableHeader({ handleClick }: TableHeaderProps) {
  const tableHeadings = [
    'Flag',
    'Name',
    'Languages',
    'Population',
    'Region',
    '',
  ]

  const direction = 'asc'

  return (
    <TableHead>
      <TableRow>
        {tableHeadings.map((heading) => (
          <TableCell
            key={heading}
            onClick={() => {
              handleClick(heading, direction)
            }}
          >
            <div className="tableHeading">{heading}</div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

TableHeader.displayName = 'TableHeader'

export default React.memo(TableHeader)
