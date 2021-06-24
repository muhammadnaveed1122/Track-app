import {NavgationActions } from 'react-navigation'

let navigator

export const setNavigator = nav => {
    navigator = nav

}

export const navigate = (routeName, parans) => {
    navigator.dispatch(
        NavgationActions.navigate({
            routeName,
            parans
        })
    )
}