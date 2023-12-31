import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";

function App() {
   return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/"         element={<Navigate to="/Project"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/Project/*" element={<Project />} />
        </Routes>
      </div>
    </HashRouter>

   );
}
export default App;