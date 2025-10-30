import React, { useRef, useState } from 'react';
import Course from './components/Course';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HtmlCourse from './components/HtmlCourse';
import UserInfo from './components/UserInfo';
import CssCourse from './components/cssCourse';
import JavaScriptCourse from './components/JavaScriptCourse';
import Footer from './components/Footer';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
// import Certificate from './components/Certificate';


function App() {
  const nameValue = useRef();
  const phoneValue = useRef();
  const emailValue = useRef();
  const categoryValue = useRef();

  const [userData, setUserData] = useState({
    userName: "",
    category: "",
  });

  const handleOnSubmit = () => {
    const name = nameValue.current.value;
    const category = categoryValue.current.value;

    setUserData({
      userName: name,
      category: category,
    });



  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={
            <>
              <Hero />
              <WhyChooseUs />
              <Course />
              <About />
            </>
          } />
          <Route exact path='/course' element={<Course />} />
          <Route exact path='/about' element={<About />} />

          <Route exact path='/htmlCourse' element={<HtmlCourse userData={userData} />} />
          <Route exact path='/cssCourse' element={<CssCourse userData={userData} />} />
          <Route exact path='/javaScriptCourse' element={<JavaScriptCourse userData={userData} />} />

          <Route exact path='/userInfo' element={
            <UserInfo
              handleOnSubmit={handleOnSubmit}
              nameValue={nameValue}
              phoneValue={phoneValue}
              emailValue={emailValue}
              categoryValue={categoryValue}
              userData={userData}
            />
          } />
        </Routes>
        <Footer />


      </BrowserRouter>
    </>
  );
}

export default App;
