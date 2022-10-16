import React, { createContext, useState } from 'react'
import { node } from 'prop-types'
export const LanguageContext = createContext()

const LanguageContextProvider = props => {
  const [language, setLangInfo] = useState('en')
  const setLanguage = language => {
    setLangInfo(language)
    localStorage.setItem('',language)
  }
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}
LanguageContextProvider.propTypes = {
  children: node
}
export default LanguageContextProvider
