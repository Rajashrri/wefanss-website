import React from 'react'

const TermsConditions = () => {

 const TermsConditionsData = [
  {
    id: 1,
    title: "Introduction",
    content: `Welcome to our website. We respect your privacy and are committed to protecting your personal data. 
    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.`
  },
  {
    id: 2,
    title: "Information We Collect",
    content: `We may collect personal information such as your name, email address, phone number, and other details 
    that you voluntarily provide when you register, fill out forms, or contact us.`
  },
  {
    id: 3,
    title: "How We Use Your Information",
    content: `We use the information we collect to operate and maintain our website, improve user experience, 
    respond to inquiries, send updates, and provide customer support.`
  },
  {
    id: 4,
    title: "Cookies and Tracking Technologies",
    content: `We may use cookies and similar tracking technologies to track activity on our website and store 
    certain information to enhance user experience.`
  },
  {
    id: 5,
    title: "Data Sharing and Disclosure",
    content: `We do not sell, trade, or rent your personal information to others. 
    We may share information with trusted third parties who assist us in operating our website, 
    provided they agree to keep this information confidential.`
  },
  {
    id: 6,
    title: "Data Security",
    content: `We implement appropriate security measures to protect your personal information from unauthorized 
    access, alteration, disclosure, or destruction.`
  },
  {
    id: 7,
    title: "Your Rights",
    content: `You have the right to access, update, or delete your personal information. 
    You may contact us at any time to request changes to your data.`
  },
  {
    id: 8,
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites. 
    We are not responsible for the privacy practices of those websites.`
  },
  {
    id: 9,
    title: "Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. 
    Any changes will be posted on this page with an updated revision date.`
  },
  {
    id: 10,
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy, 
    please contact us at support@example.com.`
  }
];
  return (
    <>
    <div className='md:py-[40px] py-[40px] max-w-[924px] px-5 m-auto'>
        <h2 className='berlin text-[36px] text-[#1E1E1E] text-center'>Terms Conditions</h2>

        <div className="mt-4">
            {
                TermsConditionsData.map((item)=>(
                    <div className='mt-6'>
                    <h3 className='text-[20px] text-[#1E1E1E] berlin' key={item.id}>{item.title}</h3>
                    <p className='text-[14px] text-[#1E1E1E] primary-font mt-1'>{item.content}</p>
                    </div>
                ))
            }
        </div>


    </div>
    </>
  )
}

export default TermsConditions