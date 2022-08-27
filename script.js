// const generateAdviceBtn=document.querySelector(".container .btn");
// const adviceCounth1=document.querySelector(".container .adviceCount");
// const Advice1=document.querySelector(".container .Advice");

// const update=(count,sentence)=>{
//     adviceCounth1.innerHTML=count;
//     Advice1.innerHTML=`"${sentence}"`;
// }
// const generateAdvice=()=>{
//     fetch("	https://api.adviceslip.com/advice")
//     .then((res) => res.json())
//     .then((data) => {
//         update(data.count.slip.id,data.sentence.slip.advice);
// });
// };
// generateAdviceBtn.addEventListener("click",generateAdvice());






const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
  
    document.querySelector(".adviceCount").innerHTML = `Advice #${data.slip.id}`
    document.querySelector(".Advice").innerHTML = `"${data.slip.advice}"`
  }
  
  fetchAdvice()