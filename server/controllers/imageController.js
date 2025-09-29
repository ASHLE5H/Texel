import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";           //use for sending data in multipart/form-data form


export const generateImage = async (req,res) =>{

    try{

        const {userId , prompt} = req.body;
        const user = await userModel.findById(userId);

        if(!user || !prompt){
            return res.json({success:false , message:"Missing details"})
        }

        if(user.creditBalance === 0 || userModel.creditBalance < 0){
            return res.json({succes:false , message:"No Credit Balance" , creditBalance:user.creditBalance})
        }

        const formData = new FormData();
        
        formData.append('prompt' ,prompt)

        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1' , 
            formData , {
                headers: {
                    'x-api-key': process.env.CLIPDROP_API,
                },
                responseType:'arraybuffer'          //gets the ouput in form of arraybuffer
            }
        )

        const base64Image = Buffer.from(data , 'binary').toString('base64')   //converts image type from arraybuffer to base64 

        const resultImage = `data:image/png;base64,${base64Image}`

        await userModel.findByIdAndUpdate(user._id , {creditBalance:user.creditBalance - 1});

        res.json({success:true , message : "Image generated" , creditBalance:user.creditBalance - 1 , resultImage} )

    }catch(error){
        console.log(error);
        res.json({success:false , message : error.message});
    }

}  