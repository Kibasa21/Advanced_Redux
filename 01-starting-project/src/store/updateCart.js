import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    info: [{
        title: '',
        price: 0,
        qnt: 0
    }],
    isCartUp: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        handleUpdateItem(state, action) {
            let prevState = [...state.info.map(item => ({ ...item }))];
            const index = (action.payload ? prevState.findIndex((item) => item.title === action.payload.title) : -1);
            if (index > -1) {
                prevState[index].qnt++;
            }
            else if (prevState[0].title === '') {
                prevState[0] = action.payload;
            }
            else if (!action.payload && prevState.length === 1) {
                prevState = [...initialCartState.info.map(item => ({...item}))];
            }
            else {
                prevState.push(action.payload);
            }

            state.info = prevState;
        },
        handleUpdateQnt(state, action) {
            switch (action.payload.type) {
                case '-':
                    state.info[action.payload.index].qnt--
                    break;
                case '+':
                    state.info[action.payload.index].qnt++
                    break;
                default:
                    break;
            }
        },
        handleToggle(state) {
            state.isCartUp = !state.isCartUp;
        }
    }
});

export default cartSlice;