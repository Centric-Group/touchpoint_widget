((window, document) => {
    const setUp = () => {
        const createDiv = () => {
            const e = document.createElement('div');
            return document.body.appendChild(e), e
        }
        const addI = (e, i) => {
            e.id = i;
            return e
        }

        let buttonDiv = createDiv()
        buttonDiv = addI(buttonDiv, "widget_container")

        let styles = document.head.appendChild(document.createElement("style"));
        styles.innerHTML = `#widget_container{
            position: fixed;
            right: 30px;
            bottom: 30px;
            background-color: #3DAC47;
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
            transform: rotate(0deg);
            transition: all 1s;
        }

        #widget_img.onCall{
            left: 75%;
            transform: rotate(360deg);
        }`

        console.log("Hello World")
    }

    "interactive" == document.readyState || "complete" == document.readyState ? setUp() : document.addEventListener ? document.addEventListener("readystatechange", function () {
        "interactive" == document.readyState && setUp()
    }) : document.attachEvent && document.attachEvent("readystatechange",
        function () {
            "interactive" == document.readyState && setUp()
        }
    )

})(window, document)