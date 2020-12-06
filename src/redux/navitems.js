const INIT_ITEMS = {
    navURL: null
};

export const navItemsReducer = (state = INIT_ITEMS, action) => {

    switch (action.type) {
        case 'SET_NAV_ITEMS':
            return ({
                ...state,
                navURL: action.payload
            });
        default:
            return state;
    }
}

export const setNavAction = items => ({
    type: 'SET_NAV_ITEMS',
    payload: items
})

export const mapDispatchToProps = dispatch => {
    return {setNavAction: navItems => dispatch(setNavAction(navItems))};
}


export const mapStateToProps = state => {
    console.log('stateMapper: ', state);
    return state.nav;
};
