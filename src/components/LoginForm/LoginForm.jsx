import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../motion/motion";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideInFromRight()}
            className="text-5xl font-bold"
          >
            Login now!
          </motion.h1>
        </div>
        <motion.div
          exit="exit"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1)}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
        >
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-white">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginForm;
