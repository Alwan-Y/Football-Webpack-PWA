import './main'
import './icon.png'

const el = document.createElement("link")
el.setAttribute("rel","manifest")
el.setAttribute("href","manifest.json")
            
$("head").append(el)

// regenerator-runtime
import 'regenerator-runtime'

// materializecss
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

M.AutoInit()

// db

import {add,del} from './db/db'

window.add = add
window.del = del

// components

import './components/layouts/header'
import './components/layouts/footer'

import './components/area/item'
import './components/area/list'
import './components/area/section'
import './components/competition/item'
import './components/competition/list'
import './components/competition/section'

// pages
import './pages/home.js'
import './pages/competitions.js'
import './pages/favorite.js'
