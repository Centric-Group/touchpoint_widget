(() => {
    const setUp = () => {
        const createDiv = () => {
            const e = document.createElement('div');
            return document.body.appendChild(e), e
        }
        const createImg = () => {
            const e = document.createElement('img');
            return document.body.appendChild(e), e
        }
        const addI = (e, i) => {
            e.id = i;
            return e
        }

        let isOnCall = false
        const imgUrl = 'https://raw.githubusercontent.com/Centric-Group/telephony_js/317931181dce86ef7f3dc85aeb7cfaf368ebdc9a/'

        let widget = createDiv(), widget_label = document.createElement('span');
        let widget_img = createImg();
        widget = addI(widget, "widget_container");
        widget_img = addI(widget_img, "widget_img");
        widget.appendChild(widget_img);
        widget.appendChild(widget_label);

        const setPosition = ({ bottom, right }) => {
            widget.style.bottom = `${bottom}px`;
            widget.style.right = `${right}px`;
        }
        const setLabel = (label) => {
            widget_label.innerText = label;
        }
        const setImage = (image) => {
            widget_img.src = image;
        }

        const setBG = (color) => {
            widget.style.backgroundColor = color;
        }

        const setCorners = (corners) => {
            widget.style.borderRadius = `${corners}px`;
        }

        const setAnimation = (rotate) => {
            widget_img.style.transform = `rotate(${rotate}deg)`;
        }

        const getE = () => {
            const defaultVal = {
                position: { bottom: 30, right: 30 },
                label: "Contact Us",
                image: imgUrl + "answer.png",
                bg: "#3DAC47",
                anim: 360,
                corners: 30
            }
            if (!window.blinkWidget) {
                //default styles
                return defaultVal
            } else {
                let tmp = window.blinkWidget.position;
                if (tmp != null && tmp != undefined) {
                    if (tmp.bottom != null && tmp.bottom != undefined) defaultVal.position.bottom = tmp.bottom;
                    if (tmp.right != null && tmp.right != undefined) defaultVal.position.right = tmp.right;
                }
                return {
                    position: defaultVal.position,
                    label: window.blinkWidget.label != undefined && window.blinkWidget.label != null ? window.blinkWidget.label : defaultVal.label,
                    image: window.blinkWidget.image != undefined && window.blinkWidget.image != null ? window.blinkWidget.image : defaultVal.image,
                    bg: window.blinkWidget.bg != undefined && window.blinkWidget.bg != null ? window.blinkWidget.bg : defaultVal.bg,
                    anim: window.blinkWidget.anim != undefined && window.blinkWidget.anim != null ? window.blinkWidget.anim : defaultVal.anim,
                    corners: window.blinkWidget.corners != undefined && window.blinkWidget.corners != null ? window.blinkWidget.corners : defaultVal.corners,
                }
            }
        }

        //set default values
        const init = () => {
            const e = getE()
            setPosition(e.position);
            setLabel(e.label);
            setImage(e.image);
            setBG(e.bg);
            setAnimation(e.anim);
            setCorners(e.corners)
        }
        init()
        //end default values

        //#region adding vonage modules
        const vonage = document.createElement("script");
        vonage.type = "text/javascript";
        vonage.src = "https://unpkg.com/nexmo-client@latest/dist/nexmoClient.js?module";
        document.head.appendChild(vonage);

        const initVonage = async () => {
            const NexmoClient = window.NexmoClient;
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const responce = await fetch("https://tel-server.onrender.com/user/auth/rico", requestOptions)
            const data = await responce.json();

            new NexmoClient()
                .createSession(data.jwt)
                .then(app => {
                    console.log('Logged in to app', app);
                    const e = getE();
                    const isAnswered = false

                    widget.addEventListener("click", function () {

                        widget.classList.toggle('active');
                        widget_img.classList.toggle('onCall');

                        //try again later, call ended, calling..., call declined, call accepted, call failed
                        //00:00:00

                        let count = -1
                        const dialInterval = setInterval(() => {
                            count = count + 1
                            if (isAnswered) {
                                return
                            }
                            if (count === 0) {
                                setLabel(!isOnCall ? "Dialing ..." : e.label);
                            } else if (count === 1) {
                                setLabel(!isOnCall ? "Dialing .." : e.label);
                            } else if (count === 2) {
                                setLabel(!isOnCall ? "Dialing ." : e.label);
                            } else if (count === 3) {
                                setLabel(!isOnCall ? "Dialing " : e.label);
                            } else if (count === 4) {
                                setLabel(!isOnCall ? "Dialing ." : e.label);
                            } else if (count >= 5) {
                                setLabel(!isOnCall ? "Dialing .." : e.label);
                                count = -1
                            }
                        }, 1000);

                        if (isAnswered) {
                            clearInterval(dialInterval);
                        }

                        setImage(!isOnCall ? imgUrl + "decline.png" : e.image)
                        setBG(!isOnCall ? "#ac3d3d" : e.bg);
                        setAnimation(!isOnCall ? 0 : e.anim);

                        if (!isOnCall) {
                            console.log("Calling...");
                            app.inAppCall(['edson'])
                        }
                        isOnCall = !isOnCall;
                    })

                    app.on("member:call", (member, call) => {
                        // Hang-up the call
                        widget.addEventListener("click", () => {
                            if (isOnCall) {
                                console.log("Call end")
                                call.hangUp();
                            }
                        });
                    });

                    app.on("call:status:changed", (call) => {
                        let status = call.status;
                        console.log(status)
                        setLabel(isOnCall ? status : e.label);
                    });
                })
                .catch(err => console.log(err));

        }

        const startCall = () => {
            let u = window.blinkWidget.u;


            console.log(u)
        }


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
        }`
    }

    "interactive" == document.readyState || "complete" == document.readyState ? setUp() : document.addEventListener ? document.addEventListener("readystatechange", function () {
        "interactive" == document.readyState && setUp()
    }) : document.attachEvent && document.attachEvent("readystatechange",
        function () {
            "interactive" == document.readyState && setUp()
        }
    )

})()