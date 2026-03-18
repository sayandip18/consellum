export interface UpdateArticle {
  date: string;
  title: string;
  summary: string;
  tag?: string;
}

export interface UpdateCategory {
  id: string;
  title: string;
  description: string;
  articles: UpdateArticle[];
}

export const UPDATES_LIST: UpdateCategory[] = [
  {
    id: 'bis-isi-updates',
    title: 'BIS / ISI News and Updates',
    description:
      'Stay current with the latest circulars, scheme amendments, and mandatory certification orders issued by the Bureau of Indian Standards.',
    articles: [
      {
        date: 'March 2025',
        tag: 'New Order',
        title: 'BIS Expands Mandatory Certification to 10 New Product Categories',
        summary:
          'The Bureau of Indian Standards has notified mandatory BIS certification for 10 additional product categories including certain plastic goods, electrical accessories, and steel products. Manufacturers have been given a 6-month window to obtain licenses.',
      },
      {
        date: 'February 2025',
        tag: 'Circular',
        title: 'Revised Testing Frequency Norms for ISI-Marked Products',
        summary:
          'BIS has revised market surveillance and factory inspection frequency for ISI-marked products. High-risk categories will now be subject to quarterly factory audits and increased market sample testing.',
      },
      {
        date: 'January 2025',
        tag: 'Scheme Update',
        title: 'FMCS Scheme Extended to New Countries and Product Groups',
        summary:
          'The Foreign Manufacturers Certification Scheme (FMCS) has been extended to cover additional product groups. Foreign manufacturers in over 25 countries can now apply for BIS certification for their India-bound exports.',
      },
      {
        date: 'December 2024',
        tag: 'Hallmarking',
        title: 'BIS Makes Hallmarking Mandatory in 55 Additional Districts',
        summary:
          'Gold hallmarking under the BIS Hallmarking Scheme is now mandatory in 55 more districts across India, bringing the total to over 350 districts. Jewellers are required to register on the BIS portal and obtain HUID for all hallmarked jewellery.',
      },
      {
        date: 'November 2024',
        tag: 'Portal',
        title: 'BIS Launches Upgraded Manak Online Portal with New Features',
        summary:
          'The BIS Manak Online portal has been upgraded with simplified license renewal workflows, real-time application tracking, and integration with the National Single Window System (NSWS) for faster processing.',
      },
    ],
  },
  {
    id: 'fssai-updates',
    title: 'FSSAI Updates',
    description:
      'The latest regulatory updates, amendments, and circulars from the Food Safety and Standards Authority of India for food businesses.',
    articles: [
      {
        date: 'March 2025',
        tag: 'Regulation',
        title: 'FSSAI Notifies New Labelling Standards for Packaged Foods',
        summary:
          'FSSAI has notified comprehensive amendments to the Food Safety and Standards (Labelling and Display) Regulations. Key changes include mandatory front-of-pack nutrition labelling (FOPNL) and stricter rules on health and nutrition claims effective from July 2025.',
      },
      {
        date: 'February 2025',
        tag: 'Compliance',
        title: 'Schedule IV Implementation Deadline Extended for MSMEs',
        summary:
          'FSSAI has extended the deadline for MSME food businesses to comply with Schedule IV (Good Manufacturing and Hygiene Practices) by an additional 12 months, providing relief to small-scale manufacturers.',
      },
      {
        date: 'January 2025',
        tag: 'Import',
        title: 'Revised Import Clearance Framework for Food Products',
        summary:
          'FSSAI has released a revised Standard Operating Procedure for import clearance of food products. The new framework introduces risk-based inspection protocols and faster clearance for low-risk food categories at ports of entry.',
      },
      {
        date: 'December 2024',
        tag: 'Annual Return',
        title: 'FSSAI Annual Return Filing Deadline – FY 2024–25',
        summary:
          'All food businesses holding central or state FSSAI licenses are reminded to file their Annual Return (Form D-1) for FY 2024–25 by 31st May 2025. Failure to comply may result in penalties and license suspension.',
      },
      {
        date: 'November 2024',
        tag: 'Testing',
        title: 'FSSAI Expands List of Notified Food Testing Laboratories',
        summary:
          'FSSAI has notified 38 new food testing laboratories across India, expanding access for food businesses in Tier-2 and Tier-3 cities. The expanded lab network is expected to reduce testing turnaround times significantly.',
      },
    ],
  },
  {
    id: 'business-updates',
    title: 'Indian Business Updates',
    description:
      'Key regulatory, trade, and policy developments affecting businesses operating in India across sectors.',
    articles: [
      {
        date: 'March 2025',
        tag: 'Trade Policy',
        title: 'DGFT Notifies Enhanced RoDTEP Rates for Key Export Sectors',
        summary:
          'The Directorate General of Foreign Trade has announced enhanced Remission of Duties and Taxes on Exported Products (RoDTEP) rates for pharmaceutical, textile, and engineering goods, boosting export competitiveness for Indian manufacturers.',
      },
      {
        date: 'February 2025',
        tag: 'MSME',
        title: 'Revised MSME Classification Thresholds Effective April 2025',
        summary:
          'The Ministry of MSME has revised classification thresholds for Micro, Small, and Medium Enterprises. The updated investment and turnover limits will benefit a larger number of businesses, enabling them to access MSME-specific schemes and subsidies.',
      },
      {
        date: 'January 2025',
        tag: 'EPR',
        title: 'CPCB Tightens EPR Compliance Norms for Plastic Producers',
        summary:
          'The Central Pollution Control Board has issued updated guidelines for Extended Producer Responsibility (EPR) compliance for plastic packaging. Producers, importers, and brand owners must register on the EPR portal and meet annual collection targets.',
      },
      {
        date: 'December 2024',
        tag: 'IP',
        title: 'Patent Office Reduces Grant Timeline with New Fast-Track Scheme',
        summary:
          'The Indian Patent Office has introduced an enhanced Fast-Track Examination scheme, targeting patent grant within 12 months for startups, MSMEs, and individual inventors. The move aims to encourage innovation and reduce the backlog of pending applications.',
      },
      {
        date: 'November 2024',
        tag: 'Customs',
        title: 'India Customs Launches Integrated Single Window for Trade',
        summary:
          'Indian Customs has expanded the National Single Window System (NSWS) to integrate clearances from over 30 regulatory agencies, significantly reducing the time and documentation required for import and export transactions.',
      },
    ],
  },
];
