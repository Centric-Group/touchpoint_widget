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
            return i
        }
        const addC = (e, i) => {
            e.classList.add(i);
            return e;
        };
        const removeC = (e, i) => {
            e.classList.remove(i);
            return e;
        };
        const checkC = (e, i) => {
            return e.classList.contains(i);
        }
        const changeS = (e, i) => {
            e.style.display = i;
            return e;
        }
        const changeElementLabel = (e, i) => {
            e.innerHTML = i
            return e;
        }
        const imgUrl =
            "https://raw.githubusercontent.com/Centric-Group/telephony_js/main/";

        let widget = createDiv(),
            widget_label = document.createElement("span");
        let _img = createImg();
        addC(widget, 'widget_button')
        widget.appendChild(_img);
        widget.appendChild(widget_label);

        //added elements
        let widget_container = createDiv();
        addC(widget_container, 'container');
        addC(widget_container, 'hide-container');
        const widget_elements = `
            <div class="innerContainer">
                <div class="people">
                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="70" viewBox="0 0 85 70" fill="none" style="transform: rotate(-180deg)">
                        <rect x="-2.15381" y="10.1448" width="7.92308" height="49.2029" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="61.2305" y="10.1448" width="7.92308" height="49.2029" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="77.0771" y="18.7683" width="7.92308" height="32.4638" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="13.6924" y="-6.10352e-05" width="7.92308" height="70" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="29.5386" y="5.07266" width="7.92308" height="59.8551" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="45.3848" y="-6.10352e-05" width="7.92308" height="70" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                    </svg>
                    <div class="group">
                        <img src="./image 79.png" id="group-center">
                        <img src="./image 79.png">
                        <img src="./image 79.png">
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="70" viewBox="0 0 85 70" fill="none">
                        <rect x="-2.15381" y="10.1448" width="7.92308" height="49.2029" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="61.2305" y="10.1448" width="7.92308" height="49.2029" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="77.0771" y="18.7683" width="7.92308" height="32.4638" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="13.6924" y="-6.10352e-05" width="7.92308" height="70" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="29.5386" y="5.07266" width="7.92308" height="59.8551" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                        <rect x="45.3848" y="-6.10352e-05" width="7.92308" height="70" rx="3.96154" fill="#FFFBFB" fill-opacity="0.3"/>
                    </svg>
                </div>
                <div class="callInstruction">
                    <span id="instructions">Tap on the call icon to initiate a call with one of us.</span>
                </div>
                <div class="callActions">
                    <div class="call make" id="make">
                        <div></div>
                        <div></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                            <g clip-path="url(#clip0_578_1857)">
                            <path d="M40.52 31.691C38.06 31.691 35.68 31.291 33.46 30.571C32.76 30.331 31.98 30.511 31.44 31.051L28.3 34.991C22.64 32.291 17.34 27.191 14.52 21.331L18.42 18.011C18.96 17.451 19.12 16.671 18.9 15.971C18.16 13.751 17.78 11.371 17.78 8.91103C17.78 7.83103 16.88 6.93103 15.8 6.93103H8.88C7.8 6.93103 6.5 7.41103 6.5 8.91103C6.5 27.491 21.96 42.931 40.52 42.931C41.94 42.931 42.5 41.671 42.5 40.571V33.671C42.5 32.591 41.6 31.691 40.52 31.691Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_578_1857">
                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.93103)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="callButtons hide" id="call-end-group">
                        <p id="callLabel">Dialing...</p>
                        <div class="group">
                            <div class="button" id="mute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M19.1202 10.051C18.7302 10.051 18.4202 10.361 18.4202 10.751V12.331C18.4202 15.871 15.5402 18.751 12.0002 18.751C8.46018 18.751 5.58018 15.871 5.58018 12.331V10.741C5.58018 10.351 5.27018 10.041 4.88018 10.041C4.49018 10.041 4.18018 10.351 4.18018 10.741V12.321C4.18018 16.391 7.31018 19.741 11.3002 20.101V22.231C11.3002 22.621 11.6102 22.931 12.0002 22.931C12.3902 22.931 12.7002 22.621 12.7002 22.231V20.101C16.6802 19.751 19.8202 16.391 19.8202 12.321V10.741C19.8158 10.5577 19.7403 10.3832 19.6097 10.2545C19.4791 10.1257 19.3036 10.0528 19.1202 10.051Z" fill="#111E25"/>
                                    <path d="M11.9981 2.93103C9.55813 2.93103 7.57812 4.91103 7.57812 7.35103V12.471C7.57812 14.911 9.55813 16.891 11.9981 16.891C14.4381 16.891 16.4181 14.911 16.4181 12.471V7.35103C16.4181 4.91103 14.4381 2.93103 11.9981 2.93103ZM13.3081 9.88103C13.2381 10.141 13.0081 10.311 12.7481 10.311C12.6981 10.311 12.6481 10.301 12.5981 10.291C12.2081 10.181 11.7981 10.181 11.4081 10.291C11.0881 10.381 10.7781 10.191 10.6981 9.88103C10.6081 9.57103 10.7981 9.25103 11.1081 9.17103C11.6981 9.01103 12.3181 9.01103 12.9081 9.17103C13.2081 9.25103 13.3881 9.57103 13.3081 9.88103ZM13.8381 7.94103C13.7969 8.05338 13.7218 8.15021 13.6234 8.21824C13.5249 8.28627 13.4078 8.32218 13.2881 8.32103C13.2181 8.32103 13.1581 8.31103 13.0881 8.29103C12.3881 8.03103 11.6081 8.03103 10.9081 8.29103C10.7622 8.34277 10.6018 8.33507 10.4615 8.2696C10.3212 8.20412 10.2122 8.08611 10.1581 7.94103C10.0481 7.64103 10.2081 7.30103 10.5081 7.20103C11.4706 6.85103 12.5256 6.85103 13.4881 7.20103C13.7881 7.31103 13.9481 7.64103 13.8381 7.94103Z" fill="#111E25"/>
                                </svg>
                                Mute
                            </div>
                            <div class="button" id="hold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M10.65 20.041V5.82103C10.65 4.47103 10.08 3.93103 8.64 3.93103H5.01C3.57 3.93103 3 4.47103 3 5.82103V20.041C3 21.391 3.57 21.931 5.01 21.931H8.64C10.08 21.931 10.65 21.391 10.65 20.041ZM21.002 20.041V5.82103C21.002 4.47103 20.432 3.93103 18.992 3.93103H15.362C13.932 3.93103 13.352 4.47103 13.352 5.82103V20.041C13.352 21.391 13.922 21.931 15.362 21.931H18.992C20.432 21.931 21.002 21.391 21.002 20.041Z" fill="#111E25"/>
                                </svg>
                                Hold
                            </div>
                            <div class="button" id="speaker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 22 18" fill="none">
                                    <path d="M18.828 16.0045C18.6887 16.0045 18.5522 15.9657 18.4337 15.8925C18.3152 15.8193 18.2195 15.7145 18.1572 15.5899C18.0949 15.4654 18.0685 15.3259 18.081 15.1872C18.0935 15.0485 18.1444 14.916 18.228 14.8045C20.898 11.2445 20.898 6.26453 18.228 2.70453C18.1087 2.5454 18.0574 2.34538 18.0855 2.14846C18.1137 1.95155 18.2189 1.77388 18.378 1.65453C18.5371 1.53518 18.7372 1.48394 18.9341 1.51207C19.131 1.5402 19.3087 1.6454 19.428 1.80453C22.498 5.89453 22.498 11.6145 19.428 15.7045C19.288 15.9045 19.058 16.0045 18.828 16.0045ZM13.02 0.536529C11.9 -0.0834708 10.47 0.076529 9.01 0.986529L6.09 2.81653C5.89 2.93653 5.66 3.00653 5.43 3.00653H4C1.58 3.00653 0.25 4.33653 0.25 6.75653V10.7565C0.25 13.1765 1.58 14.5065 4 14.5065H5.43C5.66 14.5065 5.89 14.5765 6.09 14.6965L9.01 16.5265C9.89 17.0765 10.75 17.3465 11.55 17.3465C12.0636 17.3511 12.5698 17.2237 13.02 16.9765C14.13 16.3565 14.75 15.0665 14.75 13.3465V4.16653C14.75 2.44653 14.13 1.15653 13.02 0.536529Z" fill="black"/>
                                </svg>
                                Speaker
                            </div>
                        </div>
                        <div class="call end" id="end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                <g clip-path="url(#clip0_578_1857)">
                                <path d="M40.52 31.691C38.06 31.691 35.68 31.291 33.46 30.571C32.76 30.331 31.98 30.511 31.44 31.051L28.3 34.991C22.64 32.291 17.34 27.191 14.52 21.331L18.42 18.011C18.96 17.451 19.12 16.671 18.9 15.971C18.16 13.751 17.78 11.371 17.78 8.91103C17.78 7.83103 16.88 6.93103 15.8 6.93103H8.88C7.8 6.93103 6.5 7.41103 6.5 8.91103C6.5 27.491 21.96 42.931 40.52 42.931C41.94 42.931 42.5 41.671 42.5 40.571V33.671C42.5 32.591 41.6 31.691 40.52 31.691Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_578_1857">
                                    <rect width="48" height="48" fill="white" transform="translate(0.5 0.93103)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>`;
        widget_container.innerHTML = widget_elements
        //end added elements

        const setPosition = ({ bottom, right }) => {
            widget.style.bottom = `${bottom}px`;
            widget.style.right = `${right}px`;
        };
        const setLabel = (label) => {
            widget_label.innerText = label;
        };
        const setImage = (image) => {
            _img.src = image;
        };

        const setBG = (color) => {
            widget.style.backgroundColor = color;
        };

        const setCorners = (corners) => {
            widget.style.borderRadius = `${corners}px`;
        };

        const setAnimation = (rotate) => {
            //widget_img.style.transform = `rotate(${rotate}deg)`;
            if (rotate == 0) {
                _img.style.transform = `rotate(130deg)`;
            }
        };

        const setPhoneBg = (color) => {
            //widget_img.style.backgroundColor = color;
        }

        const generateDarkerColor = (color, percent) => {
            // Parse the hexadecimal color
            const hex = color.replace('#', '');
            const rgb = parseInt(hex, 16);

            // Extract the RGB components
            const red = (rgb >> 16) & 255;
            const green = (rgb >> 8) & 255;
            const blue = rgb & 255;

            // Calculate the darker RGB values
            const darkerRed = Math.floor(red * (100 - percent) / 100);
            const darkerGreen = Math.floor(green * (100 - percent) / 100);
            const darkerBlue = Math.floor(blue * (100 - percent) / 100);

            // Convert the darker RGB values back to hexadecimal
            let darkerHex = ((darkerRed << 16) | (darkerGreen << 8) | darkerBlue).toString(16);

            // Pad the hexadecimal value with zeros if needed
            while (darkerHex.length < 6) {
                darkerHex = '0' + darkerHex;
            }

            // Return the darker color in hexadecimal format
            return '#' + darkerHex;
        }

        const getE = () => {
            const defaultVal = {
                position: { bottom: 30, right: 30 },
                label: "Contact Us",
                image: imgUrl + "phone.png",
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
            setPhoneBg(generateDarkerColor(e.bg, 40))
        };
        init();

        //#region adding vonage modules
        let vonageApp = {
            finished: false,
            call: (u, t = 'app') => { },
            hangup: () => { },
            reject: () => { },
        }
        const initVonage = async () => {
            const NexmoClient = window.NexmoClient;
            const requestOptions = {
                method: "GET",
                redirect: "follow",
            };

            const responce = await fetch(
                `https://ukigenxp3xrrnjurt3rf7k4uwy0osquq.lambda-url.ap-southeast-1.on.aws/user/auth/${window.blinkWidget.users[0]}`,
                requestOptions
            );
            const data = await responce.json();

            new NexmoClient()
                .createSession(data.jwt)
                .then((app) => {
                    console.log("Logged in to app", app);
                    const e = getE();
                    const setCallLabel = (s) => {
                        document.getElementById('callLabel').innerHTML = s;
                    }
                    app.on("member:call", (member, call) => {
                        setCallLabel("Ringing ...");
                        /*widget.addEventListener("click", () => {
                            if (isAnswered) {
                                call.hangUp();
                            } else {
                                call.reject();
                            }
                        });*/
                        vonageApp['hangup'] = () => { call.hangUp(); }
                        vonageApp['reject'] = () => { call.reject(); }
                    });

                    app.callServer(window.blinkWidget.users[1], 'app')

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
                            changeElementLabel(document.getElementById('instructions'), 'Call in Progress');
                            callInterval = setInterval(() => {
                                callDurationObj = {
                                    hrs: Math.floor(duration / 3600),
                                    mins: Math.floor((duration % 3600) / 60),
                                    secs: Math.floor((duration % 3600) % 60) % 60,
                                };

                                setCallLabel(
                                    `${callDurationObj.mins
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
                            status == "unanswered" ||
                            status == "failed"
                        ) {
                            clearInterval(callInterval);
                            setCallLabel(`Call ${status.charAt(0).toUpperCase() + status.slice(1)}`);
                            setTimeout(() => {
                                setCallLabel("Dialing ...");
                                addC(document.getElementById('call-end-group'), 'hide');
                                removeC(document.getElementById('make'), 'hide');
                                changeElementLabel(document.getElementById('instructions'), 'Tap on the call icon to initiate a call with one of us.');
                            }, 2000)
                        }
                    });
                })
                .catch((err) => console.log(err));
        };
        //#endregion

        //#region event listeners
        widget.addEventListener('click', () => {
            if (checkC(widget_container, 'hide-container')) {
                removeC(widget_container, 'hide-container');
                addC(widget_container, 'show-container');
                widget.innerText = 'X';
            } else {
                addC(widget_container, 'hide-container');
                removeC(widget_container, 'show-container');

                const e = getE();
                widget.innerHTML = `<img src="phone.png" alt="">
                <span>${e.label}</span>`;
            }
        })
        document.getElementById('make').addEventListener('click', () => {
            initVonage();
            addC(document.getElementById('make'), 'hide');
            removeC(document.getElementById('call-end-group'), 'hide');
            changeElementLabel(document.getElementById('instructions'), 'Please wait while we connect you.');
        });
        document.getElementById('end').addEventListener('click', () => {
            vonageApp.hangup();
        });

        const labels = ['Mute', 'Hold', 'Speaker'];
        const buttonLabels = {
            [labels[0]]: ['mute', 'unmute'],
            [labels[1]]: ['hold', 'hold_'],
            [labels[2]]: ['speaker', 'speaker_']
        }
        const icons = {
            [labels[0]]: {
                [buttonLabels[labels[0]][0]]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M19.1202 10.051C18.7302 10.051 18.4202 10.361 18.4202 10.751V12.331C18.4202 15.871 15.5402 18.751 12.0002 18.751C8.46018 18.751 5.58018 15.871 5.58018 12.331V10.741C5.58018 10.351 5.27018 10.041 4.88018 10.041C4.49018 10.041 4.18018 10.351 4.18018 10.741V12.321C4.18018 16.391 7.31018 19.741 11.3002 20.101V22.231C11.3002 22.621 11.6102 22.931 12.0002 22.931C12.3902 22.931 12.7002 22.621 12.7002 22.231V20.101C16.6802 19.751 19.8202 16.391 19.8202 12.321V10.741C19.8158 10.5577 19.7403 10.3832 19.6097 10.2545C19.4791 10.1257 19.3036 10.0528 19.1202 10.051Z" fill="#111E25"/>
                <path d="M11.9981 2.93103C9.55813 2.93103 7.57812 4.91103 7.57812 7.35103V12.471C7.57812 14.911 9.55813 16.891 11.9981 16.891C14.4381 16.891 16.4181 14.911 16.4181 12.471V7.35103C16.4181 4.91103 14.4381 2.93103 11.9981 2.93103ZM13.3081 9.88103C13.2381 10.141 13.0081 10.311 12.7481 10.311C12.6981 10.311 12.6481 10.301 12.5981 10.291C12.2081 10.181 11.7981 10.181 11.4081 10.291C11.0881 10.381 10.7781 10.191 10.6981 9.88103C10.6081 9.57103 10.7981 9.25103 11.1081 9.17103C11.6981 9.01103 12.3181 9.01103 12.9081 9.17103C13.2081 9.25103 13.3881 9.57103 13.3081 9.88103ZM13.8381 7.94103C13.7969 8.05338 13.7218 8.15021 13.6234 8.21824C13.5249 8.28627 13.4078 8.32218 13.2881 8.32103C13.2181 8.32103 13.1581 8.31103 13.0881 8.29103C12.3881 8.03103 11.6081 8.03103 10.9081 8.29103C10.7622 8.34277 10.6018 8.33507 10.4615 8.2696C10.3212 8.20412 10.2122 8.08611 10.1581 7.94103C10.0481 7.64103 10.2081 7.30103 10.5081 7.20103C11.4706 6.85103 12.5256 6.85103 13.4881 7.20103C13.7881 7.31103 13.9481 7.64103 13.8381 7.94103Z" fill="#111E25"/>
            </svg>`,
                [buttonLabels[labels[0]][1]]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M16.4179 7.35303V8.51303L9.13788 15.793C8.64782 15.3467 8.25604 14.8032 7.98746 14.1972C7.71889 13.5912 7.5794 12.9359 7.57788 12.273V7.35303C7.57788 5.29303 8.97788 3.58303 10.8779 3.09303C11.0679 3.04303 11.2479 3.20303 11.2479 3.39303V4.93303C11.2479 5.34303 11.5879 5.68303 11.9979 5.68303C12.4079 5.68303 12.7479 5.34303 12.7479 4.93303V3.39303C12.7479 3.20303 12.9279 3.04303 13.1179 3.09303C15.0179 3.58303 16.4179 5.29303 16.4179 7.35303ZM19.8119 10.742V12.332C19.8119 16.402 16.6819 19.752 12.7019 20.102V22.232C12.7019 22.622 12.3919 22.932 12.0019 22.932C11.6119 22.932 11.3019 22.622 11.3019 22.232V20.102C10.2119 20.002 9.18188 19.682 8.26188 19.172L9.29188 18.142C10.1119 18.522 11.0319 18.742 12.0019 18.742C15.5419 18.742 18.4219 15.862 18.4219 12.332V10.742C18.4219 10.362 18.7319 10.052 19.1219 10.052C19.5019 10.052 19.8119 10.362 19.8119 10.742Z" fill="black"/>
                <path d="M16.4181 11.009V12.459C16.4181 15.039 14.1981 17.109 11.5581 16.859C11.2781 16.829 10.9981 16.779 10.7381 16.689L16.4181 11.009ZM21.7711 3.16003C21.4711 2.86003 20.9811 2.86003 20.6811 3.16003L7.23109 16.61C6.16467 15.4402 5.57587 13.913 5.58109 12.33V10.74C5.58109 10.36 5.27109 10.05 4.88109 10.05C4.50109 10.05 4.19109 10.36 4.19109 10.74V12.33C4.19109 14.36 4.97109 16.21 6.24109 17.6L2.22109 21.62C1.92109 21.92 1.92109 22.41 2.22109 22.71C2.38109 22.85 2.57109 22.93 2.77109 22.93C2.97109 22.93 3.16109 22.85 3.31109 22.7L21.7711 4.24003C22.0811 3.94003 22.0811 3.46003 21.7711 3.16003Z" fill="black"/>
              </svg>`
            },
            [labels[1]]: {
                [buttonLabels[labels[1]][0]]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M10.65 20.041V5.82103C10.65 4.47103 10.08 3.93103 8.64 3.93103H5.01C3.57 3.93103 3 4.47103 3 5.82103V20.041C3 21.391 3.57 21.931 5.01 21.931H8.64C10.08 21.931 10.65 21.391 10.65 20.041ZM21.002 20.041V5.82103C21.002 4.47103 20.432 3.93103 18.992 3.93103H15.362C13.932 3.93103 13.352 4.47103 13.352 5.82103V20.041C13.352 21.391 13.922 21.931 15.362 21.931H18.992C20.432 21.931 21.002 21.391 21.002 20.041Z" fill="#111E25"/>
            </svg>`,
                [buttonLabels[labels[1]][1]]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M10.65 20.041V5.82103C10.65 4.47103 10.08 3.93103 8.64 3.93103H5.01C3.57 3.93103 3 4.47103 3 5.82103V20.041C3 21.391 3.57 21.931 5.01 21.931H8.64C10.08 21.931 10.65 21.391 10.65 20.041ZM21.002 20.041V5.82103C21.002 4.47103 20.432 3.93103 18.992 3.93103H15.362C13.932 3.93103 13.352 4.47103 13.352 5.82103V20.041C13.352 21.391 13.922 21.931 15.362 21.931H18.992C20.432 21.931 21.002 21.391 21.002 20.041Z" fill="#111E25"/>
            </svg>`
            },
            [labels[2]]: {
                [buttonLabels[labels[2]][0]]: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 22 18" fill="none">
                <path d="M18.828 16.0045C18.6887 16.0045 18.5522 15.9657 18.4337 15.8925C18.3152 15.8193 18.2195 15.7145 18.1572 15.5899C18.0949 15.4654 18.0685 15.3259 18.081 15.1872C18.0935 15.0485 18.1444 14.916 18.228 14.8045C20.898 11.2445 20.898 6.26453 18.228 2.70453C18.1087 2.5454 18.0574 2.34538 18.0855 2.14846C18.1137 1.95155 18.2189 1.77388 18.378 1.65453C18.5371 1.53518 18.7372 1.48394 18.9341 1.51207C19.131 1.5402 19.3087 1.6454 19.428 1.80453C22.498 5.89453 22.498 11.6145 19.428 15.7045C19.288 15.9045 19.058 16.0045 18.828 16.0045ZM13.02 0.536529C11.9 -0.0834708 10.47 0.076529 9.01 0.986529L6.09 2.81653C5.89 2.93653 5.66 3.00653 5.43 3.00653H4C1.58 3.00653 0.25 4.33653 0.25 6.75653V10.7565C0.25 13.1765 1.58 14.5065 4 14.5065H5.43C5.66 14.5065 5.89 14.5765 6.09 14.6965L9.01 16.5265C9.89 17.0765 10.75 17.3465 11.55 17.3465C12.0636 17.3511 12.5698 17.2237 13.02 16.9765C14.13 16.3565 14.75 15.0665 14.75 13.3465V4.16653C14.75 2.44653 14.13 1.15653 13.02 0.536529Z" fill="black"/>
              </svg>`,
                [buttonLabels[labels[2]][1]]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24" fill="none">
                <path d="M18 16.75C17.8607 16.75 17.7242 16.7112 17.6057 16.638C17.4872 16.5648 17.3915 16.46 17.3292 16.3354C17.2669 16.2108 17.2405 16.0714 17.253 15.9326C17.2655 15.7939 17.3164 15.6614 17.4 15.55C18.1645 14.5243 18.5775 13.2793 18.5775 12C18.5775 10.7207 18.1645 9.47566 17.4 8.45C17.2807 8.29087 17.2294 8.09085 17.2575 7.89394C17.2857 7.69702 17.3909 7.51935 17.55 7.4C17.7091 7.28066 17.9092 7.22941 18.1061 7.25754C18.303 7.28567 18.4807 7.39087 18.6 7.55C20.56 10.17 20.56 13.83 18.6 16.45C18.45 16.65 18.23 16.75 18 16.75Z" fill="#111E25"/>
                <path d="M19.828 19.25C19.6887 19.25 19.5522 19.2112 19.4337 19.138C19.3152 19.0648 19.2195 18.96 19.1572 18.8354C19.0949 18.7108 19.0685 18.5714 19.081 18.4327C19.0935 18.2939 19.1444 18.1614 19.228 18.05C21.898 14.49 21.898 9.51001 19.228 5.95001C19.1087 5.79088 19.0574 5.59086 19.0855 5.39395C19.1137 5.19703 19.2189 5.01936 19.378 4.90001C19.5371 4.78067 19.7372 4.72942 19.9341 4.75755C20.131 4.78568 20.3087 4.89088 20.428 5.05001C23.498 9.14001 23.498 14.86 20.428 18.95C20.288 19.15 20.058 19.25 19.828 19.25ZM14.02 3.78201C12.9 3.16201 11.47 3.32201 10.01 4.23201L7.09 6.06201C6.89 6.18201 6.66 6.25201 6.43 6.25201H5C2.58 6.25201 1.25 7.58201 1.25 10.002V14.002C1.25 16.422 2.58 17.752 5 17.752H6.43C6.66 17.752 6.89 17.822 7.09 17.942L10.01 19.772C10.89 20.322 11.75 20.592 12.55 20.592C13.0636 20.5965 13.5698 20.4691 14.02 20.222C15.13 19.602 15.75 18.312 15.75 16.592V7.41201C15.75 5.69201 15.13 4.40201 14.02 3.78201Z" fill="#111E25"/>
              </svg>`
            },
        }

        let isMicMuted = true;
        let mediaStream = null;
        const toggleMicMute = () => {
            if (!mediaStream) {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then((stream) => {
                        mediaStream = stream;
                        toggleMicMute();
                    })
                    .catch((error) => {
                        console.error('Error accessing microphone:', error);
                    });
                return;
            }

            isMicMuted = !isMicMuted;
            mediaStream.getAudioTracks().forEach(track => {
                track.enabled = !isMicMuted;
                console.log(`Mic ${isMicMuted ? 'On' : 'Off'}`);
            });
        }
        let isLoudspeakerOn = false;
        const toggleLoudspeaker = () => {
            if (!mediaStream) {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then((stream) => {
                        mediaStream = stream;
                        toggleLoudspeaker();
                    })
                    .catch((error) => {
                        console.error('Error accessing audio:', error);
                    });
                return;
            }

            isLoudspeakerOn = !isLoudspeakerOn;
            mediaStream.getAudioTracks().forEach(track => {
                const capabilities = track.getCapabilities();
                if (capabilities && capabilities.deviceId) {
                    const deviceId = isLoudspeakerOn ? 'default' : '';
                    track.applyConstraints({ deviceId })
                        .then(() => {
                            console.log(`Loudspeaker ${isLoudspeakerOn ? 'On' : 'Off'}`);
                        })
                        .catch((error) => {
                            console.error('Error setting sinkId:', error);
                        });
                }
            });
        }

        const buttonFunctions = (id, c = "active") => {
            const index = id.charAt(0).toUpperCase() + id.slice(1); // Convert the button label to title case
            if (checkC(document.getElementById(id), c)) {
                removeC(document.getElementById(id), c);
                document.getElementById(id).innerHTML = `${icons[index][buttonLabels[index][0]]} ${buttonLabels[index][0].charAt(0).toUpperCase() + buttonLabels[index][0].slice(1).replace(/_/g, '')}`;
            } else {
                addC(document.getElementById(id), c);
                document.getElementById(id).innerHTML = `${icons[index][buttonLabels[index][1]]} ${buttonLabels[index][1].charAt(0).toUpperCase() + buttonLabels[index][1].slice(1).replace(/_/g, '')}`;
            }

            if (index === labels[0]) {
                toggleMicMute();
            }
            if (index === labels[2]) {
                toggleLoudspeaker();
            }
        };

        document.getElementById(buttonLabels[labels[0]][0]).addEventListener('click', () => {
            buttonFunctions(buttonLabels[labels[0]][0]);
        });
        document.getElementById(buttonLabels[labels[1]][0]).addEventListener('click', () => {
            buttonFunctions(buttonLabels[labels[1]][0])
        });
        document.getElementById(buttonLabels[labels[2]][0]).addEventListener('click', () => {
            buttonFunctions(buttonLabels[labels[2]][0])
        });
        let styles = document.head.appendChild(document.createElement("style"));
        styles.innerHTML = `
        *{
            font-family: Inter;
        }
        .show-container{
            display: block
        }
        .hide-container{
            display: none
        }
        .container{
            width: 330px;
            height: 540px;
            position: fixed;
            bottom: 80px;
            right: 20px;
            transition: all 1s;
        }
        .innerContainer{
            height: 100%;
            width: 100%;
            background: linear-gradient(135deg, #74D2DB 0%, rgba(179, 229, 234, 0.97) 26.04%, rgba(217, 240, 243, 0.94) 53.65%, rgba(230, 242, 254, 0.90) 100%);
            backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .people{
            display: flex;
            justify-content: space-around;
            align-items: center;
            transition: all 
        }
        .people svg{
            width: 103px;
            height: 70px;
            animation: blinkAnimation 3s linear infinite;
        }
        .people .group{
            position: relative;
            display: flex;
            justify-content: center;
            gap: 10;
            width: 40%;
        }
        .people .group img{
            border: 3px solid white;
            border-radius: 100%;
            height: 50px;
        }
        .people .group img:nth-child(1) {
            position: absolute;
        }
        .people .group .inCallImg{
            position: absolute;
            margin-top: -20%;
            height: 102px
        }
        .callInstruction{
            margin-top: 32px;
            color: #111E25;
            text-align: center;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 50px;
            width: 70%;
        }
        .callActions{
            width: 100%;
            min-height: 50%;
            max-height: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .callActions .call{
            height: 60px;
            Width:60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            cursor: pointer;
        }
        .callActions .call svg{
            height: 40px
        }
        .callActions .make{
            background: linear-gradient(135deg, #61CF8D 0%, #21D9A1 100%);
            animation: bounce 2s infinite;
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0); /* Starting position and return to original position */
            }
            40% {
                transform: translateY(-10px); /* Bounce up */
            }
            60% {
                transform: translateY(-5px); /* Bounce down */
            }
        }
        @keyframes blinkAnimation {
            0% {
              opacity: 1; /* Fully visible */
            }
            50% {
              opacity: 0; /* Completely transparent */
            }
            100% {
              opacity: 1; /* Fully visible again */
            }
          }
        .callActions .make div{
            position: absolute;
            border-radius: 100%;
            background: linear-gradient(135deg, #61CF8D 0%, #21D9A1 100%)
        }
        .callActions .make div:nth-child(1){
            height: 95px;
            width: 95px;
            opacity: .5;
            z-index: -1;
        }
        .callActions .make div:nth-child(2){
            height: 130px;
            width: 130px;
            opacity: .1;
            z-index: -2;
        }
        .callActions .hide{
            display: none;
        }
        .callActions .end{
            margin: auto;
            margin-top: 80px;;
            background-color: #F75254;
            transition: all
        }
        .callActions .end:hover{
            animation: bounce 1.5s ease-in-out;
        }
        .callActions .end svg{
            transform: rotate(130deg);
        }
        .callButtons{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        .callButtons p{
            text-align: center;
            margin: 16px 0px 48px 0px;
        }
        .callButtons .group{
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 30px;
        }
        .callButtons .group .button{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 7px;
            width: 70px;
            height: 70px;
            background-color: #FFFFFF;
            font-size: 12px;
            border-radius: 10px;
            cursor: pointer;
        }
        .callButtons .group .button:hover{
            animation: bounce 1.5s ease-in-out;
        }
        .callButtons .group .active{
            background-color: #ebebeb;
        }
        .callButtons .group .button:hover{
            background-color: #ebebeb;
        }
        .callButtons .group .button svg{
            height: 20px
        }
        .widget_button{
            bottom: 10px;
            right: 10px;
            position: fixed;
            padding: 10px 15px;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25);
            border:0;
            z-index:2147483646;
            text-align: center;
            background-color: #3DAC47;
            transition: all 1s;
            display: flex !important;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: white;
            transition: all 1s
        }
        .widget_button:hover{
            animation: bounce 1.5s ease-in-out;
        }
        .widget_button img{
            height: 25px;
            border-radius: 100%;
        }`;
        //#endregion end event listeners
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
