(() => {
  const setUp = () => {
    const createDiv = () => {
      const e = document.createElement("div");
      return document.body.appendChild(e), e;
    };
    const createImg = () => {
      const e = document.createElement("img");
      return document.body.appendChild(e), e;
    };
    const addI = (e, i) => {
      e.id = i;
      return e;
    };
    const imgUrl =
      "https://raw.githubusercontent.com/Centric-Group/telephony_js/317931181dce86ef7f3dc85aeb7cfaf368ebdc9a/";

    let widget = createDiv(),
      widget_label = document.createElement("span");
    let widget_img = createImg();
    widget = addI(widget, "widget_container");
    widget_img = addI(widget_img, "widget_img");
    widget.appendChild(widget_img);
    widget.appendChild(widget_label);

    const setPosition = ({ bottom, right }) => {
      widget.style.bottom = `${bottom}px`;
      widget.style.right = `${right}px`;
    };
    const setLabel = (label) => {
      widget_label.innerText = label;
    };
    const setImage = (image) => {
      widget_img.src = image;
    };

    const setBG = (color) => {
      widget.style.backgroundColor = color;
    };

    const setCorners = (corners) => {
      widget.style.borderRadius = `${corners}px`;
    };

    const setAnimation = (rotate) => {
      widget_img.style.transform = `rotate(${rotate}deg)`;
    };

    const getE = () => {
      const defaultVal = {
        position: { bottom: 30, right: 30 },
        label: "Contact Us",
        image: imgUrl + "answer.png",
        bg: "#3DAC47",
        anim: 360,
        corners: 30,
      };
      if (!window.blinkWidget) {
        //default styles
        return defaultVal;
      } else {
        let tmp = window.blinkWidget.position;
        if (tmp != null && tmp != undefined) {
          if (tmp.bottom != null && tmp.bottom != undefined)
            defaultVal.position.bottom = tmp.bottom;
          if (tmp.right != null && tmp.right != undefined)
            defaultVal.position.right = tmp.right;
        }
        return {
          position: defaultVal.position,
          label:
            window.blinkWidget.label != undefined &&
            window.blinkWidget.label != null
              ? window.blinkWidget.label
              : defaultVal.label,
          image:
            window.blinkWidget.image != undefined &&
            window.blinkWidget.image != null
              ? window.blinkWidget.image
              : defaultVal.image,
          bg:
            window.blinkWidget.bg != undefined && window.blinkWidget.bg != null
              ? window.blinkWidget.bg
              : defaultVal.bg,
          anim:
            window.blinkWidget.anim != undefined &&
            window.blinkWidget.anim != null
              ? window.blinkWidget.anim
              : defaultVal.anim,
          corners:
            window.blinkWidget.corners != undefined &&
            window.blinkWidget.corners != null
              ? window.blinkWidget.corners
              : defaultVal.corners,
        };
      }
    };

    //set default values
    const init = () => {
      const e = getE();
      setPosition(e.position);
      setLabel(e.label);
      setImage(e.image);
      setBG(e.bg);
      setAnimation(e.anim);
      setCorners(e.corners);
    };
    init();
    //end default values

    //#region adding vonage modules
    const initVonage = async () => {
      const NexmoClient = window.NexmoClient;
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const responce = await fetch(
        "https://tel-server.onrender.com/user/auth/rico",
        requestOptions
      );
      const data = await responce.json();

      new NexmoClient()
        .createSession(data.jwt)
        .then((app) => {
          console.log("Logged in to app", app);
          const e = getE();
          let isOnCall = true,
            isCompleted = true;

          const bhavior = () => {
            widget.classList.toggle("active");
            widget_img.classList.toggle("onCall");
            //try again later, call ended, calling..., call declined, call accepted, call failed
            //00:00:00

            setLabel(isOnCall ? "dialing ..." : e.label);

            setImage(isOnCall ? imgUrl + "decline.png" : e.image);
            setBG(isOnCall ? "#ac3d3d" : e.bg);
            setAnimation(isOnCall ? 0 : e.anim);
          };

          widget.addEventListener("click", function () {
            if (isOnCall) {
              console.log("Calling...");
              app.inAppCall(["edson"]);

              bhavior();
              isOnCall = !isOnCall;
              isCompleted = !isCompleted;
            }
          });
          app.on("member:call", (member, call) => {
            setLabel("ringing ...");
            widget.addEventListener("click", () => {
              console.log("Ending the call");
              call.hangUp();
            });
          });

          let callInterval;
          app.on("call:status:changed", (call) => {
            let status = call.status;

            console.log(status); //unanswered (ringing and reject), failed (not sure), completed (call end)

            let duration = 0,
              callDurationObj = {
                hrs: 0,
                mins: 0,
                secs: 0,
              };

            if (status == "answered") {
              setLabel("call answer");

              callInterval = setInterval(() => {
                callDurationObj = {
                  hrs: Math.floor(duration / 3600),
                  mins: Math.floor((duration % 3600) / 60),
                  secs: Math.floor((duration % 3600) % 60) % 60,
                };

                setLabel(
                  `${callDurationObj.hrs
                    .toString()
                    .padStart(2, "0")}:${callDurationObj.mins
                    .toString()
                    .padStart(2, "0")}:${callDurationObj.secs
                    .toString()
                    .padStart(2, "0")} `
                );

                duration++;
              }, 1000); //
            } else if (
              status == "completed" ||
              status == "rejected" ||
              status == "unanswered"
            ) {
              setLabel(
                status == "rejected" || status == "unanswered"
                  ? "please try again"
                  : "call ended"
              );
              clearInterval(callInterval);
              setTimeout(() => {
                if (!isCompleted) {
                  bhavior();
                  isOnCall = !isOnCall;
                  isCompleted = !isCompleted;
                }
              }, 1500);
            }
          });
        })
        .catch((err) => console.log(err));
    };

    const startCall = () => {
      let u = window.blinkWidget.u;

      console.log(u);
    };

    initVonage();
    //#endregion

    //end listeners

    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML = `
        #widget_container{
            position: fixed;
            padding: 10px 20px;
            border-radius: 30px;
            padding: 15px 15px 15px 50px;
            cursor: pointer;
            box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25);
            border:0;
            z-index:2147483646;
            text-align: center;
            color: white;
            transition: all 1s;
        }
        #widget_container.active{
            padding: 15px 50px 15px 15px;
        }

        #widget_img{
            position: absolute;
            width: 45px;
            left: -3%;
            top: 1px;
            bottom: 0;
            object-fit: cover;
            transition: all 1s;
        }

        #widget_img.onCall{
            left: 75%;
        }`;
  };

  "interactive" == document.readyState || "complete" == document.readyState
    ? setUp()
    : document.addEventListener
    ? document.addEventListener("readystatechange", function () {
        "interactive" == document.readyState && setUp();
      })
    : document.attachEvent &&
      document.attachEvent("readystatechange", function () {
        "interactive" == document.readyState && setUp();
      });
})();
