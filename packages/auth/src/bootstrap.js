// Mount function to start up the app
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createMemoryHistory, createBrowserHistory} from 'history'

const mount = (el,{onNavigate,onSignIn,defaultHistory,initialPath}) => {
    const history=defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });
    if(onNavigate){
        history.listen(onNavigate)
    }
    
    ReactDOM.render(<App history={history} onSignIn={onSignIn}/>, el)
    return{
        onParentNavigate({pathname:nextPathname}){
            const {pathname} =history.location
            console.log("ne",nextPathname)
            if(pathname !== nextPathname){
                history.push(nextPathname)
            }
        }
    }
}


// if we are in dev and in isolation call mount
// immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root')
    if (devRoot) {
        mount(devRoot,{defaultHistory: createBrowserHistory() })
    }
}

// we are running though container
// amd we should export the mount function

export {mount}