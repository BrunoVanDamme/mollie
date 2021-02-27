import React from "react";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const Hero: React.FC = ({}) => {
  const { register, errors, reset, handleSubmit, formState } = useForm();

  const onSubmit = async (values: any) => {
    // form is valid
    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/payment", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    // 5. Clear the input value and show a success message.
    // values.name.value = "";
    reset();
  };

  return (
    <>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="font-title block xl:inline">Bruno beklimt de </span>
            <span className="font-title block text-oker xl:inline">Matterhorn!?</span>
          </h1>
          <p className="my-5 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">
            Waar gaat jouw hart sneller van slaan? Ben je bezig met jouw droom na te streven? Ontdek hier hoe ik mijn
            droom najaag, hoe ik overwinningen zal vieren en teleurstellingen zal relativeren. Ik weet niet waar én hoe
            het zal eindigen. Eén ding is zeker,{" "}
            <span className="text-oker italic font-semibold">it's gonna be a heck of a ride!</span> Schrijf je snel in
            zodat je al mijn verhalen op de voet kan volgen.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start ">
              <Button
                title={"Volg mij"}
                url={"/"}
                type={"submit"}
                disabledButton={formState.isSubmitting}
                spinner={formState.isSubmitting}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
