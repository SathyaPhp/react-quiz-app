import { useState } from 'react' 
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data/question.js'
 
function App() {
  const [index, setIndex] = useState(0);
  const [quesAns, setquesAns] = useState(data[index]);
  const [bgColor, setbgColor] = useState(quesAns?.options?.map(() => "bg-light") || []);
  const [scorecount, setScoreCount] = useState(data?.map(() => "0") || []);
  const [complete, setComplete] = useState(false);
  const [score, setScore] = useState(0); 

  const onCheckAnswer = (option, inx) => {   
    if(scorecount[index] == 0) {
      if(option == quesAns.answer) {
        setScore(score +1)
      }
      setbgColor((prevColors) => {
        const newColors = [...prevColors];  
        newColors[inx] = option === quesAns.answer ?  "bg-success" : "bg-danger";
        return newColors;
      });  
      setScoreCount((prevScore) => {
        const newScore = [...prevScore];
        newScore[index] = 1;
        return newScore; 
      });
    }
  }

  const clickNext = (index) => {
    var count = 0;
    scorecount?.map((opt)=> { 
      count += parseInt(opt);
    });
    setIndex(count);
    setquesAns(data[count]);
    setbgColor(quesAns?.options?.map(() => "bg-light") || []);
    if(data?.length == count) {
      setComplete(true);
    }
  }
  return (
    <> 
    <div className=" min-vh-100 d-flex justify-content-center align-items-center">
      <Container className="border rounded bg-white p-4 shadow-lg">
        <Row>
          <Col className="text-center mb-4">
            <h2>Welcome to React Quiz</h2>
            <hr />
          </Col>
        </Row>
        {
          (complete == true) ? (
            <>
              <Row>
                <Col>
                  <h4 className="text-start mb-4">
                    Your Score is {score} out of {data.length}
                  </h4>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Col> 
                  <h4 className="text-start mb-4">
                    {index+1}. {quesAns?.question}
                  </h4>

                  {quesAns?.options.map((option, inx) => (
                    <button
                      key={inx}
                      className={`w-100 text-start p-3 mb-2 border ${bgColor[inx]} rounded hover:bg-primary`}
                      onClick={() => onCheckAnswer(option, inx)}
                    >
                      {option}
                    </button>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                      key={index}
                      className="bg-primary text-start text-white p-3 px-5 mb-2 border rounded hover:bg-primary"
                      onClick={(e) => clickNext(index)}
                    >
                      Next
                    </button>
                </Col>
              </Row>
            </>
          )
        }
        
      </Container>
      
    </div>
    </>
  )
}

export default App