import './buttonupward.css';
import { useState,useEffect } from 'react';

function UpwardButton()
{
    const[visible,setVisible]=useState(false);

    useEffect(()=>{
        const buttonVisible=()=>{
            setVisible(window.scrollY>200);
        }
        window.addEventListener("scroll",buttonVisible);
        return()=>window.removeEventListener("scroll",buttonVisible);
    },[]);

    

    return( visible &&
        <a className="upwardbutton" href="/" onClick={
            (e)=>{
                e.preventDefault();
                window.scrollTo({top:0,behavior:'smooth'});
            }
        }>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-icon lucide-chevrons-up"><path d="m17 11-5-5-5 5"/><path d="m17 18-5-5-5 5"/></svg>
        </a>
    )
}
export default UpwardButton;