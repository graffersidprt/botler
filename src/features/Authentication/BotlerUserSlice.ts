import { createSlice } from '@reduxjs/toolkit'


/**
 * Interface for Botler user state based on the B type
 * @interface
 * @param {_id} _id - The _id of the user.
 * @param {string} email - The email of the user.
 * @param {string} given_name - The name of the user.
 * @param {string} family_name - The family name of the user.
 * @param {number} credits - The credits of the user.
 * @param {string} account_type - The account type of the user.
 * @param {object} properties - The properties of the user.

 * */
export interface BotlerUserState {
  _id: string | null;
  email: string | null;
  given_name: string | null;
  family_name: string | null;
  credits: number | null;
  account_type: string | null;
  properties: object | null;
}

export const BotlerUserSlice = createSlice({
    name: 'BotlerUser',
    initialState: {
        _id: null,
        email: null,
        given_name: null,
        family_name: null,
        credits: null,
        account_type: null,
        properties: null,
    } as BotlerUserState,
    reducers: {
        setBotlerUser: (state, action) => {
            state._id = action.payload._id;
            state.email = action.payload.email;
            state.given_name = action.payload.given_name;
            state.family_name = action.payload.family_name;
            state.credits = action.payload.credits;
            state.account_type = action.payload.account_type;
            state.properties = action.payload.properties;
        },
        setBotlerUserCredits: (state, action) => {
            state.credits = action.payload.credits;
        },
        setBotlerUserAccountType: (state, action) => {
            state.account_type = action.payload.account_type;
        }
    }
})

// export all actions
export const { setBotlerUser, setBotlerUserCredits, setBotlerUserAccountType } = BotlerUserSlice.actions

// export all selectors
export const selectBotlerUser = (state: any) => state.BotlerUser
export const selectBotlerUserCredits = (state: any) => state.BotlerUser.credits
export const selectBotlerUserAccountType = (state: any) => state.BotlerUser.account_type


export default BotlerUserSlice.reducer