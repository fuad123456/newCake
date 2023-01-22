import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const instance = axios.create({
    // baseURL: 'https://b-67.ru/',
    baseURL: 'https://cors-anywhere.herokuapp.com/',
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
export const registreUser=createAsyncThunk(
	'user/registreUser',
	async (data, {rejectWithValue,dispatch}) =>{
		try{
			// var response= await axios({
			// 	method: 'POST',
			// 	url:'https://b-67.ru/registration_user/',
			// 	headers: {"Content-Type": "multipart/form-data"},
			// 	data:data,
			// })
			let res= await instance.post('https://b-67.ru/registration_user/',data)
			console.log(data);
			console.log(res);
		}catch(e){
			console.log(e);

			return rejectWithValue(e)
		}
	}
)

const initialState={
	email:null,
	token:null,
	id:null,
	isRegistered:false,
	status:null,
	role:null,
	fullReg:false
};
const userSlice=createSlice({
	name: 'user',
	initialState,
	reducers:{
		setUser(state,action){
			state.email=action.payload.email;
			state.token=action.payload.token;
			state.id=action.payload.id;
		},
		removeUser(state,action){
			state.email=null;
			state.token=null;
			state.id=null;
		},
		setRole(state,action){
			state.role=action.payload
		},
		isRegistered(state,action){
		 state.isRegistered=action.isRegistered
		},
		registerFull(state,action){
			state.fullReg=action.payload
		}
	},
	extraReducers:{
		[registreUser.pending]:(state,action) =>{
			state.status='loading';
			state.error=null;
		},
		[registreUser.fulfilled]:(state,action) =>{
			state.status='succeeded';
			state.isRegistered=true;
			console.log(action.payload);
		},
		[registreUser.rejected]:(state,action) =>{
			state.status='rejected';
			state.isRegistered=true;
			state.errors=action.payload;
			console.log(state.errors);
		},
	}
})
export const {setUser, removeUser, setRole, registerFull} =userSlice.actions;

export default userSlice.reducer