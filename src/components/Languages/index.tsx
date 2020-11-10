import React from 'react'

import { LanguagesProps } from '../../types'
import './Languages.scss'

function Languages({ languages }: LanguagesProps) {
  return (
    <ul>
      {languages.map((language) => (
        <li key={language.nativeName}>
          {language.name} ({language.iso639_1})
        </li>
      ))}
    </ul>
  )
}

Languages.displayName = 'Languages'

export default React.memo(Languages)
