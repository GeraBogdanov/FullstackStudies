function notification({ message }) {
  if (message === null) return null;

  const { message: msg, type: typ } = message;
  console.log(msg  +  typ);

  if (typ === "error") {
    return <div className="error">{msg}</div>;
  }
  else if (typ === "success")
    return <div className="success">{msg}</div>;
}

export default notification;
