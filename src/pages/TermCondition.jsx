import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  applicabilityTerms,
  desc,
  governingLaw,
  liability,
  miscellaneous,
  paymentTerms,
  property,
  termination,
  useOfApp,
  warranty,
} from "../helper/termsData";
import { Helmet } from "react-helmet";
import banner1 from '../assets/image/contact-us.jpg'
import Topbanner from "../component/layout/topBanner/Topbanner";

const ListSection = ({ title, items }) => {
  const mx =
    title === "Governing law and arbitration" || title === "Miscellaneous"
      ? "mx-9"
      : "mx-6";

  return (
    <>
      <li className={`${mx} lg:text-2xl text-xl`}>
        <h2 className="mt-4">{title}</h2>
      </li>
      {items.map((item) => (
        <p key={item.id} className="mt-3">
          {item.icon && (
            <FontAwesomeIcon icon={item.icon} color="green" className="mr-2" />
          )}
          {item.subtitle && (
            <span className="mr-2 font-bold">{item.subtitle}</span>
          )}
          {item.text}
        </p>
      ))}
    </>
  );
};

const TermCondition = () => {

  const basePath = window.location.origin;

  return (
    <>
      <Helmet>
        <title>Terms-Condition | GST billing software –BTHAWK</title>
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Billing software, accounting software, accounting solutions, free GST billing software. "
        />
        <meta
          name="description"
          content="We at BTHAWK respect the privacy of your personal information and will try to make every effort to ensure your information is safe and secure with us. We also have needed licenses and copyrights for our website and application –BTHAWK. "
        />

        <link rel="canonical" href={`${basePath}/terms-conditions`} />
      </Helmet>
      <Topbanner banner={banner1} />
      <section className="privacy_policy-section">
        <Hero text="" show={false} heading="Terms & Conditions" />
        <div className="w-11/12 mx-auto mt-10 mb-10">
          <div className="breadcrumb bg-[#F7F7F7] p-1 px-2 flex gap-x-3 justify-center rounded-md w-max mb-4">
            <Link className="hover:text-orange-500" to="/">
              Home
            </Link>
            <span>/</span>
            <Link className="" to="/terms-conditions">
              Terms & Conditions
            </Link>
          </div>
          <div className="lg:p-6 p-3 shadow-inner">
            <p className="">
              BTHAWK is a product of ZUCOL Solutions Private Limited, a company
              incorporated under the Company Act of India and having its
              registered office at 519, 5th Floor, JMD Megapolis IT Park, Sohna
              Road, Gurugram, Haryana. The Company has developed and completely
              owns BTHAWK, a GST Accounting and Billing Software application.
              The company makes the app available for download and let you use
              it on your Desktop and Mobile Phones as the end users of this app,
              subject to these terms and conditions.
            </p>
            <p className="mt-4">
              The company also handles a website{" "}
              <span className="text-[#0056b3]">BThawk</span> for branding,
              marketing, information and registration purposes only. It is
              thereby clarified that the company does not use the website for
              any purposes other than the listed purposes.
            </p>
            <p className="mt-4">
              These terms shall contribute a contract between the User and the
              App. Downloading and installing the app shall be considered to add
              up to sufficient proof that you have read, understood and accepted
              by these terms. Together with the privacy policy, these terms add
              up to the entire rights, obligations and remedies, in respect to
              the use of this app and services.
            </p>
            <p className="mt-4">
              If you have any queries about the App or these Terms, you can
              contact Us by any of the means set out in our contact details
            </p>
            <p className="mt-4">
              Any harm to any other specific requirement which may be laid out
              in these terms, your use of this app and specifically, your
              acceptance of these terms as above shall to be a representation
              from you that you are fully able to enter into the terms,
              conditions, obligations, declaration, representations and
              warranties that are set in these terms, and to comply with these
              terms.
            </p>
            <p className="mt-4">
              Headings and clauses are only for convenience and are not intended
              to be used to interpret the contents there under. Please read
              these terms fully.
            </p>
            <ol className="mt-4 list-decimal">
              <ListSection title="Description of the App" items={desc} />

              <ListSection
                title="Applicability of the Terms"
                items={applicabilityTerms}
              />

              <ListSection title="Use of the App" items={useOfApp} />

              <ListSection
                title="Consideration and Payment Terms"
                items={paymentTerms}
              />

              <ListSection
                title="Termination and Suspension"
                items={termination}
              />

              <ListSection title="Warranty Disclaimer" items={warranty} />

              <ListSection title="Intellectual Property" items={property} />

              <ListSection
                title="Limitation of Liability and Disclaimer"
                items={liability}
              />

              <li className="mx-6 text-2xl">
                <h2 className="mt-4">Indemnity</h2>
              </li>
              <p className="mt-3">
                You hereby agree to defend, indemnify and hold harmless the
                Company, its affiliates, officers, directors, employees and
                agents, from and against any and all claims, damages,
                obligations, losses, liabilities, costs or debt, and expenses
                (including but not limited to attorney’s fees) arising from: (i)
                your use of the App; (ii) your violation of any term of these
                Terms; (iii) your violation of any third party right, including
                without limitation any copyright, property, or privacy right.
                This indemnification obligation shall survive these Terms and
                use of the App.
              </p>

              <ListSection
                title="Governing law and arbitration"
                items={governingLaw}
              />
              <ListSection title="Miscellaneous" items={miscellaneous} />
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

ListSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

export default TermCondition;
