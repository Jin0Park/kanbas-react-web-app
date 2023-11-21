import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  const baseURL = "https://kanbas-node-server-app-jfzp.onrender.com"
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="https://kanbas-node-server-app-jfzp.onrender.com/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <h1>SimpleAPIExamples</h1>
        <EncodingParametersInURLs></EncodingParametersInURLs>
        <WorkingWithObjects></WorkingWithObjects>
        <WorkingWithArrays></WorkingWithArrays>
    </div>
    );
  }
  export default Assignment5;