import React, { useState } from "react";
import CountrySelection from "./countrySelection";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// Form Validation
import { useFormik } from "formik";
import * as Yup from "yup";

const BillingDetails = ({ isLogged }) => {
  const [createAcc, setCreateAcc] = useState(null);
  const [ship2DifferentAdd, setShip2DifferentAdd] = useState(null);
  const [orderNotes, setOrderNotes] = useState("");
  const [parent] = useAutoAnimate();

  // Form Validation
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("First Name is Required"),
    sName: Yup.string().required("Second Name is Required"),
    cName: Yup.string().optional(),
    region: Yup.string().required("Enter Your State or County"),
    city: Yup.string().required("Enter Your Town or City"),
    street: Yup.string().required("Enter Your ST Address"),
    apm: Yup.string().optional(),
    postCode: Yup.number().required("Post Code is Required"),
    phone: Yup.number().required("Phone is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    orderNotes: Yup.string().optional(),
    region_2: Yup.string().required("Enter Your State or County"),
    city_2: Yup.string().required("Enter Your Town or City"),
    street_2: Yup.string().required("Enter Your ST Address"),
    apm_2: Yup.string().optional(),
    postCode_2: Yup.number().required("Post Code is Required"),
  });

  const formik = useFormik({
    initialValues: {
      fName: "",
      sName: "",
      cName: "",
      region: "",
      city: "",
      street: "",
      apm: "",
      postCode: "",
      phone: "",
      email: "",
      orderNotes: "",
      region_2: "",
      city_2: "",
      street_2: "",
      apm_2: "",
      postCode_2: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="bill-container" ref={parent}>
      <h2 className="mb-4">Billing details</h2>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-FN">First name</label>
          <span> *</span>
        </div>
        <input
          type="text"
          id="bill-FN"
          name="bill-FN"
          {...formik.getFieldProps("fName")}
        />
        {formik.touched.fName && formik.errors.fName && (
          <div className="text-danger fw-semibold">{formik.errors.fName}</div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-LN">Last name</label>
          <span> *</span>
        </div>
        <input
          type="text"
          id="bill-LN"
          name="bill-LN"
          {...formik.getFieldProps("sName")}
        />
        {formik.touched.sName && formik.errors.sName && (
          <div className="text-danger fw-semibold">{formik.errors.sName}</div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-CN">Company name</label>
          <span> (optional)</span>
        </div>
        <input
          type="text"
          id="bill-CN"
          name="bill-CN"
          {...formik.getFieldProps("cName")}
        />
        {formik.touched.cName && formik.errors.cName && (
          <div className="text-danger fw-semibold">{formik.errors.cName}</div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div className="mb-2">
          <label htmlFor="bill-country">Country / Region</label>
          <span> *</span>
        </div>
        <CountrySelection />
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-State-County">State / County</label>
          <span> *</span>
        </div>
        <input
          type="text"
          id="bill-State-County"
          name="bill-State-County"
          {...formik.getFieldProps("region")}
        />
        {formik.touched.region && formik.errors.region && (
          <div className="text-danger fw-semibold">{formik.errors.region}</div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-TC">Town / City</label>
          <span> *</span>
        </div>
        <input
          type="text"
          id="bill-TC"
          name="bill-TC"
          {...formik.getFieldProps("city")}
        />
        {formik.touched.city && formik.errors.city && (
          <div className="text-danger fw-semibold">{formik.errors.city}</div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-ST">Street address</label>
          <span> *</span>
        </div>
        <input
          type="text"
          id="bill-ST"
          name="bill-ST"
          placeholder="House Number and street number"
          {...formik.getFieldProps("street")}
        />
        {formik.touched.street && formik.errors.street && (
          <div className="text-danger fw-semibold">{formik.errors.street}</div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-AP">Apartment, suite, unit, etc.</label>
          <span> (optional)</span>
        </div>
        <input
          type="text"
          id="bill-AP"
          name="bill-AP"
          {...formik.getFieldProps("apm")}
        />
        {formik.touched.apm && formik.errors.apm && (
          <div className="text-danger fw-semibold">{formik.errors.apm}</div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-PC">Postcode / ZIP</label>
          <span> *</span>
        </div>
        <input
          type="number"
          id="bill-PC"
          name="bill-PC"
          {...formik.getFieldProps("postCode")}
        />
        {formik.touched.postCode && formik.errors.postCode && (
          <div className="text-danger fw-semibold">
            {formik.errors.postCode}
          </div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-Num">Phone</label>
          <span> *</span>
        </div>
        <input
          type="number"
          id="bill-Num"
          name="bill-Num"
          {...formik.getFieldProps("phone")}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-danger fw-semibold">{formik.errors.phone}</div>
        )}
      </div>
      {/* ====================== */}
      <div className="field-holder mb-4">
        <div>
          <label htmlFor="bill-Email">Email address</label>
          <span> *</span>
        </div>
        <input
          type="email"
          id="bill-Email"
          name="bill-Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-danger fw-semibold">{formik.errors.email}</div>
        )}
      </div>
      {/* ====================== */}
      {!isLogged ? (
        <div className="d-flex align-items-center mb-4">
          <input
            type="checkbox"
            id="create-Acc"
            onChange={(e) => setCreateAcc(e.target.checked)}
            checked={createAcc ? true : false}
          />
          <label htmlFor="create-Acc">Create an account?</label>
        </div>
      ) : (
        ""
      )}
      {createAcc ? (
        <div className="field-holder mb-4">
          <div>
            <label htmlFor="bill-Acc-pass">Create account password</label>
            <span> *</span>
          </div>
          <input type="password" id="bill-Acc-pass" name="bill-Acc-pass" />
        </div>
      ) : (
        ""
      )}
      <div className="d-flex align-items-center mb-4">
        <input
          type="checkbox"
          id="shippingDiffAdd"
          onChange={(e) => setShip2DifferentAdd(e.target.checked)}
          checked={ship2DifferentAdd ? true : false}
        />
        <label htmlFor="shippingDiffAdd">Ship to a different address?</label>
      </div>
      {ship2DifferentAdd ? (
        <>
          <div className="field-holder mb-4">
            <div className="mb-2">
              <label htmlFor="bill-country">Country / Region</label>
              <span> *</span>
            </div>
            <CountrySelection />
          </div>
          <div className="field-holder mb-4">
            <div>
              <label htmlFor="bill-State-County">State / County</label>
              <span> *</span>
            </div>
            <input
              type="text"
              id="bill-State-County"
              name="bill-State-County"
              {...formik.getFieldProps("region_2")}
            />
            {formik.touched.region_2 && formik.errors.region_2 && (
              <div className="text-danger fw-semibold">
                {formik.errors.region_2}
              </div>
            )}
          </div>
          <div className="field-holder mb-4">
            <div>
              <label htmlFor="bill-TC">Town / City</label>
              <span> *</span>
            </div>
            <input
              type="text"
              id="bill-TC"
              name="bill-TC"
              {...formik.getFieldProps("city_2")}
            />
            {formik.touched.city_2 && formik.errors.city_2 && (
              <div className="text-danger fw-semibold">
                {formik.errors.city_2}
              </div>
            )}
          </div>
          <div className="field-holder mb-4">
            <div>
              <label htmlFor="bill-ST">Street address</label>
              <span> *</span>
            </div>
            <input
              type="text"
              id="bill-ST"
              name="bill-ST"
              placeholder="House Number and street number"
              {...formik.getFieldProps("street_2")}
            />
            {formik.touched.street_2 && formik.errors.street_2 && (
              <div className="text-danger fw-semibold">
                {formik.errors.street_2}
              </div>
            )}
          </div>
          <div className="field-holder mb-4">
            <div>
              <label htmlFor="bill-AP">Apartment, suite, unit, etc.</label>
              <span> (optional)</span>
            </div>
            <input
              type="text"
              id="bill-AP"
              name="bill-AP"
              {...formik.getFieldProps("apm_2")}
            />
            {formik.touched.apm_2 && formik.errors.apm_2 && (
              <div className="text-danger fw-semibold">
                {formik.errors.apm_2}
              </div>
            )}
          </div>
          <div className="field-holder mb-4">
            <div>
              <label htmlFor="bill-PC">Postcode / ZIP</label>
              <span> *</span>
            </div>
            <input
              type="number"
              id="bill-PC"
              name="bill-PC"
              {...formik.getFieldProps("postCode_2")}
            />
            {formik.touched.postCode_2 && formik.errors.postCode_2 && (
              <div className="text-danger fw-semibold">
                {formik.errors.postCode_2}
              </div>
            )}
          </div>
        </>
      ) : (
        ""
      )}
      <div className="field-holder mb-4">
        <div className="mb-1">
          <label htmlFor="Order notes">Order notes</label>
          <span> (optional)</span>
        </div>
        <textarea
          name="Order notes"
          id="Order notes"
          rows="6"
          className="w-100"
          placeholder="Notes about your order, e.g. special notes for delivery"
          value={orderNotes}
          onChange={(e) => setOrderNotes(e.target.value)}
          {...formik.getFieldProps("orderNotes")}
        />
        {formik.touched.orderNotes && formik.errors.orderNotes && (
          <div className="text-danger fw-semibold">
            {formik.errors.orderNotes}
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingDetails;
