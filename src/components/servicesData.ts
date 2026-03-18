import type { ServiceData } from './ServiceDetailPage';

export const SERVICES_LIST: ServiceData[] = [
  {
    id: 'bis-isi',
    title: 'BIS / ISI Certification Consultancy Services',
    description:
      'We provide end-to-end BIS/ISI certification consultancy services to help manufacturers comply with Indian Standards and secure the ISI mark for their products.',
    subtopics: [
      { label: 'New BIS / ISI License Application', desc: 'Complete assistance for first-time applicants seeking BIS/ISI certification.' },
      { label: 'Renewal BIS / ISI License Application', desc: 'Timely renewal of existing BIS/ISI licenses to ensure uninterrupted compliance.' },
      { label: 'BIS / ISI License Inclusion / Modification', desc: 'Add new products or modify existing license scope effortlessly.' },
      { label: 'BIS / ISI License Suspension Case', desc: 'Expert handling of suspension notices and reinstatement of licenses.' },
      { label: 'New BIS Hallmark Registration', desc: 'Registration assistance for jewellery hallmarking under BIS.' },
      { label: 'BIS / ISI Lab Set Up', desc: 'Guidance on establishing in-house testing labs as per BIS standards.' },
      { label: 'BIS / ISI Product Testing', desc: 'Coordinating product testing with NABL-accredited laboratories.' },
      { label: 'BIS / ISI Portal Management', desc: 'Managing your BIS portal profile, applications and communications.' },
      { label: 'BIS / ISI Compliance', desc: 'Ongoing compliance monitoring and advisory services.' },
      { label: 'BIS / ISI FMCS Application', desc: 'Foreign Manufacturers Certification Scheme (FMCS) application support.' },
    ],
  },
  {
    id: 'fssai',
    title: 'FSSAI Consultancy Services',
    description:
      'Comprehensive FSSAI licensing and compliance consultancy for food businesses across India — from startups to large manufacturers.',
    subtopics: [
      { label: 'FSSAI License Application – New', desc: 'New license applications for food businesses at state and central levels.' },
      { label: 'FSSAI License Application – Renewal', desc: 'Hassle-free renewal of FSSAI licenses before expiry.' },
      { label: 'FSSAI License Application – Modification', desc: 'Modification of license details including address, product categories, and capacity.' },
      { label: 'FSSAI Annual Return', desc: 'Filing of mandatory annual returns for licensed food businesses.' },
      { label: 'FSSAI Schedule IV Compliance', desc: 'Ensuring compliance with Good Manufacturing Practices under Schedule IV.' },
      { label: 'FSSAI Portal Management', desc: 'End-to-end management of your FoSCoS portal account and filings.' },
      { label: 'FSSAI Food Safety Audit', desc: 'Internal and third-party food safety audits to identify compliance gaps.' },
      { label: 'FSSAI Import / Export Clearance', desc: 'Assistance with FSSAI NOC for import/export of food products.' },
      { label: 'FSSAI Food Testing Lab Set Up', desc: 'Setting up NABL-accredited or FSSAI-notified food testing laboratories.' },
    ],
  },
  {
    id: 'trademark',
    title: 'Trademark Services',
    description:
      'Protect your brand identity with our expert trademark registration and management services across all product and service classes.',
    subtopics: [
      { label: 'New Trademark Registration', desc: 'End-to-end filing and registration of trademarks with the Trademark Registry.' },
      { label: 'Renewal Trademark Registration', desc: 'Timely renewal of registered trademarks to maintain your exclusive rights.' },
      { label: 'Trademark Registration Objection', desc: 'Expert representation and response drafting for examination reports and objections.' },
      { label: 'Trademark Search Report', desc: 'Comprehensive availability search before filing to minimize conflict risk.' },
      { label: 'Trademark Query', desc: 'Advisory on trademark classes, usage, licensing, and infringement issues.' },
    ],
  },
  {
    id: 'patent',
    title: 'Patent Services',
    description:
      'Secure your innovations with our expert patent filing and prosecution services, safeguarding your intellectual property rights in India and internationally.',
    subtopics: [
      { label: 'Patent Application Filing', desc: 'Drafting and filing of provisional and complete patent specifications.' },
      { label: 'Patent Search & Analysis', desc: 'Prior art searches and patentability assessments for your inventions.' },
      { label: 'Patent Prosecution', desc: 'Handling examination reports, office actions, and hearings.' },
      { label: 'Patent Renewal', desc: 'Timely payment of annuity fees to maintain granted patents.' },
      { label: 'International Patent Filing (PCT)', desc: 'Filing under the Patent Cooperation Treaty for international protection.' },
      { label: 'Patent Licensing & Assignment', desc: 'Advisory on licensing agreements and patent transfers.' },
    ],
  },
  {
    id: 'iso',
    title: 'ISO Certification',
    description:
      'Achieve internationally recognized ISO certification to demonstrate your commitment to quality, safety, and continual improvement.',
    subtopics: [
      { label: 'ISO 9001 – Quality Management', desc: 'Certification for quality management systems applicable to any organization.' },
      { label: 'ISO 22000 – Food Safety Management', desc: 'Certification for food safety management across the food supply chain.' },
      { label: 'ISO 14001 – Environmental Management', desc: 'Certification demonstrating environmental responsibility.' },
      { label: 'ISO 45001 – Occupational Health & Safety', desc: 'Certification for workplace safety management systems.' },
      { label: 'ISO Certification Renewal', desc: 'Surveillance audit coordination and certificate renewal assistance.' },
      { label: 'ISO Gap Analysis & Audit', desc: 'Pre-certification gap analysis and internal audit support.' },
    ],
  },
  {
    id: 'logo-label',
    title: 'Product Logo / Label Design',
    description:
      'Creative and compliant product logo and label design services that meet regulatory requirements while effectively communicating your brand story.',
    subtopics: [
      { label: 'Product Label Design', desc: 'FSSAI, BIS, and export-compliant product label design.' },
      { label: 'Brand Logo Design', desc: 'Professional logo creation aligned with your brand identity.' },
      { label: 'Packaging Design', desc: 'Attractive and functional packaging design for retail and industrial products.' },
      { label: 'Regulatory Label Compliance Review', desc: 'Ensuring labels meet mandatory legal requirements across applicable regulations.' },
      { label: 'Label Artwork Modification', desc: 'Updating existing labels for regulatory changes or rebranding.' },
    ],
  },
  {
    id: 'export-import',
    title: 'Export-Import License',
    description:
      'Streamline your cross-border trade with our comprehensive export-import licensing and documentation services.',
    subtopics: [
      { label: 'IEC (Import Export Code) Registration', desc: 'Obtaining the mandatory IEC from DGFT for import/export businesses.' },
      { label: 'IEC Modification / Update', desc: 'Updating IEC details with changes in business information.' },
      { label: 'RCMC (Registration cum Membership Certificate)', desc: 'Registration with relevant Export Promotion Councils.' },
      { label: 'Export Documentation', desc: 'Assistance with shipping bills, certificates of origin, and other trade documents.' },
      { label: 'DGFT Schemes & Incentives', desc: 'Advisory on RoDTEP and other DGFT export incentive schemes.' },
      { label: 'Customs Clearance Advisory', desc: 'Guidance on customs procedures and duty optimization.' },
    ],
  },
  {
    id: 'npd',
    title: 'New Product Development – Food / Packaging / Chemicals',
    description:
      'From concept to commercialization, we support the development of innovative food, packaging, and chemical products with full regulatory compliance.',
    subtopics: [
      { label: 'Food Product Development', desc: 'Formulation, recipe development, and scale-up for new food products.' },
      { label: 'Food Packaging & Labelling Design', desc: 'Designing compliant and consumer-friendly food packaging and labels.' },
      { label: 'Food Packaging Development', desc: 'Selection and development of functional food packaging materials.' },
      { label: 'Chemical Product Development', desc: 'Formulation and regulatory compliance for industrial and consumer chemical products.' },
      { label: 'Shelf Life Studies', desc: 'Accelerated and real-time shelf life testing and analysis.' },
      { label: 'Regulatory Dossier Preparation', desc: 'Compiling technical dossiers for product approvals and registrations.' },
    ],
  },
  {
    id: 'other',
    title: 'Other Regulatory Certifications',
    description:
      'A broad portfolio of additional regulatory certification services to keep your business fully compliant across all applicable frameworks.',
    subtopics: [
      { label: 'MSME / Udyam Aadhar Registration', desc: 'Registration of micro, small, and medium enterprises on the Udyam portal.' },
      { label: 'EPR (Extended Producer Responsibility)', desc: 'Compliance assistance for plastic and e-waste EPR obligations.' },
      { label: 'PCB / Pollution NOC', desc: 'Obtaining consent to establish and operate from Pollution Control Boards.' },
      { label: 'Drug License', desc: 'State and central drug license applications for manufacturers and distributors.' },
      { label: 'Legal Metrology (Weights & Measures)', desc: 'Compliance with Legal Metrology Act for packaged commodity businesses.' },
      { label: 'WPC / TEC Certification', desc: 'Wireless Planning & Coordination and Telecommunication Engineering Centre certifications.' },
    ],
  },
];
