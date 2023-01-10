import React from 'react';
import check from '..//SingleProductPage/CheckOut.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, Box } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CheckoutPage() {
  const nav = useNavigate();
  const [loginStatus, setLoginStatus] = useState('');

  const handlePlaceholder = () => {
    // alert('Order Placed Successfully!');
    // setLoginStatus('success');
    notify('Order Placed Successfully!');

    setTimeout(() => {
      localStorage.removeItem('Products');
      nav('/');
    }, 2000);
  };
  let [item, setItem] = useState({
    category_id: 3,
    category_name: 'mobiles',
    delivery_type: 'Free delivery',
    description: 'realme 9 (Stargaze White, 128 GB)',
    discount: 40,
    hidden_stars: 4.3,
    image: 'https://i.ibb.co/6bZc0zJ/f6b32d514024.jpg',
    item_id: 1,
    new_price: 1799,
    offer: '₹16,750',
    offer2: ' Off on Exchange',
    old_price: 2999,
    quantity: 1,
    ratings: '4,161 Ratings ',
    reviews: ' 310 Reviews',
    stars: 4.3,
    warranty: '',
  });
  // let [quantity,setQuantity]=useState(1);
  function decreament(q) {
    if (q > 1) {
      setItem({ ...item, quantity: q - 1 });
      // setQuantity(quantity-1)
    }
  }
  function increament(q) {
    if (q < 5) {
      setItem({ ...item, quantity: q + 1 });
      // setQuantity(quantity+1)
    }
  }
  const notify = (alerts) => toast(alerts);
  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('checkout'));
    if (local) setItem(local);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loginStatus]);
  return (
    <>
      <div>
        <div id={check.logo}>
          <Box>
            {loginStatus === 'success' ? (
              <Alert severity="success">Order Placed Successfully!</Alert>
            ) : null}
          </Box>
          <h2>CHECKOUT</h2>
          <img
            src="https://www.digicert.com/content/dam/digicert/images/tls-ssl/tls-ssl-overview/digicert-smart-seal/dc_seal_page-02.png"
            alt="logo.png"
          />
        </div>
        <div id={check.content}>
          <div id={check.leftDiv}>
            <div id={check.cName}>
              <h3 className={check.dc}>
                DELIVERY COUNTRY:
                <ToastContainer />
              </h3>
              <div>
                {/* <img
              src="https://media.istockphoto.com/id/1032066158/vector/india-round-flag-vector-flat-icon.jpg?s=612x612&w=0&k=20&c=cZO8Tq3HkrD1AZ3tGXYCHBq1S4oO5hrqrRaxKua1P5k="
              alt="india-flag"
            /> */}
                <select
                  id={check.country}
                  name="country"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="India">India</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Åland Islands">Åland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo, The Democratic Republic of The">
                    Congo, The Democratic Republic of The
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote D'ivoire">Cote D'ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-bissau">Guinea-bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and Mcdonald Islands">
                    Heard Island and Mcdonald Islands
                  </option>
                  <option value="Holy See (Vatican City State)">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran, Islamic Republic of">
                    Iran, Islamic Republic of
                  </option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, Democratic People's Republic of">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea, Republic of">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic">
                    Lao People's Democratic Republic
                  </option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia, The Former Yugoslav Republic of">
                    Macedonia, The Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia, Federated States of">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova, Republic of">
                    Moldova, Republic of
                  </option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestinian Territory, Occupied">
                    Palestinian Territory, Occupied
                  </option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russian Federation">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent and The Grenadines">
                    Saint Vincent and The Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and The South Sandwich Islands">
                    South Georgia and The South Sandwich Islands
                  </option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard and Jan Mayen">
                    Svalbard and Jan Mayen
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syrian Arab Republic">
                    Syrian Arab Republic
                  </option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania, United Republic of">
                    Tanzania, United Republic of
                  </option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-leste">Timor-leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="Virgin Islands, British">
                    Virgin Islands, British
                  </option>
                  <option value="Virgin Islands, U.S.">
                    Virgin Islands, U.S.
                  </option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
            </div>
            {/* <div id={check.promoCon}>
          <h3 className={check.promoCode}>PROMO / STUDENT CODE OR VOUCHERS</h3>
          <input type="text" id ={check.inputCode} />
          <button id={check.applyCode}>APPLY CODE</button>
        </div> */}
            {/* <div className={check.emailAdd}>
          <h3 className={check.inputMail}>EMAIL ADDRESS</h3>
    
          <p id={check.email}>username123@gmail.com</p>
        </div> */}
            <div id={check.delAdd}>
              <h3 className={check.delAdd}>DELIVERY ADDRESS</h3>
              {/* <h4 className={check.addAddress}>ADD ADDRESS</h4> */}
              <p className={check.fill}>FIRST NAME</p>
              <input type="text" id="firstName" />
              <p className={check.fill}>LAST NAME</p>
              <input type="text" id="lastName" />
              <p className={check.fill}>MOBILE NO.</p>
              <input type="text" id="mobile" />
              <p className={check.fill}>ADDRESS</p>
              <input type="text" id="address" />
              <p className={check.fill}>CITY</p>
              <input type="text" id="city" />
              <p className={check.fill}>COUNTRY</p>
              <input type="text" id="country" />
              <p className={check.fill}>POSTCODE</p>
              <input type="text" id="postCode" />
              <button
                id={check.addressBtn}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  // alert('Address Added');
                  notify('Address Added');
                }}
              >
                DELIVER TO THIS ADDRESS
              </button>
            </div>
            <div id={check.payType} style={{ paddingLeft: '100px' }}>
              <hr />
              <h3 className={check.pay}>PAYMENT TYPE</h3>
              <h4 className={check.addCard}>ADD DEBIT / CREDIT CARD</h4>
              <h4 className={check.CARD}>CARD NUMBER</h4>
              <input type="text" className="cardNum" />
              <h4 className={check.expiry}>EXPIRY DATE</h4>
              <select
                id={check.expiryMonth}
                autocomplete="cc-exp-month"
                aria-describedby="validationErrorForDate"
                style={{ cursor: 'pointer' }}
              >
                <option value="">Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                id={check.expiryYear}
                autocomplete="cc-exp-year"
                aria-describedby="validationErrorForDate"
                style={{ cursor: 'pointer' }}
              >
                <option value="">Year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </select>
              <h4 className={check.CARD}>NAME ON CARD</h4>
              <input type="text" className={check.cardNum} />

              <h4 className={check.CARD}>CVV</h4>
              <input type="text" className={check.cardNum} />
              <h2>We Accept:</h2>
              <img
                src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                alt=""
              />
            </div>
            <div id={check.accept}>
              <button
                id={check.placeOrder}
                style={{ cursor: 'pointer' }}
                onClick={handlePlaceholder}
              >
                PLACE ORDER
                <ToastContainer/>
              </button>
              <p>
                By placing your order you agree to our Terms & Conditions,
                privacy and returns policies . You also consent to some of your
                data being stored by Flipkart , which may be used to make future
                shopping experiences better for you.
              </p>
            </div>
          </div>
          {/* <div id={check.rightDiv}>
        <div id={check.side}>
          <div id={check.edit}>
            <h2 id={check.count_of_items}></h2>
            <a href="./check.html">Edit</a>
          </div>
          <div id={check.items}>
          </div>
          <div className={check.ttp}>
            <h2>TOTAL TO PAY</h2>
            <h2>£ <span id={check.totaltopay}></span></h2>
          </div>
        </div>
      </div> */}

          <div id={check.rightside}>
            <div id={check.rightchilddiv}>
              <div id={check.pricedetail}>
                <p>PRICE DETAILS</p>
                <hr />
              </div>

              <div id={check.orignalpricediv}>
                <div>
                  <p>Price</p>
                </div>
                <div>
                  <p>₹ {item.old_price * item.quantity}</p>
                </div>
              </div>
              <div id={check.orignalpricediv}>
                <div>
                  <p>Quantity</p>
                </div>
                <div>
                  <p>{item.quantity}</p>
                </div>
              </div>
              <div id={check.orignalpricediv}>
                <div>
                  <p>Discount</p>
                </div>
                <div>
                  <p>−₹ {(item.old_price * item.quantity * 0.16).toFixed(2)}</p>
                </div>
              </div>
              <div id={check.orignalpricediv}>
                <div>
                  <p>Delivery Charges</p>
                </div>
                <div>
                  <p>Free</p>
                </div>
              </div>
              <hr />
              <div id={check.orignalpricediv}>
                <div>
                  <p>Total Amount</p>
                </div>
                <div>
                  <p>{(item.old_price * item.quantity * 0.84).toFixed(2)}</p>
                </div>
              </div>
              <hr />
              <div>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    fontFamily: 'Roboto, Arial, sans-serif',
                    lineHeight: '22px',
                    color: '#388e3c',
                  }}
                >
                  You will save ₹
                  {(item.old_price * item.quantity * 0.16).toFixed(2)} on this
                  order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
