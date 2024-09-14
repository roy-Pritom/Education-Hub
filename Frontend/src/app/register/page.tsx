"use client";
import { userLogin } from "@/components/Server/userlogin";
import { Button, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useForm();
  const file = watch('file'); // Watch the file input

  const languages=[
    {id:1,language:'Arabic'},
    {id:2,language:'English'},
  ]
  const secondaryLanguages=[
    {id:1,language:'German'},
    {id:2,language:'French'},
    {id:3,language:'Italian'},
    {id:4,language:'Spanish'},
  ]
  const specializations=[
    {id:1,label:'Arabic'},
    {id:2,label:'Science'},
    {id:3,label:'Math'},
  ]

  const onSubmit = async (data: any) => {
    console.log(data);
    // const res = await userLogin(data);
    // if (res?.data) {
    //   router.push("/");
    // }
  };

  return (
    <div className="">
      <div className="bg-[#00507B] p-3 text-center">
        <Link href="/" className="text-lg text-white  hover:text-red-500">
          Home
        </Link>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded  border-3 border-cyan-400">
          <h2 className="text-3xl font-bold text-center text-slate-800">Create Your Account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Email Address:
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full bg-white px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Password:
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full bg-white px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              />
            </div>
          
            <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Profile Picture:
        </label>
        <input
          type="file"
          {...register('file', { required: true })}
          className="w-full bg-white px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
        />
        
      </div>
        

            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Language Of Study:
              </label>
              <Controller
        name="language"
        control={control}
        render={({ field }) => (
          <Select
            label="Select Language"
            className="text-gray-700 focus:outline-none focus:shadow-outline"
            {...field}
          >
            {languages?.map((language) => (
              <SelectItem key={language.language} value={language.language}>
                {language.language}
              </SelectItem>
            ))}
          </Select>
        )}
      />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Specialization:
              </label>
              <Controller
        name="specialization"
        control={control}
        render={({ field }) => (
          <Select
            label="Select Specialization"
            className="text-gray-700 focus:outline-none focus:shadow-outline"
            {...field}
          >
            {specializations?.map((item) => (
              <SelectItem key={item.label} value={item.label}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        )}
      />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Secondary Language:
              </label>
              <Controller
        name="secondaryLanguage"
        control={control}
        render={({ field }) => (
          <Select
            label="Select secondary Language"
            className="text-gray-700 focus:outline-none focus:shadow-outline"
            {...field}
          >
            {secondaryLanguages?.map((item) => (
              <SelectItem key={item.language} value={item.language}>
                {item.language}
              </SelectItem>
            ))}
          </Select>
        )}
      />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-red-500 rounded-lg focus:outline-none focus:shadow-outline hover:bg-blue-600"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div className="">
          <p className="text-sm text-center mb-3">Already have an account?</p>
          <div className="flex justify-center">
            <Link href='/login'>
            <Button className="mx-auto" color="primary">Login</Button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
