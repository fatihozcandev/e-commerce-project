import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useForm, get } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchRoles } from "../store/actions/clientActions";

export default function SignUp() {
  const [storeDetails, setStoreDetails] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.client.roles.roles);
  const loading = useSelector((state) => state.client.roles.loading);
  const error = useSelector((state) => state.client.roles.error);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      role_id: "customer",
      store: {
        name: "",
        phone: "",
        tax_no: "",
        bank_account: "",
      },
    },
  });

  const api = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      toast.info("Loading...");
    } else if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [loading, error]);

  const selectedRoleId = watch("role_id");

  useEffect(() => {
    setStoreDetails(selectedRoleId === "store");
  }, [selectedRoleId]);

  const onSubmit = async (data) => {
    if (confirmPassword !== data.password) {
      setConfirmError("The passwords do not match");
      return;
    }
    setIsSubmitting(true);
    setConfirmError("");

    try {
      await api.post("/signup", data);
      toast.success("Check your email to activate your account!");
      reset();
      history.push("/");
    } catch (error) {
      toast.error("The email address is already registered.");
    }
    setIsSubmitting(false);
  };

  // Error handling
  const storeNameError = get(errors, "store.name");
  const storePhoneError = get(errors, "store.phone");
  const storeTaxError = get(errors, "store.tax_no");
  const storeIbanError = get(errors, "store.bank_account");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[400px] mx-auto flex flex-col gap-y-10 px-8 my-20 py-16 bg-light-gray-2 rounded-lg"
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <h2 className="text-h2 font-bold text-second-text-color text-center">
          Super Outfits
        </h2>
        <p className="text-text-color text-paragraph text-center">
          Fill the form and join the family!
        </p>
      </div>

      <input
        type="text"
        placeholder="Name"
        className="h-12 px-4"
        {...register("name", {
          required: "Name should contain at least 3 characters.",
          minLength: {
            value: 3,
            message: "Name should contain at least 3 characters.",
          },
        })}
      />
      {errors.name && <p className="text-alert-color">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email"
        className="h-12 px-4"
        {...register("email", {
          required: true,
          pattern: /\S+@\S+\.\S+/,
          minLength: {
            value: 3,
            message: "An error in the e-mail format is found.",
          },
        })}
      />
      {errors.email && (
        <p className="text-alert-color">{errors.email.message}</p>
      )}

      <input
        type="text"
        placeholder="Password"
        className="h-12 px-4"
        {...register("password", {
          required:
            "Password should be at least 8 characters and contain upper-case, lower-case, number, and special character.",
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/i,
            message:
              "Password should be at least 8 characters and contain upper-case, lower-case, number and special character.",
          },
          minLength: {
            value: 8,
            message:
              "Password should be at least 8 characters and contain upper-case, lower-case, number and special character.",
          },
        })}
      />
      {errors.password && (
        <p className="text-alert-color">{errors.password.message}</p>
      )}

      <input
        type="text"
        placeholder="Confirm your password"
        name="confirm_password"
        className="h-12 px-4"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setConfirmError("");
        }}
      />
      {confirmError && <p className="text-alert-color">{confirmError}</p>}

      <select
        className="h-12 px-4"
        {...register("role_id", {
          required: "Please select a role",
        })}
      >
        {roles.map((data, idx) => (
          <option key={idx} value={data.code}>
            {data.code}
          </option>
        ))}
      </select>
      {errors.role_id && (
        <p className="text-alert-color">{errors.role_id.message}</p>
      )}

      {storeDetails && (
        <div className="w-full mx-auto flex flex-col gap-y-10">
          <input
            type="text"
            placeholder="Store Name"
            className="h-12 px-4 "
            {...register("store.name", {
              required: "Store Name should contain at least 3 characters.",
              minLength: {
                value: 3,
                message: "Store Name should contain at least 3 characters.",
              },
            })}
          />
          {storeNameError && (
            <p className="text-alert-color">{storeNameError.message}</p>
          )}
          <input
            type="text"
            placeholder="Store Phone"
            className="h-12 px-4 "
            {...register("store.phone", {
              required: true,
              pattern: {
                value: /^0\d{10}$/,
                message: "Please type a 11 digit valid phone number",
              },
            })}
          />
          {storePhoneError && (
            <p className="text-alert-color">{storePhoneError.message}</p>
          )}
          <input
            type="text"
            placeholder="Tax Number"
            className="h-12 px-4 "
            {...register("store.tax_no", {
              required: true,
              pattern: {
                value: /^T\d{4}V\d{6}$/i,
                message: "Please type a valid tax number",
              },
            })}
          />
          {storeTaxError && (
            <p className="text-alert-color">{storeTaxError.message}</p>
          )}
          <input
            type="text"
            placeholder="IBAN Number"
            className="h-12 px-4 "
            {...register("store.bank_account", {
              required: true,
              pattern: {
                value: /^[A-Z]{2}\d{24}$/i,
                message: "Please type a valid IBAN number",
              },
            })}
          />
          {storeIbanError && (
            <p className="text-alert-color">{storeIbanError.message}</p>
          )}
        </div>
      )}
      <button
        type="submit"
        className="h-12 btn-blue flex justify-center items-center w-full disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="border-4 border-blue-200 border-t-blue-500 h-6 w-6 rounded-full animate-spin"></div>
          </div>
        ) : (
          "Sign up"
        )}
      </button>
    </form>
  );
}
