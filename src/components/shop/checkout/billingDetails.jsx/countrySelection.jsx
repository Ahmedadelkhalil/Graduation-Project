import React from "react";

const CountrySelection = () => {
  return (
    <select
      name="bill-country"
      id="bill-country"
      className="bill-country w-100"
    >
      <option value="0" disabled selected hidden>
        Select a Country / region...
      </option>
      <optgroup label="Africa">
        <option value="DZ">Algeria</option>
        <option value="AO">Angola</option>
        <option value="BJ">Benin</option>
        <option value="BW">Botswana</option>
        <option value="BF">Burkina Faso</option>
        <option value="BI">Burundi</option>
        <option value="CM">Cameroon</option>
        <option value="CV">Cape Verde</option>
        <option value="CF">Central African Republic</option>
        <option value="TD">Chad</option>
        <option value="KM">Comoros</option>
        <option value="CD">Congo, Democratic Republic</option>
        <option value="CG">Congo, People’s Republic</option>
        <option value="CI">Cote d'Ivoire</option>
        <option value="DJ">Djibouti</option>
        <option value="EG">Egypt</option>
        <option value="GQ">Equatorial Guinea</option>
        <option value="ER">Eritrea</option>
        <option value="ET">Ethiopia</option>
        <option value="GA">Gabon</option>
        <option value="GM">Gambia</option>
        <option value="GH">Ghana</option>
        <option value="GN">Guinea</option>
        <option value="GW">Guinea-Bissau</option>
        <option value="KE">Kenya</option>
        <option value="LS">LESOTHO</option>
        <option value="LR">LIBERIA</option>
        <option value="LY">LIBYAN ARAB JAMAHIRIYA</option>
        <option value="MG">MADAGASCAR</option>
        <option value="ML">MALI</option>
        <option value="MW">MALAWI</option>
        <option value="MR">MAURITANIA</option>
        <option value="MU">MAURITIUS</option>
        <option value="YT">MAYOTTE</option>
        <option value="MA">MOROCCO</option>
        <option value="MZ">MOZAMBIQUE</option>
        <option value="NA">NAMIBIA</option>
        <option value="NE">NIGER</option>
        <option value="NG">NIGERIA</option>
        <option value="RE">REUNION ISLAND</option>
        <option value="RW">RWANDA</option>
        <option value="ST">SAO TOME AND PRINCIPE</option>
        <option value="SN">SENEGAL</option>
        <option value="SC">SEYCHELLES</option>
        <option value="SL">SIERRA LEONE</option>
        <option value="SO">SOMALIA</option>
        <option value="ZA">SOUTH AFRICA</option>
        <option value="SS">SOUTH SUDAN</option>
        <option value="SD">SUDAN</option>
        <option value="SZ">SWAZILAND</option>
        <option value="TZ">TANZANIA, UNITED REPUBLIC OF</option>
        <option value="TG">TOGO</option>
        <option value="TN">TUNISIA</option>
        <option value="UG">UGANDA</option>
        <option value="ZM">WESTERN SAHARA</option>
        <option value="ZW">ZIMBABWE</option>
      </optgroup>
      <optgroup label="Asia">
        <option value="AF">Afghanistan</option>
        <option value="AM">Armenia</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BT">Bhutan</option>
        <option value="IO">British Indian Ocean Territory</option>
        <option value="BN">Brunei</option>
        <option value="KH">Cambodia</option>
        <option value="CN">China</option>
        <option value="CC">Cocos (Keeling) Islands</option>
        <option value="GE">Georgia</option>
        <option value="HK">Hong Kong</option>
        <option value="IN">India</option>
        <option value="ID">Indonesia</option>
        <option value="IR">Iran</option>
        <option value="IQ">Iraq</option>
        <option value="JP">Japan</option>
        <option value="JO">Jordan</option>
        <option value="KZ">Kazakhstan</option>
        <option value="KW">Kuwait</option>
        <option value="KG">Kyrgyzstan</option>
        <option value="LA">Laos</option>
        <option value="LB">Lebanon</option>
        <option value="MO">Macau</option>
        <option value="MY">Malaysia</option>
        <option value="MV">Maldives</option>
        <option value="MN">Mongolia</option>
        <option value="MM">Myanmar (Burma)</option>
        <option value="NP">Nepal</option>
        <option value="KP">North Korea</option>
        <option value="OM">Oman</option>
        <option value="PK">Pakistan</option>
        <option value="PS">Palestine</option>
        <option value="PH">Philippines</option>
        <option value="QA">Qatar</option>
        <option value="SA">Saudi Arabia</option>
        <option value="SG">Singapore</option>
        <option value="KR">South Korea</option>
        <option value="LK">Sri Lanka</option>
        <option value="SY">Syria</option>
        <option value="TW">Taiwan</option>
        <option value="TJ">Tajikistan</option>
        <option value="TH">Thailand</option>
        <option value="TR">Turkey</option>
        <option value="TM">Turkmenistan</option>
        <option value="AE">United Arab Emirates</option>
        <option value="UZ">Uzbekistan</option>
        <option value="VN">Vietnam</option>
        <option value="YE">Yemen</option>
      </optgroup>
      <optgroup label="Europe">
        <option value="AT">Austria</option>
        <option value="BE">Belgium</option>
        <option value="BG">Bulgaria</option>
        <option value="HR">Croatia</option>
        <option value="CY">Cyprus</option>
        <option value="CZ">Czech Republic</option>
        <option value="DK">Denmark</option>
        <option value="EE">Estonia</option>
        <option value="FI">Finland</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        <option value="GR">Greece</option>
        <option value="HU">Hungary</option>
        <option value="IE">Ireland, Republic of (EIRE)</option>
        <option value="IT">Italy</option>
        <option value="LV">Latvia</option>
        <option value="LT">Lithuania</option>
        <option value="LU">Luxembourg</option>
        <option value="MT">Malta</option>
        <option value="NL">Netherlands</option>
        <option value="PL">Poland</option>
        <option value="PT">Portugal</option>
        <option value="RO">Romania</option>
        <option value="SK">Slovakia</option>
        <option value="SI">Slovenia</option>
        <option value="ES">Spain</option>
        <option value="SE">Sweden</option>
        <option value="GB">United Kingdom</option>
      </optgroup>
      <optgroup label="North America">
        <option value="AI">Anguilla</option>
        <option value="AG">Antigua And Barbuda</option>
        <option value="AW">Aruba</option>
        <option value="BB">Barbados</option>
        <option value="BZ">Belize</option>
        <option value="BM">Bermuda</option>
        <option value="BQ">Bonaire</option>
        <option value="VG">British Virgin Islands</option>
        <option value="CA">Canada</option>
        <option value="KY">Cayman Islands</option>
        <option value="CR">Costa Rica</option>
        <option value="CU">Cuba</option>
        <option value="CW">Curacao</option>
        <option value="DM">Dominica</option>
        <option value="DO">Dominican Republic</option>
        <option value="SV">El Salvador</option>
        <option value="GL">Greenland</option>
        <option value="GD">Grenada</option>
        <option value="GP">Guadeloupe</option>
        <option value="GT">Guatemala</option>
        <option value="HT">Haiti</option>
        <option value="HN">Honduras</option>
        <option value="JM">Jamaica</option>
        <option value="MQ">Martinique</option>
        <option value="MX">Mexico</option>
        <option value="MS">Montserrat</option>
        <option value="AN">Netherlands Antilles</option>
        <option value="NI">Nicaragua</option>
        <option value="PA">Panama</option>
        <option value="PR">Puerto Rico</option>
        <option value="BL">Saint Barthelemy</option>
        <option value="KN">Saint Kitts And Nevis</option>
        <option value="LC">Saint Lucia</option>
        <option value="MF">Saint Martin</option>
        <option value="PM">Saint Pierre And Miquelon</option>
        <option value="VC">Saint Vincent And The Grenadines</option>
        <option value="SX">Sint Maarten</option>
        <option value="BS">The Bahamas</option>
        <option value="TT">Trinidad And Tobago</option>
        <option value="TC">Turks And Caicos Islands</option>
        <option value="US">United States Of America</option>
        <option value="VI">US Virgin Islands</option>
      </optgroup>
      <optgroup label="South America">
        <option value="ag">Argentina</option>
        <option value="bl">Brazil</option>
        <option value="ck">Colombia</option>
        <option value="fg">French Guiana</option>
        <option value="py">Paraguay</option>
        <option value="sr">Surinam</option>
        <option value="ve">Venezuela</option>
        <option value="bo">Boliva</option>
        <option value="cl">Chile</option>
        <option value="ec">Ecquador</option>
        <option value="gy">Guyana</option>
        <option value="pe">Peru</option>
        <option value="uy">Uruguay</option>
      </optgroup>
    </select>
  );
};

export default CountrySelection;
