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
    showGetQuoteButton?: boolean; 

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
    showButton?: boolean; // ✅ New field (false by default)
  };
};

  
export const getServices = async (): Promise<Service[]> => {
    return [

      {
        id: "automotive",
        name: "Automotive ",
        backgroundImage: "/automotive.png",
        heroSection: { 
            title: "Premium Insurance for Luxury Cars",
            description: "The care your luxury cars deserve, with coverage that meets the highest standards",
            backgroundImage: "/v1hero.png",
            showButton: true, 
          
          },
          contactUsContent: { 
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding what matters most, trust in comprehensive protection that keeps your assets secure from unexpected events.",
            backgroundImage: "/automotivefooter.png",
            showGetQuoteButton: true, 

          },
          requestContent: {
            title: "Request Your Exclusive Custom Insurance Quote",
            buttonText: "Request a Complimentary Review", // ✅ Will render "Get a Quote" button
            backgroundImage: "/automotiveferrari.png",
          },
          faqSection: { 
            title: "Frequently Asked Questions",
            description: "Considering duPont REGISTRY Insurance? Here’s what you need to know about us before you sign up for a policy.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars. Select from multiple plan options by top insurance companies the highest-rated coverage provider for exotic cars." },
              { question: "How much are deductibles for luxury sports cars and other expensive vehicles?", answer: "In contrast to plans sold by generic insurance providers, insurance plans sold by duPont REGISTRY Insurance offer a zero deductible for most vehicles, including the best luxury cars around. Other deductible options are available and vary by state and vehicle type. Any applicable deductibles will be available during the online quoting process." },
              { question: "How many years of driving experience are required to be eligible for exotic car coverage?", answer: "Since luxury vehicles are typically more costly to repair, special driver conditions apply. Every driver must be fully licensed with no state-imposed restrictions (such as a suspension). Operators of motorcycles and high-performance vehicles must be licensed for a minimum of 10 years to be eligible for coverage." },
              { question: "Who can drive my car?", answer: "Please speak to your advisor to determine your policy guidelines. " },


              { question: "Is it more expensive to insure the most expensive cars?", answer: "Many factors contribute to monthly insurance premiums for the best luxury cars, but it's not nearly as expensive as most collectors anticipate. Luxury car insurance rates depend on factors like your vehicle's value, location, storage, and usage. Keeping your car in a secure location, such as a locked garage, is favorable to insurers. Discounts may also be available, such as good driver discounts and multi-car discounts." },
              { question: "What are the requirements for luxury car insurance?", answer: "Eligibility for luxury car insurance varies by insurer, regardless of whether you drive a luxury sports car, a luxury SUV, or the latest luxury electric car. Factors typically include limited usage, preferred storage conditions, and driver eligibility. In most states, drivers seeking luxury car insurance should have a clean driving record without serious infractions in the past three years. Luxury car insurers may also require ownership of a regular-use vehicle for daily driving." },
              { question: "Do expensive cars require an appraisal to confirm their value?", answer: "Typically, appraisals are not required. We will contact you during the underwriting process if we need further documentation supporting a vehicle's value, but this is uncommon." },
              { question: "Can I insure other types of high-end vehicles under my car insurance?", answer: "We provide coverage for various luxury vehicle types, including vintage motorcycles, military vehicles, sports vehicles, and more." },

              { question: "Is luxury car insurance more expensive than regular auto insurance?", answer: "Not necessarily. In many cases, luxury car insurance is more affordable than standard auto insurance. This is because luxury car owners typically drive their collectible vehicles less frequently, reducing the likelihood of accidents." },
              { question: "What if I'm not sure what option is best for me?", answer: "That's what we're here for. Contact our concierge team to narrow down your options and find the right insurance plan for you." },
            ],
          },
        
          whyUsContent: {
            title: "What We Cover",
            description: "We provide the best coverage for luxury vehicles.",
            services: [
              { image: "/ac1.png", name: "Liability Coverage", description: "This mandatory coverage pays for damages you cause to others' property or injuries in an accident where you're at fault..", isDimmed: true, overlayImage:"/layer1.png"  },
              { image: "/ac2.png", name: "Comprehensive Coverage", description: "This optional coverage helps pay to repair or replace your vehicle if it's damaged by something other than a collision, including theft, fire, vandalism, or hitting an animal.", isDimmed: true, overlayImage: "/layer2.png" },  // ✅ Dimmed with overlay
              { image: "/ac3.png", name: "Collision Coverage", description: "This optional coverage helps pay to repair or replace your vehicle if it collides with another vehicle or object.", isDimmed: true, overlayImage:"/layer3.png"  }
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
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out anytime. We’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],
        sections: []
      },

      {
        id: "jewelry",
        name: "Jewelry and Collectibles ",
        backgroundImage: "/jewelry.png",
        heroSection: { 
            title: "Premium Insurance for Fine Jewelry and Collectibles",
            description: "Protecting your most prized possessions with coverage that honors their value",
            backgroundImage: "/v2hero.png",


          },
          contactUsContent: { 
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding what matters most, trust in comprehensive protection that keeps your assets secure from unexpected events.",
            backgroundImage: "/Jewelryrolex.png",
            showGetQuoteButton: false, 

          },
          requestContent: {
            title: "Request Your Exclusive Custom Insurance Quote",
            buttonText: "Email", // ✅ Will render the Email button
            backgroundImage: "/Jewelryhand.png",
          },
        faqSection: { 
            title: "Frequently Asked Questions",
            description: "Considering duPont REGISTRY Insurance? Here’s what you need to know about us before you sign up for a policy.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, Jewelry, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies the highest-rated coverage provider for exotic cars." },

              { question: "Change to How are the values of my collectables determined? (Jewelry, fine arts, wine, etc.)", answer: "For high-value or rare pieces, we recommend professional appraisals to ensure accurate coverage. If you have recent purchase receipts, auction results, or third-party valuations, we can use them to help determine the proper insurance amount. Our goal is to protect your collection at its true worth, so you can have peace of mind knowing it’s covered in case of loss, theft, or damage." },

              { question: "what types of collectables can be insured?", 
                answer: `
                
                    <p >At duPont Registry Insurance, we offer comprehensive coverage for a wide range of valuable collections. Our policies can protect items such as:</p>

                    <div class="spe">
                      <p><strong>Jewelry:</strong> From individual pieces to extensive collections, your Jewelry is safeguarded against various risks.</p>
                      <p><strong>Fine Art:</strong> Including paintings, sculptures, and artifacts, we ensure your art pieces are covered.</p>
                      <p><strong>Wine and Spirits:</strong> Whether you have a few rare bottles or a vast cellar, our coverage protects your collection.</p>
                      <p><strong>Designer Couture and Handbags:</strong> High-value fashion items, such as designer clothing and handbags, are also insurable under our policies.</p>
                      </div>

                    <p>Additionally, we provide coverage for other collectibles, including:</p>
                      <li>Antiques</li>
                      <li>Sports Memorabilia</li>
                      <li>Musical Instruments</li>
                      <li>Rare Books</li>
                      <li>Stamps and Coins</li>

                          <p class="mt">Our goal is to offer tailored insurance solutions that meet the unique needs of collectors, ensuring your treasured items are protected.</p>

                      
                  
                `,
                },
             
              { question: "Are pictures and appraisals required?", answer: "Documentation requirements vary depending on the value of your collectibles. For high-value items, insurers may require appraisals, receipts, or photographs to establish accurate coverage. While lower-value pieces may not always need documentation, providing pictures and purchase records is highly recommended. This helps streamline the claims process and ensures your items are insured at their true worth. Each policy is tailored to your collection, so we can guide you on the best documentation practices for comprehensive protection." },
            ],
          },
        

          
          whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific Jewelry-related losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/jc1.png", name: "Agreed Value", description: "This essential coverage pays for repair or replacement costs If your jewelry or collectibles are lost, stolen or damaged, ensuring peace of mind for your valuable items", isDimmed: true, overlayImage:"/coverjewelryicon1.svg"  },
              { image: "/jc2.png", name: "Worldwide coverage", description: "This coverage protects items wherever they are located, whether at home, in transit, or on display (e.g., in galleries, museums, or private events).", isDimmed: true, overlayImage: "/coverjewelryicon2.svg" },  // ✅ Dimmed with overlay
              { image: "/jc3.png", name: "Accidental breakage or damage", description: "Accidental breakage or damage coverage ensures your valuable Jewelry is protected against unexpected mishaps, such as dropping, chipping, or cracking, providing comprehensive peace of mind for high-net-worth collectors.", isDimmed: true, overlayImage:"/coverjewelryicon3.svg"  }
            ]
          },
        imageSection: { // ✅ Only Jewelry Insurance has this section
          mediaUrl:"/Jewelrysection1.png",
          altText: "Jewelry Insurance Banner"
        },
        splitSections: [ // ✅ Use an array to hold multiple SplitSections
            {
              imageUrl: "/jewelryright1.png",
              content: [
                { title: "Mysterious disappearance", description: "Mysterious disappearance coverage protects your Jewelry collection against unexplained loss, offering reassurance in situations where items vanish without a clear cause." },
                { title: "Coverage for newly acquired Items", description: "Provides automatic, temporary coverage for newly purchased items until they are officially added to the policy." },
                { title: "Coverage for transit & shipping", description: "Insures items while being transported, whether by air, sea, or specialized collection movers." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/jewelryleft1.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out anytime. We’re happy to help ensure your prized possessions are properly protected." },
          
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
            description: "Safeguarding your valued estates with coverage that preserves their prestige",
            backgroundImage: "/v3hero.png",

        
          },      
         whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific real estate-related losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/rc1.png", name: "Rebuilding flexibility", description: "In the event of a fire or other loss that destroys your home, this coverage allows you to choose between rebuilding or receiving a cash settlement—putting the decision in your hands.", isDimmed: true, overlayImage:"/real1.svg"  },
              { image: "/rc2.png", name: "Guaranteed Home Replacement Cost", description: "This coverage ensures that your luxury home can be rebuilt to its original standard, even if the rebuilding costs exceed your policy limits, providing you with ultimate peace of mind.", isDimmed: true, overlayImage: "/real2.svg" },  // ✅ Dimmed with overlay
              { image: "/rc3.png", name: "Personal Liability", description: "Everyday life carries risks of accidents or allegations against you and your family. Personal liability coverage protects you from financial loss by covering defense costs and damages for accidental injury or property damage.", isDimmed: true, overlayImage:"/real3.svg"  }
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
                { title: "Risk Management Advice", description: "Risk Management Advice provide complimentary home appraisals to ensure your home and valuables are fully protected, while also offering guidance on security and fire prevention." },
                { title: "Temporary Living Arrangements", description: "If a covered loss makes your home uninhabitable, this coverage will help you secure a comfortable temporary residence, whether it's a similar home in your school district or a suitable hotel." },
                { title: "Cyber & Identity Theft", description: "Provides coverage for personal cyber risks, connected device vulnerabilities, and identity theft, ensuring protection against cyberattacks and compromised identities." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/realstateleft.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out anytime. We’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],
          requestContent: {
            title: "Request Your Exclusive Custom Insurance Quote",
            buttonText: "Email", // ✅ Will render the Email button
            backgroundImage: "/realstatecover.png",
          },  
          faqSection: { 
            title: "Frequently Asked Questions",
            description: "Considering duPont REGISTRY Insurance? Here’s what you need to know about us before you sign up for a policy.",
            faqs: [
              { question: "What is duPont REGISTRY Insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, Jewelry, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies the highest-rated coverage provider for exotic cars." },
              { question: "What makes luxury home insurance different from standard homeowners insurance?", answer: "Luxury home insurance is designed to provide broader and more customizable coverage for high-value properties. It accounts for the unique features of High-Valued Homes., such as high-end materials, custom architecture and additional structures like guest houses or private pools. Unlike standard policies, luxury home insurance often includes extended replacement cost coverage, cash settlement options, and protection against risks like water damage, cyber threats, and identity theft." },
              { question: "How is the value of my home determined for insurance purposes?", answer: "Insurance carriers use a combination of expert appraisals, market data, and specialized cost estimators to determine the true replacement value of your home. This includes high-end finishes, custom craftsmanship, and any unique architectural details. Unlike market value, which fluctuates based on real estate trends, your home’s insured value is based on the cost to rebuild it to its original specifications with similar quality materials." },
               { question: "What additional coverages are available for High-Valued Homes.?", 
                answer: `
                
                    <p >Luxury home insurance policies offer enhanced protection beyond standard homeowners insurance, including:</p>

                    <div class="spe">
                      <p><strong>Extended Replacement Cost:</strong> Covers rebuilding costs, even if they exceed policy limits.</p>
                      <p><strong>High-Value Personal Property:</strong> Coverage for fine art, Jewelry, wine collections, and more.</p>
                      <p><strong>Private Staff & Liability:</strong> Protection for household employees, such as nannies or estate managers.</p>
                      <p><strong>Cyber & Identity Theft Protection: :</strong> Safeguards against cyberattacks and fraud.</p>
                       <p><strong> Water & Sewer Backup Coverage: </strong>Covers damage from sump pump failure, or water/sewer backups.</p>
                      </div>

                   
                `,
                },
            ],
          },
          contactUsContent: { 
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding what matters most, trust in comprehensive protection that keeps your assets secure from unexpected events.",
            backgroundImage: "/realstatefooter.png",
            showGetQuoteButton: false, 

          },
        sections: []
      },

      {
        id: "Aviation",
        name: "Aviation",
        backgroundImage: "/aviation.png",
        heroSection: { 
            title: "Premium Insurance for Aircraft Owners",
            description: "Securing your aviation investments with the highest level of protection",
            backgroundImage: "/v4hero.png",

         
          },

          whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific real aviation losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/p1.png", name: "Hull Coverage", description: "Protects the aircraft itself against physical damage from accidents, theft, or weather-related events, whether in the air or on the ground.", isDimmed: true, overlayImage:"/covera1icon.svg"  },
              { image: "/p2.png", name: "Liability Coverage", description: "Covers bodily injury or property damage caused to others while operating the aircraft, ensuring financial protection in case of lawsuits or claims.", isDimmed: true, overlayImage: "/covera2icon.svg" },  // ✅ Dimmed with overlay
              { image: "/p3.png", name: "Hangar Coverage", description: "Protects the hangar or storage facility you own or lease for your aircraft against physical damage, ensuring your storage space is covered in case of fire, theft, or other covered events.", isDimmed: true, overlayImage:"/covera3icon.svg"  }
            ]
          },

        imageSection: { // ✅ Only Jewelry Insurance has this section
          mediaUrl:"/Aviationsection.png",
          altText: "Jewelry Insurance Banner"
        },

        requestContent: {
          title: "Request Your Exclusive Custom Insurance Quote",
          buttonText: "Email", // ✅ Will render the Email button
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
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out anytime. We’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],

          faqSection: { // ✅ Only Jewelry Insurance has this section
            title: "Frequently Asked Questions",
            description: "Considering duPont REGISTRY Insurance? Here’s what you need to know about us before you sign up for a policy.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "Aviation insurance provides coverage for aircraft owners, operators, and pilots against risks such as physical damage to the aircraft, liability for passenger injuries, and third-party property damage. Policies can also include coverage for hangars, ground equipment, and loss of use. Coverage options vary based on the type of aircraft, usage (private, corporate, or commercial), and specific policy needs." },
              { question: "What does aviation insurance cover?", answer: "Aviation insurance provides coverage for aircraft owners, operators, and pilots against risks such as physical damage to the aircraft, liability for passenger injuries, and third-party property damage. Policies can also include coverage for hangars, ground equipment, and loss of use. Coverage options vary based on the type of aircraft, usage (private, corporate, or commercial), and specific policy needs." },
              { question: "Do I need liability insurance if I only fly privately?", answer: "Yes, liability insurance is essential even for private aircraft owners. It protects you against claims for bodily injury, property damage, or legal expenses if an accident occurs. Without liability coverage, you could be personally responsible for significant financial losses. Many policies also include guest passenger liability to cover anyone onboard." },
              { question: "How is the cost of aviation insurance determined?", answer: "Premiums are based on several factors, including the type of aircraft, its value, intended use (personal, business, or commercial), pilot experience, and safety records. Other considerations include storage location, flight hours, and any additional liability or coverage options selected. Working with an experienced aviation insurance provider ensures that you get a policy tailored to your specific needs." },
            ],
          },

          contactUsContent: { // ✅ Add contact section dynamically
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding what matters most, trust in comprehensive protection that keeps your assets secure from unexpected events.",
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
            description: "Exceptional protection for your yachts and watercraft, ensuring peace of mind on every voyage",
            backgroundImage: "/v5hero.png",

          
          },
          
          whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific marine-related losses as outlined in your policy. This coverage typically includes:",
            services: [
              { image: "/y1.png", name: "Agreed Value Coverage", description: "Provides full reimbursement based on the pre-determined value of your yacht/watercraft in the event of a total loss, with no depreciation applied..", isDimmed: true, overlayImage:"/marine1icon.svg"  },
              { image: "/y2.png", name: "Liability Protection", description: "Customized coverage limits to match your needs, including legal defense costs, liability under the Oil Pollution Act of 1990, wreck removal expenses, and Jones Act coverage for your paid crew.", isDimmed: true, overlayImage: "/marine2icon.svg" },  // ✅ Dimmed with overlay
              { image: "/y3.png", name: "Uninsured / Underinsured Boater Coverage", description: "Provides compensation for bodily injuries sustained by individuals on the insured yacht/watercraft when injured by another vessel's uninsured or underinsured owner or operator.", isDimmed: true, overlayImage:"/time.svg"  }
            ]
          },

        imageSection: { 
          mediaUrl:"/Yachtssection.png",
          altText: "Jewelry Insurance Banner"
        },

        requestContent: {
          title: "Request Your Exclusive Custom Insurance Quote",
          buttonText: "Email", // ✅ Will render the Email button
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
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out anytime. We’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],

          faqSection: { 
            title: "Frequently Asked Questions",
            description: "Considering duPont REGISTRY Insurance? Here’s what you need to know about us before you sign up for a policy.",
            faqs: [

             { question: "What is duPont REGISTRY insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, jewlery, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies the highest-rated coverage provider for exotic cars." },
              { question: "What does yacht and watercraft insurance cover?", answer: "Yacht and watercraft insurance provides coverage for physical damage to your vessel, liability protection, and additional risks such as theft, weather-related damage, and pollution liability. Policies can also include protection for crew members, onboard personal property, towing assistance, and uninsured boaters. Coverage varies depending on the type, size, and usage of the vessel." },
              { question: "How is the value of my yacht or watercraft determined for insurance?", answer: "The insured value of your yacht or boat is typically based on its agreed value or purchase price." },
              { question: "Does yacht insurance cover international waters and hurricane zones?", answer: "Coverage varies depending on your policy and navigation limits. Some policies provide worldwide coverage, while others have specific navigational limits that restrict where you can operate your vessel. If you sail in hurricane-prone areas, you may need to follow storm preparedness plans to maintain coverage during hurricane season. Additional endorsements can be added for expanded cruising areas and year-round protection." },
            ],
          },

          contactUsContent: { // ✅ Add contact section dynamically
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding what matters most, trust in comprehensive protection that keeps your assets secure from unexpected events.",
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
            description: "Preserving the rarity and value of your collection as it matures with time",
            backgroundImage: "/v6hero.png",       
          },
          
          whyUsContent: {
            title: "What We Cover",
            description: "By paying a premium, the insurer agrees to cover specific losses related to your wine and spirits collection as outlined in your policy.",
            services: [
              { image: "/w1.png", name: "Broad Coverage for Loss or Damage", description: "Protects your wine collection against risks such as fire, theft, breakage, vandalism, and temperature-related damage due to mechanical failure (e.g., wine cellar cooling system malfunctions).", isDimmed: true, overlayImage:"/wineicon1.svg"  },
              { image: "/w2.png", name: "Worldwide Coverage", description: "Ensures your wine collection is protected whether stored at home, in a secondary residence, or in transit (e.g., shipping or moving between locations).", isDimmed: true, overlayImage: "/wineicon2.svg" },  // ✅ Dimmed with overlay
              { image: "/w3.png", name: "Spoilage Coverage", description: "Covers spoilage caused by power outages, refrigeration failures, or climate control system malfunctions that result in temperature changes.", isDimmed: true, overlayImage:"/wineicon3.svg"  }
            ]
          },

        imageSection: { 
          mediaUrl:"/spirritbigimage.png",
          altText: "Jewelry Insurance Banner"
        },

        requestContent: {
          title: "Request Your Exclusive Custom Insurance Quote",
          buttonText: "Email", // ✅ Will render the Email button
          backgroundImage: "/spiritscover.png",
        },

        splitSections: [ 
            {
              imageUrl: "/rightspirit.png",
              content: [
                { title: "All-Risk Coverage", description: "Protects art collections from risks like fire, theft, accidental damage, and natural disasters" },
                { title: "Breakage Protection", description: "Covers accidental breakage, particularly for fragile sculptures or glass pieces." },
                { title: "Loaned Art Coverage", description: "Protects pieces loaned to galleries, museums, or exhibitions." }
              ],
              reverse: false, // Normal order
            },
            {
              imageUrl: "/leftspirit.png",
              content: [
                { title: "Eligibility and Requirement", description: "To apply for coverage, simply click Get a Free Custom Quote below. Eligibility and requirements may vary based on the type of insurance and the value of your assets. If you have any questions about the application process or coverage options, our team is here to assist you. Don’t hesitate to reach out anytime. We’re happy to help ensure your prized possessions are properly protected." },
          
              ],
              reverse: true, // Reversed order
            }
          ],

          faqSection: { // ✅ Only Jewelry Insurance has this section
            title: "Frequently Asked Questions",
            description: "Considering duPont REGISTRY Insurance? Here’s what you need to know about us before you sign up for a policy.",
            faqs: [
              { question: "What is duPont REGISTRY insurance?", answer: "duPont REGISTRY is an insurance broker. It operates as a distributor of insurance options designed specifically to cover luxury and exotic cars, Jewelry, real estate, aviation, marine and personal goods. Select from multiple plan options by top insurance companies the highest-rated coverage provider for exotic cars." },
              { question: "What types of couture and high-value fashion items can be insured?", 
                answer: `
                
                <p>Our policies cover a wide range of luxury fashion items, including:</p>

                <div class="spe">
                  <p><strong>Designer clothing & couture collections </strong>(custom gowns, runway pieces, bespoke suits)</p>
                  <p><strong>Luxury handbags</strong>  (Hermès, Chanel, Louis Vuitton, etc.)</p>
                  <p><strong>Rare & vintage fashion pieces </strong></p>
                  <p><strong>High-end shoes & accessories </strong> (watches, belts, scarves, sunglasses)</p>
                   <p><strong>Fur & exotic leather goods</strong> Whether your collection is for personal use or investment, we ensure comprehensive protection.</p>
                  </div>

               
            `, },
              { question: "How is the value of my couture collection determined?", answer: "The insured value is typically based on purchase price, appraisal, or current market value. For rare and vintage pieces, we work with industry experts to assess their worth. " },
              { question: " Does insurance cover damage, theft, or loss while traveling?", answer: "Yes, many couture insurance policies offer worldwide coverage, protecting your collection whether it's at home, in storage, or while traveling. " },
            ],
          },

          contactUsContent: { // ✅ Add contact section dynamically
            title: "Request Your Complimentary Quote",
            description: "When it comes to safeguarding what matters most, trust in comprehensive protection that keeps your assets secure from unexpected events.",
            backgroundImage: "/footerimagespirit.png",
          },
          sections: []

      },
    
    ];
};


export const getServiceById = async (id: string): Promise<Service | null> => {
    const services = await getServices(); // ✅ Ensure `await` is used here
    return services.find((service) => service.id === id) || null;
};
  
  
  