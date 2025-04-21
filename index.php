<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Data Entry App</title>

        <!-- Customize Styling -->
        <link
            rel="stylesheet"
            href="./src/css/style.css"
            type="text/css"
            media="all"
        />
        <!-- End Customize Styling -->

        <!-- CDN Box Icons -->
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
        />
        <!-- End CDN Box Icons -->
        <!-- Faviocon -->
        <link rel="shortcut icon" href="./de.png" type="image/x-icon" />
        <!-- Faviocon -->
        <!-- QRCode -->
        <script
            src="./lib/qrcode/qrcode.js"
            type="text/javascript"
            charset="utf-8"
        ></script>
        <!-- QRCode -->
    </head>
    <body>
        <!-- Dashboard Section -->
        <!-- Sidebar -->
        <aside class="sidebar">
            <ul class="nav_item">
                <li class="active" id="dashList">
                    <i class="bx bx-bar-chart-square"></i>
                    <span class="link_name">Dashboard</span>
                </li>
                <li id="custList">
                    <i class="bx bx-group"></i>
                    <span class="link_name">Customers</span>
                </li>
                <li id="subsList">
                    <i class="bx bx-coffee"></i>
                    <span class="link_name">Subscriptions</span>
                </li>
            </ul>
            <div class="credit"></div>
            <div class="side_toggle" id="side_toggle">
                <i class="bx bx-menu-alt-left"></i>
                <i class="bx bx-x"></i>
            </div>
        </aside>
        <!-- Sidebar -->
        <!-- Section Main -->
        <section class="main" id="main">
            <!-- Header -->
            <header>
                <div class="left_header">
                    <h2 id="titleApp">Data Entry</h2>
                </div>
                <div class="right_header">
                    <!-- Notify -->
                    <!-- <div class="notify_box" id="btnNotify">
                        <i class="bx bxs-bell"></i>
                        <span class="amount_notify">0</span>
                        <div class="box-container_notify">
                            <div class="notify_message">
                                <i class="bx bx-group cust"></i>
                                <div class="notify-title">
                                    <h4>New Customer: <br />[username]</h4>
                                </div>
                            </div>
                            <div class="notify_message">
                                <i class="bx bx-coffee subs"></i>
                                <div class="notify-title">
                                    <h4>
                                        New Subscription: <br />
                                        [username]
                                    </h4>
                                </div>
                            </div>
                            <div class="notify_message">
                                <i class="bx bx-group cust"></i>
                                <div class="notify-title">
                                    <h4>New Customer: <br />[username]</h4>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- Notify -->
                    <div class="btn-login_box">
                        <i class="bx bx-log-out"></i>
                        <span class="__login-text">Logout</span>
                    </div>
                    <!-- Jika Berhasil Login -->
                    <!-- <div class="img_profile_box" role="button">
                        <div class="profile_name_role">
                            <p class="user_name">Aura Gears ID</p>
                            <sub class="user_role">Administrator</sub>
                        </div>
                        <img src="./de.png" alt="User Profile" width="40" />
                    </div> -->
                </div>
            </header>
            <!-- Header -->
            <!-- Main -->
            <main id="rootContent">
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
                </div>
            </main>
            <!-- Main -->
        </section>
        <!-- End Section Main -->
        <!-- Dashboard Section -->
        <!-- Script's -->
        <script
            src="./src/js/script.js"
            type="text/javascript"
            charset="utf-8"
        ></script>
    </body>
</html>
