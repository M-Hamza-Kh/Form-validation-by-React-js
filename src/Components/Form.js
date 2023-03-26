import { useState } from "react";

import "./Form.css";
function Form() {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [input3, setinput3] = useState("");
  const [input4, setinput4] = useState("");
  const [input5, setinput5] = useState("");
  const [input6, setinput6] = useState("");
  const [input7, setinput7] = useState("");

  const [error1, seterror1] = useState(false);
  const [error2, seterror2] = useState(false);
  const [error3, seterror3] = useState(false);
  const [error4, seterror4] = useState(false);
  const [error5, seterror5] = useState(false);
  const [error6, seterror6] = useState(false);
  const [error7, seterror7] = useState(false);

  const inputvalue1 = (event) => {
    setinput1(event.target.value);

    if (input1.trim().length < 0) {
      return seterror1(true);
    } else {
      seterror1(false);
    }
  };
  const inputvalue2 = (event) => {
    setinput2(event.target.value);
    if (input2.trim().length < 0) {
      return seterror2(true);
    } else {
      seterror2(false);
    }
  };
  const inputvalue3 = (event) => {
    setinput3(event.target.value);
    if (input3.trim().length < 0) {
      return seterror3(true);
    } else {
      seterror3(false);
    }
  };
  const inputvalue4 = (event) => {
    setinput4(event.target.value);
    if (input4.trim().length < 0) {
      return seterror4(true);
    } else {
      seterror4(false);
    }
  };
  const inputvalue5 = (event) => {
    setinput5(event.target.value);
    if (input5.trim().length < 0) {
      return seterror5(true);
    } else {
      seterror5(false);
    }
  };
  const inputvalue6 = (event) => {
    setinput6(event.target.value);

    if (input6.trim().length < 0) {
      return seterror6(true);
    } else {
      seterror6(false);
    }
  };
  const inputvalue7 = (event) => {
    setinput7(event.target.value);
    if (input7.trim().length < 0) {
      return seterror7(true);
    } else {
      seterror7(false);
    }
  };

  const formhandler = (e) => {
    e.preventDefault();

    const allvalues = {
      id: Math.random().toLocaleString(),
      value1: input1,
      value2: input2,
      value3: input3,
      value4: input4,
      value5: input5,
      value6: input6,
      value7: input7,
    };

    if (
      input1.trim().length === 0 &&
      input2.trim().length === 0 &&
      input3.trim().length === 0 &&
      input4.trim().length === 0 &&
      input5.trim().length === 0 &&
      input6.trim().length === 0 &&
      input7.trim().length === 0
    ) {
      seterror1(true);
      seterror2(true);
      seterror3(true);
      seterror4(true);
      seterror5(true);
      seterror6(true);
      seterror7(true);

      return;
    } else {
      seterror1(false);
      seterror2(false);
      seterror3(false);
      seterror4(false);
      seterror5(false);
      seterror6(false);
      seterror7(false);
    }

    // Input One

    if (input1.trim().length === 0) {
      return seterror1(true);
    } else {
      seterror1(false);
    }

    if (
      input2.trim().length === 0 &&
      input3.trim().length === 0 &&
      input4.trim().length === 0 &&
      input5.trim().length === 0 &&
      input6.trim().length === 0 &&
      input7.trim().length === 0
    ) {
      seterror2(true);
      seterror3(true);
      seterror4(true);
      seterror5(true);
      seterror6(true);
      seterror7(true);

      return;
    } else {
      seterror2(false);
      seterror3(false);
      seterror4(false);
      seterror5(false);
      seterror6(false);
      seterror7(false);
    }
    // Input Two

    if (input2.trim().length === 0) {
      return seterror2(true);
    } else {
      seterror2(false);
    }

    if (
      input3.trim().length === 0 &&
      input4.trim().length === 0 &&
      input5.trim().length === 0 &&
      input6.trim().length === 0 &&
      input7.trim().length === 0
    ) {
      seterror3(true);
      seterror4(true);
      seterror5(true);
      seterror6(true);
      seterror7(true);

      return;
    } else {
      seterror3(false);
      seterror4(false);
      seterror5(false);
      seterror6(false);
      seterror7(false);
    }
    //input3

    if (input3.trim().length === 0) {
      return seterror3(true);
    } else {
      seterror3(false);
    }

    if (
      input4.trim().length === 0 &&
      input5.trim().length === 0 &&
      input6.trim().length === 0 &&
      input7.trim().length === 0
    ) {
      seterror4(true);
      seterror5(true);
      seterror6(true);
      seterror7(true);

      return;
    } else {
      seterror4(false);
      seterror5(false);
      seterror6(false);
      seterror7(false);
    }

    //input 4
    if (input4.trim().length === 0) {
      return seterror4(true);
    } else {
      seterror4(false);
    }

    if (
      input5.trim().length === 0 &&
      input6.trim().length === 0 &&
      input7.trim().length === 0
    ) {
      seterror5(true);
      seterror6(true);
      seterror7(true);

      return;
    } else {
      seterror5(false);
      seterror6(false);
      seterror7(false);
    }
    //input 5

    if (input5.trim().length === 0) {
      return seterror5(true);
    } else {
      seterror5(false);
    }

    if (input6.trim().length === 0 && input7.trim().length === 0) {
      seterror6(true);
      seterror7(true);

      return;
    } else {
      seterror6(false);
      seterror7(false);
    }
    // input 6
    if (input6.trim().length === 0) {
      return seterror6(true);
    } else {
      seterror6(false);
    }
    if (input7.trim().length === 0) {
      seterror7(true);

      return;
    } else {
      seterror7(false);
    }

    if (input7.trim().length === 0) {
      return seterror7(true);
    } else {
      seterror7(false);
    }

    console.log(allvalues);
    setinput1("");
    setinput2("");
    setinput3("");
    setinput4("");
    setinput5("");
    setinput6("");
    setinput7("");
  };

  return (
    <div className="container ">
      <div className="row  d-flex   justify-content-center align-items-center">
        <div className="col-8   col-div  ">
          <form
            className=" d-flex justify-content-center mt-3 "
            onSubmit={formhandler}
          >
            <div className="content">
              <h3 className="">student Registration Form</h3>

              <label className="labels mt-1">First Name</label>
              <br />
              <input
                type="text"
                value={input1}
                onChange={inputvalue1}
                className="input mt-1"
                onBlur={() => {
                  if (input1.trim().length === 0) {
                    return seterror1(true);
                  }
                }}
              ></input>
              <br />
              {error1 && (
                <p className="text-danger ms-3">
                  * please fill the input field
                </p>
              )}
              <label className="labels ">Last Name</label>
              <br />
              <input
                type="text"
                value={input2}
                onChange={inputvalue2}
                className="input mt-1"
                onBlur={() => {
                  if (input2.trim().length === 0) {
                    return seterror2(true);
                  }
                }}
              ></input>
              <br />
              {error2 && (
                <p className="text-danger ms-3">
                  * please fill the input field
                </p>
              )}
              <label className="labels ">Phone No</label>
              <br />
              <input
                type="number"
                value={input3}
                onChange={inputvalue3}
                className="input"
                onBlur={() => {
                  if (input3.trim().length === 0) {
                    return seterror3(true);
                  }
                }}
              ></input>
              <br />
              {error3 && (
                <p className="text-danger ms-3">
                  * please fill the input field
                </p>
              )}
              <label className="labels ">Email</label>
              <br />
              <input
                type="email"
                value={input4}
                onChange={inputvalue4}
                className="input mt-1"
                onBlur={() => {
                  if (input4.trim().length === 0) {
                    return seterror4(true);
                  }
                }}
              ></input>
              <br />
              {error4 && (
                <p className="text-danger ms-3">
                  * please fill the input field
                </p>
              )}
              <label className="labels ">Address</label>
              <br />
              <input
                type="text"
                value={input5}
                onChange={inputvalue5}
                className="input mt-1"
                onBlur={() => {
                  if (input5.trim().length === 0) {
                    return seterror5(true);
                  }
                }}
              ></input>
              <br />
              {error5 && (
                <p className="text-danger ms-3">
                  * please fill the input field
                </p>
              )}
              <label className="labels ">Guardian Name</label>
              <br />
              <input
                type="text"
                value={input6}
                onChange={inputvalue6}
                className="input mt-1"
                onBlur={() => {
                  if (input6.trim().length === 0) {
                    return seterror6(true);
                  }
                }}
              ></input>
              <br />
              {error6 && (
                <p className="text-danger ms-3">
                  * please fill the input field
                </p>
              )}
              <label className="labels ">Guardian PhoneNo</label>
              <br />
              <input
                type="number"
                value={input7}
                onChange={inputvalue7}
                className="input mt-1"
                onBlur={() => {
                  if (input7.trim().length === 0) {
                    return seterror7(true);
                  }
                }}
              ></input>
              <br />
              {error7 && (
                <p className="text-danger ms-3">
                  * please fill the input field
                </p>
              )}
              <div className="text-end my-2">
                <button value="submit" className="submitbutton">
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;
