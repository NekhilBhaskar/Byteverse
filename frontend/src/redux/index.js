import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientServer } from "@/config";



export const otpRequest=createAsyncThunk(
    "user/request_otp",
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.post('/request_otp',{
                email:user.email
            })
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const reset_password=createAsyncThunk(
    "user/reset-password",
    async(user,thunkAPI)=>{
        try{
            
            const request=await clientServer.post("/reset-password",{
                email: user.email,
                otp: user.otp,
                newPassword: user.newPassword
            });

            console.log(request);
            
        }catch(error){
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)