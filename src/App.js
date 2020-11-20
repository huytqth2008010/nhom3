import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Video from "./components/Video";
import Congthuc from "./components/Congthuc";
import Suckhoe from "./components/Suckhoe";
import Dinhduong from "./components/Dinhduong";
import Thuoc from "./components/thuoc";
import Dogiadung from "./components/Dogiadung";
import Post from "./components/Post";
import Lamdep from "./components/Lamdep";
import Meovat from "./components/Meovat";
import Khampha from "./components/Khampha";
import Monan from "./components/Monan";
import Douong from "./components/Douong";
import Videopost from "./components/videopost";

function App() {
  return (
      <BrowserRouter>
      <div className={App}>

      </div>

      <Switch>
          <Route exact path={"/"}>
              <Home/>
          </Route>
          <Route exact path={"/video"}>
              <Video/>
          </Route>
          <Route exact path={"/cong-thuc"}>
              <Congthuc/>
          </Route>
          <Route exact path={"/suc-khoe"}>
            <Suckhoe/>
          </Route>
          <Route exact path={"/dinh-duong"}>
              <Dinhduong/>
          </Route>
          <Route exact path={"/thuoc"}>
              <Thuoc/>
          </Route>
          <Route exact path={"/do-gia-dung"}>
              <Dogiadung/>
          </Route>
          <Route exact path={"/trung-thu-di-dau"}>
              <Post/>
          </Route>
          <Route exact path={"/lam-dep"}>
              <Lamdep/>
          </Route>
          <Route exact path={"/meo-vat"}>
              <Meovat/>
          </Route>
          <Route exact path={"/kham-pha"}>
              <Khampha/>
          </Route>
          <Route exact path={"/cong-thuc/mon-an"}>
              <Monan/>
          </Route>
          <Route exact path={"/cong-thuc/do-uong"}>
              <Douong/>
          </Route>
          <Route exact path={"/dac-san-ngon-kho-tim"}>
              <Videopost/>
          </Route>
      </Switch>
      </BrowserRouter>

  );
}

export default App;
