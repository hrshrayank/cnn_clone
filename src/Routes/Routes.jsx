import React from 'react'
import { Route, Switch } from 'react-router'
import { Home } from '../Components/Home/Home'

import { Business } from '../Components/Business/Business'
import { Health } from '../Components/Health/Health'
import { Entertainment } from '../Components/Entertainment/Entertainment'
import { StylePage } from '../Components/Style/StylePage'
import { Travel } from '../Components/Travel/Travel'
import { Sports } from '../Components/Sports/Sports'
import { SportsLinksPage } from '../Components/Sports/SportsLinksPage'
import { Footer } from '../Components/Footer/Footer'
import { Article } from '../Components/Style/Article'
import { Africa } from '../Components/World/Pages/Africa'
import { Error } from '../Components/Error/Error'
import { HealthLinksPage } from '../Components/Health/HealthLinksPage'
import { HomeLinksPage } from '../Components/Home/HomeLinksPage'
import { Profile } from '../Components/Profile/Profile'
import { AfricaDetails } from '../Components/World/Pages/AfricaDetails'
import { BusinessCard } from '../Components/Business/BusinessCard'
import { Navbar } from '../Components/Navbar/Navbar'
import { StickyTop } from '../Components/Home/StickyTop'
import { EntertainmentCard } from '../Components/Entertainment/EntertainmentCard'
import { EditEntertainment } from '../Components/Entertainment/EditEnternainment'
import { Login } from '../Components/Profile/Login'
import { Registration } from '../Components/Profile/Registration'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home/:publishedAt'>
          <HomeLinksPage />
        </Route>
        <Route exact path='/world'>
          <Africa />
        </Route>
        <Route exact path='/uspolitics'>
          <Navbar />
          <Travel />
        </Route>

        <Route exact path='/business'>
          <Navbar />
          <Business />
        </Route>
        <Route exact path='/business/:publishedAt'>
          <Navbar />

          <BusinessCard />
        </Route>
        <Route exact path='/health'>
          <Health />
        </Route>
        <Route exact path='/health/:publishedAt'>
          <HealthLinksPage />
        </Route>
        <Route exact path='/entertainment'>
          <Navbar />
          <Entertainment />
        </Route>
        <Route exact path='/entertainment/:publishedAt'>
          <Navbar />
          <EntertainmentCard />
        </Route>
        <Route exact path='/edit/:id'>
          <Navbar />
          <EditEntertainment />
        </Route>

        <Route exact path='/style'>
          <StylePage />
        </Route>
        <Route exact path='/travel'>
          <Navbar />
          <Travel />
        </Route>
        <Route exact path='/sports'>
          <Sports />
        </Route>
        <Route exact path='/sports/:publishedAt'>
          <SportsLinksPage />
        </Route>
        <Route exact path='/videos'>
          <Navbar />
          <Travel />
        </Route>
        <Route exact path='/footer'>
          <Footer />
        </Route>
        <Route exact path='/style/:id'>
          <Article />
        </Route>

        <Route path='/world/:publishedAt'>
          <Navbar />
          <AfricaDetails />
        </Route>

        <Route path='/searchpage'>
          <StickyTop />
        </Route>

        <Route exact path='/profile'>
          <Profile></Profile>
        </Route>
        <Route path='/login' exact>
          <Login></Login>
        </Route>
        <Route path='/registration'>
          <Registration></Registration>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </div>
  )
}

export { Routes }
