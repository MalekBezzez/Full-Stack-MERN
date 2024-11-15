import axios from "axios";
const upload = async (file)=>{ // cloudinary configuration 
    const data= new FormData()
    data.append("file", file );
    data.append("upload_preset", "FausseNote" );
    // mycloud name dnl3l6agd

    try{
        const res= await axios.post("https://api.cloudinary.com/v1_1/dnl3l6agd/upload",data) ;
        const {url} = res.data;
        return(url)
    }
    catch(err){
      console.log(err)
    }
  }
  export default upload ;