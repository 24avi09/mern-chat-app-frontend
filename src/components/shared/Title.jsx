import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Talk Up",
  description = "this is the Chat App called Talk Up",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
