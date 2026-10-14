import { useNavigate } from "react-router-dom";

const serviceList = [
  {
    id: 1,
    icon: "fa-regular fa-calendar",
    title: "Custom Event Planning",
    text: "Let us help plan your special occasions with our expert coordination and attention to detail.",
    features: ["Personalized consultation", "Theme development", "Vendor coordination", "Day-of management"],
  },
  {
    id: 2,
    icon: "fa-solid fa-cube",
    title: "Gift Customization",
    text: "Create the perfect personalized gift with our extensive customization options.",
    features: ["Custom messages", "Brand personalization", "Special packaging", "Photo additions"],
  },
  {
    id: 3,
    icon: "fa-solid fa-truck",
    title: "Same-Day Delivery",
    text: "Need it fast? We offer same-day delivery for last-minute celebrations.",
    features: ["Order by 2 PM", "Local area coverage", "Real-time tracking", "Contact-free delivery"],
  },
  {
    id: 4,
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Corporate Gifting",
    text: "Impress clients and employees with our professional corporate gift solutions.",
    features: ["Bulk ordering", "Corporate branding", "Flexible billing", "Dedicated support"],
  },
  {
    id: 5,
    icon: "fa-solid fa-gift",
    title: "Subscription Boxes",
    text: "Regular joy delivered monthly with our curated subscription gift boxes.",
    features: ["Monthly surprises", "Flexible plans", "Cancel anytime", "Special themes"],
  },
  {
    id: 6,
    icon: "fa-regular fa-heart",
    title: "Gift Consultation",
    text: "Not sure what to choose? Our gift experts will help you find the perfect present.",
    features: ["Free consultation", "Personalized recommendations", "Budget guidance", "Occasion expertise"],
  },
];

function ServiceCard({ icon, title, text, features }) {
  return (
    <div className="svc-card">
      <span className="svc-icon">
        <i className={icon}></i>
      </span>
      <h3>{title}</h3>
      <p className="svc-text">{text}</p>
      <ul className="svc-list">
        {features.map((feature) => (
          <li key={feature}>
            <i className="fa-solid fa-check"></i> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Service() {
  const navigate = useNavigate();

  return (
    <section className="svc-page">
      <div className="svc-inner">
        <h1 className="head">
          <span>Our Services</span>
        </h1>
        <p className="par">
          Beyond beautiful gifts, we offer comprehensive services to make every
          celebration extraordinary
        </p>

        <div className="svc-grid">
          {serviceList.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>

        <div className="custom-cta">
          <h2>Need a Custom Service?</h2>
          <p>
            We're always happy to accommodate special requests. Contact us to
            discuss how we can help make your occasion perfect.
          </p>
          <button onClick={() => navigate("/contact")}>Get in Touch</button>
        </div>
      </div>
    </section>
  );
}

export default Service;