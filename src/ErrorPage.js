const ErrorPage = () => {
  const errorPage = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontWeight: 700,
    fontSize: "16px",
  };
  return <div style={errorPage}>Oops! Page Not Found</div>;
};
export default ErrorPage;
