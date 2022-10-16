import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button';
import { LanguageContext } from '../contexts/LanguageContext'
const TopBar = () => {
    const { i18n } = useTranslation()
    // const { setLanguage } = useContext(LanguageContext)
    const handleChange = (item) => {
        console.log(item)
        i18n.changeLanguage(item.key)
        // setLanguage(item.key)
      }

  return (
    <AppBar
    position="static"
    color="default"
    elevation={0}
    style={{height:'50px',paddingTop:'1px'}}
  >
    <Toolbar  style={{paddingTop:'1px'}} sx={{ flexWrap: 'wrap' }}>
      <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => { handleChange('en')}}>
        English
      </Button>
      <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => { handleChange('bn')}}> 
        Japanese
      </Button>
    </Toolbar>
  </AppBar>
  );
};
export default TopBar;
