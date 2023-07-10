import react from 'react';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useState} from 'react';


export default function ProductDetails(){
    const {productId} = useParams();
    const [ProductDetails,setProductDetails] = useState();
    const fetchProduct = async ()=>{
        try{

        }catch (error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchProduct();
    },[productId])
    return(
        <div>productDetails</div>
    )
}