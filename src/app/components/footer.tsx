"use client";
// import { subscribeNewsletter } from "../api/endpoint";
import { useState } from "react";
import SimpleButton from "./button";
import Checkbox from "./checkbox";
import CustomInput from "./input";
import { TryCatch } from "@/util/TryCatch";
export default function Footer() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubscriber, setisSubScriber] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await TryCatch(
      fetch("api/emailcontact/", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          is_subcriber: isSubscriber,
        }),
      })
    );
    if (response.Data !== null) {
      setMessage("thanks for getting in touch");
      //  console.log(response.data);
      setName("");
      setEmail("");
      setisSubScriber(false);
    } else {
      console.error(response.Error);
      setMessage(
        " we are having techincal diffcult tryagain later God bless you  "
      );
    }
  };
  const checkBoxOnchange = () => {
    setisSubScriber(!isSubscriber);
    console.log(isSubscriber);
  };
  return (
    <footer className="bg-gray-800 text-primary-500  py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <img
              src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mgW5KrvCJ5KhuoVSmA8xOeRf39IwYnFMvJzkC0"
              className="30 aspect-auto"
              alt="footer logo"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Keep in touch</h3>
            <p className="text-sm mb-2">
              stay up to date with the latest news and events.
            </p>
            <form className="flex flex-col sm:flex-col" onSubmit={handleSumbit}>
              <CustomInput
                name="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CustomInput
                name="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Checkbox
                inform="do want to receive our monthly newsletter "
                onChange={checkBoxOnchange}
              />
              <SimpleButton inform="Get in touch" />
            </form>
            {message && (
              <p
                className={`mt-4 text-center text-sm ${
                  message.includes("thanks") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
          <div>{/* // todo add social media links */}</div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} RCCG the praise house . All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
