
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './component/Welcome';
import Login from './component/Login';
import Counter from './component/counter';
import Section from './component/Section';
import Type1UseEffect from './component/Type1UseEffect';
import Type2UseEffect from './component/Type2UseEffect';
import Type3UseEffect from './component/Type3UseEffect';
import Type4UseEffect from './component/Type4UseEffect';
import Params from './component/params';
import SingleProduct from './component/singleProduct';
import Map from './component/Map';
import { useState } from 'react';
import DeclarativeWay from './DeclarativeWay';
import Wrapper from './component/Wrapper';
import StyleCompo from './component/StyleCompo';
import Xyz from './component/Xyz';
import SinglePro from './component/Single Pro';
import DynamicStyles from './component/DynamicStyles';
import DynamicClasses from './component/DynamicClasses';
import ChildrenProp from './component/ChildrenProp';
import FormOne from './component/FormOne';
import FormTwo from './component/FormTwo';
import CallBack from './component/CallBack';
import UseMemo from './component/UseMemo';
import UseReducer from './component/UseReducer';
import ProductsBackend from './component/ProductsBackend';
import SingleBackend from './component/SingleBackend';
import Resume from './data/Resume';
import ResumeBuilder from './data/ResumeBuilder';
import Parent from './component/Parent';
import Form from './component/Form';
import Kart from './component/Kart';
import Profile from './component/Profile';
import Reference from './component/Reference';
import Reference1 from './component/Reference1';






function MyApp() {

  const [myUsers,setMyUsers]=useState(["one","two","three"])
  return (
    <div>
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/section' element={<Section />} />
        <Route exact path='/type1useeffect' element={<Type1UseEffect />} />
        <Route exact path='/type2useeffect' element={<Type2UseEffect />} />
        <Route exact path='/type3useeffect' element={<Type3UseEffect />} />
        <Route exact path='/type4useeffect' element={<Type4UseEffect />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/singleproduct/:durvesh' element={<SingleProduct />} />
        <Route exact path='/map' element={<Map myUsers={myUsers} setMyUsers={setMyUsers} myName={"durvesh"} myFriends={["Rocky,Manoj,Santosh"]}/>} />
        <Route exact path='/declarativeway' element={<DeclarativeWay />} />
        <Route exact path='/wrapper' element={<Wrapper />} />
        <Route exact path='/stylecompo' element={<StyleCompo />} />
        <Route exact path='/xyz' element={<Xyz />} />
        <Route exact path='/single-pro/id' element={<SinglePro />} />
        <Route exact path='/dynamic-styles' element={<DynamicStyles />} />
        <Route exact path='/dynamic-classes' element={<DynamicClasses />} />
        <Route exact path='/children-prop' element={<ChildrenProp />} />
        <Route exact path='/form-one' element={<FormOne />} />
        <Route exact path='/form-two' element={<FormTwo />} />
        <Route exact path='/call-back' element={<CallBack />} />
        <Route exact path='/usememo' element={<UseMemo />} />
        <Route exact path='/use-reducer' element={<UseReducer/>} />
        <Route exact path='/products-backend' element={<ProductsBackend/>} />
        <Route exact path='/single-backend/:single' element={<SingleBackend/>} />
        <Route exact path='/resume' element={<Resume/>}/>
        <Route exact path='/resume-builder' element={<ResumeBuilder/>}/>
        <Route exact path='/parent' element={<Parent/>}/>
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/kart' element={<Kart/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/reference' element={<Reference/>}/>
        <Route exact path='/reference1' element={<Reference1/>}/>
        


        
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;