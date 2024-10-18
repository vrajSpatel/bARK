const serviceApi = {
  "Web Design": {
    multiple: false,
    title: "What is your web design requirement?",
    options: {
      "create New Website": {
        title: "What are your website needs?",
        multiple: true,
        options: {
          "To advertise my business/services": 0,
          "To sell products/services e.g. e-commerce": 0,
          "For educational purposes": 0,
        },
      },
      "Make changes to my current website": {
        multiple: false,
        title: "Which platform is your website built on?",
        options: {
          "Custom built": 0,
          Magento: 0,
          Shopify: 0,
          SquareSpace: 0,
          Wix: 0,
          Wordpress: 0,
          Hostinger: 0,
          GoDaddy: 0,
          "I'm not sure": 0,
        },
      },
    },
    commonInformation: {
      budget: {
        title:
          "What is your approximate budget for the new website? Less than ₹25k",
        multiple: false,
        options: {
          "Less than ₹25k": 0,

          "₹25k - ₹49.9k": 0,
          "₹50k - ₹99.9k": 0,
          "₹1 - ₹1.99 Lakhs": 0,
          "₹2 - ₹2.9 Lakhs": 0,
          "₹3 - ₹4.9 Lakhs": 0,
          "₹5 Lakhs or more": 0,
          "I'd like to discuss this with the professional": 0,
        },
      },
      features: {
        title: "What features do you need for your website?",
        multiple: true,
        options: {
          Blogs: 0,
          "eCommerce - sell products/services": 0,
          "Live chat": 0,
          "Media and document hosting": 0,
          "Social media integration": 0,
          "User self-management e.g. user accounts": 0,
          "Payment gateway": 0,
        },
      },
      type: {
        title: "What type of business is this for?",
        multiple: false,
        options: {
          "Personal project": 0,
          "Proprietor/self employed": 0,
          "Small business (1 - 9 employees)": 0,
          "Medium business (10 - 29 employees)": 0,
          "Large business (30 - 99 employees)": 0,
          "Extra large business (100 or more employees)": 0,
          "Charity/non-profit": 0,
        },
      },
      industry: {
        title: "What industry do you operate in?",
        multiple: false,
        options: {
          "Business services": 0,
          "Creative industries": 0,
          "Entertainment & events": 0,
          "Financial services": 0,
          "Health & fitness": 0,
          "Home services": 0,
          "Restaurant/food": 0,
        },
      },
      deadline: {
        title: "When would you like the website to go live/be updated?",
        multiple: false,
        options: {
          ASAP: 0,
          "Within a few weeks": 0,
          "Within a month": 0,
          "Within a few months": 0,
          "I would like to discuss this with the professional": 0,
        },
      },
      hiring: {
        title: "How likely are you to make a hiring decision?",
        multiple: false,
        options: {
          "I'm ready to hire now": 0,
          "I'm definitely going to hire someone": 0,
          "I'm likely to hire someone": 0,
          "I will possibly hire someone": 0,
          "I'm planning and researching": 0,
        },
      },
    },
  },
  "E Commerce": {
    multiple: false,
    title: "What kind of e-commerce site is it?",
    options: {
      "B2B - Business to business": 0,
      "B2C - Business to consumer": 0,
      "I am not sure": 0,
    },
    commonInformation: {
      requirement: {
        multiple: false,
        title: "What type of eCommerce store requirement do you have?",
        options: {
          "Setup a new eCommerce store": 0,
          "Make changes in the existing eCommerce store": 0,
        },
      },
      platform: {
        multiple: false,
        title: "Which platform does your existing online store use?",
        options: {
          Magento: 0,
          Shopify: 0,
          Squarespace: 0,
          Wix: 0,
          WooCommerce: 0,
          Zoho: 0,
          "Custom solution": 0,
          "I'm not sure": 0,
        },
      },
      products: {
        title: "How many products/services do you have?",
        multiple: false,
        options: {
          "Less than 20": 0,
          "20-49": 0,
          "50-100": 0,
          "100-249": 0,
          "250-499": 0,
          "500 and more": 0,
        },
      },
      industry: {
        title: "What industry do you operate in?",
        multiple: false,
        options: {
          "Banking, financial services and insurance": 0,
          Education: 0,
          Entertainment: 0,
          "Fashion and furnishing": 0,
          "FMCG and durable goods": 0,
          "Food and hospitality": 0,
          "Health and pharmaceuticals": 0,
          "Industrial equipment": 0,
          Retail: 0,
        },
      },
      additionalFeatures: {
        title: "Which additional features would like for the store?",
        multiple: true,
        options: {
          "Billing system": 0,
          CRM: 0,
          "Email marketing": 0,
          "Inventory management": 0,
          Logistics: 0,
          "Online advertising": 0,
          "SEO integration": 0,
        },
      },
      budget: {
        title: "What is your budget for the project?",
        multiple: false,
        options: {
          "Less than ₹50k": 0,
          "₹50 - ₹99k": 0,
          "₹1 - ₹2.49 Lakhs": 0,
          "₹2.5 - ₹4.9 Lakhs": 0,
          "₹5 - ₹9.9 Lakhs": 0,
          "₹10 Lakhs or more": 0,
          "I would like to discuss with the professional": 0,
        },
      },
      typeOfCustomer: {
        title: "What type of business needs the service?",
        multiple: false,
        options: {
          "Individual/Proprietor": 0,
          "Partnerships Company": 0,
          "Limited Liability Partnership": 0,
          "Private Limited Company": 0,
          "Public Limited Company": 0,
        },
      },
      hiringLikliness: {
        title: "How likely are you to make a hiring decision?",
        multiple: false,
        options: {
          "I'm ready to hire now": 0,
          "I'm definitely going to hire someone": 0,
          "I'm likely to hire someone": 0,
          "I will possibly hire someone": 0,
          "I'm planning and researching": 0,
        },
      },
    },
  },
};