import React, { useState } from "react";
import { LogoFull, SimCard } from "../image";
import { useNavigate } from "react-router-dom";
import { styles } from "../style/styles";
// auth
// import { signInWithEmailAndPassword } from "firebase/auth";

// icons
import {
  AiFillFacebook,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineLeft,
  AiOutlineLine,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Modal } from 'antd';


// include styles

const Home = () => {
  const navigate = useNavigate();
  // const [ModalVisibled, setModalVisibled] = useState(true);
  const [ModalVisibled, setModalVisibled] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function LogInPage() {
    navigate("/dashboard");

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((res) => {
    //     console.log(res.user);
    //   })
    //   .catch((err) => {});
  }

  return (
    <div className="w-[100%] h-[100%] bg-black">
      <div className="bg-bleck h-[740px] flex flex-col justify-between">
        <div className=" container mx-auto flex content-center flex-wrap justify-between md:justify-center gap-3 md:align-bottom ">
          <div
            className={`h-[150px] sm:m-[25px] ss:m-0    ${styles.flex} gap-[25px]  sm:flex-wrap justify-between`}
          >
            <label>
              <img src={LogoFull} alt="#" />
              <span className="text-grayF   sm:text-[11px] ss:text-[8px]">
                GLOBAL MOBILE OPERATOR
              </span>
            </label>
            <div
              className={`w-[430px] h-[100%]  flex content- justify-between items-start flex-col `}
            >
              <p
                onClick={() => navigate("/")}
                className="text-grayF cursor-pointer w-[40%] flex gap-1 items-start content-center sn:text-[11px] sm:text-[14px] "
              >
                <AiOutlineLeft className="mt-1" /> BACK TO HOMEPAGE
              </p>
              <span className="w-full h-[80%] flex flex-col justify-between ">
                <span className={` ${styles.flex} gap-2 cursor-pointer`}>
                  <img
                    className=" flex align-center justify-center w-[25px] sn:w-[20px]   "
                    src={SimCard}
                    alt="sim-card"
                  />
                  <h3 className="text-white sm:font-[700] sm:text-[32px] sn:text-[25px] ">
                    My V-Tell
                  </h3>
                </span>
                <p className="text-grayF text-[12px] font-normal">
                  Log in to access V-Tell subscriber's self care capabilities
                </p>
              </span>
            </div>
          </div>

          <div className=" w-[400px] h-[210px]  flex flex-col justify-around gap-2 md:mt-[150px] ss:mt-0">
            <span className="h-[110px] flex flex-col justify-evenly">
              <h1 className="text-white text-[28px] font-normal">
                New Subscriber
              </h1>
              <p className={`text-grayF font-normal font-BeauSans`}>
                Don’t have an account yet? Register now!
              </p>
            </span>

            <button
              type="button"
              onClick={() => setModalVisibled(true)}
              className="w-full btn btn-outline-danger button-warning mt-4"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => (navigate('/order'))}
              className="w-full btn btn-outline-danger button-warning mt-4"
            >
              Order
            </button>

          </div>
        </div>

        <Modal
          footer=''
          centered
          open={ModalVisibled}
          onCancel={() => (setModalVisibled(false))}
        >
          <div className=" h-[320px] flex flex-col content-center gap-1 ">
            <div
              className={`flex flex-col gap-2 justify-start content-start  h-[100px]  p-2`}
            >
              <span className=" text-[14px] leading-[15px] font-BeauSans  text-black">
                Enter your email address
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[35px] rounded-[5px] font-BeauSans border border-black outline-none "
                type="text"
                placeholder="Email....."
              />
            </div>
            <div
              className={`flex flex-col gap-2 justify-start content-start  h-[120px]  p-2`}
            >
              <span className="w-[50%] text-[14px] leading-[15px]  font-BeauSans text-base text-black">
                Enter your password
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[35px] rounded-[5px] border font-BeauSans border-black outline-none "
                type="text"
                placeholder="password....."
              />
            </div>
            <button onClick={LogInPage} className="btn btn-danger w-100 ">
              Log in
            </button>
            <p className="text-black flex justify-center border-b-[0.5px] py-2  border-grayF">
              or
            </p>
            <div className="flex justify-center gap-3 mb-1">
              <button className="btn btn-dark">
                <AiOutlineGoogle />
              </button>
              <button className="btn btn-dark">
                <AiOutlineFacebook />
              </button>
              <button className="btn btn-dark">
                <AiOutlineGithub />
              </button>
            </div>
          </div>
        </Modal>


        {/* ********************************** fooooter **************************** */}

        <div className="footer w-full mx-auto bg-[#302F2F] h-[50px]">
          <div className="container  h-[100%] flex justify-around align-bottom content-end items-end">
            <p className="text-[14px] font-BeauSans text-grayF font-normal leading-[21px]">
              © 2021 V-Tell Group of Companies
            </p>
            <div>
              <p className="text-[14px] font-BeauSans text-grayF font-normal leading-[21px]">
                Customer Service or Contact us:{" "}
                <a className="ml-1 mb-2 text-[#d5d3d3]" href="tel:9090">
                  9090
                </a>{" "}
                | Email:
                <a
                  className="ml-2 mb-2 text-[#d5d3d3]"
                  href="service@v-tell.com"
                >
                  service@v-tell.com
                </a>
              </p>
            </div>
            <span className="flex gap-3">
              <span className="text-[14px] mb-2 font-BeauSans text-grayF font-normal leading-[21px]">
                Follow Us
              </span>
              <span className="flex gap-2 text-[14px] font-BeauSans text-grayF font-normal leading-[21px]">
                <a className="ml-1 mb-2 text-[#d5d3d3]" href="http://#">
                  <AiOutlineFacebook />
                </a>
                <a className="ml-1 mb-2 text-[#d5d3d3]" href="http://#">
                  <AiOutlineInstagram />
                </a>
                <a className="ml-1 mb-2 text-[#d5d3d3]" href="http://#">
                  <AiOutlineTwitter />
                </a>
                <a className="ml-1 mb-2 text-[#d5d3d3]" href="http://#">
                  <AiOutlineLinkedin />
                </a>
              </span>
            </span>
          </div>
        </div>
        {/* ********************************** fooooter **************************** */}


      </div>
    </div>
  );
};

export default Home;
