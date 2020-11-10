import React from 'react'

import { FlagProps } from '../../types'
import './Flag.scss'

function Flag({ url, name }: FlagProps) {
  return <img className="flag" src={url} alt={`Flag of ${name}`} />
}

Flag.displayName = 'Flag'

export default React.memo(Flag)
