import React,{useState} from 'react'

export default function About(props) {
 const [change_style, setState] = useState({
        color: 'black',
backgroundColor: 'white'
    });
    const [btn, btnchange] = useState('Enable dark mode')
//  const   togglestyle =()=>{
//         if(change_style.color == 'white')
//         {
//             setState({
//                 color: 'black',
// backgroundColor: 'white'  
//             })
//             btnchange('Enable dark mode');
//         }
//         else{
//             setState({
//                 color: 'white',
// backgroundColor: 'black'  
//             }) 
//             btnchange('Enable light mode');
//         }
//     }
  return (
 <>
 <div className={`container text-${props.mode===`light`?`dark`:`light`}`}>
 <h1 className="my-3 text-h">About Us </h1>
     <div className="accordion" id="accordionPanelsStayOpenExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className={`accordion-button text-${props.mode===`light`?`dark`:`light`} `} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor: props.mode===`dark`?`gray`:`white`}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show text-${props.mode===`light`?`dark`:`light`} `} aria-labelledby="panelsStayOpen-headingOne" style={{backgroundColor: props.mode===`dark`?`gray`:`white`}}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className={`accordion-button collapsed text-${props.mode===`light`?`dark`:`light`}`}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor: props.mode===`dark`?`gray`:`white`}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" style={{backgroundColor: props.mode===`dark`?`gray`:`white`}}>
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className={`accordion-button collapsed text-${props.mode===`light`?`dark`:`light`}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{backgroundColor: props.mode===`dark`?`gray`:`white`}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree" style={{backgroundColor: props.mode===`dark`?`gray`:`white`}}>
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="conatainer my-3 py-3" style={change_style}>
<button type="button" className="btn btn-light btn-mode" onClick={togglestyle} >{btn}</button>
</div> */}
</div>
 </>
  )
}
