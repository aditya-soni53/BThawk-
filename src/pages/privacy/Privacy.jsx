// import Hero from "../component/Hero";
import Hero from "../../component/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  CollectData,
  IntroductionData,
  Privacydata,
} from "../../helper/privacyData";
import { Helmet } from "react-helmet";
import banner1 from '../../assets/image/contact-us.webp'
import Topbanner from "../../component/layout/topBanner/Topbanner";

const Privacy = () => {

  const basePath = window.location.origin;


  return (
    <>
      <Helmet>
        <title>Privacy Policy- BTHAWK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Billing software, accounting software, accounting solutions, free GST billing software. "
        />
        <meta
          name="description"
          content="We at BTHAWK respect the privacy of your personal information and will try to make every effort to ensure your information is safe and secure with us. We also have needed licenses and copyrights for our website and application –BTHAWK."
        />
        <link rel="canonical" href={`${basePath}/privacy-policy`} />
      </Helmet>
      <Topbanner banner={banner1} />
      <section className="privacy_policy-section">
        <Hero text="" show={false} heading="Privacy Policy" />
        <div className="w-11/12 mx-auto mt-10 mb-10">
          <div className="breadcrumb bg-[#F7F7F7] p-1 px-2 flex gap-x-3 justify-center rounded-md w-max mb-4">
            <Link className="hover:text-orange-500" to="/">
              Home
            </Link>
            <span>/</span>
            <Link className="" to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <div className="lg:p-6 p-3 shadow-inner">
            <p className="text-lg">
              This is the Privacy Policy of BTHAWK, a product incorporated under
              the laws of India and having its registered office at 519, 5th
              Floor, JMD Megapolis IT Park, Sohna Road, Gurugram, Haryana
              (“Company”).
            </p>
            <ol className="mt-4 list-decimal ">
              <li className="mx-6 text-2xl">
                <h2 className="">INTRODUCTION</h2>
              </li>
              <ol className="mt-4 ">
                {IntroductionData.map((item) => (
                  <li key={item.id} className="mb-4 text-lg">
                    {item.text}
                  </li>
                ))}
              </ol>
              <li className="mx-6 text-2xl">
                <h2 className="">THE DATA WE COLLECT ABOUT YOU</h2>
              </li>
              <div className="mt-4">
                <p className="text-base">
                  We collect, process, store and use your data to provide you
                  with, or make your connection with the Services. Such
                  collected data includes:
                </p>
                <p className="mt-4">
                  • Identity and profile related data: This includes your Firm
                  name, email ID, contact number, GSTIN number, place of supply,
                  business type, firm logo.
                </p>
                <ul>
                  {Privacydata.map((item) => (
                    <li key={item.id} className="mt-3">
                      <FontAwesomeIcon icon={faArrowRight} />{" "}
                      <span className="font-bold">{item.subText}</span>
                      {item.text}
                    </li>
                  ))}
                  <li className="mt-3">
                    2.1. We need to collect your data to provide you with the
                    access to the App and Services. In certain scenarios, we
                    need to collect certain data as required by law, or under
                    the Terms. If you fail to provide us with that data as and
                    when requested by us, we will not be able to perform our
                    responsibility under the arrangement we have with you or are
                    trying to enter into with you (for example, to provide you
                    with features of the Services). In this case, we may have to
                    cancel or limit your access to the Services (or part
                    thereof).
                  </li>
                </ul>
              </div>
            </ol>
            <h2 className="mt-2 text-2xl">How we collect data about you:</h2>
            <p className="mt-3">
              We use different methods to collect and process personal data
              about you. This includes:
            </p>
            <ul className="">
              <li className="mx-4 mt-4 list-disc">
                <span className="font-bold underline">
                  Information you provide us:
                </span>{" "}
                This is the information (including identity, contact, and device
                data) you agree to give us when you use our Services or when you
                correlate with us (for example, by email or chat, or through the
                App). It includes information you provide when you register to
                use the Services, use an App feature, share data through the
                App, or when you report a problem with the App and our Services.
                If you contact us, we will keep a record of the information
                shared during the correspondence.
              </li>
              <li className="mx-4 mt-4 list-disc">
                <span className="font-bold underline">
                  Information we collect about you and your device:
                </span>{" "}
                We collect your device data such as device id in order to enable
                single login for single user, so that you can take use of our
                services (App).
              </li>
            </ul>
            <p className="text-lg">
              Please note that we do not have any control over your personal
              data that you may choose to make publicly available. For an
              example, if you post reviews, comments, or messages on the public
              sections of the app or on app store or play store, you’ll be doing
              that at your own risk. We are not responsible for third party
              misuse of any such data.
            </p>
            <h2 className="mt-4 text-2xl">
              How do we use your collected data and for what purposes
            </h2>
            <ul className="">
              <li className="mx-4 mt-4 list-disc">
                We assure that we will only use your data in accordance with the
                applicable law. Most commonly, we will only use your data to
                provide you with the best services or where we need to act in
                accordance with a wish or demand.
              </li>
              <li className="mx-4 mt-4 list-disc">
                You agree and acknowledge that by using our services and by
                registering with our app, you authorize us. This ensures that
                you are aware of all the features and services of the
                application.
              </li>
              <li className="mx-4 mt-4 list-disc">
                In common, we use your data for the following purposes and
                activities undertaken without any direct human supervision and
                control:
                <ol className="pl-6 list-decimal">
                  {CollectData.map((item) => (
                    <li key={item.id} className="mt-2">
                      {item.text}
                    </li>
                  ))}
                </ol>
              </li>
            </ul>
            <h2 className="mt-4 text-2xl">How we share your data</h2>
            <ul className="">
              <li className="mx-4 mt-4 list-disc">
                You agree and acknowledge that any and all information
                concerning to you, Whether or not you provide it directly to us,
                but not limited to personal correspondence such as emails,
                instructions from you, etc. may be collected, compiled and
                shared by us ONLY In order to deliver the services to you.
              </li>
              <li className="mx-4 mt-4 list-disc">
                You agree and acknowledge that we may share data where we are
                required by the law, any court, any government agency, or
                authority to open up such information. Such disclosures are done
                in good faith, and belief that it is necessary to do so for
                applying this policy or the terms, or in order to comply with
                any applicable law and regulations.
              </li>
            </ul>
            <h2 className="mt-4 text-2xl">Access and updating your data</h2>
            <p className="mt-3">
              You hereby give the assurance that all your data you have provided
              us with is accurate, up to the date and true. When you use our
              services, we make the best efforts to provide you with the ability
              to access and correct inaccurate and imperfect data, that subject
              to any legal requirements.
            </p>
            <h2 className="mt-4 text-2xl">Data security</h2>
            <p className="mt-3">
              We execute appropriate security measures to protect and keep in
              check with your personal data from unauthorized access, and follow
              the standards prescribed by the applicable law.
            </p>
            <h2 className="mt-4 text-2xl">Data Retention</h2>
            <p className="mt-3">
              You agree and acknowledge to that your data will be stored and
              retained by us as long as it is needed to fulfill the stated
              purpose of the application and for a reasonable period after the
              termination of your account on the app or access to the services.
            </p>
            <h2 className="mt-4 text-2xl">Business Transitions</h2>
            <p className="mt-3 font-bold">Change in privacy policy</p>

            <ul className="">
              <li className="mx-4 mt-4 list-disc">
                We keep our privacy policy under regular reviews and may change
                it over time.
              </li>
              <li className="mx-4 mt-4 list-disc">
                The terms of this policy may change and if it does then these
                will be posted on the page, or notified to you by the mail. The
                new policy may be displayed on the screen and you may be needed
                to accept the changes to keep in use of app and services.
              </li>
            </ul>
            <h3 className="mt-4 text-lg">Grievance Officer</h3>
            <p className="mt-3">
              You may contact our Grievance Officer, established in accordance
              with the Information Technology Act, 2000 and rules made there
              under, with any enquiry relating to this Policy or your personal
              data.
            </p>
            <p className="mt-5">
              <span className="font-bold">Name:</span> Mr. Zeeshan Ahmad Kadri
            </p>
            <p className="mt-2">
              <span className="font-bold">Address:</span> 519, 5th Floor, JMD
              Megapolis IT Park, Sohna Road, Gurugram, Haryana
            </p>
            <p className="mt-2">
              <span className="font-bold">Email Address:</span>{" "}
              <a
                className="text-[#E45325] hover:underline"
                href="mailto:Zeeshan@bthawk.com"
              >
                Zeeshan@bthawk.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
