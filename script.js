let buttonHTML ='';
console.log('console open');
const button = document.getElementById('js-hero-btn');
const output = document.getElementById('js-page');
const signupButton = document.querySelector('.js-signup-btn');
const inputValue = document.getElementById("js-search-input");

button.addEventListener('click', () => {
    const searchedNumber = inputValue.value;
    console.log(`value:, ${searchedNumber}`);
    if (searchedNumber.match(/\d/g).length === 10) {
        const buttonHTML=`
        <!-- navbar section starts -->
    <section class="navbar-section">
        <div class="container">
            <nav class="navbar sticky-top navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/index.html">
                        <img src="/assets/images/logo.png" alt="Bootstrap">
                    </a>
                <button class="navbar-toggler" type="button" data-bs-theme="dark" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ms-auto me-0" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Home
                        </a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="index.html">Home-One</a></li>
                        <li><a class="dropdown-item" href="#">Home-Two</a></li>
                        <li><a class="dropdown-item" href="#">Home-Three</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Broker Reviews
                        </a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Service Details</a></li>
                        <li><a class="dropdown-item" href="#">Blog Details</a></li>
                        <li><a class="dropdown-item" href="#">Case Study</a></li>
                        <li><a class="dropdown-item" href="#">Case Study Details</a></li>
                        <li><a class="dropdown-item" href="#">Our Team</a></li>
                        <li><a class="dropdown-item" href="#">Team Details</a></li>
                        <li><a class="dropdown-item" href="#">Pricing Plans</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tools
                        </a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Find My Broker</a></li>
                        <li><a class="dropdown-item" href="#">Compare Brokers</a></li>
                        <li><a class="dropdown-item" href="#">Stock Fee Calculator</a></li>
                        <li><a class="dropdown-item" href="#">FX Fee Calculator</a></li>
                        <li><a class="dropdown-item" href="#">Our Team</a></li>
                        <li><a class="dropdown-item" href="#">Team Details</a></li>
                        <li><a class="dropdown-item" href="#">Pricing Plans</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                        </a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Service Details</a></li>
                        <li><a class="dropdown-item" href="#">Blog Details</a></li>
                        <li><a class="dropdown-item" href="#">Case Study</a></li>
                        <li><a class="dropdown-item" href="#">Case Study Details</a></li>
                        <li><a class="dropdown-item" href="#">Our Team</a></li>
                        <li><a class="dropdown-item" href="#">Team Details</a></li>
                        <li><a class="dropdown-item" href="#">Pricing Plans</a></li>
                        </ul>
                    </li>                    
                    </ul>
                    <form style="padding-left: 1rem;">
                        <button class="btn btn-outline-success me-2" type="button">Match Me &rarr;</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    </section>
    <!-- navbar section ends -->
    
    <!-- hero section starts -->
    <section class="click-hero-section">
        <div class="container">
            <div class="row">
                <h2 class="section-header">Style 1</h2>
                <p class="section-content">Home > Best Brokers > <span class="yellow-text">Style 1</span></p>
            </div>
            
        </div>
    </section>
    <!-- hero section ends -->
    
    <!-- filter section starts -->
     <section class="click-filter-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3 filter-box-outline">
                    <div class="filter-box">
                        <h4 class="section-header">
                            Filter
                        </h4>
                        <div class="filter-search-btn">
                            <input type="search" name="filter-search" id="filter-search" placeholder="Search">
                            <a href="#" class="search-icon-link">
                                <button class="search-icon-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </a>  
                        </div>
                        <h5>
                            Types Of Categories
                        </h5>
                        <div class="filter-checkboxes">
                            <form action="#">
                                <div>
                                    <input type="checkbox" id="filter1" name="filter1" value="for beginners"><label for="filter1">Best Brokers For Beginners</label>
                                    <p class="filter-numbers">3215</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter2" name="filter2" value="forex"><label for="filter2">Best Forex Brokers</label>
                                    <p class="filter-numbers">152</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter3" name="filter3" value="for stock"><label for="filter3">Best Brokers For Stocks</label>
                                    <p class="filter-numbers">321</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter4" name="filter4" value="for CFD"><label for="filter4">Best Brokers For CFD</label>
                                    <p class="filter-numbers">4645</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter5" name="filter5" value="for futures"><label for="filter5">Best Brokers For Futures</label>
                                    <p class="filter-numbers">6565</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter6" name="filter6" value="for options"><label for="filter6">Best Brokers For Options</label>
                                    <p class="filter-numbers">465</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter7" name="filter7" value="for crypto"><label for="filter7">Best Brokers For Crypto</label>
                                    <p class="filter-numbers">445</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter8" name="filter8" value="for goods"><label for="filter8">Best Brokers For Goods</label>
                                    <p class="filter-numbers">45</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter9" name="filter9" value="for discount"><label for="filter9">Best Discount Brokers</label>
                                    <p class="filter-numbers">4</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="filter10" name="filter10" value="for bonds"><label for="filter10">Best Brokers For Bonds</label>
                                    <p class="filter-numbers">447575</p>
                                </div>
                                <div>
                                    <a href="#" class="see-all-btn">See All &rarr;</a>
                                </div>
                            </form>
                        </div>
                        <div class="star-category">
                            <h5>Star Category</h5>
                            <form action="#">
                                <div>
                                    <input type="checkbox" id="star5" name="star5" value="5 stars"><label for="star5"> <span style="color: #FDB926;"> &#9733;</span> 5 star</label>
                                    <p class="filter-numbers">465</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="star4" name="star4" value="4 stars"><label for="star4"> <span style="color: #FDB926;"> &#9733;</span> 4 star</label>
                                    <p class="filter-numbers">446</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="star3" name="star3" value="3 stars"><label for="star3"> <span style="color: #FDB926;"> &#9733;</span> 3 star</label>
                                    <p class="filter-numbers">45468</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="star2" name="star2" value="2 stars"><label for="star2"> <span style="color: #FDB926;"> &#9733;</span> 2 star</label>
                                    <p class="filter-numbers">448</p>
                                </div>
                                <div>
                                    <input type="checkbox" id="star1" name="star1" value="1 stars"><label for="star1"> <span style="color: #FDB926;"> &#9733;</span> 1 star</label>
                                    <p class="filter-numbers">5964</p>
                                </div>
                                
                            </form>
                        </div>
                        <div class="filter-tags">
                            <h5>Popular Tags</h5>
                            <div class="popular-tags-buttons">
                                <button class="tags-btn">Stock Brokers</button>
                                <button class="tags-btn">Forex Brokers</button>
                                <button class="tags-btn">CFD brokers</button>
                                <button class="tags-btn">Discount Brokers</button>
                                <button class="tags-btn">Future Brokers</button>
                                <button class="tags-btn">Crypto Brokers</button>
                                <div style="padding-top: 2rem;">
                                    <a href="#" class="more-tag-btn">More Tag &rarr;</a>
                                </div>
    
                            </div>
                        </div>
                        <div class="reset-filter-btn">
                            <button class="btn"><i class="fa-solid fa-arrow-rotate-right"></i> Reset filters</button>
                        </div>
    
                    </div>
                </div>
                <div class="col-lg-8 mt-5">
                    <div class="row">
                        <div class="row d-flex">
                            <div class="col-md-6"><p>Showing 1-8 of 100 results</p></div>
                            <div class="col-md-6 d-flex align-items-center justify-content-end">
                                <p style="margin: 0.5rem 0;">Sort By:</p>
                                <select class="form-select sort-select" aria-label="Default select example">
                                    <option selected>Oldest</option>
                                    <option value="1">Newest</option>
                                </select>
                            </div>
                            
                        </div>
                        <div class="col-md-6">
                            <div style="background-color: aliceblue; padding: 1rem; margin-top: 1rem; border-radius: 20px;">
                                <div class="brokers-item">
                                    <div class="brokers-header d-flex">
                                        <figure>
                                            <img src="/assets/images/investment-1.png" alt="broker logo">
                                        </figure>
                                        <div style="margin-left: 1rem;">
                                            <h3>Fidelity Investments</h3>
                                            <p><span style="color: #FDB926; font-size: 1.3rem;">&#x2605;</span> <strong>4.9</strong>/5 &nbsp;<i class="fa-regular fa-bookmark"></i> Save Wishlist's</p>
                                        </div>          
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-6">
                                            <p>Fee Level</p>
                                            <p>Inactivity Fee</p>
                                            <p>Investor Protection</p>
                                            <p>Mobile Platform</p>
                                        </div>
                                        <div class="col-6 ms-auto">
                                            <p>Low <span style="color: burlywood;">4.5</span>/5</p>
                                            <p>No</p>
                                            <p>No</p>
                                            <p>Yes <span style="color: burlywood;">4.7</span>/5</p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="tool-btn pt-3">
                                        <button class="btn btn-outline-success me-2" type="button">Visit Broker &rarr;</button>
                                    </div>
                                    <div class="tool-btn2 pt-3">
                                        <button class="btn btn-outline-success white-btn me-2" type="button">Details Review &rarr;</button>
                                    </div>                         
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div style="background-color: aliceblue; padding: 1rem; margin-top: 1rem; border-radius: 20px;">
                                <div class="brokers-item">
                                    <div class="brokers-header d-flex">
                                        <figure>
                                            <img src="/assets/images/investment-1.png" alt="broker logo">
                                        </figure>
                                        <div style="margin-left: 1rem;">
                                            <h3>Fidelity Investments</h3>
                                            <p><span style="color: #FDB926; font-size: 1.3rem;">&#x2605;</span> <strong>4.9</strong>/5 &nbsp;<i class="fa-regular fa-bookmark"></i> Save Wishlist's</p>
                                        </div>          
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-6">
                                            <p>Fee Level</p>
                                            <p>Inactivity Fee</p>
                                            <p>Investor Protection</p>
                                            <p>Mobile Platform</p>
                                        </div>
                                        <div class="col-6 ms-auto">
                                            <p>Low <span style="color: burlywood;">4.5</span>/5</p>
                                            <p>No</p>
                                            <p>No</p>
                                            <p>Yes <span style="color: burlywood;">4.7</span>/5</p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="tool-btn pt-3">
                                        <button class="btn btn-outline-success me-2" type="button">Visit Broker &rarr;</button>
                                    </div>
                                    <div class="tool-btn2 pt-3">
                                        <button class="btn btn-outline-success white-btn me-2" type="button">Details Review &rarr;</button>
                                    </div>                         
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div style="background-color: aliceblue; padding: 1rem; margin-top: 1rem; border-radius: 20px;">
                                <div class="brokers-item">
                                    <div class="brokers-header d-flex">
                                        <figure>
                                            <img src="/assets/images/investment-1.png" alt="broker logo">
                                        </figure>
                                        <div style="margin-left: 1rem;">
                                            <h3>Fidelity Investments</h3>
                                            <p><span style="color: #FDB926; font-size: 1.3rem;">&#x2605;</span> <strong>4.9</strong>/5 &nbsp;<i class="fa-regular fa-bookmark"></i> Save Wishlist's</p>
                                        </div>          
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-6">
                                            <p>Fee Level</p>
                                            <p>Inactivity Fee</p>
                                            <p>Investor Protection</p>
                                            <p>Mobile Platform</p>
                                        </div>
                                        <div class="col-6 ms-auto">
                                            <p>Low <span style="color: burlywood;">4.5</span>/5</p>
                                            <p>No</p>
                                            <p>No</p>
                                            <p>Yes <span style="color: burlywood;">4.7</span>/5</p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="tool-btn pt-3">
                                        <button class="btn btn-outline-success me-2" type="button">Visit Broker &rarr;</button>
                                    </div>
                                    <div class="tool-btn2 pt-3">
                                        <button class="btn btn-outline-success white-btn me-2" type="button">Details Review &rarr;</button>
                                    </div>                         
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div style="background-color: aliceblue; padding: 1rem; margin-top: 1rem; border-radius: 20px;">
                                <div class="brokers-item">
                                    <div class="brokers-header d-flex">
                                        <figure>
                                            <img src="/assets/images/investment-1.png" alt="broker logo">
                                        </figure>
                                        <div style="margin-left: 1rem;">
                                            <h3>Fidelity Investments</h3>
                                            <p><span style="color: #FDB926; font-size: 1.3rem;">&#x2605;</span> <strong>4.9</strong>/5 &nbsp;<i class="fa-regular fa-bookmark"></i> Save Wishlist's</p>
                                        </div>          
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-6">
                                            <p>Fee Level</p>
                                            <p>Inactivity Fee</p>
                                            <p>Investor Protection</p>
                                            <p>Mobile Platform</p>
                                        </div>
                                        <div class="col-6 ms-auto">
                                            <p>Low <span style="color: burlywood;">4.5</span>/5</p>
                                            <p>No</p>
                                            <p>No</p>
                                            <p>Yes <span style="color: burlywood;">4.7</span>/5</p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="tool-btn pt-3">
                                        <button class="btn btn-outline-success me-2" type="button">Visit Broker &rarr;</button>
                                    </div>
                                    <div class="tool-btn2 pt-3">
                                        <button class="btn btn-outline-success white-btn me-2" type="button">Details Review &rarr;</button>
                                    </div>                         
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div style="background-color: aliceblue; padding: 1rem; margin-top: 1rem; border-radius: 20px;">
                                <div class="brokers-item">
                                    <div class="brokers-header d-flex">
                                        <figure>
                                            <img src="/assets/images/investment-1.png" alt="broker logo">
                                        </figure>
                                        <div style="margin-left: 1rem;">
                                            <h3>Fidelity Investments</h3>
                                            <p><span style="color: #FDB926; font-size: 1.3rem;">&#x2605;</span> <strong>4.9</strong>/5 &nbsp;<i class="fa-regular fa-bookmark"></i> Save Wishlist's</p>
                                        </div>          
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-6">
                                            <p>Fee Level</p>
                                            <p>Inactivity Fee</p>
                                            <p>Investor Protection</p>
                                            <p>Mobile Platform</p>
                                        </div>
                                        <div class="col-6 ms-auto">
                                            <p>Low <span style="color: burlywood;">4.5</span>/5</p>
                                            <p>No</p>
                                            <p>No</p>
                                            <p>Yes <span style="color: burlywood;">4.7</span>/5</p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="tool-btn pt-3">
                                        <button class="btn btn-outline-success me-2" type="button">Visit Broker &rarr;</button>
                                    </div>
                                    <div class="tool-btn2 pt-3">
                                        <button class="btn btn-outline-success white-btn me-2" type="button">Details Review &rarr;</button>
                                    </div>                         
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div style="background-color: aliceblue; padding: 1rem; margin-top: 1rem; border-radius: 20px;">
                                <div class="brokers-item">
                                    <div class="brokers-header d-flex">
                                        <figure>
                                            <img src="/assets/images/investment-1.png" alt="broker logo">
                                        </figure>
                                        <div style="margin-left: 1rem;">
                                            <h3>Fidelity Investments</h3>
                                            <p><span style="color: #FDB926; font-size: 1.3rem;">&#x2605;</span> <strong>4.9</strong>/5 &nbsp;<i class="fa-regular fa-bookmark"></i> Save Wishlist's</p>
                                        </div>          
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-6">
                                            <p>Fee Level</p>
                                            <p>Inactivity Fee</p>
                                            <p>Investor Protection</p>
                                            <p>Mobile Platform</p>
                                        </div>
                                        <div class="col-6 ms-auto">
                                            <p>Low <span style="color: burlywood;">4.5</span>/5</p>
                                            <p>No</p>
                                            <p>No</p>
                                            <p>Yes <span style="color: burlywood;">4.7</span>/5</p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="tool-btn pt-3">
                                        <button class="btn btn-outline-success me-2" type="button">Visit Broker &rarr;</button>
                                    </div>
                                    <div class="tool-btn2 pt-3">
                                        <button class="btn btn-outline-success white-btn me-2" type="button">Details Review &rarr;</button>
                                    </div>                         
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div class="row pagination-symbols">
                        <a href="#">&lt;</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">...</a>
                        <a href="#">&gt;</a>
                    </div>
                </div>
    
            </div>
        </div>
     </section>
     <!-- filter section ends -->
    
    <!-- footer section starts -->
    <section class="footer-section">
        <div class="container">
            <div class="row section-header">
                <div class="col-lg-3">
                    <figure>
                        <img src="/assets/images/logo.png" alt="company logo">
                    </figure>
                </div>
                <div class="col-lg-6">
                    <h3>Get In Touch With Support Team</h3>
                </div>
                <div class="col-lg-3">
                    <form style="padding-left: 1rem;">
                        <button class="btn btn-outline-success me-2" type="button">Contact Us &rarr;</button>
                    </form>
                </div>
            </div>
            <div class="row mt-5 d-flex justify-content-center">
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="footer-links">
                        <h4>Contact</h4>
                        <p><i class="fa-solid fa-phone"></i> (316) 555-0116</p>
                        <p><i class="fa-regular fa-envelope-open"></i> info@brokr.com</p>
                        <p><i class="fa-solid fa-location-dot"></i> 123 Main Street, City, Country</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="footer-links">
                        <h4>Quick Link</h4>
                        <ul class="list-unstyled footer-list">
                            <li class="d-flex">
                                <a href="#">Home</a>
                            </li>
                            <li class="d-flex">
                                <a href="#">About Us</a>
                            </li>
                            <li class="d-flex">
                                <a href="#">Broker Comparision</a>
                            </li>
                            <li class="d-flex">
                                <a href="#">fAQs</a>
                            </li>
                            <li class="d-flex">
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="footer-links">
                        <h4>More Link</h4>
                        <ul class="list-unstyled footer-list">
                            <li class="d-flex">
                                <a href="#">Help & Support</a>
                            </li>
                            <li class="d-flex">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li class="d-flex">
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li class="d-flex">
                                <a href="#">Contact Us</a>
                            </li>
                            <li class="d-flex">
                                <a href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="footer-links">
                        <h4>Newsletter</h4>
                    <p>Subscribe our newsletter to get our latest update & news</p>
                    <form class="footer-email" action="submit">
                        <input type="email" placeholder="Email Address">
                        <button class="btn btn-outline-success me-2" type="button"><i class="fa-regular fa-paper-plane"></i></button>
                    </form>
                    </div>
                    
                </div>
            </div>
            <hr class="mt-5">
            <div class="row footer-copyright">
                <div class="col-lg-6">
                    <p style="font-size: 1.1rem;">Copyright © 2024 <span style="color: #FDB926;">BrokR</span>. All rights reserved.</p>
                </div>
                <div class="col-lg-6 footer-icons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-twitch"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    </section>
    <!-- footer section ends -->
        `;
        output.innerHTML = buttonHTML;
    } 
    else {
        alert('enter a 10 digit number');
    }
})
signupButton.addEventListener('click' , () => {
    window.location.href = "signup.html"
})
  