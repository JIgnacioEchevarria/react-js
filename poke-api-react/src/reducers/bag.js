export const bagInitialState = [];

// reducer de la mochila de pokemon favoritos
export const bagReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;

    switch(actionType) {
        case 'ADD_TO_BAG': {
            const newState = [
                ... state,
                {
                    ... actionPayload,
                }
            ]

            return newState;
        }

        case 'REMOVE_FROM_BAG': {
            const { id } = actionPayload;
            const newState = state.filter(item => item.id !== id);

            return newState;
        }
    }

    return state;
}