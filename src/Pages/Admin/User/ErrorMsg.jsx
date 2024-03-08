import React from "react";

export default function ErrorMsg({ errMessage }) {
  return (
    <div>
      {errMessage.name &&
        errMessage.name.length > 0 &&
        errMessage.name.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
      {errMessage.email &&
        errMessage.email.length > 0 &&
        errMessage.email.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
      {errMessage.phone &&
        errMessage.phone.length > 0 &&
        errMessage.phone.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
      {errMessage.role &&
        errMessage.role.length > 0 &&
        errMessage.role.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
      {errMessage.position &&
        errMessage.position.length > 0 &&
        errMessage.position.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
      {errMessage.proPic &&
        errMessage.proPic.length > 0 &&
        errMessage.proPic.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
      {errMessage.username &&
        errMessage.username.length > 0 &&
        errMessage.username.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
      {errMessage.password &&
        errMessage.password.length > 0 &&
        errMessage.password.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
      {errMessage.confirmPassword &&
        errMessage.confirmPassword.length > 0 &&
        errMessage.confirmPassword.map((error) => (
          <p key={error} className="text-lg font-medium text-red-500 mb-2">
            * {error}
          </p>
        ))}
    </div>
  );
}
