const nav = document.querySelector(".TopBar");
            const nav1 = document.querySelector(".whiteBtn");
            const btn = document.querySelector(".dots");
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                let currentScrollPos = window.pageYOffset;
                if (currentScrollPos < 50) {
                    nav.classList.add("navHide");
                    btn.classList.add("whiteBtn");
                    nav1.classList.remove("navHide");
                } else     {
                    nav.classList.remove("navHide");
                    btn.classList.remove("whiteBtn");
                    nav1.classList.add("navHide");
                }
                prevScrollpos = currentScrollPos;
            }
            document.getElementById("overlay").addEventListener("click", function(e) {
                e = window.event || e; 
                if(this === e.target) {
                    document.getElementById("overlay").style.display = "none";
                }
            });
            function on(){
                document.getElementById("overlay").style.display = "block";
            }
            function off(){
                document.getElementById("overlay").style.display = "none";
            }
            const copyButton = document.querySelector("#copy");
            let greenText = document.querySelector("#copybtn");
            copyButton.addEventListener("click" , () => {
                const text = "https://venerable-medovik-c380bd.netlify.app/";
                navigator.clipboard.writeText(text);
                greenText.innerHTML = "Copied!";
                greenText.style.color = "green";
                setTimeout(() => greenText.innerHTML = "Copy", 1100);
                setTimeout(() => greenText.style.color = "black", 1100);
            });