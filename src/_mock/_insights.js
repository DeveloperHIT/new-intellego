import { _mock } from "./_mock";

const TITLE = [
  "Understanding Stark Law: A Comprehensive Guide",
  "Determining Fair Market Value in Healthcare: Best Practices",
  "Avoiding Anti-Kickback Violations: Key Strategies for Healthcare Providers",
  "The Intersection of Stark Law and Fair Market Valuation",
  "5 Common Misconceptions about Anti-Kickback Regulations",
  "Challenges in Healthcare Asset Valuation: Expert Insights",
  "Ensuring Compliance: Navigating the Complexities of Stark Law",
  "Top 10 Mistakes in Healthcare Asset Valuation",
  "The Role of a Healthcare Consultant in Ensuring Anti-Kickback Compliance",
  "Case Study: Successfully Navigating Stark Law Challenges",
  "Key Differences Between Stark Law and Anti-Kickback Regulations",
  "In-depth: Tools and Technologies for Fair Market Value Assessment",
  "Evolving Healthcare Landscape: The Growing Importance of Fair Market Valuation",
  "Beyond Compliance: Strategic Benefits of Understanding Stark Law and Anti-Kickback Regulations",
  "Practical Tips for Healthcare Organizations to Stay Ahead of Regulatory Changes",
  "Demystifying the Process: How We Determine Fair Market Value",
  "The Business of Healthcare: Risk Management in the Face of Stark Law and Anti-Kickback Statute",
  "From Due Diligence to Compliance: A Holistic Approach to Healthcare Valuation",
  "Addressing Grey Areas: Expert Q&A on Stark Law and Anti-Kickback Challenges",
  "The Future of Healthcare Valuation: Trends to Watch in the Next Decade",
];

const CATEGORIES = [
  "Valuation",
  "Strategy",
  "Digital Health",
  "HCP/KOL",
  "Life Sciences",
  "Pharma",
  "Integration & Alignment",
  "Transaction Advisory",
];

const DESCRIPTION = `
<p>Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque malesuada placerat nisl.</p>

<br/>
<ul>
  <li> Updated with a more matte texture, perfect for casual styling. </li>
  <li> Durable water-repellent coating. </li>
  <li> dsdsds </li>
  <li> dsdsds </li>
  <li> Anti-static lining. </li>
</ul>
<br/>

<p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money..</p>
`;

export const _insights = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  title: TITLE[index],
  description: DESCRIPTION,
  category: CATEGORIES[index],
  caption: _mock.description(index),
  coverUrl: _mock.image.insights(index),
  label: ["sale", "new", "sale", "sale"][index] || "",
  images: [
    _mock.image.insights(1),
    _mock.image.insights(2),
    _mock.image.insights(3),
    _mock.image.insights(4),
    _mock.image.insights(5),
    _mock.image.insights(6),
    _mock.image.insights(7),
    _mock.image.insights(8),
  ],
}));
