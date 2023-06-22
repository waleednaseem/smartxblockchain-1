import React from "react";

export default function ResetPassword() {
  return (
    <div className="flex justify-center m-5">
      <form className="flex flex-col gap-2">
        <input
          type={"text"}
          placeholder={"Current Password"}
          className="shadow-secondary shadow-md rounded-lg p-2 w-80"
        />
        <input
          type={"text"}
          placeholder={"New Password"}
          className="shadow-secondary shadow-md rounded-lg p-2 w-80"
        />
        <input
          type={"text"}
          placeholder={"New Password"}
          className="shadow-secondary shadow-md rounded-lg p-2 w-80"
        />
        {/* <input type={"text"} placeholder={"not"} className="invisible" /> */}
        <input
          type={"submit"}
          placeholder={"Submit"}
          className=" w-80 shadow-secondary shadow-md rounded-lg p-2 bg-primary text-texting font-bold "
        />
      </form>
    </div>
  );
}
