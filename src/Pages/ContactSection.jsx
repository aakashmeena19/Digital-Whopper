import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: 'IN',
    subject: '',
    message: '',
    services: []
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Country codes with phone prefixes and validation patterns
  const countryCodes = {
    'AF': { name: 'Afghanistan', code: '+93', pattern: /^\d{9}$/, length: 9 },
    'AL': { name: 'Albania', code: '+355', pattern: /^\d{8,9}$/, length: '8-9' },
    'DZ': { name: 'Algeria', code: '+213', pattern: /^\d{8,9}$/, length: '8-9' },
    'AD': { name: 'Andorra', code: '+376', pattern: /^\d{6}$/, length: 6 },
    'AO': { name: 'Angola', code: '+244', pattern: /^\d{9}$/, length: 9 },
    'AR': { name: 'Argentina', code: '+54', pattern: /^\d{10}$/, length: 10 },
    'AM': { name: 'Armenia', code: '+374', pattern: /^\d{8}$/, length: 8 },
    'AU': { name: 'Australia', code: '+61', pattern: /^\d{9}$/, length: 9 },
    'AT': { name: 'Austria', code: '+43', pattern: /^\d{10,11}$/, length: '10-11' },
    'AZ': { name: 'Azerbaijan', code: '+994', pattern: /^\d{8,9}$/, length: '8-9' },
    'BS': { name: 'Bahamas', code: '+1-242', pattern: /^\d{7}$/, length: 7 },
    'BH': { name: 'Bahrain', code: '+973', pattern: /^\d{8}$/, length: 8 },
    'BD': { name: 'Bangladesh', code: '+880', pattern: /^\d{10}$/, length: 10 },
    'BB': { name: 'Barbados', code: '+1-246', pattern: /^\d{7}$/, length: 7 },
    'BY': { name: 'Belarus', code: '+375', pattern: /^\d{9}$/, length: 9 },
    'BE': { name: 'Belgium', code: '+32', pattern: /^\d{8,9}$/, length: '8-9' },
    'BZ': { name: 'Belize', code: '+501', pattern: /^\d{7}$/, length: 7 },
    'BJ': { name: 'Benin', code: '+229', pattern: /^\d{8}$/, length: 8 },
    'BT': { name: 'Bhutan', code: '+975', pattern: /^\d{8}$/, length: 8 },
    'BO': { name: 'Bolivia', code: '+591', pattern: /^\d{8}$/, length: 8 },
    'BA': { name: 'Bosnia and Herzegovina', code: '+387', pattern: /^\d{8}$/, length: 8 },
    'BW': { name: 'Botswana', code: '+267', pattern: /^\d{8}$/, length: 8 },
    'BR': { name: 'Brazil', code: '+55', pattern: /^\d{10,11}$/, length: '10-11' },
    'BN': { name: 'Brunei', code: '+673', pattern: /^\d{7}$/, length: 7 },
    'BG': { name: 'Bulgaria', code: '+359', pattern: /^\d{8,9}$/, length: '8-9' },
    'BF': { name: 'Burkina Faso', code: '+226', pattern: /^\d{8}$/, length: 8 },
    'BI': { name: 'Burundi', code: '+257', pattern: /^\d{8}$/, length: 8 },
    'CV': { name: 'Cape Verde', code: '+238', pattern: /^\d{7}$/, length: 7 },
    'KH': { name: 'Cambodia', code: '+855', pattern: /^\d{8,9}$/, length: '8-9' },
    'CM': { name: 'Cameroon', code: '+237', pattern: /^\d{8,9}$/, length: '8-9' },
    'CA': { name: 'Canada', code: '+1', pattern: /^\d{10}$/, length: 10 },
    'CF': { name: 'Central African Republic', code: '+236', pattern: /^\d{8}$/, length: 8 },
    'TD': { name: 'Chad', code: '+235', pattern: /^\d{8}$/, length: 8 },
    'CL': { name: 'Chile', code: '+56', pattern: /^\d{9}$/, length: 9 },
    'CN': { name: 'China', code: '+86', pattern: /^\d{11}$/, length: 11 },
    'CO': { name: 'Colombia', code: '+57', pattern: /^\d{10}$/, length: 10 },
    'KM': { name: 'Comoros', code: '+269', pattern: /^\d{7}$/, length: 7 },
    'CG': { name: 'Congo', code: '+242', pattern: /^\d{9}$/, length: 9 },
    'CR': { name: 'Costa Rica', code: '+506', pattern: /^\d{8}$/, length: 8 },
    'HR': { name: 'Croatia', code: '+385', pattern: /^\d{8,9}$/, length: '8-9' },
    'CU': { name: 'Cuba', code: '+53', pattern: /^\d{8}$/, length: 8 },
    'CY': { name: 'Cyprus', code: '+357', pattern: /^\d{8}$/, length: 8 },
    'CZ': { name: 'Czech Republic', code: '+420', pattern: /^\d{9}$/, length: 9 },
    'DK': { name: 'Denmark', code: '+45', pattern: /^\d{8}$/, length: 8 },
    'DJ': { name: 'Djibouti', code: '+253', pattern: /^\d{8}$/, length: 8 },
    'DM': { name: 'Dominica', code: '+1-767', pattern: /^\d{7}$/, length: 7 },
    'DO': { name: 'Dominican Republic', code: '+1-809', pattern: /^\d{7}$/, length: 7 },
    'EC': { name: 'Ecuador', code: '+593', pattern: /^\d{8,9}$/, length: '8-9' },
    'EG': { name: 'Egypt', code: '+20', pattern: /^\d{10}$/, length: 10 },
    'SV': { name: 'El Salvador', code: '+503', pattern: /^\d{8}$/, length: 8 },
    'GQ': { name: 'Equatorial Guinea', code: '+240', pattern: /^\d{9}$/, length: 9 },
    'ER': { name: 'Eritrea', code: '+291', pattern: /^\d{7}$/, length: 7 },
    'EE': { name: 'Estonia', code: '+372', pattern: /^\d{7,8}$/, length: '7-8' },
    'SZ': { name: 'Eswatini', code: '+268', pattern: /^\d{8}$/, length: 8 },
    'ET': { name: 'Ethiopia', code: '+251', pattern: /^\d{9}$/, length: 9 },
    'FJ': { name: 'Fiji', code: '+679', pattern: /^\d{7}$/, length: 7 },
    'FI': { name: 'Finland', code: '+358', pattern: /^\d{9}$/, length: 9 },
    'FR': { name: 'France', code: '+33', pattern: /^\d{9}$/, length: 9 },
    'GA': { name: 'Gabon', code: '+241', pattern: /^\d{8}$/, length: 8 },
    'GM': { name: 'Gambia', code: '+220', pattern: /^\d{7}$/, length: 7 },
    'GE': { name: 'Georgia', code: '+995', pattern: /^\d{9}$/, length: 9 },
    'DE': { name: 'Germany', code: '+49', pattern: /^\d{10,11}$/, length: '10-11' },
    'GH': { name: 'Ghana', code: '+233', pattern: /^\d{9}$/, length: 9 },
    'GR': { name: 'Greece', code: '+30', pattern: /^\d{10}$/, length: 10 },
    'GD': { name: 'Grenada', code: '+1-473', pattern: /^\d{7}$/, length: 7 },
    'GT': { name: 'Guatemala', code: '+502', pattern: /^\d{8}$/, length: 8 },
    'GN': { name: 'Guinea', code: '+224', pattern: /^\d{8,9}$/, length: '8-9' },
    'GW': { name: 'Guinea-Bissau', code: '+245', pattern: /^\d{7}$/, length: 7 },
    'GY': { name: 'Guyana', code: '+592', pattern: /^\d{7}$/, length: 7 },
    'HT': { name: 'Haiti', code: '+509', pattern: /^\d{8}$/, length: 8 },
    'HN': { name: 'Honduras', code: '+504', pattern: /^\d{8}$/, length: 8 },
    'HU': { name: 'Hungary', code: '+36', pattern: /^\d{9}$/, length: 9 },
    'IS': { name: 'Iceland', code: '+354', pattern: /^\d{7}$/, length: 7 },
    'IN': { name: 'India', code: '+91', pattern: /^\d{10}$/, length: 10 },
    'ID': { name: 'Indonesia', code: '+62', pattern: /^\d{10,12}$/, length: '10-12' },
    'IR': { name: 'Iran', code: '+98', pattern: /^\d{10}$/, length: 10 },
    'IQ': { name: 'Iraq', code: '+964', pattern: /^\d{10}$/, length: 10 },
    'IE': { name: 'Ireland', code: '+353', pattern: /^\d{9}$/, length: 9 },
    'IL': { name: 'Israel', code: '+972', pattern: /^\d{9}$/, length: 9 },
    'IT': { name: 'Italy', code: '+39', pattern: /^\d{10}$/, length: 10 },
    'JM': { name: 'Jamaica', code: '+1-876', pattern: /^\d{7}$/, length: 7 },
    'JP': { name: 'Japan', code: '+81', pattern: /^\d{10,11}$/, length: '10-11' },
    'JO': { name: 'Jordan', code: '+962', pattern: /^\d{9}$/, length: 9 },
    'KZ': { name: 'Kazakhstan', code: '+7', pattern: /^\d{10}$/, length: 10 },
    'KE': { name: 'Kenya', code: '+254', pattern: /^\d{9}$/, length: 9 },
    'KI': { name: 'Kiribati', code: '+686', pattern: /^\d{8}$/, length: 8 },
    'KP': { name: 'North Korea', code: '+850', pattern: /^\d{9}$/, length: 9 },
    'KR': { name: 'South Korea', code: '+82', pattern: /^\d{9,10}$/, length: '9-10' },
    'KW': { name: 'Kuwait', code: '+965', pattern: /^\d{8}$/, length: 8 },
    'KG': { name: 'Kyrgyzstan', code: '+996', pattern: /^\d{9}$/, length: 9 },
    'LA': { name: 'Laos', code: '+856', pattern: /^\d{8}$/, length: 8 },
    'LV': { name: 'Latvia', code: '+371', pattern: /^\d{8}$/, length: 8 },
    'LB': { name: 'Lebanon', code: '+961', pattern: /^\d{7,8}$/, length: '7-8' },
    'LS': { name: 'Lesotho', code: '+266', pattern: /^\d{8}$/, length: 8 },
    'LR': { name: 'Liberia', code: '+231', pattern: /^\d{7,8}$/, length: '7-8' },
    'LY': { name: 'Libya', code: '+218', pattern: /^\d{9}$/, length: 9 },
    'LI': { name: 'Liechtenstein', code: '+423', pattern: /^\d{7}$/, length: 7 },
    'LT': { name: 'Lithuania', code: '+370', pattern: /^\d{8}$/, length: 8 },
    'LU': { name: 'Luxembourg', code: '+352', pattern: /^\d{9}$/, length: 9 },
    'MG': { name: 'Madagascar', code: '+261', pattern: /^\d{9}$/, length: 9 },
    'MW': { name: 'Malawi', code: '+265', pattern: /^\d{8,9}$/, length: '8-9' },
    'MY': { name: 'Malaysia', code: '+60', pattern: /^\d{9,10}$/, length: '9-10' },
    'MV': { name: 'Maldives', code: '+960', pattern: /^\d{7}$/, length: 7 },
    'ML': { name: 'Mali', code: '+223', pattern: /^\d{8}$/, length: 8 },
    'MT': { name: 'Malta', code: '+356', pattern: /^\d{8}$/, length: 8 },
    'MH': { name: 'Marshall Islands', code: '+692', pattern: /^\d{7}$/, length: 7 },
    'MR': { name: 'Mauritania', code: '+222', pattern: /^\d{8}$/, length: 8 },
    'MU': { name: 'Mauritius', code: '+230', pattern: /^\d{8}$/, length: 8 },
    'MX': { name: 'Mexico', code: '+52', pattern: /^\d{10}$/, length: 10 },
    'FM': { name: 'Micronesia', code: '+691', pattern: /^\d{7}$/, length: 7 },
    'MD': { name: 'Moldova', code: '+373', pattern: /^\d{8}$/, length: 8 },
    'MC': { name: 'Monaco', code: '+377', pattern: /^\d{8}$/, length: 8 },
    'MN': { name: 'Mongolia', code: '+976', pattern: /^\d{8}$/, length: 8 },
    'ME': { name: 'Montenegro', code: '+382', pattern: /^\d{8}$/, length: 8 },
    'MA': { name: 'Morocco', code: '+212', pattern: /^\d{9}$/, length: 9 },
    'MZ': { name: 'Mozambique', code: '+258', pattern: /^\d{9}$/, length: 9 },
    'MM': { name: 'Myanmar', code: '+95', pattern: /^\d{8,9}$/, length: '8-9' },
    'NA': { name: 'Namibia', code: '+264', pattern: /^\d{8}$/, length: 8 },
    'NR': { name: 'Nauru', code: '+674', pattern: /^\d{7}$/, length: 7 },
    'NP': { name: 'Nepal', code: '+977', pattern: /^\d{10}$/, length: 10 },
    'NL': { name: 'Netherlands', code: '+31', pattern: /^\d{9}$/, length: 9 },
    'NZ': { name: 'New Zealand', code: '+64', pattern: /^\d{8,9}$/, length: '8-9' },
    'NI': { name: 'Nicaragua', code: '+505', pattern: /^\d{8}$/, length: 8 },
    'NE': { name: 'Niger', code: '+227', pattern: /^\d{8}$/, length: 8 },
    'NG': { name: 'Nigeria', code: '+234', pattern: /^\d{10}$/, length: 10 },
    'MK': { name: 'North Macedonia', code: '+389', pattern: /^\d{8}$/, length: 8 },
    'NO': { name: 'Norway', code: '+47', pattern: /^\d{8}$/, length: 8 },
    'OM': { name: 'Oman', code: '+968', pattern: /^\d{8}$/, length: 8 },
    'PK': { name: 'Pakistan', code: '+92', pattern: /^\d{10}$/, length: 10 },
    'PW': { name: 'Palau', code: '+680', pattern: /^\d{7}$/, length: 7 },
    'PS': { name: 'Palestine', code: '+970', pattern: /^\d{9}$/, length: 9 },
    'PA': { name: 'Panama', code: '+507', pattern: /^\d{8}$/, length: 8 },
    'PG': { name: 'Papua New Guinea', code: '+675', pattern: /^\d{8}$/, length: 8 },
    'PY': { name: 'Paraguay', code: '+595', pattern: /^\d{9}$/, length: 9 },
    'PE': { name: 'Peru', code: '+51', pattern: /^\d{9}$/, length: 9 },
    'PH': { name: 'Philippines', code: '+63', pattern: /^\d{10}$/, length: 10 },
    'PL': { name: 'Poland', code: '+48', pattern: /^\d{9}$/, length: 9 },
    'PT': { name: 'Portugal', code: '+351', pattern: /^\d{9}$/, length: 9 },
    'QA': { name: 'Qatar', code: '+974', pattern: /^\d{8}$/, length: 8 },
    'RO': { name: 'Romania', code: '+40', pattern: /^\d{9}$/, length: 9 },
    'RU': { name: 'Russia', code: '+7', pattern: /^\d{10}$/, length: 10 },
    'RW': { name: 'Rwanda', code: '+250', pattern: /^\d{9}$/, length: 9 },
    'WS': { name: 'Samoa', code: '+685', pattern: /^\d{7}$/, length: 7 },
    'SM': { name: 'San Marino', code: '+378', pattern: /^\d{10}$/, length: 10 },
    'ST': { name: 'Sao Tome and Principe', code: '+239', pattern: /^\d{7}$/, length: 7 },
    'SA': { name: 'Saudi Arabia', code: '+966', pattern: /^\d{9}$/, length: 9 },
    'SN': { name: 'Senegal', code: '+221', pattern: /^\d{9}$/, length: 9 },
    'RS': { name: 'Serbia', code: '+381', pattern: /^\d{8,9}$/, length: '8-9' },
    'SC': { name: 'Seychelles', code: '+248', pattern: /^\d{7}$/, length: 7 },
    'SL': { name: 'Sierra Leone', code: '+232', pattern: /^\d{8}$/, length: 8 },
    'SG': { name: 'Singapore', code: '+65', pattern: /^\d{8}$/, length: 8 },
    'SK': { name: 'Slovakia', code: '+421', pattern: /^\d{9}$/, length: 9 },
    'SI': { name: 'Slovenia', code: '+386', pattern: /^\d{8}$/, length: 8 },
    'SB': { name: 'Solomon Islands', code: '+677', pattern: /^\d{7}$/, length: 7 },
    'SO': { name: 'Somalia', code: '+252', pattern: /^\d{8,9}$/, length: '8-9' },
    'ZA': { name: 'South Africa', code: '+27', pattern: /^\d{9}$/, length: 9 },
    'SS': { name: 'South Sudan', code: '+211', pattern: /^\d{9}$/, length: 9 },
    'ES': { name: 'Spain', code: '+34', pattern: /^\d{9}$/, length: 9 },
    'LK': { name: 'Sri Lanka', code: '+94', pattern: /^\d{9}$/, length: 9 },
    'SD': { name: 'Sudan', code: '+249', pattern: /^\d{9}$/, length: 9 },
    'SR': { name: 'Suriname', code: '+597', pattern: /^\d{7}$/, length: 7 },
    'SE': { name: 'Sweden', code: '+46', pattern: /^\d{9}$/, length: 9 },
    'CH': { name: 'Switzerland', code: '+41', pattern: /^\d{9}$/, length: 9 },
    'SY': { name: 'Syria', code: '+963', pattern: /^\d{9}$/, length: 9 },
    'TJ': { name: 'Tajikistan', code: '+992', pattern: /^\d{9}$/, length: 9 },
    'TZ': { name: 'Tanzania', code: '+255', pattern: /^\d{9}$/, length: 9 },
    'TH': { name: 'Thailand', code: '+66', pattern: /^\d{9}$/, length: 9 },
    'TL': { name: 'Timor-Leste', code: '+670', pattern: /^\d{8}$/, length: 8 },
    'TG': { name: 'Togo', code: '+228', pattern: /^\d{8}$/, length: 8 },
    'TO': { name: 'Tonga', code: '+676', pattern: /^\d{5}$/, length: 5 },
    'TT': { name: 'Trinidad and Tobago', code: '+1-868', pattern: /^\d{7}$/, length: 7 },
    'TN': { name: 'Tunisia', code: '+216', pattern: /^\d{8}$/, length: 8 },
    'TR': { name: 'Turkey', code: '+90', pattern: /^\d{10}$/, length: 10 },
    'TM': { name: 'Turkmenistan', code: '+993', pattern: /^\d{8}$/, length: 8 },
    'TV': { name: 'Tuvalu', code: '+688', pattern: /^\d{6}$/, length: 6 },
    'UG': { name: 'Uganda', code: '+256', pattern: /^\d{9}$/, length: 9 },
    'UA': { name: 'Ukraine', code: '+380', pattern: /^\d{9}$/, length: 9 },
    'AE': { name: 'United Arab Emirates', code: '+971', pattern: /^\d{9}$/, length: 9 },
    'GB': { name: 'United Kingdom', code: '+44', pattern: /^\d{10}$/, length: 10 },
    'US': { name: 'United States', code: '+1', pattern: /^\d{10}$/, length: 10 },
    'UY': { name: 'Uruguay', code: '+598', pattern: /^\d{8}$/, length: 8 },
    'UZ': { name: 'Uzbekistan', code: '+998', pattern: /^\d{9}$/, length: 9 },
    'VU': { name: 'Vanuatu', code: '+678', pattern: /^\d{7}$/, length: 7 },
    'VE': { name: 'Venezuela', code: '+58', pattern: /^\d{10}$/, length: 10 },
    'VN': { name: 'Vietnam', code: '+84', pattern: /^\d{9,10}$/, length: '9-10' },
    'YE': { name: 'Yemen', code: '+967', pattern: /^\d{9}$/, length: 9 },
    'ZM': { name: 'Zambia', code: '+260', pattern: /^\d{9}$/, length: 9 },
    'ZW': { name: 'Zimbabwe', code: '+263', pattern: /^\d{9}$/, length: 9 }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const selectedCountry = countryCodes[formData.countryCode];
      const phoneNumber = formData.phone.replace(/\D/g, ''); // Remove non-digits
      
      if (!selectedCountry.pattern.test(phoneNumber)) {
        newErrors.phone = `Please enter a valid ${selectedCountry.name} phone number`;
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // For phone number, allow only digits
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: digitsOnly
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCountryChange = (e) => {
    setFormData(prev => ({
      ...prev,
      countryCode: e.target.value,
      phone: '' // Clear phone when country changes
    }));
    
    // Clear phone error when country changes
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async () => {
    // Validate form before submission
    if (!validateForm()) {
      // Show first error in alert
      const firstError = Object.values(errors)[0];
      alert(firstError);
      return;
    }

    setIsLoading(true);

    // EmailJS configuration - Replace with your actual EmailJS credentials
    const emailJSConfig = {
      serviceID: 'service_h5ww22f', // Replace with your service ID
      templateID: 'template_6a7e5va', // Replace with your template ID  
      userID: 'm0buWGOrE8Y3jKagl' // Replace with your user ID
    };

    const templateParams = {
      to_email: 'aakashmeena194745@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: `${countryCodes[formData.countryCode].code} ${formData.phone}`,
      subject: formData.subject,
      message: formData.message,
      services: formData.services.join(', '),
      country: countryCodes[formData.countryCode].name
    };

    try {
      // For demo purposes - replace this with actual EmailJS call
      // await emailjs.send(emailJSConfig.serviceID, emailJSConfig.templateID, templateParams, emailJSConfig.userID);
      await emailjs.send(emailJSConfig.serviceID, emailJSConfig.templateID, templateParams, emailJSConfig.userID);
      
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success popup
      setShowPopup(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: 'IN',
        subject: '',
        message: '',
        services: []
      });

      // Clear any errors
      setErrors({});

      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Check if form is valid for button state
  const isFormValid = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           formData.phone.trim() && 
           formData.subject.trim() && 
           formData.message.trim();
  };

  return (
    <div className="w-full bg-[rgba(225,225,225,1)] py-12 px-4">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm mx-4 text-center animate-bounce">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-600">Thank you for contacting the Digital Whopper. We'll get back to you soon.</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-8 mt-36 relative">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Let's level up your brand, together
          </h1>
          <p className="text-gray-600 mb-2">You can reach us anytime via</p>
          <a 
            href="mailto:digitalwhopperhelp@gmail.com" 
            className="text-orange-500 hover:text-orange-600 transition-colors"
          >
            digitalwhopperhelp@gmail.com
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Reach out to us anytime — we'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-700">+91-6200379161</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-700">
                  3rd Floor, 4/11, Vidyut Abhiyanta Colony, <br />
                  Sector 4, Malviya Nagar, Jaipur, Rajasthan 302017
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">digitalwhopperhelp@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Phone Number with Country Code */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone number *
              </label>
              <div className="flex">
                <select 
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleCountryChange}
                  className="px-3 py-3 border border-gray-300 rounded-l-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-w-[120px]"
                >
                  {Object.entries(countryCodes).map(([code, data]) => (
                    <option key={code} value={code}>
                      {code} {data.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={`Enter phone number`}
                  maxLength={typeof countryCodes[formData.countryCode].length === 'string' ? 
                    parseInt(countryCodes[formData.countryCode].length.split('-')[1]) : 
                    countryCodes[formData.countryCode].length}
                  className={`flex-1 px-4 py-3 border border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  required
                />
              </div>
              {errors.phone ? (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              ) : (
                <p className="text-sm text-gray-500 mt-1">
                  Selected: {countryCodes[formData.countryCode].name} ({countryCodes[formData.countryCode].code})
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help you?"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                  errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                required
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Services Section */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Services (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Website design',
                  'Content creation',
                  'UX design',
                  'Strategy & consulting',
                  'User research',
                  'Other'
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us a little about the project..."
                rows="5"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none ${
                  errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            {/* Form validation status */}
            {!isFormValid() && (
              <p className="text-sm text-gray-500 text-center">
                Please fill in all required fields to send your message
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-8 max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3559.677374596132!2d75.81637976117246!3d26.850211981842143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70d6ddc5739%3A0x26f55464d633e961!2sDigital%20Whopper%20(digital%20marketing%20agency%20in%20Jaipur)!5e0!3m2!1sen!2sin!4v1756465391608!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactSection;