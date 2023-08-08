import './styles.css';

function Button() {
   function onLearnMore(){
      return alert("Splish Splash!");
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;