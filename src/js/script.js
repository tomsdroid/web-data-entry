// Initialize Element
const sideToggle = document.querySelector("#side_toggle");
const toggleNotify = document.querySelector("#btnNotify");
const credit = document.querySelector(".credit");
let navItems = document.querySelectorAll("ul li");
let qrcode = document.querySelector("#qrcode");
const idCard = document.querySelectorAll(".idcard");
const btnAdd = document.querySelectorAll("#btnAdd");
const btnSearch = document.querySelector("#btnSearch");

// Functions
function navigateActive() {
    navItems.forEach(items => {
        items.classList.remove("active");
        this.classList.add("active");

        // Logic click sidebar
        if (
            this.querySelector(".link_name").textContent.toLowerCase() ===
            "dashboard"
        ) {
            document.querySelector("#titleApp").innerText = "Data Entry";
            document.querySelector("#rootContent").innerHTML = Dashboard();
        } else if (
            this.querySelector(".link_name").textContent.toLowerCase() ===
            "customers"
        ) {
            document.querySelector("#titleApp").innerText = "Data Entry";
            document.querySelector("#rootContent").innerHTML = Customers();
            document
                .querySelector("#btnSearch")
                .addEventListener("click", e => {
                    const query = prompt("Name | Email: ");

                    console.log(`Search: ${query.toLowerCase()}`);
                });

            document.querySelector("#btnAdd").addEventListener("click", e => {
                document.querySelector("#rootContent").innerHTML = addNew();
            });
        } else if (
            this.querySelector(".link_name").textContent.toLowerCase() ===
            "subscriptions"
        ) {
            document.querySelector("#titleApp").innerText = "Data Entry";
            document.querySelector("#rootContent").innerHTML = Subscriptions();
            document
                .querySelector("#btnSearch")
                .addEventListener("click", e => {
                    const query = prompt("Name | Email: ");

                    console.log(`Search: ${query.toLowerCase()}`);
                });

            document.querySelector("#btnAdd").addEventListener("click", e => {
                document.querySelector("#rootContent").innerHTML = addNew();
            });
        }
    });
}
navItems.forEach(elem => {
    elem.addEventListener("click", navigateActive);
});

function cardOpen() {
    idCard.forEach(items => {
        items.classList.remove("open");
        this.classList.add("open");
    });
}

if (idCard.length >= 4) {
    alert("ID CARD YANG MUNCUL lebih DARI SAMA DENGAN 4");
    document.querySelector(".detail-box").style.justifyContent = "space-around";
}

idCard.forEach(elem => {
    elem.addEventListener("click", cardOpen);
});

// Credits
credit.innerHTML = `<p class="josefin" id="credit">Design by: <a href="instagram.com/tomsdroid" target="_blank">@tomsdroid</a></p>`;

// Event Keyboard
document.addEventListener("keydown", evt => {
    // Reset Event
    // evt.preventDefault();
    // Sidebar Trigger
    if (evt.ctrlKey && evt.key === "b") {
        document.querySelector(".sidebar").classList.toggle("open");

        // New Customers Form Trigger
    } else if (evt.ctrlKey && evt.key === "n") {
        document.querySelector("#rootContent").innerHTML = addNew();

        // Search Box Trigger
    } else if (evt.ctrlKey && evt.key === "k") {
        document.querySelector("#searchBox").focus();

        // Sidebar Trigger List
    } else if ((evt.ctrlKey && evt.key === "d") || evt.key === "1") {
        document.querySelector("#titleApp").innerText = "Data Entry";
        document.querySelector("#dashList").classList.add("active");
        document.querySelector("#custList").classList.remove("active");
        document.querySelector("#subsList").classList.remove("active");
        document.querySelector("#rootContent").innerHTML = Dashboard();
    } else if ((evt.ctrlKey && evt.key === "c") || evt.key === "2") {
        document.querySelector("#titleApp").innerText = "Data Entry";
        document.querySelector("#dashList").classList.remove("active");
        document.querySelector("#custList").classList.add("active");
        document.querySelector("#subsList").classList.remove("active");
        document.querySelector("#rootContent").innerHTML = Customers();
        document.querySelector("#btnSearch").addEventListener("click", e => {
            const query = prompt("Name | Email: ");

            console.log(`Search: ${query.toLowerCase()}`);
        });

        document.querySelector("#btnAdd").addEventListener("click", e => {
            document.querySelector("#rootContent").innerHTML = addNew();
        });
    } else if ((evt.ctrlKey && evt.key === "s") || evt.key === "3") {
        document.querySelector("#titleApp").innerText = "Data Entry";
        document.querySelector("#dashList").classList.remove("active");
        document.querySelector("#custList").classList.remove("active");
        document.querySelector("#subsList").classList.add("active");
        document.querySelector("#rootContent").innerHTML = Subscriptions();
        document.querySelector("#btnSearch").addEventListener("click", e => {
            const query = prompt("Name | Email: ");

            console.log(`Search: ${query.toLowerCase()}`);
        });

        document.querySelector("#btnAdd").addEventListener("click", e => {
            document.querySelector("#rootContent").innerHTML = addNew();
        });
    }
});
// Event
sideToggle.addEventListener("click", e => {
    document.querySelector(".sidebar").classList.toggle("open");
});

// Layout Dashboard
function Dashboard() {
    return `
    <h1 class="ubuntu" id="nameSection">Dashboard</h1>
                <div class="absolute">
                    <div class="sinopsis">
                        <div class="box-card_info">
                            <div class="card_info">
                                <div class="inner-card">
                                    <div class="text-info">
                                        <p>Current Customers</p>
                                        <h1 class="ubuntu">
                                            0<span>cust</span>
                                        </h1>
                                    </div>
                                    <i class="bx bx-group"></i>
                                </div>
                            </div>
                        </div>
                        <div class="box-card_info">
                            <div class="card_info">
                                <div class="inner-card new_s">
                                    <div class="text-info">
                                        <p>Current Subscriptions</p>
                                        <h1 class="ubuntu">
                                            0<span>subs</span>
                                        </h1>
                                    </div>
                                    <i class="bx bx-id-card"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Card Detail New Customer & Subscription -->
                    <h1 class="poppins">Latest Customer Data</h1>
                    <div class="detail-box">
                        <div class="idcard">
                            <div class="idcard-front">
                                <i class="bx bxs-user"></i>
                                <h1 class="josefin">CUSTOMER</h1>
                            </div>
                            <div class="idcard-back">
                                <h5 class="josefin">CUSTOMER</h5>
                                <div class="divider"></div>
                                <p>Name: <span>John Doe</span></p>
                                <p>E-mail: <span>johndoe@example.com</span></p>
                                <p>Phone Number: <span>085888291032</span></p>
                                <p>Status: <span>Active</span></p>
                                <p>Joined: <span>3 minute ago</span></p>
                            </div>
                        </div>
                        <div class="idcard premium">
                            <div class="idcard-front">
                                <img src="./de.png" alt="Logo" width="30" />
                                <div id="serialNumber">1637520</div>
                                <span>Design by: @tomsdroid</span>
                                <i class="bx bxs-user"></i>
                                <h1 class="josefin">CUSTOMER SUBSCRIPTION</h1>
                            </div>
                            <div class="idcard-back">
                                <h5 class="josefin">CUSTOMER SUBSCRIPTION</h5>
                                <div class="divider"></div>
                                <p>Name: <span>Nicholas Gonzales</span></p>
                                <p>
                                    E-mail: <span>nicholas@nichzales.com</span>
                                </p>
                                <p>Phone Number: <span>0878239800381</span></p>
                                <p>Status: <span>Active</span></p>
                                <p class="ubuntu">3 minute ago</p>
                            </div>
                        </div>
                    </div>
                </div>`;
}

// Customers Layout
function Customers() {
    return `
    <section class="customer__section">
                    <div class="title__box">
                        <h1 class="poppins">Customers</h1>
                        <div class="action__box">
                            <!-- Search -->
                            <div class="search_box">
                                <form
                                    action=""
                                    method="get"
                                    accept-charset="utf-8"
                                >
                                    <input
                                        type="text"
                                        name="search"
                                        id="searchBox"
                                        placeholder="Search..."
                                    />
                                    <label for="searchBox" id="searchToggle">
                                        <code class="shortcut">ctrl + k</code>
                                    </label>
                                </form>
                            </div>

                            <!-- Add Button-->
                            <div class="btn-add">
                                <i class="bx bx-plus"></i>
                                <span class="btn-add__text ubuntu"
                                    >Add Data</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="title_sm_box">
                        <h1 class="poppins">Customers</h1>
                        <div class="action__box">
                            <!-- Search -->
                            <div class="btn-action search" id="btnSearch">
                                <i class="bx bx-search"></i>
                            </div>

                            <!-- Add Button-->
                            <div class="btn-action add" id="btnAdd">
                                <i class="bx bx-plus"></i>
                            </div>
                        </div>
                    </div>
                    <!-- Card Data -->
                    <div class="detail-box">
                        <div class="idcard">
                            <div class="idcard-front">
                                <i class="bx bxs-user"></i>
                                <h1 class="josefin">CUSTOMER</h1>
                            </div>
                            <div class="idcard-back">
                                <h5 class="josefin">CUSTOMER</h5>
                                <div class="divider"></div>
                                <p>Name: <span>[fullname]</span></p>
                                <p>E-mail: <span>[email]</span></p>
                                <p>Phone Number: <span>[phone]</span></p>
                                <p>Status: <span>[status]</span></p>
                                <p>Subscription: <span>-</span></p>
                                <p>Joined: <span>3 minute ago</span></p>
                            </div>
                        </div>
                        <div class="idcard premium">
                            <div class="idcard-front">
                                <img src="./de.png" alt="Logo" width="30" />
                                <div id="serialNumber">1637520</div>
                                <i class="bx bxs-user"></i>
                                <h1 class="josefin">CUSTOMER SUBSCRIPTION</h1>
                                <span class="ubuntu"
                                    >Design by: @tomsdroid</span
                                >
                            </div>
                            <div class="idcard-back">
                                <h5 class="josefin">CUSTOMER SUBSCRIPTION</h5>
                                <div class="divider"></div>
                                <p>Name: <span>[fullname]</span></p>
                                <p>E-mail: <span>[email]</span></p>
                                <p>Phone Number: <span>[phone]</span></p>
                                <p>Status: <span>[status]</span></p>
                                <p class="ubuntu">3 minute ago</p>
                            </div>
                        </div>
                    </div>
                </section>`;
}

// Subscriptions Layout
function Subscriptions() {
    return `
    <section class="customer__section">
                    <div class="title__box">
                        <h1 class="poppins">Subscriptions</h1>
                        <div class="action__box">
                            <!-- Search -->
                            <div class="search_box">
                                <form
                                    action=""
                                    method="get"
                                    accept-charset="utf-8"
                                >
                                    <input
                                        type="text"
                                        name="search"
                                        id="searchBox"
                                        placeholder="Search..."
                                    />
                                    <label for="searchBox" id="searchToggle">
                                        <code class="shortcut">ctrl + k</code>
                                    </label>
                                </form>
                            </div>

                            <!-- Add Button-->
                            <div class="btn-add">
                                <i class="bx bx-plus"></i>
                                <span class="btn-add__text ubuntu"
                                    >Add Data</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="title_sm_box">
                        <h1 class="poppins">Subscriber</h1>
                        <div class="action__box">
                            <!-- Search -->
                            <div class="btn-action search" id="btnSearch">
                                <i class="bx bx-search"></i>
                            </div>

                            <!-- Add Button-->
                            <div class="btn-action add" id="btnAdd">
                                <i class="bx bx-plus"></i>
                            </div>
                        </div>
                    </div>
                    <!-- Card Data -->
                    <div class="detail-box">
                        <div class="idcard">
                            <div class="idcard-front">
                                <i class="bx bxs-user"></i>
                                <h1 class="josefin">CUSTOMER</h1>
                            </div>
                            <div class="idcard-back">
                                <h5 class="josefin">CUSTOMER</h5>
                                <div class="divider"></div>
                                <p>Name: <span>[fullname]</span></p>
                                <p>E-mail: <span>[email]</span></p>
                                <p>Phone Number: <span>[phone]</span></p>
                                <p>Status: <span>[status]</span></p>
                                <p>Subscription: <span>-</span></p>
                                <p>Joined: <span>3 minute ago</span></p>
                            </div>
                        </div>
                        <div class="idcard premium">
                            <div class="idcard-front">
                                <img src="./de.png" alt="Logo" width="30" />
                                <div id="serialNumber">1637520</div>
                                <i class="bx bxs-user"></i>
                                <h1 class="josefin">CUSTOMER SUBSCRIPTION</h1>
                                <span class="ubuntu"
                                    >Design by: @tomsdroid</span
                                >
                            </div>
                            <div class="idcard-back">
                                <h5 class="josefin">CUSTOMER SUBSCRIPTION</h5>
                                <div class="divider"></div>
                                <p>Name: <span>[fullname]</span></p>
                                <p>E-mail: <span>[email]</span></p>
                                <p>Phone Number: <span>[phone]</span></p>
                                <p>Status: <span>[status]</span></p>
                                <p class="ubuntu">3 minute ago</p>
                            </div>
                        </div>
                    </div>
                </section>`;
}

// Add New Layout
function addNew() {
    document.querySelector("#titleApp").innerText = "Add New Data";
    return `
    <section class="add-cust_section">
                    <div class="add-cust__box">
                        <div class="add-cust__header">
                            <img src="./de.png" alt="Logo DE" width="65" />
                            <h1 class="poppins">Data Entry</h1>
                        </div>
                        <form method="post" accept-charset="utf-8">
                            <div class="form-input">
                                <label for="fullnameInput">Fullname</label>
                                <input
                                    type="text"
                                    name="fullusername"
                                    id="fullnameInput"
                                    autofocus
                                    placeholder="John Doe"
                                />
                            </div>
                            <div class="form-input">
                                <label for="emailInput">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="emailInput"
                                    placeholder="johndoe@example.com"
                                />
                            </div>
                            <div class="form-input">
                                <label for="phoneInput">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phoneInput"
                                    placeholder="858xxxxxx"
                                />
                            </div>
                            <div class="form-input">
                                <label for="custSelect">Select one</label>
                                <select name="custSelect" id="custSelect">
                                    <option value="--">--</option>
                                    <option value="Customers">Customers</option>
                                    <option value="Subscriptions">
                                        Subscriptions
                                    </option>
                                </select>
                            </div>
                            <div class="form-input">
                                <button
                                    class="login__btn ubuntu"
                                    type="submit"
                                    name="login"
                                >
                                    Add Data
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
    `;
}
