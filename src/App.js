import Wrapper from './components/Wrapper.js'
import './index.css';
import Screen from './components/Screen.js';
import  ButtonBox from './components/ButtonBox.js'
import  Button from './components/Button.js'
import CalcProvider from './context/CalcContext.js';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  return (
    <div>
      <CalcProvider>
      <Wrapper>
        <Screen/> 
         <ButtonBox>
         {btnValues.flat().map((btn, i)=>(
            <Button
            value={btn}
            key={i}
            />
          ))}

         </ButtonBox>
        </Wrapper>  
        </CalcProvider>  
    </div>
  );
};

export default App;