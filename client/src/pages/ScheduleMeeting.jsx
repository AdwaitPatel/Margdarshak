import React, { useState } from 'react';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import { useLocation } from 'react-router-dom';

const RAZORPAY_KEY = 'rzp_test_1DP5mmOlF5G5ag'; // Razorpay test key

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const ScheduleMeeting = () => {
  const [form, setForm] = useState({ name: '', email: '', contact: '', country: '', state: '', date: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const location = useLocation();
  const mentor = location.state?.mentor;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only allow payment after payment is successful
    if (paymentSuccess) setSubmitted(true);
  };

  const handlePayment = async () => {
    if (!mentor || !mentor.price) return;
    setPaymentLoading(true);
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load.');
      setPaymentLoading(false);
      return;
    }
    const options = {
      key: RAZORPAY_KEY,
      amount: mentor.price * 100, // in paise
      currency: 'INR',
      name: mentor.name,
      description: `Meeting with ${mentor.name}`,
      image: mentor.profileImageUrl || mentor.imageUrl,
      handler: function (response) {
        setPaymentSuccess(true);
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: form.name,
        email: form.email,
      },
      notes: {
        mentor: mentor.name,
        date: form.date,
        time: form.time,
        message: form.message,
      },
      theme: {
        color: '#7B2CBF',
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
    setPaymentLoading(false);
  };

  const isFormFilled = form.name && form.email && form.contact && form.country && form.state && form.date && form.time;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-10 px-4">
        <div className="w-full max-w-2xl relative mb-8">
          {/* Glowing effect background */}
          <div className="absolute -inset-2 z-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/40 via-[var(--color-accent)]/30 to-[var(--color-secondary)]/40 blur-2xl opacity-70 animate-pulse pointer-events-none"></div>
          <div className="relative z-10 bg-white/80 dark:bg-[var(--color-bg)]/80 backdrop-blur-xl border border-[var(--color-primary)]/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 text-center drop-shadow-lg">Schedule a Meeting</h2>

            {/* Mentor Info */}
            {mentor && (
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8 p-4 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
                <img
                  src={mentor.profileImageUrl || mentor.imageUrl}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[var(--color-primary)]"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/6B7280/ffffff?text=${mentor.name.split(' ').map(n => n[0]).join('')}`; }}
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]">{mentor.name}</h3>
                  <p className="text-lg text-[var(--color-primary)]/80">{mentor.subject}</p>
                  <p className="text-base text-[var(--color-text)]/80 mb-1"><span className="font-semibold">Experience:</span> {mentor.experience}</p>
                  <p className="text-sm text-[var(--color-text)]/70">{mentor.bio || mentor.description}</p>
                  {mentor.price && <p className="mt-2 text-[var(--color-accent)] font-semibold">Session Price: ₹{mentor.price}</p>}
                </div>
              </div>
            )}

            {submitted ? (
              <div className="text-center">
                <svg className="mx-auto mb-4 w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-xl font-semibold mb-2">Meeting Scheduled!</p>
                <p className="text-gray-600 dark:text-gray-300">Thank you for scheduling a meeting. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-1 font-medium" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium" htmlFor="contact">Contact Number</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10,15}"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                    placeholder="Enter your contact number"
                  />
                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="flex-1">
                    <label className="block mb-1 font-medium" htmlFor="country">Country</label>
                    <select
                      id="country"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                    >
                      <option value="" disabled>Select your country</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
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
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cabo Verde">Cabo Verde</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                      <option value="Congo, Republic of the">Congo, Republic of the</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote d'Ivoire">Cote d'Ivoire</option>
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
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, North">Korea, North</option>
                      <option value="Korea, South">Korea, South</option>
                      <option value="Kosovo">Kosovo</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
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
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-Leste">Timor-Leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City">Vatican City</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block mb-1 font-medium" htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="flex-1">
                    <label className="block mb-1 font-medium" htmlFor="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-1 font-medium" htmlFor="time">Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                    placeholder="Let us know what you'd like to discuss..."
                  />
                </div>

                {/* Payment Method Section */}
                {mentor && mentor.price && !paymentSuccess && (
                  <div className="mb-4">
                    <label className="block mb-1 font-medium">Payment Method</label>
                    <div className="flex flex-col md:flex-row gap-4">
                      <button
                        type="button"
                        className="flex-1 py-2 px-4 border rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-accent)] transition-all duration-300 disabled:opacity-60"
                        onClick={handlePayment}
                        disabled={!isFormFilled || paymentLoading}
                      >
                        {paymentLoading ? 'Processing...' : 'Pay with UPI'}
                      </button>
                      <button
                        type="button"
                        className="flex-1 py-2 px-4 border rounded-lg bg-white text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 disabled:opacity-60"
                        onClick={handlePayment}
                        disabled={!isFormFilled || paymentLoading}
                      >
                        {paymentLoading ? 'Processing...' : 'Pay with Card'}
                      </button>
                    </div>
                    <p className="text-xs text-[var(--color-text)]/60 mt-2">(Test mode: Use Razorpay test credentials. Payment is required to schedule.)</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-[var(--color-primary)] text-white rounded-full font-semibold hover:bg-[var(--color-accent)] transition-all duration-300"
                  disabled={!paymentSuccess}
                >
                  Schedule Meeting
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleMeeting; 