export type Service = {
  id: string;
  name: string;
  sections: Array<{ title: string; content: string }>;
  backgroundImage?: string;
  requestContent?: {
    title: string;
    buttonText?: string;
    backgroundImage: string;
  };
  whyUsContent?: {
    title: string;
    description: string;
    services: Array<{
      image: string;
      name: string;
      description: string;
      isDimmed?: boolean;
      overlayImage?: string;
    }>;
  };
  imageSection?: {
    mediaUrl: string;
    altText: string;
  };
  faqSection?: {
    title: string;
    description: string;
    faqs: Array<{ question: string; answer: string }>;
  };
  contactUsContent?: {
    title: string;
    description: string;
    backgroundImage: string;
  };
  splitSections?: Array<{
    imageUrl: string;
    content: Array<{ title: string; description: string }>;
    reverse?: boolean;
  }>;
  heroSection?: {
    title: string;
    description: string;
    backgroundImage: string;
    showButtons?: boolean; // ✅ New field (false by default)
  };
};


  
  export const getServices = async (): Promise<Service[]> => {
    return [
      {
        id: "automotive",
        name: "Automotive Insurance",
        backgroundImage: "/automotive.png",
        heroSection: { 
            title: "Quality Insurance for Luxury Cars",
            description: "Personalized Protection for Your Prized Vehicles",
            backgroundImage: "/automotiveHero.png",
            showButtons: true, 
          
          },
          contactUsContent: { // ✅ Add contact section dynamically
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding your vehicle, trust in comprehensive protection that keeps your car safe from unexpected events.",
            backgroundImage: "/automotivefooter.png",
          },
          requestContent: {
            title: "Request Your Exclusive Custom Insurance Quote",
            buttonText: "Get a Jewelry Quote",
            backgroundImage: "/automotiveferrari.png",
          },
        faqSection: { // ✅ Only Jewelry Insurance has this section
            title: "Jewelry Insurance FAQs",
            description: "Find answers to common questions about jewelry insurance coverage and claims.",
            faqs: [
              { question: "What is duPont REGISTRY insurance", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, jewlery, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies, including Hagerty, the highest-rated coverage provider for exotic cars." },
              { question: "How do I file a claim?", answer: "You can file a claim online through our easy-to-use portal." },
              { question: "Do I need an appraisal?", answer: "Yes, an appraisal is required for items valued over $5,000." },
              { question: "How much does jewelry insurance cost?", answer: "Our rates vary based on the item’s value and your location." },
            ],
          },
        
          whyUsContent: {
            title: "What We Cover",
            description: "We provide the best coverage for luxury and commercial vehicles.",
            services: [
              { image: "/automotivecover1.png", name: "Liability Coverage", description: "This mandatory coverage pays for damages you cause to others' property or injuries in an accident where you're at fault..", isDimmed: true, overlayImage:"/layer1.png"  },
              { image: "/automotivecover2.png", name: "Comprehensive Coverage", description: "This optional coverage helps pay to repair or replace your vehicle if it's damaged by something other than a collision, including theft, fire, vandalism, or hitting an animal.", isDimmed: true, overlayImage: "/layer2.png" },  // ✅ Dimmed with overlay
              { image: "/automotivecover3.png", name: "Collision Coverage", description: "This optional coverage helps pay to repair or replace your vehicle if it overturns or collides with another vehicle or object.", isDimmed: true, overlayImage:"/layer3.png"  }
            ]
          },
        imageSection: { 
          mediaUrl:"/automotivevideo.mp4",
          altText: "Jewelry Insurance Banner"
        },
        splitSections: [ 
            {
              imageUrl: "/automotiverleft.png",
              content: [
                { title: "Third-Party Liability Protection ", description: "This mandatory coverage pays for damages you cause to others' property or injuries in an accident where you're at fault." },
                { title: "Accident Damage Protection", description: "This optional coverage helps pay to repair or replace your vehicle if it overturns or collides with another vehicle or object." },
                { title: "Non-Collision Damage Protection", description: "This optional coverage helps pay to repair or replace your vehicle if it's damaged by something other than a collision, including theft, fire, vandalism, or hitting an animal." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/automotiveright.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out—we’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],
        sections: []
      },
      {
        id: "jewelry",
        name: "Jewelry Insurance",
        backgroundImage: "/jewelry.png",
        heroSection: { 
            title: "Premium Insurance for Fine Jewelry and Collectibles",
            description: "Personalized Protection for Your Treasured Collection",
            backgroundImage: "/Jewelryherospecial.png",

          },
          contactUsContent: { // ✅ Add contact section dynamically
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding your vehicle, trust in comprehensive protection that keeps your car safe from unexpected events.",
            backgroundImage: "/Jewelryrolex.png",
          },
          requestContent: {
            title: "Request Your Exclusive Custom Insurance Quote",
            buttonText: "Get a Jewelry Quote",
            backgroundImage: "/Jewelryhand.png",
          },
        faqSection: { // ✅ Only Jewelry Insurance has this section
            title: "Jewelry Insurance FAQs",
            description: "Find answers to common questions about jewelry insurance coverage and claims.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, jewlery, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies, including Hagerty, the highest-rated coverage provider for exotic cars." },
              { question: "How do I file a claim?", answer: "You can file a claim online through our easy-to-use portal." },
              { question: "Do I need an appraisal?", answer: "Yes, an appraisal is required for items valued over $5,000." },
              { question: "How much does jewelry insurance cost?", answer: "Our rates vary based on the item’s value and your location." },
            ],
          },
        
          whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific jewelry-related losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/Jewelrycover1.png", name: "Agreed Value", description: "This essential coverage pays for repair or replacement costs if your jewelry is lost, stolen, or damaged, ensuring peace of mind for your valuable items.", isDimmed: true, overlayImage:"/coverjewelryicon1.svg"  },
              { image: "/Jewelrycover2.png", name: "Worldwide coverage", description: "This coverage protects items wherever they are located, whether at home, in transit, or on display (e.g., in galleries, museums, or private events).", isDimmed: true, overlayImage: "/coverjewelryicon2.svg" },  // ✅ Dimmed with overlay
              { image: "/Jewelrycover3.png", name: "Accidental breakage or damage", description: "Accidental breakage or damage coverage ensures your valuable jewelry is protected against unexpected mishaps, such as dropping, chipping, or cracking, providing comprehensive peace of mind for high-net-worth collectors.", isDimmed: true, overlayImage:"/coverjewelryicon3.svg"  }
            ]
          },
        imageSection: { // ✅ Only Jewelry Insurance has this section
          mediaUrl:"/Jewelrysection1.png",
          altText: "Jewelry Insurance Banner"
        },
        splitSections: [ // ✅ Use an array to hold multiple SplitSections
            {
              imageUrl: "/jewelryrightsspecial.png",
              content: [
                { title: "Mysterious disappearance", description: "Mysterious disappearance coverage protects your jewelry collection against unexplained loss, offering reassurance in situations where items vanish without a clear cause." },
                { title: "Coverage for newly acquired Items", description: "Provides automatic, temporary coverage for newly purchased items until they are officially added to the policy." },
                { title: "Coverage for transit & shipping", description: "Insures items while being transported, whether by air, sea, or specialized collection movers." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/jewelrylefts.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out—we’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],
        sections: []
      },
      {
        id: "RealState",
        name: "Real Estate",
        backgroundImage: "/realstate.png",
        heroSection: { 
            title: "Premium Insurance for Luxury Properties",
            description: "Personalized Protection for Your Valued Estates",
            backgroundImage: "/realstatehero.png",
        
          },      
         whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific jewelry-related losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/realstatecover1.png", name: "Rebuilding flexibility", description: "In the event of a fire or other loss that destroys your home, this coverage allows you to choose between rebuilding or receiving a cash settlement—putting the decision in your hands.", isDimmed: true, overlayImage:"/real1.svg"  },
              { image: "/realstatecover2.png", name: "Guaranteed Home Replacement Cost", description: "This coverage ensures that your luxury home can be rebuilt to its original standard, even if the rebuilding costs exceed your policy limits, providing you with ultimate peace of mind.", isDimmed: true, overlayImage: "/real2.svg" },  // ✅ Dimmed with overlay
              { image: "/realstatecover3.png", name: "Personal Liability", description: "Everyday life carries risks of accidents or allegations against you and your family. Personal liability coverage protects you from financial loss by covering defense costs and damages for accidental injury or property damage.", isDimmed: true, overlayImage:"/real3.svg"  }
            ]
          },
          imageSection: { 
            mediaUrl:"/realstatesection.png",
          altText: "Jewelry Insurance Banner"
          },
          splitSections: [
            {
              imageUrl: "/rightr.png",
              content: [
                { title: "Risk Consulting", description: "Risk consultants provide complimentary home appraisals to ensure your home and valuables are fully protected, while also offering guidance on security and fire prevention." },
                { title: "Temporary Living Arrangements", description: "If a covered loss makes your home uninhabitable, this coverage will help you secure a comfortable temporary residence, whether it's a similar home in your school district or a suitable hotel." },
                { title: "Cyber & Identity Theft", description: "Provides coverage for personal cyber risks, connected device vulnerabilities, and identity theft, ensuring protection against cyberattacks and compromised identities." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/realstateleft.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out—we’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],
          requestContent: {
            title: "Request Your Exclusive Custom Insurance Quote",
            buttonText: "Get a Jewelry Quote",
            backgroundImage: "/realstatecover.png",
          },  
          faqSection: { 
            title: "Jewelry Insurance FAQs",
            description: "Find answers to common questions about jewelry insurance coverage and claims.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "Jewelry insurance covers loss, theft, and accidental damage." },
              { question: "What makes luxury home insurance different from standard homeowners insurance?", answer: "You can file a claim online through our easy-to-use portal." },
              { question: "How is the value of my home determined for insurance purposes?", answer: "Yes, an appraisal is required for items valued over $5,000." },
              { question: "What additional coverages are available for luxury homes?", answer: "Our rates vary based on the item’s value and your location." },
            ],
          },
          contactUsContent: { 
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding your vehicle, trust in comprehensive protection that keeps your car safe from unexpected events.",
            backgroundImage: "/realstatefooter.png",
          },
        sections: []
      },
      {
        id: "Aviation",
        name: "Aviation",
        backgroundImage: "/aviation.png",
        heroSection: { 
            title: "Premium Insurance for Aircraft Owners",
            description: "Personalized Protection for Your Aviation Investments",
            backgroundImage: "/Aviationherospecial.png",
         
          },

          whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific jewelry-related losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/Aviationcover1.png", name: "Hull Coverage", description: "Protects the aircraft itself against physical damage from accidents, theft, or weather-related events, whether in the air or on the ground.", isDimmed: true, overlayImage:"/covera1icon.svg"  },
              { image: "/Aviationcover2.png", name: "Liability Coverage", description: "Covers bodily injury or property damage caused to others while operating the aircraft, ensuring financial protection in case of lawsuits or claims.", isDimmed: true, overlayImage: "/covera2icon.svg" },  // ✅ Dimmed with overlay
              { image: "/Aviationcover3.png", name: "Hangar Coverage", description: "Protects the hangar or storage facility you own or lease for your aircraft against physical damage, ensuring your storage space is covered in case of fire, theft, or other covered events.", isDimmed: true, overlayImage:"/covera3icon.svg"  }
            ]
          },

        imageSection: { // ✅ Only Jewelry Insurance has this section
          mediaUrl:"/Aviationsection.png",
          altText: "Jewelry Insurance Banner"
        },

        requestContent: {
          title: "Request Your Exclusive Custom Insurance Quote",
          buttonText: "Get a Jewelry Quote",
          backgroundImage: "/Aviationcover.png",
        },

        splitSections: [ // ✅ Use an array to hold multiple SplitSections
            {
              imageUrl: "/Aviationright.png",
              content: [
                { title: "Emergency Landing Coverage", description: "Covers costs associated with an unscheduled or emergency landing, including aircraft retrieval, towing, and damage to the landing site, ensuring you are protected during unexpected situations." },
                { title: "Loss of Use Coverage", description: "Provides compensation for expenses or income lost due to the aircraft being out of service after a covered loss, helping to offset rental or alternative transportation costs." },
                { title: "Search and Rescue Coverage", description: "Covers the costs associated with search and rescue operations in the event of an emergency, ensuring you have support in locating the aircraft and its occupants if lost or stranded." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/Aviationleft.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out—we’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],

          faqSection: { // ✅ Only Jewelry Insurance has this section
            title: "Jewelry Insurance FAQs",
            description: "Find answers to common questions about jewelry insurance coverage and claims.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, jewlery, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies, including Hagerty, the highest-rated coverage provider for exotic cars." },
              { question: "What does aviation insurance cover?", answer: "You can file a claim online through our easy-to-use portal." },
              { question: "Do I need liability insurance if I only fly privately?", answer: "Yes, an appraisal is required for items valued over $5,000." },
              { question: "How is the cost of aviation insurance determined?", answer: "Our rates vary based on the item’s value and your location." },
            ],
          },

          contactUsContent: { // ✅ Add contact section dynamically
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding your vehicle, trust in comprehensive protection that keeps your car safe from unexpected events.",
            backgroundImage: "/Aviationfooter.png",
          },
        sections: []
      },

      {
        id: "Marine",
        name: "Yachts & Watercraft",
        backgroundImage: "/marine.png",
        heroSection: { 
            title: "Premium Insurance for Yachts & Watercraft",
            description: "Personalized Protection for Your Yachts and Watercraft",
            backgroundImage: "/Yachtshero.png",
          
          },
          
          whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific marine-related losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/Yachtscover1.png", name: "Agreed Value Coverage", description: "Provides full reimbursement based on the pre-determined value of your yacht/watercraft in the event of a total loss, with no depreciation applied..", isDimmed: true, overlayImage:"/marine1icon.svg"  },
              { image: "/Yachtscover2.png", name: "Liability Protection", description: "Customized coverage limits to match your needs, including legal defense costs, liability under the Oil Pollution Act of 1990, wreck removal expenses, and Jones Act coverage for your paid crew.", isDimmed: true, overlayImage: "/marine2icon.svg" },  // ✅ Dimmed with overlay
              { image: "/Yachtscover3.png", name: "Uninsured / Underinsured Boater Coverage", description: "Provides compensation for bodily injuries sustained by individuals on the insured yacht/watercraft when injured by another vessel's uninsured or underinsured owner or operator.", isDimmed: true, overlayImage:"/marine3icon.svg"  }
            ]
          },

        imageSection: { 
          mediaUrl:"/Yachtssection.png",
          altText: "Jewelry Insurance Banner"
        },

        requestContent: {
          title: "Request Your Exclusive Custom Insurance Quote",
          buttonText: "Get a Jewelry Quote",
          backgroundImage: "/Yachtscover.png",
        },

        splitSections: [ 
            {
              imageUrl: "/Yachtsright.png",
              content: [
                { title: "Captain and Crew Coverage", description: "Extends liability protection to include the captain and crew members serving on the insured yacht." },
                { title: "Precautionary Measures", description: "Covers reasonable expenses, up to the policy limit, for hauling, fueling, or docking the insured watercraft to protect it from an approaching covered peril, such as a hurricane." },
                { title: "Dinghy/Tender Coverage", description: "Provides protection for your dinghy or tender used to travel between your yacht and shore when moored offshore." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/Yachtsleft.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out—we’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],

          faqSection: { // ✅ Only Jewelry Insurance has this section
            title: "Jewelry Insurance FAQs",
            description: "Find answers to common questions about jewelry insurance coverage and claims.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, jewlery, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies, including Hagerty, the highest-rated coverage provider for exotic cars." },
              { question: "What does yacht and watercraft insurance cover?", answer: "You can file a claim online through our easy-to-use portal." },
              { question: "How is the value of my yacht or watercraft determined for insurance?", answer: "Yes, an appraisal is required for items valued over $5,000." },
              { question: "Does yacht insurance cover international waters and hurricane zones?", answer: "Our rates vary based on the item’s value and your location." },
            ],
          },

          contactUsContent: { // ✅ Add contact section dynamically
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding your vehicle, trust in comprehensive protection that keeps your car safe from unexpected events.",
            backgroundImage: "/Yachtsfooter.png",
          },
          sections: []

      },

      {
        id: "Wine",
        name: "Wine and Spirits ",
        backgroundImage: "/wine.png",
        heroSection: { 
            title: "Premium Insurance for Wine and Spirits",
            description: "Personalized Protection for Your Wine and Spirits",
            backgroundImage: "/spiritshero.png",
           
          },
          
          whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific personal goods-related losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/spiritscover1.png", name: "Broad Coverage for Loss or Damage", description: "Protects your wine collection against risks such as fire, theft, breakage, vandalism, and temperature-related damage due to mechanical failure (e.g., wine cellar cooling system malfunctions).", isDimmed: true, overlayImage:"/wineicon1.svg"  },
              { image: "/spiritscover2.png", name: "Worldwide Coverage", description: "Ensures your wine collection is protected whether stored at home, in a secondary residence, or in transit (e.g., shipping or moving between locations).", isDimmed: true, overlayImage: "/wineicon2.svg" },  // ✅ Dimmed with overlay
              { image: "/spiritscover3.png", name: "Spoilage Coverage", description: "Covers spoilage caused by power outages, refrigeration failures, or climate control system malfunctions that result in temperature changes.", isDimmed: true, overlayImage:"/wineicon3.svg"  }
            ]
          },

        imageSection: { 
          mediaUrl:"/spiritssection.png",
          altText: "Jewelry Insurance Banner"
        },

        requestContent: {
          title: "Request Your Exclusive Custom Insurance Quote",
          buttonText: "Get a Jewelry Quote",
          backgroundImage: "/spiritscover.png",
        },

        splitSections: [ 
            {
              imageUrl: "/spiritsright.png",
              content: [
                { title: "All-Risk Coverage", description: "Protects art collections from risks like fire, theft, accidental damage, and natural disasters" },
                { title: "Breakage Protection", description: "Covers accidental breakage, particularly for fragile sculptures or glass pieces." },
                { title: "Loaned Art Coverage", description: "Protects pieces loaned to galleries, museums, or exhibitions." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/spiritsleft.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out—we’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],

          faqSection: { // ✅ Only Jewelry Insurance has this section
            title: "Jewelry Insurance FAQs",
            description: "Find answers to common questions about jewelry insurance coverage and claims.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, jewlery, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies, including Hagerty, the highest-rated coverage provider for exotic cars." },
              { question: "What types of couture and high-value fashion items can be insured?", answer: "You can file a claim online through our easy-to-use portal." },
              { question: "How is the value of my couture collection determined?", answer: "Yes, an appraisal is required for items valued over $5,000." },
              { question: "Does insurance cover damage, theft, or loss while traveling?", answer: "Our rates vary based on the item’s value and your location." },
            ],
          },

          contactUsContent: { // ✅ Add contact section dynamically
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding your vehicle, trust in comprehensive protection that keeps your car safe from unexpected events.",
            backgroundImage: "/spiritsfooter.png",
          },
          sections: []

      },
    
    ];
  };

  
  export const getServiceById = async (id: string): Promise<Service | null> => {
    const services = await getServices(); // ✅ Ensure `await` is used here
    return services.find((service) => service.id === id) || null;
  };
  
  
  