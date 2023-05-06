import React,{useState,useEffect} from "react"

function Quotes() {
    const [text,setQuote] = useState('');
    const [loading,setLoading] = useState(true);
    const [author,setAuthor]= useState('');

    useEffect(()=>{
        getQuote();
       const intervalID = setInterval(()=>{
        getQuote()
       }, 24 * 60 * 60);
    return ()=>{
        clearInterval(intervalID);
    }
    },[])
    function getQuote() {
        fetch('https://type.fit/api/quotes')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setQuote(data[1].text);
            setAuthor(data[1].author);
        })
    }
return(
    <>
    <p>{text}</p>
    <p>-{author}</p>
    </>
)
}
export default Quotes;