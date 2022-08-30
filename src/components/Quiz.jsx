import AnswerPage from "./AnswerPage";
import QuestionPage from "./QuestionPage";

function Quiz(){
    const isComplete = false;


    return(
        <div id="quiz">
        <h1>
          ✨ Your fate relies on the Pokemon that will help you win the most
          battles ✨
        </h1>
        <a href="#top">Top</a>
        <h2>Complete the quiz below to find out your fate.</h2>
  
        {isComplete ? <AnswerPage /> : <QuestionPage />}
      </div>
      
    );
}

export default Quiz;