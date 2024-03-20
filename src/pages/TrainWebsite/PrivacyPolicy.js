import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container
      fluid
      className="justify-content-center align-items-center  mt-4"
    >
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="text-center">Privacy Policy</h2>
          <p className="mt-3">
            Welcome to Trains on Wheels! Please read these terms and conditions
            prior to using the products and services offered by Driftmark
            Technology. By using the product, you agree to be legally bound by
            the terms terms and conditions, privacy policy and of services
            (including without limitations all disclaimers, exclusion of
            warranties and limitations of liability contained therein). If you
            do not agree with these terms, please do not use the products and
            services offered by Driftmark Technology.
          </p>
        </Col>

        <Col xs={12} md={8} className="text-start mt-2">
          <h5>Personal Identification Information</h5>
          <p>
            We may collect personal identification information from Users in
            various ways, including but not limited to when Users visit our
            Service. Users may be asked for, as appropriate, name, email
            address, mailing address, phone number, GPS and other details. We
            will collect personal identification information from Users only if
            they voluntarily submit such information to us. Users can always
            refuse to supply personal identification information, except that it
            may prevent them from engaging in certain Service-related
            activities.
          </p>
        </Col>

        <Col xs={12} md={8} className="text-start mt-2">
          <h5>How We Use Collected Information</h5>
          <p>
            Driftmark Technology may collect and use User's personal information
            for the following purposes:
          </p>
          <ul>
            <li>
              <b>To improve customer service:</b> Information you provide helps
              us respond to your customer service requests and support needs
              more efficiently.
            </li>
            <li>
              <b>To personalize user experience:</b> We may use information in
              the aggregate to understand how our Users as a group use the
              services and resources provided on our Service.
            </li>
            <li>
              <b>To improve our Service:</b> We may use feedback you provide to
              improve our products and services.
            </li>
          </ul>
        </Col>

        <Col xs={12} md={8} className="text-start mt-2">
          <h5>How We Protect Your Information</h5>
          <p>
            We adopt appropriate data collection, storage, and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure, or destruction of your personal
            information stored on our Service.
          </p>
        </Col>

        <Col xs={12} md={8} className="text-start mt-2">
          <h5>Sharing Your Personal Information</h5>
          <p>
            We do not sell, trade, or rent User's personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates, and advertisers for the purposes outlined above.
          </p>
        </Col>

        <Col xs={12} md={8} className="text-start mt-2">
          <h5>Compliance with Children Online Privacy Protection Act</h5>
          <p>
            Our app doesn’t against with Children online privacy protection
            act.
          </p>
        </Col>

        <Col xs={12} md={8} className="text-start mt-2">
          <h5>Changes to This Privacy Policy</h5>
          <p>
            Driftmark Technology has the discretion to update this privacy
            policy at any time. We encourage Users to frequently check this page
            for any changes to stay informed about how we are helping to protect
            the personal information we collect. You acknowledge and agree that
            it is your responsibility to review this privacy policy periodically
            and become aware of modifications.
          </p>
        </Col>

        <Col xs={12} md={8} className="text-start mt-2 mb-3">
          <h5>Your Acceptance of These Terms</h5>
          <p>
            By using this Service, you signify your acceptance of this policy.
            If you do not agree to this policy, please consider to use our
            Service. Your continued use of the Service following the posting of
            changes to this policy will be deemed your acceptance of those
            changes. If you have any questions about this Privacy Policy, the
            practices of this Service, or your dealings with this Service,
            please contact us at{" "}
              <a href="mailto:driftmarktechnology@gmail.com">driftmarktechnology@gmail.com</a>
            
            .
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
