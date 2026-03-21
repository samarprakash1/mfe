import React from 'react'
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import { StylesProvider , createGenerateClassName} from '@material-ui/core/styles'
import Pricing from './components/Pricing'
import Album from './components/Landing'
const generateClassname=createGenerateClassName({
    productionPrefix:'ma',
})
// 
export default ()=>{
    return <div>
        <StylesProvider generateClassName={generateClassname}>
            <BrowserRouter>
            <Switch>
                <Route exact path="/pricing" component={Pricing}/>
                                <Route exact path="/" component={Album}/>

            </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}